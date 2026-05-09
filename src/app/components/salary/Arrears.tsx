import { useState } from 'react';
import { Search, Filter, Plus, Calculator, Check, X, ChevronDown } from 'lucide-react';

interface Arrear {
  id: string;
  employeeName: string;
  employeeId: string;
  department: string;
  period: string;
  oldSalary: number;
  newSalary: number;
  arrearAmount: number;
  status: 'Pending' | 'Approved' | 'Processed' | 'Paid';
  calculatedOn: string;
}

const mockArrears: Arrear[] = [
  {
    id: '1',
    employeeName: 'Rahul Verma',
    employeeId: 'EMP001',
    department: 'Engineering',
    period: 'Jan 2026 - Mar 2026',
    oldSalary: 80000,
    newSalary: 95000,
    arrearAmount: 45000,
    status: 'Pending',
    calculatedOn: '2026-04-10',
  },
  {
    id: '2',
    employeeName: 'Ananya Iyer',
    employeeId: 'EMP002',
    department: 'Marketing',
    period: 'Feb 2026 - Mar 2026',
    oldSalary: 120000,
    newSalary: 135000,
    arrearAmount: 30000,
    status: 'Approved',
    calculatedOn: '2026-04-08',
  },
  {
    id: '3',
    employeeName: 'Karan Malhotra',
    employeeId: 'EMP003',
    department: 'Sales',
    period: 'Jan 2026 - Feb 2026',
    oldSalary: 70000,
    newSalary: 80000,
    arrearAmount: 20000,
    status: 'Processed',
    calculatedOn: '2026-04-05',
  },
];

