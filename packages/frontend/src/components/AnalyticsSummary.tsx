import React, { useState, useEffect } from 'react';
import type { AnalyticsData } from '../types';
import { apiService } from '../api';

const AnalyticsSummary: React.FC = () => {
  const [analytics, setAnalytics] = useState<AnalyticsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAnalytics = async () => {
      try {
        const response = await apiService.getAnalyticsSummary();
        if (response.success) {
          setAnalytics(response.data);
        } else {
          throw new Error(response.error);
        }
      } catch (err) {
        console.error('Failed to fetch analytics:', err);
        setError('Could not load analytics data.');
      } finally {
        setLoading(false);
      }
    };

    fetchAnalytics();
  }, []);

  if (loading) {
    return <p>Loading analytics...</p>;
  }

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  if (!analytics) {
    return null;
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-gray-800">
      <h2 className="text-2xl font-bold mb-4 text-gray-900">Spending Analytics</h2>
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <p className="text-lg font-semibold">Total Spending</p>
          <p className="text-lg font-bold">${analytics.totalSpending.toFixed(2)}</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2 text-gray-900">By Category</h3>
          <ul className="space-y-2">
            {Object.entries(analytics.spendingByCategory).map(([category, amount]) => (
              <li key={category} className="flex justify-between">
                <span>{category}</span>
                <span>${amount.toFixed(2)}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsSummary;
