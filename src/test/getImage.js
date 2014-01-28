var getImage = require('../getImage');
var config = require('./config.json');

gt.module('getting image');

gt.test('status = 0', function () {
  var id = getImage(config.images, 0);
  gt.string(id, 'could not get image for status 0');
  gt.equal(id, '4c685643d2f7dce36c63f1fc62748a60');
});

gt.test('status = 10', function () {
  var id = getImage(config.images, 10);
  gt.string(id, 'could not get image for status 10');
  gt.equal(id, '4c685643d2f7dce36c63f1fc62748a60');
});

gt.test('status = 50', function () {
  var id = getImage(config.images, 50);
  gt.string(id, 'could not get image for status 50');
  gt.equal(id, '4c685643d2f7dce36c63f1fc62748a60');
});

gt.test('status = 51', function () {
  var id = getImage(config.images, 51);
  gt.string(id, 'could not get image for status 51');
  gt.equal(id, '0fd1ef2b64f760afb5e3dc66db8b231c');
});

gt.test('status = 100', function () {
  var id = getImage(config.images, 100);
  gt.string(id, 'could not get image for status 100');
  gt.equal(id, 'f44fea071b9f570e66f339a121f10230');
});
