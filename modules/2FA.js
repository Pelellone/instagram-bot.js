/**
 * Two Factor Authentication (2FA) Flow
 * =====================
 * Bot flow of instagram pin request at login
 *
 * @author:     Patryk Rzucidlo [@ptkdev] <info@ptkdev.it> (https://ptkdev.it)
 * @license:    This code and contributions have 'GNU General Public License v3'
 * @version:    0.2
 * @changelog:  0.1 initial release
 *              0.2 new pattern
 *
 */
class Twofa {
    constructor(bot, config, utils) {
        this.bot = bot;
        this.config = config;
        this.utils = utils;
    }

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
    requestpin() {
        this.utils.logger("[WARNING]", "twofa", "please insert pin in loginpin.txt and wait 2-3 minutes... (tic... tac... tic... tac... tic...)");
        this.bot.click('form button');
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
    choice_email() {
        this.utils.logger("[INFO]", "twofa", "try switch to phone email");
        this.bot.click('section form label[for="choice_1"]');
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
    choice_sms() {
        this.utils.logger("[INFO]", "twofa", "try switch to phone sms (if possible)");
        this.bot.click('section form label[for="choice_0"]');
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
    sendpin() {
        this.choice_sms();
        this.utils.sleep(this.utils.random_interval(4, 8));
        this.requestpin();
        this.utils.sleep(this.utils.random_interval(4, 8));
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
    readpin() {
        this.utils.logger("[INFO]", "twofa", "readpin");
        const fs = require('fs');
        let self = this;
        try {
            let pin = fs.readFileSync(__dirname + "/../loginpin.txt").toString();
            self.utils.logger("[INFO]", "twofa", pin);
            self.bot.setValue('input[name="security_code"]', pin);
            self.utils.screenshot(self.bot, "twofa", "readpin");
        } catch (err) {
            self.utils.logger("[INFO]", "twofa", "err" + err);
        }

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
    submit() {
        this.utils.logger("[INFO]", "twofa", "submit");
        this.bot.click('form button');
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
    async submitverify() {
        let self = this;
        let status = "";
        let attr = "";
        try {
            attr = await this.bot.getAttribute('input[name="security_code"]', 'value');
            self.utils.logger("[ERROR]", "twofa", "twofa: OMG! You are slow... Restart bot and retry... Idiot...");
            self.utils.screenshot(self.bot, "twofa", "submitverify_error");
            status = 0;
        } catch (err) {
            self.utils.logger("[INFO]", "twofa", "pin is ok");
            self.utils.screenshot(self.bot, "twofa", "submitverify_ok");
            status = 1;
        }
        this.utils.sleep(this.utils.random_interval(4, 8));
        if (status == 1) {
            try {
                attr = await this.bot.getAttribute('input[name="username"]', 'value');
                self.utils.logger("[ERROR]", "twofa", "instagram error... auto logout... restart bot...");
                self.utils.screenshot(self.bot, "twofa", "submitverify_error2");
                status = 0;
            } catch (err) {
                self.utils.logger("[INFO]", "twofa", "instagram no have a crash");
                self.utils.screenshot(self.bot, "twofa", "submitverify_ok2");
                status = 1;
            }
        }
        this.utils.sleep(this.utils.random_interval(4, 8));
        return status;
    }

    /**
     * Return bot with cookie
     * =====================
     * Bot session
     *
     * @author:     Patryk Rzucidlo [@ptkdev] <info@ptkdev.it> (https://ptkdev.it)
     * @license:    This code and contributions have 'GNU General Public License v3'
     * @version:    0.1
     * @changelog:  0.1 initial release
     *
     */
    get_bot() {
        return this.bot;
    }
}


module.exports = (bot, config, utils) => { return new Twofa(bot, config, utils); };