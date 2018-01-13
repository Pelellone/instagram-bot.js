# InstagramBot.js
[![License](https://img.shields.io/badge/license-GLPv3-brightgreen.svg)]()
[![powered by webdriverio](https://img.shields.io/badge/powered%20by-webdriverio-46aef7.svg)](https://github.com/webdriverio/webdriverio)
[![Version](https://img.shields.io/badge/version-v0.1-lightgrey.svg)](https://github.com/ptkdev/instagram-bot.js/releases)
[![Slack Chat](https://img.shields.io/badge/chat%20on-Slack-orange.svg)](https://slack.ptkdev.io)
[![Paypale Donate](https://img.shields.io/badge/donate-PayPal-red.svg)](https://paypal.me/ptkdev)

[![https://instagram-bot.js.ptkdev.io](https://ptkdev.it/img/bot/ptkdev-instagram-bot.gif)](https://instagram-bot.js.ptkdev.io)

## Setup - Debian Server
### Install bot dependencies:
1. `sudo apt-get install default-jre build-essential xvfb libssl-dev curl wget git chromium xauth`

### Install google chrome v63
1. `sudo dpkg -i ./bin/google-chrome-stable_current_amd64.deb`
2. `sudo apt-get install -y -f`

If you need lastest version of chrome update binary files in bin folder:
1. `/bin/chromedriver` [Download](https://sites.google.com/a/chromium.org/chromedriver/)
2. `/bin/selenium-server-standalone.jar` [Download](http://www.seleniumhq.org/download/)

### Install Node and bot dependencies
1. `curl -sL https://deb.nodesource.com/setup_6.x -o nodesource_setup.sh `
2. `sudo bash nodesource_setup.sh`
3. `rm nodesource_setup.sh`
4. `sudo apt-get install nodejs`
5. `npm install`


### Setup - Run Selenium
If you have desktop environment (example: gnome) run:
1. `npm run start-selenium-desktop`

If you have not desktop environment (on server) run:
1. `npm run start-selenium-server`

#### Check if work, run:
1. `pm2 logs`
2. If last line is `INFO - Selenium Server is up and running` selenium work great.

BUG: if you received `Unable to access jarfile` edit `sh` files in `bin folder` and add full path of binary, example:

`java -Dwebdriver.chrome.driver="/home/your_name/instagram-bot.js/bin/chromedriver" -jar ./home/your_name/instagram-bot.js/bin/selenium-server-standalone.jar`

## Setup - Run Bot
1. Copy root file `config.js.tpl` to `config.js`, fill it properly.
2. Start the bot via `npm run start`.

# License

GNU GENERAL PUBLIC LICENSE

Copyright (c) 2017 Patryk Rzucidło (PTKDev)
