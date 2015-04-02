App.Views.UserPreview = Backbone.View.extend({
	
	el: '#preview-list-view',

	initialize: function() {
		console.log('New User Preview Created');
		userTemplate = Handlebars.compile($('#user-preview-template').html());
		this.listenTo(this.collection, 'sync', this.renderUsers);
	},

	renderUsers: function() {
		this.$el.html('');
		this.collection.each(function(user) {
			this.$el.append(
				userTemplate(user.toJSON())
			)
		}.bind(this));
	}
});