# 🎯 Candidate Pool System

A smart, scalable candidate management system built with React, Firebase, and AI-powered features for modern recruitment workflows.

## 📋 Overview

The Candidate Pool System is a comprehensive talent management solution that streamlines the entire candidate lifecycle from intake to analytics. It supports duplicate detection, AI-powered CV parsing, automated validation, and real-time dashboard insights.

### Key Features

| Stage | Feature | Description |
|-------|---------|-------------|
| **Stage 1** | Intake & Verification | Email OTP verification, form validation, CV upload |
| **Stage 2** | Validation & Processing | Auto-calculate age, standardize values, dynamic skills loading |
| **Stage 3** | Database Management | Duplicate detection (email/mobile), merge/update logic |
| **Stage 4** | Dashboard & Insights | Real-time metrics, advanced filters, candidate analytics |

## 🏗️ Architecture Options

This project supports three architecture variants:

| Option | Tech Stack | Use Case |
|--------|------------|----------|
| **Option 1** | React + Firebase (Base) | Standard operational candidate pool |
| **Option 2** | React + Firebase + OpenAI + Affinda + Power BI | Enterprise-level HR operations |
| **Option 3** | React + Firebase + Gemini + spaCy + Looker Studio | High-volume AI recruitment |

## 📁 Project Structure
candidate-pool-system/
│
├── client/ # Frontend React application
│ ├── public/
│ │ ├── index.html
│ │ └── favicon.ico
│ │
│ ├── src/
│ │ ├── assets/
│ │ │ └── logo.svg
│ │ │
│ │ ├── components/
│ │ │ ├── ui/
│ │ │ │ ├── button.jsx
│ │ │ │ ├── card.jsx
│ │ │ │ ├── input.jsx
│ │ │ │ └── modal.jsx
│ │ │ │
│ │ │ ├── Layout/
│ │ │ │ ├── Header.jsx
│ │ │ │ ├── Sidebar.jsx
│ │ │ │ └── Footer.jsx
│ │ │ │
│ │ │ ├── common/
│ │ │ │ ├── Loader.jsx
│ │ │ │ └── ErrorBoundary.jsx
│ │ │ │
│ │ │ ├── CandidateForm.jsx
│ │ │ ├── Dashboard.jsx
│ │ │ ├── CandidatesList.jsx
│ │ │ ├── CandidateDetails.jsx
│ │ │ └── FiltersView.jsx
│ │ │
│ │ ├── hooks/
│ │ │ ├── useAuth.jsx
│ │ │ ├── useCandidates.jsx
│ │ │ └── useFilters.jsx
│ │ │
│ │ ├── services/
│ │ │ ├── firebase.jsx
│ │ │ ├── authService.jsx
│ │ │ ├── candidateService.jsx
│ │ │ └── validationService.jsx
│ │ │
│ │ ├── utils/
│ │ │ ├── validators.jsx
│ │ │ ├── calculators.jsx
│ │ │ ├── formatters.jsx
│ │ │ └── constants.jsx
│ │ │
│ │ ├── context/
│ │ │ └── AuthContext.jsx
│ │ │
│ │ ├── styles/
│ │ │ └── global.css
│ │ │
│ │ ├── App.jsx
│ │ ├── main.jsx
│ │ └── routes.jsx
│ │
│ ├── .gitignore
│ ├── index.html
│ ├── package.json
│ ├── vite.config.js
│ └── tailwind.config.js
│
├── functions/ # Backend serverless functions
│ ├── index.js
│ ├── package.json
│ │
│ ├── utils/
│ │ ├── candidateProcessor.js
│ │ ├── duplicateManager.js
│ │ ├── emailService.js
│ │ ├── aiService.js
│ │ └── parserService.js
│ │
│ ├── firebase/
│ │ ├── firestore.rules
│ │ └── storage.rules
│ │
│ ├── scripts/
│ │ ├── seedData.js
│ │ └── backup.js
│ │
│ └── docs/
│ └── API.md
│
├── FirebaseBundle.jsx
├── .gitignore
└── README.md
