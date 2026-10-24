export interface ResponseTemplate {
  id: string;
  category: 'Recruiter' | 'Landlord' | 'Marketplace Seller' | 'Unknown Caller';
  title: string;
  situation: string;
  templateText: string;
  explanation: string;
}

export interface StudentMicroLesson {
  id: string;
  title: string;
  duration: string;
  iconName: string;
  category: string;
  summary: string;
  doList: string[];
  dontList: string[];
}

export const SAFE_RESPONSE_TEMPLATES: ResponseTemplate[] = [
  {
    id: 'tmpl-recruiter-fee',
    category: 'Recruiter',
    title: 'When a Recruiter Requests an "Onboarding / Laptop Fee"',
    situation: 'Recruiter asks for refundable security money before sending offer letter or laptop.',
    templateText: `Thank you for the offer. However, as per standard industry recruitment policy, I do not make any upfront payments for recruitment, equipment deposits, or background checks. If company equipment is provided, please arrange for it via your official corporate logistics with no candidate-side advance fee. Kindly let me know if we can proceed under standard enterprise hiring guidelines.`,
    explanation: 'Firmly sets boundaries citing standard corporate policy. Real recruiters will comply; scammers will make excuses or drop off.'
  },
  {
    id: 'tmpl-recruiter-docs',
    category: 'Recruiter',
    title: 'When Asked for Aadhaar / PAN Before an Interview',
    situation: 'Recruiter demands government identity photos and selfie before any formal interview.',
    templateText: `I am happy to provide my resume and portfolio for initial technical review. However, I share sensitive identity documents (Aadhaar/PAN) only upon receipt of a formal written offer letter sent from an official corporate email domain. Please let me know the scheduled date for our technical discussion.`,
    explanation: 'Protects personal KYC from being harvested for mule accounts while keeping the opportunity open if genuine.'
  },
  {
    id: 'tmpl-landlord-deposit',
    category: 'Landlord',
    title: 'When a Landlord Demands a "Booking Token" Sight Unseen',
    situation: 'Landlord demands UPI deposit to lock the room before allowing a physical visit.',
    templateText: `Thank you for sharing the room details. I understand the demand, but my family policy is to physically visit and inspect the accommodation in person before transferring any booking tokens or advance rent. I can visit today between 4 PM and 6 PM. If the room is already taken by then, I understand. Please share the exact address for my visit.`,
    explanation: 'Politely eliminates the advance-fee trap without hostility.'
  },
  {
    id: 'tmpl-marketplace-qr',
    category: 'Marketplace Seller',
    title: 'When an Online Buyer Sends a QR Code to Pay You',
    situation: 'Buyer on OLX/campus marketplace insists on sending a QR code for you to scan to receive funds.',
    templateText: `Please note that in UPI, a recipient NEVER needs to scan a QR code or enter a UPI PIN to receive money. To pay me, please send the funds directly to my Mobile Number or UPI ID: [YOUR_UPI_ID_HERE]. Once the credit appears in my bank statement, I will dispatch the item.`,
    explanation: 'Directly addresses the misconception and enforces proper UPI protocol.'
  },
  {
    id: 'tmpl-caller-threat',
    category: 'Unknown Caller',
    title: 'When an Unknown Caller Threatens Legal Action or Disconnection',
    situation: 'Caller claims your power, phone line, or bank account will be suspended today.',
    templateText: `I do not conduct financial or identity verifications over unsolicited phone calls. Please send a formal written notice through official postal mail or via the registered portal inbox. I will independently verify this with the official branch customer care desk. Good day.`,
    explanation: 'De-escalates urgency, refuses to engage in debate, and ends the call cleanly.'
  }
];

export const STUDENT_MICRO_LESSONS: StudentMicroLesson[] = [
  {
    id: 'lesson-internships',
    title: 'Campus Placements & Remote Internships',
    duration: '3 min read',
    iconName: 'Briefcase',
    category: 'Career Protection',
    summary: 'How to separate high-paying legitimate internships from task-based Ponzi schemes and fee-charging agencies.',
    doList: [
      'Verify the hiring company on Ministry of Corporate Affairs (mca.gov.in) and LinkedIn.',
      'Check if communication originates from a corporate domain email (e.g. @company.com), not @gmail.com.',
      'Consult your college training and placement cell (TPO) if an offer seems unusually lucrative.',
      'Expect technical interviews or portfolio assessments before any genuine job offer.'
    ],
    dontList: [
      'NEVER pay any registration fee, training fee, or laptop deposit to get a job.',
      'Never join Telegram task groups that promise daily returns for rating hotels or videos.',
      'Never share photos of your Aadhaar card or PAN card before signing an official offer letter.'
    ]
  },
  {
    id: 'lesson-wifi-housing',
    title: 'Hostel Wi-Fi & Shared Living Security',
    duration: '4 min read',
    iconName: 'Wifi',
    category: 'Campus Hygiene',
    summary: 'Securing your devices on crowded university networks, public library PCs, and peer split-payments.',
    doList: [
      'Always use a reputable VPN when logging into bank accounts on open campus or hostel Wi-Fi.',
      'Log out of university library computers and never save passwords or browser autofill on public terminals.',
      'Enable screen locks and biometric authentication on your phone to prevent dorm prank takeovers.',
      'Verify friend VPAs before sending split-bill mess payments.'
    ],
    dontList: [
      'Never transfer "Gate Pass" or advance room tokens for PGs without visiting in person.',
      'Never click on "Free 50GB Campus Wi-Fi" links or promotional QR stickers.',
      'Never share your device unlock PIN or UPI PIN with roommates.'
    ]
  },
  {
    id: 'lesson-scholarships',
    title: 'Scholarship & Education Loan Scams',
    duration: '3 min read',
    iconName: 'GraduationCap',
    category: 'Academic Safety',
    summary: 'Recognizing bogus education grants, fraudulent loan apps, and student fee phishing portals.',
    doList: [
      'Apply for government scholarships exclusively through the National Scholarship Portal (scholarships.gov.in).',
      'Verify college fee notices through your official university ERP portal or registrar desk in person.',
      'Check that loan providers are RBI-registered Non-Banking Financial Companies (NBFCs) or scheduled banks.',
      'Read official college circulars on the verified campus website (ending in .ac.in / .edu).'
    ],
    dontList: [
      'Never install instant loan apps from APK links or unverified web ads that demand contacts and photo permissions.',
      'Never pay a "processing fee" or "file charge" via UPI to unlock a supposed scholarship.',
      'Never trust emails from third-party domains (like @univ-scholarships.org) claiming you won an unapplied grant.'
    ]
  }
];

export const RECRUITER_VERIFICATION_STEPS = [
  {
    step: 1,
    title: 'Check Email Domain',
    description: 'Corporate recruiters write from @company.com domains, never from free personal Gmail, Yahoo, or Hotmail accounts.'
  },
  {
    step: 2,
    title: 'Search MCA & LinkedIn',
    description: 'Search the company name on mca.gov.in to confirm active corporate registration. Check the recruiter\'s profile on LinkedIn.'
  },
  {
    step: 3,
    title: 'Verify Interview Rigor',
    description: 'Legitimate corporate hiring involves at least one technical or behavioral interview with human evaluators. Instant WhatsApp offers are always scams.'
  },
  {
    step: 4,
    title: 'Apply the Zero-Fee Rule',
    description: 'If they ask for even ₹1 for registration, training, laptop courier, or background checks, it is 100% a scam.'
  }
];
