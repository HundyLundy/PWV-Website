import { useState } from "react";
import { CheckCircle } from "lucide-react";

const GHL_WEBHOOK_URL = "https://services.leadconnectorhq.com/hooks/ZF2Qjd4J1GmT9w5XbinN/webhook-trigger/FpCGhOJrf32qB7JtGKCM";

interface ContactFormProps {
  source?: string;
}

export default function ContactForm({ source = "website" }: ContactFormProps) {
  const [form, setForm] = useState({ name: "", company: "", phone: "", email: "", bill: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await fetch(GHL_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, monthly_water_bill: form.bill, source }),
      });
    } catch (err) {
      console.error("GHL webhook error:", err);
    }
    setSubmitted(true);
    setForm({ name: "", company: "", phone: "", email: "", bill: "", message: "" });
  };

  const inputCls = "w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-900 outline-none focus:ring-2 focus:ring-[#0374A7] transition-all placeholder:text-gray-400 bg-white";
  const labelCls = "block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1.5";

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center gap-4">
        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
          <CheckCircle className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="text-xl font-bold text-[#0A1F3A]">We'll be in touch soon</h3>
        <p className="text-gray-500 text-sm max-w-sm">Thanks for reaching out. A member of our team will contact you within one business day to discuss your water savings opportunity.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className={labelCls}>Name *</label>
          <input required className={inputCls} placeholder="Your name" value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })} />
        </div>
        <div>
          <label className={labelCls}>Company</label>
          <input className={inputCls} placeholder="Company name" value={form.company}
            onChange={(e) => setForm({ ...form, company: e.target.value })} />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className={labelCls}>Phone *</label>
          <input required type="tel" className={inputCls} placeholder="(555) 555-5555" value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })} />
        </div>
        <div>
          <label className={labelCls}>Email</label>
          <input type="email" className={inputCls} placeholder="you@company.com" value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })} />
        </div>
      </div>
      <div>
        <label className={labelCls}>Monthly Water Bill (approx.)</label>
        <input className={inputCls} placeholder="e.g. $5,000/mo" value={form.bill}
          onChange={(e) => setForm({ ...form, bill: e.target.value })} />
      </div>
      <div>
        <label className={labelCls}>Message</label>
        <textarea rows={3} className={inputCls} placeholder="Tell us about your facility or question..." value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })} />
      </div>
      <button type="submit"
        className="w-full py-3 rounded-xl text-white font-semibold text-sm transition-all hover:-translate-y-0.5 hover:shadow-lg"
        style={{ background: '#0374A7', boxShadow: '0 4px 16px rgba(3,116,167,0.3)' }}>
        Request Assessment — Guaranteed ≥15% Savings
      </button>
    </form>
  );
}
