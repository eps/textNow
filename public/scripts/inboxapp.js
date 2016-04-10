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

  $.ajax({
    method: 'GET',
    url: '/api/messages/:id',
    success: messageIdSuccess,
    error: messageIdError
  });


  $('#message-form').on('click', '.deleteBtn', function deleteMessage (message) {
    $.ajax({
    method: 'DELETE',
    url: '/api/messages/' + $(this).attr('data-id'),
    success: handleDeleteSuccess,
    error: handleDeleteError,
    });
  });
});

function render () {
  $messageList.empty();
  var html = template({ messages: allMessages});
  $messageList.append(html);
}

// list all the messages
function messageSuccess(json) {
    allMessages = json;
    console.log('message success', json);
    $messageList.append(json);
  render();
}

function errorSuccess(err) {
  console.log('Message Error: ', err);
}

// delete a saved message
function handleDeleteSuccess(json) {
  console.log('');
  for(var i = 0; i < allMessages.length; i++) {
    if(allMessages[i]._id === messageId) {
      allMessages.splice(i, 1);
      break;
    }
  } render();
  console.log('got messages ', json);
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
