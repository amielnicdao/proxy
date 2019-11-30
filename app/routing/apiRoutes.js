var friendsData = require("../data/friends");

module.exports = function (app) {
	app.get("/api/friends", function (req, res) {
		res.json(friendsData);
	});

	app.post("/api/friends", function (req, res) {
		var user = req.body;
		var userScore = user.scores;
		var totalDifference;
		var bestMatch = {
			name: "",
			photo: "",
			difference: 100
		};

		for (var i = 0; i < friendsData.length; i++) {
			totalDifference = 0;

			for (var j = 0; j < friendsData[i].scores.length; j++) {
				totalDifference += Math.abs(friendsData[i].scores[j] - userScore[j]);

				if (totalDifference <= bestMatch.difference) {
					bestMatch.name = friendsData[i].name,
						bestMatch.photo = friendsData[i].photo,
						bestMatch.difference = totalDifference
				}
			}
		};

		friendsData.push(user);
		res.json(bestMatch);
		console.log(bestMatch);
	});
};


