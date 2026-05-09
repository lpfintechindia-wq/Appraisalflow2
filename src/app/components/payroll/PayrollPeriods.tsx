import { useState } from 'react';
import { Search, Plus, Download, Calendar, Users, Receipt, AlertCircle, Play, Eye, FileText } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface PayrollPeriod {
  id: string;
  period: string;
  startDate: string;
  endDate: string;
  paymentDate: string;
  employees: number;
  gross: number;
  netPay: number;
  tds: number;
  status: 'Open' | 'Locked' | 'Paid';
}

const mockPeriods: PayrollPeriod[] = [
  {
    id: '1',
    period: 'April 2026',
    startDate: '2026-04-01',
    endDate: '2026-04-30',
    paymentDate: '2026-05-01',
    employees: 250,
    gross: 12500000,
    netPay: 10875000,
    tds: 1625000,
    status: 'Open',
  },
  {
    id: '2',
    period: 'March 2026',
    startDate: '2026-03-01',
    endDate: '2026-03-31',
    paymentDate: '2026-04-01',
    employees: 248,
    gross: 12400000,
    netPay: 10788000,
    tds: 1612000,
    status: 'Paid',
  },
  {
    id: '3',
    period: 'February 2026',
    startDate: '2026-02-01',
    endDate: '2026-02-28',
    paymentDate: '2026-03-01',
    employees: 245,
    gross: 12250000,
    netPay: 10657500,
    tds: 1592500,
    status: 'Paid',
  },
];

export function PayrollPeriods() {
  const navigate = useNavigate();
  const [periods, setPeriods] = useState<PayrollPeriod[]>(mockPeriods);
  const [searchTerm, setSearchTerm] = useState('');

  const stats = {
    totalPayouts: periods.reduce((sum, p) => sum + p.netPay, 0),
    totalEmployees: periods[0]?.employees || 0,
    totalTDS: periods.reduce((sum, p) => sum + p.tds, 0),
    pendingActions: periods.filter(p => p.status === 'Open').length,
  };

  return (
    <div className="p-6 bg-[#f5f7fa] min-h-full">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-gray-900 mb-2 cursor-pointer hover:text-[#2e75b6] active:text-[#1e4d8c] transition-colors select-none">
          Payroll Periods
        </h1>
        <p className="text-sm text-gray-600 cursor-pointer hover:text-gray-900 active:text-[#2e75b6] transition-colors select-none">
          Manage and track all payroll periods and payment cycles
        </p>
      </div>

      {/* Actions Bar */}
      <div className="flex items-center justify-between mb-6">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search periods..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#2e75b6]"
          />
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2.5 border border-gray-300 bg-white text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium">
            <Download className="w-4 h-4" />
            Export
          </button>
          <button
            onClick={() => navigate('/payroll/periods/new')}
            className="flex items-center gap-2 px-4 py-2.5 bg-[#2e75b6] text-white rounded-lg hover:bg-[#1e4d8c] transition-colors text-sm font-medium"
          >
            <Plus className="w-4 h-4" />
            New Period
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-4 gap-6 mb-6">
        <div className="bg-white rounded-lg border border-[#e5e7eb] p-5 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
              <Receipt className="w-5 h-5 text-[#2e75b6]" />
            </div>
          </div>
          <div className="text-sm text-gray-600 mb-1">Total Payouts (YTD)</div>
          <div className="text-2xl font-semibold text-gray-900">₹{(stats.totalPayouts / 10000000).toFixed(2)}Cr</div>
        </div>

        <div className="bg-white rounded-lg border border-[#e5e7eb] p-5 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <div className="w-10 h-10 rounded-lg bg-green-50 flex items-center justify-center">
              <Users className="w-5 h-5 text-green-600" />
            </div>
          </div>
          <div className="text-sm text-gray-600 mb-1">Active Employees</div>
          <div className="text-2xl font-semibold text-gray-900">{stats.totalEmployees}</div>
        </div>

        <div className="bg-white rounded-lg border border-[#e5e7eb] p-5 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <div className="w-10 h-10 rounded-lg bg-purple-50 flex items-center justify-center">
              <FileText className="w-5 h-5 text-purple-600" />
            </div>
          </div>
          <div className="text-sm text-gray-600 mb-1">Total TDS Deducted</div>
          <div className="text-2xl font-semibold text-gray-900">₹{(stats.totalTDS / 10000000).toFixed(2)}Cr</div>
        </div>

        <div className="bg-white rounded-lg border border-[#e5e7eb] p-5 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <div className="w-10 h-10 rounded-lg bg-orange-50 flex items-center justify-center">
              <AlertCircle className="w-5 h-5 text-orange-600" />
            </div>
          </div>
          <div className="text-sm text-gray-600 mb-1">Pending Actions</div>
          <div className="text-2xl font-semibold text-gray-900">{stats.pendingActions}</div>
        </div>
      </div>

      {/* Periods Table */}
      <div className="bg-white rounded-lg border border-[#e5e7eb] shadow-sm overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-[#e5e7eb]">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Period</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Period Dates</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Payment Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Employees</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Gross Pay</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Net Pay</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">TDS</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {periods.map((period) => (
              <tr key={period.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-gray-400" />
                    <span className="text-sm font-medium text-gray-900">{period.period}</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm text-gray-600">
                    {new Date(period.startDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} - {new Date(period.endDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm text-gray-600">{new Date(period.paymentDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</div>
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm font-medium text-gray-900">{period.employees}</div>
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm font-medium text-gray-900">₹{(period.gross / 100000).toFixed(2)}L</div>
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm font-semibold text-green-600">₹{(period.netPay / 100000).toFixed(2)}L</div>
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm text-gray-600">₹{(period.tds / 100000).toFixed(2)}L</div>
                </td>
                <td className="px-6 py-4">
                  <span
                    className={`inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium ${
                      period.status === 'Open'
                        ? 'bg-yellow-50 text-yellow-700 border border-yellow-200'
                        : period.status === 'Locked'
                        ? 'bg-blue-50 text-blue-700 border border-blue-200'
                        : 'bg-green-50 text-green-700 border border-green-200'
                    }`}
                  >
                    {period.status}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center justify-end gap-2">
                    {period.status === 'Open' && (
                      <button
                        onClick={() => navigate('/payroll/run', { state: { period } })}
                        className="p-2 text-[#2e75b6] hover:bg-blue-50 rounded-lg transition-colors"
                        title="Run Payroll"
                      >
                        <Play className="w-4 h-4" />
                      </button>
                    )}
                    <button
                      onClick={() => navigate('/payroll/review', { state: { period } })}
                      className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                      title="View Details"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => navigate('/payroll/payslips', { state: { period } })}
                      className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                      title="View Payslips"
                    >
                      <FileText className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
