import { useState } from 'react';
import {
  X, Target, Calendar, Users, AlertCircle, MessageSquare,
  BarChart3, CheckCircle, Clock, TrendingUp, Building2
} from 'lucide-react';

interface KeyResult {
  id: string;
  title: string;
  targetValue: number;
  currentValue: number;
  unit: string;
  confidence: 'High' | 'Medium' | 'Low';
}

interface CheckIn {
  id: string;
  date: string;
  progress: number;
  achievement: string;
  blockers: string;
  nextSteps: string;
  submittedBy: string;
}

interface Goal {
  id: string;
  employee: string;
  employeeId: string;
  department: string;
  manager: string;
  title: string;
  description: string;
  framework: 'OKR' | 'SMART' | 'KRA';
  goalType: 'Individual' | 'Team' | 'Cascaded' | 'Stretch';
  weight: number;
  priority: 'High' | 'Medium' | 'Low';
  targetDate: string;
  measurementCriteria: string;
  progress: number;
  status: 'Pending' | 'Approved' | 'In Progress' | 'Completed' | 'Rejected';
  approvalStatus?: 'Pending Approval' | 'Approved' | 'Rejected';
  keyResults: KeyResult[];
  checkIns: CheckIn[];
  createdAt: string;
  cycle: string;
}

interface HRGoalDetailModalProps {
  goal: Goal;
  onClose: () => void;
  onApprove?: () => void;
}

