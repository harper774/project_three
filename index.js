const express = require("express");
const session = require("express-session");
const db = require("./models");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3003;
const passport = require("./config/passport");

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

// Express Session
app.use(session({
    secret: "secret code",
    resave: true,
    saveUninitialized: true,
}));

// Passport
app.use(passport.initialize());
app.use(passport.session());

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/onlinecourse");

// Run the server
db.sequelize.authenticate()
// eslint-disable-next-line no-console
.then(() => app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`)));
