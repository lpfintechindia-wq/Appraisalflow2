import React from 'react';
import { ClipboardCheck } from 'lucide-react';

export function LeavesReport() {
  return (
    <div className="p-6 bg-[#f8f8f8] min-h-full">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-[#131313] mb-2">Leaves Report</h1>
        <p className="text-sm text-gray-600">Generate and view leaves report based on selected filters</p>
      </div>

      <div className="bg-white border border-[#eceff3] rounded-xl p-12 text-center shadow-sm">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple-50 mb-4">
          <ClipboardCheck className="w-8 h-8 text-purple-600" />
        </div>
        <h3 className="text-lg font-semibold text-[#131313] mb-2">Leaves Report</h3>
        <p className="text-sm text-gray-600">Track and analyze employee leave patterns, balances, and utilization across departments.</p>
      </div>
    </div>
  );
}
