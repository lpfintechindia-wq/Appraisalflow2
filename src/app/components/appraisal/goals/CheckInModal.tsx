import { useState } from 'react';
import { X, Activity, TrendingUp, AlertCircle, ArrowRight } from 'lucide-react';
import { Goal, CheckIn } from '../Goals';

interface CheckInModalProps {
  goal: Goal;
  onClose: () => void;
  onSubmit: (checkInData: Partial<CheckIn>) => void;
}

export function CheckInModal({ goal, onClose, onSubmit }: CheckInModalProps) {
  const [formData, setFormData] = useState({
    progress: goal.progress,
    achievement: '',
    blockers: '',
    nextSteps: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const progressDifference = formData.progress - goal.progress;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-hidden flex flex-col">
        <div className="sticky top-0 bg-white border-b border-gray-100 px-6 py-4">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <h2 className="text-xl font-semibold text-gray-900 mb-1">Submit Check-in</h2>
              <p className="text-sm text-gray-600">{goal.title}</p>
            </div>
            <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <X className="w-5 h-5 text-gray-500" />
            </button>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto">
          <div className="p-6 space-y-6">
            <div className="p-4 bg-purple-50 rounded-lg border border-purple-100">
              <div className="flex items-center gap-2 mb-2">
                <Activity className="w-5 h-5 text-purple-700" />
                <h3 className="text-sm font-semibold text-purple-900">Current Progress</h3>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex-1">
                  <div className="flex items-center justify-between text-xs text-purple-700 mb-1">
                    <span>Previous: {goal.progress}%</span>
                    <span>Current: {formData.progress}%</span>
                  </div>
                  <div className="w-full bg-purple-200 rounded-full h-2">
                    <div
                      className="bg-purple-600 h-2 rounded-full transition-all"
                      style={{ width: `${formData.progress}%` }}
                    ></div>
                  </div>
                </div>
              </div>
              {progressDifference > 0 && (
                <div className="flex items-center gap-1 text-xs text-green-700 mt-2">
                  <TrendingUp className="w-4 h-4" />
                  <span>+{progressDifference}% increase</span>
                </div>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Update Progress % <span className="text-red-500">*</span>
              </label>
              <div className="flex items-center gap-4">
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={formData.progress}
                  onChange={(e) => setFormData({ ...formData, progress: parseInt(e.target.value) })}
                  className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-purple-600"
                />
                <input
                  type="number"
                  min="0"
                  max="100"
                  value={formData.progress}
                  onChange={(e) => setFormData({ ...formData, progress: parseInt(e.target.value) })}
                  className="w-20 px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-center font-semibold"
                />
                <span className="text-sm text-gray-600">%</span>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                What did you achieve? <span className="text-red-500">*</span>
              </label>
              <textarea
                required
                value={formData.achievement}
                onChange={(e) => setFormData({ ...formData, achievement: e.target.value })}
                placeholder="Describe your accomplishments and progress made since the last check-in..."
                rows={4}
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <p className="text-xs text-gray-500 mt-1">Be specific about what you completed and any milestones reached</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Blockers / Challenges
              </label>
              <textarea
                value={formData.blockers}
                onChange={(e) => setFormData({ ...formData, blockers: e.target.value })}
                placeholder="Any obstacles or challenges you're facing? (optional)"
                rows={3}
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <p className="text-xs text-gray-500 mt-1">List any issues preventing you from making progress</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Next Steps <span className="text-red-500">*</span>
              </label>
              <textarea
                required
                value={formData.nextSteps}
                onChange={(e) => setFormData({ ...formData, nextSteps: e.target.value })}
                placeholder="What are your action items for the next period?"
                rows={3}
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <p className="text-xs text-gray-500 mt-1">Outline your plan for moving forward</p>
            </div>

            <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-blue-700 flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <h4 className="text-sm font-semibold text-blue-900 mb-1">Check-in Tips</h4>
                  <ul className="text-xs text-blue-800 space-y-1">
                    <li>• Be honest about your progress and challenges</li>
                    <li>• Update key results progress if applicable</li>
                    <li>• Regular check-ins help you stay on track</li>
                    <li>• Use this as an opportunity to get support if needed</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-4">
              <h3 className="text-sm font-semibold text-gray-900 mb-3">Key Results Status</h3>
              <div className="space-y-2">
                {goal.keyResults.map((kr) => {
                  const progress = Math.min(Math.round((kr.currentValue / kr.targetValue) * 100), 100);
                  return (
                    <div key={kr.id} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-900 mb-1">{kr.title}</p>
                        <div className="flex items-center gap-2">
                          <div className="flex-1 bg-gray-200 rounded-full h-1.5">
                            <div
                              className={`h-1.5 rounded-full ${
                                progress >= 70 ? 'bg-green-500' : progress >= 40 ? 'bg-yellow-500' : 'bg-red-500'
                              }`}
                              style={{ width: `${progress}%` }}
                            ></div>
                          </div>
                          <span className="text-xs text-gray-600 min-w-[80px]">
                            {kr.currentValue} / {kr.targetValue} {kr.unit}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="sticky bottom-0 bg-white border-t border-gray-100 px-6 py-4 flex gap-3 justify-end">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg text-sm font-medium hover:bg-purple-700 transition-colors"
            >
              Submit Check-in
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
