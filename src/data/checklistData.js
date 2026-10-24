export const CHECKLIST_SECTIONS = [
    {
        id: 'sec-link',
        title: 'Before Clicking a Link',
        description: 'Verify URL anatomy and origin before loading unknown websites.',
        iconName: 'Link',
        items: [
            {
                id: 'chk-link-1',
                sectionId: 'sec-link',
                title: 'Inspect the root domain name',
                explanation: 'Check the text immediately preceding the last slash to ensure it is the genuine corporate domain.',
                deepDive: 'For example, in "login.google.com.verify-accounts.net/login", the root domain is verify-accounts.net, NOT google.com. Attackers use subdomains to impersonate trusted brands.'
            },
            {
                id: 'chk-link-2',
                sectionId: 'sec-link',
                title: 'Expand shortened URLs',
                explanation: 'Do not click bit.ly, tinyurl, or is.gd links from unknown senders without previewing the destination.',
                deepDive: 'Use free online URL expander tools (or append "+" to certain bit.ly links) to see where the redirection leads before sending your browser there.'
            },
            {
                id: 'chk-link-3',
                sectionId: 'sec-link',
                title: 'Never download unsolicited APK files',
                explanation: 'Do not install .apk or .exe files received via SMS, WhatsApp, or Telegram.',
                deepDive: 'Sideloaded APKs bypass standard app store security scanning and are the #1 delivery mechanism for banking trojans, SMS forwarders, and screen-sharing spyware in India.'
            },
            {
                id: 'chk-link-4',
                sectionId: 'sec-link',
                title: 'Navigate via bookmarks or official apps',
                explanation: 'For banking, university portals, or tax services, type the URL yourself or use trusted bookmarks.',
                deepDive: 'Never click links inside emails or texts that urge you to "log in to verify your account". Always open a fresh browser tab and use your saved bookmark.'
            }
        ]
    },
    {
        id: 'sec-job',
        title: 'Before Accepting a Job or Internship',
        description: 'Evaluate recruiters, offer letters, and compensation claims for fraud indicators.',
        iconName: 'Briefcase',
        items: [
            {
                id: 'chk-job-1',
                sectionId: 'sec-job',
                title: 'Confirm zero upfront fees or deposits',
                explanation: 'Legitimate employers NEVER ask candidates to pay for applications, training, or laptops.',
                deepDive: 'Any requirement to pay a "refundable registration fee", "courier insurance for laptop", or "background check clearance" is an absolute guarantee of employment fraud.'
            },
            {
                id: 'chk-job-2',
                sectionId: 'sec-job',
                title: 'Verify recruiter identity and company domain',
                explanation: 'Legitimate recruiters send communications from corporate domain emails (@company.com).',
                deepDive: 'Be deeply skeptical of recruiters communicating exclusively via personal Gmail, WhatsApp, or Telegram. Search the company on LinkedIn and verify the recruiter is listed.'
            },
            {
                id: 'chk-job-3',
                sectionId: 'sec-job',
                title: 'Check Ministry of Corporate Affairs (MCA) registration',
                explanation: 'Verify that the hiring entity is an authentic, legally registered company in India.',
                deepDive: 'You can check company incorporation records, CIN, and registered office addresses on the MCA portal (mca.gov.in) under "Master Data" search.'
            },
            {
                id: 'chk-job-4',
                sectionId: 'sec-job',
                title: 'Beware of "Part-Time Task Rating" schemes',
                explanation: 'Avoid jobs offering daily cash for liking YouTube videos, rating Google Maps venues, or crypto tasks.',
                deepDive: 'These Ponzi-like task scams initially pay small amounts (₹200) to build false confidence, then demand deposits of thousands for "prepaid VIP tasks" and freeze your money.'
            }
        ]
    },
    {
        id: 'sec-payment',
        title: 'Before Making a Digital Payment',
        description: 'Protect your bank account balance against UPI reversal traps and QR fraud.',
        iconName: 'CreditCard',
        items: [
            {
                id: 'chk-pay-1',
                sectionId: 'sec-payment',
                title: 'Remember: UPI PIN is ONLY for SENDING money',
                explanation: 'You NEVER enter your UPI PIN to receive money, refunds, or cashback.',
                deepDive: 'Entering your 4 or 6-digit UPI PIN ALWAYS authorizes money to leave your bank account. If someone tells you entering your PIN receives money, they are scamming you.'
            },
            {
                id: 'chk-pay-2',
                sectionId: 'sec-payment',
                title: 'Check the verified merchant name on the screen',
                explanation: 'Confirm the payee name displayed on the payment screen matches the person or store you intend to pay.',
                deepDive: 'Scammers paste fraudulent QR stickers over merchant standees. Before typing your PIN, look at the screen to ensure the merchant name matches the actual shop.'
            },
            {
                id: 'chk-pay-3',
                sectionId: 'sec-payment',
                title: 'Never trust payment screenshots from buyers',
                explanation: 'Check your own bank passbook or banking app to confirm actual credit before handing over goods.',
                deepDive: 'Fake UPI payment generator apps create realistic-looking transaction success screens in seconds. Only trust the ledger balance update in your own bank app.'
            },
            {
                id: 'chk-pay-4',
                sectionId: 'sec-payment',
                title: 'Keep low daily UPI transaction limits',
                explanation: 'Set daily limits (e.g. ₹5,000 to ₹10,000) inside your banking app.',
                deepDive: 'Limiting your per-day UPI spending capacity ensures that even in the unlikely event of an account compromise, your maximum potential exposure is minimized.'
            }
        ]
    },
    {
        id: 'sec-privacy',
        title: 'Before Sharing Personal Information',
        description: 'Prevent identity theft, credential stuffing, and unauthorized account takeovers.',
        iconName: 'Lock',
        items: [
            {
                id: 'chk-priv-1',
                sectionId: 'sec-privacy',
                title: 'Never disclose OTPs, PINs, or CVVs to anyone',
                explanation: 'No bank, police officer, or university administrator will ever ask for your authentication codes.',
                deepDive: 'OTPs are your private cryptographic authorization signature. Sharing an OTP gives an attacker the exact same power as handing them the keys to your account.'
            },
            {
                id: 'chk-priv-2',
                sectionId: 'sec-privacy',
                title: 'Never post boarding passes or admit cards on social media',
                explanation: 'Do not share photos of documents containing barcodes, PNRs, or Aadhaar numbers.',
                deepDive: 'Barcodes on travel boarding passes and university hall tickets encode sensitive data that attackers can decode to manipulate bookings or harvest personal identity records.'
            },
            {
                id: 'chk-priv-3',
                sectionId: 'sec-privacy',
                title: 'Enable Two-Factor Authentication with an Authenticator App',
                explanation: 'Use app-based TOTP (Google Authenticator) rather than SMS where available.',
                deepDive: 'App-based 2FA protects you against SIM swapping and telecom call forwarding vulnerabilities, ensuring that only your physical device can generate valid login tokens.'
            },
            {
                id: 'chk-priv-4',
                sectionId: 'sec-privacy',
                title: 'Never dial unknown MMI codes like *401*',
                explanation: 'Codes starting with *401* or *21* activate unconditional call forwarding.',
                deepDive: 'Attackers trick victims into dialing these numbers under the guise of "5G SIM upgrades" so that all incoming voice calls and voice OTPs are secretly rerouted to the scammer.'
            }
        ]
    },
    {
        id: 'sec-response',
        title: 'After Receiving a Suspicious Message',
        description: 'Step-by-step containment protocol when confronted with a potential scam.',
        iconName: 'ShieldAlert',
        items: [
            {
                id: 'chk-resp-1',
                sectionId: 'sec-response',
                title: 'Pause and take a 5-minute break',
                explanation: 'Break the psychological urgency loop before taking any action.',
                deepDive: 'Scammers deliberately manufacture panic and rush deadlines. Stepping away for 5 minutes allows your logical analytical faculties to re-engage.'
            },
            {
                id: 'chk-resp-2',
                sectionId: 'sec-response',
                title: 'Verify out-of-band via an independent channel',
                explanation: 'Contact the supposed sender using a published telephone number you looked up yourself.',
                deepDive: 'If you receive an alert from your bank or a friend, do not use the phone number provided in the message. Look up the official customer care number on your card or call your friend.'
            },
            {
                id: 'chk-resp-3',
                sectionId: 'sec-response',
                title: 'Never forward the message to other groups',
                explanation: 'Do not amplify phishing traps or panic-inducing rumors across campus networks.',
                deepDive: 'Viral forwarding of fraudulent recharge offers, fake scholarships, or hoaxes turns well-meaning students into unwitting promoters for cyber syndicates.'
            },
            {
                id: 'chk-resp-4',
                sectionId: 'sec-response',
                title: 'Report to 1930 / cybercrime.gov.in and block the sender',
                explanation: 'Reporting numbers and links helps authorities block malicious infrastructure.',
                deepDive: 'Forward spam SMS to 1909 (TRAI spam reporting), report fraudulent accounts in your messaging app, and report financial fraud attempts to the National Cyber Helpline 1930.'
            }
        ]
    }
];
