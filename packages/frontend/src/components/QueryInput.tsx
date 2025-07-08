import React, { useState } from 'react';

import { apiService } from '../api';

const QueryInput: React.FC = () => {
  const [query, setQuery] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [response, setResponse] = useState('');

  const handleQueryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!query.trim()) {
      setResponse('Please enter a query.');
      return;
    }

    setIsSubmitting(true);
    setResponse('Thinking...');

    try {
      const response = await apiService.postQuery(query);
      if (response.success) {
        setResponse(response.data.response);
      } else {
        throw new Error(response.error);
      }
    } catch (err) {
      console.error('Failed to post query:', err);
      setResponse('Failed to get a response. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-gray-900">Ask Your Financial Advisor</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          value={query}
          onChange={handleQueryChange}
          placeholder="e.g., 'How much did I spend on food last week?'"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 placeholder:text-gray-500"
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:bg-gray-400"
        >
          {isSubmitting ? 'Submitting...' : 'Ask AI'}
        </button>
      </form>
      {response && (
        <div className="mt-4 p-4 bg-gray-100 rounded-lg">
          <p className="text-gray-800">{response}</p>
        </div>
      )}
    </div>
  );
};

export default QueryInput;
