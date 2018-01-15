/**
 * Utils
 * =====================
 * Logger and other functions...
 *
 * @author:     Patryk Rzucidlo [@ptkdev] <info@ptkdev.it> (https://ptkdev.it)
 * @license:    This code and contributions have 'GNU General Public License v3'
 * @version:    0.2
 * @changelog:  0.1 initial release
 *              0.2 new pattern
 *
 */
class Utils {
    constructor(bot, config) {
        this.bot = bot;
        this.config = config;
    }
    /**
     * Logger
     * =====================
     * Better than console.log() 
     *
     * @author:     Patryk Rzucidlo [@ptkdev] <info@ptkdev.it> (https://ptkdev.it)
     * @license:    This code and contributions have 'GNU General Public License v3'
     * @version:    0.1
     * @changelog:  0.1 initial release
     *
     */
    logger(type, func, text) {
        console.log(type + " " + func + ": " + text);
    }

    /**
     * Screenshot
     * =====================
     * Save screenshot from chrome
     *
     * @author:     Patryk Rzucidlo [@ptkdev] <info@ptkdev.it> (https://ptkdev.it)
     * @license:    This code and contributions have 'GNU General Public License v3'
     * @version:    0.1
     * @changelog:  0.1 initial release
     *
     */
    screenshot(bot, func, name) {
        bot.saveScreenshot('./logs/screenshot/' + this.config.instagram_username + '_' + func + '_' + name + '.png');
    }

    /**
     * Random
     * =====================
     * Random number between two numbers
     *
     * @author:     Patryk Rzucidlo [@ptkdev] <info@ptkdev.it> (https://ptkdev.it)
     * @license:    This code and contributions have 'GNU General Public License v3'
     * @version:    0.1
     * @changelog:  0.1 initial release
     *
     */
    random_interval(min, max) {
        return (Math.floor(Math.random() * (max - min + 1)) + min) * 1000;
    }

    /**
     * Sleep
     * =====================
     * Zzz
     *
     * @author:     Patryk Rzucidlo [@ptkdev] <info@ptkdev.it> (https://ptkdev.it)
     * @license:    This code and contributions have 'GNU General Public License v3'
     * @version:    0.1
     * @changelog:  0.1 initial release
     *
     */
    sleep(sec) {
        let sleep = require('system-sleep');
        sleep(sec);
    }

}

module.exports = (bot, config, utils) => { return new Utils(bot, config, utils); };