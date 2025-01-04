import { Github, Twitter, Linkedin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">Product</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-primary">Features</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary">Pricing</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary">Documentation</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-primary">About</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary">Blog</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary">Careers</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-primary">Community</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary">Contact</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary">Support</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-primary"><Github className="w-6 h-6" /></a>
              <a href="#" className="text-gray-600 hover:text-primary"><Twitter className="w-6 h-6" /></a>
              <a href="#" className="text-gray-600 hover:text-primary"><Linkedin className="w-6 h-6" /></a>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-200 text-center text-gray-600">
          <p>&copy; 2024 Your Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};