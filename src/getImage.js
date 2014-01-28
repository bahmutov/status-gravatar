require('autostrip-json-comments');
var verify = require('check-types').verify;

function getImageIdFromStatus(imageConfig, status) {
  verify.object(imageConfig, 'missing image config, usually from config.json');
  verify.number(status, 'expecting status number, got ' + status);
  if (status < 0 || status > 100) {
    throw new Error('invalid percent status ' + status);
  }

  var cutoffs = Object.keys(imageConfig).map(function (value) {
    return Number(value);
  });
  verify.array(cutoffs, 'expected array of cutoffs');
  verify.positiveNumber(cutoffs.length, 'expected at least one cutoff');
  var cutoff = 101;

  cutoffs.forEach(function (value, k) {
    if (value >= status && value <= cutoff) {
      cutoff = value;
    }
  });
  verify.positiveNumber(cutoff, 'could not determine cutoff from status ' + status +
    ' and images ' + JSON.stringify(imageConfig, null, 2));
  var id = imageConfig[cutoff];
  verify.unemptyString(id, 'could not get image id for cutoff ' + cutoff +
    ' and images ' + JSON.stringify(imageConfig, null, 2));
  return id;
}

module.exports = getImageIdFromStatus;
