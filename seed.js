var db = require("./models");

var messageList =[
{
   dateSent: 'June 28, 2016',
   bodyText: 'Hi, what are you doing today?',
   from: '14152134815',
   recipients: [ '+14152931940' ]
},
{

   dateSent: 'July 22, 2016',
   bodyText: 'Where are you?',
   from: '+14153049149',
   recipients: [ '+14158501895' ]
},
{
   dateSent: 'November 30, 2016',
   bodyText: 'HOLY SHIT! what is that?',
   from: '14158124749',
   recipients: [ '+14152159149' ]
},
{
   dateSent: 'March 17, 2016',
   bodyText: 'Good morning all',
   from: '14156472937',
   recipients: [ '+14155729480', '+14159057371', '+14152957143' ]
}
];

db.Message.remove({}, function(err, albums){

  db.Message.create(messageList, function(err, messages){
    if (err) { return console.log('ERROR', err); }
    console.log("all messages:", messages);
    console.log("created", messages.length, "messages");
    process.exit();
  });
});
