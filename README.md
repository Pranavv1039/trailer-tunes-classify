# 🎬 CineTune

**“Where music and mood define the movie.”**

CineTune is an intelligent movie genre classification system that listens deeply to a trailer’s audio — analyzing **music type**, **speech emotion**, and **acoustic energy** to predict the most likely genres. Inspired by human intuition and cinematic rhythm, CineTune blends emotion with machine learning to understand films the way we do.

---

## 🧠 How It Works

CineTune performs multimodal audio analysis:

- 🎵 **Music Feature Extraction**  
  Detects tempo, key, mood, and energy from background score

- 🗣️ **Speech Emotion Recognition**  
  Identifies emotional tones such as affection, anger, fear, and excitement

- ⚡ **Intensity & Rhythm Detection**  
  Captures percussive sounds, sudden peaks, and onset rates typical of action/adventure scenes

These features are then passed through a trained machine learning model to predict **primary and secondary genres**.

---

## 🛠 Features

- 🎧 Real-time trailer audio analysis
- 🎭 Multi-label genre classification (e.g., Action + Drama)
- 📊 Confidence scores for genre predictions
- 🔥 Emotion heatmaps and acoustic fingerprinting
- 🌐 Clean, Apple-inspired UI/UX for demo interface

---

## 📁 Project Structure

```bash
cinetune/
├── audio_processing/
│   └── feature_extraction.py
├── emotion_detection/
│   └── emotion_model.py
├── genre_classification/
│   └── classifier.py
├── ui/
│   └── frontend (React/HTML with Apple-style theme)
├── examples/
│   └── rrr_output_sample.json
└── README.md
