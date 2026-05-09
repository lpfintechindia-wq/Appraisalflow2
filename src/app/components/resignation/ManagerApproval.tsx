import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Filter, Eye, Check, X, AlertTriangle, Download } from 'lucide-react';

interface ResignationApproval {
  id: string;
  employeeName: string;
  employeeId: string;
  department: string;
  resignationDate: string;
  lastWorkingDay: string;
  noticePeriod: number;
  requiredNoticePeriod: number;
  status: 'Pending' | 'Approved' | 'Rejected';
}

export function ManagerApproval() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  const mockApprovals: ResignationApproval[] = [
    { id: '1', employeeName: 'Rajesh Kumar', employeeId: 'EMP001', department: 'Engineering', resignationDate: '2026-04-01', lastWorkingDay: '2026-05-01', noticePeriod: 30, requiredNoticePeriod: 30, status: 'Pending' },
    { id: '2', employeeName: 'Priya Sharma', employeeId: 'EMP002', department: 'Product', resignationDate: '2026-04-05', lastWorkingDay: '2026-04-20', noticePeriod: 15, requiredNoticePeriod: 30, status: 'Pending' },
    { id: '3', employeeName: 'Amit Patel', employeeId: 'EMP003', department: 'Design', resignationDate: '2026-04-10', lastWorkingDay: '2026-05-10', noticePeriod: 30, requiredNoticePeriod: 30, status: 'Pending' },
    { id: '4', employeeName: 'Sneha Reddy', employeeId: 'EMP004', department: 'HR', resignationDate: '2026-04-15', lastWorkingDay: '2026-05-20', noticePeriod: 35, requiredNoticePeriod: 30, status: 'Pending' },
    { id: '5', employeeName: 'Vikram Singh', employeeId: 'EMP005', department: 'Sales', resignationDate: '2026-04-18', lastWorkingDay: '2026-04-28', noticePeriod: 10, requiredNoticePeriod: 30, status: 'Pending' },
  ];

  const getNoticePeriodStatus = (given: number, required: number) => {
    if (given < required) {
      return {
        label: `${required - given} days shortfall`,
        color: 'text-red-600',
        bg: 'bg-red-50'
      };
    } else if (given === required) {
      return {
        label: 'Complete',
        color: 'text-green-600',
        bg: 'bg-green-50'
      };
    } else {
      return {
        label: `${given - required} days extra`,
        color: 'text-blue-600',
        bg: 'bg-blue-50'
      };
    }
  };

  return (
    <div className="p-6 bg-[#f8f8f8] min-h-full">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-[#131313] mb-2">Manager Approval</h1>
        <p className="text-sm text-gray-600">Review and approve resignation requests from your team members</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-4 gap-6 mb-6">
        <div className="bg-white rounded-xl border border-[#eceff3] p-5 shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm text-gray-600">Pending Approvals</p>
          </div>
          <p className="text-2xl font-semibold text-[#131313]">5</p>
        </div>
        <div className="bg-white rounded-xl border border-[#eceff3] p-5 shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm text-gray-600">Notice Period Issues</p>
          </div>
          <p className="text-2xl font-semibold text-red-600">2</p>
        </div>
        <div className="bg-white rounded-xl border border-[#eceff3] p-5 shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm text-gray-600">Approved This Month</p>
          </div>
          <p className="text-2xl font-semibold text-green-600">12</p>
        </div>
        <div className="bg-white rounded-xl border border-[#eceff3] p-5 shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm text-gray-600">Avg Notice Period</p>
          </div>
          <p className="text-2xl font-semibold text-[#131313]">28 days</p>
        </div>
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
              className="w-[240px] h-[40px] pl-10 pr-4 bg-[#fdfdfd] border border-[#c5cbd3] rounded-lg text-[14px] text-[#6f7987] focus:outline-none focus:ring-2 focus:ring-[#4b1b91] focus:border-transparent"
            />
          </div>
          <button className="flex items-center gap-[6px] h-[40px] px-[20px] py-[8px] border border-[#c5cbd3] text-[#1c1e21] rounded-lg hover:bg-gray-50 transition-colors text-[14px] font-medium">
            <Filter className="w-4 h-4" />
            Filter
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white border border-[#e8ceff] rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-[#f6f6f6]">
                <th className="px-[20px] py-[14px] text-left text-[16px] font-normal text-[#6f7987] border-b border-[#e8ceff]">Employee Name</th>
                <th className="px-[20px] py-[14px] text-left text-[16px] font-normal text-[#6f7987] border-b border-[#e8ceff]">Department</th>
                <th className="px-[20px] py-[14px] text-left text-[16px] font-normal text-[#6f7987] border-b border-[#e8ceff]">Resignation Date</th>
                <th className="px-[20px] py-[14px] text-left text-[16px] font-normal text-[#6f7987] border-b border-[#e8ceff]">Last Working Day</th>
                <th className="px-[20px] py-[14px] text-left text-[16px] font-normal text-[#6f7987] border-b border-[#e8ceff]">Notice Period</th>
                <th className="px-[20px] py-[14px] text-left text-[16px] font-normal text-[#6f7987] border-b border-[#e8ceff]">Status</th>
                <th className="px-[20px] py-[14px] text-left text-[16px] font-normal text-[#6f7987] border-b border-[#e8ceff]">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {mockApprovals.map((approval) => {
                const noticePeriodStatus = getNoticePeriodStatus(approval.noticePeriod, approval.requiredNoticePeriod);
                return (
                  <tr key={approval.id} className="h-[48px] hover:bg-[#f9f9f9] transition-colors">
                    <td className="px-[20px] py-[12px] border-b border-[#e8ceff]">
                      <div>
                        <p className="text-[16px] font-normal text-[#141518]">{approval.employeeName}</p>
                        <p className="text-[14px] text-[#6f7987]">{approval.employeeId}</p>
                      </div>
                    </td>
                    <td className="px-[20px] py-[12px] text-[16px] font-normal text-[#141518] border-b border-[#e8ceff]">{approval.department}</td>
                    <td className="px-[20px] py-[12px] text-[16px] font-normal text-[#141518] border-b border-[#e8ceff]">
                      {new Date(approval.resignationDate).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' })}
                    </td>
                    <td className="px-[20px] py-[12px] text-[16px] font-normal text-[#141518] border-b border-[#e8ceff]">
                      {new Date(approval.lastWorkingDay).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' })}
                    </td>
                    <td className="px-[20px] py-[12px] border-b border-[#e8ceff]">
                      <div className="flex flex-col gap-1">
                        <span className="text-[16px] font-normal text-[#141518]">{approval.noticePeriod} days</span>
                        <span className={`text-[14px] font-medium ${noticePeriodStatus.color}`}>
                          {noticePeriodStatus.label}
                        </span>
                      </div>
                    </td>
                    <td className="px-[20px] py-[12px] border-b border-[#e8ceff]">
                      <span className="px-3 py-1 rounded-full text-[14px] font-medium bg-yellow-100 text-yellow-700 border border-yellow-200">
                        {approval.status}
                      </span>
                    </td>
                    <td className="px-[20px] py-[12px] border-b border-[#e8ceff]">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => navigate(`/resignation/hr-review/${approval.id}`)}
                          className="p-2 text-[#4b1b91] hover:bg-[#ede9f6] rounded-lg transition-colors"
                          title="View Details"
                        >
                          <Eye className="w-4 h-4" />
                        </button>
                        <button className="px-3 py-1.5 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-[14px] font-medium flex items-center gap-1">
                          <Check className="w-4 h-4" />
                          Approve
                        </button>
                        <button className="px-3 py-1.5 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-[14px] font-medium flex items-center gap-1">
                          <X className="w-4 h-4" />
                          Reject
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Notice Period Alert */}
      <div className="mt-6 bg-red-50 border border-red-200 rounded-xl p-4 flex items-start gap-3">
        <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
        <div>
          <p className="text-sm font-medium text-red-900">Notice Period Shortfall Detected</p>
          <p className="text-sm text-red-700 mt-1">
            2 employees have not completed the required 30-day notice period. Please review and take appropriate action.
          </p>
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
            <button className="bg-[#4b1b91] size-[32px] p-[10px] rounded-[4px] text-white text-[14px] font-medium flex items-center justify-center">1</button>
            <button className="size-[32px] p-[10px] rounded-[4px] text-[#8d96a3] text-[14px] font-medium flex items-center justify-center hover:bg-gray-50 transition-colors">2</button>
          </div>
          <button className="px-[9px] py-[5px] border border-[#e1e1e1] text-[#414141] rounded-[7px] hover:bg-gray-50 transition-colors text-[14px] font-medium">
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
