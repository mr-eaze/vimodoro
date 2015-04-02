App.Views.UserPreview = Backbone.View.extend({
	
	el: '#preview-list-view',

	initialize: function() {
		console.log('New User Preview Created');
		userTemplate = Handlebars.compile($('#user-preview-template').html());
		this.getUserData();
	},

	getUserData: function() {
		$.get('/users').done(this.renderUsers);
	},

	renderUsers: function(usersData) {
		for (var i = 0; i < usersData.length; i++) {
			$('#preview-list-view').append(
				userTemplate(usersData[i])
			);
		};
	}
});