# Cloud9 User Script

## Installation

Go to the Cloud9 `client/ext` directory and clone this repository:

    git clone https://github.com/pufuwozu/cloud9-userscript.git userscript

From the Cloud9 root directory, edit `server/cloud9/ide.js` and add this to the
`Ide.DEFAULT_PLUGINS` array:

    "ext/userscript/userscript",

## Usage

Click the side button and type in your script:

![](http://brianmckenna.org/blog/static/userscript.png)

Press `Control+Shift+E` to save and evaluate the user script.
