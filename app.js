var express = require('express');

var http = require('http');

var path = require('path');

var routes = require("./routes");

var app = express();

app.use(express.static(path.resolve(__dirname,"public")));


app.set("view engine","ejs");

app.set("views",path.resolve(__dirname,"views"));

app.use(routes);

app.use(function(req,res) {
   res.status(404).send("404 not found");
});


http.createServer(app).listen(3000);
