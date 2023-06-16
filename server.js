require("dotenv").config();

const express = require("express");
const app = express();

const mongoose = require("mongoose");
const cors = require("cors");

const responseTime = require("response-time");
const { restResponseTimeHistogram } = require("./utils/metrics");

const PORT = process.env.PORT || 5000;

app.use(express.json());

//connect mongoose
mongoose.connect(process.env.DB_CONNECT);
console.log("Connection to the database successfully.");

// cors (cross origin resource sharing)
app.use(cors({ origin: true, credentials: true }));

// metrics response time of Rest API
app.use(
	responseTime((req, res, time) => {
		if (req?.route?.path) {
			restResponseTimeHistogram.observe(
				{
					method: req.method,
					route: req.route.path,
					status_code: res.statusCode,
				},
				time * 1000,
			);
		}
	}),
);

// route
app.use("/", require("./routes/route"));

// listen on port PORT (50000)
app.listen(PORT, function () {
	console.log(
		`Express server is running on https://localhost:${PORT} and Metrics is running on https://localhost:${PORT}/metrics`,
	);
});
