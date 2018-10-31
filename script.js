/**
 * PWA Install Prompt 0.1.14
 * Prompt users to add your PWA to their home screen, since Apple won’t.
 * https://github.com/JacobDB/pwa-install-prompt/
 *
 * Copyright 2018 Jacob Bearce
 *
 * Released under the MIT License
 *
 * Released on: October 31, 2018
 */

(function (global, factory) {
    typeof exports === "object" && typeof module !== "undefined" ? module.exports = factory() :
    typeof define === "function" && define.amd ? define(factory) :
    (global.pwaInstallPrompt = factory());
}(this, (function () {
    const DEFAULTS = {
        active_class: "is-active",
        closer:       ".pwa-install-prompt__overlay",
        condition:    null,
        container:    ".pwa-install-prompt__container",
        expires:      28,
        show_after:   14,
    };

    const NEEDS_TO_SEE_PROMPT = function (options) {
        // allow user to set a custom condition that overrides below
        if (options.condition !== null) {
            return options.condition;
        }

        // never show it if the app was launched standalone
        if (navigator.standalone) {
            return false;
        }

        // get the current date and the date the user last visited
        const NOW  = Date.now();
        const THEN = document.cookie.match(/last_visit=([0-9]+)/);

        // update the last_visit cookie with Date.now()
        document.cookie = "last_visit=" + NOW + "; max-age=" + (60 * 60 * 24 * options.expires);

        // get the number of days since the user last visited and check if they're using iOS
        const DAYS = THEN && THEN.length >= 2 ? Math.ceil((parseInt(THEN[1]) - NOW) / (1000 * 60 * 60 * 24)) : NaN;
        const IOS  = ["iPad", "iPhone", "iPod"].indexOf(navigator.platform) > 0;

        // show if the cookie isn't set, or last visit is > show_after, and it's iOS
        return (isNaN(DAYS) || DAYS > options.show_after) && IOS;
    };

    const INSTALL_PROMPT = (function (container = DEFAULTS.container, options = {}) {
        options.active_class = options.active_class || DEFAULTS.active_class;
        options.closer       = options.closer       || DEFAULTS.closer;
        options.condition    = options.condition    || DEFAULTS.condition;
        options.container    = container;
        options.expires      = options.expires      || DEFAULTS.expires;
        options.show_after   = options.show_after   || DEFAULTS.show_after;

        // store the arguments for later
        this.container = container;
        this.options   = options;

        const PROMPT = this;

        // open if the conditional returns true
        if (NEEDS_TO_SEE_PROMPT(PROMPT.options)) {
            PROMPT.open();
        }

        const CLOSER = document.querySelector(PROMPT.options.closer);

        // close if the closer is clicked
        if (CLOSER) {
            CLOSER.addEventListener("click", function () {
                PROMPT.close();
            });
        }
    });

    INSTALL_PROMPT.prototype.open = function () {
        const PROMPT    = this;
        const CONTAINER = document.querySelector(PROMPT.options.container);

        if (CONTAINER) {
            CONTAINER.classList.add(PROMPT.options.active_class);
        }
    };

    INSTALL_PROMPT.prototype.close = function () {
        const PROMPT    = this;
        const CONTAINER = document.querySelector(PROMPT.options.container);

        if (CONTAINER) {
            CONTAINER.classList.remove(PROMPT.options.active_class);
        }
    };

    return INSTALL_PROMPT;
})));
