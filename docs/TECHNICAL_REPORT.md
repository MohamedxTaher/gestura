# Technical Report

## Project Title

**Gestura – Real-Time Hand Gesture Game Controller**

## Executive Summary

Gestura is a computer vision project that enables touchless game control through webcam-based hand gestures. The system uses OpenCV for video capture and frame handling, MediaPipe for real-time hand landmark detection, and rule-based logic to map recognized gestures into keyboard or mouse actions through Pynput.

MediaPipe uses learned models internally for hand landmark detection. Gestura's gesture classification and control layer is rule-based, using landmark positions, distances, and movement direction to trigger predefined actions.

## Objectives

- Detect hands from a standard webcam in real time.
- Convert hand landmarks into understandable gesture states.
- Provide keyboard and mouse swipe control modes.
- Keep the implementation modular and easy to explain for a computer vision course.
- Present a practical human-computer interaction prototype.

## System Pipeline

1. The webcam captures live frames.
2. OpenCV prepares the camera feed for processing.
3. MediaPipe detects hand landmarks.
4. Rule-based logic evaluates hand pose or pinch movement.
5. Pynput simulates the matching keyboard or mouse action.
6. The target game receives the simulated input.

## Architecture

```text
Webcam
  |
  v
OpenCV Frame Processing
  |
  v
MediaPipe Hand Landmark Detection
  |
  v
Rule-Based Gesture or Swipe Recognition
  |
  v
Pynput Keyboard / Mouse Controller
  |
  v
Game Input
```

## Core Modules

| Module | Responsibility |
|---|---|
| `src/main.py` | Application loop, mode switching, overlays, and integration |
| `src/camera.py` | Webcam capture and frame utilities |
| `src/hand_detector.py` | MediaPipe hand detection wrapper |
| `src/gesture_recognizer.py` | Static hand-pose recognition for keyboard mode |
| `src/pinch_swipe_recognizer.py` | Pinch-and-move swipe recognition for swipe mode |
| `src/key_controller.py` | Keyboard input simulation |
| `src/mouse_controller.py` | Mouse swipe simulation |
| `src/config_manager.py` | JSON configuration loading |

## Recognition Approach

Keyboard mode uses static hand-pose rules based on finger extension states. Swipe mode detects a pinch between thumb and index finger, records the starting hand position, and compares directional movement against a configured threshold.

This approach is intentionally interpretable: each active control is tied to a predefined pose or movement pattern. It is suitable for academic explanation, debugging, and live demonstrations.

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

## Configuration

The main configuration file is `config/settings.json`. It includes camera settings, detection confidence values, gesture thresholds, and swipe thresholds.

Important groups:

- `camera`: resolution, FPS, and camera device ID.
- `detection`: MediaPipe detection and tracking confidence.
- `gesture`: static pose recognition thresholds.
- `swipe`: pinch distance, swipe distance, cooldown, and mouse swipe distance.
- `ui`: overlay visibility and display text size.

## Limitations

The system depends on visual input quality. Recognition can become less stable with poor lighting, motion blur, partial hand visibility, low-quality webcams, or visually complex backgrounds. The gesture classification/control layer is rule-based, so it only supports predefined gestures unless new rules are added.

## Future Work

- Add more gestures.
- Improve gesture smoothing.
- Add GUI settings.
- Add calibration screen.
- Support more games.
- Add custom gesture mapping.

## Conclusion

Gestura demonstrates a complete real-time computer vision interaction pipeline: webcam capture, landmark detection, rule-based interpretation, and simulated game input. The project is appropriate for university presentation, portfolio use, and further experimentation in human-computer interaction.
