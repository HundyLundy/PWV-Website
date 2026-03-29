import { Link } from "wouter";

export default function ColoradoPage() {
  return (
    <div className="min-h-screen bg-[#0a1628] text-white flex flex-col items-center justify-center px-6 py-24">
      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
        Colorado Commercial Water Savings
      </h1>
      <p className="text-lg text-slate-300 max-w-2xl text-center mb-8">
        Perfect Water Valve is the exclusive Denver-area partner for AWS Smart Valve™ installations.
        Colorado commercial properties — hotels, multi-family, office buildings, car washes —
        are saving 15–58% on water bills, guaranteed in writing.
      </p>
      <Link href="/#contact">
        <a className="px-8 py-3 bg-cyan-500 hover:bg-cyan-400 text-white font-bold rounded-lg transition-colors">
          Request a Free Colorado Assessment
        </a>
      </Link>
    </div>
  );
}
