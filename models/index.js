var mongoose = require("mongoose");
mongoose.connect(("mongodb://localhost/project-01"));

module.exports.Message = require("./message.js");
module.exports.To = require("./to.js");
