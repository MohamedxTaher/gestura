# Gestura Documentation

This folder contains supporting documentation for **Gestura**, a real-time hand gesture game controller built with Python, OpenCV, MediaPipe, and Pynput.

## Documentation Map

| File | Purpose |
|---|---|
| [USER_GUIDE.md](USER_GUIDE.md) | Setup, usage, controls, and troubleshooting |
| [TECHNICAL_REPORT.md](TECHNICAL_REPORT.md) | Academic technical explanation of the system design |

## Project Summary

Gestura captures webcam frames, detects hand landmarks with MediaPipe, and uses rule-based logic to translate recognized gestures into keyboard or mouse actions. The project does not train a custom gesture classification model; MediaPipe provides the hand landmark detector, while the gesture-to-control layer is rule-based.

## Control Modes

| Mode | Description |
|---|---|
| Keyboard Mode | Converts static hand poses into keyboard actions for game control |
| Swipe Mode | Converts pinch-and-move gestures into mouse swipe actions |

## Runtime Controls

| Key | Action |
|---|---|
| `m` | Toggle keyboard mode and swipe mode |
| `r` | Reset runtime statistics |
| `q` | Quit the application |

## Main Entry Point

Run the project from the repository root:

```bash
python -m src.main
```

Windows and Unix launch scripts are also available:

```bash
run.bat
bash run.sh
```

## Notes for Reviewers

- The primary README includes the demo video, setup commands, gesture mapping, team list, and repository presentation notes.
- Documentation wording is aligned with the current runtime behavior in `src/main.py`, `src/gesture_recognizer.py`, and `src/pinch_swipe_recognizer.py`.
- Source code, tests, dependencies, and gesture behavior are intentionally unchanged by this documentation polish.
