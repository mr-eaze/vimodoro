App.Routers.Router = Backbone.Router.extend ({

	routes: {
    ''              : 'users',
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
    App.timer     = new App.Views.IntervalTimer();
  },

  users: function() {
  	console.log('users');
    App.Views.User.initialize();
  },

  preferences: function (user_id) {
  	
  	console.log(user_id);


  	// var user_id = App.currentUser.get('id');
  	// var name    = App.currentUser.get('name');

  	// console.log( name + 'preferences');

  },

  play: function(user_id) {
  	console.log('play');
    App.timer.render(App.currentUser);
    App.preferences.startInterval();
    App.preferences.render();
    $('#users-view , #create-user-view').hide();
    
  }

});