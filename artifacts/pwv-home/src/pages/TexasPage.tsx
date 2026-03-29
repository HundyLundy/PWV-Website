import { Link } from "wouter";

export default function TexasPage() {
  return (
    <div className="min-h-screen bg-[#0a1628] text-white flex flex-col items-center justify-center px-6 py-24">
      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
        Texas Commercial Water Savings
      </h1>
      <p className="text-lg text-slate-300 max-w-2xl text-center mb-8">
        Texas commercial properties are among the highest water consumers in the country.
        The Smart Valve™ delivers a guaranteed 15% minimum reduction — or it's removed at our expense.
        No risk. No upfront cost. Just verified savings.
      </p>
      <Link href="/#contact">
        <a className="px-8 py-3 bg-cyan-500 hover:bg-cyan-400 text-white font-bold rounded-lg transition-colors">
          Request a Free Texas Assessment
        </a>
      </Link>
    </div>
  );
}
