const { default: mongoose } = require("mongoose");

const Schema = mongoose.Schema;

const skillSchema = new Schema({
    name: String
});

module.exports = mongoose.model('devskill', skillSchema, 'devskill');