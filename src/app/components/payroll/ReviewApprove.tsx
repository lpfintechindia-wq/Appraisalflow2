import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ArrowLeft, Info, Edit3, FileText, ChevronRight } from 'lucide-react';

export function ReviewApprove() {
  const navigate = useNavigate();
  const location = useLocation();
  const period = location.state?.period || { period: 'April 2026' };

  const [selectedEmployee, setSelectedEmployee] = useState('EMP001');

  const employeeData = {
    name: 'John Doe',
    employeeId: 'EMP001',
    designation: 'Senior Software Engineer',
    department: 'Engineering',
    bankAccount: 'XXXX 4532',
    earnings: [
      { component: 'Basic Salary', amount: 48000 },
      { component: 'HRA', amount: 24000 },
      { component: 'Special Allowance', amount: 18000 },
      { component: 'Conveyance Allowance', amount: 3200 },
      { component: 'Medical Allowance', amount: 1800 },
    ],
    deductions: [
      { component: 'Provident Fund (PF)', amount: 11400 },
      { component: 'Income Tax (TDS)', amount: 14250 },
      { component: 'Professional Tax', amount: 200 },
      { component: 'Loan Repayment', amount: 5000 },
    ],
    payableDays: 30,
    lop: 0,
  };

  const totalEarnings = employeeData.earnings.reduce((sum, e) => sum + e.amount, 0);
  const totalDeductions = employeeData.deductions.reduce((sum, d) => sum + d.amount, 0);
  const netPay = totalEarnings - totalDeductions;

  return (
    <div className="p-6 bg-[#f5f7fa] min-h-full">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-gray-600 mb-6">
        <button onClick={() => navigate('/payroll/periods')} className="hover:text-[#2e75b6]">
          Payroll Periods
        </button>
        <ChevronRight className="w-4 h-4" />
        <button onClick={() => navigate('/payroll/run', { state: { period } })} className="hover:text-[#2e75b6]">
          Run Payroll
        </button>
        <ChevronRight className="w-4 h-4" />
        <span className="text-gray-900 font-medium">Review & Approve</span>
      </div>

      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-2">
          <button
            onClick={() => navigate('/payroll/run', { state: { period } })}
            className="p-2 hover:bg-white rounded-lg transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-gray-600" />
          </button>
          <h1 className="text-2xl font-semibold text-gray-900 cursor-pointer hover:text-[#2e75b6] active:text-[#1e4d8c] transition-colors select-none">
            Review & Approve Payroll
          </h1>
        </div>
        <p className="text-sm text-gray-600 ml-14 cursor-pointer hover:text-gray-900 active:text-[#2e75b6] transition-colors select-none">
          Review detailed salary breakdown for {period.period}
        </p>
      </div>

      {/* Employee Selector */}
      <div className="bg-white rounded-lg border border-[#e5e7eb] p-4 mb-6 shadow-sm">
        <label className="block text-sm font-medium text-gray-700 mb-2">Select Employee</label>
        <select
          value={selectedEmployee}
          onChange={(e) => setSelectedEmployee(e.target.value)}
          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#2e75b6]"
        >
          <option value="EMP001">John Doe (EMP001) - Senior Software Engineer</option>
          <option value="EMP002">Jane Smith (EMP002) - Marketing Manager</option>
          <option value="EMP003">Mike Johnson (EMP003) - Sales Executive</option>
        </select>
      </div>

      {/* Info Alert */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6 flex items-start gap-3">
        <Info className="w-5 h-5 text-blue-600 mt-0.5" />
        <div className="flex-1">
          <h3 className="text-sm font-medium text-blue-900 mb-1">Salary Calculation Information</h3>
          <p className="text-sm text-blue-700">
            This salary is calculated based on {employeeData.payableDays} payable days with {employeeData.lop} LOP days.
            All statutory deductions (PF, TDS) have been applied as per current tax slab and company policy.
          </p>
        </div>
      </div>

      {/* Employee Details Card */}
      <div className="bg-white rounded-lg border border-[#e5e7eb] p-6 mb-6 shadow-sm">
        <h3 className="text-base font-semibold text-gray-900 mb-4 cursor-pointer hover:text-[#2e75b6] active:text-[#1e4d8c] transition-colors select-none">
          Employee Information
        </h3>
        <div className="grid grid-cols-4 gap-6">
          <div>
            <div className="text-sm text-gray-600 mb-1">Employee Name</div>
            <div className="text-base font-medium text-gray-900">{employeeData.name}</div>
          </div>
          <div>
            <div className="text-sm text-gray-600 mb-1">Employee ID</div>
            <div className="text-base font-medium text-gray-900">{employeeData.employeeId}</div>
          </div>
          <div>
            <div className="text-sm text-gray-600 mb-1">Designation</div>
            <div className="text-base font-medium text-gray-900">{employeeData.designation}</div>
          </div>
          <div>
            <div className="text-sm text-gray-600 mb-1">Bank Account</div>
            <div className="text-base font-medium text-gray-900">{employeeData.bankAccount}</div>
          </div>
        </div>
      </div>

      {/* Salary Breakdown */}
      <div className="grid grid-cols-2 gap-6 mb-6">
        {/* Earnings */}
        <div className="bg-white rounded-lg border border-[#e5e7eb] shadow-sm overflow-hidden">
          <div className="px-6 py-4 bg-green-50 border-b border-green-200">
            <h3 className="text-base font-semibold text-green-900 cursor-pointer hover:text-green-700 active:text-green-800 transition-colors select-none">
              Earnings
            </h3>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {employeeData.earnings.map((earning, index) => (
                <div key={index} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0">
                  <span className="text-sm text-gray-700">{earning.component}</span>
                  <span className="text-base font-semibold text-gray-900">₹{earning.amount.toLocaleString()}</span>
                </div>
              ))}
              <div className="pt-4 border-t-2 border-gray-200 flex items-center justify-between">
                <span className="text-base font-semibold text-gray-900">Total Earnings</span>
                <span className="text-xl font-bold text-green-600">₹{totalEarnings.toLocaleString()}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Deductions */}
        <div className="bg-white rounded-lg border border-[#e5e7eb] shadow-sm overflow-hidden">
          <div className="px-6 py-4 bg-red-50 border-b border-red-200">
            <h3 className="text-base font-semibold text-red-900 cursor-pointer hover:text-red-700 active:text-red-800 transition-colors select-none">Deductions</h3>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {employeeData.deductions.map((deduction, index) => (
                <div key={index} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0">
                  <span className="text-sm text-gray-700">{deduction.component}</span>
                  <span className="text-base font-semibold text-gray-900">₹{deduction.amount.toLocaleString()}</span>
                </div>
              ))}
              <div className="pt-4 border-t-2 border-gray-200 flex items-center justify-between">
                <span className="text-base font-semibold text-gray-900">Total Deductions</span>
                <span className="text-xl font-bold text-red-600">₹{totalDeductions.toLocaleString()}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Net Pay Section */}
      <div className="bg-gradient-to-r from-[#2e75b6] to-[#1e4d8c] rounded-lg border border-[#1e4d8c] p-8 mb-6 shadow-lg">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-sm text-blue-100 mb-2">Net Payable Amount (After Deductions)</div>
            <div className="text-4xl font-bold text-white">₹{netPay.toLocaleString()}</div>
            <div className="text-sm text-blue-100 mt-2">For the month of {period.period}</div>
          </div>
          <div className="text-right">
            <div className="bg-white/20 rounded-lg px-4 py-2 mb-2">
              <div className="text-xs text-blue-100">Payable Days</div>
              <div className="text-2xl font-bold text-white">{employeeData.payableDays}</div>
            </div>
            <div className="bg-white/20 rounded-lg px-4 py-2">
              <div className="text-xs text-blue-100">LOP Days</div>
              <div className="text-2xl font-bold text-white">{employeeData.lop}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center justify-between bg-white rounded-lg border border-[#e5e7eb] p-4 shadow-sm">
        <button
          onClick={() => navigate('/payroll/run', { state: { period } })}
          className="px-6 py-2.5 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium"
        >
          <ArrowLeft className="w-4 h-4 inline mr-2" />
          Back to Run Payroll
        </button>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-6 py-2.5 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium">
            <Edit3 className="w-4 h-4" />
            Override
          </button>
          <button
            onClick={() => navigate('/payroll/payslips', { state: { period, employee: employeeData } })}
            className="flex items-center gap-2 px-6 py-2.5 bg-[#2e75b6] text-white rounded-lg hover:bg-[#1e4d8c] transition-colors text-sm font-medium"
          >
            <FileText className="w-4 h-4" />
            Preview Payslip
          </button>
        </div>
      </div>
    </div>
  );
}
