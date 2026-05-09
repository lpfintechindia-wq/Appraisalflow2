import { useState } from 'react';
import { Search, Plus, Eye } from 'lucide-react';

export function PIPs() {
  return (
    <div className="p-6 md:p-8 bg-[#f8f9fc] min-h-screen">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-gray-900 mb-2">Performance Improvement Plans</h1>
        <p className="text-sm text-gray-600">Track and manage employee improvement plans</p>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 mb-6">
        <div className="flex gap-4 justify-between">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search PIPs..."
                className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
            <Plus className="w-4 h-4" />
            <span className="text-sm font-medium">Create PIP</span>
          </button>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-100">
            <tr>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-600 uppercase">Employee</th>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-600 uppercase">Department</th>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-600 uppercase">Start Date</th>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-600 uppercase">End Date</th>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-600 uppercase">Progress</th>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-600 uppercase">Status</th>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-600 uppercase">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {[
              { id: 1, employee: 'John Doe', department: 'Engineering', startDate: '2026-03-01', endDate: '2026-06-01', progress: 60, status: 'Active' },
              { id: 2, employee: 'Jane Smith', department: 'Sales', startDate: '2026-02-15', endDate: '2026-05-15', progress: 85, status: 'Active' },
            ].map((pip) => (
              <tr key={pip.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 text-sm font-medium text-gray-900">{pip.employee}</td>
                <td className="px-6 py-4 text-sm text-gray-700">{pip.department}</td>
                <td className="px-6 py-4 text-sm text-gray-700">{new Date(pip.startDate).toLocaleDateString()}</td>
                <td className="px-6 py-4 text-sm text-gray-700">{new Date(pip.endDate).toLocaleDateString()}</td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <div className="w-20 bg-gray-200 rounded-full h-2">
                      <div className="bg-purple-600 h-2 rounded-full" style={{ width: `${pip.progress}%` }}></div>
                    </div>
                    <span className="text-sm text-gray-700">{pip.progress}%</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700">
                    {pip.status}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <button className="p-1.5 hover:bg-gray-100 rounded-lg"><Eye className="w-4 h-4 text-gray-600" /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
