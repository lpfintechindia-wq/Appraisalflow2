import { useState } from 'react';
import { X, CheckCircle, XCircle, AlertCircle, Target, Calendar, BarChart3 } from 'lucide-react';
import { Goal } from '../Goals';

interface ApprovalModalProps {
  goal: Goal;
  onClose: () => void;
  onApprove: (approved: boolean, comment?: string) => void;
}

export function ApprovalModal({ goal, onClose, onApprove }: ApprovalModalProps) {
  const [comment, setComment] = useState('');
  const [action, setAction] = useState<'approve' | 'reject' | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (action) {
      onApprove(action === 'approve', comment);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-xl max-w-3xl w-full max-h-[90vh] overflow-hidden flex flex-col">
        <div className="sticky top-0 bg-white border-b border-gray-100 px-6 py-4">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <h2 className="text-xl font-semibold text-gray-900 mb-1">Goal Approval</h2>
              <p className="text-sm text-gray-600">Review and approve or reject this goal</p>
            </div>
            <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <X className="w-5 h-5 text-gray-500" />
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          <div className="space-y-6">
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2 py-1 bg-purple-50 text-purple-700 text-xs font-medium rounded">
                      {goal.framework}
                    </span>
                    <span className="px-2 py-1 bg-orange-100 text-orange-700 text-xs font-medium rounded border border-orange-200">
                      Pending Approval
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{goal.title}</h3>
                  <p className="text-sm text-gray-700">{goal.description}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-4">
                <div className="flex items-center gap-2">
                  <Target className="w-4 h-4 text-gray-500" />
                  <div>
                    <p className="text-xs text-gray-600">Type</p>
                    <p className="text-sm font-medium text-gray-900">{goal.goalType}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-gray-500" />
                  <div>
                    <p className="text-xs text-gray-600">Priority</p>
                    <p className="text-sm font-medium text-gray-900">{goal.priority}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <BarChart3 className="w-4 h-4 text-gray-500" />
                  <div>
                    <p className="text-xs text-gray-600">Weight</p>
                    <p className="text-sm font-medium text-gray-900">{goal.weight}%</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-gray-500" />
                  <div>
                    <p className="text-xs text-gray-600">Target</p>
                    <p className="text-sm font-medium text-gray-900">
                      {new Date(goal.targetDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-gray-900 mb-2">Employee</h4>
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                  <span className="text-purple-700 font-medium">{goal.employee.charAt(0)}</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">{goal.employee}</p>
                  <p className="text-xs text-gray-600">Goal Owner</p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-gray-900 mb-2">Measurement Criteria</h4>
              <p className="text-sm text-gray-700 bg-gray-50 p-4 rounded-lg">{goal.measurementCriteria}</p>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-gray-900 mb-3">
                Key Results ({goal.keyResults.length})
              </h4>
              <div className="space-y-3">
                {goal.keyResults.map((kr, index) => (
                  <div key={kr.id} className="p-3 bg-gray-50 rounded-lg border border-gray-200">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1">
                        <span className="text-xs font-medium text-gray-600">KR {index + 1}</span>
                        <h5 className="text-sm font-semibold text-gray-900 mt-1">{kr.title}</h5>
                      </div>
                      <span className={`px-2 py-0.5 rounded text-xs font-medium ${
                        kr.confidence === 'High' ? 'bg-green-100 text-green-700' :
                        kr.confidence === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
                        'bg-red-100 text-red-700'
                      }`}>
                        {kr.confidence}
                      </span>
                    </div>
                    <div className="flex items-center gap-4 text-sm">
                      <div>
                        <span className="text-gray-600">Target: </span>
                        <span className="font-medium text-gray-900">{kr.targetValue} {kr.unit}</span>
                      </div>
                      <div>
                        <span className="text-gray-600">Current: </span>
                        <span className="font-medium text-gray-900">{kr.currentValue} {kr.unit}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-blue-700 flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <h4 className="text-sm font-semibold text-blue-900 mb-1">Review Checklist</h4>
                  <ul className="text-xs text-blue-800 space-y-1">
                    <li>✓ Goal is aligned with organizational objectives</li>
                    <li>✓ Targets are challenging but achievable</li>
                    <li>✓ Measurement criteria are clear and specific</li>
                    <li>✓ Key results are well-defined and measurable</li>
                    <li>✓ Timeline is realistic</li>
                  </ul>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Comments (Optional)
                </label>
                <textarea
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  placeholder="Add your feedback or comments..."
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>

              <div className="flex gap-3">
                <button
                  type="submit"
                  onClick={() => setAction('reject')}
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-white border-2 border-red-300 text-red-700 rounded-lg hover:bg-red-50 font-medium transition-colors"
                >
                  <XCircle className="w-5 h-5" />
                  Reject Goal
                </button>
                <button
                  type="submit"
                  onClick={() => setAction('approve')}
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 font-medium transition-colors"
                >
                  <CheckCircle className="w-5 h-5" />
                  Approve Goal
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="sticky bottom-0 bg-white border-t border-gray-100 px-6 py-3">
          <button
            onClick={onClose}
            className="w-full px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors"
          >
            Close Without Action
          </button>
        </div>
      </div>
    </div>
  );
}
