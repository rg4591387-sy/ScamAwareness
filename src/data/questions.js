export const QUIZ_QUESTIONS = [
    // ==========================================
    // CATEGORY 1: Phishing Emails (phishing)
    // ==========================================
    {
        categoryId: 'phishing',
        categoryName: 'Phishing Emails',
        questionId: 'phish-1',
        questionText: 'You receive an email from "campus-admin@univ-portal-security.net" stating your university email quota is 98% full and will be deleted in 6 hours unless you click to confirm storage. What should you do?',
        scenario: 'Email received during final exam preparation with urgent storage warning.',
        answerOptions: [
            'Click the link quickly to prevent your study materials and campus emails from being deleted.',
            'Check the full sender address domain and navigate to your official university portal directly via your browser bookmark.',
            'Reply with your student ID and password so the IT administrator can increase the quota for you.',
            'Forward the email to all your classmates to warn them of the outage.'
        ],
        correctAnswer: 1,
        explanation: 'Legitimate university IT services never delete accounts with a 6-hour ultimatum. The domain "univ-portal-security.net" is an unofficial domain.',
        optionExplanations: [
            'Risky: Clicking the link leads to a credential harvesting form.',
            'Safe & Correct: Always inspect the sender domain and navigate via trusted bookmarks.',
            'Dangerous: Never reply with login credentials.',
            'Counterproductive: Spreads panic and forwards potential phishing traps.'
        ],
        difficulty: 'Beginner',
        relatedLearningContent: 'phishing',
        audienceTags: ['students', 'everyone']
    },
    {
        categoryId: 'phishing',
        categoryName: 'Phishing Emails',
        questionId: 'phish-2',
        questionText: 'What is the most reliable way to check where an embedded link in an email will actually take you before clicking it?',
        scenario: 'An email button reads "Secure Login to Bank".',
        answerOptions: [
            'Click it on your phone because smartphones have built-in anti-virus.',
            'Hover your mouse cursor over the link or long-press on mobile to inspect the actual destination URL preview.',
            'Trust the link if the email has an official company logo.',
            'Trust it as long as the email subject line contains the word "Confidential".'
        ],
        correctAnswer: 1,
        explanation: 'Hovering or long-pressing reveals the true URL destination. Scammers frequently mask malicious links behind reassuring display text or official logos.',
        optionExplanations: [
            'Incorrect: Smartphones are equally susceptible to credential phishing.',
            'Safe & Correct: Inspecting the destination domain reveals mismatches immediately.',
            'Incorrect: Brand logos can be copied and pasted by anyone in seconds.',
            'Incorrect: "Confidential" tags are common psychological lures.'
        ],
        difficulty: 'Beginner',
        relatedLearningContent: 'phishing',
        audienceTags: ['everyone']
    },
    {
        categoryId: 'phishing',
        categoryName: 'Phishing Emails',
        questionId: 'phish-3',
        questionText: 'You receive an unexpected email with an attached file named "Outstanding_Fee_Invoice_October.pdf.exe". What does this double extension indicate?',
        scenario: 'Unexpected invoice email received from a student society.',
        answerOptions: [
            'It is a special PDF format that requires higher security clearance.',
            'It is an executable malware program disguised as a PDF document using Windows filename masking.',
            'It is a legitimate billing statement compressed for faster download.',
            'It is an encrypted document sent by the campus finance team.'
        ],
        correctAnswer: 1,
        explanation: 'Files ending in .exe are executable binary applications. Attackers add .pdf before .exe to trick users on systems where known file extensions are hidden.',
        optionExplanations: [
            'Incorrect: PDFs never use .exe extension.',
            'Safe & Correct: Double extensions are a classic malware delivery evasion trick.',
            'Dangerous: Executing this file will run malware on your computer.',
            'Incorrect: Legitimate finance departments never send .exe billing files.'
        ],
        difficulty: 'Intermediate',
        relatedLearningContent: 'phishing',
        audienceTags: ['students', 'everyone']
    },
    {
        categoryId: 'phishing',
        categoryName: 'Phishing Emails',
        questionId: 'phish-4',
        questionText: 'Which of the following email addresses is most likely to be a legitimate communication from Google Accounts?',
        scenario: 'You want to verify a password change alert.',
        answerOptions: [
            'no-reply@accounts.google.com',
            'security-alert@google-support-center.co',
            'google.accounts.verification@gmail.com',
            'service@google-verify.net'
        ],
        correctAnswer: 0,
        explanation: 'Only "accounts.google.com" is an authentic subdomain of the root domain "google.com". Domains with extra hyphens or free @gmail.com addresses are unverified.',
        optionExplanations: [
            'Safe & Correct: The root domain is google.com and the subdomain is accounts.',
            'Suspicious: google-support-center.co is a completely separate third-party domain.',
            'Suspicious: Google corporate security never uses generic consumer @gmail.com accounts.',
            'Suspicious: google-verify.net is an impersonation domain.'
        ],
        difficulty: 'Intermediate',
        relatedLearningContent: 'phishing',
        audienceTags: ['everyone']
    },
    {
        categoryId: 'phishing',
        categoryName: 'Phishing Emails',
        questionId: 'phish-5',
        questionText: 'A spear phishing email differs from standard bulk phishing because it:',
        scenario: 'Targeted attack against college campus faculty and student council.',
        answerOptions: [
            'Only targets Mac and iPhone users.',
            'Uses researched, personalized details about the target (such as department name, ongoing projects, or colleagues) to appear authentic.',
            'Always contains zero spelling errors.',
            'Cannot be blocked by standard email filters.'
        ],
        correctAnswer: 1,
        explanation: 'Spear phishing involves targeted reconnaissance where attackers customize names, roles, and context to craft highly convincing, personalized pretexts.',
        optionExplanations: [
            'Incorrect: Operating system is irrelevant to spear phishing tactics.',
            'Safe & Correct: Spear phishing leverages personal and institutional context to disarm suspicion.',
            'Incorrect: While often well-written, spear phishing can still contain errors.',
            'Incorrect: Advanced filters can still catch spear phishing, though user vigilance is paramount.'
        ],
        difficulty: 'Advanced',
        relatedLearningContent: 'phishing',
        audienceTags: ['students', 'professionals']
    },
    {
        categoryId: 'phishing',
        categoryName: 'Phishing Emails',
        questionId: 'phish-6',
        questionText: 'If you accidentally entered your student portal password into a suspected phishing webpage 3 minutes ago, what is the best immediate response?',
        scenario: 'Realization right after hitting submit on an unfamiliar web form.',
        answerOptions: [
            'Wait until the end of the week to see if any unusual activity occurs.',
            'Go directly to the genuine university website, change your password immediately, and terminate all active sessions.',
            'Send an angry email to the phishing address demanding they delete your password.',
            'Turn off your computer monitor so the hackers cannot see your screen.'
        ],
        correctAnswer: 1,
        explanation: 'Immediate credential rotation on the official portal locks out the attacker before they can access your account or configure unauthorized forwarding.',
        optionExplanations: [
            'Dangerous: Attackers usually exploit credentials within minutes or hours.',
            'Safe & Correct: Swift password reset and session invalidation neutralizes the breach.',
            'Ineffective: Scammers will ignore your request and will know the email address is active.',
            'Misguided: Turning off the monitor does not stop network access to web accounts.'
        ],
        difficulty: 'Intermediate',
        relatedLearningContent: 'phishing',
        audienceTags: ['students']
    },
    // ==========================================
    // CATEGORY 2: Fake Job and Internship Offers (fake-jobs)
    // ==========================================
    {
        categoryId: 'fake-jobs',
        categoryName: 'Fake Job and Internship Offers',
        questionId: 'job-1',
        questionText: 'A recruiter messages you on WhatsApp offering an internship paying ₹40,000/month for 1 hour of daily data entry. They ask for a ₹999 "laptop registration and processing fee". What is this?',
        scenario: 'Unsolicited WhatsApp job message to a 2nd year student.',
        answerOptions: [
            'A great opportunity because ₹999 is a small investment for a ₹40,000 stipend.',
            'A textbook employment scam. Legitimate employers never charge candidates money to apply, register, or receive equipment.',
            'A standard government placement program requirement.',
            'A test by the company to check if the candidate is financially responsible.'
        ],
        correctAnswer: 1,
        explanation: 'Legitimate employers pay employees; they NEVER charge candidates fees for applications, laptops, or onboarding. Any upfront fee request is a scam.',
        optionExplanations: [
            'Dangerous: You will lose the ₹999 and the recruiter will disappear or demand more.',
            'Safe & Correct: No real employer charges registration fees or equipment deposits.',
            'Incorrect: Government bodies do not charge onboarding fees via WhatsApp.',
            'Incorrect: Employers test skills, not your willingness to send money.'
        ],
        difficulty: 'Beginner',
        relatedLearningContent: 'fake-jobs',
        audienceTags: ['students', 'jobseekers']
    },
    {
        categoryId: 'fake-jobs',
        categoryName: 'Fake Job and Internship Offers',
        questionId: 'job-2',
        questionText: 'You are offered a part-time job "rating products on e-commerce sites" via a Telegram group. On day 1, you complete 5 tasks and receive ₹300 in your UPI. On day 2, they ask you to deposit ₹5,000 to "unlock VIP tasks" with ₹15,000 payout. What is happening?',
        scenario: 'Telegram task-based rating scam.',
        answerOptions: [
            'The company has proven they are genuine by paying ₹300, so you should deposit ₹5,000.',
            'This is the "bait and hook" phase of a task scam. The initial small payout builds false confidence before stealing larger sums.',
            'It is an authentic VIP tier used by top marketing agencies.',
            'You should borrow money from friends to invest in higher tiers.'
        ],
        correctAnswer: 1,
        explanation: 'Task scammers deliberately pay ₹100-₹500 initially to disarm skepticism. Once victims trust the system and deposit thousands, withdrawals are frozen and scammers vanish.',
        optionExplanations: [
            'Dangerous: Depositing ₹5,000 will result in complete loss of funds.',
            'Safe & Correct: Initial small payouts are calculated psychological bait.',
            'Incorrect: Legitimate marketing agencies never operate this way.',
            'Extremely Dangerous: Borrowing funds compounds financial and emotional distress.'
        ],
        difficulty: 'Intermediate',
        relatedLearningContent: 'fake-jobs',
        audienceTags: ['students', 'everyone']
    },
    {
        categoryId: 'fake-jobs',
        categoryName: 'Fake Job and Internship Offers',
        questionId: 'job-3',
        questionText: 'Before accepting an offer letter from a company you found online, how can you independently verify the organization’s legitimacy in India?',
        scenario: 'Verifying a remote internship offer letter.',
        answerOptions: [
            'Check if the offer letter has a colorful corporate stamp and signature.',
            'Check company registration on the Ministry of Corporate Affairs (MCA) portal and verify recruiters using company email domains on LinkedIn.',
            'Ask the recruiter if they are genuine.',
            'Check if the offer letter uses nice font styling.'
        ],
        correctAnswer: 1,
        explanation: 'The MCA portal provides official legal incorporation records. Forged seals and logos are trivially faked, so independent institutional verification is vital.',
        optionExplanations: [
            'Incorrect: Anyone can create digital stamps and fake letterheads using design tools.',
            'Safe & Correct: MCA verification and corporate email domains confirm authentic operations.',
            'Naive: A scammer will always claim they are 100% genuine.',
            'Irrelevant: Aesthetic fonts have nothing to do with corporate authenticity.'
        ],
        difficulty: 'Intermediate',
        relatedLearningContent: 'fake-jobs',
        audienceTags: ['students', 'jobseekers']
    },
    {
        categoryId: 'fake-jobs',
        categoryName: 'Fake Job and Internship Offers',
        questionId: 'job-4',
        questionText: 'Which of the following contact details is the strongest indicator of a fraudulent recruiter?',
        scenario: 'Recruiter reaching out on a career forum.',
        answerOptions: [
            'Email ending in @tcs.com with official corporate telephone number.',
            'Recruiter communicating exclusively via Telegram using a personal Gmail address (@gmail.com).',
            'Campus placement office email ending in @college.ac.in.',
            'Company domain matching the URL listed on their verified LinkedIn company page.'
        ],
        correctAnswer: 1,
        explanation: 'Enterprise recruiters use corporate domain emails (e.g. name@company.com). Exclusive reliance on Telegram and free webmail is a red flag.',
        optionExplanations: [
            'Authentic: Matches standard corporate enterprise domain.',
            'Safe & Correct: Free webmail + Telegram anonymity is the primary vehicle for recruitment fraud.',
            'Authentic: Standard verified academic domain.',
            'Authentic: Verified corporate consistency.'
        ],
        difficulty: 'Beginner',
        relatedLearningContent: 'fake-jobs',
        audienceTags: ['students', 'jobseekers']
    },
    {
        categoryId: 'fake-jobs',
        categoryName: 'Fake Job and Internship Offers',
        questionId: 'job-5',
        questionText: 'A remote job employer asks you to provide your Aadhaar card, PAN card, and a selfie holding your ID before conducting any interview. What risk does this pose?',
        scenario: 'Early-stage job application requesting identity documents.',
        answerOptions: [
            'Zero risk, because companies need IDs to run background checks.',
            'Risk of identity theft, where your credentials can be used to open fraudulent bank accounts or obtain instant loans in your name.',
            'Only risk is spam mail in your physical mailbox.',
            'It is legally required by labour law for every first-round candidate.'
        ],
        correctAnswer: 1,
        explanation: 'Scammers collect KYC documents and "holding ID selfies" to open mule bank accounts or register prepaid SIM cards used in cybercrime syndicates.',
        optionExplanations: [
            'Dangerous: Identity documents should only be shared after an official, verified offer is signed.',
            'Safe & Correct: Mule accounts and instant credit fraud thrive on stolen candidate KYC.',
            'Incorrect: Identity theft consequences are severe and financial.',
            'False: Labour laws do not require Aadhaar selfies prior to interviews.'
        ],
        difficulty: 'Advanced',
        relatedLearningContent: 'fake-jobs',
        audienceTags: ['students', 'everyone']
    },
    {
        categoryId: 'fake-jobs',
        categoryName: 'Fake Job and Internship Offers',
        questionId: 'job-6',
        questionText: 'You realize you have fallen for an internship fee scam and transferred ₹1,500. The scammer now claims you must pay ₹3,000 more for "tax clearance" to get your refund. What should you do?',
        scenario: 'Post-payment extortion and sunk cost trap.',
        answerOptions: [
            'Pay the ₹3,000 so you can recover your initial ₹1,500.',
            'Stop paying immediately, preserve all chat and transaction records, and file a complaint on 1930 / cybercrime.gov.in.',
            'Apologize to the recruiter and plead with them.',
            'Delete your WhatsApp so the scammer cannot reach you.'
        ],
        correctAnswer: 1,
        explanation: 'Scammers will keep demanding additional fees as long as the victim shows willingness to pay. Cut losses immediately and report to 1930.',
        optionExplanations: [
            'Dangerous: You will lose an additional ₹3,000 and receive zero refund.',
            'Safe & Correct: Stop all payments, preserve evidence, and report immediately.',
            'Ineffective: Fraud syndicates operate without empathy.',
            'Incomplete: Deleting WhatsApp destroys the evidence needed for cybercrime investigation.'
        ],
        difficulty: 'Intermediate',
        relatedLearningContent: 'fake-jobs',
        audienceTags: ['students']
    },
    // ==========================================
    // CATEGORY 3: UPI and Payment Fraud (upi-fraud)
    // ==========================================
    {
        categoryId: 'upi-fraud',
        categoryName: 'UPI and Payment Fraud',
        questionId: 'upi-1',
        questionText: 'When is entering your 4-digit or 6-digit UPI PIN required during a transaction?',
        scenario: 'Receiving or sending payments on Google Pay, PhonePe, or Paytm.',
        answerOptions: [
            'Only when you are SENDING money from your bank account.',
            'Both when sending and receiving money.',
            'Only when receiving cashback from a store.',
            'Whenever someone transfers money to you via QR code.'
        ],
        correctAnswer: 0,
        explanation: 'THE GOLDEN RULE OF UPI: You NEVER enter your UPI PIN to receive money. Entering your PIN authorizes a debit from your own bank account.',
        optionExplanations: [
            'Safe & Correct: Entering your UPI PIN is strictly for authorizing money leaving your account.',
            'Dangerous Myth: Believing this is the single largest cause of UPI fraud in India.',
            'Dangerous: Cashbacks are deposited automatically without PIN input.',
            'Dangerous: Scanning someone else\'s QR code to receive money is a fraudulent trap.'
        ],
        difficulty: 'Beginner',
        relatedLearningContent: 'upi-fraud',
        audienceTags: ['everyone', 'students']
    },
    {
        categoryId: 'upi-fraud',
        categoryName: 'UPI and Payment Fraud',
        questionId: 'upi-2',
        questionText: 'You are selling a study table online. A buyer sends a payment screenshot showing ₹3,500 transferred to you, but your bank app shows no balance increase. The buyer calls angrily demanding the table. What should you do?',
        scenario: 'Marketplace sale with fake payment screenshot.',
        answerOptions: [
            'Hand over the table because bank servers often take 24 hours to reflect UPI credits.',
            'Trust only your own bank app balance / passbook; do not hand over goods until funds reflect in your account.',
            'Send ₹3,500 back to the buyer to cancel the deal.',
            'Give them the table and ask them for a photocopy of their Aadhaar.'
        ],
        correctAnswer: 1,
        explanation: 'Fake UPI payment screenshot generator apps (like Spoof Paytm/GPay) mimic authentic transaction receipts. Never release goods without verified receipt in your own bank app.',
        optionExplanations: [
            'Dangerous: UPI transactions are instantaneous; delayed reflections without a bank SMS or app entry are fake.',
            'Safe & Correct: Independent verification in your personal banking app is the only proof.',
            'Extremely Dangerous: You would be sending real money for a non-existent transfer.',
            'Ineffective: Scammers provide fake identity cards.'
        ],
        difficulty: 'Intermediate',
        relatedLearningContent: 'upi-fraud',
        audienceTags: ['students', 'everyone']
    },
    {
        categoryId: 'upi-fraud',
        categoryName: 'UPI and Payment Fraud',
        questionId: 'upi-3',
        questionText: 'What is a UPI "Collect Request"?',
        scenario: 'Notification received from an unknown VPA on PhonePe.',
        answerOptions: [
            'A feature where your bank collects interest earned on deposits.',
            'A pull transaction where another party requests money from your account, requiring your approval and PIN.',
            'A gift voucher sent by a friend.',
            'An automated refund sent by an e-commerce platform.'
        ],
        correctAnswer: 1,
        explanation: 'A UPI Collect Request pulls money from you. Scammers initiate collect requests with notes like "Enter PIN to receive ₹2,000 refund" to deceive users.',
        optionExplanations: [
            'Incorrect: Banking interest is credited automatically.',
            'Safe & Correct: Collect requests initiate outgoing payments from your account.',
            'Incorrect: Gift vouchers do not ask for debit authorization.',
            'Incorrect: Refunds are pushed directly without collect requests.'
        ],
        difficulty: 'Beginner',
        relatedLearningContent: 'upi-fraud',
        audienceTags: ['everyone']
    },
    {
        categoryId: 'upi-fraud',
        categoryName: 'UPI and Payment Fraud',
        questionId: 'upi-4',
        questionText: 'If you fall victim to unauthorized UPI fraud in India, what is the critical "Golden Hour" timeline and primary helpline to report the crime?',
        scenario: 'Unauthorized withdrawal of ₹15,000 detected.',
        answerOptions: [
            'Within 2-3 weeks by visiting your home district court.',
            'Within the first 1 to 2 hours by calling National Cyber Helpline 1930 and contacting your bank.',
            'There is no way to report cyber financial fraud in India.',
            'Wait for your monthly paper bank statement before taking action.'
        ],
        correctAnswer: 1,
        explanation: 'Reporting within the first few hours (the Golden Hour) to 1930 enables law enforcement and the Indian Cyber Crime Coordination Centre (I4C) to freeze the money in the recipient bank or wallet before it is withdrawn at an ATM.',
        optionExplanations: [
            'Too Late: Funds will be laundered through mule networks within hours.',
            'Safe & Correct: 1930 and immediate bank alerts give the highest probability of freezing stolen funds.',
            'False: 1930 and cybercrime.gov.in are operational nationwide.',
            'Dangerous: Delaying ensures complete fund loss.'
        ],
        difficulty: 'Intermediate',
        relatedLearningContent: 'upi-fraud',
        audienceTags: ['everyone']
    },
    {
        categoryId: 'upi-fraud',
        categoryName: 'UPI and Payment Fraud',
        questionId: 'upi-5',
        questionText: 'A caller claims they mistakenly transferred ₹10,000 to your Google Pay and begs you to immediately transfer it to a different UPI ID. What should you verify first?',
        scenario: 'Overpayment / wrong transfer scam.',
        answerOptions: [
            'Immediately send ₹10,000 to their new UPI ID to be a good Samaritan.',
            'Check your actual bank statement to see if ₹10,000 genuinely arrived, and instruct them to resolve it via their bank\'s official chargeback process.',
            'Send them ₹5,000 as a partial compromise.',
            'Share your internet banking login so they can verify the transfer.'
        ],
        correctAnswer: 1,
        explanation: 'Scammers send fake SMS alerts or use stolen money to pass through your account (turning you into a money mule). Genuine accidental transfers can be reversed through the remitter\'s bank branch.',
        optionExplanations: [
            'Dangerous: If the initial credit was fake or made from stolen funds, you will lose your own money.',
            'Safe & Correct: Verify real ledger credit and insist on formal banking reversal protocols.',
            'Dangerous: You still lose your own funds.',
            'Extremely Dangerous: Compromises your entire bank account.'
        ],
        difficulty: 'Advanced',
        relatedLearningContent: 'upi-fraud',
        audienceTags: ['everyone']
    },
    {
        categoryId: 'upi-fraud',
        categoryName: 'UPI and Payment Fraud',
        questionId: 'upi-6',
        questionText: 'Which safety setting in your UPI apps provides the best protection against large accidental or fraudulent transfers?',
        scenario: 'Configuring payment security on PhonePe or Google Pay.',
        answerOptions: [
            'Setting biometric app locks and lowering daily per-transaction UPI limits in your bank app.',
            'Writing your UPI PIN on the back of your phone case for quick access.',
            'Sharing your UPI PIN with your roommates for convenience.',
            'Keeping your phone screen unlocked at all times.'
        ],
        correctAnswer: 0,
        explanation: 'Biometric app locks prevent unauthorized physical access, and conservative daily transaction caps minimize maximum loss in case of compromise.',
        optionExplanations: [
            'Safe & Correct: Defense in depth via biometrics and strict financial caps.',
            'Extremely Dangerous: Allows anyone holding your phone to drain funds.',
            'Dangerous: PIN sharing breaks security accountability.',
            'Dangerous: Leaves device vulnerable to theft and snooping.'
        ],
        difficulty: 'Beginner',
        relatedLearningContent: 'upi-fraud',
        audienceTags: ['everyone']
    },
    // ==========================================
    // CATEGORY 4: Bank and Government Impersonation (impersonation)
    // ==========================================
    {
        categoryId: 'impersonation',
        categoryName: 'Bank and Government Impersonation',
        questionId: 'imper-1',
        questionText: 'You receive an urgent SMS: "Dear Customer, your electricity connection will be disconnected tonight at 9:30 PM due to unpaid bill. Call Electricity Officer at 9876543210 immediately." What is this?',
        scenario: 'Widespread electricity bill disconnection scam.',
        answerOptions: [
            'A legitimate warning from the state power board.',
            'A common phishing and impersonation scam designed to induce panic and force you to call a scammer\'s personal mobile number.',
            'An automated message that requires paying ₹500 over WhatsApp.',
            'A signal that your meter is physically broken.'
        ],
        correctAnswer: 1,
        explanation: 'State electricity boards send notices via registered consumer IDs on bills and official government SMS headers, never personal 10-digit mobile numbers with immediate same-day disconnection threats.',
        optionExplanations: [
            'Incorrect: Power boards follow formal written disconnection notice periods.',
            'Safe & Correct: Panic-driven electricity scams target millions with personal mobile numbers.',
            'Dangerous: Paying will lead to account drainage.',
            'Irrelevant: Has nothing to do with meter mechanics.'
        ],
        difficulty: 'Beginner',
        relatedLearningContent: 'impersonation',
        audienceTags: ['everyone']
    },
    {
        categoryId: 'impersonation',
        categoryName: 'Bank and Government Impersonation',
        questionId: 'imper-2',
        questionText: 'A caller claiming to be an SBI branch manager asks you to install the "AnyDesk" or "TeamViewer" app on your mobile phone to complete urgent KYC verification. What will happen if you install it and share the code?',
        scenario: 'Remote screen-sharing application attack.',
        answerOptions: [
            'The manager will safely complete your KYC without you visiting the branch.',
            'The caller will gain complete remote visual and touch control of your smartphone, allowing them to see your bank apps, passwords, and incoming OTPs.',
            'The app will automatically block all viruses on your phone.',
            'It will speed up your 5G internet connection.'
        ],
        correctAnswer: 1,
        explanation: 'Remote access software (AnyDesk, TeamViewer, RustDesk) broadcasts your screen in real time. Scammers use it to watch you type PINs and steal OTPs.',
        optionExplanations: [
            'False: Bank staff are strictly forbidden from requesting remote screen sharing tools.',
            'Safe & Correct: Remote desktop apps grant complete device takeover to attackers.',
            'False: AnyDesk is remote desktop software, not an antivirus.',
            'Irrelevant: Remote software has no impact on mobile data speeds.'
        ],
        difficulty: 'Intermediate',
        relatedLearningContent: 'impersonation',
        audienceTags: ['everyone']
    },
    {
        categoryId: 'impersonation',
        categoryName: 'Bank and Government Impersonation',
        questionId: 'imper-3',
        questionText: 'Can a bank employee or customer support executive legitimately ask you for your ATM PIN or Net Banking password over the telephone?',
        scenario: 'Phone verification with supposed bank support.',
        answerOptions: [
            'Yes, if they need to verify your account identity during a security alert.',
            'NO, NEVER. No bank employee, police officer, or government agency will ever ask for your PIN, password, or CVV.',
            'Only if you called them on a weekend.',
            'Yes, but only the last two digits of your PIN.'
        ],
        correctAnswer: 1,
        explanation: 'Banking protocols and RBI regulations explicitly prohibit staff from requesting authentication secrets. Any request for a PIN, password, or CVV is fraudulent.',
        optionExplanations: [
            'Dangerous: Believing this leads directly to financial compromise.',
            'Safe & Correct: Absolute rule: PINs and passwords are known only to you.',
            'Incorrect: Weekends have no bearing on security policy.',
            'Incorrect: No digits of any PIN should ever be shared.'
        ],
        difficulty: 'Beginner',
        relatedLearningContent: 'impersonation',
        audienceTags: ['everyone']
    },
    {
        categoryId: 'impersonation',
        categoryName: 'Bank and Government Impersonation',
        questionId: 'imper-4',
        questionText: 'What is "Caller ID Spoofing"?',
        scenario: 'Incoming call displays the official phone number of your local police station.',
        answerOptions: [
            'A technology where callers can manipulate the caller ID system so their call displays a forged trusted phone number or agency name.',
            'A feature where your phone upgrades old phone numbers.',
            'A legal method used by telemarketers with government licenses.',
            'An error caused by bad mobile network towers.'
        ],
        correctAnswer: 0,
        explanation: 'VoIP technology allows attackers to disguise caller IDs to mimic official police station or bank numbers. Never trust caller ID alone as proof of identity.',
        optionExplanations: [
            'Safe & Correct: Caller ID spoofing falsifies the displayed phone number.',
            'Incorrect: Phone systems do not auto-upgrade contacts.',
            'Incorrect: Spoofing for fraud is a serious cyber offense.',
            'Incorrect: It is a deliberate technical manipulation, not a tower error.'
        ],
        difficulty: 'Intermediate',
        relatedLearningContent: 'impersonation',
        audienceTags: ['everyone']
    },
    {
        categoryId: 'impersonation',
        categoryName: 'Bank and Government Impersonation',
        questionId: 'imper-5',
        questionText: 'You receive an email claiming to be from the Income Tax Department stating you have an unclaimed refund of ₹14,800, directing you to click an attached link. How can you safely claim any genuine tax refunds?',
        scenario: 'Tax refund notification during assessment season.',
        answerOptions: [
            'Click the link and enter your debit card details and ATM PIN to receive the credit.',
            'Log in directly to the official government e-filing portal (incometax.gov.in) to check the verified status of your refund.',
            'Forward the email to friends so they can claim refunds too.',
            'Reply to the email with your bank account number and branch IFSC.'
        ],
        correctAnswer: 1,
        explanation: 'Legitimate tax refunds are deposited directly into pre-validated bank accounts linked on incometax.gov.in. The department never issues refunds via email link forms.',
        optionExplanations: [
            'Dangerous: Submitting debit card credentials leads to account theft.',
            'Safe & Correct: Official verification via incometax.gov.in is the only secure channel.',
            'Counterproductive: Spreads the phishing link to peers.',
            'Risky: Never send bank details over unencrypted email.'
        ],
        difficulty: 'Intermediate',
        relatedLearningContent: 'impersonation',
        audienceTags: ['everyone', 'students']
    },
    {
        categoryId: 'impersonation',
        categoryName: 'Bank and Government Impersonation',
        questionId: 'imper-6',
        questionText: 'How can you verify that an email claiming to be from the Government of India is authentic?',
        scenario: 'Official circular received in student inbox.',
        answerOptions: [
            'It must come from an email address ending in @gov.in or @nic.in.',
            'It must have the National Emblem at the top of the message.',
            'It must use the color green in the text.',
            'It must have "Urgent Official Circular" written in capital letters.'
        ],
        correctAnswer: 0,
        explanation: 'The National Informatics Centre (NIC) strictly reserves the domains @gov.in and @nic.in for verified government departments. Any official mail from Gmail or private domains is unverified.',
        optionExplanations: [
            'Safe & Correct: @gov.in and @nic.in domains are strictly controlled by the Indian government.',
            'Easily Faked: Scammers copy and paste emblems in seconds.',
            'Irrelevant: Text colors have no security meaning.',
            'Typical Scam Tactic: Capital letters are used by scammers to simulate urgency.'
        ],
        difficulty: 'Beginner',
        relatedLearningContent: 'impersonation',
        audienceTags: ['students', 'everyone']
    },
    // ==========================================
    // CATEGORY 5: Suspicious Links and URL Tricks (suspicious-links)
    // ==========================================
    {
        categoryId: 'suspicious-links',
        categoryName: 'Suspicious Links and URL Tricks',
        questionId: 'link-1',
        questionText: 'Inspect this URL: "https://www.google.com.security-verify.net/login". What is the REAL domain you are visiting?',
        scenario: 'Subdomain deception technique.',
        answerOptions: [
            'google.com, because it appears right after https://www.',
            'security-verify.net, because the true domain is the segment immediately preceding the first single slash (excluding subdomains).',
            'A secure partnership between Google and verify.net.',
            'Both domains at the same time.'
        ],
        correctAnswer: 1,
        explanation: 'In domain naming hierarchy, "google.com" is merely a deceptive subdomain created by the owners of "security-verify.net". The root domain is security-verify.net.',
        optionExplanations: [
            'Common Mistake: Attackers place famous brand names in subdomains to trick casual readers.',
            'Safe & Correct: The root domain is located directly to the left of the path slash.',
            'False: No such security partnership exists.',
            'Impossible: A web request can only resolve to one host domain.'
        ],
        difficulty: 'Intermediate',
        relatedLearningContent: 'suspicious-links',
        audienceTags: ['everyone', 'students']
    },
    {
        categoryId: 'suspicious-links',
        categoryName: 'Suspicious Links and URL Tricks',
        questionId: 'link-2',
        questionText: 'Does the padlock icon (HTTPS) in your browser’s address bar guarantee that a website is legitimate and safe from fraud?',
        scenario: 'Evaluating a web shop with a padlock icon.',
        answerOptions: [
            'Yes, the padlock means the website was verified by the government and cannot be a scam.',
            'NO. The padlock only means the connection between your browser and the website is encrypted; cybercriminals routinely get free SSL certificates for phishing sites.',
            'Yes, as long as the padlock is green.',
            'Yes, HTTPS stands for "High Trust Protected System".'
        ],
        correctAnswer: 1,
        explanation: 'HTTPS guarantees encryption in transit (preventing eavesdropping on your Wi-Fi), but it says NOTHING about who runs the website. Over 80% of phishing sites now use HTTPS.',
        optionExplanations: [
            'Dangerous Misconception: Having SSL encryption does not mean the site owner is honest.',
            'Safe & Correct: HTTPS encrypts traffic, but scammers easily obtain valid certificates.',
            'Outdated: Browsers no longer use green padlocks; all valid SSL looks identical.',
            'False: HTTPS stands for HyperText Transfer Protocol Secure.'
        ],
        difficulty: 'Intermediate',
        relatedLearningContent: 'suspicious-links',
        audienceTags: ['everyone']
    },
    {
        categoryId: 'suspicious-links',
        categoryName: 'Suspicious Links and URL Tricks',
        questionId: 'link-3',
        questionText: 'What is "Typosquatting"?',
        scenario: 'Mistyping an address in your browser.',
        answerOptions: [
            'Registering intentionally misspelled domain names (e.g., netflx.com or payp1.com) to catch users who make typing mistakes.',
            'A workout technique for programmers.',
            'When your keyboard sticks and repeats letters.',
            'A system that corrects your spelling on social media.'
        ],
        correctAnswer: 0,
        explanation: 'Typosquatting preys on human typing errors to deliver malware or cloned login interfaces to unsuspecting users.',
        optionExplanations: [
            'Safe & Correct: Typosquatters register misspelled variants of popular web properties.',
            'Humorous: Unrelated.',
            'Hardware issue: Unrelated.',
            'Feature: Autocorrect is unrelated to typosquatting.'
        ],
        difficulty: 'Beginner',
        relatedLearningContent: 'suspicious-links',
        audienceTags: ['everyone']
    },
    {
        categoryId: 'suspicious-links',
        categoryName: 'Suspicious Links and URL Tricks',
        questionId: 'link-4',
        questionText: 'Why are URL shorteners (like bit.ly, tinyurl.com, or is.gd) frequently used in phishing and scam campaigns?',
        scenario: 'Receiving a shortened link via SMS.',
        answerOptions: [
            'Because they make the internet run faster.',
            'Because they completely hide the real destination domain and path from the user until after they click.',
            'Because government agencies require shortened links for public notices.',
            'Because shortened links automatically clean viruses from downloads.'
        ],
        correctAnswer: 1,
        explanation: 'Shorteners obscure the destination URL. Users cannot tell if the link points to a university notice or an APK malware dropper.',
        optionExplanations: [
            'False: Shorteners add an extra HTTP redirect hop.',
            'Safe & Correct: Shortened links mask the destination domain.',
            'False: Official agencies are advised against using shorteners in critical public notices.',
            'False: Shorteners perform no anti-malware filtering.'
        ],
        difficulty: 'Beginner',
        relatedLearningContent: 'suspicious-links',
        audienceTags: ['everyone']
    },
    {
        categoryId: 'suspicious-links',
        categoryName: 'Suspicious Links and URL Tricks',
        questionId: 'link-5',
        questionText: 'What risk is involved when downloading and installing an ".apk" file directly from a link sent via WhatsApp rather than from the official Google Play Store?',
        scenario: 'Friend sends an APK for a "free movie streaming app".',
        answerOptions: [
            'Zero risk, Android phones automatically block all malicious apps.',
            'Extreme risk: Sideloaded APKs bypass Google Play Protect review and can contain trojans, spyware, keyloggers, and SMS forwarding malware.',
            'The only risk is that the app might look ugly.',
            'APKs downloaded from WhatsApp are safer than Play Store apps.'
        ],
        correctAnswer: 1,
        explanation: 'Direct APK installation (sideloading) is the #1 vector for banking trojans in India. Malicious APKs request accessibility and SMS permissions to intercept OTPs.',
        optionExplanations: [
            'Dangerous: Sideloaded apps frequently evade standard mobile protections.',
            'Safe & Correct: Unverified APKs are prime vectors for banking trojans and spy tools.',
            'Understatement: The risks are financial theft and complete device compromise.',
            'False: The Google Play Store performs automated and manual security screening.'
        ],
        difficulty: 'Intermediate',
        relatedLearningContent: 'suspicious-links',
        audienceTags: ['students', 'everyone']
    },
    {
        categoryId: 'suspicious-links',
        categoryName: 'Suspicious Links and URL Tricks',
        questionId: 'link-6',
        questionText: 'What is a "Homoglyph" attack in URL spoofing?',
        scenario: 'An attacker uses internationalized characters to mimic a legitimate URL.',
        answerOptions: [
            'Using letters from non-Latin alphabets (like Cyrillic "а" instead of Latin "a") that look identical on screen but resolve to an entirely different malicious server.',
            'Sending physical letters in the postal mail.',
            'Hacking someone\'s home Wi-Fi router.',
            'Changing your profile picture to a company logo.'
        ],
        correctAnswer: 0,
        explanation: 'Homoglyph (IDN homograph) attacks exploit visually identical characters across international character sets to fool the human eye.',
        optionExplanations: [
            'Safe & Correct: Cyrillic and Greek characters can appear indistinguishable from Latin letters in URLs.',
            'Unrelated: Physical mail is unrelated.',
            'Unrelated: Router hacking is a network attack.',
            'Unrelated: Profile picture imitation is social engineering.'
        ],
        difficulty: 'Advanced',
        relatedLearningContent: 'suspicious-links',
        audienceTags: ['students', 'professionals']
    },
    // ==========================================
    // CATEGORY 6: Fake Prizes and Giveaways (fake-prizes)
    // ==========================================
    {
        categoryId: 'fake-prizes',
        categoryName: 'Fake Prizes and Giveaways',
        questionId: 'prize-1',
        questionText: 'You receive a text message: "Congratulations! You have won a Tata Safari SUV in the Car Lucky Draw. To dispatch your vehicle, deposit ₹15,000 for RTO registration and GST." What should you do?',
        scenario: 'Advance fee lottery scam notification.',
        answerOptions: [
            'Pay ₹15,000 immediately because an SUV is worth ₹20,00,000.',
            'Recognize this as an Advance-Fee scam: You never entered this contest, and real lotteries deduct taxes at source (TDS) rather than demanding upfront cash transfers.',
            'Negotiate with the caller to reduce the RTO fee to ₹5,000.',
            'Share your vehicle driver\'s license to reserve the car.'
        ],
        correctAnswer: 1,
        explanation: 'In India, legitimate prize competitions deduct 30% TDS directly from the prize payout before dispatch. They NEVER demand upfront cash deposits via UPI or personal accounts.',
        optionExplanations: [
            'Dangerous: You will lose ₹15,000 and receive nothing.',
            'Safe & Correct: If you didn\'t participate, you didn\'t win. Advance fees equal fraud.',
            'Futile: Bargaining with scammers does not protect you from fraud.',
            'Risky: Sharing license exposes you to identity theft.'
        ],
        difficulty: 'Beginner',
        relatedLearningContent: 'fake-prizes',
        audienceTags: ['everyone']
    },
    {
        categoryId: 'fake-prizes',
        categoryName: 'Fake Prizes and Giveaways',
        questionId: 'prize-2',
        questionText: 'An Instagram account claiming to be an authorized Apple reseller runs a "Free iPhone 16 Giveaway". To win, you must share the post to 10 friends and pay ₹499 for courier shipping. What is the real objective of this campaign?',
        scenario: 'Social media courier fee scam.',
        answerOptions: [
            'To promote the store and help students afford modern technology.',
            'To collect ₹499 from hundreds of eager students while virally multiplying their reach using unpaid student labor.',
            'An authentic clearance sale by Apple India.',
            'A student welfare initiative sponsored by tech universities.'
        ],
        correctAnswer: 1,
        explanation: 'Scammers collect hundreds of ₹499 shipping fees without ever sending any devices, while turning participants into unwitting promoters who tag friends.',
        optionExplanations: [
            'Naive: Commercial retailers do not give away ₹80,000 phones for ₹499.',
            'Safe & Correct: Mass collection of micro-fees and viral social amplification.',
            'False: Apple conducts promotions only through official corporate channels.',
            'False: Academic initiatives do not distribute luxury smartphones.'
        ],
        difficulty: 'Beginner',
        relatedLearningContent: 'fake-prizes',
        audienceTags: ['students', 'everyone']
    },
    {
        categoryId: 'fake-prizes',
        categoryName: 'Fake Prizes and Giveaways',
        questionId: 'prize-3',
        questionText: 'A WhatsApp message with a link to "Spin the Wheel to win ₹10,000 Amazon Gift Card" asks you to grant microphone and camera permissions when opening the webpage. Why would a prize wheel need camera access?',
        scenario: 'Malicious interactive web game.',
        answerOptions: [
            'To record your reaction for marketing when you win.',
            'It doesn\'t; it is attempting to install spyware or capture your biometric/video data without your informed consent.',
            'To calibrate the physics of the spin wheel.',
            'Because modern web browsers mandate camera permissions for all online games.'
        ],
        correctAnswer: 1,
        explanation: 'Web games or prize wheels have zero technical need for device sensor permissions. Granting permission compromises your privacy and device security.',
        optionExplanations: [
            'Deceptive excuse: Legit companies seek explicit, informed video release consent.',
            'Safe & Correct: Unnecessary hardware permissions are a hallmark of spyware.',
            'Absurd: Wheel animations run entirely in client-side CSS/JavaScript.',
            'False: Browsers strictly protect sensor permissions by default.'
        ],
        difficulty: 'Intermediate',
        relatedLearningContent: 'fake-prizes',
        audienceTags: ['students', 'everyone']
    },
    {
        categoryId: 'fake-prizes',
        categoryName: 'Fake Prizes and Giveaways',
        questionId: 'prize-4',
        questionText: 'What psychological bias do prize scammers exploit most effectively when they tell victims "You are the 1st Place Winner out of 100,000 entries"?',
        scenario: 'Psychology of lottery fraud.',
        answerOptions: [
            'Euphoria and perceived exclusivity, which temporarily bypasses analytical skepticism and critical thinking.',
            'Fear of physical illness.',
            'Anger at government institutions.',
            'Boredom during weekends.'
        ],
        correctAnswer: 0,
        explanation: 'The sudden surge of joy from being "the lucky winner" triggers emotional excitement that overwhelms rational risk assessment.',
        optionExplanations: [
            'Safe & Correct: Euphoria and urgency suppress critical evaluation.',
            'Unrelated: Health fear is used in medical/digital arrest scams.',
            'Unrelated: Anti-establishment anger is not the primary lever here.',
            'Secondary: Boredom might increase browsing time, but euphoria closes the trap.'
        ],
        difficulty: 'Intermediate',
        relatedLearningContent: 'fake-prizes',
        audienceTags: ['everyone']
    },
    {
        categoryId: 'fake-prizes',
        categoryName: 'Fake Prizes and Giveaways',
        questionId: 'prize-5',
        questionText: 'A scratch card found inside an e-commerce parcel claims you won ₹2,00,000 and asks you to scan a QR code to claim it. What should you do with the scratch card?',
        scenario: 'Physical parcel enclosure fraud.',
        answerOptions: [
            'Scan the QR code immediately using your banking app.',
            'Throw it in the trash or report it to consumer forums; e-commerce platforms do not put unsolicited cash prize cards in delivery boxes.',
            'Call the phone number printed on the card and give them your bank account number.',
            'Share the scratch card photo on campus groups.'
        ],
        correctAnswer: 1,
        explanation: 'Fraudulent warehouse workers or external scammers insert fake scratch cards into delivery packages to lure victims into scanning phishing QR codes.',
        optionExplanations: [
            'Dangerous: Scanning leads to a UPI collect request or malicious web portal.',
            'Safe & Correct: Recognize parcel inserts as widespread advance-fee traps.',
            'Risky: Direct contact initiates high-pressure social engineering.',
            'Counterproductive: Misleads fellow students.'
        ],
        difficulty: 'Beginner',
        relatedLearningContent: 'fake-prizes',
        audienceTags: ['everyone', 'students']
    },
    {
        categoryId: 'fake-prizes',
        categoryName: 'Fake Prizes and Giveaways',
        questionId: 'prize-6',
        questionText: 'Under Indian law and RBI guidelines, how are genuine institutional rewards or cashbacks credited to customers?',
        scenario: 'Receiving authentic reward credits from PhonePe/Cred/Google Pay.',
        answerOptions: [
            'Directly credited into your linked bank account or app wallet without requiring you to pay any courier or processing charge.',
            'By sending a representative to your house to collect cash.',
            'By demanding you forward a 6-digit OTP code to a personal mobile number.',
            'By having you purchase Amazon gift cards and reading the codes over the phone.'
        ],
        correctAnswer: 0,
        explanation: 'Authentic cashbacks and rewards flow automatically through automated clearing channels without demanding upfront user payments or credential disclosures.',
        optionExplanations: [
            'Safe & Correct: Legitimate cashbacks require zero reverse fees or manual interventions.',
            'False: Banks do not send cash collection couriers for cashbacks.',
            'Dangerous: Sharing OTPs causes account takeover.',
            'Classic Scam: Gift card redemption requests are universally fraudulent.'
        ],
        difficulty: 'Beginner',
        relatedLearningContent: 'fake-prizes',
        audienceTags: ['everyone']
    },
    // ==========================================
    // CATEGORY 7: Social Engineering and Romance Scams (romance-social)
    // ==========================================
    {
        categoryId: 'romance-social',
        categoryName: 'Social Engineering and Romance Scams',
        questionId: 'romance-1',
        questionText: 'What is the "Pig Butchering" (Sha Zhu Pan) scam model in modern cybercrime?',
        scenario: 'Online acquaintance building trust over months.',
        answerOptions: [
            'A veterinary supply theft ring.',
            'A long-term fraud scheme where scammers build romantic intimacy or deep friendship ("fattening the pig") before luring the victim into a fraudulent crypto/investment platform ("slaughtering").',
            'A computer virus that attacks livestock farm databases.',
            'A credit card skim at local butcher shops.'
        ],
        correctAnswer: 1,
        explanation: 'Pig butchering is a methodical, multi-billion-dollar transnational scam where victims are groomed emotionally for weeks or months before being directed to manipulated trading apps.',
        optionExplanations: [
            'Literal: Unrelated to cybercrime.',
            'Safe & Correct: Long-term psychological grooming followed by fake investment traps.',
            'Literal/Fictional: Not a computer virus.',
            'Literal/Unrelated: Physical skimmers are a different threat.'
        ],
        difficulty: 'Advanced',
        relatedLearningContent: 'romance-social',
        audienceTags: ['everyone', 'students']
    },
    {
        categoryId: 'romance-social',
        categoryName: 'Social Engineering and Romance Scams',
        questionId: 'romance-2',
        questionText: 'An attractive stranger matches with you on a dating app and wants to move the conversation to WhatsApp immediately. Over the next week, they always refuse video calls due to "poor network" or "broken camera". What is this a warning sign of?',
        scenario: 'Online dating profile behavior.',
        answerOptions: [
            'They are extremely shy and just need more time.',
            'Catfishing and profile impersonation: The person is using stolen model photos and avoiding video calls to hide their real identity.',
            'They have an older smartphone that cannot support video calls.',
            'A standard practice recommended by dating coaches.'
        ],
        correctAnswer: 1,
        explanation: 'Refusal to conduct live, real-time video calls while professing intense affection is the #1 behavioral indicator of catfishing and romance fraud.',
        optionExplanations: [
            'Naive: Persistent video call refusal is an intentional evasion tactic.',
            'Safe & Correct: Real-time video verification destroys the scammer\'s fabricated persona.',
            'Unlikely: Modern smartphones universally support basic video calls.',
            'False: Safety coaches recommend video verification early on.'
        ],
        difficulty: 'Beginner',
        relatedLearningContent: 'romance-social',
        audienceTags: ['everyone', 'students']
    },
    {
        categoryId: 'romance-social',
        categoryName: 'Social Engineering and Romance Scams',
        questionId: 'romance-3',
        questionText: 'What is "Sextortion" and how should a student respond if an online acquaintance threatens to release intimate video recordings unless money is paid?',
        scenario: 'Blackmail following a video call.',
        answerOptions: [
            'Pay the demanded money immediately because the blackmailer will delete the video once paid.',
            'Never pay. Paying guarantees they will demand more money. Immediately cease contact, preserve all chat evidence, talk to a trusted adult, and report to 1930 / cybercrime.gov.in.',
            'Post the video yourself so they lose their leverage.',
            'Agree to do tasks for them in exchange for deleting the recording.'
        ],
        correctAnswer: 1,
        explanation: 'Extortionists NEVER delete recordings when paid; paying proves the victim has money and can be coerced indefinitely. Cut contact, preserve evidence, and report immediately.',
        optionExplanations: [
            'Dangerous: Paying invites endless subsequent demands for larger sums.',
            'Safe & Correct: Zero payment, immediate communication cutoff, and official cyber reporting.',
            'Harmful: Causes self-inflicted distress and exposure.',
            'Dangerous: Becoming a coerced collaborator deepens criminal entanglement.'
        ],
        difficulty: 'Advanced',
        relatedLearningContent: 'romance-social',
        audienceTags: ['students', 'everyone']
    },
    {
        categoryId: 'romance-social',
        categoryName: 'Social Engineering and Romance Scams',
        questionId: 'romance-4',
        questionText: 'Which tool can you easily use in your browser to verify if an online profile picture was stolen from an influencer or modeling portfolio?',
        scenario: 'Verifying suspicious social media profile images.',
        answerOptions: [
            'Google Lens, TinEye, or reverse image search tools.',
            'A calculator app.',
            'Microsoft PowerPoint.',
            'Speedtest.net.'
        ],
        correctAnswer: 0,
        explanation: 'Reverse image search engines scan the web for identical image matches, quickly revealing if a photo belongs to a foreign model or public figure.',
        optionExplanations: [
            'Safe & Correct: Reverse image searches expose stolen visual assets.',
            'Irrelevant: Calculators do not analyze images.',
            'Irrelevant: Presentation software does not search web databases.',
            'Irrelevant: Network speed testing tools have no image analysis capability.'
        ],
        difficulty: 'Beginner',
        relatedLearningContent: 'romance-social',
        audienceTags: ['everyone', 'students']
    },
    {
        categoryId: 'romance-social',
        categoryName: 'Social Engineering and Romance Scams',
        questionId: 'romance-5',
        questionText: 'An online acquaintance claims they shipped an expensive gift parcel to you containing jewelry, but a "Customs Officer" calls demanding ₹25,000 clearance tax to a personal bank account. What should you understand about Indian Customs?',
        scenario: 'Gift parcel customs duty trap.',
        answerOptions: [
            'Customs officers frequently use personal State Bank of India accounts for swift tax clearance.',
            'Indian Customs (CBIC) NEVER collects duty into individual personal bank accounts or via UPI to personal names. All genuine customs duty is paid through the official ICEGATE portal.',
            'You should pay the fee quickly to avoid getting the sender in trouble.',
            'Customs departments call recipients directly over WhatsApp video calls.'
        ],
        correctAnswer: 1,
        explanation: 'CBIC issued explicit public notices: Customs never contacts citizens on personal mobile numbers to demand payment into private bank accounts. All duties go through ICEGATE.',
        optionExplanations: [
            'False: Government duties are strictly prohibited from entering private accounts.',
            'Safe & Correct: CBIC collects duties strictly through official treasury channels (ICEGATE).',
            'Dangerous: The parcel does not exist; the entire scenario is fabricated.',
            'False: Customs officials never conduct video call interrogations on WhatsApp.'
        ],
        difficulty: 'Intermediate',
        relatedLearningContent: 'romance-social',
        audienceTags: ['everyone']
    },
    {
        categoryId: 'romance-social',
        categoryName: 'Social Engineering and Romance Scams',
        questionId: 'romance-6',
        questionText: 'Why do social engineering scammers insist on extreme secrecy, telling victims "Don\'t tell your parents, roommates, or friends about this special opportunity/crisis"?',
        scenario: 'Isolation tactic in social engineering.',
        answerOptions: [
            'Because they want to surprise your family later.',
            'To isolate you from external perspectives and trusted sounding boards who would immediately recognize the red flags.',
            'Because tax laws require strict non-disclosure.',
            'To prevent the server from crashing due to high traffic.'
        ],
        correctAnswer: 1,
        explanation: 'Isolation is the most powerful psychological tool in fraud. Breaking isolation by consulting a second person almost always exposes the scam.',
        optionExplanations: [
            'Naive: Scammers never intend positive surprises.',
            'Safe & Correct: Secrecy prevents third-party reality checks that would stop the scam.',
            'False: Legitimate consumer or financial transactions do not forbid talking to family.',
            'Nonsense: Has nothing to do with web traffic.'
        ],
        difficulty: 'Intermediate',
        relatedLearningContent: 'romance-social',
        audienceTags: ['students', 'everyone']
    },
    // ==========================================
    // CATEGORY 8: QR-Code Payment Fraud (qr-fraud)
    // ==========================================
    {
        categoryId: 'qr-fraud',
        categoryName: 'QR-Code Payment Fraud',
        questionId: 'qr-1',
        questionText: 'A customer at a busy campus coffee shop scans a merchant standee QR code, but the confirmation screen displays "Transferring ₹120 to Tiger Trading Co." instead of the cafe name "Campus Brews". What should they do?',
        scenario: 'Physical QR sticker tampering at retail point.',
        answerOptions: [
            'Proceed with the payment because many merchants use trading companies for accounting.',
            'Cancel the transaction immediately, alert the cafe staff that their QR standee may be tampered with, and verify the correct QR code.',
            'Type in your UPI PIN anyway and ask the cashier for a cash refund.',
            'Scan the same QR code again on a different app.'
        ],
        correctAnswer: 1,
        explanation: 'Attackers paste sticker overlays on physical standees in busy stores. Always verify the registered merchant name matches the physical venue before entering your PIN.',
        optionExplanations: [
            'Dangerous: Your payment will go straight into a scammer\'s account, and the cafe will still require payment.',
            'Safe & Correct: Stop immediately, notify the merchant, and inspect the physical standee.',
            'Illogical: The merchant never received the money, so they cannot refund cash.',
            'Ineffective: The QR payload is identical across all UPI apps.'
        ],
        difficulty: 'Beginner',
        relatedLearningContent: 'qr-fraud',
        audienceTags: ['everyone', 'students']
    },
    {
        categoryId: 'qr-fraud',
        categoryName: 'QR-Code Payment Fraud',
        questionId: 'qr-2',
        questionText: 'Can scanning a static QR code sent via WhatsApp directly deposit money into your bank account?',
        scenario: 'Selling an old textbook online.',
        answerOptions: [
            'Yes, QR codes are two-way payment tunnels.',
            'NO. Scanning a payment QR code on UPI apps ALWAYS initiates an outgoing payment request from you. It cannot push money into your account.',
            'Yes, if the QR code is generated by PhonePe.',
            'Only if you scan it with your phone inverted.'
        ],
        correctAnswer: 1,
        explanation: 'QR codes are data strings encoding a UPI deep-link intent (upi://pay?pa=...). They specify WHO gets paid, not who receives money. You cannot receive money by scanning a code.',
        optionExplanations: [
            'Dangerous Myth: Believing QR codes can deposit funds causes widespread financial loss.',
            'Safe & Correct: Scanning a QR code is strictly a payment initiation action.',
            'False: PhonePe QR codes follow the exact same NPCI UPI technical standard.',
            'Absurd: Phone orientation has no cryptographic effect.'
        ],
        difficulty: 'Beginner',
        relatedLearningContent: 'qr-fraud',
        audienceTags: ['everyone', 'students']
    },
    {
        categoryId: 'qr-fraud',
        categoryName: 'QR-Code Payment Fraud',
        questionId: 'qr-3',
        questionText: 'What information does a standard UPI QR code encode?',
        scenario: 'Understanding UPI technical mechanics.',
        answerOptions: [
            'Your bank account balance and full password.',
            'A URI containing the payee\'s Virtual Payment Address (VPA), payee name, currency, and optional pre-filled transaction note or amount.',
            'The physical GPS coordinates of the bank branch.',
            'The user\'s credit score history.'
        ],
        correctAnswer: 1,
        explanation: 'A UPI QR code simply encodes text like "upi://pay?pa=merchant@upi&pn=StoreName&cu=INR". It instructs your phone who to pay.',
        optionExplanations: [
            'False: QR codes never contain bank account balances or passwords.',
            'Safe & Correct: UPI QR codes encode payee identification parameters.',
            'False: GPS coordinates are not encoded in the UPI URI.',
            'False: Credit history is completely unrelated to merchant QR payloads.'
        ],
        difficulty: 'Intermediate',
        relatedLearningContent: 'qr-fraud',
        audienceTags: ['students', 'professionals']
    },
    {
        categoryId: 'qr-fraud',
        categoryName: 'QR-Code Payment Fraud',
        questionId: 'qr-4',
        questionText: 'What is "Quishing"?',
        scenario: 'Emerging cyber attack vector.',
        answerOptions: [
            'A phishing attack delivered via malicious QR codes embedded in emails, posters, or physical parking meters to bypass email security filters.',
            'A quick fishing trip on the weekend.',
            'When an app quits unexpectedly.',
            'A quiz about phishing.'
        ],
        correctAnswer: 0,
        explanation: 'Quishing (QR-phishing) bypasses email security filters because traditional text-based filters cannot easily read URLs hidden inside images without OCR processing.',
        optionExplanations: [
            'Safe & Correct: Quishing leverages QR image encoding to hide malicious URLs from security scanners.',
            'Humorous: Unrelated.',
            'Software bug: Crashing is unrelated.',
            'Wordplay: Unrelated.'
        ],
        difficulty: 'Intermediate',
        relatedLearningContent: 'qr-fraud',
        audienceTags: ['everyone', 'professionals']
    },
    {
        categoryId: 'qr-fraud',
        categoryName: 'QR-Code Payment Fraud',
        questionId: 'qr-5',
        questionText: 'Before scanning a QR code posted on a public parking meter or campus notice board, what physical check should you perform?',
        scenario: 'Evaluating physical public QR codes.',
        answerOptions: [
            'Check if the QR code is printed directly on the official metal/plastic sign, or if it is a paper/vinyl sticker pasted over the original surface.',
            'Smell the paper to see what kind of ink was used.',
            'Check if the weather is humid.',
            'Wipe it with a magnet to remove static.'
        ],
        correctAnswer: 0,
        explanation: 'Malicious actors paste vinyl stickers over legitimate municipal and merchant QR codes. Feeling the edges for a raised sticker prevents redirection to fraudulent payment sites.',
        optionExplanations: [
            'Safe & Correct: Physical inspection identifies overlay tampering.',
            'Nonsense: Ink smell provides no security information.',
            'Irrelevant: Weather does not affect URL legitimacy.',
            'Ineffective: Magnets do not alter optical ink barcodes.'
        ],
        difficulty: 'Beginner',
        relatedLearningContent: 'qr-fraud',
        audienceTags: ['everyone']
    },
    {
        categoryId: 'qr-fraud',
        categoryName: 'QR-Code Payment Fraud',
        questionId: 'qr-6',
        questionText: 'If you scanned a fraudulent QR code and authorized a payment of ₹5,000 to an unknown party, what is the single most important detail to copy from your UPI app for your police/bank complaint?',
        scenario: 'Post-incident evidence preservation.',
        answerOptions: [
            'Your phone’s battery percentage at the time of transfer.',
            'The 12-digit UPI Transaction Reference (UTR) number and the recipient VPA/UPI ID.',
            'The color of the app background.',
            'The time of your last phone restart.'
        ],
        correctAnswer: 1,
        explanation: 'The 12-digit UTR (Unique Transaction Reference) is the official banking system identifier used by banks and law enforcement (1930) to trace and freeze funds.',
        optionExplanations: [
            'Irrelevant: Device battery has no investigative value.',
            'Safe & Correct: The 12-digit UTR is the universal banking reference key.',
            'Irrelevant: UI colors have no bearing on transactions.',
            'Irrelevant: System uptime has no forensic utility for fund recovery.'
        ],
        difficulty: 'Intermediate',
        relatedLearningContent: 'qr-fraud',
        audienceTags: ['everyone']
    },
    // ==========================================
    // CATEGORY 9: OTP and Account Takeover Scams (otp-takeover)
    // ==========================================
    {
        categoryId: 'otp-takeover',
        categoryName: 'OTP and Account Takeover Scams',
        questionId: 'otp-1',
        questionText: 'A friend’s Instagram account sends you a DM: "Hey! I am locked out of my account and Instagram asked 3 friends to receive verification codes. Can you send me the 6 digits you just got via SMS?" What has actually happened?',
        scenario: 'Friend account takeover social engineering.',
        answerOptions: [
            'Your friend really needs help, so you should text back the code quickly.',
            'Your friend\'s account was already hacked. The attacker clicked "Forgot Password" on YOUR account, and the SMS you received is YOUR password reset code.',
            'Instagram is testing your loyalty to your friend.',
            'A glitch in the telecom SMS tower.'
        ],
        correctAnswer: 1,
        explanation: 'This is the most common Instagram takeover exploit. Attackers trigger a password reset for the victim and trick them into handing over the authorization code.',
        optionExplanations: [
            'Dangerous: Sending the code gives the hacker complete ownership of your account.',
            'Safe & Correct: The hacker is exploiting a compromised account to pivot and conquer contacts.',
            'Absurd: Platforms do not conduct loyalty games.',
            'False: The SMS originates from legitimate authentication triggers initiated by the attacker.'
        ],
        difficulty: 'Beginner',
        relatedLearningContent: 'otp-takeover',
        audienceTags: ['students', 'everyone']
    },
    {
        categoryId: 'otp-takeover',
        categoryName: 'OTP and Account Takeover Scams',
        questionId: 'otp-2',
        questionText: 'A caller claiming to be your Airtel/Jio telecom representative tells you that your 5G upgrade is pending and asks you to dial "*401*9876543210#" on your phone dialer. What does dialing this code actually do?',
        scenario: 'Unconditional call forwarding exploit.',
        answerOptions: [
            'It activates 5G carrier aggregation on your SIM card.',
            'It activates Unconditional Call Forwarding to the scammer\'s number, allowing them to intercept incoming voice OTPs from your bank and WhatsApp.',
            'It resets your phone\'s network cache.',
            'It gives you 10GB of free high-speed data.'
        ],
        correctAnswer: 1,
        explanation: '*401* is the standard telecom MMI code for unconditional call forwarding in India. Scammers use it to reroute voice-based OTPs to their own phones.',
        optionExplanations: [
            'False: 5G activation occurs automatically or via official telecom mobile apps.',
            'Safe & Correct: *401* secretly reroutes all incoming phone calls and voice OTPs to the attacker.',
            'False: Network resets are handled in system settings.',
            'False: Free data claims are psychological lures.'
        ],
        difficulty: 'Advanced',
        relatedLearningContent: 'otp-takeover',
        audienceTags: ['everyone', 'students']
    },
    {
        categoryId: 'otp-takeover',
        categoryName: 'OTP and Account Takeover Scams',
        questionId: 'otp-3',
        questionText: 'What is a "SIM Swap" attack?',
        scenario: 'Mobile phone suddenly shows "No Service" indefinitely.',
        answerOptions: [
            'When you trade SIM cards with your sibling.',
            'When an attacker uses forged identity documents to convince a telecom store to issue a replacement SIM card for your phone number, deactivating your original SIM.',
            'When your SIM card physically melts due to overheating.',
            'When you upgrade from 4G to 5G at an official company store.'
        ],
        correctAnswer: 1,
        explanation: 'In a SIM swap attack, the criminal hijacks your phone number. Your physical phone loses signal, while the attacker receives all your incoming SMS OTPs and phone calls.',
        optionExplanations: [
            'Literal: Unrelated to cybercrime.',
            'Safe & Correct: Identity theft used to fraudulently issue duplicate SIM cards to attackers.',
            'Hardware issue: Overheating does not cause identity theft.',
            'Legitimate: Authorized customer upgrades with valid ID are not attacks.'
        ],
        difficulty: 'Intermediate',
        relatedLearningContent: 'otp-takeover',
        audienceTags: ['everyone']
    },
    {
        categoryId: 'otp-takeover',
        categoryName: 'OTP and Account Takeover Scams',
        questionId: 'otp-4',
        questionText: 'Which form of Multi-Factor Authentication (MFA) is most resilient against SIM swapping and SMS interception attacks?',
        scenario: 'Hardening security for student and personal email.',
        answerOptions: [
            'SMS One Time Password.',
            'Time-based One-Time Password (TOTP) Authenticator Apps (such as Google Authenticator or Microsoft Authenticator) or hardware security keys (YubiKey).',
            'Receiving verification codes on your secondary email with the same password.',
            'Writing your password on a sticky note attached to your laptop.'
        ],
        correctAnswer: 1,
        explanation: 'Authenticator apps generate codes locally on your physical device using cryptographic keys; they do not travel across cellular networks and cannot be intercepted by SIM swaps.',
        optionExplanations: [
            'Vulnerable: SMS OTP can be intercepted via SIM swap or call forwarding exploits.',
            'Safe & Correct: Authenticator apps and hardware FIDO keys eliminate telecom interception risks.',
            'Dangerous: Password reuse across accounts undermines security.',
            'Insecure: Physical sticky notes provide zero electronic protection.'
        ],
        difficulty: 'Intermediate',
        relatedLearningContent: 'otp-takeover',
        audienceTags: ['students', 'professionals']
    },
    {
        categoryId: 'otp-takeover',
        categoryName: 'OTP and Account Takeover Scams',
        questionId: 'otp-5',
        questionText: 'If your WhatsApp account is suddenly logged out and you receive a notification that your number is in use on another phone, how can you immediately reclaim it?',
        scenario: 'WhatsApp session hijacking.',
        answerOptions: [
            'Wait 30 days for WhatsApp to auto-reset.',
            'Open WhatsApp, enter your phone number, and request an SMS verification code to log back in, which immediately terminates the hacker\'s active session.',
            'Pay the hacker whatever ransom they demand in cryptocurrency.',
            'Throw your phone in water.'
        ],
        correctAnswer: 1,
        explanation: 'WhatsApp only permits one primary phone session. Verifying your phone number via SMS immediately logs out the unauthorized device.',
        optionExplanations: [
            'Too Slow: Hackers will message your contacts asking for money in those 30 days.',
            'Safe & Correct: Immediate SMS verification re-authenticates you and revokes the intruder’s session.',
            'Dangerous: Paying extortionists does not guarantee account restoration.',
            'Destructive: Damaging hardware does not solve cloud account hijacking.'
        ],
        difficulty: 'Intermediate',
        relatedLearningContent: 'otp-takeover',
        audienceTags: ['everyone', 'students']
    },
    {
        categoryId: 'otp-takeover',
        categoryName: 'OTP and Account Takeover Scams',
        questionId: 'otp-6',
        questionText: 'Why is it critical to read the ENTIRE text of an SMS containing a security code before taking any action?',
        scenario: 'Authentication SMS received during phone call.',
        answerOptions: [
            'Because the SMS explicitly specifies what transaction or action the OTP is authorizing (e.g. "Do not share. Use this OTP to transfer ₹25,000 to John").',
            'Because telecom regulations require reading all promotional text.',
            'To practice reading speed.',
            'To check if there are any discount coupon codes at the bottom.'
        ],
        correctAnswer: 0,
        explanation: 'Banks and platforms explicitly include the transaction context in the SMS body (e.g., amount, beneficiary, or password reset). Reading it instantly destroys social engineering pretexts.',
        optionExplanations: [
            'Safe & Correct: The SMS body reveals the true nature of the transaction being authorized.',
            'False: Has nothing to do with telecom regulations.',
            'Irrelevant: Speed reading is not a security measure.',
            'False: Banking OTP messages do not contain discount promo codes.'
        ],
        difficulty: 'Beginner',
        relatedLearningContent: 'otp-takeover',
        audienceTags: ['everyone']
    },
    // ==========================================
    // CATEGORY 10: Digital Arrest and Threat-Based Scams (digital-arrest)
    // ==========================================
    {
        categoryId: 'digital-arrest',
        categoryName: 'Digital Arrest and Threat-Based Scams',
        questionId: 'arrest-1',
        questionText: 'A caller on a WhatsApp video call wearing a police uniform claims a package with illegal narcotics was seized in your name. He states: "You are under Digital Arrest. You cannot disconnect this video call or leave your room." What is the legal reality of "Digital Arrest" in India?',
        scenario: 'High-profile extortion call via video conference.',
        answerOptions: [
            'It is a new legal framework introduced under the Digital India Act for remote investigation.',
            'THERE IS NO SUCH THING AS "DIGITAL ARREST" IN INDIAN LAW. Police and investigative agencies never arrest citizens or conduct trials over Skype or WhatsApp video calls.',
            'It is an official procedure used exclusively for college students.',
            'It is permitted if approved by a senior customs superintendent.'
        ],
        correctAnswer: 1,
        explanation: 'Both the Prime Minister and the Ministry of Home Affairs (MHA) have issued explicit public warnings: There is NO concept of "Digital Arrest" under Indian law. It is 100% fraud.',
        optionExplanations: [
            'False: The Digital India Act does not create remote digital arrests.',
            'Safe & Correct: Digital arrest is a completely fabricated concept used by extortion syndicates.',
            'False: No student or citizen can be placed under video call arrest.',
            'False: Law enforcement procedures require physical summons and registered warrants.'
        ],
        difficulty: 'Beginner',
        relatedLearningContent: 'digital-arrest',
        audienceTags: ['everyone', 'students']
    },
    {
        categoryId: 'digital-arrest',
        categoryName: 'Digital Arrest and Threat-Based Scams',
        questionId: 'arrest-2',
        questionText: 'During a "Digital Arrest" call, the fake officer instructs you to transfer all the money in your savings account to a "Government Verification Account / RBI Escrow" to prove your funds are clean. How does the government actually handle genuine investigations?',
        scenario: 'Coercive fund transfer demand during interrogation.',
        answerOptions: [
            'Government agencies NEVER ask individuals to transfer money to private bank accounts or "escrow accounts" to prove their innocence.',
            'They routinely require you to transfer your funds to individual account numbers for verification.',
            'They only accept cryptocurrency transfers.',
            'They ask for 50% in cash and 50% via Google Pay.'
        ],
        correctAnswer: 0,
        explanation: 'No police department, CBI, ED, or court ever requests citizens to transfer money to "clear" their name or verify funds. Any demand to transfer money to prove innocence is fraudulent.',
        optionExplanations: [
            'Safe & Correct: Government bodies never demand fund transfers to establish innocence.',
            'Dangerous Falsehood: Believing this has cost victims their life savings.',
            'False: Indian government agencies do not accept cryptocurrency.',
            'Absurd: Standard enforcement follows formal legal asset freezing, never informal transfers.'
        ],
        difficulty: 'Intermediate',
        relatedLearningContent: 'digital-arrest',
        audienceTags: ['everyone']
    },
    {
        categoryId: 'digital-arrest',
        categoryName: 'Digital Arrest and Threat-Based Scams',
        questionId: 'arrest-3',
        questionText: 'What should you do immediately if someone calls claiming to be from the police or customs threatening you with "Digital Arrest"?',
        scenario: 'Receiving a high-pressure coercive threat call.',
        answerOptions: [
            'Stay on the video call all night to prove you have nothing to hide.',
            'HANG UP IMMEDIATELY. Do not engage. Report the call to the National Cyber Crime Helpline (1930) or visit your nearest local police station.',
            'Transfer ₹1,000 as a good faith gesture.',
            'Apologize and promise not to send parcels in the future.'
        ],
        correctAnswer: 1,
        explanation: 'Disconnecting the call cuts the scammer’s psychological control. If there were any genuine legal issue, physical officers would deliver a written summons under Section 41A CrPC/BNSS.',
        optionExplanations: [
            'Harmful: Prolonged video calls cause severe psychological trauma and exhaustion.',
            'Safe & Correct: Disconnect immediately, block the number, and alert 1930 / local police.',
            'Dangerous: Signals vulnerability and invites escalating demands.',
            'Pointless: Conceding guilt to a non-existent crime emboldens the criminals.'
        ],
        difficulty: 'Beginner',
        relatedLearningContent: 'digital-arrest',
        audienceTags: ['everyone', 'students']
    },
    {
        categoryId: 'digital-arrest',
        categoryName: 'Digital Arrest and Threat-Based Scams',
        questionId: 'arrest-4',
        questionText: 'Why do digital arrest syndicates set up elaborate fake police stations with authentic-looking logos, uniforms, and walkie-talkie sound effects in their video calls?',
        scenario: 'Sensory staging in video call fraud.',
        answerOptions: [
            'Because they are student filmmakers practicing their craft.',
            'To exploit cognitive authority bias and terrorize the victim into unthinking compliance before they can verify facts.',
            'Because Indian police stations rent their rooms to private call centers.',
            'To qualify for higher resolution video codecs.'
        ],
        correctAnswer: 1,
        explanation: 'Visual props (uniforms, badges, official logos) disarm critical thinking by triggering instant respect and fear of state authority.',
        optionExplanations: [
            'Absurd: These are organized international cybercrime syndicates.',
            'Safe & Correct: Sensory and authority cues paralyze analytical skepticism.',
            'False: Official police infrastructure is strictly protected by law.',
            'Technical nonsense: Props have zero effect on video codecs.'
        ],
        difficulty: 'Intermediate',
        relatedLearningContent: 'digital-arrest',
        audienceTags: ['everyone', 'students']
    },
    {
        categoryId: 'digital-arrest',
        categoryName: 'Digital Arrest and Threat-Based Scams',
        questionId: 'arrest-5',
        questionText: 'If a student is living alone in a hostel or PG and receives a threat call claiming their parents will be informed of an arrest unless money is paid, what is the best advice?',
        scenario: 'Targeting isolated students with family exposure threats.',
        answerOptions: [
            'Secretly take out an instant loan to pay off the caller without parents knowing.',
            'Immediately call your parents or local guardian and explain the call. Open communication neutralizes the blackmailer\'s leverage.',
            'Run away from the campus.',
            'Switch off your phone and skip semester examinations.'
        ],
        correctAnswer: 1,
        explanation: 'Blackmailers rely on the student’s fear of disappointing or alarming their family. Talking directly with parents immediately dissolves the secret threat.',
        optionExplanations: [
            'Extremely Dangerous: Instant predatory loan apps exacerbate debt and distress.',
            'Safe & Correct: Transparency with family removes the scammer\'s primary psychological weapon.',
            'Harmful: Drastic overreactions damage student health and academic future.',
            'Harmful: Disrupting academic milestones for a fake threat is unnecessary.'
        ],
        difficulty: 'Intermediate',
        relatedLearningContent: 'digital-arrest',
        audienceTags: ['students']
    },
    {
        categoryId: 'digital-arrest',
        categoryName: 'Digital Arrest and Threat-Based Scams',
        questionId: 'arrest-6',
        questionText: 'Under the Bharatiya Nagarik Suraksha Sanhita (BNSS) and Indian criminal procedure, how must police legally summon a person for questioning in non-cognizable or preliminary matters?',
        scenario: 'Legal procedure awareness.',
        answerOptions: [
            'Through a formal written summons/notice served with official station seal and dispatch numbers, never through informal WhatsApp video threats.',
            'Through a text message on Telegram.',
            'By posting an Instagram story tagging the suspect.',
            'Through a scratch card delivered to the house.'
        ],
        correctAnswer: 0,
        explanation: 'Legal procedure mandates formal written summons (such as notices under Section 35(3) BNSS / 41A CrPC) issued through verified jurisdictional police channels.',
        optionExplanations: [
            'Safe & Correct: Due process requires documented, written legal notices.',
            'False: Police do not conduct investigations via anonymous Telegram chats.',
            'Absurd: Social media stories are not valid legal summons.',
            'Ridiculous: Scratch cards are lottery scam tools, not legal summons.'
        ],
        difficulty: 'Advanced',
        relatedLearningContent: 'digital-arrest',
        audienceTags: ['everyone', 'students']
    },
    // ==========================================
    // CATEGORY 11: Fake Customer Support Scams (customer-support)
    // ==========================================
    {
        categoryId: 'customer-support',
        categoryName: 'Fake Customer Support Scams',
        questionId: 'support-1',
        questionText: 'You ordered food on a food delivery app, but an item was missing. You search Google on your phone for "Swiggy customer care number" and call the first phone number displayed in a Google search snippet (a 10-digit mobile number 98765xxxxx). What risk are you taking?',
        scenario: 'Search engine poisoning of customer care contacts.',
        answerOptions: [
            'Zero risk, Google only shows verified numbers at the top of results.',
            'High risk: Scammers create fake Google Business listings and SEO pages with personal mobile numbers to intercept users seeking customer support.',
            'The only risk is that the call might cost 50 paise per minute.',
            'Swiggy uses personal numbers for faster local resolution.'
        ],
        correctAnswer: 1,
        explanation: 'Scammers manipulate Google search snippets and Google Maps listings. Always access customer support directly through the verified in-app "Help & Support" chat.',
        optionExplanations: [
            'Dangerous Assumption: Search engines index public web pages, which scammers actively poison.',
            'Safe & Correct: Fake support numbers on search engines are a premier vector for refund scams.',
            'Understatement: The real risk is total bank account drainage, not call charges.',
            'False: Modern delivery and fintech apps use in-app chat systems, not random personal mobiles.'
        ],
        difficulty: 'Beginner',
        relatedLearningContent: 'customer-support',
        audienceTags: ['everyone', 'students']
    },
    {
        categoryId: 'customer-support',
        categoryName: 'Fake Customer Support Scams',
        questionId: 'support-2',
        questionText: 'When contacting authentic customer support for an airline, bank, or e-commerce company, how are customer refunds actually processed?',
        scenario: 'Refund mechanics in modern digital commerce.',
        answerOptions: [
            'The agent will ask you to install an app and send a ₹1 test transfer.',
            'Refunds are processed automatically back to the original payment source (credit card, UPI, bank account) without requiring you to share OTPs, PINs, or click special links.',
            'You must scan a QR code sent to your email to unlock your refund.',
            'You must provide your 16-digit debit card number and 3-digit CVV.'
        ],
        correctAnswer: 1,
        explanation: 'Automated payment gateways issue refunds directly to the originating payment instrument via banking settlement rails. No customer interaction or PIN is ever needed.',
        optionExplanations: [
            'Scam Tactic: The "₹1 test transfer" trick is used to capture payment authorizations.',
            'Safe & Correct: Refunds settle automatically back to the originating source without user PINs.',
            'Scam Tactic: QR codes initiate debits, never refunds.',
            'Dangerous: CVVs are used to execute card-not-present online purchases.'
        ],
        difficulty: 'Beginner',
        relatedLearningContent: 'customer-support',
        audienceTags: ['everyone']
    },
    {
        categoryId: 'customer-support',
        categoryName: 'Fake Customer Support Scams',
        questionId: 'support-3',
        questionText: 'You tweet a complaint about a delayed flight on Twitter/X tagging an airline. Within 2 minutes, an account named "@IndiGo_Support_247" with no verification badge replies asking for your WhatsApp number to resolve the issue. What should you check?',
        scenario: 'Social media customer support bot interception.',
        answerOptions: [
            'Check if the account has the official gold or blue verified organization badge and matches the exact corporate handle listed on the airline’s official website.',
            'Give them your WhatsApp number immediately to skip airport queues.',
            'Tweet your boarding pass and passport photo so they can look up your ticket.',
            'Send them your bank details for compensation.'
        ],
        correctAnswer: 0,
        explanation: 'Scammer bots monitor brand mentions on X/Twitter. They instantly deploy lookalike accounts to move frustrated passengers to private WhatsApp chats.',
        optionExplanations: [
            'Safe & Correct: Verify official verification badges and exact domain handles.',
            'Risky: Moves you off-platform into an unmonitored scam funnel.',
            'Dangerous: Boarding pass barcodes contain PNR data that can be hijacked.',
            'Dangerous: Exposes banking credentials to cyber criminals.'
        ],
        difficulty: 'Intermediate',
        relatedLearningContent: 'customer-support',
        audienceTags: ['everyone', 'students']
    },
    {
        categoryId: 'customer-support',
        categoryName: 'Fake Customer Support Scams',
        questionId: 'support-4',
        questionText: 'What is "Search Engine Poisoning" in the context of fake helpline fraud?',
        scenario: 'Technical understanding of helpline scams.',
        answerOptions: [
            'Pouring chemicals on server computer racks.',
            'The practice of using Black-Hat SEO techniques, keyword stuffing, and fake Google Maps business listings to rank scammer phone numbers at the top of search queries.',
            'When search engines delete old web pages.',
            'When your home Wi-Fi stops resolving search queries.'
        ],
        correctAnswer: 1,
        explanation: 'Black-hat SEO enables scammers to rank their fake customer care numbers at the top of Google search results for popular keywords like "courier tracking helpline".',
        optionExplanations: [
            'Literal: Unrelated.',
            'Safe & Correct: Manipulating search engine rankings to trick users searching for help.',
            'Routine maintenance: Deleting stale web pages is standard.',
            'DNS/Network issue: Wi-Fi resolution is unrelated to SEO poisoning.'
        ],
        difficulty: 'Intermediate',
        relatedLearningContent: 'customer-support',
        audienceTags: ['everyone', 'professionals']
    },
    {
        categoryId: 'customer-support',
        categoryName: 'Fake Customer Support Scams',
        questionId: 'support-5',
        questionText: 'A fake courier agent calls claiming your courier package cannot be delivered because the address is missing a house number. He asks you to pay a ₹5 re-delivery fee by clicking a link in an SMS. Why do scammers ask for tiny amounts like ₹5?',
        scenario: 'Courier delivery address update scam.',
        answerOptions: [
            'Because they only need small change for lunch.',
            'The ₹5 payment link is a phishing page designed to steal your debit card details, CVV, and OTP, which they immediately use to drain your entire bank balance.',
            'Because postal laws set delivery fees at exactly ₹5.',
            'It is an authentic fee required by Indian postal guidelines.'
        ],
        correctAnswer: 1,
        explanation: 'The nominal ₹5 fee lowers psychological resistance. The victim enters their card credentials thinking "it\'s only ₹5", but the fake gateway steals the credentials to charge thousands.',
        optionExplanations: [
            'Naive: Scammers aim for large-scale financial theft.',
            'Safe & Correct: The micro-transaction acts as psychological cover for credential theft.',
            'False: Courier services do not send unsolicited payment links for minor updates.',
            'False: India Post has clear guidelines warning against this exact SMS scam.'
        ],
        difficulty: 'Intermediate',
        relatedLearningContent: 'customer-support',
        audienceTags: ['everyone']
    },
    {
        categoryId: 'customer-support',
        categoryName: 'Fake Customer Support Scams',
        questionId: 'support-6',
        questionText: 'Where is the safest place to find legitimate contact numbers or support options for any service you use?',
        scenario: 'Safe navigation habits.',
        answerOptions: [
            'From inside the officially installed mobile application or from the "Contact Us" footer of their bookmarked official website.',
            'From random blog comments on Quora or Reddit.',
            'From a forwarded image on WhatsApp.',
            'From a flyer handed to you at a train station.'
        ],
        correctAnswer: 0,
        explanation: 'In-app support channels and bookmarked official domains are controlled directly by the organization and cannot be easily poisoned by external search scammers.',
        optionExplanations: [
            'Safe & Correct: In-app support and bookmarked primary domains are authentic sources.',
            'Unverified: Online forums are frequently astroturfed with fake helpline numbers.',
            'High Risk: WhatsApp forwards are unverified and often malicious.',
            'Unverified: Physical flyers frequently promote unregulated schemes.'
        ],
        difficulty: 'Beginner',
        relatedLearningContent: 'customer-support',
        audienceTags: ['everyone']
    },
    // ==========================================
    // CATEGORY 12: Social Media Account and Identity Fraud (social-identity)
    // ==========================================
    {
        categoryId: 'social-identity',
        categoryName: 'Social Media Account and Identity Fraud',
        questionId: 'social-1',
        questionText: 'You receive an Instagram follow request and a message from an account with your friend\'s exact photos and name, saying: "Hey, my old account got deleted. I am stuck at a clinic with 2% battery, please UPI ₹3,000 to this clinic QR code immediately!" How should you handle this?',
        scenario: 'Cloned account emergency loan scam.',
        answerOptions: [
            'Send the money right away because emergencies require quick action.',
            'Do not send money. Call your friend directly on their known phone number to verify their situation before taking any financial action.',
            'Send ₹1,500 just to be safe.',
            'Ask the cloned account to send a selfie of their clinic bill.'
        ],
        correctAnswer: 1,
        explanation: 'Cloned profile scams rely on simulated emergencies to exploit friendship. A simple phone call to the friend\'s real telephone number immediately exposes the clone.',
        optionExplanations: [
            'Dangerous: The money goes directly to the impersonator, not your friend.',
            'Safe & Correct: Direct phone verification over voice calls neutralizes cloned profiles.',
            'Dangerous: You still lose your funds.',
            'Ineffective: Scammers readily forge bills and medical images.'
        ],
        difficulty: 'Beginner',
        relatedLearningContent: 'social-identity',
        audienceTags: ['students', 'everyone']
    },
    {
        categoryId: 'social-identity',
        categoryName: 'Social Media Account and Identity Fraud',
        questionId: 'social-2',
        questionText: 'Why should you avoid posting photos of your college admit card, flight boarding pass, or Aadhaar card on your public social media stories?',
        scenario: 'Oversharing sensitive personal documentation.',
        answerOptions: [
            'Because it looks boastful to your followers.',
            'Because barcodes, PNRs, Aadhaar numbers, and full dates of birth can be harvested to bypass security verification, hijack travel bookings, or commit identity theft.',
            'Because social media algorithms downrank posts containing paper documents.',
            'There is no risk because photos disappear after 24 hours.'
        ],
        correctAnswer: 1,
        explanation: 'Boarding pass 2D barcodes contain full passenger name records, ticket numbers, and frequent flyer profiles. Aadhaar photos enable identity fraud across online platforms.',
        optionExplanations: [
            'Social etiquette: Not the primary cybersecurity risk.',
            'Safe & Correct: Sensitive document disclosures provide attackers with data for identity spoofing.',
            'False: Algorithm downranking is unrelated to identity theft.',
            'Dangerous Myth: Disappearing stories are easily screenshotted or archived by scrapers within seconds.'
        ],
        difficulty: 'Beginner',
        relatedLearningContent: 'social-identity',
        audienceTags: ['students', 'everyone']
    },
    {
        categoryId: 'social-identity',
        categoryName: 'Social Media Account and Identity Fraud',
        questionId: 'social-3',
        questionText: 'What privacy setting provides the best baseline protection against strangers scraping your photos and friend list to clone your account?',
        scenario: 'Hardening social media account settings.',
        answerOptions: [
            'Setting your profile to Private, restricting follower requests to people you know, and hiding your friend/following list.',
            'Changing your profile name to all lowercase letters.',
            'Posting only black and white photos.',
            'Using a very long bio with lots of emojis.'
        ],
        correctAnswer: 0,
        explanation: 'Private profiles block public bots and scrapers from harvesting your photo albums, friends lists, and biographical details needed to create convincing clone profiles.',
        optionExplanations: [
            'Safe & Correct: Private profiles restrict data access to vetted contacts.',
            'Irrelevant: Letter casing has no privacy effect.',
            'Irrelevant: Monochrome photos are equally scrapable.',
            'Irrelevant: Bio styling has zero security utility.'
        ],
        difficulty: 'Beginner',
        relatedLearningContent: 'social-identity',
        audienceTags: ['students', 'everyone']
    },
    {
        categoryId: 'social-identity',
        categoryName: 'Social Media Account and Identity Fraud',
        questionId: 'social-4',
        questionText: 'What is "Deepfake" technology, and how are scammers using it in modern identity theft?',
        scenario: 'AI synthetic media threats.',
        answerOptions: [
            'A deep underwater photography technique.',
            'AI-powered synthetic media that swaps faces or clones voices with high realism, used by criminals to imitate friends or family on voice notes and video calls.',
            'A feature in Photoshop that makes images blurry.',
            'A tool used exclusively by movie studios that cannot be run by scammers.'
        ],
        correctAnswer: 1,
        explanation: 'Generative AI voice cloning and real-time face swapping allow criminals to clone an individual\'s voice from a short 10-second audio clip to stage fake kidnapping or emergency calls.',
        optionExplanations: [
            'Literal: Unrelated.',
            'Safe & Correct: AI synthetic voice and video clones enable convincing impersonation.',
            'False: Deepfakes generate realistic synthetic media, not blur.',
            'Outdated: Open-source AI tools are accessible to low-level criminals today.'
        ],
        difficulty: 'Intermediate',
        relatedLearningContent: 'social-identity',
        audienceTags: ['everyone', 'students']
    },
    {
        categoryId: 'social-identity',
        categoryName: 'Social Media Account and Identity Fraud',
        questionId: 'social-5',
        questionText: 'If you receive a suspicious phone call from what sounds like your family member asking for emergency money, what is the best "out-of-band" verification method to defeat AI voice cloning?',
        scenario: 'Countering AI voice cloning emergency scams.',
        answerOptions: [
            'Ask them for a pre-agreed family "Safe Word" or ask a personal question that only the real family member could answer, or hang up and call them on their known private phone.',
            'Immediately transfer whatever money they request.',
            'Argue with the caller about politics.',
            'Ask the caller what the weather is outside.'
        ],
        correctAnswer: 0,
        explanation: 'A pre-established family safety word or a question about a private childhood memory (not posted on social media) immediately trips up AI voice cloning impersonators.',
        optionExplanations: [
            'Safe & Correct: Secret family passphrases and direct callback to known numbers defeat voice clones.',
            'Dangerous: Transfers funds to the cyber syndicate.',
            'Ineffective: Does not verify identity.',
            'Ineffective: Weather information is publicly available.'
        ],
        difficulty: 'Advanced',
        relatedLearningContent: 'social-identity',
        audienceTags: ['everyone', 'students']
    },
    {
        categoryId: 'social-identity',
        categoryName: 'Social Media Account and Identity Fraud',
        questionId: 'social-6',
        questionText: 'If someone has created an impostor social media profile impersonating you and messaging your friends, what action should you take first?',
        scenario: 'Responding to active profile cloning.',
        answerOptions: [
            'Post an alert on your genuine account story to notify your mutual contacts, and submit an Impersonation Report directly to the platform with your ID.',
            'Pay the impostor to take down the profile.',
            'Delete your genuine account and stop using the internet.',
            'Create five more fake profiles to confuse them.'
        ],
        correctAnswer: 0,
        explanation: 'Alerting mutual contacts stops friends from falling for emergency money requests, while formal platform impersonation reporting triggers account deletion.',
        optionExplanations: [
            'Safe & Correct: Alert your social network and utilize platform reporting mechanisms.',
            'Dangerous: Paying extortionists does not stop them from creating more clones.',
            'Defeatist: Deleting your own account surrenders identity ownership to the attacker.',
            'Counterproductive: Spreads more confusion and violates terms of service.'
        ],
        difficulty: 'Beginner',
        relatedLearningContent: 'social-identity',
        audienceTags: ['students', 'everyone']
    }
];
// Helper functions for category-specific filtering and mixed quizzes
export function getQuestionsByCategory(categoryId) {
    return QUIZ_QUESTIONS.filter((q) => q.categoryId === categoryId);
}
export function getMixedQuizQuestions(count = 10) {
    // Shuffle array and take count
    const shuffled = [...QUIZ_QUESTIONS].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}
export function getWeeklyChallengeQuestions() {
    // Curated weekly mix of 5 questions with high educational value
    const weeklyIds = ['job-1', 'upi-1', 'arrest-1', 'phish-1', 'link-1'];
    return QUIZ_QUESTIONS.filter((q) => weeklyIds.includes(q.questionId));
}
