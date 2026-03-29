import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-slate-50 font-sans">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-slate-200 mb-4">404</h1>
        <h2 className="text-2xl font-bold text-slate-900 mb-6">Page Not Found</h2>
        <p className="text-slate-500 mb-8">The page you are looking for doesn't exist or has been moved.</p>
        <Link href="/" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-white font-medium hover:bg-primary/90 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Return Home
        </Link>
      </div>
    </div>
  );
}
