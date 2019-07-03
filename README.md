# SlackCLI (slackcli)
Basic command line helper for sending Slack Messages that utilized @slack/web-api

## Install
```bash
npm install slackcli -g
```
## Usage
```bash
    slackcli --help
```
```bash 
    slackcli <command>

    Commands:
    slackcli message [auth] [channel] [text]  Send or post message to Slack
    [linknames]

    Options:
    --version  Show version number                                       [boolean]
    --help     Show help                                                 [boolean]
```

Or display specific command help
```bash
    slackcli message --help
```

```bash
slackcli message [auth] [channel] [text] [linknames]

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
slackcli --auth xoxb-00000000000-000000000000-00000 --channel general --text "Hello Slack"
```

Sending multiple line of text message
```bash
slackcli --auth xoxb-00000000000-000000000000-00000 --channel general --text $'Hello\nSlack'
```