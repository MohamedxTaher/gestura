# User Guide

This guide explains how to install and run Gestura, switch between control modes, and get reliable gesture recognition during a demo or gameplay session.

## Requirements

- Python 3.8 or newer
- A working webcam
- Good front-facing lighting
- A game or application that accepts keyboard or mouse input

## Installation

```bash
git clone https://github.com/MohamedxTaher/gestura.git
cd gestura
pip install -r requirements.txt
```

## Running the Project

Use the Python module entry point:

```bash
python -m src.main
```

Alternatively, use the provided launcher for your platform:

```bash
# Windows
run.bat

# macOS/Linux
bash run.sh
```

## Control Modes

Gestura starts in **Keyboard Mode**. Press `m` while the camera window is active to switch between modes.

| Mode | Best For | Input Type |
|---|---|---|
| Keyboard Mode | Games that use keyboard controls | Simulated keyboard keys |
| Swipe Mode | Games that use directional mouse swipes | Simulated mouse swipe gestures |

## Gesture Reference

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

## Application Shortcuts

| Key | Action |
|---|---|
| `m` | Toggle keyboard mode and swipe mode |
| `r` | Reset runtime statistics |
| `q` | Quit the application |

## Good Demo Setup

1. Place your hand fully inside the camera frame.
2. Use a bright, evenly lit environment.
3. Keep the background visually simple.
4. Hold each static gesture briefly before switching.
5. In swipe mode, pinch first, then move clearly in one direction.

## Troubleshooting

### Camera does not open

- Close other apps that may be using the webcam.
- Try changing `camera_id` in `config/settings.json`.
- Check operating system camera permissions.

### Gestures are inconsistent

- Improve lighting and reduce shadows.
- Keep the whole hand visible.
- Move more slowly between gestures.
- Avoid busy backgrounds where possible.

### Game does not respond

- Make sure the game window is focused.
- Confirm you are using the correct mode.
- Test the equivalent keyboard or mouse input manually in the game.

## Configuration Notes

Core runtime settings live in `config/settings.json`, including camera resolution, detection confidence, gesture thresholds, and swipe thresholds. Change these values carefully and restart the application after editing the file.
