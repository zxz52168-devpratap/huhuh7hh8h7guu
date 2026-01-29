import React from 'react';
import { PORTFOLIO_OWNER } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-darker border-t border-gray-800 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        <p className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} {PORTFOLIO_OWNER}. All rights reserved.
        </p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Privacy Policy</a>
          <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;