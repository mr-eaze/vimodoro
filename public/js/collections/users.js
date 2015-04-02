App.Collections.Users = Backbone.Collection.extend({
	url: '/users',
	comparator: 'name',
	initialize: function() {
		console.log('users collection created');
		// this.fetch();
	}
});