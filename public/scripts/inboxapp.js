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

  $('#message-form').on('click', '.deleteBtn', function deleteMessage (message) {
    $.ajax({
    method: 'DELETE',
    url: '/api/messages/' + $(this).attr('data-id'),
    success: handleDeleteSuccess,
    error: handleDeleteError
    });
  });

  $('#message-form').on('click', '.edit-messages', function handleSaveChangesClick (e) {
    e.preventDefault();
    console.log('edit button clicked');
    $.ajax({
      method: 'GET',
      url: '/api/messages/' + $(this).attr('data-id'),
      success: function(data) {
        // what to do with data
        console.log(data);
        $('#fromInput').val(data.user);
        $('#recipientInput').val(data.recipients[0].number);
        $('#messageInput').val(data.bodyText);
      },
      error: function(err) {
        console.log(err);
      }
    });
  });

  $('#buttonSaved').on('click', function handleButtonSave(e){
    console.log('clicked saved button');
    var messageId = $(this).attr('message-id');
    console.log(messageId);
    $.ajax({
      method: 'PUT',
      url: '/api/messages/',
      success: handleSaveSuccess,
      error: handleSaveError
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
  messageId = message._id;
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

}

function messageIdError(err) {
  console.log('ID ERROR: ', err);
}

function handleSaveSuccess (json) {
  console.log('Saved new inbox ', json);
}

function handleSaveError (err) {
  console.log('Save Error: ', err);
}
