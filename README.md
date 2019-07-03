# Slack CLI (slackctl)
Basic command line helper for sending Slack Messages that utilized @slack/web-api

## Install
```bash
npm install slackctl -g
```
## Usage
```bash
    slackctl --help
```
```bash 
    slackctl <command>

    Commands:
    slackctl message [auth] [channel] [text]  Send or post message to Slack
    [linknames]

    Options:
    --version  Show version number                                       [boolean]
    --help     Show help                                                 [boolean]
```

Or display specific command help
```bash
    slackctl message --help
```

```bash
slackctl message [auth] [channel] [text] [linknames]

Send or post message to Slack

Options:
  --version        Show version number                                 [boolean]
  --help           Show help                                           [boolean]
  --channel, -c    Channel to send the message                        [required]
  --linknames, -l  Make mentioned available            [boolean] [default: true]
  --text, -t       Message to send                                    [required]
  --auth, -a       Slack authorization token                          [required]
```

## Example
```bash
slackctl --auth xoxb-00000000000-000000000000-00000 --channel general --text "Hello Slack"
```

Sending multiple line of text message
```bash
slackctl --auth xoxb-00000000000-000000000000-00000 --channel general --text $'Hello\nSlack'
```