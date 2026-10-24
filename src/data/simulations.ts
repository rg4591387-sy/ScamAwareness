import { SimulationScenario } from '../types';

export const SIMULATION_SCENARIOS: SimulationScenario[] = [
  {
    id: 'sim-internship-offer',
    title: 'Unsolicited High-Stipend Remote Internship Offer',
    category: 'Fake Job and Internship Offers',
    difficulty: 'Beginner',
    channel: 'WhatsApp',
    senderInfo: {
      name: 'Priya Sharma (Apex Tech HR)',
      handleOrEmail: '+91 98451 09281',
      avatarHint: 'Corporate Suit'
    },
    content: `Hi Rahul! We reviewed your resume on the college job portal. You have been shortlisted for our "Data Insights & Web Research Intern" role at Apex Global Solutions. 
Stipend: ₹45,000/month (100% Remote, 1.5 hrs/day). 
No interview is required based on your academic profile. 
To finalize your employee ID and dispatch your company laptop, kindly transfer the refundable courier insurance deposit of ₹1,499 via UPI to apex.onboard@icici before 5:00 PM today. Only 3 positions remaining!`,
    metaNotes: 'Received on personal WhatsApp from an unverified 10-digit number. No company domain email.',
    options: [
      {
        id: 'opt-pay',
        label: 'Pay ₹1,499 immediately via UPI to secure the position before 5:00 PM.',
        isSafe: false,
        riskLevel: 'Dangerous',
        whatScenarioTested: 'Resistance to advance-fee employment fraud and artificial urgency.',
        keyWarningSigns: [
          'Upfront deposit required to receive a company laptop.',
          'Zero interview or technical assessment conducted.',
          'Recruiter using personal WhatsApp rather than corporate email.',
          'Artificial rush deadline (5:00 PM today, only 3 positions left).'
        ],
        explanation: 'Paying the ₹1,499 fee will result in immediate financial loss. The scammer will block you or demand further "activation taxes". Genuine companies NEVER charge candidates for equipment or onboarding.',
        optimalSafeResponse: 'Decline to pay, search for Apex Global on official MCA/LinkedIn directories, and report the message.'
      },
      {
        id: 'opt-negotiate',
        label: 'Reply asking if the ₹1,499 can be deducted from your first month’s ₹45,000 salary instead.',
        isSafe: false,
        riskLevel: 'Caution',
        whatScenarioTested: 'Engaging with fraudsters and failing to recognize invalid job mechanics.',
        keyWarningSigns: [
          'Treating a non-existent job offer as negotiable.',
          'Continues engagement with an active threat actor.'
        ],
        explanation: 'While this avoids immediate loss, bargaining keeps you on the scammer’s hook. The scammer will fabricate administrative excuses for why advance payment is mandatory.',
        optimalSafeResponse: 'Cut off contact immediately. Once upfront money is requested, the entire offer is fraudulent.'
      },
      {
        id: 'opt-verify',
        label: 'Do not pay any money. Search the company on the Ministry of Corporate Affairs (MCA) and LinkedIn, and contact their verified corporate HR email directly.',
        isSafe: true,
        riskLevel: 'Safe',
        whatScenarioTested: 'Independent out-of-band verification and adherence to the zero-upfront-fee rule.',
        keyWarningSigns: [
          'Identified unverified communication channel.',
          'Identified upfront fee violation.'
        ],
        explanation: 'This is the optimal cybersecurity response. Legitimate firms operate with corporate domains and will confirm that "Apex Global" either does not exist or that scammers are spoofing their brand.',
        optimalSafeResponse: 'Report the number to 1930 / WhatsApp spam, warn campus peers, and move on.'
      }
    ]
  },
  {
    id: 'sim-upi-qr-sell',
    title: 'Marketplace Buyer Insisting on QR Code Payment',
    category: 'UPI and Payment Fraud',
    difficulty: 'Intermediate',
    channel: 'SMS',
    senderInfo: {
      name: 'Capt. Vikram (Army Officer)',
      handleOrEmail: '+91 91230 44556',
      avatarHint: 'Military Uniform'
    },
    content: `Hello brother, I am interested in buying your study table and chair set posted on OLX for ₹4,500. I am currently posted at the army cantonment and cannot come in person, so my military truck will pick it up tomorrow. 
I am sending you a UPI QR code. Kindly open your Google Pay, scan this QR code, and enter your 6-digit UPI PIN. The ₹4,500 will be instantly credited to your bank account.`,
    metaNotes: 'Buyer agreed to your price without bargaining and insists on sending a QR code to transfer money to you.',
    options: [
      {
        id: 'opt-scan-pin',
        label: 'Open Google Pay, scan the QR code, and enter your UPI PIN as requested.',
        isSafe: false,
        riskLevel: 'Dangerous',
        whatScenarioTested: 'Understanding of UPI protocol mechanics and PIN security.',
        keyWarningSigns: [
          'Claiming you need to enter a UPI PIN to "receive" funds.',
          'Buyer sending a QR code to the seller.',
          'Classic "Army Officer" authority pretext.'
        ],
        explanation: 'Entering your UPI PIN authorizes a withdrawal of ₹4,500 from your account to the scammer. You NEVER enter a PIN to receive payments.',
        optimalSafeResponse: 'Refuse the QR code and remind the buyer that they only need your UPI ID or phone number to transfer money.'
      },
      {
        id: 'opt-send-vpa',
        label: 'Tell the buyer: "I will not scan any QR code. If you want to pay, transfer directly to my UPI ID or Mobile Number. I will only hand over the furniture after the money appears in my bank app."',
        isSafe: true,
        riskLevel: 'Safe',
        whatScenarioTested: 'Firm boundary enforcement and correct understanding of UPI push mechanics.',
        keyWarningSigns: [
          'Recognized QR reverse charge trap.',
          'Enforced verification in personal bank app.'
        ],
        explanation: 'This is the exact correct response. Receiving money requires only sharing your public UPI ID (e.g. name@okhdfcbank). If the buyer is a scammer, they will immediately make excuses or disconnect.',
        optimalSafeResponse: 'Insist on cash on delivery or direct bank credit verified in your banking app before dispatch.'
      },
      {
        id: 'opt-partial-pin',
        label: 'Scan the QR code but enter a wrong PIN intentionally to test what happens.',
        isSafe: false,
        riskLevel: 'Caution',
        whatScenarioTested: 'Playing with threat actors and exposing your device to malicious deep-links.',
        keyWarningSigns: [
          'Interacting with unknown QR intents.'
        ],
        explanation: 'Even with a wrong PIN, scanning unknown QR codes can trigger malicious deep-links or open phishing web pages. Never scan untrusted QR codes.',
        optimalSafeResponse: 'Never scan QR codes sent by buyers.'
      }
    ]
  },
  {
    id: 'sim-digital-arrest-call',
    title: 'Urgent Video Call: Digital Arrest and Seized Parcel',
    category: 'Digital Arrest and Threat-Based Scams',
    difficulty: 'Advanced',
    channel: 'Call',
    senderInfo: {
      name: 'Inspector Vijay Rathore (Cyber Crime Cell Mumbai)',
      handleOrEmail: 'Video Call via Skype',
      avatarHint: 'Police Uniform / Office'
    },
    content: `You receive an urgent video call. A man in an authentic-looking police uniform sits against a wall displaying Mumbai Police insignias. 
"A parcel sent from Mumbai to Malaysia in your name containing 14 fake passports and 250 grams of contraband has been intercepted. An arrest warrant has been approved by the High Court under your Aadhaar number. 
You are now placed under DIGITAL ARREST. If you disconnect this call, a SWAT team will arrive at your residence within 20 minutes. 
To clear your name from money laundering, you must liquidate your fixed deposits and transfer all funds to the RBI Security Escrow account for verification."`,
    metaNotes: 'High intimidation, police sirens in background, legal threats, demanding money transfer to prove innocence.',
    options: [
      {
        id: 'opt-panic-transfer',
        label: 'Follow the officer’s instructions, keep the camera on, and transfer your savings to the RBI account to clear your name.',
        isSafe: false,
        riskLevel: 'Dangerous',
        whatScenarioTested: 'Resistance to psychological coercion and understanding of Indian criminal law.',
        keyWarningSigns: [
          'Concept of "Digital Arrest" does not exist under Indian law.',
          'Police demanding money transfers to verify innocence.',
          'Conducting judicial trials and arrests over video calls.',
          'Demanding isolation and prohibiting speaking to family.'
        ],
        explanation: 'This is a 100% fraudulent Digital Arrest extortion scheme. Transferred funds will be laundered through mule networks. Police never demand fund transfers.',
        optimalSafeResponse: 'Hang up immediately, report to 1930, and walk to your local police station if you have any doubts.'
      },
      {
        id: 'opt-hang-up-report',
        label: 'Hang up the video call immediately. Block the caller. Call 1930 (National Cyber Crime Helpline) and visit your local police station in person if you need peace of mind.',
        isSafe: true,
        riskLevel: 'Safe',
        whatScenarioTested: 'Breaking the emotional grip of extortionists and seeking verified local authority.',
        keyWarningSigns: [
          'Recognized that Digital Arrest is completely illegal and non-existent.',
          'Broke communication isolation.'
        ],
        explanation: 'Perfect response. Real police officers serve formal written notices under BNSS/CrPC; they never hold citizens hostage on Skype or demand money. Disconnecting neutralizes their coercive leverage.',
        optimalSafeResponse: 'Alert your family and roommates so they are aware of the fraud call.'
      },
      {
        id: 'opt-argue',
        label: 'Stay on the call and argue for 2 hours trying to convince the fake police officer that you are an innocent student.',
        isSafe: false,
        riskLevel: 'Caution',
        whatScenarioTested: 'Emotional exhaustion under criminal manipulation.',
        keyWarningSigns: [
          'Prolonging psychological trauma and sleep deprivation.'
        ],
        explanation: 'Scammers are trained sociopaths who will wear you down emotionally until your resistance collapses. Arguing feeds their intimidation playbook. Disconnecting is the only safe move.',
        optimalSafeResponse: 'Do not debate; disconnect immediately.'
      }
    ]
  },
  {
    id: 'sim-campus-fee-phish',
    title: 'Urgent Examination Hall Ticket Withheld Alert',
    category: 'Phishing Emails',
    difficulty: 'Intermediate',
    channel: 'Email',
    senderInfo: {
      name: 'Registrar Office',
      handleOrEmail: 'registrar@univ-exams-portal.info',
      avatarHint: 'University Seal'
    },
    content: `URGENT NOTICE TO ALL STUDENTS:
Your examination registration for the upcoming semester finals has been withheld due to an unverified academic library fee of ₹350. 
Failure to clear this fee by 6:00 PM today will result in automatic debarment from the examination hall and loss of this semester\'s credits.
Click the official gateway link below to verify your student credentials and pay the fee:
http://portal-univ-fees.info/clearance/pay.php`,
    metaNotes: 'High-pressure timing right before exams, threat of debarment, external .info domain.',
    options: [
      {
        id: 'opt-click-pay',
        label: 'Click the link and pay ₹350 immediately so your exam registration is not cancelled.',
        isSafe: false,
        riskLevel: 'Dangerous',
        whatScenarioTested: 'Spotting lookalike academic domains and resisting deadline anxiety.',
        keyWarningSigns: [
          'Domain ends in .info instead of official college domain (.ac.in or .edu).',
          'Urgent threat of academic debarment within hours.',
          'Direct link to a PHP login/payment script.'
        ],
        explanation: 'The link leads to a credential harvesting and payment skimming portal. Entering your portal credentials or card details compromises your student account and banking data.',
        optimalSafeResponse: 'Close the email, open your browser, and log in to your verified college portal via your existing bookmark.'
      },
      {
        id: 'opt-bookmark-check',
        label: 'Do not click any link in the email. Open your browser and navigate to your official college website (ending in .ac.in / .edu) via your saved bookmark, or check directly with the college examination desk.',
        isSafe: true,
        riskLevel: 'Safe',
        whatScenarioTested: 'Out-of-band verification and domain hygiene.',
        keyWarningSigns: [
          'Recognized domain mismatch (univ-exams-portal.info).',
          'Navigated to authoritative domain independently.'
        ],
        explanation: 'Exemplary behavior. By bypassing the email links and logging into your genuine university portal, you verify that no fine exists and protect your credentials from phishing.',
        optimalSafeResponse: 'Forward the phishing email to campus IT administration.'
      },
      {
        id: 'opt-reply-password',
        label: 'Reply to the email with your student roll number and portal password asking them to check.',
        isSafe: false,
        riskLevel: 'Dangerous',
        whatScenarioTested: 'Credential exposure over unencrypted channels.',
        keyWarningSigns: [
          'Sending authentication secrets via email.'
        ],
        explanation: 'Never share passwords via email. The recipient is the attacker, who will now have full access to your student records and personal email.',
        optimalSafeResponse: 'Never transmit passwords or roll numbers to unverified addresses.'
      }
    ]
  },
  {
    id: 'sim-roommate-upi-dm',
    title: 'Roommate’s Instagram DM: "Locked Out & Medical Emergency"',
    category: 'Social Media Account and Identity Fraud',
    difficulty: 'Beginner',
    channel: 'Campus Portal',
    senderInfo: {
      name: 'Aditya Verma (Classmate)',
      handleOrEmail: '@aditya_verma__2',
      avatarHint: 'Friend Photo'
    },
    content: `Bro! My main Instagram account was disabled today. I am in the emergency clinic right now and my phone battery is at 1%. My Google Pay is giving a server error. 
Can you please send ₹2,500 to this chemist UPI ID: medicos.emergency@ybl right away? 
I will pay you back in cash as soon as I get back to the hostel tonight! Please don\'t call, the doctor is checking me!`,
    metaNotes: 'New Instagram handle with double underscore, urgent emotional crisis, insistence not to call.',
    options: [
      {
        id: 'opt-send-loan',
        label: 'Quickly transfer ₹2,500 to the chemist UPI ID to help your classmate in distress.',
        isSafe: false,
        riskLevel: 'Dangerous',
        whatScenarioTested: 'Falling for cloned social profiles and simulated medical emergencies.',
        keyWarningSigns: [
          'Brand new account handle (@aditya_verma__2 with extra characters).',
          'Urgent emotional crisis demanding money transfer to a third-party UPI.',
          'Explicit plea NOT to call on regular voice phone.'
        ],
        explanation: 'This is a classic cloned profile scam. The attacker scraped Aditya’s photos and contacted friends. Your classmate is likely fine and completely unaware.',
        optimalSafeResponse: 'Call Aditya directly on his known mobile number to verify his safety.'
      },
      {
        id: 'opt-call-friend',
        label: 'Do not send money. Pick up your phone and call Aditya directly on his regular mobile phone number to verify his well-being.',
        isSafe: true,
        riskLevel: 'Safe',
        whatScenarioTested: 'Direct primary channel verification before financial action.',
        keyWarningSigns: [
          'Recognized handle spoofing.',
          'Overrode the instruction not to call.'
        ],
        explanation: 'Calling on his known phone number immediately uncovers the truth. Aditya will tell you he is not in a clinic and that someone is impersonating him.',
        optimalSafeResponse: 'Report the fake Instagram account for impersonation and warn campus friends.'
      },
      {
        id: 'opt-ask-prescription',
        label: 'Message back on Instagram asking for a photo of the medical prescription.',
        isSafe: false,
        riskLevel: 'Caution',
        whatScenarioTested: 'Relying on easily forged digital artifacts.',
        keyWarningSigns: [
          'Scammers have ready-made fake hospital slips and prescription images.'
        ],
        explanation: 'Scammers keep pre-downloaded images of medical receipts to convince skeptics. A voice call is 100x faster and definitive.',
        optimalSafeResponse: 'Always use voice or in-person verification.'
      }
    ]
  },
  {
    id: 'sim-pg-rental-deposit',
    title: 'Unverified Off-Campus PG/Hostel Deposit Request',
    category: 'Fake Job and Internship Offers',
    difficulty: 'Intermediate',
    channel: 'WhatsApp',
    senderInfo: {
      name: 'Ramesh Landlord (Metro Student PG)',
      handleOrEmail: '+91 97110 33881',
      avatarHint: 'Apartment Building'
    },
    content: `Namaste! You enquired about the single AC room near campus for ₹7,000/month. We have 4 other students visiting right now to book this room. 
If you want to freeze this room immediately without anyone else taking it, transfer ₹2,000 "Gate Pass Booking Token" to my UPI. 
After payment, I will send the guard the gate pass so you can inspect the room this evening. If you don\'t like the room, token is 100% refundable on the spot.`,
    metaNotes: 'Student needs accommodation urgently, landlord demands deposit before allowing physical visit.',
    options: [
      {
        id: 'opt-pay-token',
        label: 'Pay ₹2,000 immediately via UPI so you don\'t lose the room to competing students.',
        isSafe: false,
        riskLevel: 'Dangerous',
        whatScenarioTested: 'Rental advance-fee traps and false scarcity.',
        keyWarningSigns: [
          'Demanding money before physically inspecting the property.',
          'High-pressure scarcity ("4 other students visiting right now").',
          '"Gate Pass / Inspection Fee" invention.'
        ],
        explanation: 'Rental advance fraud is rampant in university towns. Once the token is paid, the "landlord" switches off their phone or demands a first month rent advance before providing keys to a building they do not own.',
        optimalSafeResponse: 'Never pay any token or deposit until you have physically visited the property, met the owner, and reviewed a written agreement.'
      },
      {
        id: 'opt-visit-first',
        label: 'Refuse to send any money prior to physical inspection: "I will visit the premises in person first. If the room is taken, that is fine, but I do not pay any booking tokens sight unseen."',
        isSafe: true,
        riskLevel: 'Safe',
        whatScenarioTested: 'Sound financial hygiene in offline and online transactions.',
        keyWarningSigns: [
          'Enforced physical verification rule.',
          'Resisted artificial FOMO (fear of missing out).'
        ],
        explanation: 'Proper consumer protection practice. Real landlords allow genuine prospective tenants to inspect premises during visiting hours without charging "gate pass fees".',
        optimalSafeResponse: 'Visit the address with a friend and speak to existing tenants in the building.'
      }
    ]
  }
];
