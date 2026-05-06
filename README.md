<div align="center">

# Gestura – Real-Time Hand Gesture Game Controller

A computer vision project that allows users to control games using real-time hand gestures through a webcam.

![Python](https://img.shields.io/badge/Python-3.8%2B-3776AB?style=for-the-badge&logo=python&logoColor=white)
![OpenCV](https://img.shields.io/badge/OpenCV-Video%20Processing-5C3EE8?style=for-the-badge&logo=opencv&logoColor=white)
![MediaPipe](https://img.shields.io/badge/MediaPipe-Hand%20Landmarks-4285F4?style=for-the-badge&logo=google&logoColor=white)
![Computer Vision](https://img.shields.io/badge/Computer%20Vision-Project-0EA5E9?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Completed-16A34A?style=for-the-badge)

</div>

## Demo

<p align="center">
  <video src="assets/demo/gestura-demo.mp4" controls width="720"></video>
</p>

<p align="center">
  <a href="assets/demo/gestura-demo.mp4">Watch the Demo Video</a>
</p>

## Overview

Gestura uses a webcam to detect hand landmarks in real time, recognizes predefined hand gestures, and converts them into keyboard or mouse actions for game control. It uses MediaPipe for hand landmark detection, OpenCV for camera processing, and a rule-based gesture classification/control layer for translating gestures into actions.

**Suggested GitHub description:** Real-time webcam hand gesture controller for games using OpenCV, MediaPipe, and Python.

**Suggested GitHub topics:** `computer-vision`, `mediapipe`, `opencv`, `hand-tracking`, `gesture-recognition`, `python`, `game-control`, `human-computer-interaction`

## Key Features

- Real-time hand tracking through a webcam
- Rule-based gesture recognition for the control layer
- Keyboard control mode for game actions
- Mouse swipe control mode for directional swipe games
- Game interaction using hand gestures
- Lightweight Python implementation
- Modular project structure

## How It Works

1. Webcam captures video frames.
2. OpenCV processes the camera feed.
3. MediaPipe detects hand landmarks.
4. Rule-based logic recognizes gestures.
5. Pynput converts gestures into keyboard or mouse actions.
6. The game receives the simulated input.

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

## Tech Stack

| Technology | Role |
|---|---|
| Python | Main programming language |
| OpenCV | Webcam capture and frame processing |
| MediaPipe | Real-time hand landmark detection |
| Pynput | Keyboard and mouse input simulation |
| NumPy | Numerical calculations and array operations |

## Project Structure

```text
gestura/
|-- assets/
|   `-- demo/
|       `-- gestura-demo.mp4
|-- config/
|   |-- settings.json
|   `-- gestures_mapping.json
|-- docs/
|   |-- README.md
|   |-- TECHNICAL_REPORT.md
|   `-- USER_GUIDE.md
|-- src/
|   |-- main.py
|   |-- gesture_recognizer.py
|   |-- pinch_swipe_recognizer.py
|   |-- key_controller.py
|   `-- mouse_controller.py
|-- tests/
|-- requirements.txt
|-- run.bat
|-- run.sh
`-- README.md
```

## Installation

```bash
git clone https://github.com/MohamedxTaher/gestura.git
cd gestura
pip install -r requirements.txt
```

## Usage

Run the application from the project root:

```bash
python -m src.main
```

You can also use the included launch scripts:

```bash
# Windows
run.bat

# macOS/Linux
bash run.sh
```

During runtime:

| Key | Action |
|---|---|
| `m` | Toggle between keyboard mode and swipe mode |
| `r` | Reset runtime statistics |
| `q` | Quit the application |

## Use Cases

- Gesture-based game control
- Human-computer interaction
- Computer vision learning project
- Touchless control experiments
- Accessibility-focused interaction prototype

## Limitations

Performance may vary depending on lighting conditions, webcam quality, hand visibility, and background complexity. The gesture classification layer is rule-based, so it depends on predefined gestures and clear hand poses.

## Future Improvements

- Add more gestures
- Improve gesture smoothing
- Add GUI settings
- Add calibration screen
- Support more games
- Add custom gesture mapping

## Team Members

- Mohamed Taher El-Refaey
- Mohamed Hassan El-Kassas
- Ziad Mohamed Refaey
- Ahmed Youssef Abdelhamid
- Ahmed Hany Khairy
- Kareem Mohamed Zaki
- Mohamed Gaber Aboud


