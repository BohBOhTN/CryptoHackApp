import React from 'react';
import { KeySquare } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="py-10 text-center">
      <div className="flex justify-center mb-4">
        <KeySquare className="w-16 h-16 text-indigo-400" />
      </div>
      <h1 className="text-4xl font-extrabold mb-4 text-white">
        Caesar Cipher Challenge Guide
      </h1>
      <p className="text-xl text-gray-300 max-w-2xl mx-auto">
        Learn how to crack the Roman Emperor's secret code and complete your first
        CryptoHack challenge
      </p>
      <div className="mt-8 w-24 h-1 bg-gradient-to-r from-indigo-500 to-teal-400 mx-auto rounded-full" />
    </header>
  );
};

export default Header;