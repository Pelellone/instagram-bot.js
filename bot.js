/**
 * InstagramBot.js
 * =====================
 * Instagram Bot made with love and nodejs
 *
 * @author:     Patryk Rzucidlo [@ptkdev] <info@ptkdev.it> (https://ptkdev.it)
 * @file:       bot.js
 * @version:    0.1
 *
 * @license:    Code and contributions have 'GNU General Public License v3'
 *              This program is free software: you can redistribute it and/or modify
 *              it under the terms of the GNU General Public License as published by
 *              the Free Software Foundation, either version 3 of the License, or
 *              (at your option) any later version.
 *              This program is distributed in the hope that it will be useful,
 *              but WITHOUT ANY WARRANTY; without even the implied warranty of
 *              MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *              GNU General Public License for more details.
 *              You should have received a copy of the GNU General Public License
 *              along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 * @link        Homepage:     https://instagram-bot.js.ptkdev.io
 *              GitHub Repo:  https://github.com/ptkdev/instagram-bot.js
 */

/**
 * Libs
 * =====================
 * Open source library
 *
 * @author:     Patryk Rzucidlo [@ptkdev] <info@ptkdev.it> (https://ptkdev.it)
 * @license:    This code and contributions have 'GNU General Public License v3'
 * @version:    0.1
 * @link:       http://webdriver.io/
 * @changelog:  0.1 initial release
 *
 */
const webdriverio = require('webdriverio');
const path = require('path');
const fs = require('fs');
const config = require(__dirname + '/config');
const instagram_username = config.instagram_username;
const instagram_password = config.instagram_password;
const instagram_hashtag = config.instagram_hashtag;
const instagram_userwhitelist = config.instagram_userwhitelist;
const options = {
    desiredCapabilities: {
        browserName: config.selenium_browser,
        chromeOptions: {
            args: config.selenium_chrome_options
        },
        binary: config.selenium_chrome_path,
        host: config.selenium_host,
        port: config.selenium_port
    }
};

/**
 * Init
 * =====================
 * Get username, password and hashtag of bot from /config.js
 * If not exist rename config.js.tmpl to config.js and change strings
 *
 * @author:     Patryk Rzucidlo [@ptkdev] <info@ptkdev.it> (https://ptkdev.it)
 * @license:    This code and contributions have 'GNU General Public License v3'
 * @version:    0.1
 * @changelog:  0.1 initial release
 *
 */
let client = webdriverio.remote(options);
let bot = client.init();
var bot_error = false; //need global
var bot_likemode_timer = ""; //need global

/**
 * Import libs
 * =====================
 * Flow and utilty routes
 *
 * @author:     Patryk Rzucidlo [@ptkdev] <info@ptkdev.it> (https://ptkdev.it)
 * @license:    This code and contributions have 'GNU General Public License v3'
 * @version:    0.1
 * @changelog:  0.1 initial release
 *
 */
eval(fs.readFileSync(__dirname + '/routes/utils.js') + '');
eval(fs.readFileSync(__dirname + '/routes/2FA.js') + '');
eval(fs.readFileSync(__dirname + '/routes/likemode_classic.js') + '');
eval(fs.readFileSync(__dirname + '/routes/login.js') + '');

/**
 * Start Bot
 * =====================
 *
 * @author:     Patryk Rzucidlo [@ptkdev] <info@ptkdev.it> (https://ptkdev.it)
 * @license:    This code and contributions have 'GNU General Public License v3'
 * @version:    0.1
 * @changelog:  0.1 initial release
 *
 */
function start_bot() {
    login();
    loginpin_check();
    likemode_classic();
}

start_bot();