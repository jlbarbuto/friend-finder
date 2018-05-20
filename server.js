//dependencies
var express = require("express");
var bodyParser = require("body-parser");

//configure express
var app = express();

//sets the port to be listening on
var PORT = process.env.PORT || 8080;

//data parsing compatibility
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//pointers for the files that contain the routes for the page
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

//listener to start the server & functionality
app.listen(PORT, function(){
    console.log("App listening on PORT: " + PORT);
});