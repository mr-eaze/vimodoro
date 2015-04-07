App.Routers.Router = Backbone.Router.extend({

	routes: {
		''				 : 'index',
		'pref/:id' : 'preferences',
		'go/:id'	 : 'go'
	},

	initialize: function() {
		App.keywords = new App.Collections.Keywords();
		App.users = new App.Collections.Users();
		App.usersView = new App.Views.Users({collection: App.users});
		App.users.fetch();
	},

	index: function() {
		console.log('everything good here');
		if (App.preferences) {
			App.preferences.$el.hide();
		}
		if (App.timer) {
			App.timer.stopTimer();
			App.timer.$el.hide();
		}
		App.usersView.$el.show();
		App.createUserView.$el.show();
	},

	preferences: function(id) {
		if (App.timer) {
			App.timer.stopTimer();
		}
		App.users.fetch({
			success: function() {
				App.currentUser = App.users.findWhere({id: parseInt(id)});
				App.usersView.$el.hide();
				App.createUserView.$el.hide();
				App.preferences = new App.Views.Preferences();
			}
		});
	}

});