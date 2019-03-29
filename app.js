//jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const ejs = require("ejs");

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));

//////////////////// routes ////////////////////
app.get('/', function(req, res){
  res.render("home");
});

app.get('/about', function(req, res){
  res.render("about");
});


app.get('/project', function(req, res){
  res.render("project");
});

app.get('/contact', function(req, res){
  res.render("contact");
});

app.get('/secrets', function(req, res){

  res.render("secrets");
});
////////////////// app listening on port //////////////////////////
app.listen(port, function(){
  console.log(`server started and is listening on ${port}`);
});
