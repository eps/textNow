var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var RecipientSchema = new Schema ({
  name: String,
  number: String,
});

var Recipient = mongoose.model('Recipient', RecipientSchema);
module.exports = Recipient;
