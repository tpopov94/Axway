var webClient = require('slack-terminalize').getWebClient();


var getUserInfo = function (username, callBack) {

}

// Post message in slack's channel
var postMessage = function (channel, response, format) {
	format = typeof format !== 'undefined' ? format : true;
	response = (format && '```' + response + '```') || response;

	webClient.chat.postMessage(channel, response, {
		as_user: true
	});
};


module.exports = {
	postMessage: postMessage,
	getUserInfo: getUserInfo
};