import React from 'react';
import { Github, Star } from 'lucide-react';
import Button from './ui/Button';

const Community: React.FC = () => {
  return (
    <section className="my-12">
      <h2 className="text-3xl font-semibold mb-6 flex items-center">
        <span className="bg-indigo-600 text-white rounded-full w-8 h-8 inline-flex items-center justify-center mr-3">5</span>
        Contribute to the Project
      </h2>
      
      <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg shadow-lg p-6 border border-gray-700">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <h3 className="text-2xl font-medium mb-4 flex items-center">
              <Github className="w-6 h-6 mr-2 text-teal-400" />
              Open Source Project
            </h3>
            
            <p className="text-gray-300 mb-4">
              This Caesar Cipher Guide is open source! We welcome contributions from the community to make it even better.
            </p>
            
            <p className="text-gray-300 mb-6">
              Whether it's improving the UI, adding new features, or fixing bugs, your contributions are valuable to making this tool more useful for everyone.
            </p>
            
            <Button href="https://github.com/BohBOhTN/CryptoHackApp" primary={true}>
              <Github className="w-5 h-5 mr-2" />
              Contribute on GitHub
            </Button>
          </div>
          
          <div className="flex-shrink-0 w-full md:w-auto">
            <div className="bg-gray-700 p-5 rounded-lg shadow-inner">
              <div className="flex items-center mb-4">
                <Github className="w-8 h-8 text-white mr-3" />
                <div>
                  <h4 className="text-xl font-medium text-white">CryptoHack Repository</h4>
                  <div className="flex items-center mt-1">
                    <Star className="w-4 h-4 text-yellow-400 mr-1" />
                    <span className="text-gray-300 text-sm">86.2% TypeScript, 12.3% JavaScript</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center text-sm">
                  <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
                  <span className="text-gray-300">React + TypeScript</span>
                </div>
                <div className="flex items-center text-sm">
                  <div className="w-3 h-3 rounded-full bg-purple-500 mr-2"></div>
                  <span className="text-gray-300">Tailwind CSS</span>
                </div>
                <div className="flex items-center text-sm">
                  <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                  <span className="text-gray-300">Interactive UI</span>
                </div>
                <div className="flex items-center text-sm">
                  <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                  <span className="text-gray-300">GitHub Repository: <a href="https://github.com/BohBOhTN/CryptoHackApp" className="text-teal-400 underline">CryptoHack</a></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;