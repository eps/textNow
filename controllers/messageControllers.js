/************
 * DATABASE *
 ************/

/* hard-coded data */
var db = require('../models');

// GET /api/albums
function index(req, res) {
  // FILL ME IN !
  db.Message.find({}, function (err, foundMessages){
    if (err) { console.log('foundMessages error: ', err);
  } res.json(foundMessages);
  });
}

function create(req, res) {
  // FILL ME IN !
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
