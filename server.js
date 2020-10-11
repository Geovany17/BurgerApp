const express = require("express");

const PORT = process.env.PORT || 3000;

const app = express();

//serves static files
app.use(express.static(__dirname + "/public"));

//parse application body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//set up handlebars
const exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//import routes and give the server access to them
var routes = require("./controllers/burgers_controller.js");
app.use(routes);

//listen
app.listen(process.env.PORT || 3000, function () {
  console.log(
    "Express server listening on port %d in %s mode",
    this.address().port,
    app.settings.env
  );
});
