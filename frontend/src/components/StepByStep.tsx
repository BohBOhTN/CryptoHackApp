import React, { useState } from 'react';
import { Code, CheckCircle } from 'lucide-react';

const StepByStep: React.FC = () => {
  const [activeShift, setActiveShift] = useState<number | null>(null);
  
  const cipherText = "FRWJ YPCGP ULNVPE NPYEFCJ";
  
  // Generate all 26 shifts starting from ROT1
  const allShifts = Array.from({ length: 26 }, (_, i) => {
    const shift = i + 1; // Start from 1 to 26
    const shiftText = (text: string, amount: number) => {
      return text
        .split('')
        .map(char => {
          if (!/[A-Z]/.test(char)) return char;
          const code = char.charCodeAt(0);
          const shifted = ((code - 65 - amount + 26) % 26) + 65;
          return String.fromCharCode(shifted);
        })
        .join('');
    };
    
    return {
      shift,
      text: shiftText(cipherText, shift),
    };
  });
  
  const solution = allShifts[10]; // ROT11 is the solution (index 11 since we start from 1)

  return (
    <section className="my-12">
      <h2 className="text-3xl font-semibold mb-6 flex items-center">
        <span className="bg-indigo-600 text-white rounded-full w-8 h-8 inline-flex items-center justify-center mr-3">3</span>
        Step-by-Step Solution Approach
      </h2>
      
      <div className="bg-gray-800 rounded-lg shadow-lg p-6">
        <div className="mb-8">
          <h3 className="text-2xl font-medium mb-4 flex items-center">
            <Code className="w-6 h-6 mr-2 text-teal-400" />
            Breaking the Cipher
          </h3>
          
          <ol className="space-y-6">
            <li className="bg-gray-700 p-4 rounded-lg">
              <h4 className="text-xl font-medium mb-2 text-indigo-300">1. Recognize the pattern</h4>
              <p className="text-gray-300">
                When you see "Roman emperor's cipher" in the challenge, it's a clear hint to the Caesar cipher.
                The ciphertext looks like English but with letters shifted.
              </p>
            </li>
            
            <li className="bg-gray-700 p-4 rounded-lg">
              <h4 className="text-xl font-medium mb-2 text-indigo-300">2. Brute force all shifts</h4>
              <p className="text-gray-300 mb-4">
                Since there are 26 letters in the English alphabet, we'll try each shift from ROT1 to ROT26 and look for readable text.
              </p>
              
              <div className="overflow-x-auto">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm font-mono">
                  {allShifts.slice(0, 26).map((item) => (
                    <button
                      key={item.shift}
                      className={`p-2 rounded transition-colors ${
                        activeShift === item.shift 
                          ? 'bg-indigo-600 text-white' 
                          : item.shift === 11 
                            ? 'bg-gray-600 hover:bg-indigo-600 hover:text-white' 
                            : 'bg-gray-800 hover:bg-gray-600'
                      }`}
                      onClick={() => setActiveShift(item.shift)}
                    >
                      ROT{item.shift}: {item.text.slice(0, 12)}...
                    </button>
                  ))}
                </div>
              </div>
              
              {activeShift !== null && (
                <div className="mt-4 p-3 bg-gray-800 rounded border border-gray-600">
                  <div className="flex items-center mb-2">
                    <span className="text-gray-400 mr-2">ROT{activeShift}:</span>
                    <span className={activeShift === 13 ? "text-green-400 font-semibold" : "text-white"}>
                      {allShifts[activeShift - 1].text}
                    </span>
                    {activeShift === 13 && (
                      <CheckCircle className="w-5 h-5 text-green-400 ml-2" />
                    )}
                  </div>
                  {activeShift === 13 && (
                    <p className="text-green-400 text-sm italic">
                      This looks like English! We found our solution.
                    </p>
                  )}
                </div>
              )}
            </li>
            
            <li className="bg-gray-700 p-4 rounded-lg">
              <h4 className="text-xl font-medium mb-2 text-indigo-300">3. Submit the solution</h4>
              <p className="text-gray-300">
                After decrypting with ROT11, you'll find the plaintext: "UGLY NERVE JACKET CENTURY". 
                This is your four-word answer to submit on the CryptoHack registration page.
              </p>
              <div className="mt-3 bg-green-900/30 border border-green-700 rounded p-3">
                <p className="text-green-400 font-medium flex items-center">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  Solution: UGLY NERVE JACKET CENTURY
                </p>
              </div>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
};

export default StepByStep;