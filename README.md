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
├── client/                                 # React Frontend
│   ├── public/
│   │   ├── index.html
│   │   └── favicon.ico
│   ├── src/
│   │   ├── assets/                         # Images, icons, fonts
│   │   │   └── logo.svg
│   │   ├── components/                     # Reusable UI components
│   │   │   ├── ui/                         # Shadcn UI components
│   │   │   │   ├── button.jsx
│   │   │   │   ├── card.jsx
│   │   │   │   ├── input.jsx
│   │   │   │   ├── modal.jsx
│   │   │   │   └── form.jsx
│   │   │   ├── Layout/
│   │   │   │   ├── Header.jsx
│   │   │   │   ├── Sidebar.jsx
│   │   │   │   └── Footer.jsx
│   │   │   └── common/
│   │   │       ├── Loader.jsx
│   │   │       └── ErrorBoundary.jsx
│   │   ├── pages/                          # Page components
│   │   │   ├── CandidateForm.jsx           # Stage 1: Intake & Verification
│   │   │   ├── Dashboard.jsx               # Stage 4: Dashboard & Insights
│   │   │   ├── CandidatesList.jsx
│   │   │   ├── CandidateDetails.jsx
│   │   │   └── FiltersView.jsx
│   │   ├── hooks/                          # Custom React hooks
│   │   │   ├── useAuth.js
│   │   │   ├── useCandidates.js
│   │   │   └── useFilters.js
│   │   ├── services/                       # API & Firebase services
│   │   │   ├── firebase.js                 # Firebase config
│   │   │   ├── authService.js
│   │   │   ├── candidateService.js         # CRUD operations
│   │   │   └── validationService.js        # OTP, email verification
│   │   ├── utils/                          # Helper functions
│   │   │   ├── validators.js               # Form data validation
│   │   │   ├── calculators.js              # Auto-calculate Age from DOB
│   │   │   ├── formatters.js               # Standardize values
│   │   │   └── constants.js
│   │   ├── context/                        # React Context API
│   │   │   └── AuthContext.jsx
│   │   ├── styles/
│   │   │   └── globals.css
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── routes.jsx
│   ├── .env
│   ├── .gitignore
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   └── tailwind.config.js
│
├── functions/                              # Firebase Functions (Backend Logic)
│   ├── index.js                            # Main functions entry
│   ├── package.json
│   └── utils/
│       ├── candidateProcessor.js           # Stage 2 & 3 logic
│       ├── duplicateManager.js             # Merge/Update logic
│       ├── emailService.js                 # OTP emails
│       ├── aiService.js                    # Option 2/3: OpenAI/Gemini API
│       └── parserService.js                # CV parsing (Affinda/Hugging Face)
│
├── firebase/                               # Firebase configuration
│   ├── firestore.rules
│   ├── storage.rules
│   └── firebase.json
│
├── scripts/                                # Utility scripts
│   ├── seedData.js
│   └── backup.js
│
├── docs/                                   # Documentation
│   ├── API.md
│   └── SETUP.md
│
├── .env
├── .gitignore
├── README.md
└── package.json                            # Root package.json (optional)
