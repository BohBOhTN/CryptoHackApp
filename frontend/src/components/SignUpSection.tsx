import React from 'react';
import { ExternalLink, UserPlus } from 'lucide-react';
import Button from './ui/Button';

const SignUpSection: React.FC = () => {
  return (
    <section className="my-12 p-6 bg-gray-800 rounded-lg shadow-lg">
      <h2 className="text-3xl font-semibold mb-6 flex items-center">
        <span className="bg-indigo-600 text-white rounded-full w-8 h-8 inline-flex items-center justify-center mr-3">1</span>
        Sign Up for CryptoHack
      </h2>
      
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1">
          <p className="text-gray-300 mb-4">
            Your journey begins by creating an account on CryptoHack.org, the premier platform for learning cryptography through fun, hands-on challenges.
          </p>
          
          <p className="text-gray-300 mb-6">
            During registration, you'll encounter your first challenge: <span className="font-semibold text-teal-300">"Solve this Roman emperor's cipher"</span> where you'll need to enter a four-word solution.
          </p>
          
          <Button href="https://cryptohack.org/register/" primary={true}>
            <UserPlus className="w-5 h-5 mr-2" />
            Register on CryptoHack
            <ExternalLink className="w-4 h-4 ml-2" />
          </Button>
        </div>
        
        <div className="bg-gray-700 p-5 rounded-lg shadow-inner max-w-md">
          <h3 className="text-xl text-center font-medium mb-3 text-teal-300">Challenge Preview</h3>
          <div className="bg-gray-800 p-4 rounded border border-gray-600 font-mono text-sm">
            <p className="text-white">Welcome to CryptoHack!</p>
            <p className="text-gray-400 mt-2">Solve this Roman emperor's cipher:</p>
            <p className="text-indigo-400 mt-1 font-bold">GRYPTA VFURK VF PBBY</p>
            <p className="text-gray-400 mt-2">Enter four-word solution:</p>
            <div className="mt-1 bg-gray-900 border border-gray-700 rounded p-2">
              <span className="text-gray-500">________________</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUpSection;