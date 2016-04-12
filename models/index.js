var mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URI ||
                 process.env.MONGOHQ_URL ||
                "mongodb://localhost/project-01");


module.exports.Message = require("./message.js");
module.exports.Recipient = require("./recipient.js");
