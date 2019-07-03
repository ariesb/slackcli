exports.command = "message [auth] [channel] [text] [linknames]";
exports.desc = "Send or post message to Slack";
exports.builder = {
  channel: {
    alias: "c",
    require: true,
    description: "Channel to send the message"
  },
  linknames: {
    alias: "l",
    type: "boolean",
    default: true,
    description: "Make mentioned available"
  },
  text: {
    require: true,
    alias: "t",
    description: "Message to send"
  },
  auth: {
    require: true,
    alias: "a",
    description: "Slack authorization token"
  }
};
exports.handler = function(argv) {
  const { WebClient } = require("@slack/web-api");
  const web = new WebClient(argv.auth);
  web.chat.postMessage({
    text: argv.text,
    channel: argv.channel,
    link_names: argv.linknames
  });
};

