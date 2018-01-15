/**
 * MODE: likemode_classic
 * =====================
 * Select random hashtag from config list and like 1 random photo (of last 20) | 750-900 like/day.
 *
 * @author:     Patryk Rzucidlo [@ptkdev] <info@ptkdev.it> (https://ptkdev.it)
 * @license:    This code and contributions have 'GNU General Public License v3'
 * @version:    0.2
 * @changelog:  0.1 initial release
 *              0.2 new pattern
 *
 */
class Likemode_classic {
    constructor(bot, config, utils) {
        this.bot = bot;
        this.config = config;
        this.utils = utils;
    }
    /**
     * likemode_classic: Open Hashtag
     * =====================
     * Get random hashtag from array and open page
     *
     * @author:     Patryk Rzucidlo [@ptkdev] <info@ptkdev.it> (https://ptkdev.it)
     * @license:    This code and contributions have 'GNU General Public License v3'
     * @version:    0.1
     * @changelog:  0.1 initial release
     *
     */
    like_open_hashtagpage() {
        let hashtag_tag = this.config.instagram_hashtag[Math.floor(Math.random() * this.config.instagram_hashtag.length)];
        this.utils.logger("[INFO]", "like", "current hashtag " + hashtag_tag);
        this.bot.url('https://www.instagram.com/explore/tags/' + hashtag_tag + '/');
    }

    /**
     * likemode_classic: Open Photo
     * =====================
     * Open url of photo
     *
     * @author:     Patryk Rzucidlo [@ptkdev] <info@ptkdev.it> (https://ptkdev.it)
     * @license:    This code and contributions have 'GNU General Public License v3'
     * @version:    0.1
     * @changelog:  0.1 initial release
     *
     */
    like_get_urlpic() {
        this.utils.logger("[INFO]", "like", "like_get_urlpic");
        this.utils.screenshot(this.bot, "like", "last_hashtag");
        let self = this;
        this.bot.getAttribute('._21z45 a', 'href').then(function(attr) {
            let photo_url = attr[Math.floor(Math.random() * attr.length)];
            self.utils.logger("[INFO]", "like", "current photo url " + photo_url);
            self.bot.url(photo_url);
        }).catch(function(err) {
            self.utils.logger("[ERROR]", "like", "error" + err);
            self.utils.screenshot(self.bot, "like", "like_get_urlpic_error");
        });
    }

    /**
     * likemode_classic: Love me
     * =====================
     * Click on heart
     *
     * @author:     Patryk Rzucidlo [@ptkdev] <info@ptkdev.it> (https://ptkdev.it)
     * @license:    This code and contributions have 'GNU General Public License v3'
     * @version:    0.1
     * @changelog:  0.1 initial release
     *
     */
    like_click_heart() {
        let self = this;
        let status = "";
        this.bot.getText('.coreSpriteHeartOpen').then(function(text) {
            if (text == "Like") {
                self.bot.click('article section ._eszkz');
                self.utils.logger("[INFO]", "like", "<3 " + text);
                self.utils.screenshot(self.bot, "like", "last_like");
                status = 1;
            } else { status = 0; }
        }).catch(function(err) {
            self.utils.logger("[ERROR]", "like", "</3 (photo have like, go next photo)");
            if (self.config.debug == true)
                self.utils.logger("[DEBUG]", "like", err);
            status = 0;
        });
        this.utils.sleep(this.utils.random_interval(4, 8));
        return status;
    }

}

module.exports = (bot, config, utils) => { return new Likemode_classic(bot, config, utils); };