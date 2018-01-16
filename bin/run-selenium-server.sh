#!/bin/sh
xvfb-run --server-args='-screen 0, 1920x1080x16' java -Dwebdriver.chrome.driver="/home/ptkdev/instagram-bot.js/bin/chromedriver" -jar /home/ptkdev/instagram-bot.js/bin/selenium-server-standalone.jar
