console.log("Sanity Check: JS is working!");


$(document).ready(function() {
  $.ajax({
    method: 'GET',
    url: '/api/messages',
    success: messageSuccess,
    error: errorSuccess,
  });
});

function messageSuccess(json) {
  console.log('getting message success', json);
}

function errorSuccess(err) {
  console.log('Message Error: ' + err);
}
