import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Filter, Eye, Check, Clock, Download, Laptop, CreditCard, Shield, DollarSign, Users, FileText } from 'lucide-react';

interface ClearanceItem {
  id: string;
  employeeName: string;
  employeeId: string;
  department: string;
  lastWorkingDay: string;
  itClearance: 'Pending' | 'Completed';
  hrClearance: 'Pending' | 'Completed';
  financeClearance: 'Pending' | 'Completed';
  assetReturn: 'Pending' | 'Completed';
  overallStatus: 'In Progress' | 'Completed';
}

export function ExitClearance() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedEmployee, setSelectedEmployee] = useState<string | null>(null);

  const mockClearances: ClearanceItem[] = [
    { id: '1', employeeName: 'Rajesh Kumar', employeeId: 'EMP001', department: 'Engineering', lastWorkingDay: '2026-05-01', itClearance: 'Completed', hrClearance: 'Completed', financeClearance: 'Pending', assetReturn: 'Completed', overallStatus: 'In Progress' },
    { id: '2', employeeName: 'Priya Sharma', employeeId: 'EMP002', department: 'Product', lastWorkingDay: '2026-05-05', itClearance: 'Completed', hrClearance: 'Completed', financeClearance: 'Completed', assetReturn: 'Completed', overallStatus: 'Completed' },
    { id: '3', employeeName: 'Amit Patel', employeeId: 'EMP003', department: 'Design', lastWorkingDay: '2026-04-25', itClearance: 'Pending', hrClearance: 'Pending', financeClearance: 'Pending', assetReturn: 'Pending', overallStatus: 'In Progress' },
    { id: '4', employeeName: 'Sneha Reddy', employeeId: 'EMP004', department: 'HR', lastWorkingDay: '2026-05-15', itClearance: 'Completed', hrClearance: 'Pending', financeClearance: 'Completed', assetReturn: 'Completed', overallStatus: 'In Progress' },
  ];

  const clearanceDetails = {
    employee: {
      name: 'Rajesh Kumar',
      id: 'EMP001',
      department: 'Engineering',
      lastWorkingDay: '2026-05-01',
    },
    itClearance: [
      { item: 'Laptop returned', status: 'completed', completedBy: 'IT Admin', date: '2026-04-28' },
      { item: 'Mobile device returned', status: 'completed', completedBy: 'IT Admin', date: '2026-04-28' },
      { item: 'Email account deactivated', status: 'completed', completedBy: 'IT Admin', date: '2026-04-29' },
      { item: 'Access to systems revoked', status: 'completed', completedBy: 'IT Admin', date: '2026-04-29' },
      { item: 'Slack/Communication tools disabled', status: 'completed', completedBy: 'IT Admin', date: '2026-04-29' },
    ],
    hrClearance: [
      { item: 'Exit interview completed', status: 'completed', completedBy: 'HR Manager', date: '2026-04-26' },
      { item: 'Employee handbook returned', status: 'completed', completedBy: 'HR Coordinator', date: '2026-04-27' },
      { item: 'ID card returned', status: 'completed', completedBy: 'HR Coordinator', date: '2026-04-27' },
      { item: 'Full & Final settlement letter issued', status: 'completed', completedBy: 'HR Manager', date: '2026-04-30' },
      { item: 'Experience letter issued', status: 'completed', completedBy: 'HR Manager', date: '2026-04-30' },
    ],
    financeClearance: [
      { item: 'Final salary processed', status: 'pending', completedBy: '', date: '' },
      { item: 'Loan recovery completed', status: 'completed', completedBy: 'Finance Team', date: '2026-04-25' },
      { item: 'Leave encashment calculated', status: 'pending', completedBy: '', date: '' },
      { item: 'Expense reimbursement cleared', status: 'completed', completedBy: 'Finance Team', date: '2026-04-26' },
      { item: 'Tax documents prepared', status: 'pending', completedBy: '', date: '' },
    ],
    assetClearance: [
      { item: 'Laptop - Dell Latitude 7420', status: 'completed', completedBy: 'IT Admin', date: '2026-04-28' },
      { item: 'Mobile Phone - iPhone 13', status: 'completed', completedBy: 'IT Admin', date: '2026-04-28' },
      { item: 'Access Card', status: 'completed', completedBy: 'Security', date: '2026-04-27' },
      { item: 'Headphones - Sony WH-1000XM4', status: 'completed', completedBy: 'IT Admin', date: '2026-04-28' },
    ],
  };

  const getStatusColor = (status: string) => {
    return status === 'Completed'
      ? 'bg-green-100 text-green-700 border-green-200'
      : 'bg-yellow-100 text-yellow-700 border-yellow-200';
  };

  const getOverallStatusColor = (status: string) => {
    return status === 'Completed'
      ? 'bg-green-100 text-green-700 border-green-200'
      : 'bg-blue-100 text-blue-700 border-blue-200';
  };

  if (selectedEmployee) {
    return (
      <div className="min-h-screen bg-[#f8f8f8]">
        <div className="p-6">
          {/* Header */}
          <div className="mb-6">
            <button
              onClick={() => setSelectedEmployee(null)}
              className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 mb-4 transition-colors"
            >
              ← Back to Exit Clearance List
            </button>
            <h1 className="text-2xl font-semibold text-[#131313] mb-2">Exit Clearance Checklist</h1>
            <p className="text-sm text-gray-600">{clearanceDetails.employee.name} ({clearanceDetails.employee.id}) - {clearanceDetails.employee.department}</p>
          </div>

          {/* Employee Info Card */}
          <div className="bg-white rounded-2xl border border-[#eceff3] p-6 mb-6 shadow-sm">
            <div className="grid grid-cols-4 gap-4">
              <div>
                <p className="text-sm text-gray-600 mb-1">Employee Name</p>
                <p className="text-[16px] font-medium text-[#141518]">{clearanceDetails.employee.name}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">Employee ID</p>
                <p className="text-[16px] font-medium text-[#141518]">{clearanceDetails.employee.id}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">Department</p>
                <p className="text-[16px] font-medium text-[#141518]">{clearanceDetails.employee.department}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">Last Working Day</p>
                <p className="text-[16px] font-medium text-[#141518]">
                  {new Date(clearanceDetails.employee.lastWorkingDay).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' })}
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {/* IT Clearance */}
            <div className="bg-white rounded-2xl border border-[#eceff3] p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
                  <Laptop className="w-5 h-5 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h2 className="text-lg font-semibold text-[#131313]">IT Clearance</h2>
                  <p className="text-sm text-green-600 font-medium">5/5 Completed</p>
                </div>
                <span className="px-3 py-1 rounded-full text-[14px] font-medium bg-green-100 text-green-700 border border-green-200">
                  Completed
                </span>
              </div>
              <div className="space-y-3">
                {clearanceDetails.itClearance.map((item, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <div className="flex-1">
                      <p className="text-[14px] font-medium text-[#141518]">{item.item}</p>
                      <p className="text-[12px] text-gray-600 mt-1">
                        By {item.completedBy} on {new Date(item.date).toLocaleDateString('en-IN', { day: '2-digit', month: 'short' })}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* HR Clearance */}
            <div className="bg-white rounded-2xl border border-[#eceff3] p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-purple-50 flex items-center justify-center">
                  <Users className="w-5 h-5 text-purple-600" />
                </div>
                <div className="flex-1">
                  <h2 className="text-lg font-semibold text-[#131313]">HR Clearance</h2>
                  <p className="text-sm text-green-600 font-medium">5/5 Completed</p>
                </div>
                <span className="px-3 py-1 rounded-full text-[14px] font-medium bg-green-100 text-green-700 border border-green-200">
                  Completed
                </span>
              </div>
              <div className="space-y-3">
                {clearanceDetails.hrClearance.map((item, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <div className="flex-1">
                      <p className="text-[14px] font-medium text-[#141518]">{item.item}</p>
                      <p className="text-[12px] text-gray-600 mt-1">
                        By {item.completedBy} on {new Date(item.date).toLocaleDateString('en-IN', { day: '2-digit', month: 'short' })}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Finance Clearance */}
            <div className="bg-white rounded-2xl border border-[#eceff3] p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-green-50 flex items-center justify-center">
                  <DollarSign className="w-5 h-5 text-green-600" />
                </div>
                <div className="flex-1">
                  <h2 className="text-lg font-semibold text-[#131313]">Finance Clearance</h2>
                  <p className="text-sm text-yellow-600 font-medium">2/5 Completed</p>
                </div>
                <span className="px-3 py-1 rounded-full text-[14px] font-medium bg-yellow-100 text-yellow-700 border border-yellow-200">
                  Pending
                </span>
              </div>
              <div className="space-y-3">
                {clearanceDetails.financeClearance.map((item, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                    {item.status === 'completed' ? (
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    ) : (
                      <Clock className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                    )}
                    <div className="flex-1">
                      <p className="text-[14px] font-medium text-[#141518]">{item.item}</p>
                      {item.status === 'completed' ? (
                        <p className="text-[12px] text-gray-600 mt-1">
                          By {item.completedBy} on {new Date(item.date).toLocaleDateString('en-IN', { day: '2-digit', month: 'short' })}
                        </p>
                      ) : (
                        <button className="text-[12px] text-[#4b1b91] font-medium mt-1 hover:underline">
                          Mark as Complete
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Asset Return */}
            <div className="bg-white rounded-2xl border border-[#eceff3] p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-orange-50 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-orange-600" />
                </div>
                <div className="flex-1">
                  <h2 className="text-lg font-semibold text-[#131313]">Asset Return</h2>
                  <p className="text-sm text-green-600 font-medium">4/4 Completed</p>
                </div>
                <span className="px-3 py-1 rounded-full text-[14px] font-medium bg-green-100 text-green-700 border border-green-200">
                  Completed
                </span>
              </div>
              <div className="space-y-3">
                {clearanceDetails.assetClearance.map((item, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <div className="flex-1">
                      <p className="text-[14px] font-medium text-[#141518]">{item.item}</p>
                      <p className="text-[12px] text-gray-600 mt-1">
                        Verified by {item.completedBy} on {new Date(item.date).toLocaleDateString('en-IN', { day: '2-digit', month: 'short' })}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-end gap-3 mt-6">
            <button
              onClick={() => setSelectedEmployee(null)}
              className="px-5 py-2.5 border border-[#eceff3] text-gray-700 rounded-2xl hover:bg-gray-50 transition-colors text-sm font-medium"
            >
              Back to List
            </button>
            <button className="px-5 py-2.5 bg-[#4b1b91] text-white rounded-2xl hover:bg-[#3d1575] transition-colors text-sm font-medium shadow-sm">
              Generate Final Settlement
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 bg-[#f8f8f8] min-h-full">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-[#131313] mb-2">Exit Clearance Management</h1>
        <p className="text-sm text-gray-600">Track and manage exit clearance process for resigning employees</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-4 gap-6 mb-6">
        <div className="bg-white rounded-xl border border-[#eceff3] p-5 shadow-sm">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
              <FileText className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Total Clearances</p>
              <p className="text-2xl font-semibold text-[#131313]">4</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl border border-[#eceff3] p-5 shadow-sm">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-lg bg-yellow-50 flex items-center justify-center">
              <Clock className="w-5 h-5 text-yellow-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">In Progress</p>
              <p className="text-2xl font-semibold text-yellow-600">3</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl border border-[#eceff3] p-5 shadow-sm">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-lg bg-green-50 flex items-center justify-center">
              <Check className="w-5 h-5 text-green-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Completed</p>
              <p className="text-2xl font-semibold text-green-600">1</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl border border-[#eceff3] p-5 shadow-sm">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center">
              <CreditCard className="w-5 h-5 text-red-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Pending Dues</p>
              <p className="text-2xl font-semibold text-red-600">2</p>
            </div>
          </div>
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
                <th className="px-[20px] py-[14px] text-left text-[16px] font-normal text-[#6f7987] border-b border-[#e8ceff]">Last Working Day</th>
                <th className="px-[20px] py-[14px] text-left text-[16px] font-normal text-[#6f7987] border-b border-[#e8ceff]">IT</th>
                <th className="px-[20px] py-[14px] text-left text-[16px] font-normal text-[#6f7987] border-b border-[#e8ceff]">HR</th>
                <th className="px-[20px] py-[14px] text-left text-[16px] font-normal text-[#6f7987] border-b border-[#e8ceff]">Finance</th>
                <th className="px-[20px] py-[14px] text-left text-[16px] font-normal text-[#6f7987] border-b border-[#e8ceff]">Assets</th>
                <th className="px-[20px] py-[14px] text-left text-[16px] font-normal text-[#6f7987] border-b border-[#e8ceff]">Status</th>
                <th className="px-[20px] py-[14px] text-left text-[16px] font-normal text-[#6f7987] border-b border-[#e8ceff]">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {mockClearances.map((clearance) => (
                <tr key={clearance.id} className="h-[48px] hover:bg-[#f9f9f9] transition-colors">
                  <td className="px-[20px] py-[12px] border-b border-[#e8ceff]">
                    <div>
                      <p className="text-[16px] font-normal text-[#141518]">{clearance.employeeName}</p>
                      <p className="text-[14px] text-[#6f7987]">{clearance.employeeId}</p>
                    </div>
                  </td>
                  <td className="px-[20px] py-[12px] text-[16px] font-normal text-[#141518] border-b border-[#e8ceff]">{clearance.department}</td>
                  <td className="px-[20px] py-[12px] text-[16px] font-normal text-[#141518] border-b border-[#e8ceff]">
                    {new Date(clearance.lastWorkingDay).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' })}
                  </td>
                  <td className="px-[20px] py-[12px] border-b border-[#e8ceff]">
                    <span className={`px-2 py-1 rounded-full text-[12px] font-medium ${getStatusColor(clearance.itClearance)}`}>
                      {clearance.itClearance}
                    </span>
                  </td>
                  <td className="px-[20px] py-[12px] border-b border-[#e8ceff]">
                    <span className={`px-2 py-1 rounded-full text-[12px] font-medium ${getStatusColor(clearance.hrClearance)}`}>
                      {clearance.hrClearance}
                    </span>
                  </td>
                  <td className="px-[20px] py-[12px] border-b border-[#e8ceff]">
                    <span className={`px-2 py-1 rounded-full text-[12px] font-medium ${getStatusColor(clearance.financeClearance)}`}>
                      {clearance.financeClearance}
                    </span>
                  </td>
                  <td className="px-[20px] py-[12px] border-b border-[#e8ceff]">
                    <span className={`px-2 py-1 rounded-full text-[12px] font-medium ${getStatusColor(clearance.assetReturn)}`}>
                      {clearance.assetReturn}
                    </span>
                  </td>
                  <td className="px-[20px] py-[12px] border-b border-[#e8ceff]">
                    <span className={`px-3 py-1 rounded-full text-[14px] font-medium border ${getOverallStatusColor(clearance.overallStatus)}`}>
                      {clearance.overallStatus}
                    </span>
                  </td>
                  <td className="px-[20px] py-[12px] border-b border-[#e8ceff]">
                    <button
                      onClick={() => setSelectedEmployee(clearance.id)}
                      className="p-2 text-[#4b1b91] hover:bg-[#ede9f6] rounded-lg transition-colors"
                    >
                      <Eye className="w-4 h-4" />
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
            <button className="bg-[#4b1b91] size-[32px] p-[10px] rounded-[4px] text-white text-[14px] font-medium flex items-center justify-center">1</button>
          </div>
          <button className="px-[9px] py-[5px] border border-[#e1e1e1] text-[#414141] rounded-[7px] hover:bg-gray-50 transition-colors text-[14px] font-medium">
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
