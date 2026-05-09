import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  Search,
  Filter,
  Calendar,
  Users,
  DollarSign,
  Info,
  CheckCircle,
  X,
  ChevronDown
} from 'lucide-react';

interface Employee {
  id: string;
  name: string;
  employeeId: string;
  department: string;
  designation: string;
  location: string;
  salaryStructure: string;
}

export function CreateNewPeriod() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    periodName: '',
    payrollMonth: '',
    payrollType: '',
    description: '',
    startDate: '',
    endDate: '',
    payDate: '',
    attendanceCutoff: '',
    overtimeCutoff: '',
    leaveLockDate: '',
    employeeSelection: 'all',
    includeAttendance: true,
    includeLeave: true,
    includeOvertime: true,
    includeIncentives: false,
    includeOneTimeDeductions: false,
    lockAttendance: true,
    autoGeneratePayslips: true,
    autoSendPayslips: false,
    primaryReviewer: '',
    secondaryReviewer: '',
    financeApprover: '',
    requireFinalApproval: true,
    status: 'draft'
  });

  const [selectedEmployees, setSelectedEmployees] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    department: '',
    designation: '',
    location: '',
    employmentType: '',
    status: ''
  });

  const mockEmployees: Employee[] = [
    { id: '1', name: 'Rajesh Kumar', employeeId: 'EMP001', department: 'Engineering', designation: 'Senior Software Engineer', location: 'Bangalore', salaryStructure: 'Tech Grade A' },
    { id: '2', name: 'Priya Sharma', employeeId: 'EMP002', department: 'Product', designation: 'Product Manager', location: 'Mumbai', salaryStructure: 'Management Grade B' },
    { id: '3', name: 'Amit Patel', employeeId: 'EMP003', department: 'Design', designation: 'UX Designer', location: 'Bangalore', salaryStructure: 'Design Grade A' },
    { id: '4', name: 'Sneha Reddy', employeeId: 'EMP004', department: 'HR', designation: 'HR Manager', location: 'Hyderabad', salaryStructure: 'Management Grade B' },
    { id: '5', name: 'Vikram Singh', employeeId: 'EMP005', department: 'Sales', designation: 'Sales Executive', location: 'Delhi', salaryStructure: 'Sales Grade C' },
  ];

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedEmployees(mockEmployees.map(emp => emp.id));
    } else {
      setSelectedEmployees([]);
    }
  };

  const handleEmployeeSelect = (id: string, checked: boolean) => {
    if (checked) {
      setSelectedEmployees([...selectedEmployees, id]);
    } else {
      setSelectedEmployees(selectedEmployees.filter(empId => empId !== id));
    }
  };

  const estimatedGross = 125000000;
  const estimatedDeductions = 25000000;
  const estimatedNet = estimatedGross - estimatedDeductions;

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="min-h-screen bg-[#f8f8f8]">
      {/* Sticky Header */}
      <div className="sticky top-0 z-30 bg-white border-b border-[#eceff3] shadow-sm">
        <div className="px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={() => navigate('/payroll/periods')}
                className="p-2 hover:bg-gray-50 rounded-lg transition-colors"
              >
                <ArrowLeft className="w-5 h-5 text-gray-600" />
              </button>
              <div>
                <h1 className="text-2xl font-semibold text-[#131313]">Create New Payroll Period</h1>
                <p className="text-sm text-gray-600 mt-1">Set up a new payroll cycle with employee selection and processing rules</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => navigate('/payroll/periods')}
                className="px-5 py-2.5 border border-[#eceff3] text-gray-700 rounded-2xl hover:bg-gray-50 transition-colors text-sm font-medium"
              >
                Cancel
              </button>
              <button className="px-5 py-2.5 border border-[#eceff3] text-gray-700 rounded-2xl hover:bg-gray-50 transition-colors text-sm font-medium">
                Save as Draft
              </button>
              <button className="px-5 py-2.5 bg-[#4b1b91] text-white rounded-2xl hover:bg-[#3d1575] transition-colors text-sm font-medium shadow-sm">
                Create Period
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="px-8 py-6">
        <div className="flex gap-6">
          {/* Main Content Area */}
          <div className="flex-1 space-y-6">
            {/* Period Details Card */}
            <div className="bg-white rounded-2xl border border-[#eceff3] shadow-sm">
              <div className="px-6 py-4 border-b border-[#eceff3]">
                <h2 className="text-lg font-semibold text-[#131313]">Period Details</h2>
                <p className="text-sm text-gray-600 mt-1">Define the basic information for this payroll period</p>
              </div>
              <div className="p-6 space-y-5">
                <div className="grid grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Payroll Period Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.periodName}
                      onChange={(e) => setFormData({ ...formData, periodName: e.target.value })}
                      placeholder="e.g., May 2026 Payroll"
                      className="w-full px-4 py-2.5 border border-[#eceff3] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#4b1b91] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Payroll Month <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="month"
                      value={formData.payrollMonth}
                      onChange={(e) => setFormData({ ...formData, payrollMonth: e.target.value })}
                      className="w-full px-4 py-2.5 border border-[#eceff3] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#4b1b91] focus:border-transparent"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Payroll Type <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={formData.payrollType}
                    onChange={(e) => setFormData({ ...formData, payrollType: e.target.value })}
                    className="w-full px-4 py-2.5 border border-[#eceff3] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#4b1b91] focus:border-transparent"
                  >
                    <option value="">Select payroll type</option>
                    <option value="monthly">Monthly Payroll</option>
                    <option value="weekly">Weekly Payroll</option>
                    <option value="biweekly">Bi-weekly Payroll</option>
                    <option value="adhoc">Ad-hoc Payroll</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                  <textarea
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    rows={3}
                    placeholder="Add any special notes or instructions for this payroll period..."
                    className="w-full px-4 py-2.5 border border-[#eceff3] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#4b1b91] focus:border-transparent resize-none"
                  />
                </div>
              </div>
            </div>

            {/* Date Settings Card */}
            <div className="bg-white rounded-2xl border border-[#eceff3] shadow-sm">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-[#131313]">Date Settings</h2>
                <p className="text-sm text-gray-600 mt-1">Configure important dates for payroll processing and cutoffs</p>
              </div>
              <div className="p-6 space-y-5">
                <div className="grid grid-cols-3 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Period Start Date <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="date"
                      value={formData.startDate}
                      onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                      className="w-full px-4 py-2.5 border border-[#eceff3] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#4b1b91] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Period End Date <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="date"
                      value={formData.endDate}
                      onChange={(e) => setFormData({ ...formData, endDate: e.target.value })}
                      className="w-full px-4 py-2.5 border border-[#eceff3] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#4b1b91] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Salary Pay Date <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="date"
                      value={formData.payDate}
                      onChange={(e) => setFormData({ ...formData, payDate: e.target.value })}
                      className="w-full px-4 py-2.5 border border-[#eceff3] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#4b1b91] focus:border-transparent"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Attendance Cutoff Date</label>
                    <input
                      type="date"
                      value={formData.attendanceCutoff}
                      onChange={(e) => setFormData({ ...formData, attendanceCutoff: e.target.value })}
                      className="w-full px-4 py-2.5 border border-[#eceff3] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#4b1b91] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Overtime Cutoff Date</label>
                    <input
                      type="date"
                      value={formData.overtimeCutoff}
                      onChange={(e) => setFormData({ ...formData, overtimeCutoff: e.target.value })}
                      className="w-full px-4 py-2.5 border border-[#eceff3] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#4b1b91] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Leave Lock Date</label>
                    <input
                      type="date"
                      value={formData.leaveLockDate}
                      onChange={(e) => setFormData({ ...formData, leaveLockDate: e.target.value })}
                      className="w-full px-4 py-2.5 border border-[#eceff3] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#4b1b91] focus:border-transparent"
                    />
                  </div>
                </div>
                <div className="bg-[#ede9f6] border border-[#d4c5e8] rounded-lg p-4 flex items-start gap-3">
                  <Info className="w-5 h-5 text-[#4b1b91] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-[#4b1b91]">Payroll Cutoff Information</p>
                    <p className="text-sm text-gray-700 mt-1">
                      Data captured after the cutoff dates will not be included in this payroll cycle. Attendance, overtime, and leave records must be finalized before their respective cutoff dates.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Select Employees Card */}
            <div className="bg-white rounded-2xl border border-[#eceff3] shadow-sm">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-[#131313]">Select Employees</h2>
                <p className="text-sm text-gray-600 mt-1">Choose which employees to include in this payroll period</p>
              </div>
              <div className="p-6 space-y-5">
                {/* Selection Mode */}
                <div className="flex items-center gap-6">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="employeeSelection"
                      value="all"
                      checked={formData.employeeSelection === 'all'}
                      onChange={(e) => setFormData({ ...formData, employeeSelection: e.target.value })}
                      className="w-4 h-4 text-[#4b1b91] focus:ring-[#4b1b91]"
                    />
                    <span className="text-sm font-medium text-gray-700">All Active Employees</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="employeeSelection"
                      value="specific"
                      checked={formData.employeeSelection === 'specific'}
                      onChange={(e) => setFormData({ ...formData, employeeSelection: e.target.value })}
                      className="w-4 h-4 text-[#4b1b91] focus:ring-[#4b1b91]"
                    />
                    <span className="text-sm font-medium text-gray-700">Specific Employees / Groups</span>
                  </label>
                </div>

                {/* Search and Filters */}
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

                {/* Filter Chips */}
                <div className="flex items-center gap-3 flex-wrap">
                  <select
                    value={filters.department}
                    onChange={(e) => setFilters({ ...filters, department: e.target.value })}
                    className="h-[40px] px-[20px] py-[8px] border border-[#c5cbd3] rounded-lg text-[14px] text-[#1c1e21] focus:outline-none focus:ring-2 focus:ring-[#4b1b91]"
                  >
                    <option value="">All Departments</option>
                    <option value="engineering">Engineering</option>
                    <option value="product">Product</option>
                    <option value="design">Design</option>
                    <option value="hr">HR</option>
                    <option value="sales">Sales</option>
                  </select>
                  <select
                    value={filters.designation}
                    onChange={(e) => setFilters({ ...filters, designation: e.target.value })}
                    className="h-[40px] px-[20px] py-[8px] border border-[#c5cbd3] rounded-lg text-[14px] text-[#1c1e21] focus:outline-none focus:ring-2 focus:ring-[#4b1b91]"
                  >
                    <option value="">All Designations</option>
                    <option value="engineer">Engineer</option>
                    <option value="manager">Manager</option>
                    <option value="designer">Designer</option>
                    <option value="executive">Executive</option>
                  </select>
                  <select
                    value={filters.location}
                    onChange={(e) => setFilters({ ...filters, location: e.target.value })}
                    className="h-[40px] px-[20px] py-[8px] border border-[#c5cbd3] rounded-lg text-[14px] text-[#1c1e21] focus:outline-none focus:ring-2 focus:ring-[#4b1b91]"
                  >
                    <option value="">All Locations</option>
                    <option value="bangalore">Bangalore</option>
                    <option value="mumbai">Mumbai</option>
                    <option value="delhi">Delhi</option>
                    <option value="hyderabad">Hyderabad</option>
                  </select>
                  <select
                    value={filters.employmentType}
                    onChange={(e) => setFilters({ ...filters, employmentType: e.target.value })}
                    className="h-[40px] px-[20px] py-[8px] border border-[#c5cbd3] rounded-lg text-[14px] text-[#1c1e21] focus:outline-none focus:ring-2 focus:ring-[#4b1b91]"
                  >
                    <option value="">Employment Type</option>
                    <option value="fulltime">Full-time</option>
                    <option value="parttime">Part-time</option>
                    <option value="contract">Contract</option>
                  </select>
                  <select
                    value={filters.status}
                    onChange={(e) => setFilters({ ...filters, status: e.target.value })}
                    className="h-[40px] px-[20px] py-[8px] border border-[#c5cbd3] rounded-lg text-[14px] text-[#1c1e21] focus:outline-none focus:ring-2 focus:ring-[#4b1b91]"
                  >
                    <option value="">Status</option>
                    <option value="active">Active</option>
                    <option value="onleave">On Leave</option>
                  </select>
                </div>

                {/* Employee Table */}
                <div className="border border-[#e8ceff] rounded-xl overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="bg-[#f6f6f6]">
                          <th className="px-[20px] py-[14px] text-left border-b border-[#e8ceff]">
                            <input
                              type="checkbox"
                              checked={selectedEmployees.length === mockEmployees.length}
                              onChange={(e) => handleSelectAll(e.target.checked)}
                              className="w-4 h-4 text-[#4b1b91] rounded border-[#e8ceff] focus:ring-[#4b1b91]"
                            />
                          </th>
                          <th className="px-[20px] py-[14px] text-left text-[16px] font-normal text-[#6f7987] border-b border-[#e8ceff]">Employee Name</th>
                          <th className="px-[20px] py-[14px] text-left text-[16px] font-normal text-[#6f7987] border-b border-[#e8ceff]">Employee ID</th>
                          <th className="px-[20px] py-[14px] text-left text-[16px] font-normal text-[#6f7987] border-b border-[#e8ceff]">Department</th>
                          <th className="px-[20px] py-[14px] text-left text-[16px] font-normal text-[#6f7987] border-b border-[#e8ceff]">Designation</th>
                          <th className="px-[20px] py-[14px] text-left text-[16px] font-normal text-[#6f7987] border-b border-[#e8ceff]">Work Location</th>
                          <th className="px-[20px] py-[14px] text-left text-[16px] font-normal text-[#6f7987] border-b border-[#e8ceff]">Salary Structure</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white">
                        {mockEmployees.map((employee) => (
                          <tr key={employee.id} className="h-[48px] hover:bg-[#f9f9f9] transition-colors">
                            <td className="px-[20px] py-[12px] border-b border-[#e8ceff]">
                              <input
                                type="checkbox"
                                checked={selectedEmployees.includes(employee.id)}
                                onChange={(e) => handleEmployeeSelect(employee.id, e.target.checked)}
                                className="w-4 h-4 text-[#4b1b91] rounded border-[#e8ceff] focus:ring-[#4b1b91]"
                              />
                            </td>
                            <td className="px-[20px] py-[12px] text-[16px] font-normal text-[#141518] border-b border-[#e8ceff]">{employee.name}</td>
                            <td className="px-[20px] py-[12px] text-[16px] font-normal text-[#141518] border-b border-[#e8ceff]">{employee.employeeId}</td>
                            <td className="px-[20px] py-[12px] text-[16px] font-normal text-[#141518] border-b border-[#e8ceff]">{employee.department}</td>
                            <td className="px-[20px] py-[12px] text-[16px] font-normal text-[#141518] border-b border-[#e8ceff]">{employee.designation}</td>
                            <td className="px-[20px] py-[12px] text-[16px] font-normal text-[#141518] border-b border-[#e8ceff]">{employee.location}</td>
                            <td className="px-[20px] py-[12px] text-[16px] font-normal text-[#141518] border-b border-[#e8ceff]">{employee.salaryStructure}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Download CSV & Pagination */}
                <div className="flex items-center justify-between">
                  <button className="flex items-center gap-[11px] h-[40px] px-[20px] py-[8px] border border-[#c5cbd3] text-[#1c1e21] rounded-lg hover:bg-gray-50 transition-colors text-[14px] font-medium">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    Download CSV
                  </button>
                  <div className="flex items-center gap-[32px]">
                    <button className="px-[9px] py-[5px] border border-[#e1e1e1] text-[#8d96a3] rounded-[7px] hover:bg-gray-50 transition-colors text-[14px] font-medium">
                      Prev
                    </button>
                    <div className="flex items-center gap-[7px]">
                      <button className="bg-[#4b1b91] size-[32px] p-[10px] rounded-[4px] text-white text-[14px] font-medium flex items-center justify-center">1</button>
                      <button className="size-[32px] p-[10px] rounded-[4px] text-[#8d96a3] text-[14px] font-medium flex items-center justify-center hover:bg-gray-50 transition-colors">2</button>
                      <button className="size-[32px] p-[10px] rounded-[4px] text-[#8d96a3] text-[14px] font-medium flex items-center justify-center hover:bg-gray-50 transition-colors">3</button>
                      <button className="size-[32px] p-[10px] rounded-[4px] text-[#8d96a3] text-[14px] font-medium flex items-center justify-center hover:bg-gray-50 transition-colors">4</button>
                      <button className="size-[32px] p-[10px] rounded-[4px] text-[#8d96a3] text-[14px] font-medium flex items-center justify-center hover:bg-gray-50 transition-colors">5</button>
                    </div>
                    <button className="px-[9px] py-[5px] border border-[#e1e1e1] text-[#414141] rounded-[7px] hover:bg-gray-50 transition-colors text-[14px] font-medium">
                      Next
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Processing Rules Card */}
            <div className="bg-white rounded-2xl border border-[#eceff3] shadow-sm">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-[#131313]">Processing Rules</h2>
                <p className="text-sm text-gray-600 mt-1">Configure what data should be included in payroll calculations</p>
              </div>
              <div className="p-6 space-y-4">
                <label className="flex items-start justify-between cursor-pointer p-4 rounded-lg border border-[#eceff3] hover:bg-gray-50 transition-colors">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-[#131313]">Include Attendance Data</p>
                    <p className="text-xs text-gray-600 mt-1">Calculate salary based on actual attendance records and apply LOP for absences</p>
                  </div>
                  <div className="relative">
                    <input
                      type="checkbox"
                      checked={formData.includeAttendance}
                      onChange={(e) => setFormData({ ...formData, includeAttendance: e.target.checked })}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-[#4b1b91] rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#4b1b91]"></div>
                  </div>
                </label>

                <label className="flex items-start justify-between cursor-pointer p-4 rounded-lg border border-[#eceff3] hover:bg-gray-50 transition-colors">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-[#131313]">Apply Approved Leave Adjustments</p>
                    <p className="text-xs text-gray-600 mt-1">Include approved paid leaves and exclude them from LOP calculations</p>
                  </div>
                  <div className="relative">
                    <input
                      type="checkbox"
                      checked={formData.includeLeave}
                      onChange={(e) => setFormData({ ...formData, includeLeave: e.target.checked })}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-[#4b1b91] rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#4b1b91]"></div>
                  </div>
                </label>

                <label className="flex items-start justify-between cursor-pointer p-4 rounded-lg border border-[#eceff3] hover:bg-gray-50 transition-colors">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-[#131313]">Process Overtime Hours</p>
                    <p className="text-xs text-gray-600 mt-1">Calculate and add overtime payments based on approved overtime records</p>
                  </div>
                  <div className="relative">
                    <input
                      type="checkbox"
                      checked={formData.includeOvertime}
                      onChange={(e) => setFormData({ ...formData, includeOvertime: e.target.checked })}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-[#4b1b91] rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#4b1b91]"></div>
                  </div>
                </label>

                <label className="flex items-start justify-between cursor-pointer p-4 rounded-lg border border-[#eceff3] hover:bg-gray-50 transition-colors">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-[#131313]">Include Incentives & Bonuses</p>
                    <p className="text-xs text-gray-600 mt-1">Add approved performance bonuses and incentives to the payroll</p>
                  </div>
                  <div className="relative">
                    <input
                      type="checkbox"
                      checked={formData.includeIncentives}
                      onChange={(e) => setFormData({ ...formData, includeIncentives: e.target.checked })}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-[#4b1b91] rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#4b1b91]"></div>
                  </div>
                </label>

                <label className="flex items-start justify-between cursor-pointer p-4 rounded-lg border border-[#eceff3] hover:bg-gray-50 transition-colors">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-[#131313]">Apply One-time Deductions</p>
                    <p className="text-xs text-gray-600 mt-1">Include pending one-time deductions like loan recoveries or advance adjustments</p>
                  </div>
                  <div className="relative">
                    <input
                      type="checkbox"
                      checked={formData.includeOneTimeDeductions}
                      onChange={(e) => setFormData({ ...formData, includeOneTimeDeductions: e.target.checked })}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-[#4b1b91] rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#4b1b91]"></div>
                  </div>
                </label>

                <label className="flex items-start justify-between cursor-pointer p-4 rounded-lg border border-[#eceff3] hover:bg-gray-50 transition-colors">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-[#131313]">Lock Attendance After Processing</p>
                    <p className="text-xs text-gray-600 mt-1">Prevent attendance modifications once payroll processing begins</p>
                  </div>
                  <div className="relative">
                    <input
                      type="checkbox"
                      checked={formData.lockAttendance}
                      onChange={(e) => setFormData({ ...formData, lockAttendance: e.target.checked })}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-[#4b1b91] rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#4b1b91]"></div>
                  </div>
                </label>

                <label className="flex items-start justify-between cursor-pointer p-4 rounded-lg border border-[#eceff3] hover:bg-gray-50 transition-colors">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-[#131313]">Auto-generate Payslips</p>
                    <p className="text-xs text-gray-600 mt-1">Automatically generate PDF payslips after payroll approval</p>
                  </div>
                  <div className="relative">
                    <input
                      type="checkbox"
                      checked={formData.autoGeneratePayslips}
                      onChange={(e) => setFormData({ ...formData, autoGeneratePayslips: e.target.checked })}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-[#4b1b91] rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#4b1b91]"></div>
                  </div>
                </label>

                <label className="flex items-start justify-between cursor-pointer p-4 rounded-lg border border-[#eceff3] hover:bg-gray-50 transition-colors">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-[#131313]">Auto-send Payslips to Employees</p>
                    <p className="text-xs text-gray-600 mt-1">Email payslips to employees automatically after generation</p>
                  </div>
                  <div className="relative">
                    <input
                      type="checkbox"
                      checked={formData.autoSendPayslips}
                      onChange={(e) => setFormData({ ...formData, autoSendPayslips: e.target.checked })}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-[#4b1b91] rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#4b1b91]"></div>
                  </div>
                </label>
              </div>
            </div>

            {/* Approval Setup Card */}
            <div className="bg-white rounded-2xl border border-[#eceff3] shadow-sm">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-[#131313]">Approval Setup</h2>
                <p className="text-sm text-gray-600 mt-1">Define approval workflow and reviewers for this payroll period</p>
              </div>
              <div className="p-6 space-y-5">
                <div className="grid grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Primary Reviewer</label>
                    <select
                      value={formData.primaryReviewer}
                      onChange={(e) => setFormData({ ...formData, primaryReviewer: e.target.value })}
                      className="w-full px-4 py-2.5 border border-[#eceff3] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#4b1b91] focus:border-transparent"
                    >
                      <option value="">Select primary reviewer</option>
                      <option value="reviewer1">Sarah Johnson - HR Manager</option>
                      <option value="reviewer2">Michael Chen - Payroll Lead</option>
                      <option value="reviewer3">Priya Kumar - HR Director</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Secondary Reviewer</label>
                    <select
                      value={formData.secondaryReviewer}
                      onChange={(e) => setFormData({ ...formData, secondaryReviewer: e.target.value })}
                      className="w-full px-4 py-2.5 border border-[#eceff3] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#4b1b91] focus:border-transparent"
                    >
                      <option value="">Select secondary reviewer (optional)</option>
                      <option value="reviewer1">Sarah Johnson - HR Manager</option>
                      <option value="reviewer2">Michael Chen - Payroll Lead</option>
                      <option value="reviewer3">Priya Kumar - HR Director</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Finance Approver</label>
                  <select
                    value={formData.financeApprover}
                    onChange={(e) => setFormData({ ...formData, financeApprover: e.target.value })}
                    className="w-full px-4 py-2.5 border border-[#eceff3] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#4b1b91] focus:border-transparent"
                  >
                    <option value="">Select finance approver</option>
                    <option value="approver1">David Wong - Finance Manager</option>
                    <option value="approver2">Lisa Anderson - CFO</option>
                    <option value="approver3">Raj Malhotra - Finance Director</option>
                  </select>
                </div>
                <label className="flex items-start justify-between cursor-pointer p-4 rounded-lg border border-[#eceff3] hover:bg-gray-50 transition-colors">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-[#131313]">Final Approval Required</p>
                    <p className="text-xs text-gray-600 mt-1">Require final approval before disbursing payments</p>
                  </div>
                  <div className="relative">
                    <input
                      type="checkbox"
                      checked={formData.requireFinalApproval}
                      onChange={(e) => setFormData({ ...formData, requireFinalApproval: e.target.checked })}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-[#4b1b91] rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#4b1b91]"></div>
                  </div>
                </label>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Current Status</label>
                  <select
                    value={formData.status}
                    onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                    className="w-full px-4 py-2.5 border border-[#eceff3] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#4b1b91] focus:border-transparent"
                  >
                    <option value="draft">Draft</option>
                    <option value="pending">Pending Review</option>
                    <option value="ready">Ready to Process</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Right Sticky Summary Panel */}
          <div className="w-96">
            <div className="sticky top-24 space-y-4">
              <div className="bg-white rounded-2xl border border-[#eceff3] shadow-sm">
                <div className="px-6 py-4 bg-gradient-to-r from-[#4b1b91] to-[#3d1575] rounded-t-2xl">
                  <h3 className="text-lg font-semibold text-white">Payroll Summary</h3>
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex items-center gap-3 pb-4 border-b border-gray-200">
                    <div className="w-10 h-10 rounded-lg bg-[#ede9f6] flex items-center justify-center">
                      <Calendar className="w-5 h-5 text-[#4b1b91]" />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs text-gray-500">Payroll Month</p>
                      <p className="text-sm font-semibold text-[#131313]">
                        {formData.payrollMonth ? new Date(formData.payrollMonth + '-01').toLocaleDateString('en-US', { month: 'long', year: 'numeric' }) : 'Not selected'}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 pb-4 border-b border-gray-200">
                    <div className="w-10 h-10 rounded-lg bg-green-50 flex items-center justify-center">
                      <Users className="w-5 h-5 text-green-600" />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs text-gray-500">Total Selected Employees</p>
                      <p className="text-sm font-semibold text-[#131313]">{selectedEmployees.length}</p>
                    </div>
                  </div>

                  <div className="space-y-3 pb-4 border-b border-gray-200">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Estimated Gross Payout</span>
                      <span className="text-sm font-semibold text-[#131313]">{formatCurrency(estimatedGross)}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Estimated Deductions</span>
                      <span className="text-sm font-semibold text-red-600">- {formatCurrency(estimatedDeductions)}</span>
                    </div>
                  </div>

                  <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                    <span className="text-base font-semibold text-[#131313]">Estimated Net Payout</span>
                    <span className="text-lg font-bold text-[#4b1b91]">{formatCurrency(estimatedNet)}</span>
                  </div>

                  <div className="flex items-center gap-3 pb-4 border-b border-gray-200">
                    <div className="w-10 h-10 rounded-lg bg-purple-50 flex items-center justify-center">
                      <Calendar className="w-5 h-5 text-purple-600" />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs text-gray-500">Pay Date</p>
                      <p className="text-sm font-semibold text-[#131313]">
                        {formData.payDate ? new Date(formData.payDate).toLocaleDateString('en-US', { day: '2-digit', month: 'short', year: 'numeric' }) : 'Not set'}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Current Status</span>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      formData.status === 'draft' ? 'bg-gray-100 text-gray-700 border border-[#eceff3]' :
                      formData.status === 'pending' ? 'bg-yellow-100 text-yellow-700 border border-yellow-200' :
                      'bg-green-100 text-green-700 border border-green-200'
                    }`}>
                      {formData.status === 'draft' ? 'Draft' : formData.status === 'pending' ? 'Pending Review' : 'Ready to Process'}
                    </span>
                  </div>
                </div>
              </div>

              <button className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-[#4b1b91] text-white rounded-2xl hover:bg-[#3d1575] transition-colors text-sm font-semibold shadow-lg">
                <CheckCircle className="w-5 h-5" />
                Create Payroll Period
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky Footer Action Bar */}
      <div className="sticky bottom-0 z-20 bg-white border-t border-[#eceff3] shadow-lg">
        <div className="px-8 py-4 flex items-center justify-between">
          <p className="text-sm text-gray-600">
            Configure all required fields to create the payroll period
          </p>
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate('/payroll/periods')}
              className="px-5 py-2.5 border border-[#eceff3] text-gray-700 rounded-2xl hover:bg-gray-50 transition-colors text-sm font-medium"
            >
              Cancel
            </button>
            <button className="px-5 py-2.5 border border-[#eceff3] text-gray-700 rounded-2xl hover:bg-gray-50 transition-colors text-sm font-medium">
              Save as Draft
            </button>
            <button className="px-5 py-2.5 bg-[#4b1b91] text-white rounded-2xl hover:bg-[#3d1575] transition-colors text-sm font-medium shadow-sm">
              Create Payroll Period
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
