const { default: mongoose } = require("mongoose");

const Schema = mongoose.Schema;

const educationSchema = new Schema({
    title: String,
    milestone: String,
    content: String,
});

module.exports = mongoose.model('education', educationSchema, 'education');