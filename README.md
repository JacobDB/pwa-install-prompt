# PWA Install Prompt

![screenshot](screenshot.png)

Prompt users to add your PWA to their home screen, since Apple won’t.

By default, this module checks if the user has not visited the site before, or if the last time they visited the site was more than 14 days ago, and if they are using iOS. If all conditions are met, then the prompt is shown. The conditions that get checked can be overridden in order to use this prompt for custom scenarios.

*[Inspired by Scott Batson @ DockYard](https://dockyard.com/blog/2017/09/27/encouraging-pwa-installation-on-ios)*

## Demo

https://jacobdb.github.io/pwa-install-prompt/demo/

## Installation

### via npm

```sh
npm install pwa-install-prompt --save
```

### via yarn

```sh
yarn add pwa-install-prompt
```

## Usage

```js
import pwaInstallPrompt from "pwa-install-prompt";

new pwaInstallPrompt(".pwa-install-prompt__container", {
    active_class: "is-active",
    closer: ".pwa-install-prompt__overlay",
    condition: null,
    expires: 180,
    show_after: 90,
    on: {
        beforeOpen: function () {
            console.log("before open!");
        },
        afterOpen: function () {
            console.log("after open!");
        },
        beforeClose: function () {
            console.log("before close!");
        },
        afterClose: function () {
            console.log("after close!");
        },
    }
});
```

## Default Markup

```html
<div class="pwa-install-prompt__container">
    <button class="pwa-install-prompt__overlay">Close</button>
    <div class="pwa-install-prompt">
        <div class="pwa-install-prompt__icon__container">
            <img class="pwa-install-prompt__icon" src="/path/to/icon/file.png" alt="{app_name}" />
        </div>
        <div class="pwa-install-prompt__content">
            <h3 class="pwa-install-prompt__title">Install {app_name}</h3>
            <p class="pwa-install-prompt__text">Install this application on your home screen for quick and easy access when you’re on the go.</p>
            <p class="pwa-install-prompt__guide">Just tap <svg class="pwa-install-prompt__guide__icon" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><title>Share</title><path fill="#007AFF" d="M48.883,22.992L61.146,10.677L61.146,78.282C61.146,80.005 62.285,81.149 64,81.149C65.715,81.149 66.854,80.005 66.854,78.282L66.854,10.677L79.117,22.992C79.693,23.57 80.256,23.853 81.114,23.853C81.971,23.853 82.534,23.57 83.11,22.992C84.25,21.848 84.25,20.125 83.11,18.981L65.997,1.794C65.715,1.511 65.421,1.215 65.139,1.215C64.563,0.932 63.718,0.932 62.861,1.215C62.579,1.498 62.285,1.498 62.003,1.794L44.89,18.981C43.75,20.125 43.75,21.848 44.89,22.992C46.029,24.149 47.744,24.149 48.883,22.992ZM103.936,35.32L81.114,35.32L81.114,41.053L103.936,41.053L103.936,121.27L24.064,121.27L24.064,41.053L46.886,41.053L46.886,35.32L24.064,35.32C20.928,35.32 18.355,37.904 18.355,41.053L18.355,121.27C18.355,124.419 20.928,127.003 24.064,127.003L103.936,127.003C107.072,127.003 109.645,124.419 109.645,121.27L109.645,41.053C109.645,37.891 107.072,35.32 103.936,35.32Z" /></svg> then “Add to Home Screen”</p>
        </div>
    </div>
</div>
```

## Options

| Option         | Type       | Default                                 | Description                                                 |
|----------------|------------|-----------------------------------------|-------------------------------------------------------------|
| `active_class` | `string`   | `is-active`                             | Class name to be added when the prompt is visible           |
| `closer`       | `string`   | `.pwa-install-prompt__overlay`          | Query selector to target to handle closing the prompt       |
| `condition`    | `function` | `null`                                  | Set a custom condition to determine when to show the prompt |
| `expires`      | `number`   | `180`                                   | Number of days before the `last_visit` cookie expires       |
| `show_after`   | `number`   | `90`                                    | Number of days to wait before showing the prompt again      |
| `on`           | `object`   | `null`                                  | Register event handlers                                     |

## Events

Events can be assigned in two ways:

1. Using on parameter on PWA Install Prompt initialization:

        var prompt = new pwaInstallPrompt(".pwa-install-prompt__container", {
            // ...
            on: {
                open: function () {
                    console.log("prompt opened!");
                },
            },
        });

2. Using on method after PWA Install Prompt initialization.

        var prompt = new pwaInstallPrompt(".pwa-install-prompt__container", {
            // ...
        });

        prompt.on("open", function () {
            console.log("prompt opened!");
        });

| Name          | Description                                       |
|---------------|---------------------------------------------------|
| `beforeOpen`  | Event will be fired right before prompt is opened |
| `afterOpen`   | Event will be fired right after prompt is opened  |
| `beforeClose` | Event will be fired right before prompt is closed |
| `afterClose`  | Event will be fired right after prompt is closed  |

## Contributors

- [Jacob Bearce](https://github.com/JacobDB) &ndash; [Commits](https://github.com/JacobDB/pwa-install-prompt/commits?author=JacobDB)
- [Sergio Arbeo](https://github.com/Serabe) &ndash; [Commits](https://github.com/JacobDB/pwa-install-prompt/commits?author=Serabe)
