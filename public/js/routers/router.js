App.Routers.Router = Backbone.Router.extend ({

	routes: {
    ''              : 'login',
    'pref/:user_id' : 'preferences',
    'play/:user_id' : 'play'
  },

  initialize: function() {
  	console.log('new Router created');
  	// these were moved from app.js
  	// and replaced with -> App.router = new App.Routers.Router();
  	App.keywords  = new App.Collections.Keywords();
	  App.users     = new App.Collections.Users();
	  App.usersView = new App.Views.Users({collection: App.users});
  },

  index: function() {
  	console.log('index');
  },

  preferences: function (user_id) {
  	
  	console.log('preferences');

  	var user_id = App.currentUser.get('id');
  	var name    = App.currentUser.get('name');

  	console.log( name + 'preferences');

  },

  play: function() {
  	console.log('play');
  }

});