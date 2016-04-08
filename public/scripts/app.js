console.log("Sanity Check: JS is working!");
var template;
var $messageList;
var allMessages = [];

$(document).ready(function() {

  $messageList = $('#message');

  var source = $('#message-template').html();
  template = Handlebars.compile(source);

  $.ajax({
    method: 'GET',
    url: '/api/messages',
    success: messageSuccess,
    error: errorSuccess,
  });

  $('#inbox-form').on('submit', function(e) {
    e.preventDefault();
    var newData = $(this).serializeArray();
    console.log('button worked', newData);
      $.ajax({
        method: 'POST',
        url: '/api/messages',
        data: newData,
        success: postSuccess,
        error: postError,
      });
  });
});

function render () {
  $messageList.empty();
  var html = template({ messages: allMessages});
  $messageList.append(html);
}

function inboxSuccess () {
  console.log('inbox page works!');
}

function inboxError(err) {
  console.log('inbox page error!', err);
}
function messageSuccess(json) {
    allMessages = json;
    console.log('message success', json);
    $messageList.append(json);
  render();
}

function errorSuccess(err) {
  console.log('Message Error: ', err);
}

function postSuccess(json) {
  allMessages.push(json);
  render();

  console.log('post messages success', json);
}

function postError(err) {
  console.log('POST Error: ', err);
}
