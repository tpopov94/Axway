var slackTerminal = require('slack-terminalize');

// TODO ASK: sure how to hide my SLACK_TOKEN because now I have to write it manually in the place of SLACK_TOKEN 
slackTerminal.init('process.env.SLACK_TOKEN', {
}, {
		CONFIG_DIR: __dirname + '/config',
		COMMAND_DIR: __dirname + '/commands'
	});

