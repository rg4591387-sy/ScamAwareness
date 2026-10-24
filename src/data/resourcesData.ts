export interface CyberResource {
  id: string;
  category: string;
  title: string;
  description: string;
  url: string;
  sourceType: 'Official Government' | 'Bank / Regulator' | 'Verified Guide' | 'Security Community';
  organization: string;
  isExternalVerified: boolean;
}

export const CYBER_RESOURCES: CyberResource[] = [
  {
    id: 'res-cybercrime-gov',
    category: 'Official Reporting Portals',
    title: 'National Cyber Crime Reporting Portal',
    description: 'Official Indian citizen portal for reporting all categories of cybercrime, including financial fraud, social media abuse, and identity theft.',
    url: 'https://cybercrime.gov.in/',
    sourceType: 'Official Government',
    organization: 'Ministry of Home Affairs (MHA), Government of India',
    isExternalVerified: true
  },
  {
    id: 'res-helpline-1930',
    category: 'Emergency Financial Fraud',
    title: 'Citizen Financial Cyber Fraud Helpline (1930)',
    description: 'National helpline operated by I4C (Indian Cyber Crime Coordination Centre) to immediately freeze funds lost in fraudulent banking/UPI transactions during the Golden Hour.',
    url: 'https://cybercrime.gov.in/',
    sourceType: 'Official Government',
    organization: 'I4C / Ministry of Home Affairs',
    isExternalVerified: true
  },
  {
    id: 'res-rbi-kehta-hai',
    category: 'Banking & UPI Safety',
    title: 'RBI Kehta Hai — Public Financial Awareness',
    description: 'Official consumer education portal by the Reserve Bank of India with clear advisories on UPI safety, OTP confidentiality, and digital lending guidelines.',
    url: 'https://rbikehtahai.rbi.org.in/',
    sourceType: 'Bank / Regulator',
    organization: 'Reserve Bank of India (RBI)',
    isExternalVerified: true
  },
  {
    id: 'res-cert-in',
    category: 'Threat Advisories & Alerts',
    title: 'CERT-In (Indian Computer Emergency Response Team)',
    description: 'National nodal agency for responding to computer security incidents. Publishes vulnerability notes, malware advisories, and cybersecurity guidelines.',
    url: 'https://www.cert-in.org.in/',
    sourceType: 'Official Government',
    organization: 'Ministry of Electronics & Information Technology (MeitY)',
    isExternalVerified: true
  },
  {
    id: 'res-mca-portal',
    category: 'Recruiter & Company Verification',
    title: 'Ministry of Corporate Affairs Company Registry',
    description: 'Verify the legal incorporation status, Corporate Identification Number (CIN), registered office address, and directors of any Indian company before accepting a job offer.',
    url: 'https://www.mca.gov.in/content/mca/global/en/home.html',
    sourceType: 'Official Government',
    organization: 'Ministry of Corporate Affairs (MCA)',
    isExternalVerified: true
  },
  {
    id: 'res-nsp-portal',
    category: 'Scholarship Verification',
    title: 'National Scholarship Portal (NSP)',
    description: 'Single unified platform for all Indian central and state government scholarships. Helps students verify authentic grants and avoid advance-fee scholarship fraud.',
    url: 'https://scholarships.gov.in/',
    sourceType: 'Official Government',
    organization: 'Government of India',
    isExternalVerified: true
  },
  {
    id: 'res-chakshu-trai',
    category: 'Spam & Malicious SMS',
    title: 'Sanchar Saathi & Chakshu Citizen Portal',
    description: 'Report suspected fraudulent SMS communications, fake WhatsApp calls, or disconnected mobile numbers directly to Department of Telecommunications.',
    url: 'https://sancharsaathi.gov.in/sfc/',
    sourceType: 'Official Government',
    organization: 'Department of Telecommunications (DoT)',
    isExternalVerified: true
  },
  {
    id: 'res-fido-passkeys',
    category: 'Authentication & Passwords',
    title: 'FIDO Alliance — Guide to Passkeys',
    description: 'Educational guide on modern cryptographic passkeys that replace passwords and provide inherent resistance against phishing.',
    url: 'https://fidoalliance.org/passkeys/',
    sourceType: 'Security Community',
    organization: 'FIDO Alliance',
    isExternalVerified: true
  }
];

export const EMERGENCY_STEPS = [
  {
    step: 1,
    title: 'Stop All Interactions Immediately',
    action: 'Disconnect calls, do not reply to messages, and do not make additional "clearance" or "cancellation" payments.',
    detail: 'Scammers frequently keep victims on the hook with escalating promises of refunds. Severing communication cuts their psychological control.'
  },
  {
    step: 2,
    title: 'Call 1930 & Alert Your Bank Within the "Golden Hour"',
    action: 'Immediately call National Cyber Helpline 1930 and your bank’s 24/7 emergency fraud helpline.',
    detail: 'The first 1 to 2 hours are critical. Law enforcement and the I4C coordination system can trigger an automated freeze on recipient bank accounts and wallets before the cash is withdrawn at an ATM.'
  },
  {
    step: 3,
    title: 'Freeze Compromised Cards & Net Banking',
    action: 'Use your mobile banking app or SMS block codes to freeze your debit/credit card and lock internet banking access.',
    detail: 'If you entered card details, CVVs, or internet banking passwords on an unverified form, assume they are fully compromised and request an immediate card reissue.'
  },
  {
    step: 4,
    title: 'Preserve Complete Digital Evidence',
    action: 'Take screenshots of conversations, save payment receipts with 12-digit UTR numbers, note sender phone numbers, and save email headers.',
    detail: 'Do not delete chat logs or clear call history. High-quality evidence is essential for police investigation and banking ombudsman chargeback reviews.'
  },
  {
    step: 5,
    title: 'File an Official Complaint on cybercrime.gov.in',
    action: 'Register an official incident report on the National Cyber Crime Reporting Portal to obtain a formal complaint tracking number.',
    detail: 'You will receive an official acknowledgment and case number. Keep a PDF copy of this complaint for your bank\'s fraud dispute unit.'
  },
  {
    step: 6,
    title: 'Reset Credentials & Revoke Active Sessions',
    action: 'Change your master passwords on email, banking, and social accounts, and click "Log Out of All Devices".',
    detail: 'Ensure your recovery phone number and backup email were not altered by an intruder in your account profile settings.'
  }
];
