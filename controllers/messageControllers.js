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
 // REAL DATA
  var newMessage = new db.Message ({
    user: req.body.user,
    dateSent: '132323232',
    bodyText: req.body.body_text,
    from: req.body.from,
    recipients: [{ name: "Kyle", number: req.body.to,}]
  });

  newMessage.save(function(err, message){
    if (err) {
      console.log('POST error: '+ err);
    } res.json(message);
  });
}

function show(req, res) {
  // FILL ME IN !
  db.Message.findById(req.params.messageId, function(err, foundMessage) {
      if(err) { console.log('messageController.show error', err); }
      res.json(foundMessage);
    });
}

function destroy(req, res) {
  // FILL ME IN
  db.Message.findByIdAndRemove({ _id: req.params.messageId }, function(err, foundMessage){
    console.log('successfully removed', req.params.messageId);
    res.json(foundMessage);
  });
}

function update(req, res) {
  // FILL ME IN !
  db.Message.findById({ _id: req.params.messageId}, function(err, foundMessage) {
    if(err) {
      console.log('messageController.update error', err);
    }
    console.log(foundMessage.user);
    foundMessage.user = req.body.user;
    foundMessage.bodyText = req.body.body_text;
      foundMessage.save(function(err, savedUpdate) {
        if (err) {
          console.log('Saved Update Error: ', err);
        } res.json(savedUpdate);
      });
  });
}

// export public methods here
module.exports = {
  index: index,
  create: create,
  show: show,
  destroy: destroy,
  update: update
};
