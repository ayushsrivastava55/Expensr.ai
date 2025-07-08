import React from 'react';
import type { ParsedReceipt } from '../types';

interface ParsedReceiptCardProps {
  receipt: ParsedReceipt;
}

const ParsedReceiptCard: React.FC<ParsedReceiptCardProps> = ({ receipt }) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div className="mt-6 bg-white p-6 rounded-lg shadow-lg border border-gray-200 animate-fade-in">
      <h3 className="text-2xl font-bold mb-4 text-gray-800 border-b pb-2">Receipt Details</h3>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <p className="text-sm font-semibold text-gray-600">Store</p>
          <p className="text-lg text-gray-900">{receipt.store}</p>
        </div>
        <div>
          <p className="text-sm font-semibold text-gray-600">Date</p>
          <p className="text-lg text-gray-900">{formatDate(receipt.date)}</p>
        </div>
      </div>

      <h4 className="text-xl font-semibold mt-6 mb-3 text-gray-700">Items</h4>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Item</th>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Qty</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {receipt.items.map((item, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">{item.qty}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">{item.price.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6 border-t pt-4 text-right">
        {receipt.tax != null && (
            <div className="flex justify-end items-center mb-2">
                <p className="text-md text-gray-600 mr-4">Tax:</p>
                <p className="text-md font-semibold text-gray-800">${receipt.tax.toFixed(2)}</p>
            </div>
        )}
        <div className="flex justify-end items-center">
            <p className="text-lg font-bold text-gray-700 mr-4">Total:</p>
            <p className="text-xl font-extrabold text-gray-900">${receipt.total.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};

export default ParsedReceiptCard;
