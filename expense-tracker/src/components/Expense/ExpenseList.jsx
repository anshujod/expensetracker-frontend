import React from 'react';
import { LuDownload } from 'react-icons/lu';

const ExpenseList = ({ transactions, onDelete,  onDownload }) => {
  return (
    <div className="card">
      <div className="flex items-center justify-between">
        <h5 className="text-lg">All Expenses</h5>
        <button 
          className="action-button" 
          onClick={onDownload}
        >
          <LuDownload className="text-base" /> 
          Download
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        {transactions?.map((transaction) => (
          <div 
            key={transaction._id}
            className="p-4 rounded-lg bg-white transition-all duration-200 hover:bg-gray-50 hover:-translate-y-1 hover:1px shadow-sm"
          >
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-medium">{transaction.category}</h3>
                <p className="text-sm text-gray-500">
                  {new Date(transaction.date).toLocaleDateString()}
                </p>
              </div>
              <div className="font-medium">
                ${transaction.amount}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExpenseList;
