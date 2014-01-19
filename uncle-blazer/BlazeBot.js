var fs = require('fs');
var path = require('path');
var util = require('util');
var markov = require('markov');
var MeatBot = require('meatbot');

var keywords = ["weed-gif","420-gif"];
var chatter = markov();
var logs = path.join(__dirname, "qwantz.txt");

var learnFileIn = fs.createReadStream(logs);
var learnFile = fs.createWriteStream(logs, {flags: 'r+'});
var avatar = fs.readFileSync(path.join(__dirname, 'avatar.txt'), 'utf8');

chatter.seed(learnFileIn);

function BlazeBot() {
  MeatBot.call(this);
  this.on('message', function(msg) {
    if (msg.message.indexOf(this.name) !== -1) return;
    chatter.seed(msg.message);
    learnFile.write(msg.message+"\r\n");
  }.bind(this));
}

util.inherits(BlazeBot, MeatBot);

BlazeBot.prototype.name = "uncle blazer";
BlazeBot.prototype.fingerprint = 420;
BlazeBot.prototype.avatar = avatar;

BlazeBot.prototype.getResponse = function(msg, cb) {
  var txt = chatter.respond(msg.message).join(' ');
  return cb(null, txt);
};


module.exports = BlazeBot;