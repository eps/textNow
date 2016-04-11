var db = require("./models");

var messageList = [
{
 user: 'Andy',
 dateSent: 'June 28, 2016',
 bodyText: 'Hi, what are you doing today?',
 from: '+14152134815',
 recipients: [{ name: 'Bob', number: '+14152931940'}, { name: 'Carol', number: '+14158501895'}]
},
{
 user: 'John',
 dateSent: 'July 22, 2016',
 bodyText: 'Where are you?',
 from: '+14153049149',
 recipients: [{ name: 'Steve', number: '+14158501895'}]
},
{
 user: 'Sam',
 dateSent: 'November 30, 2016',
 bodyText: 'HOLY SHIT! what is that?',
 from: '14158124749',
 recipients: [{ name: 'Hannah', number: '+14152159149'}]
},
{
 user: 'Valerie',
 dateSent: 'March 17, 2016',
 bodyText: 'Good morning all',
 from: '+14156472937',
 recipients: [{ name: 'Kyle', number: '+14152931940'}]
}];


db.Message.remove({}, function(err, messages){

  db.Message.create(messageList, function(err, messages){
    if (err) { return console.log('ERROR', err); }
    console.log("all messages:\n\n", messages);
    console.log("created", messages.length, "messages");
    process.exit();
  });

});
