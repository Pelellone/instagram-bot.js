/**
 * Login Flow
 * =====================
 * Write / and see commands of bot
 *
 * @author:     Patryk Rzucidlo [@ptkdev] <info@ptkdev.it> (https://ptkdev.it)
 * @license:    This code and contributions have 'GNU General Public License v3'
 * @link:       http://telegraf.js.org/#/?id=command
 * @version:    0.1
 * @changelog:  0.1 initial release
 *
 */

/**
 * Open login page
 * =====================
 * Browser start
 *
 * @author:     Patryk Rzucidlo [@ptkdev] <info@ptkdev.it> (https://ptkdev.it)
 * @license:    This code and contributions have 'GNU General Public License v3'
 * @version:    0.1
 * @changelog:  0.1 initial release
 *
 */
function login_open_formpage() {
    bot.url('https://www.instagram.com/accounts/login/');
}

/**
 * Compile input
 * =====================
 * Set username
 *
 * @author:     Patryk Rzucidlo [@ptkdev] <info@ptkdev.it> (https://ptkdev.it)
 * @license:    This code and contributions have 'GNU General Public License v3'
 * @version:    0.1
 * @changelog:  0.1 initial release
 *
 */
function login_setusername() {
    bot.setValue('input[name="username"]', instagram_username);
}

/**
 * Compile input
 * =====================
 * Set password
 *
 * @author:     Patryk Rzucidlo [@ptkdev] <info@ptkdev.it> (https://ptkdev.it)
 * @license:    This code and contributions have 'GNU General Public License v3'
 * @version:    0.1
 * @changelog:  0.1 initial release
 *
 */
function login_set_password() {
    bot.setValue('input[name="password"]', instagram_password);
}

/**
 * Login
 * =====================
 * Press submit button
 *
 * @author:     Patryk Rzucidlo [@ptkdev] <info@ptkdev.it> (https://ptkdev.it)
 * @license:    This code and contributions have 'GNU General Public License v3'
 * @version:    0.1
 * @changelog:  0.1 initial release
 *
 */
function login_submit() {
    bot.saveScreenshot('./logs/screenshot/' + config.instagram_username + '_login_status.png');
    bot.click('form button');
}

/**
 * Login check errors
 * =====================
 * Bad password or similar
 *
 * @author:     Patryk Rzucidlo [@ptkdev] <info@ptkdev.it> (https://ptkdev.it)
 * @license:    This code and contributions have 'GNU General Public License v3'
 * @version:    0.1
 * @changelog:  0.1 initial release
 *
 */
function login_checkerrors() {
    bot.getText('#slfErrorAlert').then(function(text) {
        bot_error = true;
        logger("[ERROR]", "login", text + " (restart bot and retry...)");
        bot.saveScreenshot('./logs/screenshot/' + config.instagram_username + '_login_error.png');
    }).catch(function(err) {
        logger("[INFO]", "login", "password is correct");
        bot.saveScreenshot('./logs/screenshot/' + config.instagram_username + '_login_status2.png');
    });
}

/**
 * Login flow
 * =====================
 *
 * @author:     Patryk Rzucidlo [@ptkdev] <info@ptkdev.it> (https://ptkdev.it)
 * @license:    This code and contributions have 'GNU General Public License v3'
 * @version:    0.1
 * @changelog:  0.1 initial release
 *
 */
function login() {
    logger("[INFO]", "login", "loading...");
    login_open_formpage();
    setTimeout(login_setusername, random_interval(5, 10));
    setTimeout(login_set_password, random_interval(15, 20));
    setTimeout(login_submit, random_interval(25, 30));
    setTimeout(login_checkerrors, random_interval(35, 40));
}