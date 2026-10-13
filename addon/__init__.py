from aqt import gui_hooks, mw
from aqt.qt import QShortcut
from aqt.utils import tooltip

NOTETYPES = {"DOOM"}
BLOCK = {"SPACE", "RETURN", "ENTER", "A", "S", "D", "R", "1", "2", "3", "4"}

def set_blocked(disabled):
    n = 0
    for sc in mw.findChildren(QShortcut):
        try:
            key = sc.key().toString().upper()
        except Exception:
            continue
        if key in BLOCK:
            sc.setEnabled(not disabled)
            n += 1
    return n

def on_question(card):
    try:
        name = card.note_type()["name"]
    except Exception:
        name = card.model()["name"]
    is_game = name in NOTETYPES
    n = set_blocked(is_game)
    if is_game:
        tooltip("DOOM: %d shortcuts disabled" % n)

def on_state(new_state, old_state):
    if new_state != "review":
        set_blocked(False)

gui_hooks.reviewer_did_show_question.append(on_question)
gui_hooks.state_did_change.append(on_state)
