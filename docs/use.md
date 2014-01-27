# Use

Set the following environment variables before running `node index.js`,
I use for example a bash runner

```bash
#!/bin/bash

# set gravatar user name and password, then
# runs the program
export GRAVATAR_EMAIL="<gravatar email>"
export GRAVATAR_PASSWORD="<gravatar password>"
export GITHUB_USERNAME="github username"

node index.js
```

The worker will wake up every hour, check Travis ci build statuses,
and if any fail will change your Gravatar image.

