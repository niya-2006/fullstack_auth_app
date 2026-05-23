const path = require("path");
require("dotenv").config({ path: path.join(__dirname, ".env") });

const app = require("./routes/app");

const connectDB = require("./config/db");

connectDB();

module.exports = app;
