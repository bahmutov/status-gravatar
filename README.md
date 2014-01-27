# status-gravatar v0.0.1

> Sets my Gravatar profile image depending on the status of my projects

[![NPM][status-gravatar-icon] ][status-gravatar-url]

[![Build status][status-gravatar-ci-image] ][status-gravatar-ci-url]
[![dependencies][status-gravatar-dependencies-image] ][status-gravatar-dependencies-url]
[![devdependencies][status-gravatar-devdependencies-image] ][status-gravatar-devdependencies-url]

[status-gravatar-icon]: https://nodei.co/npm/status-gravatar.png?downloads=true
[status-gravatar-url]: https://npmjs.org/package/status-gravatar
[status-gravatar-ci-image]: https://travis-ci.org/bahmutov/status-gravatar.png?branch=master
[status-gravatar-ci-url]: https://travis-ci.org/bahmutov/status-gravatar
[status-gravatar-dependencies-image]: https://david-dm.org/bahmutov/status-gravatar.png
[status-gravatar-dependencies-url]: https://david-dm.org/bahmutov/status-gravatar
[status-gravatar-devdependencies-image]: https://david-dm.org/bahmutov/status-gravatar/dev-status.png
[status-gravatar-devdependencies-url]: https://david-dm.org/bahmutov/status-gravatar#info=devDependencies



## Use

Set the following environment variables before running `node index.js`,
I use for example a bash runner

```bash
##!/bin/bash

## set gravatar user name and password, then
## runs the program
export GRAVATAR_EMAIL="<gravatar email>"
export GRAVATAR_PASSWORD="<gravatar password>"
export GITHUB_USERNAME="github username"

node index.js
```

The worker will wake up every hour, check Travis ci build statuses,
and if any fail will change your Gravatar image.




### Small print

Author: Gleb Bahmutov &copy; 2014

* [@bahmutov](https://twitter.com/bahmutov)
* [glebbahmutov.com](http://glebbahmutov.com)
* [blog](http://bahmutov.calepin.co/)

License: MIT - do anything with the code, but don't blame me if it does not work.

Spread the word: tweet, star on github, etc.

Support: if you find any problems with this module, email / tweet /
[open issue](https://github.com/bahmutov/status-gravatar/issues) on Github



## MIT License

Copyright (c) 2014 Gleb Bahmutov

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.


