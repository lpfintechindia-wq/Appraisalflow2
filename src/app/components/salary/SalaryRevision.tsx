import { useState } from 'react';
import { Search, Filter, Plus, Check, X, Calendar, TrendingUp, TrendingDown } from 'lucide-react';

interface SalaryRevision {
  id: string;
  employeeName: string;
  employeeId: string;
  department: string;
  oldSalary: number;
  newSalary: number;
  percentage: number;
  effectiveDate: string;
  status: 'Pending' | 'Approved' | 'Rejected';
  requestedBy: string;
  requestedOn: string;
}

const mockRevisions: SalaryRevision[] = [
  {
    id: '1',
    employeeName: 'Rahul Verma',
    employeeId: 'EMP001',
    department: 'Engineering',
    oldSalary: 85000,
    newSalary: 95000,
    percentage: 11.76,
    effectiveDate: '2026-05-01',
    status: 'Pending',
    requestedBy: 'Rajesh Kumar',
    requestedOn: '2026-04-10',
  },
  {
    id: '2',
    employeeName: 'Ananya Iyer',
    employeeId: 'EMP002',
    department: 'Marketing',
    oldSalary: 120000,
    newSalary: 135000,
    percentage: 12.5,
    effectiveDate: '2026-05-01',
    status: 'Approved',
    requestedBy: 'Vikram Singh',
    requestedOn: '2026-04-08',
  },
  {
    id: '3',
    employeeName: 'Karan Malhotra',
    employeeId: 'EMP003',
    department: 'Sales',
    oldSalary: 75000,
    newSalary: 80000,
    percentage: 6.67,
    effectiveDate: '2026-06-01',
    status: 'Pending',
    requestedBy: 'Kavita Desai',
    requestedOn: '2026-04-12',
  },
];

