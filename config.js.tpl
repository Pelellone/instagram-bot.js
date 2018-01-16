module.exports = {
    // Node Configs
    "debug": true,

    // BOT Configs
    // [WORK] likemode_classic - select random hashtag from config list and like 1 random photo (of last 20) | 750-900 like/day.
    // [TODO] likemode_superlike - select random hashtag from config list and like 3 random photo of same user | 750-900 like/day.
    // [TODO] fdfmode_classic - follow user from random hashtag and defollow after 1h | 300 follow-defollow/day.
    // [TODO] fdfmode_defollowall - defollow all your following (not defollow users in whitelist) | 90 defollow/hour.
    "bot_mode" : "likemode_classic",

    // Instagram Account
    "instagram_username": "ptkdev", //without @
    "instagram_password": "password",
    "instagram_hashtag": ['muraleshunter','like4like','follow4follow'], //without #
    "instagram_userwhitelist": [''], //without @

    // Selenium Configs
    "selenium_browser": "chrome",
    // --headless    - hide chrome (mandatory on server without gnome or other DE).
    // --disable-gpu - if you not have good gpu on server
    // --no-sandbox  - if you run bot with root command (without on server bot not work)
    "selenium_chrome_path": "/opt/google/chrome/google-chrome",
    "selenium_chrome_options": ['headless','disable-gpu', 'no-sandbox', 'window-size=1920x1080'],
    "selenium_host": "localhost",
    "selenium_port": 4444
};