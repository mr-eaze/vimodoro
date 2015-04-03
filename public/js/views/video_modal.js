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
	    debugger;
    	this.player.addEvent('ready', function() {
    		debugger;
    		this.player.addEvent('finish', this.onFinish);
    	}.bind(this));
    }.bind(this));
	},

	onFinish: function(id) {
    alert('finished');
    status.text('finished');
  },

	// go back to interval view
	goBacktoInterval: function() {
		// this.$el.hide();
		// App.timer.render();
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