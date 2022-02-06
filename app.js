//jshint esversion:6

// * NODE DEPENDENCIES DECLARATIONS
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const app = express();

// -* Not sure what this does lol
app.use(bodyParser.urlencoded({
  extended: true
}));

// -* I believe this is set to make sure EJS is set
app.set('view engine', 'ejs');

// -* This makes sure that any Express calls for files will always set the public folder as the root
app.use(express.static(__dirname + `/public`));

// * DEMO DATA
const data = require(`${__dirname}/public/javascript/data.js`);

// * EXPRESS ROUTES
// -* Home Route
app.get("/", function (req, res) {
  console.log(`GET request for Home Page`);
  console.log(`\n`);

  console.log(data.posts); 

  res.render(`modules/home`, {
    sample: data.homeStartingContent,
    postsArray: data.posts
  });
});

// -* About Route
app.get("/about", function (req, res) {
  console.log(`GET request for About Page`);
  console.log(`\n`);

  res.render(`modules/about`, {
    sample: data.aboutContent
  });
});

// -* Contact Route
app.get("/contact", function (req, res) {
  console.log(`GET request for Contact Page`);
  console.log(`\n`);

  res.render(`modules/contact`, {
    sample: data.contactContent
  });
});

// -* Compose Route
app.get("/compose", function (req, res) {
  console.log("GET request for Compose Page");
  console.log(`\n`);

  res.render("modules/compose", {
    sample: ""
  });
});

// -* POST Compose
app.post("/compose", function (req, res) {
  console.log(`POST request for Compose`);
  console.log(`\n`); 
  
  const post = {
    id: data.posts.length,
    date: "2022-02-02",
    title: req.body.title,
    body: req.body.post
  };

  data.posts.push(post);
  
  res.redirect("/");
});

// * SERVER LISTENER
// TODO - Make sure to fix the port number
// 5000 - Personal
// 1000 - freeCodeCamp
// 2000 - Frontend Mentor
// 3000 - London App Brewery
app.listen(3011, function () {
  console.log("The server is running on port 3011.")
  console.log(`\n`);
});