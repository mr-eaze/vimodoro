App.Views.UserPreview = Backbone.View.extend({
	
	el: '#login-view',

	initialize: function() {
		console.log('New User Preview Created');
		userTemplate = Handlebars.compile($('#user-preview-template').html());
		this.listenTo(this.collection, 'sync', this.renderUsers);
	},

	renderUsers: function() {
		this.collection.each(function(user) {
			this.$el.prepend(
				userTemplate(user.toJSON())
			)
		}.bind(this));
	},

	events: {
		'click #create-user': 'createUser',
		'click .user': 'hideView'
	},

	createUser: function() {
		// TRY COLLECTION.CREATE()
		var newUser = $('#name').val();
		$.ajax({
			url: '/users',
			method: 'POST',
			data: {
				name:newUser,
				interval:60,
				duration:60
			}
		});
		this.$el.hide();
	},

	hideView: function() {
		this.$el.hide();
	}
});