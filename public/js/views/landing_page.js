App.Views.LandingPage = Backbone.View.extend({

	el: '#landing-page-view',

	events: {
		'click body': 'outroLogo'
	},

	initialize: function() {
		this.template = Handlebars.compile( $('#landing-page-template').html() );
		this.renderView();
	},

	renderView: function() {
		this.$el.html(this.template(App.LandingPage));
		this.$el.show();
		this.introLogo();
	},

	introLogo: function() {
		// animate fade in
		setInterval(function() {
			$('#logo-container').css("class", "animated bounceInUp"); 
		}, 3000);
	},

	outroLogo: function() {
		// animate fade out
		$('#logo-container').css("class", "animated bounceOutUp");
	},

	launchPreferences: function() {
		alert("you\'re about to launch preferences");
		this.$el.hide();
		App.preferences.$el.show();
		// go to preferences view
	},






});