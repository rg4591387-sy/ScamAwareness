import { AnalysisResponse } from '../types';

export const DEMO_SAMPLES: Record<string, { message: string; result: AnalysisResponse }> = {
  job_offer: {
    message: `CONGRATULATIONS! You have been selected for Global Tech Solutions Remote Data Analyst Intern role. Salary: ₹45,000/month. No interview needed! 
Work 2 hours daily from phone. Complete 30 product ratings on our Telegram channel to receive daily payout. 
To activate your corporate dashboard, please transfer a refundable security verification fee of ₹1,200 via UPI to hr-deposit@fakeupi immediately. Only 4 spots left! Join: t.me/fake_ratings_group`,
    result: {
      id: 'demo-sample-job-offer',
      riskLevel: 'High',
      confidence: 'High',
      summary:
        'This message exhibits classic indicators of a fraudulent part-time/internship task scam. Legitimate employers never hire without interviews, conduct corporate work via unverified Telegram groups, or demand "refundable security fees" prior to onboarding.',
      warningSigns: [
        {
          title: 'Upfront Registration / Security Fee',
          quotedOrParaphrasedEvidence: 'transfer a refundable security verification fee of ₹1,200 via UPI',
          explanation:
            'Legitimate companies pay you for work; they never require candidates to transfer money for interviews, laptops, or onboarding activation.',
        },
        {
          title: 'Unrealistic Pay & Zero Evaluation',
          quotedOrParaphrasedEvidence: 'Salary: ₹45,000/month. No interview needed! Work 2 hours daily from phone',
          explanation:
            'Offering above-market compensation for minimal low-skill work without an interview or portfolio review is a universal lure to attract students.',
        },
        {
          title: 'Artificial Urgency & Telegram Redirection',
          quotedOrParaphrasedEvidence: 'Only 4 spots left! Join: t.me/fake_ratings_group',
          explanation:
            'Creating artificial scarcity forces impulsive decisions, while shifting communication to anonymous channels like Telegram prevents accountability.',
        },
      ],
      positiveSignals: [],
      recommendedActions: [
        'Do not send any money or UPI transfers to this recruiter.',
        'Never join private Telegram task groups for job onboarding.',
        'Verify the company on Ministry of Corporate Affairs (MCA) and LinkedIn using official email domains.',
        'Report the message on the National Cyber Crime Reporting Portal (1930 / cybercrime.gov.in).',
      ],
      linkSafety:
        'The Telegram link redirects to an encrypted chat where scammers often orchestrate Ponzi-like task rating traps. Do not open or join.',
      educationalDisclaimer:
        'This is a demonstration analysis based on common scam patterns. ScamShield AI assists with threat recognition and does not replace official recruiter verification.',
      analyzedAt: new Date().toISOString(),
      isDemo: true,
      categoryHint: 'Fake Job and Internship Offers',
      contextUsed: 'job_offer',
    },
  },

  sms: {
    message: `Dear SBI User, your YONO Account will be blocked today due to pending PAN/KYC verification. Update immediately to prevent service disruption: http://sbi-kyc-update.online/pan or call customer care 9876543210. SBI Banking Team.`,
    result: {
      id: 'demo-sample-sms-kyc',
      riskLevel: 'High',
      confidence: 'High',
      summary:
        'This is a high-risk bank impersonation SMS. Financial institutions do not send threatening SMS alerts demanding instant KYC updates through unofficial third-party domains.',
      warningSigns: [
        {
          title: 'Coercive Urgency & Threat of Account Suspension',
          quotedOrParaphrasedEvidence: 'account will be blocked today due to pending PAN/KYC verification',
          explanation:
            'Threatening immediate account deactivation induces fear, prompting victims to bypass critical security checks.',
        },
        {
          title: 'Suspicious Non-Official Domain',
          quotedOrParaphrasedEvidence: 'http://sbi-kyc-update.online/pan',
          explanation:
            'The URL uses an unverified .online top-level domain rather than the official bank domain (onlinesbi.sbi). Banks never host credential portals on unverified vanity domains.',
        },
        {
          title: 'Personal Mobile Number for Support',
          quotedOrParaphrasedEvidence: 'call customer care 9876543210',
          explanation:
            'Standard corporate banks provide toll-free numbers (e.g. 1800-series), not unverified 10-digit mobile numbers.',
        },
      ],
      positiveSignals: [],
      recommendedActions: [
        'Do not click the link or submit your PAN, Aadhaar, password, or OTP.',
        'Block the sender on your phone.',
        'If you have doubts regarding your account status, log in only through the official verified banking app or visit your branch.',
        'Forward the fraudulent SMS to 1909 (TRAI spam reporting) and report to 1930.',
      ],
      linkSafety:
        'The link points to an unencrypted (HTTP) unofficial domain designed to harvest internet banking passwords and OTPs.',
      educationalDisclaimer:
        'Demonstration analysis. AI aids in spotting red flags; always verify financial communications through official bank hotlines.',
      analyzedAt: new Date().toISOString(),
      isDemo: true,
      categoryHint: 'Bank and Government Impersonation',
      contextUsed: 'sms',
    },
  },

  payment_request: {
    message: `Buyer for your OLX laptop: "Hi bro, I want to buy your laptop immediately for ₹28,000. I am sending you a UPI QR Code. Just open your Google Pay, scan this QR code and enter your UPI PIN to receive the ₹28,000 directly into your bank account."`,
    result: {
      id: 'demo-sample-upi-qr',
      riskLevel: 'High',
      confidence: 'High',
      summary:
        'This is an unmistakable QR Code Reverse-Charge scam. Entering a UPI PIN ALWAYS authorizes an outgoing debit from your account; you NEVER enter a PIN to receive money.',
      warningSigns: [
        {
          title: 'Entering UPI PIN to "Receive" Money',
          quotedOrParaphrasedEvidence: 'scan this QR code and enter your UPI PIN to receive the ₹28,000',
          explanation:
            'A UPI PIN is an authorization signature for debiting money. Receiving payments via UPI never requires entering a PIN.',
        },
        {
          title: 'QR Code Sent by Buyer',
          quotedOrParaphrasedEvidence: 'I am sending you a UPI QR Code',
          explanation:
            'Buyers make payments by scanning the seller\'s QR or entering the seller\'s UPI ID. A buyer sending a QR code to the seller is almost always a "Collect Request" trap.',
        },
      ],
      positiveSignals: [],
      recommendedActions: [
        'NEVER enter your UPI PIN when expecting to receive funds.',
        'Decline the request and block the buyer on OLX / WhatsApp.',
        'Remember the golden rule of UPI: "UPI PIN is used ONLY to send money, NEVER to receive money."',
      ],
      linkSafety: 'QR codes are scannable vectors that can mask deceptive UPI payment links.',
      educationalDisclaimer:
        'Demonstration analysis. ScamShield AI trains users on payment mechanics to prevent UPI fraud.',
      analyzedAt: new Date().toISOString(),
      isDemo: true,
      categoryHint: 'UPI and Payment Fraud',
      contextUsed: 'payment_request',
    },
  },

  email: {
    message: `From: campus-registrar@university-admin-portal.info
Subject: ACTION REQUIRED: Final Semester Examination Hall Ticket On-Hold

Dear Student,
Your hall ticket for upcoming exams has been withheld due to an unpaid library fine of ₹450. You must clear this immediately before 6:00 PM today, failing which you will be debarred from entering the examination hall.
Click here to pay through the student gateway: https://secure-univ-fees.info/pay
Registrar Office`,
    result: {
      id: 'demo-sample-email-campus',
      riskLevel: 'High',
      confidence: 'High',
      summary:
        'This is a targeted campus phishing attack using academic anxiety and tight deadlines to trick students into entering payment credentials on a fake university gateway.',
      warningSigns: [
        {
          title: 'Academic Penalty Blackmail & Short Deadline',
          quotedOrParaphrasedEvidence: 'clear this immediately before 6:00 PM today, failing which you will be debarred',
          explanation:
            'Fabricating immediate academic debarment exploits fear and exam stress so students act quickly without questioning the email.',
        },
        {
          title: 'Lookalike Unofficial Domain',
          quotedOrParaphrasedEvidence: 'campus-registrar@university-admin-portal.info and secure-univ-fees.info',
          explanation:
            'Legitimate universities use official academic domains (such as .edu or .ac.in). Domains ending in .info or generic hosting are typical phishing infrastructures.',
        },
      ],
      positiveSignals: [],
      recommendedActions: [
        'Do not click the payment link.',
        'Check your official student portal directly by typing the university URL yourself.',
        'Confirm with your college examination department or mentor in person.',
        'Report this email to your campus IT / cybersecurity cell.',
      ],
      linkSafety:
        'The URL is an unregistered third-party website created to harvest debit/credit card details.',
      educationalDisclaimer:
        'Demonstration analysis. Verify all college administrative notices through official student ERP portals.',
      analyzedAt: new Date().toISOString(),
      isDemo: true,
      categoryHint: 'Phishing Emails',
      contextUsed: 'email',
    },
  },

  social_media: {
    message: `Hey! I am trading with AI automated crypto arbitrage algorithms and making 400% daily returns! I noticed your profile and our trading community is selecting 5 new partners this week. Minimum investment ₹5,000 returns ₹20,000 within 2 hours guaranteed by RBI-registered smart contract. DM me your WhatsApp to get started!`,
    result: {
      id: 'demo-sample-social-crypto',
      riskLevel: 'High',
      confidence: 'High',
      summary:
        'This message is a fraudulent high-yield investment scheme (Ponzi/Crypto scam). Guarantees of 400% returns in hours and claims of "RBI-registered smart contracts" are completely fraudulent.',
      warningSigns: [
        {
          title: 'Unrealistic "Guaranteed" Returns in Hours',
          quotedOrParaphrasedEvidence: 'making 400% daily returns... ₹5,000 returns ₹20,000 within 2 hours guaranteed',
          explanation:
            'No legitimate financial instrument on earth offers guaranteed 400% daily returns. Guarantees of quick wealth are the hallmark of investment fraud.',
        },
        {
          title: 'Fabricated Regulatory Backing',
          quotedOrParaphrasedEvidence: 'guaranteed by RBI-registered smart contract',
          explanation:
            'The Reserve Bank of India (RBI) does not endorse, register, or guarantee cryptocurrency smart contracts. Invoking financial regulators falsely creates an illusion of security.',
        },
      ],
      positiveSignals: [],
      recommendedActions: [
        'Do not reply, invest, or share your WhatsApp number.',
        'Block and report the account to the social media platform for financial fraud.',
        'Educate peers that any scheme promising guaranteed doubling of money in hours is a scam.',
      ],
      linkSafety: 'Direct messaging channels are used to manipulate targets in private without public scrutiny.',
      educationalDisclaimer:
        'Demonstration analysis. ScamShield AI emphasizes that high-return guarantees are primary markers of financial scams.',
      analyzedAt: new Date().toISOString(),
      isDemo: true,
      categoryHint: 'Fake Prizes and Giveaways',
      contextUsed: 'social_media',
    },
  },

  legitimate_sample: {
    message: `Dear Student, your borrowed book "Computer Networks 5th Edition" from the Central Library is due for return on October 30. You may return it at the circulation desk or renew it online at the campus intranet (library.campus.ac.in). For questions, visit the desk during library hours (9 AM - 6 PM).`,
    result: {
      id: 'demo-sample-legit-library',
      riskLevel: 'Low',
      confidence: 'High',
      summary:
        'This notice contains multiple indicators of a routine, legitimate institutional message. It requests no payments, demands no credentials, provides a reasonable advance timeframe, and references an official campus domain.',
      warningSigns: [],
      positiveSignals: [
        'No urgent threats, panicky penalties, or demands for immediate action.',
        'No requests for passwords, OTPs, UPI payments, or personal identification data.',
        'Uses an official institutional domain (library.campus.ac.in) and suggests in-person verification at the physical circulation desk.',
      ],
      recommendedActions: [
        'Return or renew your book through your normal verified student login or in person at the library.',
        'No security risk detected in this message content.',
      ],
      linkSafety:
        'The reference URL uses an institutional academic subdomain (.ac.in). Ensure you verify the URL in your browser before logging in.',
      educationalDisclaimer:
        'ScamShield AI provides educational guidance. Even low-risk messages should be treated with normal digital hygiene.',
      analyzedAt: new Date().toISOString(),
      isDemo: true,
      categoryHint: 'Educational Notice',
      contextUsed: 'other',
    },
  },
};
