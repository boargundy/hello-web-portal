import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-primary">Logo</a>
        
        {/* Mobile menu button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          {isOpen ? <X /> : <Menu />}
        </button>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-gray-600 hover:text-primary transition-colors">Features</a>
          <a href="#about" className="text-gray-600 hover:text-primary transition-colors">About</a>
          <a href="#contact" className="text-gray-600 hover:text-primary transition-colors">Contact</a>
          <button className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary-dark transition-colors">
            Get Started
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-white border-t md:hidden">
            <div className="flex flex-col p-4 space-y-4">
              <a href="#features" className="text-gray-600 hover:text-primary transition-colors">Features</a>
              <a href="#about" className="text-gray-600 hover:text-primary transition-colors">About</a>
              <a href="#contact" className="text-gray-600 hover:text-primary transition-colors">Contact</a>
              <button className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary-dark transition-colors">
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};