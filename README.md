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

## 📁 Folder Structure

| Folder/File | Description |
|------------|-------------|
| **client/** | Frontend React application |
| ├─ public/ | Static assets |
| ├─ src/ | Source code |
| │  ├─ assets/ | Images, logos, fonts |
| │  ├─ components/ | Reusable React components |
| │  │  ├─ ui/ | UI components (button, card, input, modal) |
| │  │  ├─ Layout/ | Layout components (Header, Sidebar, Footer) |
| │  │  ├─ common/ | Common components (Loader, ErrorBoundary) |
| │  │  └─ CandidateForm.jsx, Dashboard.jsx, etc. | Feature components |
| │  ├─ hooks/ | Custom React hooks |
| │  ├─ services/ | API and service integrations |
| │  ├─ utils/ | Utility functions |
| │  ├─ context/ | React Context providers |
| │  ├─ styles/ | Global CSS styles |
| │  ├─ App.jsx | Main app component |
| │  ├─ main.jsx | Entry point |
| │  └─ routes.jsx | Route definitions |
| │  |
| **functions/** | Backend serverless functions |
| ├─ index.js | Main entry point |
| ├─ utils/ | Backend utilities |
| ├─ firebase/ | Firebase configurations |
| ├─ scripts/ | Database scripts |
| └─ docs/ | API documentation |
