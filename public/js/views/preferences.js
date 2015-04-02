App.Views.Preferences = Backbone.View.extend({
	el: '#preferences-view',
	initialize: function() {
		console.log('new preferences view created');
		this.template = Handlebars.compile($('#preferences-template').html());
		this.render();
	},

	render: function() {
		var html = this.template(this.model.toJSON());
		$('#preferences-view').html('');
		$('#preferences-view').append(html);
	},

	events: {
		'click #start-interval': 'startInterval'
	},

	startInterval: function() {
		var newInterval = parseInt($('#interval-input').val());
		var newDuration = parseInt($('#duration-input').val());
		this.model.set('interval', newInterval);
		this.model.set('duration', newDuration);
		this.model.sync('update', App.currentUser);
		// this.updateInterval(newInterval);
		// this.updateDuration(newDuration);
		this.getVideos();
		this.$el.hide();
		App.timer.render();
		App.timer.$el.show();
	},

	pickRandomInterest: function() {
		var interests = this.model.get('keywords');
		debugger;
		return interests[Math.floor(Math.random() * interests.length)].term;
	},

	getVideos: function() {
		var keyword = this.pickRandomInterest();
		debugger;
		$.ajax({
			url: '/videos',
			method: 'GET',
			data: {
				search_term: keyword
			}
		})
		.done(this.pickOneVideo.bind(this));
	},

	pickOneVideo: function(data) {
		var videos = data.map(function(video) {
			return {
				uri: video.uri,
				duration: video.duration,
				html: video.embed.html
			};
		});
		var currentBestVideo = {};
		var currentBestDuration = 100000;
		for (var i = 0; i < videos.length; i++) {
			if (Math.abs(videos[i].duration - (this.model.get('duration') * 60)) < currentBestDuration) {
				currentBestVideo = videos[i];
			}
		}
		App.currentVideo = currentBestVideo;
		// RENDER INTERVAL VIEW
	}

	// updateInterval: function(newInterval) {
	// 	$.ajax({
	// 		url: '/users/' + App.currentUser.get('id'),
	// 		method: 'PUT',
	// 		data: {interval: newInterval}
	// 	});
	// },

	// updateDuration: function(newDuration) {
	// 	$.ajax({
	// 		url: '/users/' + App.currentUser.get('id'),
	// 		method: 'PUT',
	// 		data: {duration: newDuration}
	// 	});
	// }
});