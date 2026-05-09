import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ArrowLeft, Edit2, TrendingUp, Check, X, AlertCircle, BarChart3 } from 'lucide-react';

interface Employee {
  id: string;
  name: string;
  employeeId: string;
  department: string;
  designation: string;
  selfRating: number;
  managerRating: number;
  suggestedRating: number;
  finalRating: number;
  ratingBand: string;
  modified: boolean;
}

interface CalibrationSession {
  id: string;
  name: string;
  appraisalCycle: string;
  department: string;
  participants: string[];
  status: 'Draft' | 'In Progress' | 'Finalized';
  createdDate: string;
  employees: Employee[];
}

const ratingBands = [
  { value: 5, label: 'Outstanding', color: 'bg-purple-100 text-purple-700' },
  { value: 4.5, label: 'Exceeds Expectations', color: 'bg-blue-100 text-blue-700' },
  { value: 4, label: 'Meets Expectations', color: 'bg-green-100 text-green-700' },
  { value: 3.5, label: 'Needs Improvement', color: 'bg-yellow-100 text-yellow-700' },
  { value: 3, label: 'Unsatisfactory', color: 'bg-red-100 text-red-700' },
];

export function CalibrationSessionView() {
  const navigate = useNavigate();
  const location = useLocation();
  const initialSession = location.state?.session as CalibrationSession;

  const [session, setSession] = useState<CalibrationSession>(initialSession);
  const [employees, setEmployees] = useState<Employee[]>(initialSession?.employees || []);
  const [editingCell, setEditingCell] = useState<{ id: string; field: 'finalRating' | 'ratingBand' } | null>(null);
  const [showBellCurveModal, setShowBellCurveModal] = useState(false);
  const [showFinalizeModal, setShowFinalizeModal] = useState(false);

  const isFinalized = session?.status === 'Finalized';

  const handleCellEdit = (employeeId: string, field: 'finalRating' | 'ratingBand', value: number | string) => {
    setEmployees(employees.map(emp => {
      if (emp.id === employeeId) {
        if (field === 'finalRating') {
          const rating = Number(value);
          const band = ratingBands.find(b => b.value === rating)?.label || emp.ratingBand;
          return { ...emp, finalRating: rating, ratingBand: band, modified: true };
        } else {
          const bandLabel = value as string;
          const rating = ratingBands.find(b => b.label === bandLabel)?.value || emp.finalRating;
          return { ...emp, ratingBand: bandLabel, finalRating: rating, modified: true };
        }
      }
      return emp;
    }));
    setEditingCell(null);
  };

  const handleApplyBellCurve = (distribution: { outstanding: number; exceeds: number; meets: number; below: number }) => {
    // Simple bell curve application logic
    const sortedEmployees = [...employees].sort((a, b) => b.suggestedRating - a.suggestedRating);
    const total = sortedEmployees.length;

    let outstandingCount = Math.round((distribution.outstanding / 100) * total);
    let exceedsCount = Math.round((distribution.exceeds / 100) * total);
    let meetsCount = Math.round((distribution.meets / 100) * total);
    let belowCount = total - (outstandingCount + exceedsCount + meetsCount);

    const updated = sortedEmployees.map((emp, index) => {
      let newRating = emp.finalRating;
      let newBand = emp.ratingBand;

      if (index < outstandingCount) {
        newRating = 5;
        newBand = 'Outstanding';
      } else if (index < outstandingCount + exceedsCount) {
        newRating = 4.5;
        newBand = 'Exceeds Expectations';
      } else if (index < outstandingCount + exceedsCount + meetsCount) {
        newRating = 4;
        newBand = 'Meets Expectations';
      } else {
        newRating = 3.5;
        newBand = 'Needs Improvement';
      }

      return { ...emp, finalRating: newRating, ratingBand: newBand, modified: true };
    });

    setEmployees(updated);
    setShowBellCurveModal(false);
  };

  const handleFinalize = () => {
    setSession({ ...session, status: 'Finalized' });
    setShowFinalizeModal(false);
  };

  const getRatingDistribution = () => {
    const distribution = {
      'Outstanding': 0,
      'Exceeds Expectations': 0,
      'Meets Expectations': 0,
      'Needs Improvement': 0,
      'Unsatisfactory': 0,
    };

    employees.forEach(emp => {
      if (distribution.hasOwnProperty(emp.ratingBand)) {
        distribution[emp.ratingBand as keyof typeof distribution]++;
      }
    });

    return distribution;
  };

  const distribution = getRatingDistribution();
  const modifiedCount = employees.filter(e => e.modified).length;

  if (!session) {
    return (
      <div className="p-6 md:p-8 bg-[#f8f9fc] min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600 mb-4">Session not found</p>
          <button
            onClick={() => navigate('/appraisal/calibration')}
            className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
          >
            Back to Calibration
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f8f9fc]">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="px-8 py-4">
          <div className="flex items-center justify-between mb-4">
            <button
              onClick={() => navigate('/appraisal/calibration')}
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="text-sm font-medium">Back to Sessions</span>
            </button>
            <div className="flex items-center gap-3">
              {!isFinalized && (
                <>
                  <button
                    onClick={() => setShowBellCurveModal(true)}
                    className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors"
                  >
                    <TrendingUp className="w-4 h-4" />
                    Apply Bell Curve
                  </button>
                  <button
                    onClick={() => setShowFinalizeModal(true)}
                    className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg text-sm font-medium hover:bg-green-700 transition-colors"
                  >
                    <Check className="w-4 h-4" />
                    Finalize
                  </button>
                </>
              )}
            </div>
          </div>

          <div>
            <h1 className="text-2xl font-semibold text-gray-900">{session.name}</h1>
            <div className="flex items-center gap-4 mt-2">
              <span className="text-sm text-gray-600">Cycle: <span className="font-medium text-gray-900">{session.appraisalCycle}</span></span>
              <span className="text-gray-300">•</span>
              <span className="text-sm text-gray-600">Department: <span className="font-medium text-gray-900">{session.department}</span></span>
              <span className="text-gray-300">•</span>
              <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${
                session.status === 'Finalized' ? 'bg-green-100 text-green-700' :
                session.status === 'In Progress' ? 'bg-blue-100 text-blue-700' :
                'bg-gray-100 text-gray-700'
              }`}>
                {session.status}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-6 p-8">
        {/* Main Content */}
        <div className="flex-1 space-y-6">
          {/* Modified Notice */}
          {modifiedCount > 0 && (
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 flex items-center gap-3">
              <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
              <p className="text-sm text-blue-900">
                {modifiedCount} employee rating{modifiedCount !== 1 ? 's have' : ' has'} been modified
              </p>
            </div>
          )}

          {/* Employee Ratings Table */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900">Employee Ratings</h3>
              <p className="text-sm text-gray-600 mt-1">{employees.length} employees in this calibration session</p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-100">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Employee Name</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Department</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Self Rating</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Manager Rating</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Suggested Rating</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Final Rating</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Rating Band</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {employees.map((employee) => (
                    <tr key={employee.id} className={`hover:bg-gray-50 transition-colors ${employee.modified ? 'bg-yellow-50' : ''}`}>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                            <span className="text-white font-medium text-sm">
                              {employee.name.split(' ').map(n => n[0]).join('')}
                            </span>
                          </div>
                          <div>
                            <div className="text-sm font-medium text-gray-900">{employee.name}</div>
                            <div className="text-xs text-gray-500">{employee.employeeId}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-gray-700">{employee.department}</div>
                        <div className="text-xs text-gray-500">{employee.designation}</div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-sm font-medium text-gray-900">{employee.selfRating.toFixed(1)}</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-sm font-medium text-gray-900">{employee.managerRating.toFixed(1)}</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-sm font-medium text-gray-900">{employee.suggestedRating.toFixed(1)}</span>
                      </td>
                      <td className="px-6 py-4">
                        {editingCell?.id === employee.id && editingCell?.field === 'finalRating' && !isFinalized ? (
                          <select
                            autoFocus
                            value={employee.finalRating}
                            onChange={(e) => handleCellEdit(employee.id, 'finalRating', e.target.value)}
                            onBlur={() => setEditingCell(null)}
                            className="w-20 px-2 py-1 border border-purple-500 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
                          >
                            <option value="5">5.0</option>
                            <option value="4.5">4.5</option>
                            <option value="4">4.0</option>
                            <option value="3.5">3.5</option>
                            <option value="3">3.0</option>
                          </select>
                        ) : (
                          <button
                            onClick={() => !isFinalized && setEditingCell({ id: employee.id, field: 'finalRating' })}
                            disabled={isFinalized}
                            className={`text-sm font-semibold text-purple-600 ${!isFinalized ? 'hover:underline' : 'cursor-not-allowed opacity-50'}`}
                          >
                            {employee.finalRating.toFixed(1)}
                          </button>
                        )}
                      </td>
                      <td className="px-6 py-4">
                        {editingCell?.id === employee.id && editingCell?.field === 'ratingBand' && !isFinalized ? (
                          <select
                            autoFocus
                            value={employee.ratingBand}
                            onChange={(e) => handleCellEdit(employee.id, 'ratingBand', e.target.value)}
                            onBlur={() => setEditingCell(null)}
                            className="px-2 py-1 border border-purple-500 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
                          >
                            {ratingBands.map(band => (
                              <option key={band.value} value={band.label}>{band.label}</option>
                            ))}
                          </select>
                        ) : (
                          <button
                            onClick={() => !isFinalized && setEditingCell({ id: employee.id, field: 'ratingBand' })}
                            disabled={isFinalized}
                            className={!isFinalized ? 'cursor-pointer' : 'cursor-not-allowed'}
                          >
                            <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${
                              ratingBands.find(b => b.label === employee.ratingBand)?.color || 'bg-gray-100 text-gray-700'
                            }`}>
                              {employee.ratingBand}
                            </span>
                          </button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {employees.length === 0 && (
              <div className="px-6 py-12 text-center">
                <p className="text-sm text-gray-500">No employees in this calibration session</p>
              </div>
            )}
          </div>

          {/* Distribution Chart */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <div className="flex items-center gap-2 mb-6">
              <BarChart3 className="w-5 h-5 text-purple-600" />
              <h3 className="text-lg font-semibold text-gray-900">Rating Distribution</h3>
            </div>

            <div className="space-y-4">
              {Object.entries(distribution).map(([band, count]) => {
                const percentage = employees.length > 0 ? (count / employees.length) * 100 : 0;
                const bandColor = ratingBands.find(b => b.label === band)?.color || 'bg-gray-100 text-gray-700';

                return (
                  <div key={band}>
                    <div className="flex items-center justify-between mb-2">
                      <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${bandColor}`}>
                        {band}
                      </span>
                      <span className="text-sm font-medium text-gray-900">{count} ({percentage.toFixed(0)}%)</span>
                    </div>
                    <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className={`h-full ${bandColor.replace('text-', 'bg-').replace('100', '500')} rounded-full transition-all`}
                        style={{ width: `${percentage}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Summary Panel - Sticky */}
        <div className="w-80">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 sticky top-24">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Summary</h3>

            <div className="space-y-4">
              <div>
                <div className="text-sm text-gray-600 mb-1">Total Employees</div>
                <div className="text-3xl font-bold text-gray-900">{employees.length}</div>
              </div>

              <div className="pt-4 border-t border-gray-200">
                <div className="text-sm font-medium text-gray-900 mb-3">Rating Breakdown</div>
                <div className="space-y-2">
                  {Object.entries(distribution).map(([band, count]) => (
                    <div key={band} className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">{band}</span>
                      <span className="text-sm font-medium text-gray-900">{count}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-gray-200">
                <div className="text-sm text-gray-600 mb-1">Modified Ratings</div>
                <div className="text-2xl font-bold text-purple-600">{modifiedCount}</div>
              </div>

              <div className="pt-4 border-t border-gray-200">
                <div className="text-sm text-gray-600 mb-1">Participants</div>
                <div className="flex flex-wrap gap-2 mt-2">
                  {session.participants.map((participant, index) => (
                    <span key={index} className="px-2.5 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">
                      {participant}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Apply Bell Curve Modal */}
      {showBellCurveModal && (
        <BellCurveModal
          onClose={() => setShowBellCurveModal(false)}
          onApply={handleApplyBellCurve}
        />
      )}

      {/* Finalize Confirmation Modal */}
      {showFinalizeModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full">
            {/* Header */}
            <div className="bg-gradient-to-r from-green-600 to-green-700 px-8 py-6 flex items-center justify-between">
              <h2 className="text-xl font-semibold text-white">Finalize Calibration</h2>
              <button
                onClick={() => setShowFinalizeModal(false)}
                className="p-1.5 hover:bg-white/20 rounded-lg transition-colors"
              >
                <X className="w-5 h-5 text-white" />
              </button>
            </div>

            {/* Content */}
            <div className="p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                  <Check className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Are you sure?</h3>
                  <p className="text-sm text-gray-600">
                    Finalizing will lock all ratings and make them read-only. You won't be able to edit ratings after this action. Continue?
                  </p>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="px-8 py-4 bg-gray-50 flex gap-3 justify-end border-t border-gray-200 rounded-b-2xl">
              <button
                onClick={() => setShowFinalizeModal(false)}
                className="px-6 py-2.5 bg-white border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleFinalize}
                className="px-6 py-2.5 bg-green-600 text-white rounded-lg text-sm font-medium hover:bg-green-700 transition-colors"
              >
                Finalize Session
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// Bell Curve Modal
function BellCurveModal({
  onClose,
  onApply,
}: {
  onClose: () => void;
  onApply: (distribution: { outstanding: number; exceeds: number; meets: number; below: number }) => void;
}) {
  const [distribution, setDistribution] = useState({
    outstanding: 10,
    exceeds: 20,
    meets: 50,
    below: 20,
  });

  const total = distribution.outstanding + distribution.exceeds + distribution.meets + distribution.below;

  const handleSubmit = () => {
    if (total !== 100) {
      alert('Total distribution must equal 100%');
      return;
    }
    onApply(distribution);
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full">
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-600 to-purple-700 px-8 py-6 flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold text-white">Apply Bell Curve</h2>
            <p className="text-purple-100 text-sm mt-1">Set percentage distribution for each rating band</p>
          </div>
          <button onClick={onClose} className="p-1.5 hover:bg-white/20 rounded-lg transition-colors">
            <X className="w-5 h-5 text-white" />
          </button>
        </div>

        {/* Content */}
        <div className="p-8">
          <div className="space-y-6">
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-sm font-medium text-gray-900">Outstanding</label>
                <span className="text-sm font-semibold text-purple-600">{distribution.outstanding}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={distribution.outstanding}
                onChange={(e) => setDistribution({ ...distribution, outstanding: Number(e.target.value) })}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-purple-600"
              />
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-sm font-medium text-gray-900">Exceeds Expectations</label>
                <span className="text-sm font-semibold text-blue-600">{distribution.exceeds}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={distribution.exceeds}
                onChange={(e) => setDistribution({ ...distribution, exceeds: Number(e.target.value) })}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
              />
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-sm font-medium text-gray-900">Meets Expectations</label>
                <span className="text-sm font-semibold text-green-600">{distribution.meets}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={distribution.meets}
                onChange={(e) => setDistribution({ ...distribution, meets: Number(e.target.value) })}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-green-600"
              />
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-sm font-medium text-gray-900">Below Expectations</label>
                <span className="text-sm font-semibold text-yellow-600">{distribution.below}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={distribution.below}
                onChange={(e) => setDistribution({ ...distribution, below: Number(e.target.value) })}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-yellow-600"
              />
            </div>

            <div className={`p-4 rounded-lg ${total === 100 ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}`}>
              <div className="flex items-center justify-between">
                <span className={`text-sm font-medium ${total === 100 ? 'text-green-900' : 'text-red-900'}`}>Total Distribution</span>
                <span className={`text-lg font-bold ${total === 100 ? 'text-green-600' : 'text-red-600'}`}>{total}%</span>
              </div>
              {total !== 100 && (
                <p className="text-xs text-red-700 mt-1">Total must equal 100%</p>
              )}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-8 py-4 bg-gray-50 flex gap-3 justify-end border-t border-gray-200 rounded-b-2xl">
          <button
            onClick={onClose}
            className="px-6 py-2.5 bg-white border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            disabled={total !== 100}
            className="px-6 py-2.5 bg-purple-600 text-white rounded-lg text-sm font-medium hover:bg-purple-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Apply Bell Curve
          </button>
        </div>
      </div>
    </div>
  );
}
