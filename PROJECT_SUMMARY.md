# Project Summary

## Gestura – Real-Time Hand Gesture Game Controller

Gestura is a computer vision project for controlling games with hand gestures through a webcam. It is designed as a clean university project, portfolio item, and human-computer interaction prototype.

## What the Project Does

- Captures live video from a webcam.
- Uses OpenCV to process frames.
- Uses MediaPipe to detect hand landmarks.
- Applies rule-based gesture logic for the control layer.
- Sends keyboard or mouse actions through Pynput.
- Supports keyboard mode and mouse swipe mode.

## Active Control Mapping

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

## Repository Presentation

- The main README includes a demo video, badges, installation instructions, usage commands, project structure, limitations, and team members.
- The documentation folder contains a user guide and a technical report.
- The demo video is linked from `assets/demo/gestura-demo.mp4`.

## Academic Value

Gestura demonstrates several computer vision and HCI concepts:

- Real-time frame capture
- Hand landmark detection
- Landmark-based gesture interpretation
- Rule-based control mapping
- Simulated keyboard and mouse input
- Practical game interaction through touchless control

## Limitations

Performance depends on lighting, webcam quality, hand visibility, and background complexity. The gesture classification/control layer is rule-based and works with predefined gestures.

## Future Improvements

- Add more gestures
- Improve gesture smoothing
- Add GUI settings
- Add calibration screen
- Support more games
- Add custom gesture mapping
