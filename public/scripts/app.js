console.log("Sanity Check: JS is working!");


$(document).ready(function() {
  $.ajax({
    method: 'GET',
    url: '/api/messages',
    success: messageSuccess,
    error: errorSuccess,
  });

  $.ajax({
    method: 'GET',
    url: '/messages',
    success: inboxSuccess,
    error: inboxError
  });

  $('#singlebutton').on('submit', function(e) {
    e.preventDefault();
    var newData = $(this).seralize();
    console.log('button worked', newData);
  });

});

function inboxSuccess () {
  console.log('inbox page works!');
}

function inboxError(err) {
  console.log('inbox page error!', err);
}
function messageSuccess(json) {
  console.log('getting message success', json);
}

function errorSuccess(err) {
  console.log('Message Error: ', err);
}
