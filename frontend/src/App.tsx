import React from 'react';
import axios from 'axios'; // Import Axios
import Header from './components/Header';
import SignUpSection from './components/SignUpSection';
import CipherExplanation from './components/CipherExplanation';
import StepByStep from './components/StepByStep';
import CodeInput from './components/CodeInput';
import Community from './components/Community';
import Footer from './components/Footer';

axios.defaults.baseURL = 'http://localhost:3000'; // Set the base URL for Axios requests

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <div className="max-w-4xl mx-auto p-6">
        <Header />
        <SignUpSection />
        <CipherExplanation />
        <StepByStep />
        <CodeInput />
        <Community />
        <Footer />
      </div>
    </div>
  );
}

export default App;