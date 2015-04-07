App.Views.Users = Backbone.View.extend({
	
	el: '#login-view',

	initialize: function() {
		console.log('New User List View Created');
		this.listenTo(this.collection, 'sync', this.renderAll);
		this.listenTo(this.collection, 'sync', this.createUser);
	},

	renderAll: function() {
		this.collection.each(this.renderOne, this);
	},

	renderOne: function(user) {
		this.$el.append(new App.Views.User({model: user}).$el);
	},

	createUser: function() {
		App.createUserView = new App.Views.createUser();
	}
});