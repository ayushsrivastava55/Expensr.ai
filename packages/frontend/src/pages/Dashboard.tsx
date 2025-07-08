import React from 'react';
import ReceiptUpload from '../components/ReceiptUpload';
import ExpenseList from '../components/ExpenseList';
import AnalyticsSummary from '../components/AnalyticsSummary';
import QueryInput from '../components/QueryInput';

const Dashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <main className="container mx-auto p-4 md:p-8 space-y-8">
        <h1 className="text-4xl font-bold text-gray-800">Your Financial Dashboard</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <ReceiptUpload />
            <ExpenseList />
          </div>
          <div className="space-y-8">
            <AnalyticsSummary />
            <QueryInput />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
