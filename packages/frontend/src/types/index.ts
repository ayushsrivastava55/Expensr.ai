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

// --- Receipt Types ---

export interface ReceiptItem {
  name: string;
  qty: number;
  price: number;
}

export interface ParsedReceipt {
  store: string;
  date: string;
  items: ReceiptItem[];
  tax: number | null;
  total: number;
}
