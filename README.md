# Freedoom in Anki

Play Freedoom inside an Anki card (desktop Anki and AnkiDroid).

## Install
1. Download `doom.apkg` and `doom_keys.ankiaddon` from the Releases page.
2. Desktop Anki: install the add-on (Tools > Add-ons > Install from file), restart, then import `doom.apkg`.
3. AnkiDroid: sync the deck from desktop; turn off gestures in the settings.

## Controls
WASD / arrow keys: move, Ctrl: fire, Space: use, Shift: run. On phones, use the on-screen buttons.

## What is bundled
- Chocolate Doom (GPL v2), compiled to WebAssembly.
  Build source: https://github.com/OscarRevollo/doom-wasm (commit b114de68a4ae4971803aeb1c6051f11c3a96c447)
- Freedoom Phase 2 (modified BSD): https://freedoom.github.io/
- Launcher script `doom-launcher.js` and the add-on in `addon/`: GPL v2.

No proprietary Doom data is included. Full licenses: `LICENSE`, `licenses/`.
