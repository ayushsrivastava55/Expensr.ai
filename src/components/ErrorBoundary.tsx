import React from "react";

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // Log error with timestamp and component stack
    console.error(`[ErrorBoundary] ${new Date().toISOString()}`, error, errorInfo);
  }

  render() {
    if (this.state.hasError && this.state.error) {
      return (
        <div className="bg-red-100 text-red-800 p-4 rounded shadow">
          <strong>Something went wrong:</strong>
          <pre className="whitespace-pre-wrap text-xs mt-2">{this.state.error.message}</pre>
        </div>
      );
    }
    return this.props.children;
  }
}
