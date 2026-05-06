# Quick Reference

## Gestura

Real-time webcam hand gesture control for games using OpenCV, MediaPipe, and Python.

## Run

```bash
pip install -r requirements.txt
python -m src.main
```

Launch scripts:

```bash
run.bat
bash run.sh
```

## Modes

| Mode | Purpose |
|---|---|
| Keyboard Mode | Converts static hand gestures into keyboard actions |
| Swipe Mode | Converts pinch movement into mouse swipe actions |

## Gesture Mapping

| Gesture | Mode | Action |
|---|---|---|
| Index Finger | Keyboard Mode | Right Arrow / Move Right |
| Peace Sign | Keyboard Mode | Left Arrow / Move Left |
| Fist | Keyboard Mode | Space / Brake |
| Open Palm | Keyboard Mode | Up Arrow |
| Three Fingers | Keyboard Mode | Down Arrow |
| Pinch + Move Right | Swipe Mode | Swipe Right |
| Pinch + Move Left | Swipe Mode | Swipe Left |
| Pinch + Move Up | Swipe Mode | Jump / Swipe Up |
| Pinch + Move Down | Swipe Mode | Roll / Swipe Down |

## Runtime Keys

| Key | Action |
|---|---|
| `m` | Toggle keyboard mode and swipe mode |
| `r` | Reset runtime statistics |
| `q` | Quit |

## Demo Tips

- Use clear front lighting.
- Keep the full hand visible.
- Hold static gestures briefly.
- In swipe mode, pinch before moving.
- Keep the game window focused.

## Technology

- MediaPipe detects hand landmarks.
- OpenCV captures and processes webcam frames.
- Rule-based logic maps landmarks to controls.
- Pynput sends keyboard and mouse actions.
