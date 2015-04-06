$(function() {
	console.log('App working');
	App.router = new App.Routers.Router();
	Backbone.history.start();
});

var App = {
	Models: {},
	Collections: {},
	Views: {},
	Routers: {}
};

App.saveCookie = function() {
	App.keywords.each(function(keyword) {
		$.cookie(keyword.get('term'), '1');
	});
};
