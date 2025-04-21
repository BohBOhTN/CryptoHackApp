import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 border-t border-gray-800">
      <div className="text-center text-gray-400">
        <p>© {new Date().getFullYear()} Caesar Cipher Guide. Created by Baha Hamdi.</p>
        <p className="text-sm mt-2">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;