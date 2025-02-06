// Navbar.tsx

'use client'
import { useState } from 'react';
import Button from './button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <a href="#" className="text-2xl font-semibold">Your Logo</a>
        <div className="lg:flex space-x-6">
          <a href="#" className="hover:text-blue-400">Home</a>
          <a href="#about" className="hover:text-blue-400">About</a>
          <a href="#contact" className="hover:text-blue-400">Contact</a>
        </div>
        <button onClick={toggleMenu} className="lg:hidden text-2xl">
          {isOpen ? '×' : '☰'}
        </button>
      </div>
      {isOpen && (
        <div className="lg:hidden mt-4 space-y-4 text-center">
          <a href="#" className="block text-white hover:text-blue-400">Home</a>
          <a href="#about" className="block text-white hover:text-blue-400">About</a>
          <a href="#contact" className="block text-white hover:text-blue-400">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
