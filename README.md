# Freedoom in Anki

[日本語](README.ja.md)

Play Freedoom inside an Anki card (desktop Anki on Windows).

## 1. Install Anki (Windows, winget)

Open PowerShell or Windows Terminal and run:

```powershell
winget install -e --id Anki.Anki
```

To check which version winget will install:

```powershell
winget show Anki.Anki
```

A recent version of Anki is required (23.10 or newer is recommended).
You can also download the installer from https://apps.ankiweb.net/ instead.

## 2. Install the deck and the add-on

1. Download `doom.apkg` and `doom_keys.ankiaddon` from the [Releases](../../releases) page.
2. Install the add-on: Tools > Add-ons > Install from file, choose `doom_keys.ankiaddon`, then restart Anki.
   The add-on stops Anki from capturing keys such as Space and Enter while a DOOM card is shown.
3. Import the deck: File > Import, choose `doom.apkg`.
4. Open the DOOM card and press the start button.

## Controls

WASD / arrow keys: move, Ctrl: fire, Space: use, Shift: run.

## Notes

- The notes have a `Files` field. It exists only to bundle the game files into the deck. Do not delete it.
- Do not sync this deck's large media files to AnkiWeb if your upload speed is slow (about 28 MB).

## What is bundled

- Chocolate Doom (GPL v2), compiled to WebAssembly.
  Build source: https://github.com/OscarRevollo/doom-wasm (commit b114de68a4ae4971803aeb1c6051f11c3a96c447)
- Freedoom Phase 2 (modified BSD): https://freedoom.github.io/
- Launcher script `doom-launcher.js` and the add-on in `addon/`: GPL v2.

No proprietary Doom data is included. Full licenses: `LICENSE`, `licenses/`.
