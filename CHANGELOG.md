# Changelog

## v1.1.0

- Change cookie name to `pwa_install_prompt_last_visit` to prevent conflicts; Close #8; fe32f7c494fc7e16ea7370844d29b7c04a136428
- Extend default `show_after` to 90 days, matching Chrome's native install prompt; Close #11; db5ff6d541d156ef37cc0582927efa446574aa25
- Add beforeOpen and beforeClose events; Close #10; 23f10cac06ed4ea09c3c9f9c63687005304ad980
- Fix usage example; 1597e80e2b1177c4ccd69c10990bbb5a6d6d625f

## v1.0.2

- Fix check for iOS so that iPads are included; 11430c36ef7a49e83a001b4104f888ec04fb1be7

## v1.0.1

- Remove testing events from demo; 839fd85b190ed334b01eae702107bbf4000c86b8
- Correct package name in events documentation; be775e2a5cfe430b34d91891c2eab4b38f255174

## v1.0.0

- Add custom events; Close #2; 7ed02e9322b19e34127479e83efa2fee21abd695
- Add icon container to default markup; c71e41c8a6b53e092825230b92b79c7a0b8dd3ca

## v0.1.14

- Fix example markup in the README; 1256d43822f37a24f399f8c93ebe54de47977cbf
- Add line break to example script in README; 9f5e1e119d6fc8c1f7471a2317083b43bd707fcd
- Organize options a bit better; 73c80a085426c897766f632f6f8520277c767bc4
- Adjust the demo so it's more like a production environment; 69880fa8dd064d24bfc915a7694194b4369d3545
- Add links to GitHub and NPM to the demo; b515b399d29d7fbfa06ad535fe2641b26623239c
- Curly apostrophes; eab35155b3eeed46b03ed5f349105c94c4f3201c
- Add 'open' and 'close' methods; adc3bd7acea0aa0a21131eebab2971d62072c1f4
- Add "ghost" icons next to the main app icon; 9052ef0c117679c2a9144d5030f3e2b44b48349d

## v0.1.13

- Change to a single closing element; 5bd29529347e39e291dfac4a24a9db11854ad1e4

## v0.1.12

- Make the demo behave more like it would in production; a867fe68da14d8ee7a6889743ae00626f4444e76
- Delay initialization for the demo; a96bfabdd7c816e56587a5932d0dbeecf7f3a558
- Add a note clarifying how the demo works; 3172f0ee1cf980fb5e26d358cbc245916c6c467c
- Fix link to DockYard post; PR #5; 2e7d720c632a2e9c9cc30cab1785476e8f43be7f
- Add contributors list; 091b8d7957717e044c53e3ea5d0ddc314a705de3

## v0.1.11

- Add transition effects; b85a09dabfe2f34c76f5c2369b367afc75ffdeb7

## v0.1.10

- Make the description a bit more clear; c1abc1f08dd7c9f0563e9f7fd807cadc527e91cf
- Document `expires` option; 1259e6556b1d9768b9b12d5368f33822478c5d19

## v0.1.9

- Fix iOS share icon blue to match Apple's HID spec; 7c15c1c4c4a6ae9ae8a061df8d3d3f8797f12079
- Add screenshot to README; d8e71cd929f2e9745f732008f137c64f741742bc

## v0.1.8

- Change from arrow functions to standard to fix 'not a constructor' error; 0a0e0ac1730e22c8dbabd21e09e214a7b974bef1

## v0.1.7

- Use for (...) instead of forEach; e497b0d9a143683cc74584b8ebb37a9f5feb01f1

## v0.1.6

- Change main function back from an arrow function; c34a03b6ed0ebb628e612ab817f24b91a1298423

## v0.1.5

- Change over to all arrow functions; 37017c7dd62a2c596a472a00920a3861c32f587c
- Use Array.indexOf instead of Array.includes; 26e3a28992afd4889a6b03156e3ba0221b4291e6

## v0.1.4

- Fix a few variable names; e8f9d6e81b602c4ffd62a026d67033e08e192b2b

## v0.1.3

- Add FontAwesome icon credit; 226c25768ca2435dfc724f48009d58a8a98cd6f0
- Add stylesheet to package.json; 3d87fee081ae7c0ea272c8a675c54e05d9d54d9d
- Standardize SVG sizes; 466deeca92561ce609be658e35d3316cb31875c8
- Add alt text for share icon; Close #4; 17f0fedd0aff7c214f284d1ca278344ea917e087
- Allow the user to set a custom condition; 68ccdf33e1b10df1f5cf979bccb3d57eaee6fd82
- Rename from ios-install-prompt to pwa-install-prompt; 7a8029b66c59b5725fb657e435a0132cab46f4e5

## v0.1.2

- Make it more clear how options are to be used; c1065456ac7a11a77b6c6b44c4617b75946345a5
- Use default values for example options; b8f0f88423421ad4f30cba7fd7122b1c41309b4a
- Fix the build number; 4e558d94ab58454b496c0a2c98cce8693a7ad137

## v0.1.1

- Add inspiration and demo links; 602aef245e623babde93c8c8c0ba6bd41163c582
- Add note to remove is-active class for production; 04c213a9cf172c5d897bb1c0af299f3c4e1445b9
- Allow the overlay to be closed even if the prompt wasn't shown by the script; e844f401c347b27e3c7959f52b22f2b6519d1302

## v0.1.0

- Initial Commit; 645fe3af962a393f09b9a4bae4ffa4a569c4e4cb
