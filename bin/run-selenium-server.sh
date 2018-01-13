#!/bin/sh
xvfb-run --server-args='-screen 0, 1024x768x16' java -Dwebdriver.chrome.driver="./chromedriver" -jar ./selenium-server-standalone.jar
