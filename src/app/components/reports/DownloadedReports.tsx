import React from 'react';
import { Download } from 'lucide-react';

export function DownloadedReports() {
  return (
    <div className="p-6 bg-[#f8f8f8] min-h-full">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-[#131313] mb-2">Downloaded Reports</h1>
        <p className="text-sm text-gray-600">View and manage all previously downloaded reports</p>
      </div>

      <div className="bg-white border border-[#eceff3] rounded-xl p-12 text-center shadow-sm">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange-50 mb-4">
          <Download className="w-8 h-8 text-orange-600" />
        </div>
        <h3 className="text-lg font-semibold text-[#131313] mb-2">Downloaded Reports</h3>
        <p className="text-sm text-gray-600">Access your download history and re-download previously generated reports.</p>
      </div>
    </div>
  );
}
