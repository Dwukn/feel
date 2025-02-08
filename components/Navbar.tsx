// components/Navbar.tsx
import React from 'react';
import { ChevronDown } from 'lucide-react';

interface NavbarProps {
  scrollToSection: (ref: React.RefObject<HTMLDivElement | null>) => void;
  aboutRef: React.RefObject<HTMLDivElement | null>;
  contactRef: React.RefObject<HTMLDivElement | null>;
}

const Navbar: React.FC<NavbarProps> = ({ scrollToSection, aboutRef, contactRef }) => {
  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold text-purple-600">GoodMind</span>
          </div>
          <div className="hidden md:block">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-purple-600 transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection(aboutRef)}
                className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-purple-600 transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection(contactRef)}
                className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-purple-600 transition-colors"
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
