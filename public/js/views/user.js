App.Views.User = Backbone.View.extend({

	// events: {
	// 	'click #new-user': 'setUser'
	// },
	
	initialize: function() {
		this.template = Handlebars.compile($('#user-preview-template').html());
		this.render();
	},

	render: function() {
		this.$el.html( this.template (this.model.toJSON() ) );
	},

	// setUser: function() {
	// 	var user = $('#user-name').text();
	// 	App.currentUser = this.collection.where({ name: user });
	// 	this.$el.hide();
	// }
});