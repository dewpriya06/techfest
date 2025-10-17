import { Menu, X, Atom } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <Atom className="w-8 h-8 text-cyan-400 animate-spin-slow" />
            <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 text-transparent bg-clip-text">
              TECHFEST
            </span>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#home" className="text-gray-300 hover:text-cyan-400 transition-colors">
                Home
              </a>
              <a href="#about" className="text-gray-300 hover:text-cyan-400 transition-colors">
                About
              </a>
              <a href="#events" className="text-gray-300 hover:text-cyan-400 transition-colors">
                Events
              </a>
              <a href="#contact" className="text-gray-300 hover:text-cyan-400 transition-colors">
                Contact
              </a>
              <a
                href="#events"
                className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all"
              >
                Register
              </a>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-cyan-400 transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md border-b border-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#home"
              className="block px-3 py-2 text-gray-300 hover:text-cyan-400 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Home
            </a>
            <a
              href="#about"
              className="block px-3 py-2 text-gray-300 hover:text-cyan-400 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              About
            </a>
            <a
              href="#events"
              className="block px-3 py-2 text-gray-300 hover:text-cyan-400 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Events
            </a>
            <a
              href="#contact"
              className="block px-3 py-2 text-gray-300 hover:text-cyan-400 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
