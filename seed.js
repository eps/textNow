var db = require("./models");

var messageList =[
{
   dateSent: 'June 28, 2016',
   bodyText: 'Hi, what are you doing today?',
   from: '+14152134815'
},
{
   dateSent: 'July 22, 2016',
   bodyText: 'Where are you?',
   from: '+14153049149',
},
{
   dateSent: 'November 30, 2016',
   bodyText: 'HOLY SHIT! what is that?',
   from: '14158124749',
},
{
   dateSent: 'March 17, 2016',
   bodyText: 'Good morning all',
   from: '+14156472937',
}
];

var sampleRecipients = [];

sampleRecipients.push({ name: 'Bob',
                      number: '+14152931940'
});
sampleRecipients.push({ name: 'Steve',
                      number: '+14158501895'
});
sampleRecipients.push({ name: 'Hannah',
                      number: '+14152159149'
});
sampleRecipients.push({ name: 'Kyle',
                      number: '+14152931940'
});
// { name: 'John',
// number: '+1415937197'},
// { name: 'Emily',
// number: '+14159174621'}


// messageList.forEach(function(message) {
//   message.recipients = sampleRecipients;
//   console.log('hello sample' , message);
// });

// messageList.forEach(function(message) {
//   message.recipients = sampleRecipients;
//   console.log('successfully added', message);
// });

messageList.forEach(function(album){
    console.log('found messages for ' + messageList.recipients);
});

db.Message.remove({}, function(err, messages){

  db.Message.create(messageList, function(err, messages){
    if (err) { return console.log('ERROR', err); }
    console.log("all messages:", messages);
    console.log("created", messages.length, "messages");
    process.exit();
  });
});
