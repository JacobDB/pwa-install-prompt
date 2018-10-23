# iOS Install Prompt

Prompt iOS users to add your PWA to their home screen, since Apple won’t.

*[Inspired by Scott Batson @ DockYard](https://dockyard.com/blog/2017/09/27/encouraging-pwa-installation-on-ios)*

## Demo

https://jacobdb.github.io/ios-install-prompt/demo/

## Installation

### via npm

```sh
npm install ios-install-prompt --save
```

### via yarn

```sh
yarn add ios-install-prompt
```

## Usage

```js
import iosInstallPrompt from "ios-install-prompt";
new iosInstallPrompt(".ios-install-prompt__container", {
    buttons: ".ios-install-prompt__container button",
    active_class: "is-active",
    show_after: 14,
});
```

## Default Markup

```html
<div class="ios-install-prompt__container">
    <button class="ios-install-prompt__overlay">Close</button>
    <div class="ios-install-prompt">
        <img class="ios-install-prompt__icon" src="/path/to/icon/file.png" alt="{app_name}" />
        <div class="ios-install-prompt__content">
            <h3 class="ios-install-prompt__title">Install {app_name}</h3>
            <p class="ios-install-prompt__text">Install this application on your home screen for quick and easy access when you’re on the go.</p>
            <p class="ios-install-prompt__guide">Just tap <svg class="ios-install-prompt__guide__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><path fill="#1A84FF" d="M381.9,181l95.8-95.8v525.9c0,13.4,8.9,22.3,22.3,22.3c13.4,0,22.3-8.9,22.3-22.3V85.2l95.8,95.8c4.5,4.5,8.9,6.7,15.6,6.7c6.7,0,11.1-2.2,15.6-6.7c8.9-8.9,8.9-22.3,0-31.2L515.6,16.1c-2.2-2.2-4.5-4.5-6.7-4.5c-4.5-2.2-11.1-2.2-17.8,0c-2.2,2.2-4.5,2.2-6.7,4.5L350.7,149.8c-8.9,8.9-8.9,22.3,0,31.2C359.6,190,373,190,381.9,181z M812,276.9H633.7v44.6H812v624H188v-624h178.3v-44.6H188c-24.5,0-44.6,20.1-44.6,44.6v624c0,24.5,20.1,44.6,44.6,44.6h624c24.5,0,44.6-20.1,44.6-44.6v-624C856.6,296.9,836.5,276.9,812,276.9z" /></svg> then “Add to Home Screen”</p>
        </div>
        <button class="ios-install-prompt__close">Close</button>
    </div>
</div>
```

## Options

| Name           | Default                                 | Description                                            |
|----------------|-----------------------------------------|--------------------------------------------------------|
| `buttons`      | `.ios-install-prompt__container button` | Query selector to target to handle closing the prompt  |
| `active_class` | `is-active`                             | Class name to be added when the prompt is visible      |
| `show_after`   | `14`                                    | Number of days to wait before showing the prompt again |
