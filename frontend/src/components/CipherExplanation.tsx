import React from 'react';
import { BookOpen, History } from 'lucide-react';
import Button from './ui/Button';

const CipherExplanation: React.FC = () => {
  return (
    <section className="my-12">
      <h2 className="text-3xl font-semibold mb-6 flex items-center">
        <span className="bg-indigo-600 text-white rounded-full w-8 h-8 inline-flex items-center justify-center mr-3">2</span>
        Understanding the Caesar Cipher
      </h2>
      
      <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
        <div className="p-6">
          <h3 className="text-2xl font-medium mb-4 flex items-center">
            <History className="w-6 h-6 mr-2 text-teal-400" />
            Historical Background
          </h3>
          
          <p className="text-gray-300 mb-4">
            The Caesar cipher is one of the earliest and simplest encryption techniques, named after Julius Caesar who used it to protect his military communications.
          </p>
          
          <p className="text-gray-300 mb-6">
            Caesar would shift each letter in his messages by a fixed number of positions in the alphabet, making it unreadable to anyone who didn't know the shift value.
          </p>
          
          <h3 className="text-2xl font-medium my-6 flex items-center">
            <BookOpen className="w-6 h-6 mr-2 text-teal-400" />
            How It Works
          </h3>
          
          <div className="flex flex-col md:flex-row gap-6 mb-6">
            <div className="flex-1 bg-gray-700 p-4 rounded-lg">
              <h4 className="font-semibold text-xl mb-2 text-indigo-300">The Shift</h4>
              <p className="text-gray-300">
                Each letter is replaced by another letter a fixed number of positions away in the alphabet. For example, with a shift of 3:
              </p>
              <ul className="mt-3 space-y-1 text-gray-300">
                <li><span className="font-mono">A → D</span> (shift 3 places right)</li>
                <li><span className="font-mono">B → E</span> (shift 3 places right)</li>
                <li><span className="font-mono">Z → C</span> (wraps around to beginning)</li>
              </ul>
            </div>
            
            <div className="flex-1 bg-gray-700 p-4 rounded-lg">
              <h4 className="font-semibold text-xl mb-2 text-indigo-300">Example Encryption</h4>
              <p className="text-gray-300">With a shift of 13 (ROT13):</p>
              <div className="mt-3 space-y-2">
                <div className="bg-gray-800 p-2 rounded font-mono">
                  <span className="text-white">Plain: </span>
                  <span className="text-teal-400">HELLO WORLD</span>
                </div>
                <div className="bg-gray-800 p-2 rounded font-mono">
                  <span className="text-white">Cipher: </span>
                  <span className="text-indigo-400">URYYB JBEYQ</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center mt-6">
            <Button href="https://en.wikipedia.org/wiki/Caesar_cipher">
              <BookOpen className="w-5 h-5 mr-2" />
              Learn more on Wikipedia
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CipherExplanation;