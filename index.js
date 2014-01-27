var verify = require('check-types').verify;

var email, password;

(function getEmailAndPassword() {
  console.log('getting email and password from environment');
  email = process.env.GRAVATAR_EMAIL;
  password = process.env.GRAVATAR_PASSWORD;
}());

verify.unemptyString(email, 'missing email');
console.log('using gravatar email', email);
verify.unemptyString(password, 'missing password');
