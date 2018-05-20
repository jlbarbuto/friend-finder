var surveyData = require("../data/friends.js");

//Routes for the api data
module.exports = function(app){
    app.get("/api/friends", function(req, res){
        res.json(surveyData);
    });

    app.post("/api/friends", function(req, res){
        surveyData.push(req.body);
    });
}