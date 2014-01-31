# Use

Start the program setting your gravatar password in the environment
variable `GRAVATAR_PASSWORD`

    export GRAVATAR_PASSWORD=<your password>; gravatar

The worker will wake up every hour, check Travis ci build statuses,
and depending on success percentage will change your Gravatar image.

