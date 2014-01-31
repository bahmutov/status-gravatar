# Install

    sudo npm install -g status-gravatar
    npm explore -g status-gravatar
    # takes you into the installed folder
    # IMPORTANT: modify the config.json file
    # set your email and github username

## Find your existing gravatar ids

Run the program once to see the ids

    export GRAVATAR_PASSWORD=<your password>; gravatar
    # will print something like
    getting Gravatar password from environment
    using gravatar email gleb.bahmutov@gmail.com
    user images:
    id                                url
    --------------------------------  ------------------------------------------------------------------------------
    0fd1ef2b64f760afb5e3dc66db8b231c  http://en.gravatar.com/userimage/29608804/0fd1ef2b64f760afb5e3dc66db8b231c.jpg
    4c685643d2f7dce36c63f1fc62748a60  http://en.gravatar.com/userimage/29608804/4c685643d2f7dce36c63f1fc62748a60.jpg
    4982ff0079347587d5d4698076cbe5a0  http://en.gravatar.com/userimage/29608804/4982ff0079347587d5d4698076cbe5a0.jpg
    ...

Open each url to determine if this is the image you would like to use,
then `npm explore -g status-gravatar`, open `config.json` and set the appropritate id for status cutoff.
For example see the current [config.json](config.json)

