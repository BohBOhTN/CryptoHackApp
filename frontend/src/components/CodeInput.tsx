import React, { useState } from 'react';
import axios from 'axios'; 
import { Code, CheckCircle, Loader2, XCircle } from 'lucide-react'; 
import Button from './ui/Button';
import ReactGA from 'react-ga4';

interface ShiftResult {
  shift: number;
  text: string;
  gptResponse: string; 
}

const CodeInput: React.FC = () => {
  const [input, setInput] = useState('');
  const [results, setResults] = useState<ShiftResult[]>([]);
  const [activeShift, setActiveShift] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [loadingMessage, setLoadingMessage] = useState('');

  const handleDecryptClick = () => {
    ReactGA.event({
      category: 'User',
      action: 'Clicked Decrypt Text'
    });
  };

  const handleSubmit = async () => {
    if (loading) return; // Prevent multiple clicks

    setLoading(true);
    setError('');
    setActiveShift(null);
    setLoadingMessage('Starting decryption process...');

    try {
      const response = await axios.post('http://localhost:3000/shift-text', {
        text: input,
      });

      // Simulate interactive loading messages
      for (let i = 0; i <= 25; i++) {
        await new Promise((resolve) => setTimeout(resolve, 500)); // Simulate delay
        setLoadingMessage(`Decrypting ROT${i}...`);
      }

      setLoadingMessage('Verifying results...');

      // Map API response which uses "result" to our "text" field and include gptResponse.
      const mappedResults = response.data.shifts.map((s: any) => ({
        shift: s.shift,
        text: s.result,
        gptResponse: s.gptResponse,
      }));
      setResults(mappedResults);
    } catch (err) {
      if (err.response?.status === 429) {
        setError('Too many requests. Please try again in one minute.');
      } else {
        setError('Failed to process the text. Please try again.');
      }
    } finally {
      setLoading(false);
      setLoadingMessage('');
    }
  };

  // Find the active result by matching shift value.
  const activeResult = results.find(r => r.shift === activeShift);

  return (
    <section className="my-12">
      <h2 className="text-3xl font-semibold mb-6 flex items-center">
        <span className="bg-indigo-600 text-white rounded-full w-8 h-8 inline-flex items-center justify-center mr-3">4</span>
        Try It Yourself
      </h2>
      
      <div className="bg-gray-800 rounded-lg shadow-lg p-6">
        <div className="mb-6">
          <label htmlFor="ciphertext" className="block text-lg font-medium text-gray-300 mb-2">
            Enter your ciphertext
          </label>
          <textarea
            id="ciphertext"
            className="w-full h-32 bg-gray-700 text-white rounded-lg p-4 font-mono resize-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            placeholder="Enter the text you want to decrypt (e.g., URYYB JBEYQ)..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
        
        <div className="flex justify-end mb-6">
          <Button 
            onClick={() => {
              handleDecryptClick();
              handleSubmit();
            }} 
            primary={true} 
            className="relative"
            disabled={!input.trim() || loading}
          >
            {loading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                <span className="ml-2">{loadingMessage}</span>
              </>
            ) : (
              <>
                <Code className="w-5 h-5 mr-2" />
                Decrypt Text
              </>
            )}
          </Button>
        </div>

        {error && (
          <div className="mb-6 p-4 bg-red-900/30 border border-red-700 rounded-lg text-red-400">
            {error}
          </div>
        )}

        {results.length > 0 && (
          <div className="space-y-4">
            <div className="overflow-x-auto">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm font-mono">
                {results.map((result) => (
                  <button
                    key={result.shift}
                    className={`p-2 rounded transition-colors ${
                      activeShift === result.shift
                        ? 'bg-indigo-600 text-white'
                        : result.gptResponse === "Yes"
                        ? 'bg-green-600 text-white'
                        : 'bg-gray-800 hover:bg-gray-600'
                    }`}
                    onClick={() => setActiveShift(result.shift)}
                  >
                    ROT{result.shift}: {result.text?.slice(0, 12) || "N/A"}...
                  </button>
                ))}
              </div>
            </div>
            
            {activeShift !== null && activeResult && (
              <div className="mt-4 p-3 bg-gray-800 rounded border border-gray-600">
                <div className="flex items-center mb-2">
                  <span className="text-gray-400 mr-2">ROT{activeShift}:</span>
                  <span className="text-white">
                    {activeResult.text}
                  </span>
                  {activeResult.gptResponse === "Yes" ? (
                    <CheckCircle className="w-5 h-5 text-green-400 ml-2" />
                  ) : (
                    <XCircle className="w-5 h-5 text-red-400 ml-2" />
                  )}
                </div>
                <p className="text-sm italic">
                  {activeResult.gptResponse === "Yes" ? (
                    <span className="text-green-400">This could be valid English text!</span>
                  ) : (
                    <span className="text-red-400">This could not be valid English text!</span>
                  )}
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default CodeInput;