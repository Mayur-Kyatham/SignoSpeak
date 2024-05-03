# NIRMAN Bring ideas to Life 2024 

# SignoSpeak

## Problem Statement

Mute individuals use hand signs to communicate, posing a challenge for the general population in understanding their language. There is a need for systems capable of recognizing and translating sign language gestures into understandable text for the hearing population.

## Solution

SignoSpeak aims to address this challenge by developing a robust system capable of accurately recognizing and converting American Sign Language (ASL) gestures representing the 26 alphabets into text. Leveraging Convolutional Neural Networks (CNN) implemented using TensorFlow and OpenCV, the system analyzes input images or video streams captured in real-time through cameras. The CNN model is trained on a dataset containing a comprehensive collection of ASL alphabet gestures to learn and recognize the unique patterns associated with each sign. The system then translates the recognized gestures into corresponding textual representations, facilitating communication for individuals with hearing impairments.

## Key Objectives

- Develop a robust system for recognizing ASL gestures in real-time.
- Train a CNN model using TensorFlow and OpenCV on a comprehensive dataset of ASL alphabet gestures.
- Optimize the CNN architecture for efficient feature extraction and high accuracy.
- Translate recognized ASL gestures into corresponding textual representations.
- Enhance accessibility and promote effective communication for the deaf and hard of hearing community.

## Features

- Real-time recognition and translation of ASL gestures into text.
- Supports the recognition of 26 alphabets of the ASL.
- CNN-based architecture for accurate gesture recognition.
- User-friendly graphical interface for easy interaction.

## Requirements

- Python 3.x
- TensorFlow
- OpenCV
- Keras
- Tkinter
- PIL (Python Imaging Library)

## Installation

1. Clone the SignoSpeak repository:

   ```
   git clone https://github.com/your-username/SignoSpeak.git
   ```

2. Install the required Python packages:

   ```
   pip install tensorflow opencv-python keras pillow
   ```

## Usage

1. Navigate to the SignoSpeak directory:

   ```
   cd SignoSpeak
   ```

2. Run the SignoSpeak application:

   ```
   python Application.py
   ```

3. The SignoSpeak GUI will open, displaying the webcam feed. Make ASL gestures in front of the webcam, and the application will detect and translate them into text.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- This project was inspired by the need to bridge communication gaps between the hearing-impaired and the broader community.
- Mayur R. Kyatham
- Prerna S. Shakwar
- Utsav G. Kuntalwad
- Srushti S. Sawant
