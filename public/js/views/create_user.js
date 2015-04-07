App.Views.createUser = Backbone.View.extend({
	
	el: '#create-user-view',

	initialize: function() {
		console.log('create user view created');
		this.template = Handlebars.compile($('#create-user-template').html());
		this.render();
	},

	render: function() {
		this.$el.append(this.template);
	},

	events: {
		'keypress': 'enterButton',
		'click #create-user-button': 'createUser'
	},

	createUser: function() {
		var newUser = $('#name-input').val();
		$('#name-input').val('');
		$('#name-input').prop('placeholder', 'Create New User');
		App.users.create(new App.Models.User({name: newUser}));
		App.currentUser = App.users.findWhere({name:newUser});
		this.$el.hide();
		App.usersView.$el.hide();
		App.preferences = new App.Views.Preferences();
	},

	enterButton: function(e) {
		if (e.keyCode === 13) {
			this.createUser();
		}
	}
});