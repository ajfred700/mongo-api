var mongoose = require('mongoose');
var Schema = mongoose.Schema;



module.exports = mongoose.model('Sugerencias', new Schema({
 author: String,
 titulo: String,
 desc: String,	



}));
