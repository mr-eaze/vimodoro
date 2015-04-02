var App = {
	Models: {},
	Collections: {},
	Views: {},
	Routers: {}
};

$(function() {
	console.log('Loaded, bro.');
	App.users = new App.Collections.Users;
	App.userPreviewView = new App.Views.UserPreview({ collection: App.users });
	// App.usersCollectionView = new App.Views.UsersCollectionList({ collection: App.users });
	// var userCollectionTemplate = Handlebars.compile($('#user-preview-template').html());
});