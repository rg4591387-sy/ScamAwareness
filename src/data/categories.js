export const SCAM_CATEGORIES = [
    {
        id: 'phishing',
        name: 'Phishing Emails',
        shortDescription: 'Deceptive emails engineered to look like trusted colleges, services, or banks to steal credentials.',
        badge: 'Credential Theft',
        iconName: 'Mail',
        riskLevel: 'High',
        difficulty: 'Beginner',
        howItWorks: [
            'Scammers register lookalike domain names (e.g., student-portal-support.com instead of university.edu).',
            'They send urgent warnings regarding password expirations, exam hall tickets, or mailbox capacity limits.',
            'Victims click on an embedded link leading to a cloned login page identical to their college or corporate portal.',
            'Credentials entered are immediately captured by the attacker to compromise accounts, student data, or forwarded emails.'
        ],
        warningSigns: [
            'Sender address domain does not strictly match the official organization (e.g., @gmail.com or @univ-verify.info).',
            'High-pressure deadlines demanding action within 12-24 hours to avoid account termination.',
            'Generic salutations like "Dear Student" or "Dear User" instead of your actual registered name.',
            'Hovering over embedded links reveals an entirely different destination URL.'
        ],
        realisticExample: {
            scenario: 'A student receives an email claiming their campus IT account will be terminated tonight unless they verify their quota.',
            suspiciousArtifact: 'From: it-admin@university-security-reset.net\nSubject: URGENT: Your student portal access expires in 4 hours\nBody: Click here to verify your storage allocation and preserve your enrollment records.',
            redFlags: [
                'Domain is university-security-reset.net instead of official .ac.in / .edu domain.',
                'Urgent ultimatum threatening sudden loss of academic enrollment.',
                'Direct link to a third-party login form.'
            ]
        },
        manipulationTechniques: [
            'Artificial urgency (short count-down timer)',
            'Fear of academic disruption or debarment',
            'Authority impersonation (Dean, Registrar, IT Desk)'
        ],
        howToStaySafe: [
            'Never click login links in unsolicited emails; navigate to your portal by typing the known official URL directly.',
            'Inspect the full sender email header, not just the display name.',
            'Enable Multi-Factor Authentication (MFA) with an authenticator app rather than SMS OTP.',
            'Report suspicious campus emails to your institution’s IT helpdesk or CERT-In.'
        ],
        whatToDoIfAffected: [
            'Immediately change your password through the genuine, official portal.',
            'Revoke all active login sessions in your account security settings.',
            'Notify your institution’s IT administrator immediately so they can quarantine malicious forwarding rules.',
            'Check if any secondary backup email or phone number was altered in your profile.'
        ],
        studentConsiderations: [
            'Commonly targets exam time, assignment submission deadlines, or semester registration windows when anxiety is peak.',
            'Scammers often harvest .edu credentials to send spam or access academic journal repositories.'
        ]
    },
    {
        id: 'fake-jobs',
        name: 'Fake Job and Internship Offers',
        shortDescription: 'Fraudulent work-from-home, data entry, and placement offers charging upfront registration or laptop fees.',
        badge: 'Employment Fraud',
        iconName: 'Briefcase',
        riskLevel: 'High',
        difficulty: 'Beginner',
        howItWorks: [
            'Scammers scrape resumes from public job boards or message students directly on WhatsApp and Telegram.',
            'They offer high-paying roles (e.g. ₹40,000/month for 2 hours daily work) without any technical or in-person interview.',
            'The candidate is asked to pay a "refundable registration fee", "laptop insurance deposit", or "training portal activation".',
            'After payment, the recruiter ceases communication or demands ever-larger deposits under the guise of taxes.'
        ],
        warningSigns: [
            'No formal interview conducted; instant job offer issued via WhatsApp or Telegram.',
            'Candidate is instructed to pay money to receive work, laptops, or verification clearance.',
            'Recruiter uses free email domains (@gmail.com, @hotmail.com) rather than corporate email.',
            'Pay rate is vastly disproportionate to the required qualifications or effort.'
        ],
        realisticExample: {
            scenario: 'A final-year engineering student receives an unsolicited offer letter from a supposed multinational tech firm.',
            suspiciousArtifact: 'WhatsApp Message: "Hi, HR from Infosys Global here. You are selected for Summer Intern at ₹55k/mo. Kindly transfer ₹1,500 for company laptop courier insurance to hr.ops@upi."',
            redFlags: [
                'Hired with zero technical evaluation.',
                'Demanded money for company equipment (legitimate companies provide equipment free).',
                'Official HR communicating via personal WhatsApp and requesting UPI transfers.'
            ]
        },
        manipulationTechniques: [
            'Greed and relief regarding career placement',
            'Sunk cost fallacy (asking for small amounts first, then larger sums)',
            'Fabricated offer letters with forged stamps and signatures'
        ],
        howToStaySafe: [
            'Never pay any money to get a job or internship. Legitimate companies never charge candidates.',
            'Cross-check company registration on the Ministry of Corporate Affairs (MCA) portal.',
            'Search for the recruiter on LinkedIn and message them via official corporate email.',
            'Consult your college placement cell before accepting unverified offers.'
        ],
        whatToDoIfAffected: [
            'Stop sending further payments immediately, regardless of recruiter promises or legal threats.',
            'Save chat logs, UPI transaction reference numbers (UTR), and payment screenshots.',
            'File an immediate complaint on https://cybercrime.gov.in and call 1930.',
            'Alert fellow students and your campus placement cell about the recruiter handle.'
        ],
        studentConsiderations: [
            'Fresher anxiety and placement pressure make college students prime targets for fake stipend schemes.',
            'Watch out for "task-based rating" scams where you are asked to like YouTube videos for small payouts before being asked to deposit money.'
        ]
    },
    {
        id: 'upi-fraud',
        name: 'UPI and Payment Fraud',
        shortDescription: 'Deceptive collect requests, QR codes, and fake payment screenshots tricking users into sending funds.',
        badge: 'Financial Trap',
        iconName: 'CreditCard',
        riskLevel: 'High',
        difficulty: 'Intermediate',
        howItWorks: [
            'Scammers initiate a UPI "Collect Request" instead of sending money.',
            'They tell the victim: "To receive your cashback/refund/payment, accept the request and enter your UPI PIN."',
            'Entering the UPI PIN authorizes a withdrawal from the victim’s account to the scammer.',
            'Alternatively, scammers share fabricated payment screenshots claiming money was already sent and demand a refund.'
        ],
        warningSigns: [
            'Being asked to enter a UPI PIN to "receive" or "accept" funds.',
            'Receiving unexpected UPI Collect notifications from unknown Virtual Payment Addresses (VPAs).',
            'The caller claims they "accidentally transferred money" to you and creates extreme panic.',
            'Fake banking SMS that lacks an updated account balance or sender bank header.'
        ],
        realisticExample: {
            scenario: 'A student selling a bicycle on OLX is approached by an aggressive buyer who claims to pay via UPI.',
            suspiciousArtifact: 'GPay Notification: "Rahul Traders is requesting ₹4,000 from you. Enter UPI PIN to authorize." Buyer says: "Bro, accept the request, it will deposit ₹4,000 into your account!"',
            redFlags: [
                'The notification is a "Pay" or "Collect" request, not a deposit.',
                'Buyer claims entering PIN receives money.',
                'Buyer rushes the seller not to read the screen carefully.'
            ]
        },
        manipulationTechniques: [
            'Exploitation of confusion regarding UPI protocols',
            'Artificial hurry to prevent reading notification text',
            'Fake high-status claims (e.g. "I am an Army officer stationed at border")'
        ],
        howToStaySafe: [
            'Remember the universal rule: UPI PIN is ONLY needed to SEND money, NEVER to receive money.',
            'Verify received payments by checking your bank passbook/balance directly in your bank app, not by trusting screenshots.',
            'Decline all unknown collect requests on PhonePe, Google Pay, and Paytm.',
            'Set low daily UPI transaction limits in your banking app.'
        ],
        whatToDoIfAffected: [
            'Immediately call national cyber helpline 1930 within the "Golden Hour".',
            'Contact your bank helpline to block your UPI ID and flag the beneficiary account for freezing.',
            'Save the 12-digit UPI Transaction Reference (UTR) number and beneficiary VPA.',
            'File an official report on the National Cyber Crime Reporting Portal.'
        ],
        studentConsiderations: [
            'Peer-to-peer split payments and second-hand campus marketplaces (books, cycles, laptops) are frequent vector sites.'
        ]
    },
    {
        id: 'impersonation',
        name: 'Bank and Government Impersonation',
        shortDescription: 'Callers pretending to be SBI, RBI, Police, or tax officers demanding immediate action to avoid penalties.',
        badge: 'Authority Abuse',
        iconName: 'ShieldAlert',
        riskLevel: 'High',
        difficulty: 'Intermediate',
        howItWorks: [
            'Fraudsters use caller ID spoofing to display legitimate-looking department names or numbers.',
            'They claim your PAN is unlinked, your electricity will be disconnected, or your bank account is suspended.',
            'They instruct the victim to download a remote access tool (AnyDesk, TeamViewer) or enter credentials on a fake portal.',
            'Once access is granted, the attacker initiates fund transfers and intercepts OTPs in real time.'
        ],
        warningSigns: [
            'Demands immediate KYC completion under threat of freezing bank accounts or legal prosecution.',
            'Caller insists you download AnyDesk, RustDesk, or QuickSupport to "assist" you.',
            'Refusal to let you hang up and call back via the publicly listed branch telephone number.',
            'Caller asks for credit/debit card numbers, CVVs, or One Time Passwords.'
        ],
        realisticExample: {
            scenario: 'A user receives an automated call claiming to be the RBI verification desk regarding money laundering.',
            suspiciousArtifact: 'Caller: "This is Officer Sharma from RBI vigilance. Your Aadhaar is linked to a seized parcel. Download QuickSupport so we can verify your device and clear your name, otherwise an arrest warrant will be issued."',
            redFlags: [
                'RBI never deals directly with individual citizens or initiates phone interrogations.',
                'Demanding remote access software installation.',
                'Threat of arrest to enforce compliance.'
            ]
        },
        manipulationTechniques: [
            'Intimidation and fear of the law',
            'Shock value and rapid escalating threats',
            'Sensory overload to prevent independent consultation'
        ],
        howToStaySafe: [
            'Government agencies and banks NEVER ask you to install remote support apps on your smartphone.',
            'Never share OTPs, CVVs, or ATM PINs with anyone claiming to be a bank official.',
            'Hang up and call the bank\'s official customer care number printed on the back of your debit card.',
            'Verify that official government emails come from @gov.in or @nic.in domains.'
        ],
        whatToDoIfAffected: [
            'If a remote app was installed, immediately turn on Airplane Mode and disconnect Wi-Fi.',
            'Uninstall the remote app and perform a malware scan.',
            'Call your bank immediately to freeze all debit cards, internet banking, and UPI access.',
            'Report the caller number and details to 1930.'
        ],
        studentConsiderations: [
            'Students living away from home are particularly vulnerable to threats involving police or family notification.'
        ]
    },
    {
        id: 'suspicious-links',
        name: 'Suspicious Links and URL Tricks',
        shortDescription: 'Typosquatting, open redirects, shortened links, and lookalike domains designed to deceive.',
        badge: 'Domain Deception',
        iconName: 'Link',
        riskLevel: 'Medium',
        difficulty: 'Intermediate',
        howItWorks: [
            'Attackers register domains with subtle misspellings (e.g., amzn-deals.co instead of amazon.com).',
            'They use punycode or homoglyphs (substituting Cyrillic letters that look identical to Latin letters).',
            'Shortened URLs (bit.ly, tinyurl) are used to obscure the destination domain on social media and SMS.',
            'Subdomains are crafted to mislead users (e.g., google.com.malicious-site.com where the real domain is malicious-site.com).'
        ],
        warningSigns: [
            'The top-level domain is unusual (.xyz, .top, .online, .click) for a major brand.',
            'The URL contains excessive hyphens or awkward word arrangements (e.g., netflix-member-login-verify.net).',
            'The address bar lacks a security certificate or issues browser SSL warnings.',
            'The brand name is placed in a subdomain rather than the root domain.'
        ],
        realisticExample: {
            scenario: 'A WhatsApp forward promises free 50GB 5G student data from Jio/Airtel.',
            suspiciousArtifact: 'Forwarded message: "PM Student Free 5G Scheme: Claim your free 50GB recharge now at http://jio.free-5g-recharge.xyz/claim. Offer valid today only!"',
            redFlags: [
                'Root domain is free-5g-recharge.xyz, NOT jio.com.',
                'Uses HTTP instead of HTTPS.',
                'Viral forward offering unrealistic free perks.'
            ]
        },
        manipulationTechniques: [
            'Domain masking and visual resemblance',
            'Viral forwarding incentives ("share to 5 groups to unlock")',
            'Exploitation of mobile screens where full URLs are truncated'
        ],
        howToStaySafe: [
            'Look at the ROOT domain, which is the text immediately before the last slash and following the last dot before it.',
            'Use URL expanders (e.g., unshorten.it) to reveal destinations before clicking shortened links.',
            'Bookmark critical portals (student ERP, banking, tax) and access them only via bookmarks.',
            'Never download APK files directly from unfamiliar web links.'
        ],
        whatToDoIfAffected: [
            'If you downloaded an APK or file, do NOT run it; delete it immediately.',
            'Clear your browser cache, cookies, and saved passwords.',
            'If credentials were typed on the spoofed page, change passwords on the genuine service immediately.'
        ],
        studentConsiderations: [
            'Free software cracks, pirated textbook downloads, and scholarship links frequently use deceptive redirect loops.'
        ]
    },
    {
        id: 'fake-prizes',
        name: 'Fake Prizes and Giveaways',
        shortDescription: 'Unsolicited lotteries, scratch cards, gift cards, and spin-the-wheel games demanding processing fees.',
        badge: 'Advance Fee',
        iconName: 'Gift',
        riskLevel: 'Medium',
        difficulty: 'Beginner',
        howItWorks: [
            'Victims receive a notification claiming they won a luxury SUV, iPhone 16, or ₹25,00,000 cash prize.',
            'To claim the prize, the winner is required to pay a "customs clearance duty", "GST handling fee", or "registration charge".',
            'Once the victim pays, new fake fees are invented until the victim realizes it is a scam and stops paying.'
        ],
        warningSigns: [
            'You "won" a lottery or contest you never entered.',
            'Demands payment of a fee or tax before you can receive your prize.',
            'Messages received via WhatsApp or Telegram with photos of fake government certificates and cheques.',
            'High-pressure claims that the prize will be forfeit if not claimed within hours.'
        ],
        realisticExample: {
            scenario: 'A user receives a scratch card in the mail or via an e-commerce scratch card popup.',
            suspiciousArtifact: 'Message: "KBC Lucky Draw 2026: Your mobile number won 25 Lakhs! Contact Rana Pratap Singh on WhatsApp 9123456789. Deposit ₹12,500 government processing fee to claim."',
            redFlags: [
                'Never participated in Kaun Banega Crorepati (KBC).',
                'Legitimate lotteries deduct taxes from the payout, never ask for advance cash deposits.',
                'Conducted over unverified personal WhatsApp.'
            ]
        },
        manipulationTechniques: [
            'Euphoric excitement clouding critical judgment',
            'Advance-fee fraud psychology',
            'Use of familiar television or brand logos to build credibility'
        ],
        howToStaySafe: [
            'Recognize the universal rule: If you didn\'t buy a ticket or enter a contest, you did not win.',
            'Legitimate competitions never ask winners to pay fees to receive their prize.',
            'Block and report unsolicited lottery and prize messages.',
            'Never send photos of your PAN, Aadhaar, or bank passbook to claim prizes.'
        ],
        whatToDoIfAffected: [
            'Cut off all contact with the scammers immediately.',
            'Report the scammer\'s bank account and contact numbers to 1930.',
            'Do not believe follow-up callers claiming they are recovery agents who can get your money back for another fee.'
        ],
        studentConsiderations: [
            'Fake iPhone giveaways on Instagram and TikTok frequently harvest student shipping addresses and small "courier fees".'
        ]
    },
    {
        id: 'romance-social',
        name: 'Social Engineering and Romance Scams',
        shortDescription: 'Manipulative relationships built online to foster trust before fabricating emergencies or investment schemes.',
        badge: 'Trust Exploitation',
        iconName: 'HeartHandshake',
        riskLevel: 'High',
        difficulty: 'Advanced',
        howItWorks: [
            'Scammers create attractive fake profiles on Instagram, dating apps, or LinkedIn.',
            'They spend weeks building emotional rapport, intimacy, and daily conversation.',
            'Once deep trust is established, they introduce a fabricated crisis (customs detention, medical emergency, lost passport).',
            'Alternatively, they introduce "insider crypto trading" or "pig butchering" investment schemes to siphon life savings.'
        ],
        warningSigns: [
            'The person professes deep affection rapidly but always has excuses to avoid video calls or in-person meetings.',
            'Their photos appear overly polished, model-like, or inconsistent across platforms.',
            'They suddenly request emergency financial help via crypto, gift cards, or untraceable transfers.',
            'They steer conversations toward their lucrative investments and urge you to invest with them.'
        ],
        realisticExample: {
            scenario: 'A college student meets someone on a dating app claiming to be an international exchange student.',
            suspiciousArtifact: 'Chat Message: "Babe, I shipped a surprise gift box for you with jewelry and foreign currency. But customs at Delhi Airport is holding it and demanding ₹18,000 duty. If not cleared today, customs police will arrest both of us. Please pay it!"',
            redFlags: [
                'Classic "gift parcel stuck at customs" scam format.',
                'Weaponizing romantic intimacy and fear of criminal arrest.',
                'Customs departments never request direct UPI transfers to personal bank accounts.'
            ]
        },
        manipulationTechniques: [
            'Emotional dependency and grooming',
            'Isolation (asking you not to tell friends or family)',
            'Fabricated emergencies triggering protective instincts'
        ],
        howToStaySafe: [
            'Perform reverse image searches on profile pictures using Google Lens or TinEye.',
            'Never send money, crypto, or intimate photos to anyone you have not met in person.',
            'Be skeptical when an online acquaintance mentions cryptocurrency or guaranteed investments.',
            'Discuss unusual requests with trusted friends or mentors before taking financial action.'
        ],
        whatToDoIfAffected: [
            'Cease all communication and block the scammer across all platforms.',
            'Preserve chat logs, photos, profile links, and transaction receipts.',
            'File an official report on cybercrime.gov.in (reporting category: Financial fraud / Romance scam).',
            'Seek emotional support from counseling services or trusted family; feelings of shame are common but remember scammers are organized criminals.'
        ],
        studentConsiderations: [
            'Sextortion is an escalating variant where victims are lured into video calls, recorded without consent, and blackmailed.'
        ]
    },
    {
        id: 'qr-fraud',
        name: 'QR-Code Payment Fraud',
        shortDescription: 'Malicious QR codes placed over legitimate merchant codes or sent to sellers to trigger money debits.',
        badge: 'Scan Exploitation',
        iconName: 'QrCode',
        riskLevel: 'High',
        difficulty: 'Intermediate',
        howItWorks: [
            'Tampered physical QR codes: Scammers paste fraudulent stickers over genuine QR codes at cafes or campus canteens.',
            'Digital QR bait: Scammers send a QR code image via WhatsApp, claiming "scan this to receive your cashback or refund."',
            'Scanning the code opens a UPI payment intent pre-filled with an amount payable TO the scammer, requiring your PIN.'
        ],
        warningSigns: [
            'A sender tells you that scanning a QR code is required to receive funds into your account.',
            'Physical QR sticker at a store looks peeling, misaligned, or stuck on top of another code.',
            'The UPI payment confirmation screen displays a recipient name completely unrelated to the shop you are visiting.',
            'QR code directs to an unexpected website rather than opening your installed banking or UPI application.'
        ],
        realisticExample: {
            scenario: 'A student attempting to pay at a campus photocopier scans a sticker that was pasted over the shopkeeper\'s real standee.',
            suspiciousArtifact: 'Phone Screen: "Paying ₹150 to \'Xpress Gaming Solutions\'. Enter PIN." (The student only needed to pay ₹15 for photocopies to \'Shree Xerox\').',
            redFlags: [
                'Merchant name does not match the store name.',
                'Amount pre-filled is higher than expected.',
                'Physical standee had an overlay sticker.'
            ]
        },
        manipulationTechniques: [
            'Routine habitual scanning without verifying recipient name',
            'Distraction in crowded retail or campus environments',
            'Misunderstanding that QR codes can initiate debits'
        ],
        howToStaySafe: [
            'Always look at the verified merchant name displayed on the payment confirmation screen before entering your PIN.',
            'Check physical standees for loose or superimposed overlay stickers.',
            'Refuse any request from an online buyer or stranger asking you to scan a QR code to receive money.',
            'Never scan QR codes sent via SMS or messaging apps from unverified sources.'
        ],
        whatToDoIfAffected: [
            'Inform the merchant immediately if a physical standee in their store has been tampered with.',
            'Call your bank helpline and 1930 to report the unauthorized merchant VPA.',
            'Keep the transaction reference number from your UPI app for cyber investigation.'
        ],
        studentConsiderations: [
            'Campus festivals, food stalls, and student club ticket desks are common targets for QR sticker swapping.'
        ]
    },
    {
        id: 'otp-takeover',
        name: 'OTP and Account Takeover Scams',
        shortDescription: 'Tricking victims into revealing One Time Passwords or forwarding SMS codes to hijack WhatsApp, email, or bank accounts.',
        badge: 'Credential Bypass',
        iconName: 'Key',
        riskLevel: 'High',
        difficulty: 'Intermediate',
        howItWorks: [
            'Attacker initiates a "Forgot Password" or new device registration on the victim’s WhatsApp, Instagram, or bank account.',
            'The victim receives a genuine SMS with an OTP.',
            'The scammer contacts the victim pretending to be tech support, a delivery courier, or a friend saying: "I accidentally sent my verification code to your number, please send it back!"',
            'Once the victim shares the code, the attacker takes over the account and locks the victim out.'
        ],
        warningSigns: [
            'Anyone asking you to read out or forward an OTP sent to your phone.',
            'Receiving unsolicited OTP messages when you did not initiate any login or transaction.',
            'Calls instructing you to dial MMI codes (e.g. *21* or *401* followed by a phone number) which secretly activate call forwarding.',
            'A friend’s social account messaging you asking for a screenshot of a text message you just received.'
        ],
        realisticExample: {
            scenario: 'A student receives an SMS OTP followed by a WhatsApp call from an acquaintance’s compromised account.',
            suspiciousArtifact: 'Friend: "Hey! I am entering an online gaming tournament and need 5 friends to vote. You will get a 6-digit verification code from Instagram, just send me the digits so my vote counts!"',
            redFlags: [
                'The OTP SMS clearly states: "Use this code to reset your Instagram password. Never share this with anyone."',
                'Friend’s account has already been hijacked and is spreading the infection.',
                'Requests sharing of private authentication codes.'
            ]
        },
        manipulationTechniques: [
            'Pretending to be a trusted friend or peer in need',
            'Obscuring the purpose of the verification SMS',
            'Exploitation of SIM swap or call forwarding exploits'
        ],
        howToStaySafe: [
            'NEVER share an OTP with anyone under any circumstance — not friends, family, police, or bank managers.',
            'Read the full text of every SMS containing an OTP; it explicitly states what the code is authorizing.',
            'Set up Two-Factor Authentication (2FA) with a dedicated PIN inside WhatsApp and Instagram.',
            'Never dial unfamiliar codes like *401* or *21* on your phone dialer.'
        ],
        whatToDoIfAffected: [
            'For WhatsApp takeover: Reinstall WhatsApp, enter your phone number, and verify with SMS immediately to kick out the intruder.',
            'For banking takeover: Call bank helpline immediately to block net-banking and cards.',
            'Notify your contacts via another channel that your account was compromised and to ignore requests for money.'
        ],
        studentConsiderations: [
            'WhatsApp group admin hijackings and Instagram account takeovers are rampant across college student networks.'
        ]
    },
    {
        id: 'digital-arrest',
        name: 'Digital Arrest and Threat-Based Scams',
        shortDescription: 'Cyber criminals impersonating CBI, Police, or Customs officers keeping victims on extended video calls under fake arrest warrants.',
        badge: 'Psychological Coercion',
        iconName: 'Siren',
        riskLevel: 'High',
        difficulty: 'Advanced',
        howItWorks: [
            'Victims receive a call alleging that an illegal parcel containing drugs, passports, or contraband was intercepted in their name.',
            'The call is "transferred" to fake police officers or CBI investigators sitting in studio-dressed mock police stations.',
            'They produce fabricated arrest warrants, supreme court orders, and seal notices bearing official logos.',
            'The victim is told they are placed under "Digital Arrest" and cannot disconnect the Skype/WhatsApp video call.',
            'To clear their name, the victim is coerced into transferring all their savings to a "RBI verification account".'
        ],
        warningSigns: [
            'Claims that you are under "Digital Arrest" via a video call or messaging app.',
            'Threats that local police are on their way to your home if you disconnect the call.',
            'Officers demanding you transfer funds to a private bank account for "anti-money laundering verification".',
            'Insistence on absolute secrecy, forbidding you from talking to parents, roommates, or lawyers.'
        ],
        realisticExample: {
            scenario: 'A university student living in a PG receives an IVR call from FedEx/Customs transferred to fake Mumbai Police.',
            suspiciousArtifact: 'Video Call Officer: "A parcel sent from Mumbai to Cambodia containing 5 passports and 140g MDMA bears your Aadhaar. You are under Digital Arrest. Move to a private room, keep your camera on 24/7, and transfer your account balance to RBI Clearance Account to verify your funds are clean."',
            redFlags: [
                'There is NO legal concept of "Digital Arrest" in Indian law.',
                'Police and law enforcement never conduct court trials or demand fund transfers over video calls.',
                'Fabricated documents with misaligned government insignias.'
            ]
        },
        manipulationTechniques: [
            'Severe psychological terror and isolation',
            'Authoritarian intimidation and sleep deprivation through continuous video surveillance',
            'Exploitation of unfamiliarity with legal and police procedures'
        ],
        howToStaySafe: [
            'Understand clearly: Digital Arrest does NOT exist in Indian law. Police will never arrest you over Skype or WhatsApp.',
            'Law enforcement agencies NEVER ask citizens to transfer money to verify innocence.',
            'If you receive such a call, HANG UP immediately. Do not engage.',
            'Walk to your local police station in person or call 1930 / 112 to verify any genuine legal matters.'
        ],
        whatToDoIfAffected: [
            'Hang up the video call immediately regardless of threats.',
            'If you transferred funds, call 1930 immediately to flag the beneficiary bank accounts.',
            'Do not feel ashamed; digital arrest gangs are sophisticated international syndicates.',
            'File an official complaint on https://cybercrime.gov.in.'
        ],
        studentConsiderations: [
            'Students and young adults are frequently targeted because of their anxiety regarding criminal records impacting jobs and visa applications.'
        ]
    },
    {
        id: 'customer-support',
        name: 'Fake Customer Support Scams',
        shortDescription: 'Fraudulent helpline numbers seeded on Google Search and social media to intercept stranded users.',
        badge: 'Search Poisoning',
        iconName: 'Headphones',
        riskLevel: 'Medium',
        difficulty: 'Intermediate',
        howItWorks: [
            'Scammers post fake customer care numbers on Google Maps, review sites, and Twitter for airlines, Swiggy, Zomato, or banks.',
            'When a user has a delayed refund or failed transaction and searches Google, they call the fraudulent number.',
            'The fake agent sympathizes, promises an immediate refund, and instructs the user to install a screen-sharing tool or send a ₹1 token payment.',
            'The token payment is actually a debit transfer or captures debit card CVVs to drain accounts.'
        ],
        warningSigns: [
            'Customer support numbers listed as standard 10-digit mobile numbers (+91 9xxxxxxxxx) rather than toll-free 1800 numbers.',
            'Agent asks you to download AnyDesk or TeamViewer to process a refund for a food order or train ticket.',
            'Agent asks you to click a link or scan a QR code to receive a refund.',
            'Support agent asks for your debit card PIN, CVV, or OTP to "verify ownership".'
        ],
        realisticExample: {
            scenario: 'A student whose train ticket refund was delayed searches Google for "IRCTC customer care contact number".',
            suspiciousArtifact: 'Google Search Result: "IRCTC 24/7 Immediate Refund Helpline: 9811223344". Caller answers: "Sir, open your Google Pay. I am sending you a ₹1 refund test link. Approve it to trigger full ₹2,400 refund."',
            redFlags: [
                'IRCTC does not operate refunds via personal mobile numbers or Google Pay links.',
                'Asking to approve an outgoing transaction to receive a refund.',
                'Number found from unverified search engine snippet.'
            ]
        },
        manipulationTechniques: [
            'Capitalizing on existing frustration and urgency over lost money',
            'Polite, customer-service tone masking malicious intent',
            'Search engine poisoning (SEO manipulation)'
        ],
        howToStaySafe: [
            'Only obtain support contact information from inside the official mobile app or verified website header.',
            'Never trust customer care numbers found on random Google search snippets, forum threads, or Google Maps edits.',
            'Refunds are ALWAYS processed back automatically to the original source of payment without customer intervention.',
            'Official customer support will never ask you to install remote desktop tools.'
        ],
        whatToDoIfAffected: [
            'Immediately disconnect the call and block the phone number.',
            'If you entered card details or authorized transfers, freeze your debit/credit card in your bank app.',
            'Contact the genuine customer support team through the official app to report the fraudulent listing.'
        ],
        studentConsiderations: [
            'College students dealing with delayed food delivery refunds, e-commerce returns, or travel booking issues are prime targets.'
        ]
    },
    {
        id: 'social-identity',
        name: 'Social Media Account and Identity Fraud',
        shortDescription: 'Cloned profiles, stolen identity documents, and impersonation used to solicit money from your friend circle.',
        badge: 'Identity Theft',
        iconName: 'UserX',
        riskLevel: 'Medium',
        difficulty: 'Beginner',
        howItWorks: [
            'Scammers download public photos and bio details from your Instagram or Facebook profile.',
            'They create an identical lookalike account (e.g., adding an extra underscore or dot to your handle).',
            'They send follow requests to your friends and send urgent DMs: "Hey, my Google Pay is locked and I have a hospital emergency! Can you send ₹3,000 to this UPI? Will return tomorrow morning!"',
            'Friends assume it is you and send money before verifying.'
        ],
        warningSigns: [
            'A friend contacts you from a brand-new account claiming their previous account was deleted.',
            'Immediate, desperate requests for urgent monetary loans via UPI to a third-party account.',
            'Unusual spelling, tone of voice, or language that doesn\'t match your friend\'s typical texting style.',
            'Refusal to talk on a regular voice phone call to verify.'
        ],
        realisticExample: {
            scenario: 'A college student receives an Instagram DM from what appears to be their classmate’s profile.',
            suspiciousArtifact: 'Instagram DM from @ananya_sharma__: "Hey, my car broke down on highway and phone battery is 2%. Please send ₹2,500 to mechanic UPI mechanic.raj@upi immediately! Super urgent!"',
            redFlags: [
                'Handle has double underscores compared to friend\'s real handle @ananya_sharma_.',
                'Urgent financial request with pressure not to call.',
                'Beneficiary UPI name is unfamiliar.'
            ]
        },
        manipulationTechniques: [
            'Exploitation of friendship, loyalty, and empathy',
            'Artificial emergency leaving no time for secondary verification',
            'Cloning public social media footprints'
        ],
        howToStaySafe: [
            'Always call your friend on their known phone number before sending money based on a social media message.',
            'Keep your social media accounts private to limit photo and friend-list scraping.',
            'Be alert to subtle character changes in usernames (substituting "1" for "l" or adding underscores).',
            'Never send photos of your college ID, Aadhaar, or passport to unverified social media profiles.'
        ],
        whatToDoIfAffected: [
            'Warn all your mutual friends via your real account stories or status updates.',
            'Report the fake account to the platform (Instagram/Facebook) for impersonation.',
            'If money was transferred, call 1930 and report the fraudulent beneficiary VPA.'
        ],
        studentConsiderations: [
            'College batch groups and hostel networks are prime targets for impersonation loan requests.'
        ]
    }
];
