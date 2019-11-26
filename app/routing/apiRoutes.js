var friendsData = require("../data/friends.js");

module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });

  app.post("/api/friends", function(req, res) { 
    var totalDifference = 0;
    var bestMatch = {
      name: " ",
      photo: " ",
      difference: 1000
    }
    var userData = body.req;
    var userName = userData.name;
    var userScores = userData.scores;

    
  });

//   app.post("/api/clear", function(req, res) {
//     // Empty out the arrays of data
//     tableData.length = 0;
//     waitListData.length = 0;

//     res.json({ ok: true });
//   });
};
