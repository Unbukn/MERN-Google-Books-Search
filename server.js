// ********************************
// Dependencies********************
// ********************************
const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");

// Set PORT
const PORT = process.env.PORT || 3001;
const app = express();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// API Routes
app.use(routes)

// Connect to db
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/books", { useNewUrlParser: true });

// Start server
app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});