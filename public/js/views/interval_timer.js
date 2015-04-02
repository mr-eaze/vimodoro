App.Views.IntervalTimer = Backbone.View.extend({

	el: '#display',

	events: {
		// 'click #go-back-button': .goBack()
	},

	initialize: function() {
		console.log('Interval Timer view launched');
		this.model    = App.currentUser;
		this.template = Handlebars.compile($('#interval-timer-template').html());
		this.render();
	},

	render: function() {
		console.log('rendered');
		var renderedTemplate = this.template( this.model.toJSON() );
		this.$el.html( renderedTemplate );
		this.startTimer();
	},

	startTimer: function() {
		console.log('start timer');

		setInterval( function() { 
			console.log("another second has passed"); 
			
			var seconds = parseInt( $('#timer-seconds').html() );
			console.log(seconds);
				
				if (seconds === 0) {
					seconds = 59;
					var minutes = parseInt( $('#timer-minutes').html() );
					minutes -= 1;
					$('#timer-minutes').html(minutes);
				} else {
					seconds -= 1;
				};
				$('#timer-seconds').html(seconds);

		}, 1000);

		setInterval( function() { alert("video launched"); }, (this.intervalTime * 1000) );
	},

	launchVideo: function() {
		// launch video modal view
		alert("video launched");
	}

});