export function HRGoalDetailModal({ goal, onClose, onApprove }: HRGoalDetailModalProps) {
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
      <div className="bg-white rounded-xl shadow-xl max-w-5xl w-full max-h-[90vh] overflow-hidden flex flex-col">
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
                <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded">
                  {goal.cycle}
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
              Check-in Timeline
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                  <div className="flex items-center gap-2 text-gray-600 mb-2">
                    <Users className="w-4 h-4" />
                    <span className="text-xs font-medium">Employee</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                      <span className="text-purple-700 text-xs font-medium">
                        {goal.employee.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">{goal.employee}</p>
                      <p className="text-xs text-gray-600">{goal.employeeId}</p>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                  <div className="flex items-center gap-2 text-gray-600 mb-2">
                    <Building2 className="w-4 h-4" />
                    <span className="text-xs font-medium">Department</span>
                  </div>
                  <p className="text-base font-semibold text-gray-900">{goal.department}</p>
                  <p className="text-xs text-gray-600">Manager: {goal.manager}</p>
                </div>

                <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                  <div className="flex items-center gap-2 text-gray-600 mb-2">
                    <Target className="w-4 h-4" />
                    <span className="text-xs font-medium">Goal Type</span>
                  </div>
                  <p className="text-base font-semibold text-gray-900">{goal.goalType}</p>
                  <p className="text-xs text-gray-600">Priority: {goal.priority}</p>
                </div>

                <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                  <div className="flex items-center gap-2 text-gray-600 mb-2">
                    <BarChart3 className="w-4 h-4" />
                    <span className="text-xs font-medium">Weight</span>
                  </div>
                  <p className="text-2xl font-semibold text-gray-900">{goal.weight}%</p>
                </div>

                <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                  <div className="flex items-center gap-2 text-gray-600 mb-2">
                    <Calendar className="w-4 h-4" />
                    <span className="text-xs font-medium">Target Date</span>
                  </div>
                  <p className="text-base font-semibold text-gray-900">
                    {new Date(goal.targetDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                  </p>
                </div>

                <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                  <div className="flex items-center gap-2 text-gray-600 mb-2">
                    <Clock className="w-4 h-4" />
                    <span className="text-xs font-medium">Created On</span>
                  </div>
                  <p className="text-base font-semibold text-gray-900">
                    {new Date(goal.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-gray-900 mb-3">Overall Progress</h3>
                <div className="p-4 bg-purple-50 rounded-lg border border-purple-100">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="flex-1">
                      <div className="flex items-center justify-between text-xs text-purple-700 mb-1">
                        <span>Current Progress</span>
                        <span className="text-2xl font-semibold">{goal.progress}%</span>
                      </div>
                      <div className="w-full bg-purple-200 rounded-full h-3">
                        <div
                          className="bg-purple-600 h-3 rounded-full transition-all"
                          style={{ width: `${goal.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-purple-700 mt-2">
                    <TrendingUp className="w-4 h-4" />
                    <span>{goal.checkIns.length} check-ins submitted</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-gray-900 mb-2">Measurement Criteria</h3>
                <p className="text-sm text-gray-700 bg-gray-50 p-4 rounded-lg border border-gray-200">
                  {goal.measurementCriteria}
                </p>
              </div>

              <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-blue-700 flex-shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <h4 className="text-sm font-semibold text-blue-900 mb-1">HR Monitoring Mode</h4>
                    <p className="text-xs text-blue-800">
                      You are viewing this goal in read-only mode. Progress updates and check-ins are submitted by the employee.
                      You can approve, reject, or monitor goal progress.
                    </p>
                  </div>
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

              {goal.keyResults.map((kr, index) => {
                const progress = calculateKRProgress(kr.currentValue, kr.targetValue);
                return (
                  <div key={kr.id} className="p-5 bg-gray-50 rounded-lg border border-gray-200">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <span className="text-xs font-medium text-gray-500 uppercase">Key Result {index + 1}</span>
                        <h4 className="text-base font-semibold text-gray-900 mt-1">{kr.title}</h4>
                      </div>
                      <span className={`px-2 py-1 rounded text-xs font-medium ${getConfidenceColor(kr.confidence)}`}>
                        {kr.confidence} Confidence
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-6 mb-4">
                      <div className="p-3 bg-white rounded-lg border border-gray-200">
                        <span className="text-xs text-gray-600 uppercase">Current Value</span>
                        <p className="text-2xl font-semibold text-gray-900 mt-1">
                          {kr.currentValue} <span className="text-base text-gray-600">{kr.unit}</span>
                        </p>
                      </div>
                      <div className="p-3 bg-white rounded-lg border border-gray-200">
                        <span className="text-xs text-gray-600 uppercase">Target Value</span>
                        <p className="text-2xl font-semibold text-gray-900 mt-1">
                          {kr.targetValue} <span className="text-base text-gray-600">{kr.unit}</span>
                        </p>
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center justify-between text-sm mb-2">
                        <span className="text-gray-600 font-medium">Progress</span>
                        <span className="text-lg font-semibold text-purple-600">{progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div
                          className={`h-2.5 rounded-full transition-all ${
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
                  <p className="text-sm text-gray-600">No key results defined</p>
                </div>
              )}
            </div>
          )}

          {activeTab === 'checkins' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-base font-semibold text-gray-900">
                  Check-in Timeline ({goal.checkIns.length})
                </h3>
              </div>

              {goal.checkIns.length > 0 ? (
                <div className="relative">
                  <div className="absolute left-5 top-8 bottom-8 w-0.5 bg-gray-200"></div>
                  <div className="space-y-6">
                    {goal.checkIns.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).map((checkIn, index) => (
                      <div key={checkIn.id} className="relative pl-12">
                        <div className="absolute left-0 top-1 w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center border-4 border-white">
                          <MessageSquare className="w-5 h-5 text-purple-700" />
                        </div>
                        <div className="bg-gray-50 rounded-lg border border-gray-200 p-5">
                          <div className="flex items-start justify-between mb-3">
                            <div>
                              <p className="text-sm font-semibold text-gray-900">{checkIn.submittedBy}</p>
                              <p className="text-xs text-gray-600">
                                {new Date(checkIn.date).toLocaleDateString('en-US', {
                                  month: 'long',
                                  day: 'numeric',
                                  year: 'numeric',
                                  hour: '2-digit',
                                  minute: '2-digit'
                                })}
                              </p>
                            </div>
                            <div className="flex items-center gap-2">
                              <TrendingUp className="w-4 h-4 text-purple-600" />
                              <span className="text-xl font-semibold text-purple-600">{checkIn.progress}%</span>
                            </div>
                          </div>

                          <div className="space-y-3">
                            <div>
                              <span className="text-xs font-semibold text-gray-700 uppercase">Achievements</span>
                              <p className="text-sm text-gray-900 mt-1 bg-white p-3 rounded border border-gray-200">
                                {checkIn.achievement}
                              </p>
                            </div>
                            {checkIn.blockers && (
                              <div>
                                <span className="text-xs font-semibold text-gray-700 uppercase">Blockers</span>
                                <p className="text-sm text-gray-900 mt-1 bg-white p-3 rounded border border-gray-200">
                                  {checkIn.blockers}
                                </p>
                              </div>
                            )}
                            {checkIn.nextSteps && (
                              <div>
                                <span className="text-xs font-semibold text-gray-700 uppercase">Next Steps</span>
                                <p className="text-sm text-gray-900 mt-1 bg-white p-3 rounded border border-gray-200">
                                  {checkIn.nextSteps}
                                </p>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="text-center py-12">
                  <MessageSquare className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                  <p className="text-sm text-gray-600">No check-ins submitted yet</p>
                  <p className="text-xs text-gray-500 mt-1">Employee will submit progress updates here</p>
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
          {goal.approvalStatus === 'Pending Approval' && onApprove && (
            <button
              onClick={onApprove}
              className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg text-sm font-medium hover:bg-green-700 transition-colors"
            >
              <CheckCircle className="w-4 h-4" />
              Review & Approve
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
