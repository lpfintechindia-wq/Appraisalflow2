import { useState } from 'react';
import {
  X, Target, Calendar, TrendingUp, Users, AlertCircle,
  MessageSquare, Activity, Edit2, Clock, CheckCircle, BarChart3
} from 'lucide-react';
import { Goal } from '../Goals';

interface GoalDetailModalProps {
  goal: Goal;
  onClose: () => void;
  onCheckIn: () => void;
}

export function GoalDetailModal({ goal, onClose, onCheckIn }: GoalDetailModalProps) {
  const [activeTab, setActiveTab] = useState<'overview' | 'keyresults' | 'checkins'>('overview');

  const getStatusColor = (status: string) => {
    const colors = {
      'Pending': 'bg-yellow-100 text-yellow-700 border-yellow-200',
      'Approved': 'bg-green-100 text-green-700 border-green-200',
      'In Progress': 'bg-blue-100 text-blue-700 border-blue-200',
      'Completed': 'bg-emerald-100 text-emerald-700 border-emerald-200',
      'Rejected': 'bg-red-100 text-red-700 border-red-200',
      'Pending Approval': 'bg-orange-100 text-orange-700 border-orange-200'
    };
    return colors[status as keyof typeof colors] || 'bg-gray-100 text-gray-700 border-gray-200';
  };

  const getConfidenceColor = (confidence: string) => {
    const colors = {
      'High': 'bg-green-100 text-green-700',
      'Medium': 'bg-yellow-100 text-yellow-700',
      'Low': 'bg-red-100 text-red-700'
    };
    return colors[confidence as keyof typeof colors];
  };

  const calculateKRProgress = (current: number, target: number) => {
    return Math.min(Math.round((current / target) * 100), 100);
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col">
        <div className="sticky top-0 bg-white border-b border-gray-100 px-6 py-4">
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2 py-1 bg-purple-50 text-purple-700 text-xs font-medium rounded">
                  {goal.framework}
                </span>
                <span className={`inline-flex items-center px-2 py-1 rounded text-xs font-medium border ${getStatusColor(goal.approvalStatus || goal.status)}`}>
                  {goal.approvalStatus || goal.status}
                </span>
              </div>
              <h2 className="text-xl font-semibold text-gray-900 mb-1">{goal.title}</h2>
              <p className="text-sm text-gray-600">{goal.description}</p>
            </div>
            <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <X className="w-5 h-5 text-gray-500" />
            </button>
          </div>

          <div className="flex gap-1 bg-gray-50 p-1 rounded-lg">
            <button
              onClick={() => setActiveTab('overview')}
              className={`flex-1 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                activeTab === 'overview'
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab('keyresults')}
              className={`flex-1 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                activeTab === 'keyresults'
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Key Results
            </button>
            <button
              onClick={() => setActiveTab('checkins')}
              className={`flex-1 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                activeTab === 'checkins'
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Check-ins
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-2 text-gray-600 mb-1">
                    <Users className="w-4 h-4" />
                    <span className="text-sm">Goal Type</span>
                  </div>
                  <p className="text-base font-semibold text-gray-900">{goal.goalType}</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-2 text-gray-600 mb-1">
                    <AlertCircle className="w-4 h-4" />
                    <span className="text-sm">Priority</span>
                  </div>
                  <p className="text-base font-semibold text-gray-900">{goal.priority}</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-2 text-gray-600 mb-1">
                    <BarChart3 className="w-4 h-4" />
                    <span className="text-sm">Weight</span>
                  </div>
                  <p className="text-base font-semibold text-gray-900">{goal.weight}%</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-2 text-gray-600 mb-1">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">Target Date</span>
                  </div>
                  <p className="text-base font-semibold text-gray-900">
                    {new Date(goal.targetDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-medium text-gray-700 mb-3">Overall Progress</h3>
                <div className="flex items-center gap-4">
                  <div className="flex-1 bg-gray-200 rounded-full h-3">
                    <div
                      className="bg-purple-600 h-3 rounded-full transition-all"
                      style={{ width: `${goal.progress}%` }}
                    ></div>
                  </div>
                  <span className="text-2xl font-semibold text-purple-600 min-w-[60px]">{goal.progress}%</span>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-medium text-gray-700 mb-2">Measurement Criteria</h3>
                <p className="text-sm text-gray-900 bg-gray-50 p-4 rounded-lg">{goal.measurementCriteria}</p>
              </div>

              <div>
                <h3 className="text-sm font-medium text-gray-700 mb-2">Assigned To</h3>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                    <span className="text-purple-700 font-medium">{goal.employee.charAt(0)}</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">{goal.employee}</p>
                    {goal.manager && <p className="text-xs text-gray-600">Manager: {goal.manager}</p>}
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-medium text-gray-700 mb-2">Timeline</h3>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Clock className="w-4 h-4" />
                  <span>Created on {new Date(goal.createdAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'keyresults' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-base font-semibold text-gray-900">
                  Key Results ({goal.keyResults.length})
                </h3>
              </div>

              {goal.keyResults.map((kr) => {
                const progress = calculateKRProgress(kr.currentValue, kr.targetValue);
                return (
                  <div key={kr.id} className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h4 className="text-sm font-semibold text-gray-900 mb-1">{kr.title}</h4>
                        <div className="flex items-center gap-2">
                          <span className={`px-2 py-0.5 rounded text-xs font-medium ${getConfidenceColor(kr.confidence)}`}>
                            {kr.confidence} Confidence
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-3">
                      <div>
                        <span className="text-xs text-gray-600">Current</span>
                        <p className="text-lg font-semibold text-gray-900">
                          {kr.currentValue} {kr.unit}
                        </p>
                      </div>
                      <div>
                        <span className="text-xs text-gray-600">Target</span>
                        <p className="text-lg font-semibold text-gray-900">
                          {kr.targetValue} {kr.unit}
                        </p>
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center justify-between text-xs text-gray-600 mb-1">
                        <span>Progress</span>
                        <span className="font-semibold">{progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className={`h-2 rounded-full transition-all ${
                            progress >= 70 ? 'bg-green-500' : progress >= 40 ? 'bg-yellow-500' : 'bg-red-500'
                          }`}
                          style={{ width: `${progress}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                );
              })}

              {goal.keyResults.length === 0 && (
                <div className="text-center py-12">
                  <Target className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                  <p className="text-sm text-gray-600">No key results defined yet</p>
                </div>
              )}
            </div>
          )}

          {activeTab === 'checkins' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-base font-semibold text-gray-900">
                  Check-in History ({goal.checkIns.length})
                </h3>
              </div>

              {goal.checkIns.map((checkIn) => (
                <div key={checkIn.id} className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                        <MessageSquare className="w-5 h-5 text-purple-700" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">{checkIn.submittedBy}</p>
                        <p className="text-xs text-gray-600">
                          {new Date(checkIn.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                        </p>
                      </div>
                    </div>
                    <span className="text-lg font-semibold text-purple-600">{checkIn.progress}%</span>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <span className="text-xs font-medium text-gray-700">Achievements</span>
                      <p className="text-sm text-gray-900 mt-1">{checkIn.achievement}</p>
                    </div>
                    {checkIn.blockers && (
                      <div>
                        <span className="text-xs font-medium text-gray-700">Blockers</span>
                        <p className="text-sm text-gray-900 mt-1">{checkIn.blockers}</p>
                      </div>
                    )}
                    {checkIn.nextSteps && (
                      <div>
                        <span className="text-xs font-medium text-gray-700">Next Steps</span>
                        <p className="text-sm text-gray-900 mt-1">{checkIn.nextSteps}</p>
                      </div>
                    )}
                  </div>
                </div>
              ))}

              {goal.checkIns.length === 0 && (
                <div className="text-center py-12">
                  <Activity className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                  <p className="text-sm text-gray-600 mb-4">No check-ins submitted yet</p>
                  {goal.status === 'In Progress' && (
                    <button
                      onClick={onCheckIn}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 text-sm font-medium"
                    >
                      <Activity className="w-4 h-4" />
                      Submit First Check-in
                    </button>
                  )}
                </div>
              )}
            </div>
          )}
        </div>

        <div className="sticky bottom-0 bg-white border-t border-gray-100 px-6 py-4 flex gap-3 justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors"
          >
            Close
          </button>
          {goal.status === 'In Progress' && (
            <button
              onClick={onCheckIn}
              className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg text-sm font-medium hover:bg-purple-700 transition-colors"
            >
              <Activity className="w-4 h-4" />
              Add Check-in
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
