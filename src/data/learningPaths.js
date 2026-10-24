export const LEARNING_TRACKS = [
    {
        id: 'track-basics',
        level: 'Level 1: Beginner',
        title: 'Digital Safety Basics',
        description: 'Master core digital hygiene: password strength, multi-factor authentication, and identifying suspicious links.',
        estimatedMinutes: 20,
        iconName: 'Shield',
        modules: [
            {
                id: 'mod-passwords-mfa',
                title: 'Strong Passwords & Authenticator Apps',
                summary: 'Learn why password length beats complexity and why authenticator apps outperform SMS OTPs.',
                keyPoints: [
                    'Passphrases of 16+ characters (e.g. "sunset-purple-tiger-bicycle") are virtually uncrackable by brute force.',
                    'Never reuse the same password across multiple online accounts; a breach on one compromises all.',
                    'Use an Authenticator App (Google Authenticator, Microsoft Authenticator) instead of SMS OTP to prevent SIM-swap risks.',
                    'Store credentials in a reputable open-source or audited password manager.'
                ],
                quizCategoryTarget: 'otp-takeover'
            },
            {
                id: 'mod-url-hygiene',
                title: 'URL Hygiene & Anatomy of a Link',
                summary: 'Understand domains, subdomains, punycode, and why the padlock icon does not guarantee honesty.',
                keyPoints: [
                    'The root domain is immediately to the left of the first single path slash.',
                    'Subdomains like "bank.com.malicious.net" resolve to malicious.net, NOT bank.com.',
                    'HTTPS guarantees connection encryption in transit, but does not verify website legitimacy.',
                    'Hover over links or use URL expanders before clicking shortened URLs.'
                ],
                quizCategoryTarget: 'suspicious-links'
            }
        ]
    },
    {
        id: 'track-common-scams',
        level: 'Level 2: Intermediate',
        title: 'Recognizing Common Scams',
        description: 'Deep dive into phishing emails, fake lottery/prizes, and bogus customer support helplines.',
        estimatedMinutes: 25,
        iconName: 'MailCheck',
        modules: [
            {
                id: 'mod-phishing-anatomy',
                title: 'Anatomy of a Phishing Attack',
                summary: 'Deconstruct deceptive email headers, urgent deadlines, and malicious attachment extensions.',
                keyPoints: [
                    'Check the full sender email header, not merely the display name.',
                    'Beware of double extensions like ".pdf.exe" or compressed archives containing scripts.',
                    'Look for artificial deadlines (e.g. "Action required within 4 hours") engineered to induce panic.',
                    'Navigate to trusted services only using direct bookmarks or official app stores.'
                ],
                quizCategoryTarget: 'phishing'
            },
            {
                id: 'mod-advance-fee',
                title: 'The Advance-Fee Scam Formula',
                summary: 'Recognize why demands for advance payments to receive prizes, loans, or cars are always fraudulent.',
                keyPoints: [
                    'If you did not enter a lottery or buy a ticket, you cannot win.',
                    'Legitimate competitions deduct taxes directly from payouts; they never ask for upfront deposits.',
                    'E-commerce platforms do not put unsolicited cash prize cards in delivery boxes.',
                    'Never pay "customs clearance", "courier fee", or "GST processing" for free gifts.'
                ],
                quizCategoryTarget: 'fake-prizes'
            }
        ]
    },
    {
        id: 'track-payments',
        level: 'Level 3: Intermediate',
        title: 'Safe Payments and Account Protection',
        description: 'Master UPI transaction mechanics, QR code safety, and protecting financial accounts from takeover.',
        estimatedMinutes: 30,
        iconName: 'CreditCard',
        modules: [
            {
                id: 'mod-upi-mechanics',
                title: 'The Universal Rules of UPI Safety',
                summary: 'Understand the difference between push and pull payments, collect requests, and PIN entry.',
                keyPoints: [
                    'THE GOLDEN RULE: You enter your UPI PIN ONLY to send money, NEVER to receive money.',
                    'Scanning a QR code is strictly a payment initiation action.',
                    'Always verify the registered merchant name displayed on your confirmation screen before typing your PIN.',
                    'Set daily transaction caps in your banking app to limit exposure.'
                ],
                quizCategoryTarget: 'upi-fraud'
            },
            {
                id: 'mod-account-takeover',
                title: 'Defeating Account Takeover & SIM Swaps',
                summary: 'Protect your telecom line, avoid MMI call forwarding traps, and secure WhatsApp sessions.',
                keyPoints: [
                    'Never dial unfamiliar MMI codes like *401* or *21* which activate secret call forwarding.',
                    'If your phone loses cellular service unexpectedly, contact your telecom operator immediately to verify SIM swap status.',
                    'Enable Two-Step Verification inside WhatsApp with a private PIN.',
                    'Always read the full SMS text: authentication codes clearly state what action they authorize.'
                ],
                quizCategoryTarget: 'otp-takeover'
            }
        ]
    },
    {
        id: 'track-social-engineering',
        level: 'Level 4: Advanced',
        title: 'Advanced Social Engineering Awareness',
        description: 'Unmask psychological manipulation: artificial urgency, authority impersonation, romance grooming, and fake digital arrests.',
        estimatedMinutes: 35,
        iconName: 'AlertTriangle',
        modules: [
            {
                id: 'mod-psychology-urgency',
                title: 'Psychological Triggers & Authority Bias',
                summary: 'Understand why fear, guilt, greed, and authority cause intelligent people to overlook obvious red flags.',
                keyPoints: [
                    'Scammers create high cognitive load through rapid escalation, loud voices, and ticking countdowns.',
                    'Authority figures (fake police, tax officers, judges) are staged to paralyze questioning.',
                    'Isolation is key: any demand forbidding you from consulting family is an immediate indicator of fraud.',
                    'Pause and take a 5-minute break before taking any irreversible financial or credential action.'
                ],
                quizCategoryTarget: 'impersonation'
            },
            {
                id: 'mod-digital-arrest-debunk',
                title: 'Digital Arrest Myths vs. Indian Legal Reality',
                summary: 'Learn why Digital Arrest is 100% fictional and how law enforcement actually summons citizens under the law.',
                keyPoints: [
                    'Digital Arrest DOES NOT EXIST in Indian law. Police will never arrest you over Skype or WhatsApp.',
                    'No law enforcement agency ever asks citizens to transfer money to prove innocence or clear accounts.',
                    'Legal summons must be delivered as formal written notices (BNSS/CrPC) with station seals.',
                    'Hang up immediately on any threat call and report to National Cyber Helpline 1930.'
                ],
                quizCategoryTarget: 'digital-arrest'
            }
        ]
    },
    {
        id: 'track-scenarios',
        level: 'Level 5: Advanced',
        title: 'Practical Cyber Safety Scenarios',
        description: 'Apply your defense knowledge in realistic, multi-stage simulations of complex scams.',
        estimatedMinutes: 30,
        iconName: 'Terminal',
        modules: [
            {
                id: 'mod-marketplace-defense',
                title: 'Second-Hand Marketplace Scams (OLX, Quikr, Facebook)',
                summary: 'Practice handling overpayment scams, fake army officer buyers, and bogus delivery pickup fees.',
                keyPoints: [
                    'Decline buyers who refuse in-person inspection and insist on sending advance QR codes.',
                    'Never trust digital payment screenshots; verify ledger balance directly in your bank app.',
                    'Scammers frequently pose as military officers using forged ID cards to disarm suspicion.',
                    'Conduct high-value physical transactions in public, well-lit areas during daytime.'
                ],
                quizCategoryTarget: 'qr-fraud'
            },
            {
                id: 'mod-incident-response',
                title: 'Incident Response: The First 60 Minutes',
                summary: 'Know the exact playbook when money is stolen or credentials are compromised.',
                keyPoints: [
                    'THE GOLDEN HOUR: Call 1930 immediately to freeze funds before mule cash-outs.',
                    'Contact bank helpline to block compromised debit cards, UPI IDs, and net banking.',
                    'Preserve evidence: save UTR numbers, beneficiary VPAs, screenshots, and call logs.',
                    'Change passwords and revoke active login sessions across all services.'
                ],
                quizCategoryTarget: 'customer-support'
            }
        ]
    },
    {
        id: 'track-student-safety',
        level: 'Special Track: Campus & Career',
        title: 'Student Safety & Career Protection',
        description: 'Tailored for students and freshers: fake internships, hostel scams, tuition phishing, and campus Wi-Fi security.',
        estimatedMinutes: 30,
        iconName: 'GraduationCap',
        modules: [
            {
                id: 'mod-internship-fraud',
                title: 'Spotting Fraudulent Recruiter & Task Traps',
                summary: 'Differentiate between authentic placement offers and advance-fee internship traps or Telegram rating tasks.',
                keyPoints: [
                    'Legitimate employers NEVER ask candidates to pay for interviews, tests, registration, or company laptops.',
                    'Verify companies on the Ministry of Corporate Affairs (MCA) database and check corporate email domains.',
                    'Beware of "like YouTube videos" or "hotel rating" part-time tasks that pay small sums before requesting deposits.',
                    'Never share photos of your Aadhaar or PAN card prior to an official, signed offer letter.'
                ],
                quizCategoryTarget: 'fake-jobs'
            },
            {
                id: 'mod-campus-hygiene',
                title: 'Campus Wi-Fi, Housing & Peer Transactions',
                summary: 'Navigate shared hostel Wi-Fi, PG rental deposits, and split-bill UPI transactions safely.',
                keyPoints: [
                    'Never access net-banking or enter credentials over unencrypted, public campus Wi-Fi without a trusted VPN.',
                    'Never transfer "Gate Pass" or "Room Token" booking fees for hostels or PGs without visiting the physical premises.',
                    'Avoid sharing OTPs with classmates or roommates even for shared streaming accounts.',
                    'Double-check student recipient VPAs before sending split-bill hostel payments.'
                ],
                quizCategoryTarget: 'social-identity'
            }
        ]
    }
];
