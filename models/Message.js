var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var Recipient = require('./recipient');

var MessageSchema = new Schema ({
  dateSent: String,
  bodyText: String,
  from: String,
  recipients: [{type: Schema.Types.ObjectId, ref: 'Recipient'}],
});

var Message = mongoose.model('Message', MessageSchema);
module.exports = Message;
