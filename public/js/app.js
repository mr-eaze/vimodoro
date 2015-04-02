var App = {
	Models: {},
	Collections: {},
	Views: {},
	Routers: {}
};

$(function() {
	console.log('Loaded, bro.');
	App.keywords = new App.Collections.Keywords();
	App.users = new App.Collections.Users();
	App.usersView = new App.Views.Users({collection: App.users});
	
});