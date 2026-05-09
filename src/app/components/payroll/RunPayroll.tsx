import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ArrowLeft, CheckCircle, RefreshCw, Lock, ChevronRight } from 'lucide-react';

interface EmployeePayroll {
  id: string;
  employeeName: string;
  employeeId: string;
  designation: string;
  payableDays: number;
  lop: number;
  gross: number;
  pf: number;
  tds: number;
  netPay: number;
  status: 'Pending' | 'Processed' | 'Error';
}

const mockEmployees: EmployeePayroll[] = [
  {
    id: '1',
    employeeName: 'Rahul Verma',
    employeeId: 'EMP001',
    designation: 'Senior Software Engineer',
    payableDays: 30,
    lop: 0,
    gross: 95000,
    pf: 11400,
    tds: 14250,
    netPay: 69350,
    status: 'Processed',
  },
  {
    id: '2',
    employeeName: 'Ananya Iyer',
    employeeId: 'EMP002',
    designation: 'Marketing Manager',
    payableDays: 28,
    lop: 2,
    gross: 112000,
    pf: 13440,
    tds: 16800,
    netPay: 81760,
    status: 'Processed',
  },
  {
    id: '3',
    employeeName: 'Karan Malhotra',
    employeeId: 'EMP003',
    designation: 'Sales Executive',
    payableDays: 30,
    lop: 0,
    gross: 75000,
    pf: 9000,
    tds: 11250,
    netPay: 54750,
    status: 'Processed',
  },
];

const steps = [
  { id: 1, name: 'Pre-validation', description: 'Validate employee data' },
  { id: 2, name: 'Compute Payroll', description: 'Calculate salaries' },
  { id: 3, name: 'Review & Override', description: 'Review calculations' },
  { id: 4, name: 'Lock & Approve', description: 'Lock payroll data' },
  { id: 5, name: 'Disburse', description: 'Process payments' },
];

