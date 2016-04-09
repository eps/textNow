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
    dateSent: '132323232',
    bodyText: req.body.body_text,
    from: req.body.from,
    recipients: [{ name: req.body.to, number: '23423423',}]
  });

  // {
  //    dateSent: 'July 22, 2016',
  //    bodyText: 'Where are you?',
  //    from: '+14153049149',
  //    recipients: [{ name: 'Steve', number: '+14158501895'}]
  // }

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
      console.log('messageController.show responding with', foundMessage);
      res.json(foundMessage);
    });
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