export function SalaryRevision() {
  const [revisions, setRevisions] = useState<SalaryRevision[]>(mockRevisions);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState<string>('all');
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [selectedRevision, setSelectedRevision] = useState<SalaryRevision | null>(null);

  const filteredRevisions = revisions.filter((revision) => {
    const matchesSearch =
      revision.employeeName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      revision.employeeId.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === 'all' || revision.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const handleApprove = (id: string) => {
    setRevisions(revisions.map((r) => (r.id === id ? { ...r, status: 'Approved' as const } : r)));
  };

  const handleReject = (id: string) => {
    setRevisions(revisions.map((r) => (r.id === id ? { ...r, status: 'Rejected' as const } : r)));
  };

  return (
    <div className="p-6">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-900 mb-2">Salary Revision</h2>
        <p className="text-sm text-gray-600">Manage salary revision requests and approvals</p>
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
                placeholder="Search revisions..."
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
                <option value="Rejected">Rejected</option>
              </select>
            </div>
          </div>

          {/* Create Revision Button */}
          <button
            onClick={() => setShowCreateModal(true)}
            className="flex items-center gap-2 px-4 py-2 bg-[#2563eb] text-white rounded-lg hover:bg-[#1d4ed8] transition-colors"
          >
            <Plus className="w-4 h-4" />
            <span className="text-sm font-medium">Create Revision</span>
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        <div className="bg-white rounded-xl border border-gray-200 p-4">
          <div className="text-sm text-gray-600 mb-1">Total Revisions</div>
          <div className="text-2xl font-semibold text-gray-900">{revisions.length}</div>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-4">
          <div className="text-sm text-gray-600 mb-1">Pending Approval</div>
          <div className="text-2xl font-semibold text-yellow-600">
            {revisions.filter((r) => r.status === 'Pending').length}
          </div>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-4">
          <div className="text-sm text-gray-600 mb-1">Approved</div>
          <div className="text-2xl font-semibold text-green-600">
            {revisions.filter((r) => r.status === 'Approved').length}
          </div>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-4">
          <div className="text-sm text-gray-600 mb-1">Avg Increment %</div>
          <div className="text-2xl font-semibold text-blue-600">
            {(revisions.reduce((sum, r) => sum + r.percentage, 0) / revisions.length).toFixed(1)}%
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
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Old Salary
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                New Salary
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Change
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Effective Date
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
            {filteredRevisions.map((revision) => (
              <tr key={revision.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4">
                  <div>
                    <div className="text-sm font-medium text-gray-900">{revision.employeeName}</div>
                    <div className="text-xs text-gray-500">{revision.employeeId}</div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm text-gray-600">{revision.department}</div>
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm font-medium text-gray-700">₹{revision.oldSalary.toLocaleString()}</div>
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm font-medium text-gray-900">₹{revision.newSalary.toLocaleString()}</div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-1">
                    {revision.percentage > 0 ? (
                      <TrendingUp className="w-4 h-4 text-green-600" />
                    ) : (
                      <TrendingDown className="w-4 h-4 text-red-600" />
                    )}
                    <span
                      className={`text-sm font-medium ${
                        revision.percentage > 0 ? 'text-green-600' : 'text-red-600'
                      }`}
                    >
                      {revision.percentage > 0 ? '+' : ''}
                      {revision.percentage.toFixed(1)}%
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-1 text-sm text-gray-600">
                    <Calendar className="w-4 h-4" />
                    {revision.effectiveDate}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium ${
                      revision.status === 'Approved'
                        ? 'bg-green-50 text-green-700'
                        : revision.status === 'Pending'
                        ? 'bg-yellow-50 text-yellow-700'
                        : 'bg-red-50 text-red-700'
                    }`}
                  >
                    {revision.status}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center justify-end gap-2">
                    {revision.status === 'Pending' && (
                      <>
                        <button
                          onClick={() => handleApprove(revision.id)}
                          className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors"
                          title="Approve"
                        >
                          <Check className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleReject(revision.id)}
                          className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                          title="Reject"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </>
                    )}
                    <button
                      onClick={() => setSelectedRevision(revision)}
                      className="px-3 py-1.5 text-sm text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                    >
                      View Details
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Create Revision Modal */}
      {showCreateModal && <CreateRevisionModal onClose={() => setShowCreateModal(false)} />}

      {/* View Details Modal */}
      {selectedRevision && (
        <ViewRevisionModal revision={selectedRevision} onClose={() => setSelectedRevision(null)} />
      )}
    </div>
  );
}

function CreateRevisionModal({ onClose }: { onClose: () => void }) {
  const [selectedEmployee, setSelectedEmployee] = useState('');
  const [currentSalary, setCurrentSalary] = useState(85000);
  const [revisionType, setRevisionType] = useState<'amount' | 'percentage'>('percentage');
  const [revisionValue, setRevisionValue] = useState(10);
  const [effectiveDate, setEffectiveDate] = useState('2026-05-01');

  const newSalary =
    revisionType === 'percentage'
      ? currentSalary + (currentSalary * revisionValue) / 100
      : currentSalary + revisionValue;

  const percentageChange = ((newSalary - currentSalary) / currentSalary) * 100;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col">
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Create Salary Revision</h3>
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
                  <option value="emp1">John Doe (EMP001) - Current: ₹85,000</option>
                  <option value="emp2">Jane Smith (EMP002) - Current: ₹120,000</option>
                  <option value="emp3">Mike Johnson (EMP003) - Current: ₹75,000</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Current Monthly Salary</label>
                <input
                  type="number"
                  value={currentSalary}
                  onChange={(e) => setCurrentSalary(Number(e.target.value))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  disabled
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Revision Type</label>
                <div className="flex gap-4">
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      value="percentage"
                      checked={revisionType === 'percentage'}
                      onChange={(e) => setRevisionType(e.target.value as 'percentage')}
                      className="text-blue-600"
                    />
                    <span className="text-sm">Percentage (%)</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      value="amount"
                      checked={revisionType === 'amount'}
                      onChange={(e) => setRevisionType(e.target.value as 'amount')}
                      className="text-blue-600"
                    />
                    <span className="text-sm">Fixed Amount (₹)</span>
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {revisionType === 'percentage' ? 'Increment Percentage' : 'Increment Amount'}
                </label>
                <input
                  type="number"
                  value={revisionValue}
                  onChange={(e) => setRevisionValue(Number(e.target.value))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder={revisionType === 'percentage' ? 'Enter percentage' : 'Enter amount'}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Effective Date</label>
                <input
                  type="date"
                  value={effectiveDate}
                  onChange={(e) => setEffectiveDate(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Remarks (Optional)</label>
                <textarea
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Add any additional notes..."
                ></textarea>
              </div>
            </div>

            {/* Comparison Panel */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6">
              <h4 className="text-sm font-medium text-gray-900 mb-6">Salary Comparison</h4>

              <div className="space-y-6">
                {/* Old Salary */}
                <div className="bg-white rounded-lg p-4">
                  <div className="text-xs text-gray-500 mb-2">Current Monthly Salary</div>
                  <div className="text-3xl font-semibold text-gray-700">₹{currentSalary.toLocaleString()}</div>
                  <div className="text-xs text-gray-500 mt-2">Annual CTC: ₹{(currentSalary * 12).toLocaleString()}</div>
                </div>

                {/* Arrow */}
                <div className="flex items-center justify-center">
                  <div className="w-full h-px bg-gray-300 relative">
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-t-4 border-t-transparent border-l-8 border-l-gray-300 border-b-4 border-b-transparent"></div>
                  </div>
                </div>

                {/* New Salary */}
                <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg p-4 text-white">
                  <div className="text-xs opacity-90 mb-2">Revised Monthly Salary</div>
                  <div className="text-3xl font-semibold">₹{Math.round(newSalary).toLocaleString()}</div>
                  <div className="text-xs opacity-90 mt-2">
                    Annual CTC: ₹{(Math.round(newSalary) * 12).toLocaleString()}
                  </div>
                </div>

                {/* Change Summary */}
                <div className="bg-white rounded-lg p-4 border-2 border-green-200">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-600">Monthly Increase</span>
                    <span className="text-lg font-semibold text-green-600">
                      +₹{Math.round(newSalary - currentSalary).toLocaleString()}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Percentage Change</span>
                    <span className="text-lg font-semibold text-green-600">+{percentageChange.toFixed(2)}%</span>
                  </div>
                </div>
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
          <button className="px-4 py-2 bg-[#2563eb] text-white rounded-lg hover:bg-[#1d4ed8] transition-colors text-sm font-medium">
            Submit for Approval
          </button>
        </div>
      </div>
    </div>
  );
}

function ViewRevisionModal({ revision, onClose }: { revision: SalaryRevision; onClose: () => void }) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-hidden flex flex-col">
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Revision Details</h3>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        <div className="flex-1 overflow-auto p-6 space-y-6">
          {/* Employee Info */}
          <div className="bg-gray-50 rounded-lg p-4">
            <h4 className="text-sm font-medium text-gray-900 mb-3">Employee Information</h4>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <div className="text-gray-500">Name</div>
                <div className="font-medium text-gray-900">{revision.employeeName}</div>
              </div>
              <div>
                <div className="text-gray-500">Employee ID</div>
                <div className="font-medium text-gray-900">{revision.employeeId}</div>
              </div>
              <div>
                <div className="text-gray-500">Department</div>
                <div className="font-medium text-gray-900">{revision.department}</div>
              </div>
              <div>
                <div className="text-gray-500">Status</div>
                <span
                  className={`inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium ${
                    revision.status === 'Approved'
                      ? 'bg-green-50 text-green-700'
                      : revision.status === 'Pending'
                      ? 'bg-yellow-50 text-yellow-700'
                      : 'bg-red-50 text-red-700'
                  }`}
                >
                  {revision.status}
                </span>
              </div>
            </div>
          </div>

          {/* Salary Details */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-4">
            <h4 className="text-sm font-medium text-gray-900 mb-4">Salary Details</h4>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-lg p-3">
                <div className="text-xs text-gray-500 mb-1">Current Salary</div>
                <div className="text-xl font-semibold text-gray-700">₹{revision.oldSalary.toLocaleString()}</div>
              </div>
              <div className="bg-white rounded-lg p-3">
                <div className="text-xs text-gray-500 mb-1">Revised Salary</div>
                <div className="text-xl font-semibold text-green-600">₹{revision.newSalary.toLocaleString()}</div>
              </div>
            </div>
            <div className="mt-4 bg-white rounded-lg p-3">
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-600">Increment</div>
                <div className="text-lg font-semibold text-green-600">
                  +₹{(revision.newSalary - revision.oldSalary).toLocaleString()} ({revision.percentage.toFixed(1)}%)
                </div>
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="bg-gray-50 rounded-lg p-4">
            <h4 className="text-sm font-medium text-gray-900 mb-3">Timeline</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Requested On</span>
                <span className="font-medium text-gray-900">{revision.requestedOn}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Requested By</span>
                <span className="font-medium text-gray-900">{revision.requestedBy}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Effective Date</span>
                <span className="font-medium text-gray-900">{revision.effectiveDate}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-end gap-3 p-6 border-t border-gray-200">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-100 text-gray-700 hover:bg-gray-200 rounded-lg transition-colors text-sm font-medium"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
