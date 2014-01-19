var util = require('util');
var MeatBot = require('meatbot');

var watfile = require('./wat');

var random = function() {
  return watfile[Math.floor(Math.random() * watfile.length)];
};

var search = function(word) {
  var options = watfile.filter(function(q){
    return q.toLowerCase().indexOf(word.toLowerCase()) !== -1;
  });
  if (options.length === 0) return "I couldn't find anything that matches that.";
  return options[Math.floor(Math.random() * options.length)];
};

function WatBot() {
  MeatBot.call(this);
}

util.inherits(WatBot, MeatBot);

WatBot.prototype.name = "watbot";
WatBot.prototype.fingerprint = 70;
WatBot.prototype.avatar = [
  "https://gs1.wac.edgecastcdn.net/8019B6/data.tumblr.com/tumblr_loyxjpXTP21qgbvzco1_500.gif",
  "https://gs1.wac.edgecastcdn.net/8019B6/data.tumblr.com/8f1db9f3e79cfb78a30be687ec9eefa5/tumblr_ms2eznGo7Q1roa1xxo1_400.gif",
  "https://gs1.wac.edgecastcdn.net/8019B6/data.tumblr.com/tumblr_m9iyw43anG1qf5do9o1_500.gif",
  "https://gs1.wac.edgecastcdn.net/8019B6/data.tumblr.com/1219f44758bbb4415e7c1f9cee260f78/tumblr_mnmzjax87J1qa68j2o1_500.gif",
  "https://gs1.wac.edgecastcdn.net/8019B6/data.tumblr.com/8f65f0e7b15c1a54aeae575496dbbd53/tumblr_mmrdqvPMqx1qfqcmfo1_500.gif",
  "https://gs1.wac.edgecastcdn.net/8019B6/data.tumblr.com/e42e32175ec05abd481bd6189b62d95f/tumblr_mhx7efcBbm1qz9m0ho1_500.gif"
];

WatBot.prototype.getResponse = function(msg, cb) {
  var txt, q;
  if (msg.message.indexOf('watbot plz find') === 0) {
    q = msg.message.replace('watbot plz find', '').trim();
    txt = search(q);
  } else {
    txt = random();
  }
  return cb(null, txt);
};


module.exports = WatBot;