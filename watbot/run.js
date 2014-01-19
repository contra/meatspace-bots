var WatBot = require('./WatBot');

var bot = new WatBot();

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

bot.on('csrf', function(token){
  console.log('csrf', token);
});

bot.on('ip', function(token){
  console.log('ip', token);
});

bot.connect();