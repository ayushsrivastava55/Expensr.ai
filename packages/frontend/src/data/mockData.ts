import type { Expense, AnalyticsData } from '../types';

export const mockExpenses: Expense[] = [
  {
    id: '1',
    description: 'Groceries from SuperMart',
    amount: 75.5,
    date: '2025-07-08',
    category: 'Food',
  },
  {
    id: '2',
    description: 'Dinner at The Grand Restaurant',
    amount: 120.0,
    date: '2025-07-07',
    category: 'Food',
  },
  {
    id: '3',
    description: 'Monthly Metro Pass',
    amount: 50.0,
    date: '2025-07-01',
    category: 'Transport',
  },
  {
    id: '4',
    description: 'Movie tickets for "AI Uprising"',
    amount: 30.0,
    date: '2025-07-05',
    category: 'Entertainment',
  },
];

export const mockAnalyticsData: AnalyticsData = {
  totalSpending: 275.5,
  spendingByCategory: {
    Food: 195.5,
    Transport: 50.0,
    Entertainment: 30.0,
  },
};
