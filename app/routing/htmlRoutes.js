var path = require("path");

//Routes for the two html pages
module.exports = function(app){
    //page that displays the survey form
    app.get("/survey", function(req, res){
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

    //home page will be the default route
    app.get("*", function(req, res){
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
}