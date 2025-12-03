import Link from "next/link";
import { Ghost, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full text-white px-4">
      <div className="flex flex-col items-center text-center">
        
        <div className="relative mb-6 group">
            <Ghost className="w-24 h-24 text-blue-400" />
        </div>

        <h1 className="text-6xl font-bold text-blue-400 mb-2">
          404
        </h1>
        <h2 className="text-xl font-mono tracking-widest text-gray-300 mb-6 uppercase">
          Page Not Found
        </h2>
        
        <p className="text-gray-500 max-w-md mb-8">
          The game or page you are looking for has been moved, deleted, or never existed.
        </p>

        <div className="flex justify-center gap-4 w-full">
          <Link
            href="/"
            className="flex items-center justify-center gap-2 px-6 py-3 bg-white/5 border border-white/10 text-gray-300 rounded-lg hover:bg-white/10 hover:text-white transition-all duration-300"
          >
            Return Home
          </Link>
        </div>
      </div>
    </div>
  );
}