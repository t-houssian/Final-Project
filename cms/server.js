var express = require("express");
var path = require("path");
var http = require("http");
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var mongoose = require("mongoose");


var index = require('./server/routes/app');


const nbaRoutes = require('./server/routes/nbas');
const teamRoutes = require('./server/routes/teams');


mongoose.connect(
  "mongodb+srv://thous:PASSWORD@cluster0.aohc59k.mongodb.net/Final?retryWrites=true&w=majority",
  { useNewUrlParser: true },
  (err, res) => {
    if (err) {
      console.log("Connection failed: " + err);
    } else {
      console.log("Connected to database!");
    }
  }
);

var app = express(); 


app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(cookieParser());

app.use(logger("dev")); 


app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});


app.use(express.static(path.join(__dirname, "dist/w02-contacts")));


app.use('/', index);


app.use('/nbas', nbaRoutes);
app.use('/teams', teamRoutes);


app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist/w02-contacts/index.html"));
});


const port = process.env.PORT || "3000";
app.set("port", port);


const server = http.createServer(app);


server.listen(port, function () {
  console.log("API running on localhost: " + port);
});