App.Collections.Users = Backbone.Collection.extend({
	url: '/users',
	comparator: 'name',
	initialize: function() {
		console.log('users collection created');
		this.fetch(
			{success: function() {
				App.currentUser = App.users.at(0);
				// 10-15 CAN PROBABLY BE MOVED OUT OF THIS CALLBACK
				App.preferences = new App.Views.Preferences({model: App.currentUser});
				App.preferences.$el.hide();
				App.keywords.fetch(
					{success: function() {
							App.timer = new App.Views.IntervalTimer();
					}
				});
			}
		});
	}
});