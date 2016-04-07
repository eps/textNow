var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var Recipient = require('./recipient');

var MessageSchema = new Schema ({
  time: String,
  text: String,
  from: String,
  recipients: {type: Schema.Types.ObjectId, ref: 'To'},
});

var Message = mongoose.model('Message', MessageSchema);
module.exports = Message;
