# 🧠 Candidate Pool System

A **production-ready** smart candidate pool system with AI-powered duplicate detection, ticket management, admin controls, and candidate journey tracking.

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [System Architecture](#system-architecture)
- [Quick Start](#quick-start)
- [Project Structure](#project-structure)
- [Environment Setup](#environment-setup)
- [Database Schema](#database-schema)
- [API Documentation](#api-documentation)
- [Testing](#testing)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

---

## 🎯 Overview

The Candidate Pool System addresses **11 critical gaps** identified in candidate journey flows:

| # | Missing Component | Status |
|---|------------------|--------|
| 1 | Duplicate Handling Interface | ✅ |
| 2 | Ticket Management System | ✅ |
| 3 | Candidate Status Management | ✅ |
| 4 | Data Normalization Visibility | ✅ |
| 5 | Validation Feedback System | ✅ |
| 6 | Partial Match Warning UI | ✅ |
| 7 | Candidate Activity Tracking | ✅ |
| 8 | Candidate Pool Structuring | ✅ |
| 9 | Candidate Sharing Capability | ✅ |
| 10 | Admin Control Interfaces | ✅ |
| 11 | End-State Visibility | ✅ |

---

## ✨ Features

### 🔄 Duplicate Detection & Resolution
- Exact and partial match detection
- Side-by-side profile comparison
- Field-level merge selection
- Admin approval workflow for merges

### 🎫 Ticket Management
- Automatic ticket creation for admin intervention
- Status tracking (Open, In Review, Resolved)
- Approve/Reject/Request Changes actions

### 👤 Candidate Management
- Status tracking (New, Verified, Duplicate, Flagged, Merged, Active)
- Activity timeline with all actions
- Auto + manual tagging system
- Skill-based grouping and segmentation

### 🤖 AI-Powered Features
- Resume parsing (OpenAI, Gemini, Affinda, or spaCy)
- Semantic candidate matching
- Data normalization and scoring
- Chatbot integration (Dialogflow)

### 👨‍💼 Admin Controls
- Merge approval dashboard
- Duplicate review queue
- Full candidate management controls

### 📤 Export & Sharing
- PDF/CSV export
- Email sharing
- Bulk export capabilities

---

## 🛠 Tech Stack

### Option 1: Base Configuration (Lightweight)
### Option 2: Advanced AI & Enterprise
### Option 3: Lean AI Stack (Recommended)

## 📁 Project Structure

```bash
candidate-pool-system/
│
├── frontend/                                 # React Frontend Application
│   ├── public/
│   │   ├── assets/
│   │   │   ├── icons/
│   │   │   ├── images/
│   │   │   └── logos/
│   │   └── index.html
│   │
│   └── src/
│   |   ├── components/
│   |   │   ├── common/                      # Reusable UI components
│   |   │   │   ├── Button/
│   |   │   │   ├── Modal/
│   |   │   │   ├── Toast/
│   |   │   │   ├── Spinner/
│   |   │   │   └── ConfirmationDialog/
│   |   │   │
│   |   │   ├── forms/                       # Form components
│   |   │   │   ├── CandidateRegistrationForm/
│       │   │   ├── ValidationFeedback/
│       │   │   ├── RealTimeValidation/
│       │   │   └── FieldLevelErrors/
│       │   │
│       │   ├── duplicate-handling/          # ⭐ Gap #1, #6
│       │   │   ├── DuplicateWarningModal/
│       │   │   ├── PartialMatchWarning/
│       │   │   ├── SideBySideComparison/
│       │   │   ├── MergePreview/
│       │   │   ├── FieldLevelMergeSelector/
│       │   │   └── DuplicateResolutionActions/
│       │   │
│       │   ├── candidate/                   # ⭐ Gap #3, #7, #8, #9
│       │   │   ├── CandidateProfile/
│       │   │   ├── CandidateList/
│       │   │   ├── CandidateStatusBadge/
│       │   │   ├── CandidateActivityTimeline/
│       │   │   ├── CandidateTags/
│       │   │   └── CandidateSharing/
│       │   │
│       │   ├── admin/                       # ⭐ Gap #10
│       │   │   ├── MergeApprovalDashboard/
│       │   │   ├── DuplicateReviewQueue/
│       │   │   ├── TicketManagement/
│       │   │   ├── AdminApprovalPanel/
│       │   │   └── CandidateManagementControls/
│       │   │
│       │   ├── tickets/                     # ⭐ Gap #2
│       │   │   ├── TicketCreationView/
│       │   │   ├── TicketDetail/
│       │   │   ├── TicketStatusTracker/
│       │   │   └── TicketActions/
│       │   │
│       │   ├── data-normalization/          # ⭐ Gap #4
│       │   │   ├── NormalizedDataView/
│       │   │   ├── OriginalVsFormatted/
│       │   │   └── FieldFormattingRules/
│       │   │
│       │   ├── analytics/
│       │   │   ├── Dashboard/
│       │   │   ├── Charts/
│       │   │   ├── Reports/
│       │   │   └── ExportData/
│       │   │
│       │   ├── confirmation/                # ⭐ Gap #11
│       │   │   ├── ProfileCreatedConfirmation/
│       │   │   ├── ProfileUpdatedConfirmation/
│       │   │   ├── MergeCompletedConfirmation/
│       │   │   └── ActionSummary/
│       │   │
│       │   └── notifications/
│       │       ├── DuplicateAlert/
│       │       ├── MergeRequestNotification/
│       │       └── TicketStatusUpdate/
│       │
│       ├── pages/
│       │   ├── LandingPage/
│       │   ├── CandidateRegistration/
│       │   ├── CandidatePool/
│       │   ├── CandidateDetail/
│       │   ├── DuplicateResolution/
│       │   ├── MergePreviewPage/
│       │   ├── AdminDashboard/
│       │   ├── TicketManagement/
│       │   ├── AnalyticsDashboard/
│       │   └── Settings/
│       │
│       ├── layouts/
│       │   ├── MainLayout/
│       │   ├── AdminLayout/
│       │   └── AuthLayout/
│       │
│       ├── services/
│       │   ├── api/
│       │   │   ├── candidates.js
│       │   │   ├── duplicates.js
│       │   │   ├── tickets.js
│       │   │   ├── admin.js
│       │   │   └── analytics.js
│       │   ├── ai/
│       │   │   ├── openaiService.js
│       │   │   ├── geminiService.js
│       │   │   ├── affindaService.js
│       │   │   └── matchingEngine.js
│       │   ├── normalization/
│       │   │   ├── phoneNormalizer.js
│       │   │   ├── nameNormalizer.js
│       │   │   └── addressNormalizer.js
│       │   ├── validation/
│       │   │   ├── candidateValidator.js
│       │   │   ├── duplicateDetector.js
│       │   │   └── fieldValidators.js
│       │   └── export/
│       │       ├── pdfExporter.js
│       │       ├── csvExporter.js
│       │       └── shareService.js
│       │
│       ├── hooks/
│       │   ├── useAuth.js
│       │   ├── useCandidates.js
│       │   ├── useDuplicateDetection.js
│       │   ├── useTickets.js
│       │   └── useActivityTracking.js
│       │
│       ├── store/
│       │   ├── slices/
│       │   │   ├── candidateSlice.js
│       │   │   ├── duplicateSlice.js
│       │   │   ├── ticketSlice.js
│       │   │   ├── adminSlice.js
│       │   │   └── uiSlice.js
│       │   ├── store.js
│       │   └── index.js
│       │
│       ├── utils/
│       │   ├── constants.js
│       │   ├── helpers.js
│       │   ├── formatters.js
│       │   └── validators.js
│       │
│       ├── styles/
│       │   ├── globals.css
│       │   └── tailwind.css
│       │
│       ├── types/
│       │   ├── candidate.types.js
│       │   ├── ticket.types.js
│       │   └── api.types.js
│       │
│       ├── config/
│       │   ├── firebase.js
│       │   ├── openai.js
│       │   ├── gemini.js
│   |   │   └── dialogflow.js
│   |   │
│   |   ├── App.jsx
│   |   ├── AppRoutes.jsx
│   |   └── main.jsx
│   ├── README.md
│   ├── .gitignore
│   ├── package.json
│   ├── vite.config.js
│   └── tailwind.config.js
├── backend/
│   ├── functions/
│   │   └── src/
│   │       ├── index.js
│   │       ├── candidates/
│   │       │   ├── createCandidate.js
│   │       │   ├── updateCandidate.js
│   │       │   ├── mergeCandidates.js
│   │       │   └── deleteCandidate.js
│   │       ├── duplicates/
│   │       │   ├── detectExactMatch.js
│   │       │   ├── detectPartialMatch.js
│   │       │   ├── resolveDuplicate.js
│   │       │   └── requestMergeApproval.js
│   │       ├── tickets/
│   │       │   ├── createTicket.js
│   │       │   ├── updateTicketStatus.js
│   │       │   ├── assignTicket.js
│   │       │   └── resolveTicket.js
│   │       ├── admin/
│   │       │   ├── approveMerge.js
│   │       │   ├── rejectMerge.js
│   │       │   ├── reviewDuplicateQueue.js
│   │       │   └── manageCandidates.js
│   │       ├── ai/
│   │       │   ├── parseResume.js
│   │       │   ├── matchCandidates.js
│   │       │   ├── normalizeData.js
│   │       │   └── scoreCandidate.js
│   │       ├── normalization/
│   │       │   ├── normalizePhone.js
│   │       │   ├── normalizeName.js
│   │       │   ├── normalizeEmail.js
│   │       │   └── normalizeAddress.js
│   │       ├── validation/
│   │       │   ├── validateCandidate.js
│   │       │   ├── checkRequiredFields.js
│   │       │   └── formatValidationErrors.js
│   │       ├── export/
│   │       │   ├── generatePDF.js
│   │       │   ├── generateCSV.js
│   │       │   └── bulkExport.js
│   │       ├── webhooks/
│   │       │   ├── affindaWebhook.js
│   │       │   └── dialogflowWebhook.js
│   │       └── notifications/
│   │           ├── sendEmailOnDuplicate.js
│   │           └── sendAdminAlert.js
│   │
│   ├── database/                              # ⭐ ONLY ONE DATABASE FOLDER
│   │   ├── firestore/
│   │   │   ├── collections/
│   │   │   │   ├── candidates.rules
│   │   │   │   ├── duplicates.rules
│   │   │   │   ├── tickets.rules
│   │   │   │   ├── activities.rules
│   │   │   │   ├── users.rules
│   │   │   │   └── settings.rules
│   │   │   ├── indexes.js
│   │   │   └── migrations/
│   │   │       └── initial-schema.js
│   │   ├── models/
│   │   │   ├── Candidate.model.js
│   │   │   ├── Duplicate.model.js
│   │   │   ├── Ticket.model.js
│   │   │   ├── Activity.model.js
│   │   │   └── User.model.js
│   │   ├── backups/
│   │   │   └── daily-backup-script.sh
│   │   └── seed/
│   │       ├── sample-candidates.json
│   │       └── test-data.js
│   │
│   └── middleware/
│       ├── auth.js
│       ├── rateLimiter.js
│       ├── validation.js
│       └── errorHandler.js
│
├── ai-services/
│   ├── nlp/
│   │   ├── resumeParser/
│   │   │   ├── spacyParser.py
│   │   │   ├── huggingfaceModel.py
│   │   │   └── textExtractor.py
│   │   ├── matching/
│   │   │   ├── semanticMatcher.py
│   │   │   ├── skillExtractor.py
│   │   │   └── similarityScorer.py
│   │   └── normalization/
│   │       ├── entityRecognizer.py
│   │       └── dataCleaner.py
│   │
│   ├── chatbots/
│   │   ├── dialogflow/
│   │   │   ├── intents/
│   │   │   ├── entities/
│   │   │   ├── fulfillment/
│   │   │   └── webhook/
│   │   └── custom/
│   │       └── candidateChatbot.py
│   │
│   └── integrations/
│       ├── openai/
│       │   ├── gptMatcher.js
│       │   ├── embeddingGenerator.js
│       │   └── promptTemplates.js
│       ├── gemini/
│       │   ├── geminiNormalizer.js
│       │   ├── geminiMatcher.js
│       │   └── geminiScoring.js
│       └── affinda/
│           ├── client.js
│           └── resumeParser.js
│
├── storage/
│   ├── resumes/
│   │   ├── uploaded/
│   │   ├── parsed/
│   │   └── failed/
│   ├── exports/
│   │   ├── pdf/
│   │   ├── csv/
│   │   └── bulk/
│   └── temp/
│       └── processing/
│
├── tests/
│   ├── unit/
│   │   ├── components/
│   │   ├── services/
│   │   ├── utils/
│   │   └── validators/
│   ├── integration/
│   │   ├── duplicate-detection.test.js
│   │   ├── ticket-flow.test.js
│   │   ├── ai-matching.test.js
│   │   └── export.test.js
│   ├── e2e/
│   │   ├── candidate-journey.spec.js
│   │   ├── admin-approval.spec.js
│   │   └── duplicate-resolution.spec.js
│   └── fixtures/
│       ├── candidates.json
│       ├── resumes/
│       └── mock-data.js
│
├── scripts/
│   ├── deploy/
│   │   ├── deploy-firebase.sh
│   │   ├── deploy-functions.sh
│   │   └── seed-database.js
│   ├── maintenance/
│   │   ├── cleanup-duplicates.js
│   │   ├── archive-old-candidates.js
│   │   └── backup-database.sh
│   └── dev/
│       ├── start-frontend.sh
│       ├── start-emulators.sh
│       └── generate-test-data.js
│
├── infrastructure/
│   ├── firebase/
│   │   ├── firebase.json
│   │   ├── firestore.indexes.json
│   │   ├── firestore.rules
│   │   └── storage.rules
│   ├── terraform/
│   │   ├── main.tf
│   │   ├── variables.tf
│   │   └── outputs.tf
│   └── docker/
│       ├── Dockerfile.frontend
│       ├── Dockerfile.backend
│       └── docker-compose.yml
│
├── environment/
│   ├── .env.example
│   ├── .env.development
│   ├── .env.staging
│   └── .env.production
│
├── configuration/
│   ├── eslint/
│   │   └── .eslintrc.js
│   ├── prettier/
│   │   └── .prettierrc
│   ├── vite/
│   │   └── vite.config.js
│   ├── tailwind/
│   │   └── tailwind.config.js
│   └── jest/
│       └── jest.config.js
│
├── documentation/
│   ├── user-guides/
│   │   ├── admin-guide.md
│   │   ├── recruiter-guide.md
│   │   └── duplicate-handling-guide.md
│   ├── developer/
│   │   ├── setup.md
│   │   ├── api-reference.md
│   │   ├── database-schema.md
│   │   └── contributing.md
│   └── api/
│       ├── openapi.yaml
│       └── postman-collection.json
│
├── monitoring/
│   ├── logs/
│   ├── alerts/
│   │   └── alert-config.js
│   └── metrics/
│       └── custom-metrics.js
│
├── .gitignore
├── README.md
├── LICENSE
├── CHANGELOG.md
├── CONTRIBUTING.md
└── package.json

```