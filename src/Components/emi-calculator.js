// src/components/EMICalculator.js
import React, { useState,useEffect } from 'react';
import EMIForm from './emiform';

const EMICalculator = () => {
    const [results, setResults] = useState(null);
    const [darkMode, setDarkMode] = useState(true);
  
    useEffect(() => {
      if (darkMode) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }, [darkMode]);
  
    const calculateEMI = ({ loanAmount, interestRate, loanTenure, prepayment }) => {
      const monthlyRate = interestRate / 12 / 100;
      const emi = (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, loanTenure)) /
                  (Math.pow(1 + monthlyRate, loanTenure) - 1);
  
      let totalInterest = emi * loanTenure - loanAmount;
      let totalAmount = emi * loanTenure;
  
      if (prepayment > 0) {
        const newLoanAmount = loanAmount - prepayment;
        const newEMI = (newLoanAmount * monthlyRate * Math.pow(1 + monthlyRate, loanTenure)) /
                       (Math.pow(1 + monthlyRate, loanTenure) - 1);
        const newTotalInterest = newEMI * loanTenure - newLoanAmount;
        const interestSaved = totalInterest - newTotalInterest;
  
        setResults({
          emi: newEMI,
          totalInterest: newTotalInterest,
          totalAmount: newTotalInterest + newLoanAmount,
          interestSaved,
          prepayment,
        });
      } else {
        setResults({
          emi,
          totalInterest,
          totalAmount,
        });
      }
    };
  
    return (
      <div className="container mx-auto p-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-clr1">EMI Calculator</h1>
          {/* Dark Mode Toggle Button */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="bg-clr1 dark:bg-clr1 text-black dark:text-gray-100 py-2 px-4 rounded-2xl animate-bounce"
          >
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>
        
        <EMIForm onCalculate={calculateEMI} />
        {results && (
          <div className="bg-white dark:bg-gray-800 dark:text-gray-100 shadow-md rounded p-4 mt-4">
            <h3 className="text-xl font-bold mb-4 bg-clr1">EMI Results</h3>
            <p className="mb-2">Monthly EMI: ₹{results.emi.toFixed(2)}</p>
            <p className="mb-2">Total Interest Payable: ₹{results.totalInterest.toFixed(2)}</p>
            <p className="mb-2">Total Amount Payable: ₹{results.totalAmount.toFixed(2)}</p>
            {results.prepayment && (
              <>
                <p className="mb-2">Prepayment Amount: ₹{results.prepayment}</p>
                <p className="mb-2">Interest Saved: ₹{results.interestSaved.toFixed(2)}</p>
              </>
            )}
          </div>
        )}
      </div>
    );
  };
  
  export default EMICalculator;