import React, { useState } from 'react';
import {
  AlertOctagon,
  PhoneCall,
  ExternalLink,
  ShieldAlert,
  Clock,
  Lock,
  ArrowRight,
  HelpCircle,
  AlertTriangle,
} from 'lucide-react';
import { EMERGENCY_STEPS } from '../data/resourcesData';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';

export const Emergency: React.FC = () => {
  const [selectedIncident, setSelectedIncident] = useState<
    'money_lost' | 'clicked_link' | 'shared_otp' | 'threat_call'
  >('money_lost');

  return (
    <div className="max-w-4xl mx-auto space-y-8 pb-16">
      {/* High-Contrast Critical Warning Banner */}
      <div className="p-6 bg-rose-950/40 border-2 border-rose-500/70 rounded-2xl shadow-2xl shadow-rose-950/40 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-rose-600 flex items-center justify-center text-white shrink-0 shadow-lg shadow-rose-950/60">
              <AlertOctagon size={28} />
            </div>
            <div>
              <span className="text-xs font-mono font-bold text-rose-300 uppercase tracking-wider block">
                Immediate Incident Response &bull; India
              </span>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
                Emergency Cyber Fraud Help
              </h1>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <a
              href="tel:1930"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-extrabold text-sm shadow-lg shadow-rose-950/50 transition active:scale-95"
            >
              <PhoneCall size={16} /> Call 1930 Helpline
            </a>
            <a
              href="https://cybercrime.gov.in"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-100 font-bold text-sm border border-slate-700 transition"
            >
              cybercrime.gov.in <ExternalLink size={14} />
            </a>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-rose-200 leading-relaxed font-medium">
          If you recently suffered an unauthorized financial withdrawal or shared a UPI PIN, act immediately. The <strong>Golden Hour (first 60-120 minutes)</strong> gives law enforcement and banks the highest probability of freezing stolen money before it is cashed out.
        </p>
      </div>

      {/* "What Happened?" Interactive Incident Selector */}
      <Card className="p-6 border-slate-800 space-y-4">
        <h3 className="text-base font-bold text-white flex items-center gap-2">
          <HelpCircle size={18} className="text-cyan-400" />
          What Happened? Select Your Situation for Targeted Guidance:
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          <button
            onClick={() => setSelectedIncident('money_lost')}
            className={`p-3 rounded-xl border text-xs font-semibold text-left transition ${
              selectedIncident === 'money_lost'
                ? 'bg-rose-950/60 border-rose-500 text-rose-200 shadow-sm'
                : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
            }`}
          >
            1. Money was Deducted / Transferred
          </button>
          <button
            onClick={() => setSelectedIncident('shared_otp')}
            className={`p-3 rounded-xl border text-xs font-semibold text-left transition ${
              selectedIncident === 'shared_otp'
                ? 'bg-amber-950/60 border-amber-500 text-amber-200 shadow-sm'
                : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
            }`}
          >
            2. Shared an OTP or PIN
          </button>
          <button
            onClick={() => setSelectedIncident('clicked_link')}
            className={`p-3 rounded-xl border text-xs font-semibold text-left transition ${
              selectedIncident === 'clicked_link'
                ? 'bg-indigo-950/60 border-indigo-400 text-indigo-200 shadow-sm'
                : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
            }`}
          >
            3. Clicked a Link / Installed APK
          </button>
          <button
            onClick={() => setSelectedIncident('threat_call')}
            className={`p-3 rounded-xl border text-xs font-semibold text-left transition ${
              selectedIncident === 'threat_call'
                ? 'bg-cyan-950/60 border-cyan-400 text-cyan-200 shadow-sm'
                : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
            }`}
          >
            4. Threatened with "Digital Arrest"
          </button>
        </div>

        {/* Targeted Guidance Card */}
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 text-xs sm:text-sm text-slate-200 leading-relaxed space-y-2">
          {selectedIncident === 'money_lost' && (
            <>
              <h4 className="font-bold text-rose-400 text-base">Priority Actions: Financial Loss</h4>
              <p>
                <strong>1. Call 1930 immediately:</strong> Report the 12-digit UPI transaction reference (UTR) and the recipient VPA/account number.
              </p>
              <p>
                <strong>2. Contact your bank immediately:</strong> Ask for the fraud desk and request an immediate lien / freeze on unauthorized outbound transactions.
              </p>
              <p>
                <strong>3. Register on cybercrime.gov.in:</strong> File a financial complaint to generate an official acknowledgment slip for bank chargeback processing.
              </p>
            </>
          )}

          {selectedIncident === 'shared_otp' && (
            <>
              <h4 className="font-bold text-amber-400 text-base">Priority Actions: Compromised OTP / PIN</h4>
              <p>
                <strong>1. Freeze card & net banking:</strong> Open your bank app immediately or call customer care to block your debit card and suspend internet banking.
              </p>
              <p>
                <strong>2. Reset WhatsApp / Social login:</strong> If you shared an account reset code, immediately log back in via SMS to revoke the intruder’s active session.
              </p>
              <p>
                <strong>3. Notify contacts:</strong> Warn friends and family via another channel not to send money if requested from your account.
              </p>
            </>
          )}

          {selectedIncident === 'clicked_link' && (
            <>
              <h4 className="font-bold text-indigo-400 text-base">Priority Actions: Link / APK Installed</h4>
              <p>
                <strong>1. Turn on Airplane Mode:</strong> Disconnect Wi-Fi and mobile data immediately to cut off remote telemetry and spyware communications.
              </p>
              <p>
                <strong>2. Uninstall downloaded APKs:</strong> Check your device Settings &rarr; Apps and uninstall recently downloaded APKs (such as AnyDesk, RustDesk, or unknown package names).
              </p>
              <p>
                <strong>3. Reset passwords from a clean device:</strong> Use another clean computer to change passwords for banking and primary email.
              </p>
            </>
          )}

          {selectedIncident === 'threat_call' && (
            <>
              <h4 className="font-bold text-cyan-400 text-base">Priority Actions: Threat & Coercion Call</h4>
              <p>
                <strong>1. Hang up immediately:</strong> Disconnect the video call. Do not continue talking. Digital arrest DOES NOT EXIST under Indian law.
              </p>
              <p>
                <strong>2. Do NOT transfer money:</strong> Police and courts never ask citizens to transfer money to "RBI verification accounts" to clear their names.
              </p>
              <p>
                <strong>3. Speak with family or visit local station:</strong> Talk to your parents or walk to your local police station if you have any lingering doubts.
              </p>
            </>
          )}
        </div>
      </Card>

      {/* Six Step Incident Containment Protocol */}
      <div className="space-y-4">
        <h3 className="text-lg font-bold text-white">Universal Incident Response Checklist</h3>
        <div className="space-y-3">
          {EMERGENCY_STEPS.map((step) => (
            <Card key={step.step} className="p-4 border-slate-800 space-y-1.5">
              <div className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-rose-950/80 border border-rose-500/40 text-rose-300 font-mono font-bold text-xs flex items-center justify-center shrink-0">
                  {step.step}
                </span>
                <h4 className="text-sm font-bold text-white">{step.title}</h4>
              </div>
              <p className="text-xs text-slate-200 font-medium pl-9 leading-relaxed">
                {step.action}
              </p>
              <p className="text-xs text-slate-400 pl-9 leading-relaxed">{step.detail}</p>
            </Card>
          ))}
        </div>
      </div>

      {/* Legal & Educational Limitation Notice */}
      <div className="p-4 bg-slate-900/60 border border-slate-800 rounded-xl text-xs text-slate-400 leading-relaxed space-y-1">
        <p>
          <strong className="text-slate-300">Disclaimer:</strong> ScamShield AI is an educational cyber awareness application. It does not possess authority to block bank accounts, investigate crimes, or submit police reports on your behalf. Always use official government channels (1930 / cybercrime.gov.in) and your financial institution for official actions.
        </p>
      </div>
    </div>
  );
};
