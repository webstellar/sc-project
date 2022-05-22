//require() in node while import in react
//we import express module and create an express application
//the purpose of these two lines are as follows:
//const app = express() now has the full functionality that comes with express namely: 1. methods for routing HTTP requests 2. configuring middleware 3. rendering HTML views 4. registering a template engine 5. modifying application settings etc
//Remember Controllers go to Routes
//Routes come here
//Routes determine the endpoint of a req/res cycle
//Middleware intereact with req/res cycle and give result to the Route to use if needed before ending it

const express = require("express");
const app = express();

const bodyparser = require("body-parser");
const cloudinary = require("cloudinary");

//Middlewares
const errorMiddleware = require("./middlewares/errors");

//express.json() function will parse incoming requests with JSON payloads
app.use(express.json());
app.use(bodyparser.urlencoded({ extended: true }));
//app.user(cookieParser())

//Setting up cloudinary configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

//Import All routes
const appreciations = require("./routes/appreciation");
const heroes = require("./routes/hero");

//module we export and import into app, we can use via .use()
//for appreciation which is a route, we get the url
app.use("/api/v1", appreciations);
app.use("/api/v1", heroes);

//Middleware Usage
app.use(errorMiddleware); //handle errors

app.get;

//make the file usable by exposing them as additional properties
//best practice to export your own module to have a cleaner workspace
module.exports = app;
