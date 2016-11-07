var slackUtils = require('../utils/slack');
var requestUtils = require('../utils/request');
//var request = require("request");

module.exports = function (param) {
    var usernames = param.args;

   var currentUser = usernames[0];
   var len = currentUser.length;
   var parsedUser = "";

// I am bad with regex ;(
for (var i = 0; i < len; i += 1) {
    if (currentUser[i] !== "<" && currentUser[i] !== "@" && currentUser[i] !== ">") {
        parsedUser += currentUser[i];
    }
}

    slackUtils.getUserInfo(parsedUser, function(user){

        requestUtils.notifyServer({
            url: "http://localhost:2705/",
            data: {
                user: user.real_name,
                mail: user.profile.email
            }
        });

        slackUtils.postMessage(param.channel, "User: " + user.real_name + " with email: " + user.profile.email + " information stolen");
    },
    function () {
        slackUtils.postMessage(param.channel, "Something went wrong");
    });
};