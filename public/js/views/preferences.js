App.Views.Preferences = Backbone.View.extend({
	model: App.currentUser,
	initialize: function() {
		console.log('new preferences view created');
		this.template = Handlebars.compile($('#preferences').html());
	},
	render: function() {
		var html = this.template(this.model.toJSON());
		$('#main-view').html('');
		$('#main-view').append(html);
	}
});