export function RunPayroll() {
  const navigate = useNavigate();
  const location = useLocation();
  const period = location.state?.period || { period: 'April 2026' };

  const [currentStep, setCurrentStep] = useState(2);
  const [employees, setEmployees] = useState<EmployeePayroll[]>(mockEmployees);

  const handleRecompute = () => {
    // Recompute logic
    alert('Recomputing payroll...');
  };

  const handleLockApprove = () => {
    setCurrentStep(4);
  };

  return (
    <div className="p-6 bg-[#f5f7fa] min-h-full">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-gray-600 mb-6">
        <button onClick={() => navigate('/payroll/periods')} className="hover:text-[#2e75b6]">
          Payroll Periods
        </button>
        <ChevronRight className="w-4 h-4" />
        <span className="text-gray-900 font-medium">Run Payroll - {period.period}</span>
      </div>

      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-2">
          <button
            onClick={() => navigate('/payroll/periods')}
            className="p-2 hover:bg-white rounded-lg transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-gray-600" />
          </button>
          <h1 className="text-2xl font-semibold text-gray-900 cursor-pointer hover:text-[#2e75b6] active:text-[#1e4d8c] transition-colors select-none">
            Run Payroll
          </h1>
        </div>
        <p className="text-sm text-gray-600 ml-14 cursor-pointer hover:text-gray-900 active:text-[#2e75b6] transition-colors select-none">
          Process payroll for {period.period}
        </p>
      </div>

      {/* Step Progress Indicator */}
      <div className="bg-white rounded-lg border border-[#e5e7eb] p-6 mb-6 shadow-sm">
        <div className="flex items-center justify-between">
          {steps.map((step, index) => (
            <div key={step.id} className="flex items-center flex-1">
              <div className="flex flex-col items-center flex-1">
                {/* Step Circle */}
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center font-semibold text-sm mb-2 ${
                    step.id < currentStep
                      ? 'bg-green-500 text-white'
                      : step.id === currentStep
                      ? 'bg-[#2e75b6] text-white'
                      : 'bg-gray-200 text-gray-500'
                  }`}
                >
                  {step.id < currentStep ? <CheckCircle className="w-6 h-6" /> : step.id}
                </div>
                {/* Step Name */}
                <div className="text-center">
                  <div className={`text-sm font-medium ${step.id === currentStep ? 'text-[#2e75b6]' : 'text-gray-600'}`}>
                    {step.name}
                  </div>
                  <div className="text-xs text-gray-500 mt-1">{step.description}</div>
                </div>
              </div>
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div
                  className={`h-0.5 flex-1 mx-2 mt-[-50px] ${
                    step.id < currentStep ? 'bg-green-500' : 'bg-gray-200'
                  }`}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Success Alert */}
      <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6 flex items-start gap-3">
        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
        <div className="flex-1">
          <h3 className="text-sm font-medium text-green-900 mb-1">Pre-validation Completed Successfully</h3>
          <p className="text-sm text-green-700">
            All employee data has been validated. No errors found. Ready to compute payroll for {employees.length} employees.
          </p>
        </div>
      </div>

      {/* Employee Payroll Table */}
      <div className="bg-white rounded-lg border border-[#e5e7eb] shadow-sm overflow-hidden mb-6">
        <div className="px-6 py-4 border-b border-[#e5e7eb] bg-gray-50">
          <h3 className="text-base font-semibold text-gray-900 cursor-pointer hover:text-[#2e75b6] active:text-[#1e4d8c] transition-colors select-none">
            Employee Payroll Computation
          </h3>
          <p className="text-sm text-gray-600 mt-1 cursor-pointer hover:text-gray-900 active:text-[#2e75b6] transition-colors select-none">
            Review computed payroll for all employees
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-[#e5e7eb]">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Employee
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Designation
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Payable Days
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">LOP</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Gross Pay
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">PF</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">TDS</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Net Pay
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {employees.map((employee) => (
                <tr key={employee.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4">
                    <div>
                      <div className="text-sm font-medium text-gray-900">{employee.employeeName}</div>
                      <div className="text-xs text-gray-500">{employee.employeeId}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-600">{employee.designation}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm font-medium text-gray-900">{employee.payableDays}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div
                      className={`text-sm font-medium ${
                        employee.lop > 0 ? 'text-red-600' : 'text-gray-600'
                      }`}
                    >
                      {employee.lop}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm font-medium text-gray-900">₹{employee.gross.toLocaleString()}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-600">₹{employee.pf.toLocaleString()}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-600">₹{employee.tds.toLocaleString()}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm font-semibold text-green-600">₹{employee.netPay.toLocaleString()}</div>
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium ${
                        employee.status === 'Processed'
                          ? 'bg-green-50 text-green-700 border border-green-200'
                          : employee.status === 'Error'
                          ? 'bg-red-50 text-red-700 border border-red-200'
                          : 'bg-yellow-50 text-yellow-700 border border-yellow-200'
                      }`}
                    >
                      {employee.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Summary Footer */}
        <div className="px-6 py-4 bg-gray-50 border-t border-[#e5e7eb]">
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-600">
              Total Employees: <span className="font-medium text-gray-900">{employees.length}</span>
            </div>
            <div className="flex items-center gap-8">
              <div className="text-sm">
                Total Gross: <span className="font-semibold text-gray-900">₹{employees.reduce((sum, e) => sum + e.gross, 0).toLocaleString()}</span>
              </div>
              <div className="text-sm">
                Total Deductions: <span className="font-semibold text-gray-900">₹{employees.reduce((sum, e) => sum + e.pf + e.tds, 0).toLocaleString()}</span>
              </div>
              <div className="text-sm">
                Total Net Pay: <span className="font-semibold text-green-600">₹{employees.reduce((sum, e) => sum + e.netPay, 0).toLocaleString()}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center justify-between bg-white rounded-lg border border-[#e5e7eb] p-4 shadow-sm">
        <button
          onClick={() => navigate('/payroll/periods')}
          className="px-6 py-2.5 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium"
        >
          Cancel
        </button>
        <div className="flex items-center gap-3">
          <button
            onClick={handleRecompute}
            className="flex items-center gap-2 px-6 py-2.5 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium"
          >
            <RefreshCw className="w-4 h-4" />
            Recompute
          </button>
          <button
            onClick={handleLockApprove}
            className="flex items-center gap-2 px-6 py-2.5 bg-[#2e75b6] text-white rounded-lg hover:bg-[#1e4d8c] transition-colors text-sm font-medium"
          >
            <Lock className="w-4 h-4" />
            Lock & Approve
          </button>
        </div>
      </div>
    </div>
  );
}
