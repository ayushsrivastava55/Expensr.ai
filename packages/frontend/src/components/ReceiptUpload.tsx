import React, { useState } from 'react';

import { apiService } from '../api';

const ReceiptUpload: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadMessage, setUploadMessage] = useState('');

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setSelectedFile(event.target.files[0]);
      setUploadMessage('');
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      setUploadMessage('Please select a file first.');
      return;
    }

    setIsUploading(true);
    setUploadMessage('Uploading receipt...');

    try {
      const response = await apiService.uploadReceipt(selectedFile);
      if (response.success) {
        setUploadMessage(response.data.message);
      } else {
        throw new Error(response.error);
      }
    } catch (err) {
      console.error('Failed to upload receipt:', err);
      setUploadMessage('Upload failed. Please try again.');
    } finally {
      setIsUploading(false);
      setSelectedFile(null);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-gray-900">Upload Receipt</h2>
      <div className="flex items-center space-x-4">
        <input
          type="file"
          onChange={handleFileChange}
          className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100"
          accept="image/*,video/*"
        />
        <button
          onClick={handleUpload}
          disabled={isUploading || !selectedFile}
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-400"
        >
          {isUploading ? 'Uploading...' : 'Upload'}
        </button>
      </div>
      {uploadMessage && <p className="mt-4 text-sm text-gray-600">{uploadMessage}</p>}
    </div>
  );
};

export default ReceiptUpload;
