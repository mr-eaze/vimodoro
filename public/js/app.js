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
	App.users.fetch(
		{success: function() {
			App.currentUser = App.users.at(0);
			App.preferences = new App.Views.Preferences({model: App.currentUser});
		}
	});
});