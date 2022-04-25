const express = require("express");
const { engine } = require("express-handlebars");
const mysql = require("mysql2");
const bodyParser = require("body-parser");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;

// Parsing MiddleWare
// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// Parse application/json
app.use(bodyParser.json());

// Static files
app.use(express.static("public"));

// Templating Engine
app.engine("hbs", engine({ extname: ".hbs" }));
app.set("view engine", "hbs");

// Routes
app.get("", (req, res) => {
    res.render("home");
});

app.listen(port, () => {
    console.log(`server running on ${port}`);
});
