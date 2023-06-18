const express = require("express");
const router = express.Router();

const devSkill = require("../models/skill/devSkillModel");
const desSkill = require("../models/skill/desSkillModel");
const toolkit = require("../models/skill/toolkitModel");
const education = require("../models/educationModel");

const {
	databaseResponseTimeHistogram,
	metricsReadTotal,
} = require("../utils/metrics");

const { register } = require("../utils/metrics");

// get metrics
router.route("/metrics").get(async (req, res) => {
	console.log("🚀  /metrics");
	res.setHeader("Content-Type", register.contentType);
	res.end(await register.metrics());
});

// get dev skill
router.route("/api/dev-skill").get((req, res) => {
	console.log("🚀  /api/dev-skill");

	metricsReadTotal.inc();

	const metricsLabels = {
		operation: "dev-skill",
	};
	const timer = databaseResponseTimeHistogram.startTimer();

	devSkill
		.find()
		.then((foundSkill) => {
			timer({ ...metricsLabels, success: "true" });
			res.json(foundSkill);
		})
		.catch((err) => {
			timer({ ...metricsLabels, success: "false" });
			throw err;
		});
});

// get des skill
router.route("/api/des-skill").get((req, res) => {
	console.log("🚀  /api/des-skill");

	metricsReadTotal.inc();

	const metricsLabels = {
		operation: "des-skill",
	};
	const timer = databaseResponseTimeHistogram.startTimer();

	desSkill
		.find()
		.then((foundSkill) => {
			timer({ ...metricsLabels, success: "true" });
			res.json(foundSkill);
		})
		.catch((err) => {
			timer({ ...metricsLabels, success: "false" });
			throw err;
		});
});

// get toolkit
router.route("/api/toolkit").get((req, res) => {
	console.log("🚀  /api/toolkit");

	metricsReadTotal.inc();

	const metricsLabels = {
		operation: "toolKit",
	};
	const timer = databaseResponseTimeHistogram.startTimer();

	toolkit
		.find()
		.then((foundSkill) => {
			timer({ ...metricsLabels, success: "true" });
			res.json(foundSkill);
		})
		.catch((err) => {
			timer({ ...metricsLabels, success: "false" });
			throw err;
		});
});

// get education
router.route("/api/education").get((req, res) => {
	console.log("🚀  /api/education");

	metricsReadTotal.inc();

	const metricsLabels = {
		operation: "education",
	};
	const timer = databaseResponseTimeHistogram.startTimer();

	education
		.find()
		.then((foundSkill) => {
			timer({ ...metricsLabels, success: "true" });
			res.json(foundSkill);
		})
		.catch((err) => {
			timer({ ...metricsLabels, success: "false" });
			throw err;
		});
});

module.exports = router;
