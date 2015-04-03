App.Views.Preferences = Backbone.View.extend({
	el: '#preferences-view',
	initialize: function() {
		console.log('new preferences view created');
		this.template = Handlebars.compile($('#preferences-template').html());
	},

	render: function() {
		var html = this.template(App.currentUser.toJSON());
		$('#preferences-view').html('');
		$('#preferences-view').append(html);
		App.keywordsView = new App.Views.KeywordsView({collection: App.keywords});
		this.$el.show();
	},

	events: {
		'click #start-interval': 'startInterval'
	},

	startInterval: function() {
		this.model.save({
			'interval': parseInt($('#interval-input').val()),
			'duration': parseInt($('#duration-input').val())
		});
		this.getVideos(1);
		this.$el.hide();
		App.timer.render();
		// App.timer.$el.show();
	},

	pickRandomInterest: function() {
		var interests = this.model.get('keywords');
		return interests[Math.floor(Math.random() * interests.length)].term;
	},

	getVideos: function(pageNumber) {
		console.log('getting videos...');
		// debugger;
		var keyword = this.pickRandomInterest();
		$.ajax({
			url: '/videos',
			method: 'GET',
			data: {
				search_term: keyword,
				api: 1,
				page: pageNumber
			}
		})
		// .done(this.pickOneVideo.bind(this));
		.done(function(data, status, jqXHR) {
			// debugger;
			this.passThroughPageNumber(data, pageNumber);
		}.bind(this));
	},

	passThroughPageNumber: function(data, pageNumber) {
		// debugger;
		this.pickOneVideo(data, pageNumber);
	},

	pickOneVideo: function(data, pageNumber) {
		// debugger;
		console.log('videos gotten');
		var videos = data.map(function(video) {
			return {
				uri: video.uri,
				duration: video.duration,
				html: video.embed.html
			};
		});
		var currentBestVideo = {duration: 60};

		videos.forEach(function(video) {
			if (Math.abs(video.duration - (App.currentUser.get('duration') * 60)) < currentBestVideo.duration) {
				currentBestVideo = video;
			}
		}.bind(this));
		if (!currentBestVideo.html) {
			debugger;
			this.getVideos(pageNumber + 1);
		} else {
			debugger;
			App.currentVideo = currentBestVideo;
			this.parseVideoHtml();
		}
	},

	parseVideoHtml: function() {
		App.currentVideo.html;
		$.ajax({
			url: 'https://vimeo.com/api/oembed.json',
			method: 'GET',
			data: {
				url: App.currentVideo.html.split('"')[1],
				autoplay: 1,
				api: 1,
				player_id: 'player1'
			}
		})
		.done(function(data) {
			App.currentVideo = data;
		});
	}
});