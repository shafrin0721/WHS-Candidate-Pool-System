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

```bash
candidate-pool-system/
├── client/                                 # React Frontend
│   ├── public/
│   │   ├── index.html
│   │   └── favicon.ico
│   ├── src/
│   │   ├── assets/                         # Images, icons, fonts
│   │   │   └── logo.svg
│   │   ├── components/                     # Reusable UI components
│   │   │   ├── ui/                         # Shadcn UI components
│   │   │   ├── Layout/                     # Header, Sidebar, Footer
│   │   │   └── common/                     # Loader, ErrorBoundary
│   │   ├── pages/                          # Page components
│   │   │   ├── CandidateForm.jsx           # Stage 1: Intake & Verification
│   │   │   ├── Dashboard.jsx               # Stage 4: Dashboard & Insights
│   │   │   ├── CandidatesList.jsx
│   │   │   ├── CandidateDetails.jsx
│   │   │   └── FiltersView.jsx
│   │   ├── hooks/                          # Custom React hooks
│   │   ├── services/                       # API & Firebase services
│   │   ├── utils/                          # Helper functions
│   │   ├── context/                        # React Context API
│   │   ├── styles/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── routes.jsx
│   ├── .env
│   ├── .gitignore
│   ├── package.json
│   ├── vite.config.js
│   └── tailwind.config.js
│
├── functions/                              # Firebase Functions (Backend Logic)
│   ├── index.js
│   ├── package.json
│   └── utils/
│       ├── candidateProcessor.js           # Stage 2 & 3 logic
│       ├── duplicateManager.js             # Merge/Update logic
│       ├── emailService.js                 # OTP emails
│       ├── aiService.js                    # OpenAI/Gemini API
│       └── parserService.js                # CV parsing
│
├── firebase/                               # Firebase configuration
│   ├── firestore.rules
│   ├── storage.rules
│   └── firebase.json
│
├── scripts/                                # Utility scripts
├── docs/                                   # Documentation
├── .env
├── .gitignore
├── README.md
└── package.json
```
