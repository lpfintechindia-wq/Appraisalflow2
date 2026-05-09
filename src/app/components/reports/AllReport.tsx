import React from 'react';
import { FileBarChart } from 'lucide-react';

export function AllReport() {
  return (
    <div className="p-6 bg-[#f8f8f8] min-h-full">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-[#131313] mb-2">All Report</h1>
        <p className="text-sm text-gray-600">View and access all generated reports</p>
      </div>

      <div className="bg-white border border-[#eceff3] rounded-xl p-12 text-center shadow-sm">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-50 mb-4">
          <FileBarChart className="w-8 h-8 text-blue-600" />
        </div>
        <h3 className="text-lg font-semibold text-[#131313] mb-2">All Reports</h3>
        <p className="text-sm text-gray-600">This section will display all generated reports across different categories.</p>
      </div>
    </div>
  );
}
