
var models  = require('./models');
var User    = models.users;
var Keyword = models.keywords;

// var users = [
// 	{
// 		name: 'Adam Gallinat',
// 		interval: 44,
// 		duration: 8,
// 	},
// 	{
// 		name: 'Eric Vince',
// 		interval: 33,
// 		duration: 5,
// 	},
// 	{
// 		name: 'Mark Smukler',
// 		interval: 22,
// 		duration: 18,
// 	}
// ]

var keywords = [
	{
		term: 'Animation'
	},
	{
		term: 'Arts'
	},
	{
		term: 'Comedy'
	},
	{
		term: 'Documentary'
	},
	{
		term: 'Fashion'
	},
	{
		term: 'Food'
	},
	{
		term: 'Music'
	},
	{
		term: 'Narrative'
	},
	{
		term: 'Personal'
	},
	{
		term: 'Journalism'
	},
	{
		term: 'Sports'
	},
	{
		term: 'Surfing'
	},
	{
		term: 'Travel'
	},
	{
		term: 'Video Games'
	}
]

var seedDatabase = function () {
	// users.forEach( function (userData) {
	// 	User
	// 		.create({
	// 			name: 		userData.name,
	// 			interval: userData.interval,
	// 			duration: userData.duration
	// 		});
	// });
	keywords.forEach( function (keyword) {
		Keyword
			.create({
				term: keyword.term
			});
	});
};

seedDatabase();




















