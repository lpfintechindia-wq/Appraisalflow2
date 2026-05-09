import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Download, Mail, ChevronRight } from 'lucide-react';

export function PayslipViewer() {
  const navigate = useNavigate();
  const location = useLocation();
  const period = location.state?.period || { period: 'April 2026' };

  const [selectedEmployee, setSelectedEmployee] = useState('EMP001');
  const [selectedPeriod, setSelectedPeriod] = useState('April 2026');

  const payslipData = {
    companyName: 'Acme Corporation',
    companyAddress: '123 Business Park, Bangalore - 560001',
    payslipFor: 'April 2026',
    employee: {
      name: 'John Doe',
      employeeId: 'EMP001',
      designation: 'Senior Software Engineer',
      department: 'Engineering',
      dateOfJoining: '15-Jan-2020',
      bankAccount: 'XXXX XXXX 4532',
      pan: 'ABCDE1234F',
      uan: '100123456789',
    },
    attendance: {
      payableDays: 30,
      lopDays: 0,
      workingDays: 30,
    },
    earnings: [
      { component: 'Basic Salary', amount: 48000 },
      { component: 'House Rent Allowance', amount: 24000 },
      { component: 'Special Allowance', amount: 18000 },
      { component: 'Conveyance Allowance', amount: 3200 },
      { component: 'Medical Allowance', amount: 1800 },
    ],
    deductions: [
      { component: 'Provident Fund', amount: 11400 },
      { component: 'Income Tax (TDS)', amount: 14250 },
      { component: 'Professional Tax', amount: 200 },
      { component: 'Loan Repayment', amount: 5000 },
    ],
  };

  const totalEarnings = payslipData.earnings.reduce((sum, e) => sum + e.amount, 0);
  const totalDeductions = payslipData.deductions.reduce((sum, d) => sum + d.amount, 0);
  const netPay = totalEarnings - totalDeductions;

  const handleDownload = () => {
    alert('Downloading payslip as PDF...');
  };

  const handleEmail = () => {
    alert('Sending payslip to employee email...');
  };

  return (
    <div className="p-6 bg-[#f5f7fa] min-h-full">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-gray-600 mb-6">
        <button onClick={() => navigate('/payroll/periods')} className="hover:text-[#2e75b6]">
          Payroll Periods
        </button>
        <ChevronRight className="w-4 h-4" />
        <span className="text-gray-900 font-medium">Payslip Viewer</span>
      </div>

      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-gray-900 mb-2 cursor-pointer hover:text-[#2e75b6] active:text-[#1e4d8c] transition-colors select-none">Payslip Viewer</h1>
        <p className="text-sm text-gray-600 cursor-pointer hover:text-gray-900 active:text-[#2e75b6] transition-colors select-none">View and download employee payslips</p>
      </div>

      {/* Filter Section */}
      <div className="bg-white rounded-lg border border-[#e5e7eb] p-6 mb-6 shadow-sm">
        <h3 className="text-base font-semibold text-gray-900 mb-4 cursor-pointer hover:text-[#2e75b6] active:text-[#1e4d8c] transition-colors select-none">Select Payslip</h3>
        <div className="grid grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Employee</label>
            <select
              value={selectedEmployee}
              onChange={(e) => setSelectedEmployee(e.target.value)}
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#2e75b6]"
            >
              <option value="EMP001">John Doe (EMP001)</option>
              <option value="EMP002">Jane Smith (EMP002)</option>
              <option value="EMP003">Mike Johnson (EMP003)</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Pay Period</label>
            <select
              value={selectedPeriod}
              onChange={(e) => setSelectedPeriod(e.target.value)}
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#2e75b6]"
            >
              <option value="April 2026">April 2026</option>
              <option value="March 2026">March 2026</option>
              <option value="February 2026">February 2026</option>
            </select>
          </div>
          <div className="flex items-end">
            <button className="w-full px-4 py-2.5 bg-[#2e75b6] text-white rounded-lg hover:bg-[#1e4d8c] transition-colors text-sm font-medium">
              View Payslip
            </button>
          </div>
        </div>
      </div>

      {/* Payslip Card */}
      <div className="bg-white rounded-lg border-2 border-[#e5e7eb] shadow-lg max-w-4xl mx-auto">
        {/* Payslip Header */}
        <div className="bg-gradient-to-r from-[#2e75b6] to-[#1e4d8c] px-8 py-6 text-white">
          <h2 className="text-2xl font-bold mb-2">{payslipData.companyName}</h2>
          <p className="text-sm text-blue-100">{payslipData.companyAddress}</p>
          <div className="mt-4 pt-4 border-t border-blue-400">
            <h3 className="text-lg font-semibold">Payslip for {payslipData.payslipFor}</h3>
          </div>
        </div>

        {/* Employee Details */}
        <div className="px-8 py-6 border-b border-gray-200">
          <h4 className="text-sm font-semibold text-gray-900 mb-4 uppercase cursor-pointer hover:text-[#2e75b6] active:text-[#1e4d8c] transition-colors select-none">Employee Details</h4>
          <div className="grid grid-cols-3 gap-6">
            <div>
              <div className="text-xs text-gray-500 mb-1">Employee Name</div>
              <div className="text-sm font-medium text-gray-900">{payslipData.employee.name}</div>
            </div>
            <div>
              <div className="text-xs text-gray-500 mb-1">Employee ID</div>
              <div className="text-sm font-medium text-gray-900">{payslipData.employee.employeeId}</div>
            </div>
            <div>
              <div className="text-xs text-gray-500 mb-1">Designation</div>
              <div className="text-sm font-medium text-gray-900">{payslipData.employee.designation}</div>
            </div>
            <div>
              <div className="text-xs text-gray-500 mb-1">Department</div>
              <div className="text-sm font-medium text-gray-900">{payslipData.employee.department}</div>
            </div>
            <div>
              <div className="text-xs text-gray-500 mb-1">Date of Joining</div>
              <div className="text-sm font-medium text-gray-900">{payslipData.employee.dateOfJoining}</div>
            </div>
            <div>
              <div className="text-xs text-gray-500 mb-1">Bank Account</div>
              <div className="text-sm font-medium text-gray-900">{payslipData.employee.bankAccount}</div>
            </div>
            <div>
              <div className="text-xs text-gray-500 mb-1">PAN</div>
              <div className="text-sm font-medium text-gray-900">{payslipData.employee.pan}</div>
            </div>
            <div>
              <div className="text-xs text-gray-500 mb-1">UAN</div>
              <div className="text-sm font-medium text-gray-900">{payslipData.employee.uan}</div>
            </div>
            <div>
              <div className="text-xs text-gray-500 mb-1">Payable Days</div>
              <div className="text-sm font-medium text-gray-900">{payslipData.attendance.payableDays}</div>
            </div>
          </div>
        </div>

        {/* Salary Breakdown Table */}
        <div className="px-8 py-6">
          <h4 className="text-sm font-semibold text-gray-900 mb-4 uppercase cursor-pointer hover:text-[#2e75b6] active:text-[#1e4d8c] transition-colors select-none">Salary Breakdown</h4>
          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Earnings</th>
                  <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase">Amount (₹)</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Deductions</th>
                  <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase">Amount (₹)</th>
                </tr>
              </thead>
              <tbody>
                {Array.from({
                  length: Math.max(payslipData.earnings.length, payslipData.deductions.length),
                }).map((_, index) => (
                  <tr key={index} className="border-t border-gray-200">
                    <td className="px-4 py-3 text-sm text-gray-700">
                      {payslipData.earnings[index]?.component || ''}
                    </td>
                    <td className="px-4 py-3 text-sm text-right font-medium text-gray-900">
                      {payslipData.earnings[index]?.amount.toLocaleString() || ''}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-700">
                      {payslipData.deductions[index]?.component || ''}
                    </td>
                    <td className="px-4 py-3 text-sm text-right font-medium text-gray-900">
                      {payslipData.deductions[index]?.amount.toLocaleString() || ''}
                    </td>
                  </tr>
                ))}
                <tr className="border-t-2 border-gray-300 bg-gray-50 font-semibold">
                  <td className="px-4 py-3 text-sm text-gray-900">Total Earnings</td>
                  <td className="px-4 py-3 text-sm text-right text-green-600">{totalEarnings.toLocaleString()}</td>
                  <td className="px-4 py-3 text-sm text-gray-900">Total Deductions</td>
                  <td className="px-4 py-3 text-sm text-right text-red-600">{totalDeductions.toLocaleString()}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Net Pay Section */}
        <div className="px-8 py-6 bg-gradient-to-r from-green-50 to-emerald-50 border-t-2 border-green-200">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm text-gray-600 mb-1">Net Salary Payable</div>
              <div className="text-3xl font-bold text-green-600">₹{netPay.toLocaleString()}</div>
              <div className="text-xs text-gray-500 mt-2">
                In Words: {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' })
                  .format(netPay)
                  .replace(/₹/, 'Rupees ')}
              </div>
            </div>
            <div className="text-right">
              <div className="bg-white rounded-lg border border-green-200 px-6 py-4">
                <div className="text-xs text-gray-500 mb-1">Payment Method</div>
                <div className="text-sm font-medium text-gray-900">Bank Transfer</div>
                <div className="text-xs text-gray-500 mt-2">Account: {payslipData.employee.bankAccount}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-8 py-4 bg-gray-50 border-t border-gray-200">
          <p className="text-xs text-gray-500 text-center">
            This is a system-generated payslip and does not require a signature. For any queries, please contact HR Department.
          </p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center justify-center gap-4 mt-6">
        <button
          onClick={handleDownload}
          className="flex items-center gap-2 px-6 py-3 bg-[#2e75b6] text-white rounded-lg hover:bg-[#1e4d8c] transition-colors text-sm font-medium shadow-sm"
        >
          <Download className="w-4 h-4" />
          Download PDF
        </button>
        <button
          onClick={handleEmail}
          className="flex items-center gap-2 px-6 py-3 border border-gray-300 bg-white text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium shadow-sm"
        >
          <Mail className="w-4 h-4" />
          Email Employee
        </button>
      </div>
    </div>
  );
}
