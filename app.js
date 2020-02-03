const express = require('express');
let bodyParser = require('body-parser');
let mongoose = require('mongoose');

const app = express();

// Import routes
let apiRoutes = require("./api-routes")

app.use(bodyParser.urlencoded({
    extended: true
 }));
app.use(bodyParser.json());

// use the imported routes
app.use('/', apiRoutes);


var db = mongoose.connection;
if(!db)
    console.log("Error connecting db")
else
    console.log("Db connected successfully")


const port = process.env.NODE_ENV === 'production' ? (process.env.PORT || 80) : 4000;
const server = app.listen(port, () => {
  console.log("server running on port " + port)
})