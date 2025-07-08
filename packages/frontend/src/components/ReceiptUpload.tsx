import React, { useState, useRef } from 'react';
import { apiService } from '../api';
import type { ParsedReceipt } from '../types';
import ParsedReceiptCard from './ParsedReceiptCard';

const ReceiptUpload: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [receiptData, setReceiptData] = useState<ParsedReceipt | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setSelectedFile(event.target.files[0]);
      setReceiptData(null);
      setError(null);
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      setError('Please select a file first.');
      return;
    }

    setIsUploading(true);
    setError(null);

    const response = await apiService.uploadReceipt(selectedFile);

    setIsUploading(false);

    if (response.success) {
      setReceiptData(response.data);
      setSelectedFile(null); // Clear selection
      if (fileInputRef.current) {
        fileInputRef.current.value = ''; // Reset file input
      }
    } else {
      setError(response.error || 'Upload failed. Please try again.');
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-gray-900">Upload Receipt</h2>
      <div className="flex items-center space-x-4">
        <input
          ref={fileInputRef}
          type="file"
          onChange={handleFileChange}
          className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100 cursor-pointer"
          accept="image/jpeg,image/png"
        />
        <button
          onClick={handleUpload}
          disabled={isUploading || !selectedFile}
          className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors duration-300 whitespace-nowrap"
        >
          {isUploading ? 'Uploading...' : 'Upload'}
        </button>
      </div>
      {error && <p className="mt-4 text-sm text-red-600 bg-red-100 p-3 rounded-lg">{error}</p>}
      {receiptData && <ParsedReceiptCard receipt={receiptData} />}
    </div>
  );
};

export default ReceiptUpload;
