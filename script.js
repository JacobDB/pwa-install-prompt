/**
 * PWA Install Prompt 0.1.5
 * Prompt users to add your PWA to their home screen, since Apple won’t.
 * https://github.com/JacobDB/pwa-install-prompt/
 *
 * Copyright 2018 Jacob Bearce
 *
 * Released under the MIT License
 *
 * Released on: October 23, 2018
 */

(function (global, factory) {
    typeof exports === "object" && typeof module !== "undefined" ? module.exports = factory() :
    typeof define === "function" && define.amd ? define(factory) :
    (global.pwaInstallPrompt = factory());
}(this, (() => {
    const DEFAULTS = {
        container:    ".pwa-install-prompt__container",
        buttons:      ".pwa-install-prompt__container button",
        active_class: "is-active",
        show_after:   14,
        expires:      28,
        condition:    null,
    };

    const NEEDS_TO_SEE_PROMPT = (options) => {
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

    const INSTALL_PROMPT = ((container = DEFAULTS.container, options = {}) => {
        options.container    = container;
        options.buttons      = options.buttons      || DEFAULTS.buttons;
        options.active_class = options.active_class || DEFAULTS.active_class;
        options.show_after   = options.show_after   || DEFAULTS.show_after;
        options.expires      = options.expires      || DEFAULTS.expires;
        options.condition    = options.condition    || DEFAULTS.condition;

        const CONTAINER = document.querySelector(options.container);
        const BUTTONS   = document.querySelectorAll(options.buttons);

        if (NEEDS_TO_SEE_PROMPT(options)) {
            if (CONTAINER) {
                CONTAINER.classList.add(options.active_class);
            }
        }

        if (BUTTONS.length) {
            BUTTONS.forEach((button) => {
                button.addEventListener("click", () => {
                    CONTAINER.classList.remove(options.active_class);
                })
            });
        }
    });

    return INSTALL_PROMPT;
})));
