App.Views.Preferences = Backbone.View.extend({
	el: '#preferences-view',
	initialize: function() {
		console.log('new preferences view created');
		this.template = Handlebars.compile($('#preferences-template').html());
		this.render();
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
		App.currentUser.save({
			'interval': parseInt($('#interval-input').val()),
			'duration': parseInt($('#duration-input').val())
		});
		this.getVideos();
		this.$el.hide();
		App.timer = new App.Views.IntervalTimer();
		App.timer.render();
		// App.timer.$el.show();
	},

	pickRandomInterest: function() {
		var interests = App.currentUser.get('keywords');
		return interests[Math.floor(Math.random() * interests.length)].term;
	},

	getVideos: function() {
		console.log('getting videos...');
		// debugger;
		var keyword = this.pickRandomInterest();
		$.ajax({
			url: '/videos',
			method: 'GET',
			data: {
				search_term: keyword,
				api: 1,
				page: parseInt($.cookie(keyword))
			}
		})
		// .done(this.pickOneVideo.bind(this));
		.done(function(data, status, jqXHR) {
			// debugger;
			this.pickOneVideo(data, keyword);
		}.bind(this));
	},

	pickOneVideo: function(data, keyword) {
		console.log('videos gotten');
		var videos = data.map(function(video) {
			return {
				uri: video.uri,
				duration: video.duration,
				html: video.embed.html
			};
		});
		var currentBestVideo = {};
		var currentBestDurationDifference = 60;

		videos.forEach(function(video) {
			var durationDifference = Math.abs(video.duration - (App.currentUser.get('duration') * 60));
			if (durationDifference < currentBestDurationDifference) {
				currentBestVideo = video;
				currentBestDurationDifference = durationDifference;
			}
		}.bind(this));
		if (!currentBestVideo.html) {
			$.cookie(keyword, parseInt($.cookie(keyword))+1);
			this.getVideos();
		} else {
			$.cookie(keyword, parseInt($.cookie(keyword))+1);
			App.currentVideo = currentBestVideo;
			this.parseVideoHtml();
		}
	},

	parseVideoHtml: function() {
		// App.currentVideo.html;
		$.ajax({
			url: 'https://vimeo.com/api/oembed.json',
			method: 'GET',
			data: {
				url: App.currentVideo.html.split('"')[1],
				autoplay: 1,
				api: 1,
				maxwidth: 640,
				maxheight: 360,
				player_id: 'player1'
			}
		})
		.done(function(data) {
			App.currentVideo = data;
		});
	}
});