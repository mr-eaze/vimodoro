App.Views.VideoModal = Backbone.View.extend({

	el: '#video-modal-view',

	initialize: function() {
		this.template = Handlebars.compile( $('#video-modal-template').html() );
		this.renderView();
	},

	renderView: function() {
		this.$el.html(this.template(App.currentVideo));
		this.$el.show();
    $('iframe').ready(function() {
			$('iframe').attr('id', 'player1');
			this.iframe = $('iframe')[0];
	    this.player = $f(this.iframe);
    	this.player.addEvent('ready', function() {
    		this.player.addEvent('finish', this.goBacktoInterval.bind(this));
    	}.bind(this));
    }.bind(this));
	},

	// go back to interval view
	goBacktoInterval: function(id) {
		this.$el.hide();
		App.preferences.getVideos();
		App.timer.render();
		console.log('done!');
	},

	// go back to preferences view
	goBacktoPreferences: function() {
		this.$el.hide();
		App.preferences.render();
	}

});


// template datathatgoesintothetemplate

// template({key: value, key: value})

// App.currentUser.toJSON()