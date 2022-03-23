const { default: mongoose } = require("mongoose");

const Schema = mongoose.Schema;

const toolkitSchema = new Schema({
    name: String
});

module.exports = mongoose.model('toolkit', toolkitSchema, 'toolkit');