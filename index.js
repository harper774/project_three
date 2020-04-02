const express = require("express");
const session = require("express-session");
// const db = require("./models");
const mongoose = require("mongoose");
const MongoStore = require("connect-mongo")(session);
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 8080;

const passport = require("./config/passport.js");
const db = require("./models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/onlinecourse");
// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

// Express Session
app.use(session({
    secret: "secret code",
    resave: true,
    saveUninitialized: true,
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
}));

// Passport
app.use(passport.initialize());
app.use(passport.session());
// Connect to the Mongo DB

app.use(routes);
// Run the server
app.listen(PORT, function () {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});