export function Arrears() {
  const [arrears, setArrears] = useState<Arrear[]>(mockArrears);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState<string>('all');
  const [showCalculateModal, setShowCalculateModal] = useState(false);

  const filteredArrears = arrears.filter((arrear) => {
    const matchesSearch =
      arrear.employeeName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      arrear.employeeId.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === 'all' || arrear.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const handleApprove = (id: string) => {
    setArrears(arrears.map((a) => (a.id === id ? { ...a, status: 'Approved' as const } : a)));
  };

  return (
    <div className="p-6">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-900 mb-2">Arrears Management</h2>
        <p className="text-sm text-gray-600">Calculate and process salary arrears for employees</p>
      </div>

      {/* Filters & Actions */}
      <div className="bg-white rounded-xl border border-gray-200 p-4 mb-6">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 flex-1">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search arrears..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Status Filter */}
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-gray-500" />
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">All Status</option>
                <option value="Pending">Pending</option>
                <option value="Approved">Approved</option>
                <option value="Processed">Processed</option>
                <option value="Paid">Paid</option>
              </select>
            </div>
          </div>

          {/* Calculate Arrears Button */}
          <button
            onClick={() => setShowCalculateModal(true)}
            className="flex items-center gap-2 px-4 py-2 bg-[#2563eb] text-white rounded-lg hover:bg-[#1d4ed8] transition-colors"
          >
            <Calculator className="w-4 h-4" />
            <span className="text-sm font-medium">Calculate Arrears</span>
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        <div className="bg-white rounded-xl border border-gray-200 p-4">
          <div className="text-sm text-gray-600 mb-1">Total Arrears</div>
          <div className="text-2xl font-semibold text-gray-900">{arrears.length}</div>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-4">
          <div className="text-sm text-gray-600 mb-1">Pending Approval</div>
          <div className="text-2xl font-semibold text-yellow-600">
            {arrears.filter((a) => a.status === 'Pending').length}
          </div>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-4">
          <div className="text-sm text-gray-600 mb-1">Total Arrear Amount</div>
          <div className="text-2xl font-semibold text-blue-600">
            ₹{arrears.reduce((sum, a) => sum + a.arrearAmount, 0).toLocaleString()}
          </div>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-4">
          <div className="text-sm text-gray-600 mb-1">Processed This Month</div>
          <div className="text-2xl font-semibold text-green-600">
            {arrears.filter((a) => a.status === 'Processed' || a.status === 'Paid').length}
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Employee
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Department
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Period</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Old Salary
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                New Salary
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Arrear Amount
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {filteredArrears.map((arrear) => (
              <tr key={arrear.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4">
                  <div>
                    <div className="text-sm font-medium text-gray-900">{arrear.employeeName}</div>
                    <div className="text-xs text-gray-500">{arrear.employeeId}</div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm text-gray-600">{arrear.department}</div>
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm text-gray-600">{arrear.period}</div>
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm font-medium text-gray-700">₹{arrear.oldSalary.toLocaleString()}</div>
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm font-medium text-gray-900">₹{arrear.newSalary.toLocaleString()}</div>
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm font-semibold text-green-600">₹{arrear.arrearAmount.toLocaleString()}</div>
                </td>
                <td className="px-6 py-4">
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium ${
                      arrear.status === 'Paid'
                        ? 'bg-green-50 text-green-700'
                        : arrear.status === 'Processed'
                        ? 'bg-blue-50 text-blue-700'
                        : arrear.status === 'Approved'
                        ? 'bg-purple-50 text-purple-700'
                        : 'bg-yellow-50 text-yellow-700'
                    }`}
                  >
                    {arrear.status}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center justify-end gap-2">
                    {arrear.status === 'Pending' && (
                      <button
                        onClick={() => handleApprove(arrear.id)}
                        className="px-3 py-1.5 text-sm bg-green-600 text-white hover:bg-green-700 rounded-lg transition-colors"
                      >
                        Approve
                      </button>
                    )}
                    {arrear.status === 'Approved' && (
                      <button className="px-3 py-1.5 text-sm bg-blue-600 text-white hover:bg-blue-700 rounded-lg transition-colors">
                        Process Payment
                      </button>
                    )}
                    <button className="px-3 py-1.5 text-sm text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                      View Details
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Calculate Arrears Modal */}
      {showCalculateModal && <CalculateArrearsModal onClose={() => setShowCalculateModal(false)} />}
    </div>
  );
}

function CalculateArrearsModal({ onClose }: { onClose: () => void }) {
  const [selectedEmployee, setSelectedEmployee] = useState('');
  const [fromMonth, setFromMonth] = useState('2026-01');
  const [toMonth, setToMonth] = useState('2026-03');
  const [oldSalary, setOldSalary] = useState(80000);
  const [newSalary, setNewSalary] = useState(95000);
  const [showBreakdown, setShowBreakdown] = useState(false);

  const calculateArrears = () => {
    const from = new Date(fromMonth);
    const to = new Date(toMonth);
    const months = (to.getFullYear() - from.getFullYear()) * 12 + (to.getMonth() - from.getMonth()) + 1;
    const difference = newSalary - oldSalary;
    return difference * months;
  };

  const totalArrears = calculateArrears();
  const from = new Date(fromMonth);
  const to = new Date(toMonth);
  const monthsCount = (to.getFullYear() - from.getFullYear()) * 12 + (to.getMonth() - from.getMonth()) + 1;

  const breakdown = Array.from({ length: monthsCount }, (_, i) => {
    const date = new Date(from.getFullYear(), from.getMonth() + i, 1);
    return {
      month: date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' }),
      oldSalary,
      newSalary,
      difference: newSalary - oldSalary,
    };
  });

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col">
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Calculate Arrears</h3>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        <div className="flex-1 overflow-auto p-6">
          <div className="grid grid-cols-2 gap-6">
            {/* Form */}
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Select Employee</label>
                <select
                  value={selectedEmployee}
                  onChange={(e) => setSelectedEmployee(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Choose employee...</option>
                  <option value="emp1">John Doe (EMP001)</option>
                  <option value="emp2">Jane Smith (EMP002)</option>
                  <option value="emp3">Mike Johnson (EMP003)</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">From Month</label>
                  <input
                    type="month"
                    value={fromMonth}
                    onChange={(e) => setFromMonth(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">To Month</label>
                  <input
                    type="month"
                    value={toMonth}
                    onChange={(e) => setToMonth(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Old Monthly Salary (₹)</label>
                  <input
                    type="number"
                    value={oldSalary}
                    onChange={(e) => setOldSalary(Number(e.target.value))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">New Monthly Salary (₹)</label>
                  <input
                    type="number"
                    value={newSalary}
                    onChange={(e) => setNewSalary(Number(e.target.value))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-3">
                  <Calculator className="w-5 h-5 text-blue-600" />
                  <h4 className="text-sm font-medium text-blue-900">Calculation Summary</h4>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-700">Period</span>
                    <span className="font-medium text-gray-900">{monthsCount} months</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Monthly Difference</span>
                    <span className="font-medium text-gray-900">
                      ₹{(newSalary - oldSalary).toLocaleString()}
                    </span>
                  </div>
                  <div className="pt-2 border-t border-blue-200 flex justify-between">
                    <span className="font-medium text-blue-900">Total Arrears</span>
                    <span className="text-lg font-semibold text-blue-600">₹{totalArrears.toLocaleString()}</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => setShowBreakdown(!showBreakdown)}
                className="flex items-center gap-2 text-sm text-blue-600 hover:text-blue-700"
              >
                <ChevronDown className={`w-4 h-4 transition-transform ${showBreakdown ? 'rotate-180' : ''}`} />
                {showBreakdown ? 'Hide' : 'Show'} Month-wise Breakdown
              </button>
            </div>

            {/* Preview Panel */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-4">
              <h4 className="text-sm font-medium text-gray-900 mb-4">Arrears Breakdown</h4>

              <div className="space-y-3 mb-4 max-h-96 overflow-auto">
                {showBreakdown ? (
                  breakdown.map((item, index) => (
                    <div key={index} className="bg-white rounded-lg p-3">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-gray-900">{item.month}</span>
                        <span className="text-sm font-semibold text-green-600">
                          +₹{item.difference.toLocaleString()}
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-xs text-gray-600">
                        <span>₹{item.oldSalary.toLocaleString()}</span>
                        <span>→</span>
                        <span>₹{item.newSalary.toLocaleString()}</span>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="bg-white rounded-lg p-6 text-center">
                    <Calculator className="w-12 h-12 mx-auto mb-3 text-gray-400" />
                    <p className="text-sm text-gray-600">Click "Show Month-wise Breakdown" to see detailed calculation</p>
                  </div>
                )}
              </div>

              <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg p-4 text-white">
                <div className="text-xs opacity-90 mb-1">Total Arrears Payable</div>
                <div className="text-3xl font-semibold">₹{totalArrears.toLocaleString()}</div>
                <div className="text-xs opacity-90 mt-2">For {monthsCount} months</div>
              </div>

              <div className="mt-4 bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                <p className="text-xs text-yellow-800">
                  <strong>Note:</strong> This is a preliminary calculation. Final amount may vary based on deductions and
                  other factors.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-end gap-3 p-6 border-t border-gray-200">
          <button
            onClick={onClose}
            className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors text-sm font-medium"
          >
            Cancel
          </button>
          <button className="px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-colors text-sm font-medium">
            Save Draft
          </button>
          <button className="px-4 py-2 bg-[#2563eb] text-white rounded-lg hover:bg-[#1d4ed8] transition-colors text-sm font-medium">
            Submit for Approval
          </button>
        </div>
      </div>
    </div>
  );
}
