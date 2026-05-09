import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Eye, Download } from 'lucide-react';

interface Resignation {
  id: string;
  employeeName: string;
  employeeId: string;
  department: string;
  resignationDate: string;
  lastWorkingDay: string;
  status: 'Submitted' | 'Manager Approved' | 'HR Review' | 'Approved' | 'Rejected';
}

export function ResignationList() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('');

  const resignations: Resignation[] = [
    { id: '1', employeeName: 'Rajesh Kumar', employeeId: 'EMP001', department: 'Engineering', resignationDate: '2026-04-01', lastWorkingDay: '2026-05-01', status: 'Submitted' },
    { id: '2', employeeName: 'Priya Sharma', employeeId: 'EMP002', department: 'Product', resignationDate: '2026-04-05', lastWorkingDay: '2026-05-05', status: 'Manager Approved' },
    { id: '3', employeeName: 'Amit Patel', employeeId: 'EMP003', department: 'Design', resignationDate: '2026-04-10', lastWorkingDay: '2026-04-25', status: 'HR Review' },
    { id: '4', employeeName: 'Sneha Reddy', employeeId: 'EMP004', department: 'HR', resignationDate: '2026-04-15', lastWorkingDay: '2026-05-15', status: 'Approved' },
    { id: '5', employeeName: 'Vikram Singh', employeeId: 'EMP005', department: 'Sales', resignationDate: '2026-04-18', lastWorkingDay: '2026-05-18', status: 'Rejected' },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Submitted':
        return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'Manager Approved':
        return 'bg-green-100 text-green-700 border-green-200';
      case 'HR Review':
        return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      case 'Approved':
        return 'bg-green-100 text-green-700 border-green-200';
      case 'Rejected':
        return 'bg-red-100 text-red-700 border-red-200';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  return (
    <div className="p-6 bg-[#f8f8f8] min-h-full">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-[#131313] mb-2">Resignation Requests</h1>
        <p className="text-sm text-gray-600">View and manage all employee resignation requests</p>
      </div>

      {/* Actions Bar */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-[13px] h-[13px] text-[#6f7987]" />
            <input
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-[240px] h-[40px] pl-10 pr-4 bg-[#fdfdfd] border border-[#c5cbd3] rounded-lg text-[14px] text-[#6f7987] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="h-[40px] px-[20px] py-[8px] border border-[#c5cbd3] rounded-lg text-[14px] text-[#1c1e21] focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">All Status</option>
            <option value="submitted">Submitted</option>
            <option value="manager_approved">Manager Approved</option>
            <option value="hr_review">HR Review</option>
            <option value="approved">Approved</option>
            <option value="rejected">Rejected</option>
          </select>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white border border-[#e8ceff] rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-[#f6f6f6]">
                <th className="px-[20px] py-[14px] text-left text-[16px] font-normal text-[#6f7987] border-b border-[#e8ceff]">Employee Name</th>
                <th className="px-[20px] py-[14px] text-left text-[16px] font-normal text-[#6f7987] border-b border-[#e8ceff]">Employee ID</th>
                <th className="px-[20px] py-[14px] text-left text-[16px] font-normal text-[#6f7987] border-b border-[#e8ceff]">Department</th>
                <th className="px-[20px] py-[14px] text-left text-[16px] font-normal text-[#6f7987] border-b border-[#e8ceff]">Resignation Date</th>
                <th className="px-[20px] py-[14px] text-left text-[16px] font-normal text-[#6f7987] border-b border-[#e8ceff]">Last Working Day</th>
                <th className="px-[20px] py-[14px] text-left text-[16px] font-normal text-[#6f7987] border-b border-[#e8ceff]">Status</th>
                <th className="px-[20px] py-[14px] text-left text-[16px] font-normal text-[#6f7987] border-b border-[#e8ceff]">Action</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {resignations.map((resignation) => (
                <tr key={resignation.id} className="h-[48px] hover:bg-[#f9f9f9] transition-colors">
                  <td className="px-[20px] py-[12px] text-[16px] font-normal text-[#141518] border-b border-[#e8ceff]">{resignation.employeeName}</td>
                  <td className="px-[20px] py-[12px] text-[16px] font-normal text-[#141518] border-b border-[#e8ceff]">{resignation.employeeId}</td>
                  <td className="px-[20px] py-[12px] text-[16px] font-normal text-[#141518] border-b border-[#e8ceff]">{resignation.department}</td>
                  <td className="px-[20px] py-[12px] text-[16px] font-normal text-[#141518] border-b border-[#e8ceff]">
                    {new Date(resignation.resignationDate).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' })}
                  </td>
                  <td className="px-[20px] py-[12px] text-[16px] font-normal text-[#141518] border-b border-[#e8ceff]">
                    {new Date(resignation.lastWorkingDay).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' })}
                  </td>
                  <td className="px-[20px] py-[12px] border-b border-[#e8ceff]">
                    <span className={`px-3 py-1 rounded-full text-[14px] font-medium border ${getStatusColor(resignation.status)}`}>
                      {resignation.status}
                    </span>
                  </td>
                  <td className="px-[20px] py-[12px] border-b border-[#e8ceff]">
                    <button
                      onClick={() => navigate(`/resignation/${resignation.id}`)}
                      className="flex items-center gap-2 px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors text-[14px] font-medium"
                    >
                      <Eye className="w-4 h-4" />
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between mt-6">
        <button className="flex items-center gap-[11px] h-[40px] px-[20px] py-[8px] border border-[#c5cbd3] text-[#1c1e21] rounded-lg hover:bg-gray-50 transition-colors text-[14px] font-medium">
          <Download className="w-4 h-4" />
          Download CSV
        </button>
        <div className="flex items-center gap-[32px]">
          <button className="px-[9px] py-[5px] border border-[#e1e1e1] text-[#8d96a3] rounded-[7px] hover:bg-gray-50 transition-colors text-[14px] font-medium">
            Prev
          </button>
          <div className="flex items-center gap-[7px]">
            <button className="bg-blue-600 size-[32px] p-[10px] rounded-[4px] text-white text-[14px] font-medium flex items-center justify-center">1</button>
            <button className="size-[32px] p-[10px] rounded-[4px] text-[#8d96a3] text-[14px] font-medium flex items-center justify-center hover:bg-gray-50 transition-colors">2</button>
            <button className="size-[32px] p-[10px] rounded-[4px] text-[#8d96a3] text-[14px] font-medium flex items-center justify-center hover:bg-gray-50 transition-colors">3</button>
          </div>
          <button className="px-[9px] py-[5px] border border-[#e1e1e1] text-[#414141] rounded-[7px] hover:bg-gray-50 transition-colors text-[14px] font-medium">
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
