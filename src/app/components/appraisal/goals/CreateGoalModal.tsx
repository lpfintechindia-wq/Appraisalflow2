import { useState } from 'react';
import { X, Plus, Trash2, Target, Calendar, TrendingUp } from 'lucide-react';
import { Goal, KeyResult } from '../Goals';

interface CreateGoalModalProps {
  onClose: () => void;
  onCreate: (goalData: Partial<Goal>) => void;
}

export function CreateGoalModal({ onClose, onCreate }: CreateGoalModalProps) {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    framework: 'OKR' as 'OKR' | 'SMART' | 'KRA',
    goalType: 'Individual' as 'Individual' | 'Team' | 'Cascaded' | 'Stretch',
    weight: 0,
    priority: 'Medium' as 'High' | 'Medium' | 'Low',
    targetDate: '',
    measurementCriteria: ''
  });

  const [keyResults, setKeyResults] = useState<Partial<KeyResult>[]>([
    { title: '', targetValue: 0, currentValue: 0, unit: '', confidence: 'Medium' }
  ]);

  const handleAddKeyResult = () => {
    setKeyResults([...keyResults, { title: '', targetValue: 0, currentValue: 0, unit: '', confidence: 'Medium' }]);
  };

  const handleRemoveKeyResult = (index: number) => {
    setKeyResults(keyResults.filter((_, i) => i !== index));
  };

  const handleKeyResultChange = (index: number, field: string, value: any) => {
    const updated = [...keyResults];
    updated[index] = { ...updated[index], [field]: value };
    setKeyResults(updated);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onCreate({
      ...formData,
      keyResults: keyResults.map((kr, i) => ({
        id: `kr${i + 1}`,
        title: kr.title || '',
        targetValue: kr.targetValue || 0,
        currentValue: kr.currentValue || 0,
        unit: kr.unit || '',
        confidence: kr.confidence || 'Medium'
      }))
    });
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-xl max-w-3xl w-full max-h-[90vh] overflow-hidden flex flex-col">
        <div className="sticky top-0 bg-white border-b border-gray-100 px-6 py-4 flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold text-gray-900">Create New Goal</h2>
            <p className="text-sm text-gray-600 mt-1">Define your goal and key results</p>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto">
          <div className="p-6 space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Goal Title <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                placeholder="e.g., Increase customer retention rate by 20%"
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                placeholder="Provide a detailed description of this goal..."
                rows={3}
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Framework <span className="text-red-500">*</span>
                </label>
                <select
                  required
                  value={formData.framework}
                  onChange={(e) => setFormData({ ...formData, framework: e.target.value as any })}
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  <option value="OKR">OKR (Objectives & Key Results)</option>
                  <option value="SMART">SMART (Specific, Measurable, Achievable, Relevant, Time-bound)</option>
                  <option value="KRA">KRA (Key Result Areas)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Goal Type <span className="text-red-500">*</span>
                </label>
                <select
                  required
                  value={formData.goalType}
                  onChange={(e) => setFormData({ ...formData, goalType: e.target.value as any })}
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  <option value="Individual">Individual</option>
                  <option value="Team">Team</option>
                  <option value="Cascaded">Cascaded</option>
                  <option value="Stretch">Stretch</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Weight % <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  required
                  min="0"
                  max="100"
                  value={formData.weight}
                  onChange={(e) => setFormData({ ...formData, weight: parseInt(e.target.value) })}
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Priority <span className="text-red-500">*</span>
                </label>
                <select
                  required
                  value={formData.priority}
                  onChange={(e) => setFormData({ ...formData, priority: e.target.value as any })}
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  <option value="High">High</option>
                  <option value="Medium">Medium</option>
                  <option value="Low">Low</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Target Date <span className="text-red-500">*</span>
                </label>
                <input
                  type="date"
                  required
                  value={formData.targetDate}
                  onChange={(e) => setFormData({ ...formData, targetDate: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Measurement Criteria <span className="text-red-500">*</span>
              </label>
              <textarea
                required
                value={formData.measurementCriteria}
                onChange={(e) => setFormData({ ...formData, measurementCriteria: e.target.value })}
                placeholder="How will success be measured? Be specific about metrics and targets..."
                rows={3}
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <div className="border-t border-gray-200 pt-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-base font-semibold text-gray-900">Key Results</h3>
                  <p className="text-sm text-gray-600">Define measurable outcomes for this goal</p>
                </div>
                <button
                  type="button"
                  onClick={handleAddKeyResult}
                  className="flex items-center gap-2 px-3 py-2 bg-purple-50 text-purple-700 rounded-lg hover:bg-purple-100 transition-colors"
                >
                  <Plus className="w-4 h-4" />
                  Add Key Result
                </button>
              </div>

              <div className="space-y-4">
                {keyResults.map((kr, index) => (
                  <div key={index} className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                    <div className="flex items-start justify-between mb-3">
                      <span className="text-sm font-medium text-gray-700">Key Result {index + 1}</span>
                      {keyResults.length > 1 && (
                        <button
                          type="button"
                          onClick={() => handleRemoveKeyResult(index)}
                          className="p-1 hover:bg-gray-200 rounded transition-colors"
                        >
                          <Trash2 className="w-4 h-4 text-red-600" />
                        </button>
                      )}
                    </div>

                    <div className="space-y-3">
                      <input
                        type="text"
                        placeholder="Key Result title"
                        value={kr.title}
                        onChange={(e) => handleKeyResultChange(index, 'title', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white"
                      />

                      <div className="grid grid-cols-3 gap-3">
                        <input
                          type="number"
                          placeholder="Target"
                          value={kr.targetValue}
                          onChange={(e) => handleKeyResultChange(index, 'targetValue', parseFloat(e.target.value))}
                          className="px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white"
                        />
                        <input
                          type="number"
                          placeholder="Current"
                          value={kr.currentValue}
                          onChange={(e) => handleKeyResultChange(index, 'currentValue', parseFloat(e.target.value))}
                          className="px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white"
                        />
                        <input
                          type="text"
                          placeholder="Unit (e.g., %, $)"
                          value={kr.unit}
                          onChange={(e) => handleKeyResultChange(index, 'unit', e.target.value)}
                          className="px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white"
                        />
                      </div>

                      <select
                        value={kr.confidence}
                        onChange={(e) => handleKeyResultChange(index, 'confidence', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white"
                      >
                        <option value="High">High Confidence</option>
                        <option value="Medium">Medium Confidence</option>
                        <option value="Low">Low Confidence</option>
                      </select>
                    </div>
                  </div>
                ))}
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
              <Target className="w-4 h-4" />
              Submit for Approval
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
