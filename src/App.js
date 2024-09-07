// src/App.js
import React from 'react';
import EMICalculator from './Components/emi-calculator'

function App() {
  return (
    <div className="App bg-gray-100 dark:bg-gray-900 min-h-screen text-gray-900 dark:text-gray-100">
      <header className="text-center py-4">
        <h1 className="text-3xl font-bold text-clr1">EMI Calculator</h1>
      </header>
      <EMICalculator />
    </div>
  );
}

export default App;
