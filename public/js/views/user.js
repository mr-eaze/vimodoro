App.Views.User = Backbone.View.extend({

	events: {
		'click': 'setUser'
	},
	
	initialize: function() {
		this.template = Handlebars.compile($('#user-preview-template').html());
		this.render();
	},

	render: function() {
		this.$el.html( this.template (this.model.toJSON() ) );
	},

	setUser: function() {
		App.currentUser = this.model;
		App.usersView.$el.hide();
		App.preferences.render();
	}
});