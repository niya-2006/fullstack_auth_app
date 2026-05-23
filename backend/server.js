const path = require("path");
require("dotenv").config({ path: path.join(__dirname, ".env") });

const app = require("./routes/app");

const connectDB = require("./config/db");

connectDB();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
});

module.exports = app;