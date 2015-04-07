var App = {
	Models: {},
	Collections: {},
	Views: {}
};

$(function() {
	console.log('Loaded, bro.');
	App.users = new App.Collections.Users();
	App.usersView = new App.Views.Users({collection: App.users});
	App.keywords = new App.Collections.Keywords();
});

App.saveCookie = function() {
	App.keywords.each(function(keyword) {
		$.cookie(keyword.get('uri'), '1');
	});
};