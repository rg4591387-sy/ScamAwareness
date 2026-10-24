# ScamShield AI 2.0 — Digital Scam Awareness Platform

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Version: 2.0.0](https://img.shields.io/badge/Version-2.0.0-cyan.svg)]()
[![Stack: React+Vite+Node+Express](https://img.shields.io/badge/Stack-React%2018%20|%20Vite%20|%20Node%20|%20Express-indigo.svg)]()

> **"Think Before You Click."** — An AI-powered full-stack cybersecurity awareness and threat defense platform tailored for students, freshers, and everyday internet users.

---

## 1. Project Purpose & Overview

Digital deception is evolving rapidly in India and globally. Cybercriminals deploy deceptive tactics including **fake internship stipend offers**, **advance-fee registration schemes**, **UPI QR reverse-charge fraud**, **digital arrest intimidation calls**, **KYC suspension SMS traps**, and **campus fee phishing portals**.

**ScamShield AI 2.0** empowers users with proactive defense:
- **Neural Threat Analyzer**: Inspects suspicious emails, SMS messages, and recruiter offers using server-side **Google Gemini AI (`@google/genai`)** with built-in prompt-injection defenses.
- **Twelve Scam Categories**: Deep dives into attack mechanics, manipulation triggers, and verified incident responses.
- **Category-Specific Quiz Engine**: Over 70+ authentic, scenario-driven questions across all 12 categories with detailed answer rationales and mistake reviews.
- **Scam Simulation Lab**: Safe, interactive sandbox testing user decisions in simulated real-world scenarios.
- **Dedicated Student Safety Track**: Tailored guidance for freshers against fake placements, unverified hostel/PG deposits, and campus Wi-Fi snooping, complete with **copy-paste safe response templates**.
- **Transparent Cyber Safety Score**: Transparent 100-point educational index calculated from real recorded user activity.
- **Emergency Incident Response**: Direct integration with the **National Cyber Crime Helpline (1930)** and **https://cybercrime.gov.in** during the critical "Golden Hour".

---

## 2. Technology Stack

- **Frontend**: React 18, TypeScript, Vite 6, React Router DOM v6
- **Styling & UI**: Tailwind CSS v3, Lucide React icons, Custom Cybersecurity Midnight Navy Design System
- **Animation System**: Lightweight CSS keyframes, SVG network canvas, subtle scanlines, full `prefers-reduced-motion` accessibility support
- **Backend**: Node.js, Express, TypeScript (NodeNext / ESM)
- **AI Integration**: Official Google Gen AI SDK (`@google/genai`)
- **Validation**: Zod schema validation on both client and server boundaries
- **Data Persistence**: Resilient local repository store (`.data/scamshield_store.json`) with client-side `localStorage` sync and fallback
- **Security & Privacy**: Zero storage of raw suspicious messages by default, sanitized health endpoint, rate limiting, and strict input limits

---

## 3. Architecture & Folder Structure

```
c:\Users\rg459\Desktop\Digital Scam\
├── server/
│   ├── config.ts              # Server environment & Gemini configuration
│   ├── demoAnalyses.ts        # Fictional educational demo analyses
│   ├── gemini.ts              # Google Gen AI integration & educator persona
│   ├── repository.ts          # Persistent data repository (.data/scamshield_store.json)
│   ├── schemas.ts             # Zod validation schemas
│   ├── server.ts              # Express server with rate limits & health routes
│   └── tsconfig.json          # NodeNext TypeScript configuration
├── src/
│   ├── components/
│   │   ├── analyzer/          # AnalyzerResults & threat indicators
│   │   ├── layout/            # Sidebar, Header, MobileNav, Layout
│   │   ├── quiz/              # QuizEngine, question flows, and review screens
│   │   └── ui/                # Button, Card, RiskBadge, Modal, AnimatedBackground
│   ├── data/
│   │   ├── categories.ts      # 12 complete scam categories
│   │   ├── checklistData.ts   # 5 safety checklist sections
│   │   ├── demoAnalyses.ts    # Frontend demo analysis samples
│   │   ├── learningPaths.ts   # 6 structured learning tracks
│   │   ├── questions.ts       # 72+ unique category questions
│   │   ├── resourcesData.ts   # Official portals & emergency protocols
│   │   ├── simulations.ts     # 6 interactive simulation scenarios
│   │   └── studentSafetyData.ts # Student templates & recruiter checklists
│   ├── hooks/
│   │   ├── usePreferences.tsx # Theme, demo mode, and health check state
│   │   └── useProgress.tsx    # Dual-sync progress & Cyber Safety Score
│   ├── pages/
│   │   ├── Analyzer.tsx       # Message analysis interface
│   │   ├── CategoryDetail.tsx # Deep-dive category guide & study page
│   │   ├── Checklist.tsx      # Interactive safety checklist
│   │   ├── Emergency.tsx      # Immediate 1930 triage & incident protocol
│   │   ├── LearningPaths.tsx  # 6-level structured learning journey
│   │   ├── Library.tsx        # 12-category archive with search & filters
│   │   ├── NotFound.tsx       # 404 security fallback
│   │   ├── Overview.tsx       # Main dashboard & real activity snapshot
│   │   ├── Progress.tsx       # Cyber Safety Score & analytics breakdown
│   │   ├── QuizPage.tsx       # Category quizzes, mixed quiz, & weekly sprint
│   │   ├── Resources.tsx      # Verified regulatory & reporting directory
│   │   ├── Settings.tsx       # AI mode, data export/clear, & server health
│   │   └── StudentSafety.tsx  # Campus & career protection hub
│   ├── services/
│   │   ├── apiClient.ts       # Express API client with error handling
│   │   └── storage.ts         # Local storage repository & score formula
│   ├── types/
│   │   └── index.ts           # Centralized TypeScript interfaces
│   ├── App.tsx                # Client routing definitions
│   ├── main.tsx               # React application entry point
│   └── index.css              # Tailwind base & custom animations
├── public/                    # Static assets (shield.svg favicon)
├── .env.example               # Environment template
├── .gitignore                 # Git ignore rules (secrets & node_modules)
├── index.html                 # HTML5 document template
├── package.json               # Root scripts & dependencies
├── tsconfig.json              # Client TypeScript configuration
├── vite.config.ts             # Vite build & API proxy setup
└── README.md                  # Comprehensive documentation
```

---

## 4. Installation & Development

### Prerequisites
- **Node.js**: v18.0.0 or later (v20+ or v24+ recommended)
- **npm**: v9.0.0 or later

### Step 1: Clone or Navigate to Directory
```bash
cd "c:\Users\rg459\Desktop\Digital Scam"
```

### Step 2: Install Dependencies
```bash
npm install
```

### Step 3: Configure Environment Variables
Copy `.env.example` to `.env`:
```bash
cp .env.example .env
```
*(On Windows PowerShell: `Copy-Item .env.example .env`)*

Configure your settings:
```ini
PORT=5000
NODE_ENV=development
GEMINI_API_KEY=your_google_ai_studio_key_here
GEMINI_MODEL=gemini-2.5-flash
CLIENT_URL=http://localhost:5173
```
> **Note**: If `GEMINI_API_KEY` is omitted or left empty, ScamShield AI automatically runs in **Demo Mode**, utilizing built-in educational analysis and realistic samples without requiring external credentials.

### Step 4: Run Development Server
```bash
npm run dev
```
This runs both the backend Express server on port 5000 and the Vite frontend on port 5173 concurrently.

### Step 5: Build for Production
```bash
npm run build
```
This builds both the client bundle (`dist/`) and verifies all server TypeScript files.

---

## 5. Google Gemini AI Integration & Security Rules

ScamShield AI utilizes the official Google Gen AI SDK (`@google/genai`) strictly on the server:
- **Zero Client-Side Exposure**: API keys are never exposed in browser network requests, Vite envs, or public source code.
- **Untrusted Input Defense**: User-submitted message content is explicitly isolated inside security demarcation tags and treated strictly as untrusted data, preventing prompt-injection exploits.
- **Cybersecurity Educator Persona**: The model balances detection with clear educational takeaways, evidence quotation, link safety limitations, and next steps.
- **Structured JSON Validation**: Model output is parsed and validated against strict Zod schemas before being returned to the client.

---

## 6. Demo Mode vs. Live AI Mode

| Capability | Live AI Mode | Demo Mode |
|---|---|---|
| **AI Engine** | Google Gemini (`gemini-2.5-flash`) | Built-in Rule-Based Heuristic Engine |
| **API Key Required** | Yes (`GEMINI_API_KEY` in `.env`) | No (Works offline / zero credentials) |
| **Custom Input Analysis** | Dynamic neural evaluation | Heuristic pattern matching + samples |
| **Sample Testing** | Yes | Yes (5 rich fictional scam samples) |
| **Honest Status Indicator** | Labeled "Live Gemini AI" | Labeled "DEMO MODE" |

Users can freely toggle between Live AI priority and Demo Mode inside **Settings & Privacy**.

---

## 7. Twelve Scam Categories & Question Banks

1. **Phishing Emails** (`phishing`): Deceptive credential-harvesting emails and fake university portal warnings.
2. **Fake Job and Internship Offers** (`fake-jobs`): Unsolicited high-paying roles requiring upfront registration or laptop fees.
3. **UPI and Payment Fraud** (`upi-fraud`): Collect request traps, fake payment screenshots, and reverse-charge fraud.
4. **Bank and Government Impersonation** (`impersonation`): Fake electricity disconnection calls, AnyDesk screen-sharing exploits, and fake police summons.
5. **Suspicious Links and URL Tricks** (`suspicious-links`): Subdomain deception, typosquatting, shortener masking, and sideloaded APK trojans.
6. **Fake Prizes and Giveaways** (`fake-prizes`): Advance-fee lotteries, scratch cards, and shipping charges for "free iPhones".
7. **Social Engineering and Romance Scams** (`romance-social`): "Pig butchering" investment grooming, customs gift parcel fees, and sextortion.
8. **QR-Code Payment Fraud** (`qr-fraud`): Tampered merchant QR stickers and "scan QR to receive funds" scams.
9. **OTP and Account Takeover Scams** (`otp-takeover`): Friend DM verification codes, *401* call forwarding traps, and SIM swapping.
10. **Digital Arrest and Threat-Based Scams** (`digital-arrest`): Coercive video calls by fake police demanding fund transfers to "clearing accounts".
11. **Fake Customer Support Scams** (`customer-support`): Poisoned Google Search snippets and refund token payment traps.
12. **Social Media Account and Identity Fraud** (`social-identity`): Cloned accounts soliciting emergency friend loans, admit card oversharing, and deepfake voice cloning.

---

## 8. Transparent Cyber Safety Score Formula

The Cyber Safety Score (0-100) is calculated strictly from real activity:
$$\text{Cyber Safety Score} = \text{Quiz Score (35 pts)} + \text{Category Progress (25 pts)} + \text{Simulations (20 pts)} + \text{Checklist (20 pts)}$$

- **Quiz Accuracy (35%)**: Average percentage across recorded quiz attempts multiplied by 0.35.
- **Category Learning (25%)**: Proportion of the 12 categories marked as completed multiplied by 25.
- **Simulations Completed (20%)**: Proportion of the 6 simulation lab scenarios completed multiplied by 20.
- **Checklist Habits (20%)**: Proportion of the 20 safety checklist items completed multiplied by 20.

*Zero states are honestly displayed for new users (0/100) with no fabricated statistics.*

---

## 9. Dependency & Feature Configuration Matrix

| Feature | Runs Locally / Guest Mode | Requires `.env` GEMINI_API_KEY | Requires External Network |
|---|---|---|---|
| **Overview Dashboard & Metrics** | Yes | No | No |
| **Scam Analyzer (Demo Mode)** | Yes | No | No |
| **Scam Analyzer (Live AI)** | Yes | **Yes** | Yes (Google AI API) |
| **12 Category Learning Guides** | Yes | No | No |
| **12 Category Quizzes (72+ Qs)** | Yes | No | No |
| **Mixed & Weekly Quizzes** | Yes | No | No |
| **Interactive Simulation Lab** | Yes | No | No |
| **Student Safety Track & Templates**| Yes | No | No |
| **Safety Checklist & Reset** | Yes | No | No |
| **Cyber Safety Score & Analytics**| Yes | No | No |
| **Resource Directory & Emergency** | Yes | No | No |
| **Data Export (JSON) & Clear** | Yes | No | No |

---

## 10. Privacy & Legal Disclaimer

- **Privacy**: ScamShield AI does not request passwords, OTPs, PINs, CVVs, or financial credentials. Unsolicited text submitted for analysis is processed in-memory. Raw message text is never stored in persistent databases.
- **Educational Scope**: ScamShield AI provides cybersecurity awareness education. It is not an active antivirus, does not block device traffic, and does not replace official law enforcement reporting.
- **Emergency Incident Hotline**: In India, financial cyber fraud should be reported immediately to **1930** or **https://cybercrime.gov.in**.

---

## 11. License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.
