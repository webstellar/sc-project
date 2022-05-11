//require() in node while import in react
//we import express module and create an express application
//the purpose of these two lines are as follows:
//const app = express() now has the full functionality that comes with express namely: 1. methods for routing HTTP requests 2. configuring middleware 3. rendering HTML views 4. registering a template engine 5. modifying application settings etc
const express = require("express");
const app = express();

//express.json() function will parse incoming requests with JSON payloads
app.use(express.json());

//Remember Controllers go to Routes
//Routes come here
//Routes determine the endpoint of a req/res cycle
//Middleware intereact with req/res cycle and give result to the Route to use if needed before ending it

//Import All routes
const appreciations = require("./routes/appreciation");

//module we export and import into app, we can use via .use()
//for appreciation which is a route, we get the url
app.use("/api/v1", appreciations);

//make the file usable by exposing them as additional properties
//best practice to export your own module to have a cleaner workspace
module.exports = app;
