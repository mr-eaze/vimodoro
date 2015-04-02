App.Views.VideoModal = Backbone.View.extend({

	el:'#video-modal-view',

	initialize: function() {
		this.template = Handlebars.compile( $('#video-modal-template').html() );
		
	}

});