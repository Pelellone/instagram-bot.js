/**
 * Two Factor Authentication
 * =====================
 * Bot flow of instagram pin request at login
 *
 * @author:     Patryk Rzucidlo [@ptkdev] <info@ptkdev.it> (https://ptkdev.it)
 * @license:    This code and contributions have 'GNU General Public License v3'
 * @version:    0.1
 * @changelog:  0.1 initial release
 *
 */
/**
 * Login PIN: tweet
 * =====================
 * Press submit button
 *
 * @author:     Patryk Rzucidlo [@ptkdev] <info@ptkdev.it> (https://ptkdev.it)
 * @license:    This code and contributions have 'GNU General Public License v3'
 * @version:    0.1
 * @changelog:  0.1 initial release
 *
 */
function loginpin_requestpin() {
    logger("[WARNING]", "loginpin", "please insert pin in loginpin.txt and wait 3 minutes... (tic... tac... tic... tac... tic...)");
    bot.click('section form button');
}

/**
 * Login PIN: Choice Email
 * =====================
 * Press on email choice
 *
 * @author:     Patryk Rzucidlo [@ptkdev] <info@ptkdev.it> (https://ptkdev.it)
 * @license:    This code and contributions have 'GNU General Public License v3'
 * @version:    0.1
 * @changelog:  0.1 initial release
 *
 */
function loginpin_choice_email() {
    logger("[INFO]", "loginpin", "try switch to phone email");
    bot.click('section form label[for="choice_1"]');
}

/**
 * Login PIN: Choice SMS
 * =====================
 * Press on email sms
 *
 * @author:     Patryk Rzucidlo [@ptkdev] <info@ptkdev.it> (https://ptkdev.it)
 * @license:    This code and contributions have 'GNU General Public License v3'
 * @version:    0.1
 * @changelog:  0.1 initial release
 *
 */
function loginpin_choice_sms() {
    logger("[INFO]", "loginpin", "try switch to phone sms (if possible)");
    bot.click('section form label[for="choice_0"]');
}

/**
 * Login PIN: Switch for SMS or Email pin
 * =====================
 * Set default pin receiver method
 *
 * @author:     Patryk Rzucidlo [@ptkdev] <info@ptkdev.it> (https://ptkdev.it)
 * @license:    This code and contributions have 'GNU General Public License v3'
 * @version:    0.1
 * @changelog:  0.1 initial release
 *
 */
function loginpin_sendpin() {
    setTimeout(loginpin_choice_sms, random_interval(15, 20));
    setTimeout(loginpin_requestpin, random_interval(20, 25));
}

/**
 * Login PIN: Read pint
 * =====================
 * Open loginpin.txt and insert in security-code input
 *
 * @author:     Patryk Rzucidlo [@ptkdev] <info@ptkdev.it> (https://ptkdev.it)
 * @license:    This code and contributions have 'GNU General Public License v3'
 * @version:    0.1
 * @changelog:  0.1 initial release
 *
 */
function loginpin_readpin() {
    fs.readFile(__dirname + "/loginpin.txt", function(err, data) {
        if (err) {
            logger("[INFO]", "loginpin_error", err);
        } else {
            let pin = data.toString();
            logger("[INFO]", "loginpin", pin);
            bot.setValue('input[name="security_code"]', pin);
            bot.saveScreenshot('./logs/screenshot/' + config.instagram_username + '_pin_status2.png');
        }
    });
}

/**
 * Login PIN: check errors
 * =====================
 * Check if submit not have errors
 *
 * @author:     Patryk Rzucidlo [@ptkdev] <info@ptkdev.it> (https://ptkdev.it)
 * @license:    This code and contributions have 'GNU General Public License v3'
 * @version:    0.1
 * @changelog:  0.1 initial release
 *
 */
function loginpin_submitverify() {
    bot.getAttribute('input[name="security_code"]', 'value').then(function(attr) {
        logger("[ERROR]", "loginpin", "loginpin: OMG! You are slow... Restart bot and retry... Idiot...");
        bot.saveScreenshot('./logs/screenshot/' + config.instagram_username + '_pin_status3_error.png');
        bot_error = true;
    }).catch(function(err) {
        logger("[INFO]", "login", "pin is ok");
        bot.saveScreenshot('./logs/screenshot/' + config.instagram_username + '_pin_status3.png');
    });
}

/**
 * Login PIN: Final submit
 * =====================
 * Open loginpin.txt and insert in security-code input
 *
 * @author:     Patryk Rzucidlo [@ptkdev] <info@ptkdev.it> (https://ptkdev.it)
 * @license:    This code and contributions have 'GNU General Public License v3'
 * @version:    0.1
 * @changelog:  0.1 initial release
 *
 */
function loginpin_submit() {
    bot.click('section form button');
}

/**
 * Login PIN: Check if login request pin
 * =====================
 * Start loginpin flow or mode flow
 *
 * @author:     Patryk Rzucidlo [@ptkdev] <info@ptkdev.it> (https://ptkdev.it)
 * @license:    This code and contributions have 'GNU General Public License v3'
 * @version:    0.1
 * @changelog:  0.1 initial release
 *
 */
function loginpin_check() {
    setTimeout(function() {
        logger("[INFO]", "login", "instagram request pin?");
        bot.getAttribute('#choice_1', 'value').then(function(attr) {
            logger("[INFO]", "login", "yes, instagram require security pin... You can not pass!1!111! (cit.)");
            bot.saveScreenshot('./logs/screenshot/' + config.instagram_username + '_pin_status.png');
            loginpin();
        }).catch(function(err) {
            logger("[INFO]", "login", "no, bot is at work (started)... Wait...");
            logger("[INFO]", "login", "restarting current mode");
            clearTimeout(bot_likemode_timer);
            likemode_classic(true);
        });

    }, random_interval(40, 45));
}
/**
 * Login PIN Flow
 * =====================
 *
 * @author:     Patryk Rzucidlo [@ptkdev] <info@ptkdev.it> (https://ptkdev.it)
 * @license:    This code and contributions have 'GNU General Public License v3'
 * @version:    0.1
 * @changelog:  0.1 initial release
 *
 */
function loginpin() {
    logger("[INFO]", "loginpin", "loading...");
    setTimeout(loginpin_sendpin, random_interval(5, 10));
    setTimeout(loginpin_readpin, random_interval(170, 180));
    setTimeout(loginpin_submit, random_interval(185, 190));
    setTimeout(loginpin_submitverify, random_interval(195, 200));

}