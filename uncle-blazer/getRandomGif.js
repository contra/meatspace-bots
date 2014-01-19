var request = require('request');
var cheerio = require('cheerio');
var Buffer = require('buffer').Buffer;

module.exports = function(keyword, cb) {
  var url = "http://www.tumblr.com/tagged/" + keyword;
  request(url, function(err, res, body) {
    var $, img, imgs;
    try {
      $ = cheerio.load(body);
      imgs = $('.photo_stage_img');
      img = imgs[Math.floor((Math.random() * imgs.length) + 1)];
      img = img.attribs.style.match(/background-image:url\((.*)\)/)[1];

      request(img, function(err, res, body) {
        if (err) return cb(err);
        var buf = new Buffer(body);
        cb(null, "data:image/gif;base64," + buf.toString('base64'));
      });
    } catch (e) {
      return cb(e);
    }
  });
};
