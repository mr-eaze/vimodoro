var App = {
	Models: {},
	Collections: {},
	Views: {},
	Routers: {}
};

// var iframe;
// var player;
// var status;

$(function() {
	console.log('Loaded, bro.');
	App.keywords = new App.Collections.Keywords();
	App.users = new App.Collections.Users();
	App.userPreviewView = new App.Views.UserPreview({collection: App.users});
	// iframe = $('iframe');
 //  player = $(iframe);
 //  status = $('.status');

	
});