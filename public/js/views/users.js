App.Views.Users = Backbone.View.extend({
	
	el: '#login-view',

	initialize: function() {
		console.log('New User Preview Created');
		userTemplate = Handlebars.compile($('#user-preview-template').html());
		this.listenTo(this.collection, 'sync', this.renderAll);
	},

	renderAll: function() {
		this.collection.each(this.renderOne, this);
	},

	renderOne: function(user) {
		this.$el.append(new App.Views.User({model: user}).$el);
	},

	events: {
		'click #create-user': 'createUser',
		'click .user-name': 'setUser'
	},

	createUser: function() {
		var newUser = $('#name').val();
		var newUserModel = new App.Models.User({name:newUser});
		App.currentUser = this.collection.create(newUserModel);
		this.$el.hide();
	}
});