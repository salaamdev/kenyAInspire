# **AI-Powered Kenyan Education Platform**

**Team Hassdonn**

Welcome to the **AI-Powered Kenyan Education Platform**! This project aims to bridge the educational gap between urban and rural areas in Kenya using artificial intelligence. The platform provides personalized learning experiences, offline accessibility, and inclusive learning features, ensuring that students from all backgrounds, including those with disabilities, can access quality education.

---

## **Table of Contents**

- [Project Overview](#project-overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

---

## **Project Overview**

Kenya's education system faces numerous challenges, particularly in rural areas. These include teacher shortages, overcrowded classrooms, and limited internet access. This platform uses AI and NLP technologies to offer:

- **Personalized learning paths** for students based on their progress.
- **Offline learning capabilities** to support regions with poor internet connectivity.
- **Accessibility tools** such as text-to-speech, voice commands, and sign language support.

The goal is to democratize education, improve learning outcomes, and foster an inclusive environment for all students.

---

## **Features**

- **AI-Powered Personalization**: Uses machine learning to adapt content to the needs of each student.
- **Offline Mode**: Allows students to continue learning even without internet, syncing when connectivity is available.
- **Inclusion for Disabled Students**: Features text-to-speech, customizable interfaces, and predictive learning interventions.
- **Teacher Support Tools**: Automated grading, attendance, and AI-generated lesson plans to improve efficiency.
- **Multimodal NLP**: Integrates text, images, and speech for a richer learning experience.

---

## **Tech Stack**

- **Frontend**: ReactJS
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **AI/ML Models**: Python (with Scikit-learn, TensorFlow/PyTorch)
- **NLP**: BERT/DistilBERT for text processing
- **Offline Sync**: PouchDB for local storage syncing with CouchDB
- **Accessibility**: Text-to-speech and speech recognition APIs

---

## **Installation**

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/salaamdev/kenyAInspire---team-HassDonn.git
   cd kenyAInspire---team-HassDonn
   ```

2. **Frontend Setup**:

   ```bash
   cd frontend
   npm install
   npm start
   ```

3. **Backend Setup**:

   ```bash
   cd backend
   npm install
   npm start
   ```

4. **AI Models Setup**:
   - Ensure you have Python 3.x installed.
   - Install the required dependencies:
     ```bash
     pip install -r requirements.txt
     ```
   - Train or load the pre-trained models for AI personalization and NLP.

---

## **Usage**

1. Open the frontend in your browser (typically at `http://localhost:3000` after starting the server).
2. Teachers can log in, manage classes, and track students' progress.
3. Students can log in and access personalized learning paths.
4. Offline learning is supported, and data syncs when connectivity is restored.

### **Key Functionality**:

- **Student Progress**: Tailored content based on machine learning algorithms.
- **Text-to-Speech**: Accessible learning for students with visual impairments.
- **Teacher Tools**: Automated lesson planning and grading.

---

## **Project Structure**

```
kenya-ai-education-platform/
├── frontend/             # ReactJS code for the user interface
├── backend/              # Node.js backend for managing APIs
├── ai-models/            # Python code for AI and NLP models
├── database/             # MongoDB database schema
├── docs/                 # Documentation (e.g., project plan, algorithm write-ups)
├── README.md             # Project overview and instructions
└── LICENSE               # License information
```

---

## **Contributing**

We welcome contributions! If you'd like to improve the project, follow these steps:

1. Fork the repository.
2. Create a new feature branch (`git checkout -b feature-name`).
3. Commit your changes (`git commit -m "Added new feature"`).
4. Push to the branch (`git push origin feature-name`).
5. Create a pull request and describe your changes.

---

## **License**

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
