import { Search, Download, RotateCcw, Eye, FileDown, Users, UserCheck, UserX, Building2, Calendar } from 'lucide-react';
import React, { useState } from 'react';

interface EmployeeReportData {
  employeeCode: string;
  name: string;
  joiningDate: string;
  department: string;
  designation: string;
  reportingManager: string;
  status: 'Active' | 'Pending' | 'Rejected' | 'Inactive';
}

export function EmployeeReport() {
  const [searchText, setSearchText] = useState('');
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [status, setStatus] = useState('');
  const [reportGenerated, setReportGenerated] = useState(false);

  const mockEmployeeData: EmployeeReportData[] = [
    { employeeCode: 'EMP001', name: 'Rajesh Kumar', joiningDate: '2022-01-15', department: 'Engineering', designation: 'Senior Software Engineer', reportingManager: 'Amit Sharma', status: 'Active' },
    { employeeCode: 'EMP002', name: 'Priya Patel', joiningDate: '2021-08-22', department: 'Product', designation: 'Product Manager', reportingManager: 'Sneha Reddy', status: 'Active' },
    { employeeCode: 'EMP003', name: 'Amit Singh', joiningDate: '2023-03-10', department: 'Design', designation: 'UI/UX Designer', reportingManager: 'Kavita Jain', status: 'Active' },
    { employeeCode: 'EMP004', name: 'Sneha Gupta', joiningDate: '2020-05-18', department: 'HR', designation: 'HR Manager', reportingManager: 'Vikram Mehta', status: 'Active' },
    { employeeCode: 'EMP005', name: 'Vikram Shah', joiningDate: '2023-09-05', department: 'Sales', designation: 'Sales Executive', reportingManager: 'Rohit Verma', status: 'Pending' },
    { employeeCode: 'EMP006', name: 'Anjali Desai', joiningDate: '2022-11-20', department: 'Engineering', designation: 'Frontend Developer', reportingManager: 'Amit Sharma', status: 'Active' },
    { employeeCode: 'EMP007', name: 'Rahul Nair', joiningDate: '2021-02-14', department: 'Marketing', designation: 'Marketing Lead', reportingManager: 'Priya Singh', status: 'Inactive' },
    { employeeCode: 'EMP008', name: 'Kavita Rao', joiningDate: '2023-06-01', department: 'Finance', designation: 'Financial Analyst', reportingManager: 'Suresh Kumar', status: 'Active' },
  ];

  const handleGenerateReport = () => {
    setReportGenerated(true);
  };

  const handleResetFilters = () => {
    setSearchText('');
    setFromDate('');
    setToDate('');
    setStatus('');
    setReportGenerated(false);
  };

  const handleViewDetails = (employeeCode: string) => {
    console.log('View details for employee:', employeeCode);
    // Navigate to employee details page
  };

  const handleDownloadReport = (employeeCode: string) => {
    console.log('Download report for employee:', employeeCode);
    // Download individual employee report
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active':
        return 'bg-green-100 text-green-700 border-green-200';
      case 'Pending':
        return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      case 'Rejected':
        return 'bg-red-100 text-red-700 border-red-200';
      case 'Inactive':
        return 'bg-gray-100 text-gray-700 border-gray-200';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  const filteredData = reportGenerated ? mockEmployeeData : [];
  const totalEmployees = filteredData.length;
  const activeEmployees = filteredData.filter(emp => emp.status === 'Active').length;
  const inactiveEmployees = filteredData.filter(emp => emp.status === 'Inactive').length;
  const departmentsCovered = new Set(filteredData.map(emp => emp.department)).size;
  const generatedDate = new Date().toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' });

  return (
    <div className="p-6 bg-[#f8f8f8] min-h-full">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-[#131313] mb-2">Employee Report</h1>
        <p className="text-sm text-gray-600">Generate and view employee-wise report based on selected filters.</p>
      </div>

      {/* Filter Section */}
      <div className="bg-white border border-[#eceff3] rounded-xl p-6 mb-6 shadow-sm">
        <h2 className="text-lg font-semibold text-[#131313] mb-4">Filters</h2>

        {/* Filter Grid */}
        <div className="grid grid-cols-4 gap-4 mb-5">
          {/* Search Text */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Search Text
            </label>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-[13px] h-[13px] text-[#6f7987]" />
              <input
                type="text"
                placeholder="Search by name or code"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                className="w-full h-[40px] pl-10 pr-4 bg-[#fdfdfd] border border-[#c5cbd3] rounded-lg text-[14px] text-[#6f7987] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* From Date */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Joining Date (From)
            </label>
            <input
              type="date"
              value={fromDate}
              onChange={(e) => setFromDate(e.target.value)}
              className="w-full h-[40px] px-[20px] py-[8px] border border-[#c5cbd3] rounded-lg text-[14px] text-[#1c1e21] focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* To Date */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Joining Date (To)
            </label>
            <input
              type="date"
              value={toDate}
              onChange={(e) => setToDate(e.target.value)}
              className="w-full h-[40px] px-[20px] py-[8px] border border-[#c5cbd3] rounded-lg text-[14px] text-[#1c1e21] focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Status */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Status
            </label>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="w-full h-[40px] px-[20px] py-[8px] border border-[#c5cbd3] rounded-lg text-[14px] text-[#1c1e21] focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">All Status</option>
              <option value="active">Active</option>
              <option value="pending">Pending</option>
              <option value="rejected">Rejected</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          <button
            onClick={handleGenerateReport}
            className="flex items-center gap-2 h-[40px] px-[20px] py-[8px] bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-[14px] font-medium"
          >
            <FileDown className="w-4 h-4" />
            Generate Report
          </button>
          <button
            onClick={handleResetFilters}
            className="flex items-center gap-2 h-[40px] px-[20px] py-[8px] border border-[#c5cbd3] text-[#1c1e21] rounded-lg hover:bg-gray-50 transition-colors text-[14px] font-medium"
          >
            <RotateCcw className="w-4 h-4" />
            Reset Filters
          </button>
        </div>
      </div>

      {/* Empty State */}
      {!reportGenerated && (
        <div className="bg-white border border-[#eceff3] rounded-xl p-12 text-center shadow-sm">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-50 mb-4">
            <FileDown className="w-8 h-8 text-blue-600" />
          </div>
          <h3 className="text-lg font-semibold text-[#131313] mb-2">No Report Generated</h3>
          <p className="text-sm text-gray-600">Select filters and generate employee report.</p>
        </div>
      )}

      {/* Summary Cards */}
      {reportGenerated && filteredData.length > 0 && (
        <>
          <div className="grid grid-cols-5 gap-4 mb-6">
            {/* Total Employees */}
            <div className="bg-white border border-[#eceff3] rounded-xl p-5 shadow-sm">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
                  <Users className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Total Employees</p>
                  <p className="text-2xl font-semibold text-[#131313]">{totalEmployees}</p>
                </div>
              </div>
            </div>

            {/* Active Employees */}
            <div className="bg-white border border-[#eceff3] rounded-xl p-5 shadow-sm">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-lg bg-green-50 flex items-center justify-center">
                  <UserCheck className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Active Employees</p>
                  <p className="text-2xl font-semibold text-green-600">{activeEmployees}</p>
                </div>
              </div>
            </div>

            {/* Inactive Employees */}
            <div className="bg-white border border-[#eceff3] rounded-xl p-5 shadow-sm">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center">
                  <UserX className="w-5 h-5 text-gray-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Inactive Employees</p>
                  <p className="text-2xl font-semibold text-gray-600">{inactiveEmployees}</p>
                </div>
              </div>
            </div>

            {/* Departments Covered */}
            <div className="bg-white border border-[#eceff3] rounded-xl p-5 shadow-sm">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-lg bg-purple-50 flex items-center justify-center">
                  <Building2 className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Departments Covered</p>
                  <p className="text-2xl font-semibold text-purple-600">{departmentsCovered}</p>
                </div>
              </div>
            </div>

            {/* Generated Date */}
            <div className="bg-white border border-[#eceff3] rounded-xl p-5 shadow-sm">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-lg bg-orange-50 flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-orange-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Generated Date</p>
                  <p className="text-sm font-semibold text-[#131313]">{generatedDate}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Table */}
          <div className="bg-white border border-[#e8ceff] rounded-xl overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-[#f6f6f6]">
                    <th className="px-[20px] py-[14px] text-left text-[16px] font-normal text-[#6f7987] border-b border-[#e8ceff]">Employee Code</th>
                    <th className="px-[20px] py-[14px] text-left text-[16px] font-normal text-[#6f7987] border-b border-[#e8ceff]">Name</th>
                    <th className="px-[20px] py-[14px] text-left text-[16px] font-normal text-[#6f7987] border-b border-[#e8ceff]">Joining Date</th>
                    <th className="px-[20px] py-[14px] text-left text-[16px] font-normal text-[#6f7987] border-b border-[#e8ceff]">Department</th>
                    <th className="px-[20px] py-[14px] text-left text-[16px] font-normal text-[#6f7987] border-b border-[#e8ceff]">Designation</th>
                    <th className="px-[20px] py-[14px] text-left text-[16px] font-normal text-[#6f7987] border-b border-[#e8ceff]">Reporting Manager</th>
                    <th className="px-[20px] py-[14px] text-left text-[16px] font-normal text-[#6f7987] border-b border-[#e8ceff]">Action</th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {filteredData.map((employee, index) => (
                    <tr key={index} className="h-[48px] hover:bg-[#f9f9f9] transition-colors">
                      <td className="px-[20px] py-[12px] text-[16px] font-normal text-[#141518] border-b border-[#e8ceff]">{employee.employeeCode}</td>
                      <td className="px-[20px] py-[12px] text-[16px] font-normal text-[#141518] border-b border-[#e8ceff]">{employee.name}</td>
                      <td className="px-[20px] py-[12px] text-[16px] font-normal text-[#141518] border-b border-[#e8ceff]">
                        {new Date(employee.joiningDate).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' })}
                      </td>
                      <td className="px-[20px] py-[12px] text-[16px] font-normal text-[#141518] border-b border-[#e8ceff]">{employee.department}</td>
                      <td className="px-[20px] py-[12px] text-[16px] font-normal text-[#141518] border-b border-[#e8ceff]">{employee.designation}</td>
                      <td className="px-[20px] py-[12px] text-[16px] font-normal text-[#141518] border-b border-[#e8ceff]">{employee.reportingManager}</td>
                      <td className="px-[20px] py-[12px] border-b border-[#e8ceff]">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => handleViewDetails(employee.employeeCode)}
                            className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                            title="View Details"
                          >
                            <Eye className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => handleDownloadReport(employee.employeeCode)}
                            className="p-2 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors"
                            title="Download Report"
                          >
                            <Download className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Bottom Actions */}
          <div className="flex items-center justify-between mt-6">
            <button className="flex items-center gap-[11px] h-[40px] px-[20px] py-[8px] border border-[#c5cbd3] text-[#1c1e21] rounded-lg hover:bg-gray-50 transition-colors text-[14px] font-medium">
              <Download className="w-4 h-4" />
              Download CSV
            </button>
            <div className="text-sm text-gray-600">
              Showing {filteredData.length} records
            </div>
          </div>
        </>
      )}

      {/* No Data Empty State */}
      {reportGenerated && filteredData.length === 0 && (
        <div className="bg-white border border-[#eceff3] rounded-xl p-12 text-center shadow-sm">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-50 mb-4">
            <Users className="w-8 h-8 text-gray-400" />
          </div>
          <h3 className="text-lg font-semibold text-[#131313] mb-2">No Employee Records Found</h3>
          <p className="text-sm text-gray-600">No employee records found for selected filters.</p>
        </div>
      )}
    </div>
  );
}
