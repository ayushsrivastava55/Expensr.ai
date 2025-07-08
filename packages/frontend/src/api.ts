import type { ApiResponse, Expense, AnalyticsData } from './types';
import { mockExpenses, mockAnalyticsData } from './data/mockData';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://127.0.0.1:8000/api';

// A helper to simulate network delay
const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// Centralized error logger
const logError = (context: string, error: unknown) => {
  console.error(`[API Service] ${context} failed:`, error);
};

/**
 * A generic API request handler that simulates API calls.
 * @param endpoint The API endpoint to call (e.g., '/expenses')
 * @param mockData The mock data to return on success
 * @param delay The simulated network delay in milliseconds
 */
async function apiRequest<T>(
  endpoint: string,
  mockData: T,
  delay: number = 1000
): Promise<ApiResponse<T>> {
  console.log(`[API Service] Faking request to ${API_BASE_URL}${endpoint}`);
  try {
    await sleep(delay);

    return {
      success: true,
      data: mockData,
      message: `Successfully fetched data from ${endpoint}`,
    };
  } catch (error) {
    logError(`apiRequest to ${endpoint}`, error);
    return {
      success: false,
      data: null as T,
      error: error instanceof Error ? error.message : 'An unknown error occurred.',
    };
  }
}

/**
 * API Service Layer for Project Raseed
 */
export const apiService = {
  getExpenses: (): Promise<ApiResponse<Expense[]>> => {
    return apiRequest<Expense[]>('/expenses', mockExpenses, 1000);
  },

  getAnalyticsSummary: (): Promise<ApiResponse<AnalyticsData>> => {
    return apiRequest<AnalyticsData>('/analytics/summary', mockAnalyticsData, 1500);
  },

  uploadReceipt: async (file: File): Promise<ApiResponse<{ message: string }>> => {
    console.log(`[API Service] Faking upload for file: ${file.name}`);
    await sleep(2000); // Simulate upload time
    return {
      success: true,
      data: { message: `File '${file.name}' uploaded successfully.` },
    };
  },

  postQuery: (query: string): Promise<ApiResponse<{ response: string }>> => {
    const mockResponse = {
      response: `This is a simulated AI response to: "${query}".`,
    };
    return apiRequest<{ response: string }>('/query', mockResponse, 2000);
  },

  // --- Auth (Placeholders) ---
    register: async (_data: unknown): Promise<ApiResponse<{ userId: string }>> => {
    console.warn('[API Service] register is a placeholder and not implemented.');
    await sleep(500);
    return { success: true, data: { userId: 'user-123' } };
  },

    login: async (_data: unknown): Promise<ApiResponse<{ token: string }>> => {
    console.warn('[API Service] login is a placeholder and not implemented.');
    await sleep(500);
    return { success: true, data: { token: 'fake-jwt-token' } };
  },
}; 