var mongoose = require('mongoose');
var Schema = mongoose.Schema;


module.exports = mongoose.model('Notas', new Schema({
 name: String,
 text: String,





}));
