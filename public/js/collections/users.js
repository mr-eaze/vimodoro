App.Collections.Users = Backbone.Collection.extend({
	url: '/users',
	initialize: function() {
		console.log('users collection created');
		this.fetch();
	}
});