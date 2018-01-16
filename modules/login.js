/**
 * Login Flow
 * =====================
 * Write / and see commands of bot
 *
 * @author:     Patryk Rzucidlo [@ptkdev] <info@ptkdev.it> (https://ptkdev.it)
 * @license:    This code and contributions have 'GNU General Public License v3'
 * @version:    0.2
 * @changelog:  0.1 initial release
 *              0.2 new pattern
 *
 */
class Login {
    constructor(bot, config, utils) {
        this.bot = bot;
        this.config = config;
        this.utils = utils;
    }
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
    open_loginpage() {
        this.utils.logger("[INFO]", "login", "open_loginpage");
        this.bot.url('https://www.instagram.com/accounts/login/');
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
    set_username() {
        this.bot.setValue('input[name="username"]', this.config.instagram_username);
        this.utils.logger("[INFO]", "login", "set_username");
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
    set_password() {
        this.bot.setValue('input[name="password"]', this.config.instagram_password);
        this.utils.logger("[INFO]", "login", "set_password");
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
    submit() {
        this.utils.logger("[INFO]", "login", "submit");
        this.utils.screenshot(this.bot, "login", "submit");
        this.bot.click('form button');
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
    async submitverify() {
        this.utils.logger("[INFO]", "login", "checkerrors");
        let self = this;
        let status = null;
        try {
            let text = await this.bot.getText('#slfErrorAlert');
            status = 0;
            self.utils.logger("[ERROR]", "login", text + " (restart bot and retry...)");
            self.utils.screenshot(self.bot, "login", "checkerrors_error");
        } catch (err) {
            status = 1;
            self.utils.logger("[INFO]", "login", "password is correct");
            self.utils.screenshot(self.bot, "login", "checkerrors");
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

module.exports = (bot, config, utils) => { return new Login(bot, config, utils); };