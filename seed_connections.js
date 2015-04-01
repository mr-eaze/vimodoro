
var models  = require('./models');
var User    = models.users;
var Keyword = models.keywords;

var seedConnections = function () {
	User.findOne( {
		where: {
			name: 'Adam Gallinat'
		}
	}).then(function (user) {
		Keyword.findOne(1)
			.then(function (keyword) {
				user.addKeyword(keyword);
			});
	});
};