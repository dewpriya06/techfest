import { Atom, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Atom className="w-6 h-6 text-cyan-400 animate-spin-slow" />
            <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 text-transparent bg-clip-text">
              TECHFEST 2024
            </span>
          </div>

          <div className="flex items-center space-x-1 text-gray-400">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            <span>by the TechFest Team</span>
          </div>

          <div className="text-gray-400 mt-4 md:mt-0">
            © 2024 TechFest. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
