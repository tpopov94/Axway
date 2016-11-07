var webClient = require('slack-terminalize').getWebClient();


var getUser = function (username, callBack) {
	webClient.users.info(username, function (err, response) {
		if (err || !response.ok) {
			postMessage(params.channel, username + " not taken");
		}

		callBack(response.user);
	});
}

// Post message in slack's channel from how to create slack bot tutorial
var postMessage = function (channel, response, format) {
	format = typeof format !== 'undefined' ? format : true;
	response = (format && '```' + response + '```') || response;

	webClient.chat.postMessage(channel, response, {
		as_user: true
	});
};


module.exports = {
	postMessage: postMessage,
	getUserInfo: getUser
};