import { Link } from "wouter";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background text-foreground">
      <div className="text-center p-8 max-w-md glass-panel rounded-2xl">
        <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-2xl font-bold text-white mb-4">Page Not Found</h2>
        <p className="text-gray-400 mb-8">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <Link href="/" className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-full font-bold transition-all inline-block">
          Return Home
        </Link>
      </div>
    </div>
  );
}
