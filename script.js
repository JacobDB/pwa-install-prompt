/**
 * PWA Install Prompt 1.0.2
 * Prompt users to add your PWA to their home screen, since Apple won’t.
 * https://github.com/JacobDB/pwa-install-prompt/
 *
 * Copyright 2018 Jacob Bearce
 *
 * Released under the MIT License
 *
 * Released on: November 6, 2018
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
        expires:      180,
        show_after:   90,
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
        const THEN = document.cookie.match(/pwa_install_prompt_last_visit=([0-9]+)/);

        // update the pwa_install_prompt_last_visit cookie with Date.now()
        document.cookie = "pwa_install_prompt_last_visit=" + NOW + "; max-age=" + (60 * 60 * 24 * options.expires);

        // get the number of days since the user last visited and check if they're using iOS
        const DAYS = THEN && THEN.length >= 2 ? Math.ceil((parseInt(THEN[1]) - NOW) / (1000 * 60 * 60 * 24)) : NaN;
        const IOS  = ["iPad", "iPhone", "iPod"].indexOf(navigator.platform) > -1;

        // show if the cookie isn't set, or last visit is > show_after, and it's iOS
        return (isNaN(DAYS) || DAYS > options.show_after) && IOS;
    };

    const INSTALL_PROMPT = (function (container = DEFAULTS.container, options = {}) {
        const PROMPT = this;

        options.active_class = options.active_class || DEFAULTS.active_class;
        options.closer       = options.closer       || DEFAULTS.closer;
        options.condition    = options.condition    || DEFAULTS.condition;
        options.container    = container;
        options.expires      = options.expires      || DEFAULTS.expires;
        options.show_after   = options.show_after   || DEFAULTS.show_after;
        options.on           = options.on           || false;

        // store the arguments for later
        PROMPT.container       = container;
        PROMPT.options         = options;
        PROMPT.eventListeners = {};

        if (PROMPT.options.on) {
            // listen for each event specified
            Object.keys(PROMPT.options.on).forEach(function (event_name) {
                PROMPT.on(event_name, PROMPT.options.on[event_name]);
            });
        }

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

    INSTALL_PROMPT.prototype.on = function (events, handler) {
        const PROMPT = this;

        // prevent errors if a function wasn't passed
        if (typeof handler !== "function") { return PROMPT; }

        // set up eventListeners array to associate events with their specified handlers
        events.split(" ").forEach(function (event) {
            if (!PROMPT.eventListeners[event]) { PROMPT.eventListeners[event] = []; }
            PROMPT.eventListeners[event].push(handler);
        });

        return PROMPT;
    };

    INSTALL_PROMPT.prototype.emit = function () {
        const PROMPT = this;

        // prevent errors if no event listeners are specified
        if (!PROMPT.eventListeners) { return PROMPT; }

        // convert the events in to an array if they're not already
        const EVENTS = Array.isArray(arguments[0]) ? arguments[0] : arguments[0].split(" ");

        EVENTS.forEach(function (event) {
            // verify that the emitted event is being listend for
            if (PROMPT.eventListeners && PROMPT.eventListeners[event]) {
                // fire each handler for the event
                PROMPT.eventListeners[event].forEach(function (eventHandler) {
                    eventHandler.apply(PROMPT);
                });
            }
        });

        return PROMPT;
    };

    INSTALL_PROMPT.prototype.open = function () {
        const PROMPT    = this;
        const CONTAINER = document.querySelector(PROMPT.options.container);

        PROMPT.emit("beforeOpen");

        if (CONTAINER) {
            CONTAINER.classList.add(PROMPT.options.active_class);
        }

        PROMPT.emit("afterOpen");
    };

    INSTALL_PROMPT.prototype.close = function () {
        const PROMPT    = this;
        const CONTAINER = document.querySelector(PROMPT.options.container);

        PROMPT.emit("beforeClose");

        if (CONTAINER) {
            CONTAINER.classList.remove(PROMPT.options.active_class);
        }

        PROMPT.emit("afterClose");
    };

    return INSTALL_PROMPT;
})));
