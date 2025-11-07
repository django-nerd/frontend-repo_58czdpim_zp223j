import { Rocket, User } from "lucide-react";

function Navbar() {
  return (
    <header className="w-full sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/50 border-b border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-full bg-gradient-to-tr from-purple-600 via-blue-500 to-amber-400 grid place-items-center text-white">
            <Rocket size={18} />
          </div>
          <span className="font-semibold text-gray-900 text-lg">LearnWave</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-700">
          <a href="#features" className="hover:text-gray-900 transition-colors">Features</a>
          <a href="#community" className="hover:text-gray-900 transition-colors">Community</a>
          <a href="#mentors" className="hover:text-gray-900 transition-colors">Mentors</a>
          <a href="#contact" className="hover:text-gray-900 transition-colors">Contact</a>
        </nav>
        <div className="flex items-center gap-3">
          <button className="hidden sm:inline-flex px-3 py-2 text-sm font-medium rounded-lg border border-gray-200 hover:border-gray-300 text-gray-700">Sign in</button>
          <button className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white shadow hover:shadow-md">
            <User size={16} /> Get Started
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
