var express = require('express');

var routes = express.Router();

routes.get("/",function(req,res) {
   res.redirect("/map_display");
});

routes.get("/map_display",function(req,res) {
   res.render("map_display");
});

routes.get("/about",function(req,res) {
   res.render("about");
});

routes.get("/state_cities_weather",function(req,res) {
   res.render("state_cities_weather",{object_id1: req.query.object_id1,city_name: req.query.city_name});
});


module.exports = routes;
