import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, Edit2, Download, Trash2 } from 'lucide-react';

export function ViewEmployeeSalary() {
  const navigate = useNavigate();
  const { id } = useParams();

  // Mock data - in real app, fetch based on id
  const employee = {
    id: '1',
    employeeName: 'Rahul Verma',
    employeeId: 'EMP001',
    department: 'Engineering',
    location: 'Bangalore',
    designation: 'Senior Software Engineer',
    joiningDate: '2020-01-15',
    email: 'rahul.verma@company.com',
    salaryStructure: 'Standard CTC Structure',
    monthlySalary: 85000,
    ctc: 1200000,
    status: 'Active',
    effectiveDate: '2026-01-01',
  };

  const breakdown = {
    basicSalary: 480000,
    hra: 240000,
    specialAllowance: 360000,
    pf: 144000,
  };

  const history = [
    { date: '2026-01-01', event: 'Annual Increment', oldSalary: 80000, newSalary: 85000, remarks: 'Performance based' },
    { date: '2025-07-01', event: 'Promotion', oldSalary: 70000, newSalary: 80000, remarks: 'Promoted to Senior' },
    { date: '2024-01-15', event: 'Salary Assigned', oldSalary: 0, newSalary: 70000, remarks: 'Initial assignment' },
  ];

  return (
    <div className="p-6">
      {/* Header */}
      <div className="mb-6">
        <button
          onClick={() => navigate('/salary/employee')}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-4"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="text-sm">Back to Employee Salary</span>
        </button>
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-2 cursor-pointer hover:text-[#2e75b6] active:text-[#1e4d8c] transition-colors select-none">Employee Salary Details</h2>
            <p className="text-sm text-gray-600 cursor-pointer hover:text-gray-900 active:text-[#2e75b6] transition-colors select-none">View complete salary information for {employee.employeeName}</p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate(`/salary/employee/edit/${id}`)}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
            >
              <Edit2 className="w-4 h-4" />
              Edit Salary
            </button>
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm">
              <Download className="w-4 h-4" />
              Download
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {/* Employee Information */}
        <div className="col-span-2 space-y-6">
          {/* Personal Details */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 cursor-pointer hover:text-[#2e75b6] active:text-[#1e4d8c] transition-colors select-none">Employee Information</h3>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="text-sm text-gray-600">Employee Name</label>
                <p className="text-base font-medium text-gray-900 mt-1">{employee.employeeName}</p>
              </div>
              <div>
                <label className="text-sm text-gray-600">Employee ID</label>
                <p className="text-base font-medium text-gray-900 mt-1">{employee.employeeId}</p>
              </div>
              <div>
                <label className="text-sm text-gray-600">Department</label>
                <p className="text-base font-medium text-gray-900 mt-1">{employee.department}</p>
              </div>
              <div>
                <label className="text-sm text-gray-600">Location</label>
                <p className="text-base font-medium text-gray-900 mt-1">{employee.location}</p>
              </div>
              <div>
                <label className="text-sm text-gray-600">Designation</label>
                <p className="text-base font-medium text-gray-900 mt-1">{employee.designation}</p>
              </div>
              <div>
                <label className="text-sm text-gray-600">Joining Date</label>
                <p className="text-base font-medium text-gray-900 mt-1">{employee.joiningDate}</p>
              </div>
              <div>
                <label className="text-sm text-gray-600">Email</label>
                <p className="text-base font-medium text-gray-900 mt-1">{employee.email}</p>
              </div>
              <div>
                <label className="text-sm text-gray-600">Status</label>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-green-50 text-green-700 mt-1">
                  {employee.status}
                </span>
              </div>
            </div>
          </div>

          {/* Salary Details */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 cursor-pointer hover:text-[#2e75b6] active:text-[#1e4d8c] transition-colors select-none">Salary Details</h3>
            <div className="grid grid-cols-2 gap-6 mb-6">
              <div>
                <label className="text-sm text-gray-600">Salary Structure</label>
                <p className="text-base font-medium text-gray-900 mt-1">{employee.salaryStructure}</p>
              </div>
              <div>
                <label className="text-sm text-gray-600">Effective Date</label>
                <p className="text-base font-medium text-gray-900 mt-1">{employee.effectiveDate}</p>
              </div>
              <div>
                <label className="text-sm text-gray-600">Annual CTC</label>
                <p className="text-2xl font-semibold text-gray-900 mt-1">₹{employee.ctc.toLocaleString()}</p>
              </div>
              <div>
                <label className="text-sm text-gray-600">Monthly Net Salary</label>
                <p className="text-2xl font-semibold text-green-600 mt-1">₹{employee.monthlySalary.toLocaleString()}</p>
              </div>
            </div>

            {/* Salary Breakdown */}
            <div className="border-t border-gray-200 pt-6">
              <h4 className="text-sm font-medium text-gray-900 mb-4 cursor-pointer hover:text-[#2e75b6] active:text-[#1e4d8c] transition-colors select-none">Salary Breakdown</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-sm text-gray-600">Basic Salary (40%)</span>
                  <span className="text-base font-medium text-gray-900">₹{breakdown.basicSalary.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-sm text-gray-600">HRA (20%)</span>
                  <span className="text-base font-medium text-gray-900">₹{breakdown.hra.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-sm text-gray-600">Special Allowance (30%)</span>
                  <span className="text-base font-medium text-gray-900">₹{breakdown.specialAllowance.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-sm text-gray-600">PF Deduction (12%)</span>
                  <span className="text-base font-medium text-red-600">-₹{breakdown.pf.toLocaleString()}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Salary History */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 cursor-pointer hover:text-[#2e75b6] active:text-[#1e4d8c] transition-colors select-none">Salary History</h3>
            <div className="relative">
              {history.map((item, index) => (
                <div key={index} className="flex gap-4 pb-6 last:pb-0">
                  {/* Timeline */}
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                      <div className="w-3 h-3 rounded-full bg-blue-600"></div>
                    </div>
                    {index !== history.length - 1 && <div className="w-0.5 flex-1 bg-gray-200 mt-2"></div>}
                  </div>

                  {/* Content */}
                  <div className="flex-1 bg-gray-50 rounded-lg p-4">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h4 className="text-sm font-medium text-gray-900">{item.event}</h4>
                        <p className="text-xs text-gray-500 mt-1">{item.date}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-xs text-gray-500">Change</div>
                        <div className="text-sm font-semibold text-green-600">
                          +₹{(item.newSalary - item.oldSalary).toLocaleString()}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 mt-3">
                      <div>
                        <div className="text-xs text-gray-500">Previous</div>
                        <div className="text-sm font-medium text-gray-700">₹{item.oldSalary.toLocaleString()}</div>
                      </div>
                      <div className="text-gray-400">→</div>
                      <div>
                        <div className="text-xs text-gray-500">New</div>
                        <div className="text-sm font-medium text-gray-900">₹{item.newSalary.toLocaleString()}</div>
                      </div>
                    </div>
                    {item.remarks && (
                      <div className="mt-3 pt-3 border-t border-gray-200">
                        <div className="text-xs text-gray-500">Remarks</div>
                        <div className="text-sm text-gray-700 mt-1">{item.remarks}</div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Summary Card */}
        <div className="col-span-1">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 sticky top-6">
            <h4 className="text-sm font-medium text-gray-900 mb-4">Quick Summary</h4>

            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4">
                <div className="text-xs text-gray-600 mb-1">Current CTC</div>
                <div className="text-2xl font-semibold text-gray-900">₹{employee.ctc.toLocaleString()}</div>
                <div className="text-xs text-gray-500 mt-1">Per annum</div>
              </div>

              <div className="bg-white rounded-lg p-4">
                <div className="text-xs text-gray-600 mb-1">Monthly In-hand</div>
                <div className="text-2xl font-semibold text-green-600">₹{employee.monthlySalary.toLocaleString()}</div>
                <div className="text-xs text-gray-500 mt-1">After deductions</div>
              </div>

              <div className="bg-white rounded-lg p-3 space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Gross Annual</span>
                  <span className="font-medium">₹{employee.ctc.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Annual Deductions</span>
                  <span className="font-medium text-red-600">₹{breakdown.pf.toLocaleString()}</span>
                </div>
                <div className="pt-2 border-t border-gray-200 flex justify-between text-sm">
                  <span className="font-medium text-gray-900">Net Annual</span>
                  <span className="font-semibold text-green-600">₹{(employee.monthlySalary * 12).toLocaleString()}</span>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg p-4 text-white">
                <div className="text-xs opacity-90 mb-1">Tenure</div>
                <div className="text-xl font-semibold">6 Years</div>
                <div className="text-xs opacity-90 mt-1">Since {employee.joiningDate}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
