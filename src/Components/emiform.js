// src/components/EMIForm.js
import React, { useState } from 'react';

const EMIForm = ({ onCalculate }) => {
  const [loanAmount, setLoanAmount] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [loanTenure, setLoanTenure] = useState('');
  const [prepayment, setPrepayment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onCalculate({
      loanAmount: parseFloat(loanAmount),
      interestRate: parseFloat(interestRate),
      loanTenure: parseFloat(loanTenure),
      prepayment: parseFloat(prepayment) || 0,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 dark:text-gray-100 shadow-md rounded p-4 mt-4">
      <div className="mb-4">
        <label className="block text-gray-700 dark:text-gray-300 mb-2">Loan Amount</label>
        <input
          type="number"
          value={loanAmount}
          onChange={(e) => setLoanAmount(e.target.value)}
          className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded dark:bg-gray-700 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-clr1"
          placeholder="Enter loan amount"
          required
        />
      </div>
      
      <div className="mb-4">
        <label className="block text-gray-700 dark:text-gray-300 mb-2">Interest Rate (%)</label>
        <input
          type="number"
          value={interestRate}
          onChange={(e) => setInterestRate(e.target.value)}
          className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded dark:bg-gray-700 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-clr1"
          placeholder="Enter annual interest rate"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 dark:text-gray-300 mb-2">Loan Tenure (Months)</label>
        <input
          type="number"
          value={loanTenure}
          onChange={(e) => setLoanTenure(e.target.value)}
          className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded dark:bg-gray-700 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-clr1"
          placeholder="Enter loan tenure in months"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 dark:text-gray-300 mb-2">Prepayment Amount (Optional)</label>
        <input
          type="number"
          value={prepayment}
          onChange={(e) => setPrepayment(e.target.value)}
          className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded dark:bg-gray-700 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-clr1"
          placeholder="Enter prepayment amount (if any)"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-clr1 text-white dark:bg-clr1 dark:hover:bg-clr2 py-2 px-4 rounded mt-4 hover:bg-clr2 focus:outline-none focus:ring-2 focus:ring-clr1 animate-pulse"
      >
        Calculate EMI
      </button>
    </form>
  );
};

export default EMIForm;
