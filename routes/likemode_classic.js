/**
 * MODE: likemode_classic
 * =====================
 * Select random hashtag from config list and like 1 random photo (of last 20) | 750-900 like/day.
 *
 * @author:     Patryk Rzucidlo [@ptkdev] <info@ptkdev.it> (https://ptkdev.it)
 * @license:    This code and contributions have 'GNU General Public License v3'
 * @version:    0.1
 * @changelog:  0.1 initial release
 *
 */

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
function like_open_hashtagpage() {
    let hashtag_tag = instagram_hashtag[Math.floor(Math.random() * instagram_hashtag.length)];
    logger("[INFO]", "like", "current hashtag " + hashtag_tag);
    bot.url('https://www.instagram.com/explore/tags/' + hashtag_tag + '/');
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
function like_get_urlpic() {
    bot.saveScreenshot('./logs/screenshot/' + config.instagram_username + '_last_hashtag_status.png');
    bot.getAttribute('main a', 'href').then(function(attr) {
        photo_url = attr[Math.floor(Math.random() * attr.length)];
        logger("[INFO]", "like", "current photo url " + photo_url);
        bot.url(photo_url);
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
function like_click_heart() {
    bot.click('article section ._eszkz');
    logger("[INFO]", "like", "OK");
    bot.saveScreenshot('./logs/screenshot/' + config.instagram_username + '_last_like_status.png');
}

/**
 * likemode_classic: flow
 * =====================
 *
 * @author:     Patryk Rzucidlo [@ptkdev] <info@ptkdev.it> (https://ptkdev.it)
 * @license:    This code and contributions have 'GNU General Public License v3'
 * @version:    0.1
 * @changelog:  0.1 initial release
 *
 */
function like() {
    logger("[INFO]", "like", "loading...");
    setTimeout(like_open_hashtagpage, random_interval(3, 6));
    setTimeout(like_get_urlpic, random_interval(9, 12));
    setTimeout(like_click_heart, random_interval(15, 18));
}

/**
 * likemode_classic: loop
 * =====================
 *
 * @author:     Patryk Rzucidlo [@ptkdev] <info@ptkdev.it> (https://ptkdev.it)
 * @license:    This code and contributions have 'GNU General Public License v3'
 * @version:    0.1
 * @changelog:  0.1 initial release
 *
 */
function likemode_classic(notimer = false) {
    logger("[INFO]", "likemode", "classic");
    if (!notimer) {
        bot_likemode_timer = setTimeout(function() {
            setInterval(function() {
                if (bot_error == false) {
                    like();
                }
            }, random_interval(96, 108));
        }, random_interval(205, 210));
    } else {
        if (bot_error == false) {
            like();
        }
        setInterval(function() {
            if (bot_error == false) {
                like();
            }
        }, random_interval(96, 108));
    }

}