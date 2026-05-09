import React from 'react';
import { Calendar } from 'lucide-react';

export function AttendanceReport() {
  return (
    <div className="p-6 bg-[#f8f8f8] min-h-full">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-[#131313] mb-2">Attendance Report</h1>
        <p className="text-sm text-gray-600">Generate and view attendance report based on selected filters</p>
      </div>

      <div className="bg-white border border-[#eceff3] rounded-xl p-12 text-center shadow-sm">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-50 mb-4">
          <Calendar className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="text-lg font-semibold text-[#131313] mb-2">Attendance Report</h3>
        <p className="text-sm text-gray-600">Generate comprehensive attendance reports with filters for date range, department, and employee.</p>
      </div>
    </div>
  );
}
