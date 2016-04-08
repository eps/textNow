/************
 * DATABASE *
 ************/

/* hard-coded data */
var db = require('../models');

// GET /api/messages, get all messages
function index(req, res) {
  // FILL ME IN !
  db.Message.find({}, function (err, foundMessages){
    if (err) { console.log('foundMessages error: ', err);
  } res.json(foundMessages);
  });
}

function create(req, res) {
  // FILL ME IN !
//   var newMessage = new db.Message ({
//     dateSent: req.body.dateSent,
//     bodyText: req.body.bodyText,
//     from: req.body.from,
//     recipients: req.body.recipients
//   });
//   newMessage.save(function(err, message){
//     if (err) {
//       console.log('POST error: '+ err);
//     } res.json(message);
//   });
// }
}

function show(req, res) {
  // FILL ME IN !
}

function destroy(req, res) {
  // FILL ME IN !
}

function update(req, res) {
  // FILL ME IN !
}


// export public methods here
module.exports = {
  index: index,
  create: create,
  show: show,
  destroy: destroy,
  update: update
};
