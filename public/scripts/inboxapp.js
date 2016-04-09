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


  // $.ajax({
  //   method: 'GET',
  //   url: '/api/messages/:id',
  //   success: messageIdSuccess,
  //   error: messageIdError
  // });


  $('#message-form').on('click', '.deleteBtn', function deleteMessage (message) {
    $.ajax({
    method: 'DELETE',
    url: '/api/messages/' + $(this).attr('data-id'),
    success: handleDeleteMessage,
    error: handleDeleteError,
    });
  });
});

function render () {
  $messageList.empty();
  var html = template({ messages: allMessages});
  $messageList.append(html);
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

// created a new message
function postSuccess(json) {
  allMessages.push(json);
  render();
  console.log('post messages success', json);
}

function postError(err) {
  console.log('POST Error: ', err);
}

// delete a saved message
function handleDeleteMessage(event) {
  console.log('button clicked');
}

function handleDeleteError(err) {
  console.log('button clicked to delete message ERROR ', err);
}

function messageIdSuccess(event) {
  console.log('ID SUCCESSFUL', event);
}

function messageIdError(err) {
  console.log('ID ERROR: ', err);
}
