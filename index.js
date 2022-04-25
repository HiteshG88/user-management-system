const express = require("express");
const exphbs = require("express-handlebars");
const mysql = require("mysql2");

const app = express();

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`server running on ${port}`);
});
