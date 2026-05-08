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
├── 📁 frontend/ ──────────────────────────────────────── # React Frontend Application
│   │
│   ├── 📁 public/
│   │   ├── 📁 assets/
│   │   │   ├── 📁 icons/ ────────────────────────────── # SVG/PNG icons
│   │   │   ├── 📁 images/ ───────────────────────────── # Backgrounds, illustrations
│   │   │   └── 📁 logos/ ────────────────────────────── # Company logos
│   │   └── 📄 index.html ────────────────────────────── # Entry HTML file
│   │
│   └── 📁 src/
│       │
│       ├── 📁 components/ ───────────────────────────── # Reusable UI components
│       │   │
│       │   ├── 📁 common/ ──────────────────────────── # Shared components
│       │   │   ├── 📁 Button/ ──────────────────────── # Button component
│       │   │   ├── 📁 Modal/ ───────────────────────── # Modal dialog
│       │   │   ├── 📁 Toast/ ───────────────────────── # Notification toast
│       │   │   ├── 📁 Spinner/ ─────────────────────── # Loading spinner
│       │   │   └── 📁 ConfirmationDialog/ ──────────── # Confirm actions
│       │   │
│       │   ├── 📁 forms/ ───────────────────────────── # Form components
│       │   │   ├── 📁 CandidateRegistrationForm/ ───── # Main registration form
│       │   │   ├── 📁 ValidationFeedback/ ──────────── # ⭐ Gap #5: Field errors
│       │   │   ├── 📁 RealTimeValidation/ ──────────── # Live validation
│       │   │   └── 📁 FieldLevelErrors/ ────────────── # Per-field error display
│       │   │
│       │   ├── 📁 duplicate-handling/ ──────────────── # ⭐ Gap #1 + #6
│       │   │   ├── 📁 DuplicateWarningModal/ ───────── # Warning popup
│       │   │   ├── 📁 PartialMatchWarning/ ─────────── # ⭐ Gap #6: Partial match UI
│       │   │   ├── 📁 SideBySideComparison/ ────────── # Compare two profiles
│       │   │   ├── 📁 MergePreview/ ────────────────── # Preview merge result
│       │   │   ├── 📁 FieldLevelMergeSelector/ ─────── # Choose which field to keep
│       │   │   └── 📁 DuplicateResolutionActions/ ──── # Update/Merge/Cancel buttons
│       │   │
│       │   ├── 📁 candidate/ ───────────────────────── # ⭐ Gap #3, #7, #8, #9
│       │   │   ├── 📁 CandidateProfile/ ────────────── # Full profile view
│       │   │   ├── 📁 CandidateList/ ───────────────── # List all candidates
│       │   │   ├── 📁 CandidateStatusBadge/ ────────── # ⭐ Gap #3: Status indicator
│       │   │   ├── 📁 CandidateActivityTimeline/ ───── # ⭐ Gap #7: History log
│       │   │   ├── 📁 CandidateTags/ ───────────────── # ⭐ Gap #8: Tag management
│       │   │   └── 📁 CandidateSharing/ ────────────── # ⭐ Gap #9: Export/Share
│       │   │
│       │   ├── 📁 admin/ ───────────────────────────── # ⭐ Gap #10: Admin panels
│       │   │   ├── 📁 MergeApprovalDashboard/ ──────── # Approve/reject merges
│       │   │   ├── 📁 DuplicateReviewQueue/ ────────── # Review pending duplicates
│       │   │   ├── 📁 TicketManagement/ ────────────── # Manage tickets
│       │   │   ├── 📁 AdminApprovalPanel/ ──────────── # Approval workflows
│       │   │   └── 📁 CandidateManagementControls/ ─── # CRUD operations
│       │   │
│       │   ├── 📁 tickets/ ─────────────────────────── # ⭐ Gap #2: Ticket system
│       │   │   ├── 📁 TicketCreationView/ ──────────── # Create new ticket
│       │   │   ├── 📁 TicketDetail/ ────────────────── # View ticket details
│       │   │   ├── 📁 TicketStatusTracker/ ─────────── # Status: Open/In Review/Resolved
│       │   │   └── 📁 TicketActions/ ───────────────── # Approve/Reject/Request changes
│       │   │
│       │   ├── 📁 data-normalization/ ──────────────── # ⭐ Gap #4: Normalization view
│       │   │   ├── 📁 NormalizedDataView/ ──────────── # Display normalized data
│       │   │   ├── 📁 OriginalVsFormatted/ ─────────── # Compare original vs formatted
│       │   │   └── 📁 FieldFormattingRules/ ────────── # Formatting rules display
│       │   │
│       │   ├── 📁 analytics/ ───────────────────────── # Analytics & Reporting
│       │   │   ├── 📁 Dashboard/ ───────────────────── # Main analytics dashboard
│       │   │   ├── 📁 Charts/ ──────────────────────── # Chart components
│       │   │   ├── 📁 Reports/ ─────────────────────── # Report generation
│       │   │   └── 📁 ExportData/ ──────────────────── # Export analytics
│       │   │
│       │   ├── 📁 confirmation/ ────────────────────── # ⭐ Gap #11: End-state UI
│       │   │   ├── 📁 ProfileCreatedConfirmation/ ──── # Success: Profile created
│       │   │   ├── 📁 ProfileUpdatedConfirmation/ ──── # Success: Profile updated
│       │   │   ├── 📁 MergeCompletedConfirmation/ ──── # Success: Merge done
│       │   │   └── 📁 ActionSummary/ ───────────────── # Summary of actions taken
│       │   │
│       │   └── 📁 notifications/ ───────────────────── # Real-time alerts
│       │       ├── 📁 DuplicateAlert/ ──────────────── # Duplicate found alert
│       │       ├── 📁 MergeRequestNotification/ ────── # Merge request alert
│       │       └── 📁 TicketStatusUpdate/ ──────────── # Ticket status alert
│       │
│       ├── 📁 pages/ ───────────────────────────────── # Page-level components
│       │   ├── 📁 LandingPage/ ─────────────────────── # Homepage
│       │   ├── 📁 CandidateRegistration/ ───────────── # Registration page
│       │   ├── 📁 CandidatePool/ ───────────────────── # Pool view page
│       │   ├── 📁 CandidateDetail/ ─────────────────── # Detail view page
│       │   ├── 📁 DuplicateResolution/ ─────────────── # Resolve duplicates page
│       │   ├── 📁 MergePreviewPage/ ────────────────── # Preview merge page
│       │   ├── 📁 AdminDashboard/ ──────────────────── # Admin dashboard page
│       │   ├── 📁 TicketManagement/ ────────────────── # Ticket management page
│       │   ├── 📁 AnalyticsDashboard/ ──────────────── # Analytics page
│       │   └── 📁 Settings/ ────────────────────────── # System settings page
│       │
│       ├── 📁 layouts/ ─────────────────────────────── # Layout wrappers
│       │   ├── 📁 MainLayout/ ──────────────────────── # Default layout
│       │   ├── 📁 AdminLayout/ ─────────────────────── # Admin layout
│       │   └── 📁 AuthLayout/ ──────────────────────── # Authentication layout
│       │
│       ├── 📁 services/ ────────────────────────────── # API & External services
│       │   ├── 📁 api/ ─────────────────────────────── # API calls
│       │   │   ├── 📄 candidates.js ────────────────── # Candidates API
│       │   │   ├── 📄 duplicates.js ────────────────── # Duplicates API
│       │   │   ├── 📄 tickets.js ───────────────────── # Tickets API
│       │   │   ├── 📄 admin.js ─────────────────────── # Admin API
│       │   │   └── 📄 analytics.js ─────────────────── # Analytics API
│       │   │
│       │   ├── 📁 ai/ ──────────────────────────────── # AI service integrations
│       │   │   ├── 📄 openaiService.js ─────────────── # OpenAI integration
│       │   │   ├── 📄 geminiService.js ─────────────── # Gemini integration
│       │   │   ├── 📄 affindaService.js ────────────── # Affinda integration
│       │   │   └── 📄 matchingEngine.js ────────────── # Matching logic
│       │   │
│       │   ├── 📁 normalization/ ───────────────────── # Data normalization
│       │   │   ├── 📄 phoneNormalizer.js ───────────── # Phone formatting
│       │   │   ├── 📄 nameNormalizer.js ────────────── # Name standardization
│       │   │   └── 📄 addressNormalizer.js ─────────── # Address formatting
│       │   │
│       │   ├── 📁 validation/ ──────────────────────── # Validation logic
│       │   │   ├── 📄 candidateValidator.js ────────── # Candidate validation
│       │   │   ├── 📄 duplicateDetector.js ─────────── # Duplicate detection
│       │   │   └── 📄 fieldValidators.js ───────────── # Field-level validation
│       │   │
│       │   └── 📁 export/ ──────────────────────────── # Export services
│       │       ├── 📄 pdfExporter.js ───────────────── # PDF generation
│       │       ├── 📄 csvExporter.js ───────────────── # CSV generation
│       │       └── 📄 shareService.js ──────────────── # Sharing functionality
│       │
│       ├── 📁 hooks/ ───────────────────────────────── # Custom React hooks
│       │   ├── 📄 useAuth.js ───────────────────────── # Auth hook
│       │   ├── 📄 useCandidates.js ─────────────────── # Candidates hook
│       │   ├── 📄 useDuplicateDetection.js ─────────── # Duplicate detection hook
│       │   ├── 📄 useTickets.js ────────────────────── # Tickets hook
│       │   └── 📄 useActivityTracking.js ───────────── # Activity tracking hook
│       │
│       ├── 📁 store/ ───────────────────────────────── # State management (Redux)
│       │   ├── 📁 slices/ ──────────────────────────── # Redux slices
│       │   │   ├── 📄 candidateSlice.js ────────────── # Candidate state
│       │   │   ├── 📄 duplicateSlice.js ────────────── # Duplicate state
│       │   │   ├── 📄 ticketSlice.js ───────────────── # Ticket state
│       │   │   ├── 📄 adminSlice.js ────────────────── # Admin state
│       │   │   └── 📄 uiSlice.js ───────────────────── # UI state
│       │   ├── 📄 store.js ─────────────────────────── # Store configuration
│       │   └── 📄 index.js ─────────────────────────── # Store exports
│       │
│       ├── 📁 utils/ ───────────────────────────────── # Utility functions
│       │   ├── 📄 constants.js ─────────────────────── # App constants
│       │   ├── 📄 helpers.js ───────────────────────── # Helper functions
│       │   ├── 📄 formatters.js ────────────────────── # Data formatters
│       │   └── 📄 validators.js ────────────────────── # Validators
│       │
│       ├── 📁 styles/ ──────────────────────────────── # Global styles
│       │   ├── 📄 globals.css ──────────────────────── # Global CSS
│       │   └── 📄 tailwind.css ─────────────────────── # Tailwind imports
│       │
│       ├── 📁 types/ ───────────────────────────────── # TypeScript definitions
│       │   ├── 📄 candidate.types.js ───────────────── # Candidate types
│       │   ├── 📄 ticket.types.js ──────────────────── # Ticket types
│       │   └── 📄 api.types.js ─────────────────────── # API types
│       │
│       ├── 📁 config/ ──────────────────────────────── # Configuration files
│       │   ├── 📄 firebase.js ──────────────────────── # Firebase config
│       │   ├── 📄 openai.js ────────────────────────── # OpenAI config
│       │   ├── 📄 gemini.js ────────────────────────── # Gemini config
│       │   └── 📄 dialogflow.js ────────────────────── # Dialogflow config
│       │
│       ├── 📄 App.jsx ───────────────────────────────── # Main App component
│       ├── 📄 AppRoutes.jsx ─────────────────────────── # Route definitions
│       └── 📄 main.jsx ───────────────────────────────── # Entry point
│
├── 📁 backend/ ──────────────────────────────────────── # Backend Services
│   │
│   ├── 📁 functions/ ────────────────────────────────── # Cloud Functions
│   │   └── 📁 src/
│   │       ├── 📄 index.js ──────────────────────────── # Functions entry point
│   │       │
│   │       ├── 📁 candidates/ ───────────────────────── # Candidate operations
│   │       │   ├── 📄 createCandidate.js ────────────── # Create logic
│   │       │   ├── 📄 updateCandidate.js ────────────── # Update logic
│   │       │   ├── 📄 mergeCandidates.js ────────────── # Merge logic
│   │       │   └── 📄 deleteCandidate.js ────────────── # Delete logic
│   │       │
│   │       ├── 📁 duplicates/ ───────────────────────── # Duplicate operations
│   │       │   ├── 📄 detectExactMatch.js ───────────── # Exact match detection
│   │       │   ├── 📄 detectPartialMatch.js ─────────── # Partial match detection
│   │       │   ├── 📄 resolveDuplicate.js ───────────── # Resolve duplicate
│   │       │   └── 📄 requestMergeApproval.js ───────── # Request approval
│   │       │
│   │       ├── 📁 tickets/ ──────────────────────────── # Ticket operations
│   │       │   ├── 📄 createTicket.js ───────────────── # Create ticket
│   │       │   ├── 📄 updateTicketStatus.js ─────────── # Update status
│   │       │   ├── 📄 assignTicket.js ───────────────── # Assign ticket
│   │       │   └── 📄 resolveTicket.js ──────────────── # Resolve ticket
│   │       │
│   │       ├── 📁 admin/ ────────────────────────────── # Admin operations
│   │       │   ├── 📄 approveMerge.js ───────────────── # Approve merge
│   │       │   ├── 📄 rejectMerge.js ────────────────── # Reject merge
│   │       │   ├── 📄 reviewDuplicateQueue.js ───────── # Review queue
│   │       │   └── 📄 manageCandidates.js ───────────── # Manage candidates
│   │       │
│   │       ├── 📁 ai/ ───────────────────────────────── # AI operations
│   │       │   ├── 📄 parseResume.js ────────────────── # Resume parsing
│   │       │   ├── 📄 matchCandidates.js ────────────── # Candidate matching
│   │       │   ├── 📄 normalizeData.js ──────────────── # Data normalization
│   │       │   └── 📄 scoreCandidate.js ─────────────── # Candidate scoring
│   │       │
│   │       ├── 📁 normalization/ ────────────────────── # Normalization logic
│   │       │   ├── 📄 normalizePhone.js ─────────────── # Phone normalization
│   │       │   ├── 📄 normalizeName.js ───────────────── # Name normalization
│   │       │   ├── 📄 normalizeEmail.js ──────────────── # Email normalization
│   │       │   └── 📄 normalizeAddress.js ────────────── # Address normalization
│   │       │
│   │       ├── 📁 validation/ ───────────────────────── # Validation logic
│   │       │   ├── 📄 validateCandidate.js ──────────── # Validate candidate
│   │       │   ├── 📄 checkRequiredFields.js ────────── # Required fields
│   │       │   └── 📄 formatValidationErrors.js ─────── # Format errors
│   │       │
│   │       ├── 📁 export/ ───────────────────────────── # Export logic
│   │       │   ├── 📄 generatePDF.js ────────────────── # PDF generation
│   │       │   ├── 📄 generateCSV.js ────────────────── # CSV generation
│   │       │   └── 📄 bulkExport.js ─────────────────── # Bulk export
│   │       │
│   │       ├── 📁 webhooks/ ─────────────────────────── # Webhook handlers
│   │       │   ├── 📄 affindaWebhook.js ─────────────── # Affinda webhook
│   │       │   └── 📄 dialogflowWebhook.js ──────────── # Dialogflow webhook
│   │       │
│   │       └── 📁 notifications/ ────────────────────── # Notification logic
│   │           ├── 📄 sendEmailOnDuplicate.js ───────── # Email on duplicate
│   │           └── 📄 sendAdminAlert.js ─────────────── # Admin alert
│   │
│   ├── 📁 database/ ─────────────────────────────────── # ⭐ ONLY ONE DATABASE FOLDER
│   │   │
│   │   ├── 📁 firestore/ ────────────────────────────── # Firestore config
│   │   │   ├── 📁 collections/ ──────────────────────── # Collection rules
│   │   │   │   ├── 📄 candidates.rules ──────────────── # Candidates security
│   │   │   │   ├── 📄 duplicates.rules ──────────────── # Duplicates security
│   │   │   │   ├── 📄 tickets.rules ─────────────────── # Tickets security
│   │   │   │   ├── 📄 activities.rules ──────────────── # Activities security
│   │   │   │   ├── 📄 users.rules ───────────────────── # Users security
│   │   │   │   └── 📄 settings.rules ────────────────── # Settings security
│   │   │   ├── 📄 indexes.js ────────────────────────── # Database indexes
│   │   │   └── 📁 migrations/ ───────────────────────── # Schema migrations
│   │   │       └── 📄 initial-schema.js ─────────────── # Initial schema
│   │   │
│   │   ├── 📁 models/ ───────────────────────────────── # Data models
│   │   │   ├── 📄 Candidate.model.js ────────────────── # Candidate schema
│   │   │   ├── 📄 Duplicate.model.js ────────────────── # Duplicate schema
│   │   │   ├── 📄 Ticket.model.js ───────────────────── # Ticket schema
│   │   │   ├── 📄 Activity.model.js ─────────────────── # Activity schema
│   │   │   └── 📄 User.model.js ─────────────────────── # User schema
│   │   │
│   │   ├── 📁 backups/ ──────────────────────────────── # Database backups
│   │   │   └── 📄 daily-backup-script.sh ────────────── # Backup script
│   │   │
│   │   └── 📁 seed/ ─────────────────────────────────── # Seed data
│   │       ├── 📄 sample-candidates.json ────────────── # Sample candidates
│   │       └── 📄 test-data.js ──────────────────────── # Test data
│   │
│   └── 📁 middleware/ ───────────────────────────────── # Middleware
│       ├── 📄 auth.js ───────────────────────────────── # Authentication
│       ├── 📄 rateLimiter.js ────────────────────────── # Rate limiting
│       ├── 📄 validation.js ─────────────────────────── # Request validation
│       └── 📄 errorHandler.js ───────────────────────── # Error handling
│
├── 📁 ai-services/ ──────────────────────────────────── # AI/ML Services
│   │
│   ├── 📁 nlp/ ──────────────────────────────────────── # NLP processing
│   │   ├── 📁 resumeParser/ ─────────────────────────── # Resume parsing
│   │   │   ├── 📄 spacyParser.py ────────────────────── # spaCy parser
│   │   │   ├── 📄 huggingfaceModel.py ───────────────── # Hugging Face model
│   │   │   └── 📄 textExtractor.py ──────────────────── # Text extraction
│   │   │
│   │   ├── 📁 matching/ ─────────────────────────────── # Matching algorithms
│   │   │   ├── 📄 semanticMatcher.py ────────────────── # Semantic matching
│   │   │   ├── 📄 skillExtractor.py ─────────────────── # Skill extraction
│   │   │   └── 📄 similarityScorer.py ───────────────── # Similarity scoring
│   │   │
│   │   └── 📁 normalization/ ────────────────────────── # NLP normalization
│   │       ├── 📄 entityRecognizer.py ───────────────── # Entity recognition
│   │       └── 📄 dataCleaner.py ────────────────────── # Data cleaning
│   │
│   ├── 📁 chatbots/ ─────────────────────────────────── # Chatbot services
│   │   ├── 📁 dialogflow/ ───────────────────────────── # Dialogflow integration
│   │   │   ├── 📁 intents/ ──────────────────────────── # Intent definitions
│   │   │   ├── 📁 entities/ ─────────────────────────── # Entity definitions
│   │   │   ├── 📁 fulfillment/ ──────────────────────── # Fulfillment logic
│   │   │   └── 📁 webhook/ ──────────────────────────── # Webhook handlers
│   │   │
│   │   └── 📁 custom/ ───────────────────────────────── # Custom chatbot
│   │       └── 📄 candidateChatbot.py ───────────────── # Custom chatbot logic
│   │
│   └── 📁 integrations/ ─────────────────────────────── # Third-party AI
│       ├── 📁 openai/ ───────────────────────────────── # OpenAI integration
│       │   ├── 📄 gptMatcher.js ─────────────────────── # GPT matching
│       │   ├── 📄 embeddingGenerator.js ─────────────── # Embeddings generation
│       │   └── 📄 promptTemplates.js ────────────────── # Prompt templates
│       │
│       ├── 📁 gemini/ ───────────────────────────────── # Gemini integration
│       │   ├── 📄 geminiNormalizer.js ───────────────── # Gemini normalization
│       │   ├── 📄 geminiMatcher.js ──────────────────── # Gemini matching
│       │   └── 📄 geminiScoring.js ──────────────────── # Gemini scoring
│       │
│       └── 📁 affinda/ ──────────────────────────────── # Affinda integration
│           ├── 📄 client.js ─────────────────────────── # Affinda client
│           └── 📄 resumeParser.js ───────────────────── # Resume parsing
│
├── 📁 storage/ ──────────────────────────────────────── # File Storage
│   ├── 📁 resumes/ ──────────────────────────────────── # Resume storage
│   │   ├── 📁 uploaded/ ─────────────────────────────── # Uploaded resumes
│   │   ├── 📁 parsed/ ───────────────────────────────── # Parsed resumes
│   │   └── 📁 failed/ ───────────────────────────────── # Failed uploads
│   ├── 📁 exports/ ──────────────────────────────────── # Export storage
│   │   ├── 📁 pdf/ ──────────────────────────────────── # PDF exports
│   │   ├── 📁 csv/ ──────────────────────────────────── # CSV exports
│   │   └── 📁 bulk/ ─────────────────────────────────── # Bulk exports
│   └── 📁 temp/ ─────────────────────────────────────── # Temporary files
│       └── 📁 processing/ ───────────────────────────── # Processing temp
│
├── 📁 tests/ ────────────────────────────────────────── # Testing Suite
│   ├── 📁 unit/ ─────────────────────────────────────── # Unit tests
│   │   ├── 📁 components/ ───────────────────────────── # Component tests
│   │   ├── 📁 services/ ─────────────────────────────── # Service tests
│   │   ├── 📁 utils/ ────────────────────────────────── # Utility tests
│   │   └── 📁 validators/ ───────────────────────────── # Validator tests
│   │
│   ├── 📁 integration/ ──────────────────────────────── # Integration tests
│   │   ├── 📄 duplicate-detection.test.js ───────────── # Duplicate detection
│   │   ├── 📄 ticket-flow.test.js ───────────────────── # Ticket flow
│   │   ├── 📄 ai-matching.test.js ───────────────────── # AI matching
│   │   └── 📄 export.test.js ────────────────────────── # Export tests
│   │
│   ├── 📁 e2e/ ──────────────────────────────────────── # End-to-end tests
│   │   ├── 📄 candidate-journey.spec.js ─────────────── # Full journey
│   │   ├── 📄 admin-approval.spec.js ────────────────── # Admin approval
│   │   └── 📄 duplicate-resolution.spec.js ──────────── # Duplicate resolution
│   │
│   └── 📁 fixtures/ ─────────────────────────────────── # Test fixtures
│       ├── 📄 candidates.json ───────────────────────── # Mock candidates
│       ├── 📁 resumes/ ──────────────────────────────── # Mock resumes
│       └── 📄 mock-data.js ──────────────────────────── # Mock data
│
├── 📁 scripts/ ──────────────────────────────────────── # Automation Scripts
│   ├── 📁 deploy/ ───────────────────────────────────── # Deployment scripts
│   │   ├── 📄 deploy-firebase.sh ────────────────────── # Firebase deploy
│   │   ├── 📄 deploy-functions.sh ───────────────────── # Functions deploy
│   │   └── 📄 seed-database.js ──────────────────────── # Database seeding
│   │
│   ├── 📁 maintenance/ ──────────────────────────────── # Maintenance scripts
│   │   ├── 📄 cleanup-duplicates.js ─────────────────── # Duplicate cleanup
│   │   ├── 📄 archive-old-candidates.js ─────────────── # Archive old data
│   │   └── 📄 backup-database.sh ────────────────────── # Database backup
│   │
│   └── 📁 dev/ ──────────────────────────────────────── # Development scripts
│       ├── 📄 start-frontend.sh ─────────────────────── # Start frontend
│       ├── 📄 start-emulators.sh ────────────────────── # Start emulators
│       └── 📄 generate-test-data.js ─────────────────── # Generate test data
│
├── 📁 infrastructure/ ───────────────────────────────── # DevOps Configuration
│   ├── 📁 firebase/ ─────────────────────────────────── # Firebase config
│   │   ├── 📄 firebase.json ─────────────────────────── # Firebase settings
│   │   ├── 📄 firestore.indexes.json ────────────────── # Firestore indexes
│   │   ├── 📄 firestore.rules ───────────────────────── # Security rules
│   │   └── 📄 storage.rules ─────────────────────────── # Storage rules
│   │
│   ├── 📁 terraform/ ────────────────────────────────── # Terraform IaC
│   │   ├── 📄 main.tf ───────────────────────────────── # Main Terraform
│   │   ├── 📄 variables.tf ──────────────────────────── # Variables
│   │   └── 📄 outputs.tf ────────────────────────────── # Outputs
│   │
│   └── 📁 docker/ ───────────────────────────────────── # Docker config
│       ├── 📄 Dockerfile.frontend ───────────────────── # Frontend container
│       ├── 📄 Dockerfile.backend ────────────────────── # Backend container
│       └── 📄 docker-compose.yml ────────────────────── # Compose orchestration
│
├── 📁 environment/ ──────────────────────────────────── # Environment Variables
│   ├── 📄 .env.example ──────────────────────────────── # Example env
│   ├── 📄 .env.development ──────────────────────────── # Development env
│   ├── 📄 .env.staging ──────────────────────────────── # Staging env
│   └── 📄 .env.production ───────────────────────────── # Production env
│
├── 📁 configuration/ ────────────────────────────────── # Tool Configurations
│   ├── 📁 eslint/ ───────────────────────────────────── # ESLint config
│   │   └── 📄 .eslintrc.js ──────────────────────────── # ESLint rules
│   ├── 📁 prettier/ ─────────────────────────────────── # Prettier config
│   │   └── 📄 .prettierrc ───────────────────────────── # Prettier rules
│   ├── 📁 vite/ ─────────────────────────────────────── # Vite config
│   │   └── 📄 vite.config.js ────────────────────────── # Vite settings
│   ├── 📁 tailwind/ ─────────────────────────────────── # Tailwind config
│   │   └── 📄 tailwind.config.js ────────────────────── # Tailwind settings
│   └── 📁 jest/ ─────────────────────────────────────── # Jest config
│       └── 📄 jest.config.js ────────────────────────── # Jest settings
│
├── 📁 documentation/ ────────────────────────────────── # Project Documentation
│   ├── 📁 user-guides/ ──────────────────────────────── # User documentation
│   │   ├── 📄 admin-guide.md ────────────────────────── # Admin guide
│   │   ├── 📄 recruiter-guide.md ────────────────────── # Recruiter guide
│   │   └── 📄 duplicate-handling-guide.md ───────────── # Duplicate guide
│   │
│   ├── 📁 developer/ ────────────────────────────────── # Developer docs
│   │   ├── 📄 setup.md ──────────────────────────────── # Setup guide
│   │   ├── 📄 api-reference.md ──────────────────────── # API reference
│   │   ├── 📄 database-schema.md ────────────────────── # Schema docs
│   │   └── 📄 contributing.md ───────────────────────── # Contributing guide
│   │
│   └── 📁 api/ ──────────────────────────────────────── # API documentation
│       ├── 📄 openapi.yaml ──────────────────────────── # OpenAPI spec
│       └── 📄 postman-collection.json ───────────────── # Postman collection
│
├── 📁 monitoring/ ───────────────────────────────────── # Monitoring & Observability
│   ├── 📁 logs/ ─────────────────────────────────────── # Application logs
│   ├── 📁 alerts/ ───────────────────────────────────── # Alert configuration
│   │   └── 📄 alert-config.js ───────────────────────── # Alert rules
│   └── 📁 metrics/ ──────────────────────────────────── # Custom metrics
│       └── 📄 custom-metrics.js ─────────────────────── # Metrics collection
│
├── 📄 .gitignore ────────────────────────────────────── # Git ignore rules
├── 📄 README.md ─────────────────────────────────────── # Project README
├── 📄 LICENSE ───────────────────────────────────────── # MIT License
├── 📄 CHANGELOG.md ──────────────────────────────────── # Version history
├── 📄 CONTRIBUTING.md ───────────────────────────────── # Contributing guidelines
└── 📄 package.json ──────────────────────────────────── # Dependencies & scripts


```