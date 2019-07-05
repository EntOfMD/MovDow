require("dotenv").config();
const express = require("express");
const helmet = require("helmet");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const routes = require("./routes");

const app = express();
const PORT = process.env.PORT || 3001;

//put this as far on top as possible, so it covers everything.
app.use(
    helmet({
        noCache: true,
        permittedCrossDomainPolicies: true
    })
);

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
} else if (app.get("env") === "development") {
    const logger = require("morgan");
    app.use(logger("dev"));
}

// Define middleware here
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(routes);

app.use(function(err, res) {
    res.status(err.status || 500);
    res.json({
        message: err.message || "",
        status: err.status || 500,
        error: err ? err.msg : ""
    });
});

// Connect to the Mongo DB
mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/movdow",
    {
        useCreateIndex: true,
        useNewUrlParser: true
    },
    err => {
        if (err) throw err;
        console.log(`Database is online & connected`);
    }
);

// Start the API server
app.listen(PORT, function() {
    console.log(`Server is online on Port ${PORT}`);
});
