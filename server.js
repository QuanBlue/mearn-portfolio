require("dotenv").config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

const PORT = process.env.PORT || 5000;

app.use(express.json());

//connect mongoose
mongoose.connect(process.env.DB_CONNECT);
console.log("Connection to the database successfully.");

// cors (cross origin resource sharing)
app.use(cors({ origin: true, credentials: true }));

// route
app.use("/", require("./routes/route"));

// listen on port PORT (50000)
app.listen(PORT, function () {
	console.log("Express server is running on port", PORT);
});
