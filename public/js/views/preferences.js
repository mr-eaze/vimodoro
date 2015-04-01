App.Views.Preferences = Backbone.View.extend({
	el: '#preferences-view',
	model: App.currentUser,
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
		App.currentUser.set('interval', newInterval);
		App.currentUser.set('duration', newDuration);
		debugger;
		// this.updateInterval(newInterval);
		// this.updateDuration(newDuration);
		$('#preferences-view').html('');
		// Start Interval!!!
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