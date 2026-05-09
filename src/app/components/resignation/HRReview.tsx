import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, User, Calendar, Clock, AlertCircle, Check, X, Pause, Edit3, FileText, DollarSign } from 'lucide-react';

export function HRReview() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [showEditLWD, setShowEditLWD] = useState(false);

  // Mock data
  const employeeData = {
    name: 'Rajesh Kumar',
    employeeId: 'EMP001',
    email: 'rajesh.kumar@company.com',
    phone: '+91 98765 43210',
    designation: 'Senior Software Engineer',
    department: 'Engineering',
    reportingManager: 'Amit Sharma',
    dateOfJoining: '2022-01-15',
    resignationDate: '2026-04-01',
    lastWorkingDay: '2026-05-01',
    noticePeriod: 30,
    requiredNoticePeriod: 30,
    reason: 'Better Opportunity',
    additionalComments: 'Pursuing higher education and relocation to another city.',
  };

  const leaveBalance = {
    casualLeave: 5,
    sickLeave: 3,
    earnedLeave: 12,
    totalDays: 20,
  };

  const financials = {
    pendingSalary: 85000,
    bonusDue: 25000,
    expenseReimbursement: 5000,
    loanRecovery: 15000,
    advanceRecovery: 0,
    noticePeriodRecovery: 0,
  };

  const assets = [
    { name: 'Laptop - Dell Latitude 7420', assigned: true, returned: false },
    { name: 'Mobile Phone - iPhone 13', assigned: true, returned: false },
    { name: 'Access Card', assigned: true, returned: false },
    { name: 'Headphones - Sony WH-1000XM4', assigned: true, returned: true },
  ];

  const timeline = [
    { date: '2026-04-01', event: 'Resignation submitted', status: 'completed' },
    { date: '2026-04-02', event: 'Manager approved', status: 'completed' },
    { date: '2026-04-18', event: 'HR Review (Current)', status: 'current' },
    { date: 'Pending', event: 'Exit clearance', status: 'pending' },
    { date: 'Pending', event: 'Final settlement', status: 'pending' },
  ];

  const totalDues = financials.pendingSalary + financials.bonusDue + financials.expenseReimbursement;
  const totalRecovery = financials.loanRecovery + financials.advanceRecovery + financials.noticePeriodRecovery;
  const netPayable = totalDues - totalRecovery;

  return (
    <div className="min-h-screen bg-[#f8f8f8]">
      {/* Header */}
      <div className="sticky top-0 z-30 bg-white border-b border-[#eceff3] shadow-sm">
        <div className="px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={() => navigate('/resignation/manager-approval')}
                className="p-2 hover:bg-gray-50 rounded-lg transition-colors"
              >
                <ArrowLeft className="w-5 h-5 text-gray-600" />
              </button>
              <div>
                <h1 className="text-2xl font-semibold text-[#131313]">HR Review - Resignation Request</h1>
                <p className="text-sm text-gray-600 mt-1">Review and process employee resignation with full exit formalities</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-8 py-6">
        {/* Status Timeline */}
        <div className="bg-white rounded-2xl border border-[#eceff3] p-6 mb-6 shadow-sm">
          <h2 className="text-lg font-semibold text-[#131313] mb-4">Resignation Timeline</h2>
          <div className="flex items-center justify-between">
            {timeline.map((item, index) => (
              <div key={index} className="flex flex-col items-center flex-1">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${
                  item.status === 'completed' ? 'bg-green-500' :
                  item.status === 'current' ? 'bg-[#4b1b91]' :
                  'bg-gray-200'
                }`}>
                  {item.status === 'completed' && <Check className="w-5 h-5 text-white" />}
                  {item.status === 'current' && <Clock className="w-5 h-5 text-white" />}
                  {item.status === 'pending' && <div className="w-3 h-3 rounded-full bg-gray-400" />}
                </div>
                <p className={`text-[14px] font-medium text-center ${
                  item.status === 'current' ? 'text-[#4b1b91]' : 'text-gray-700'
                }`}>{item.event}</p>
                <p className="text-[12px] text-gray-500 mt-1">{item.date}</p>
                {index < timeline.length - 1 && (
                  <div className={`h-1 w-full mt-4 ${item.status === 'completed' ? 'bg-green-500' : 'bg-gray-200'}`} />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="col-span-2 space-y-6">
            {/* Employee Information */}
            <div className="bg-white rounded-2xl border border-[#eceff3] p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <User className="w-5 h-5 text-[#4b1b91]" />
                <h2 className="text-lg font-semibold text-[#131313]">Employee Information</h2>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Full Name</p>
                  <p className="text-[16px] font-medium text-[#141518]">{employeeData.name}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Employee ID</p>
                  <p className="text-[16px] font-medium text-[#141518]">{employeeData.employeeId}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Email</p>
                  <p className="text-[16px] font-medium text-[#141518]">{employeeData.email}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Phone</p>
                  <p className="text-[16px] font-medium text-[#141518]">{employeeData.phone}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Designation</p>
                  <p className="text-[16px] font-medium text-[#141518]">{employeeData.designation}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Department</p>
                  <p className="text-[16px] font-medium text-[#141518]">{employeeData.department}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Reporting Manager</p>
                  <p className="text-[16px] font-medium text-[#141518]">{employeeData.reportingManager}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Date of Joining</p>
                  <p className="text-[16px] font-medium text-[#141518]">
                    {new Date(employeeData.dateOfJoining).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' })}
                  </p>
                </div>
              </div>
            </div>

            {/* Resignation Details */}
            <div className="bg-white rounded-2xl border border-[#eceff3] p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <Calendar className="w-5 h-5 text-[#4b1b91]" />
                <h2 className="text-lg font-semibold text-[#131313]">Resignation Details</h2>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Resignation Date</p>
                  <p className="text-[16px] font-medium text-[#141518]">
                    {new Date(employeeData.resignationDate).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' })}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Last Working Day</p>
                  <p className="text-[16px] font-medium text-[#141518]">
                    {new Date(employeeData.lastWorkingDay).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' })}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Notice Period Served</p>
                  <p className="text-[16px] font-medium text-green-600">{employeeData.noticePeriod} days (Complete)</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Required Notice Period</p>
                  <p className="text-[16px] font-medium text-[#141518]">{employeeData.requiredNoticePeriod} days</p>
                </div>
                <div className="col-span-2">
                  <p className="text-sm text-gray-600 mb-1">Reason for Resignation</p>
                  <p className="text-[16px] font-medium text-[#141518]">{employeeData.reason}</p>
                </div>
                <div className="col-span-2">
                  <p className="text-sm text-gray-600 mb-1">Additional Comments</p>
                  <p className="text-[16px] text-gray-700">{employeeData.additionalComments}</p>
                </div>
              </div>
            </div>

            {/* Leave Adjustment */}
            <div className="bg-white rounded-2xl border border-[#eceff3] p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-[#131313] mb-4">Leave Balance & Adjustment</h2>
              <div className="grid grid-cols-4 gap-4 mb-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-sm text-blue-700 mb-1">Casual Leave</p>
                  <p className="text-2xl font-bold text-blue-900">{leaveBalance.casualLeave}</p>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <p className="text-sm text-orange-700 mb-1">Sick Leave</p>
                  <p className="text-2xl font-bold text-orange-900">{leaveBalance.sickLeave}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="text-sm text-green-700 mb-1">Earned Leave</p>
                  <p className="text-2xl font-bold text-green-900">{leaveBalance.earnedLeave}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <p className="text-sm text-purple-700 mb-1">Total Days</p>
                  <p className="text-2xl font-bold text-purple-900">{leaveBalance.totalDays}</p>
                </div>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-blue-900">
                  Employee has {leaveBalance.totalDays} days of unutilized leave. These will be encashed as per company policy.
                </p>
              </div>
            </div>

            {/* Asset Checklist */}
            <div className="bg-white rounded-2xl border border-[#eceff3] p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-[#131313] mb-4">Asset Return Checklist</h2>
              <div className="space-y-3">
                {assets.map((asset, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        checked={asset.returned}
                        className="w-4 h-4 text-[#4b1b91] rounded border-[#e8ceff] focus:ring-[#4b1b91]"
                      />
                      <span className="text-[16px] text-[#141518]">{asset.name}</span>
                    </div>
                    {asset.returned ? (
                      <span className="px-3 py-1 rounded-full text-[14px] font-medium bg-green-100 text-green-700 border border-green-200">
                        Returned
                      </span>
                    ) : (
                      <span className="px-3 py-1 rounded-full text-[14px] font-medium bg-yellow-100 text-yellow-700 border border-yellow-200">
                        Pending
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Recovery & Dues */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl border border-[#eceff3] p-6 shadow-sm sticky top-24">
              <div className="flex items-center gap-3 mb-4">
                <DollarSign className="w-5 h-5 text-[#4b1b91]" />
                <h2 className="text-lg font-semibold text-[#131313]">Financial Summary</h2>
              </div>

              <div className="space-y-4">
                <div>
                  <p className="text-sm font-medium text-gray-700 mb-3">Dues Payable</p>
                  <div className="space-y-2">
                    <div className="flex justify-between text-[14px]">
                      <span className="text-gray-600">Pending Salary</span>
                      <span className="font-medium text-green-600">₹{financials.pendingSalary.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-[14px]">
                      <span className="text-gray-600">Bonus Due</span>
                      <span className="font-medium text-green-600">₹{financials.bonusDue.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-[14px]">
                      <span className="text-gray-600">Expense Reimbursement</span>
                      <span className="font-medium text-green-600">₹{financials.expenseReimbursement.toLocaleString()}</span>
                    </div>
                  </div>
                  <div className="flex justify-between text-[16px] font-semibold pt-3 mt-3 border-t border-gray-200">
                    <span className="text-gray-900">Total Dues</span>
                    <span className="text-green-600">₹{totalDues.toLocaleString()}</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <p className="text-sm font-medium text-gray-700 mb-3">Recovery</p>
                  <div className="space-y-2">
                    <div className="flex justify-between text-[14px]">
                      <span className="text-gray-600">Loan Recovery</span>
                      <span className="font-medium text-red-600">₹{financials.loanRecovery.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-[14px]">
                      <span className="text-gray-600">Advance Recovery</span>
                      <span className="font-medium text-red-600">₹{financials.advanceRecovery.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-[14px]">
                      <span className="text-gray-600">Notice Period Recovery</span>
                      <span className="font-medium text-red-600">₹{financials.noticePeriodRecovery.toLocaleString()}</span>
                    </div>
                  </div>
                  <div className="flex justify-between text-[16px] font-semibold pt-3 mt-3 border-t border-gray-200">
                    <span className="text-gray-900">Total Recovery</span>
                    <span className="text-red-600">₹{totalRecovery.toLocaleString()}</span>
                  </div>
                </div>

                <div className="pt-4 border-t-2 border-gray-300">
                  <div className="flex justify-between text-[18px] font-bold">
                    <span className="text-gray-900">Net Payable</span>
                    <span className="text-[#4b1b91]">₹{netPayable.toLocaleString()}</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <button className="w-full flex items-center justify-center gap-2 px-4 py-2.5 border border-[#eceff3] text-gray-700 rounded-xl hover:bg-gray-50 transition-colors text-[14px] font-medium mb-2">
                  <FileText className="w-4 h-4" />
                  Schedule Exit Interview
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky Action Bar */}
      <div className="sticky bottom-0 z-20 bg-white border-t border-[#eceff3] shadow-lg">
        <div className="px-8 py-4 flex items-center justify-between">
          <button
            onClick={() => navigate('/resignation/manager-approval')}
            className="px-5 py-2.5 border border-[#eceff3] text-gray-700 rounded-2xl hover:bg-gray-50 transition-colors text-sm font-medium"
          >
            Back
          </button>
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 px-5 py-2.5 border border-[#eceff3] text-gray-700 rounded-2xl hover:bg-gray-50 transition-colors text-sm font-medium">
              <Edit3 className="w-4 h-4" />
              Edit Last Working Day
            </button>
            <button className="flex items-center gap-2 px-5 py-2.5 border border-amber-300 bg-amber-50 text-amber-700 rounded-2xl hover:bg-amber-100 transition-colors text-sm font-medium">
              <Pause className="w-4 h-4" />
              Put On Hold
            </button>
            <button className="flex items-center gap-2 px-5 py-2.5 bg-red-600 text-white rounded-2xl hover:bg-red-700 transition-colors text-sm font-medium">
              <X className="w-4 h-4" />
              Reject
            </button>
            <button
              onClick={() => navigate('/resignation/exit-clearance')}
              className="flex items-center gap-2 px-5 py-2.5 bg-[#4b1b91] text-white rounded-2xl hover:bg-[#3d1575] transition-colors text-sm font-medium shadow-sm"
            >
              <Check className="w-4 h-4" />
              Approve & Proceed to Clearance
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
