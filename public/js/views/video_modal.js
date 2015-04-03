App.Views.VideoModal = Backbone.View.extend({

	el: '#video-modal-view',

	initialize: function() {
		this.template = Handlebars.compile( $('#video-modal-template').html() );
		this.renderView();
	},

	renderView: function() {
		this.$el.html(this.template(App.currentVideo));
		this.$el.show();
	},

	// go back to interval view
	goBacktoInterval: function() {
		this.$el.hide();
	},

	// go back to preferences view
	goBacktoPreferences: function() {
		this.$el.hide();
	}

});
