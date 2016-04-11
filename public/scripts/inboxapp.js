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
    $.ajax({
      method: 'GET',
      url: '/api/messages/' + $(this).attr('data-id'),
      success: editButtonSuccess,
      error: editButtonError
    });
  });

  $('#buttonSaved').on('click', function handleButtonSave(e){
    console.log('clicked saved button');
    console.log($(this).attr('data-id'));

    var fromInput = $('#fromInput').val();
    var recipientInput = [{number: $('#recipientInput').val()}];
    var messageInput = $('#messageInput').val();

    $.ajax({
      method: 'PUT',
      url: '/api/messages/' + $(this).attr('data-id'),
      data: { user: fromInput, bodyText: messageInput, recipients: recipientInput},
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

// show values in edit modal"
function editButtonSuccess(data) {
  console.log('edited button success', data);
    $('#fromInput').val(data.user);
    $('#recipientInput').val(data.recipients[0].number);
    $('#messageInput').val(data.bodyText);
    $('#buttonSaved').attr('data-id',data._id);
}

function editButtonError(err) {
  console.log('Edit button error: ', err);
}

function handleSaveSuccess (data) {
  // var fromInput = $('#fromInput').val();
  // var recipientInput = $('#recipientInput').val();
  // var messageInput = $('#messageInput').val();
  //
  // console.log(fromInput,recipientInput, messageInput);
  // data.user = fromInput;
  // data.recipients.number = recipientInput;
  // data.bodyText = messageInput;
  console.log('Saved new inbox ', data);

}

function handleSaveError (err) {
  console.log('Save Error: ', err);
}
