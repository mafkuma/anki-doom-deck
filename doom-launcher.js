// Adapted from https://github.com/OscarRevollo/doom-wasm (GPL-2.0). Chocolate Doom: https://github.com/chocolate-doom/chocolate-doom
const s = document.getElementById('canvas');
let E;
function resume() {
  const a = E && E.SDL2 && E.SDL2.audioContext;
  if (a && a.state !== 'running' && a.state !== 'closed') a.resume().catch(function () {});
}
s.addEventListener('pointerdown', function () { s.focus({ preventScroll: true }); resume(); });
s.addEventListener('keydown', resume);

const MAP = {
  KeyW: ['ArrowUp', 38], KeyA: ['ArrowLeft', 37],
  KeyS: ['ArrowDown', 40], KeyD: ['ArrowRight', 39]
};
const held = new Map();
function send(type, k, rep) {
  s.dispatchEvent(new KeyboardEvent(type, {
    key: k[0], code: k[0], keyCode: k[1], which: k[1],
    repeat: !!rep, bubbles: true, cancelable: true
  }));
}
['keydown', 'keyup'].forEach(function (t) {
  window.addEventListener(t, function (e) {
    if (document.activeElement !== s) return;
    e.preventDefault(); // Ankiのショートカット対策
    const k = MAP[e.code];
    if (!k) return;
    e.stopImmediatePropagation();
    resume();
    if (t === 'keydown') held.set(e.code, k); else held.delete(e.code);
    send(t, k, e.repeat);
  }, true);
});
function releaseAll() { held.forEach(function (k) { send('keyup', k); }); held.clear(); }
s.addEventListener('blur', releaseAll);
window.addEventListener('blur', releaseAll);

(async function () {
  try {
    const mod = await import('/_chocolate-doom.js');
    E = await mod.default({
      canvas: s,
      keyboardListeningElement: s,
      elementPointerLock: false,
      locateFile: function (f) { return '/_' + f; },
      noInitialRun: true,
      preRun: [function (m) {
        m.FS.mkdir('/config');
        m.FS.mkdir('/savegames');
        m.FS.writeFile('/config/default.cfg',
          ['fullscreen 0', 'window_width 320', 'window_height 200', 'grabmouse 0', 'use_mouse 0', ''].join('\n'));
        m.FS.writeFile('/config/chocolate-doom.cfg',
          'smooth_pixel_scaling 0\nforce_software_renderer 1\n');
      }],
      print: function (t) { console.log(t); },
      printErr: function (t) { console.error(t); },
      onAbort: function (t) { console.error('Engine aborted:', t); }
    });
    try {
      E.callMain(['-window', '-nomouse', '-nograbmouse', '-iwad', '/iwads/freedoom2.wad',
        '-savedir', '/savegames', '-config', '/config/default.cfg',
        '-extraconfig', '/config/chocolate-doom.cfg']);
    } catch (e) {
      if (e !== 'unwind' && e !== 'SimulateInfiniteLoop') throw e;
    }
    s.focus({ preventScroll: true });
  } catch (e) {
    console.error('Failed to start Freedoom:', e);
  }
})();
