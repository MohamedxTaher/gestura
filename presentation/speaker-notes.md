# Gestura Speaker Notes

Target presentation time: 3 to 5 minutes.

These notes are for the team only. The audience-facing slides should stay short and visual.

## Presentation Order

1. Hero Slide
2. The Problem
3. Our Solution
4. System Pipeline
5. Gesture Control Modes
6. Live Demo
7. Project Poster
8. Technology Stack
9. Why It Matters
10. Team Roles
11. Thank You

## Speaking Script

### Mohamed Taher El-Refaey

Role: Project Introduction & Main Idea

Good morning. We are Gayar Vision, and our project is Gestura, a real-time hand gesture game controller. The idea is simple: instead of using a keyboard or controller, the user can control a game using hand gestures through a webcam.

### Mohamed Hassan El-Kassas

Role: Problem & Motivation

The problem we focused on is that most games depend on physical input devices. Gestura explores a more natural and touchless interaction method using computer vision.

### Ziad Mohamed Refaey

Role: System Pipeline

The system starts by reading frames from the webcam. OpenCV handles the stream, MediaPipe detects hand landmarks, and rule-based logic recognizes the gesture. Then the gesture is converted into keyboard or mouse input.

### Ahmed Youssef Abdelhamid

Role: Gesture Recognition

The gesture recognition layer depends on predefined hand patterns such as raised fingers, fist, open palm, or pinch motion. These gestures are mapped to actions like movement, braking, jumping, or swiping.

### Ahmed Hany Khairy

Role: Technology Stack

The project is built using Python, OpenCV, MediaPipe, and Pynput. MediaPipe provides hand landmarks, OpenCV processes the video feed, and Pynput sends the final control input.

### Kareem Mohamed Zaki

Role: Demo Explanation

In the demo, the webcam tracks the hand in real time. When the user changes the gesture, the game immediately receives the corresponding action.

### Mohamed Gaber Aboud

Role: Conclusion & Future Work

Gestura is a practical computer vision project that connects hand tracking with real game interaction. In the future, it can be improved with more gestures, smoother control, calibration, and support for more games.

## Delivery Tips

- Speak clearly.
- Keep each part brief.
- Do not read long text from the screen.
- Show the demo quickly.
- Keep transitions smooth.
