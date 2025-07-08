export interface Expense {
  id: string;
  description: string;
  amount: number;
  date: string;
  category: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
}

export interface AnalyticsData {
  totalSpending: number;
  spendingByCategory: { [category: string]: number };
}

export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
  error?: string;
}
