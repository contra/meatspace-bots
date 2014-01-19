var BlazeBot = require('./BlazeBot');

var bot = new BlazeBot();

bot.on('connect', function(){
  console.log('Connected');
});

bot.on('disconnect', function(){
  console.log('Disconnected');
});

bot.on('response', function(pic, txt){
  console.log('Sent', txt);
});

bot.on('message', function(msg){
  console.log('Somebody said', msg.message);
});

bot.connect();