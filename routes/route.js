const express = require("express");
const router = express.Router();

const devSkill = require("../models/skill/devSkillModel");
const desSkill = require("../models/skill/desSkillModel");
const toolkit = require("../models/skill/toolkitModel");
const education = require("../models/educationModel");

// get dev skill
router.route('/api/dev-skill').get((req, res) => {
    devSkill.find()
        .then(foundSkill => res.json(foundSkill));
});

// get des skill
router.route('/api/des-skill').get((req, res) => {
    desSkill.find()
        .then(foundSkill => res.json(foundSkill));
});

// get toolkit
router.route('/api/toolkit').get((req, res) => {
    toolkit.find()
        .then(foundSkill => res.json(foundSkill));
});

// get education
router.route('/api/education').get((req, res) => {
    education.find()
        .then(foundSkill => res.json(foundSkill));
});

module.exports = router;