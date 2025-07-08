import React, { useState, useEffect } from 'react';
import type { Expense } from '../types';
import { apiService } from '../api';

const ExpenseList: React.FC = () => {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchExpenses = async () => {
      try {
        const response = await apiService.getExpenses();
        if (response.success) {
          setExpenses(response.data);
        } else {
          throw new Error(response.error);
        }
      } catch (err) {
        console.error('Failed to fetch expenses:', err);
        setError('Could not load expenses. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchExpenses();
  }, []);

  if (loading) {
    return <p>Loading expenses...</p>;
  }

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-gray-900">Recent Expenses</h2>
      <ul className="space-y-4">
        {expenses.map(expense => (
          <li key={expense.id} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
            <div>
              <p className="font-semibold text-gray-900">{expense.description}</p>
              <p className="text-sm text-gray-500">{expense.category} - {expense.date}</p>
            </div>
            <p className="font-bold text-lg text-gray-900">${expense.amount.toFixed(2)}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseList;
