import { useState } from 'react';
import {
  Search, Filter, Plus, Eye, Edit2, Trash2, X, CheckCircle, XCircle,
  TrendingUp, Send, Calendar, Target, AlertCircle, MessageSquare,
  BarChart3, Users, ArrowUpRight, Clock, Activity
} from 'lucide-react';
import { CreateGoalModal } from './goals/CreateGoalModal';
import { GoalDetailModal } from './goals/GoalDetailModal';
import { CheckInModal } from './goals/CheckInModal';
import { ApprovalModal } from './goals/ApprovalModal';

export interface KeyResult {
  id: string;
  title: string;
  targetValue: number;
  currentValue: number;
  unit: string;
  confidence: 'High' | 'Medium' | 'Low';
}

export interface CheckIn {
  id: string;
  date: string;
  progress: number;
  achievement: string;
  blockers: string;
  nextSteps: string;
  submittedBy: string;
}

export interface Goal {
  id: string;
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
  employee: string;
  manager?: string;
  keyResults: KeyResult[];
  checkIns: CheckIn[];
  createdAt: string;
  isMyGoal?: boolean;
  isTeamGoal?: boolean;
  isCascaded?: boolean;
}

const mockGoals: Goal[] = [
  {
    id: '1',
    title: 'Increase Customer Retention Rate',
    description: 'Improve customer retention by implementing new engagement strategies',
    framework: 'OKR',
    goalType: 'Individual',
    weight: 30,
    priority: 'High',
    targetDate: '2026-12-31',
    measurementCriteria: 'Achieve 85% customer retention rate by end of Q4',
    progress: 65,
    status: 'In Progress',
    approvalStatus: 'Approved',
    employee: 'Sarah Johnson',
    manager: 'Michael Chen',
    isMyGoal: true,
    keyResults: [
      { id: 'kr1', title: 'Reduce churn rate to 15%', targetValue: 15, currentValue: 18, unit: '%', confidence: 'Medium' },
      { id: 'kr2', title: 'Increase NPS score to 45', targetValue: 45, currentValue: 38, unit: 'points', confidence: 'High' },
      { id: 'kr3', title: 'Launch 3 customer success programs', targetValue: 3, currentValue: 2, unit: 'programs', confidence: 'High' }
    ],
    checkIns: [
      {
        id: 'c1',
        date: '2026-04-15',
        progress: 65,
        achievement: 'Launched customer feedback loop, started NPS tracking',
        blockers: 'Need more resources for implementation',
        nextSteps: 'Complete final customer success program',
        submittedBy: 'Sarah Johnson'
      }
    ],
    createdAt: '2026-01-15'
  },
  {
    id: '2',
    title: 'Complete Platform Migration',
    description: 'Successfully migrate all services to new cloud infrastructure',
    framework: 'SMART',
    goalType: 'Team',
    weight: 40,
    priority: 'High',
    targetDate: '2026-08-30',
    measurementCriteria: 'Migrate 100% of services with zero downtime',
    progress: 75,
    status: 'In Progress',
    approvalStatus: 'Approved',
    employee: 'Tech Team',
    isTeamGoal: true,
    keyResults: [
      { id: 'kr4', title: 'Migrate database layer', targetValue: 100, currentValue: 100, unit: '%', confidence: 'High' },
      { id: 'kr5', title: 'Migrate application services', targetValue: 100, currentValue: 80, unit: '%', confidence: 'Medium' },
      { id: 'kr6', title: 'Complete security audit', targetValue: 100, currentValue: 50, unit: '%', confidence: 'Medium' }
    ],
    checkIns: [],
    createdAt: '2026-02-01'
  },
  {
    id: '3',
    title: 'Develop Leadership Skills',
    description: 'Enhance leadership capabilities through training and mentorship',
    framework: 'KRA',
    goalType: 'Cascaded',
    weight: 20,
    priority: 'Medium',
    targetDate: '2026-11-30',
    measurementCriteria: 'Complete leadership program and mentor 2 team members',
    progress: 40,
    status: 'In Progress',
    approvalStatus: 'Approved',
    employee: 'Emma Wilson',
    isCascaded: true,
    keyResults: [
      { id: 'kr7', title: 'Complete leadership certification', targetValue: 1, currentValue: 0, unit: 'certification', confidence: 'High' },
      { id: 'kr8', title: 'Mentor team members', targetValue: 2, currentValue: 1, unit: 'members', confidence: 'High' }
    ],
    checkIns: [],
    createdAt: '2026-03-01'
  },
  {
    id: '4',
    title: 'Launch New Product Line',
    description: 'Research and launch innovative product line for Q3',
    framework: 'OKR',
    goalType: 'Stretch',
    weight: 35,
    priority: 'High',
    targetDate: '2026-09-30',
    measurementCriteria: 'Launch product with $500K revenue in first quarter',
    progress: 25,
    status: 'Pending',
    approvalStatus: 'Pending Approval',
    employee: 'Product Team',
    keyResults: [
      { id: 'kr9', title: 'Complete market research', targetValue: 100, currentValue: 80, unit: '%', confidence: 'High' },
      { id: 'kr10', title: 'Develop MVP', targetValue: 100, currentValue: 30, unit: '%', confidence: 'Low' },
      { id: 'kr11', title: 'Acquire beta customers', targetValue: 50, currentValue: 5, unit: 'customers', confidence: 'Low' }
    ],
    checkIns: [],
    createdAt: '2026-04-20'
  }
];

type TabType = 'my-goals' | 'team-goals' | 'cascaded-goals';
type ViewMode = 'list' | 'detail' | 'create' | 'checkin' | 'approval';

export function Goals() {
  const [activeTab, setActiveTab] = useState<TabType>('my-goals');
  const [viewMode, setViewMode] = useState<ViewMode>('list');
  const [goals, setGoals] = useState<Goal[]>(mockGoals);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGoal, setSelectedGoal] = useState<Goal | null>(null);
  const [filterStatus, setFilterStatus] = useState<string>('all');

  const tabs = [
    { id: 'my-goals' as TabType, label: 'My Goals', count: goals.filter(g => g.isMyGoal).length },
    { id: 'team-goals' as TabType, label: 'Team Goals', count: goals.filter(g => g.isTeamGoal).length },
    { id: 'cascaded-goals' as TabType, label: 'Cascaded Goals', count: goals.filter(g => g.isCascaded).length }
  ];

  const filteredGoals = goals.filter(goal => {
    const matchesTab =
      (activeTab === 'my-goals' && goal.isMyGoal) ||
      (activeTab === 'team-goals' && goal.isTeamGoal) ||
      (activeTab === 'cascaded-goals' && goal.isCascaded);

    const matchesSearch = goal.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = filterStatus === 'all' || goal.status === filterStatus;

    return matchesTab && matchesSearch && matchesFilter;
  });

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

  const getPriorityColor = (priority: string) => {
    const colors = {
      'High': 'text-red-600',
      'Medium': 'text-orange-600',
      'Low': 'text-blue-600'
    };
    return colors[priority as keyof typeof colors];
  };

  const handleCreateGoal = (goalData: Partial<Goal>) => {
    const newGoal: Goal = {
      id: String(goals.length + 1),
      title: goalData.title || '',
      description: goalData.description || '',
      framework: goalData.framework || 'OKR',
      goalType: goalData.goalType || 'Individual',
      weight: goalData.weight || 0,
      priority: goalData.priority || 'Medium',
      targetDate: goalData.targetDate || '',
      measurementCriteria: goalData.measurementCriteria || '',
      progress: 0,
      status: 'Pending',
      approvalStatus: 'Pending Approval',
      employee: 'Sarah Johnson',
      isMyGoal: true,
      keyResults: goalData.keyResults || [],
      checkIns: [],
      createdAt: new Date().toISOString()
    };
    setGoals([...goals, newGoal]);
    setViewMode('list');
  };

  const handleViewGoal = (goal: Goal) => {
    setSelectedGoal(goal);
    setViewMode('detail');
  };

  const handleCheckIn = (goal: Goal) => {
    setSelectedGoal(goal);
    setViewMode('checkin');
  };

  const handleApproval = (goal: Goal) => {
    setSelectedGoal(goal);
    setViewMode('approval');
  };

  const handleSubmitCheckIn = (checkInData: Partial<CheckIn>) => {
    if (selectedGoal) {
      const updatedGoals = goals.map(g => {
        if (g.id === selectedGoal.id) {
          return {
            ...g,
            checkIns: [...g.checkIns, {
              id: `c${g.checkIns.length + 1}`,
              date: new Date().toISOString(),
              progress: checkInData.progress || 0,
              achievement: checkInData.achievement || '',
              blockers: checkInData.blockers || '',
              nextSteps: checkInData.nextSteps || '',
              submittedBy: 'Sarah Johnson'
            }],
            progress: checkInData.progress || g.progress
          };
        }
        return g;
      });
      setGoals(updatedGoals);
      setViewMode('list');
    }
  };

  const handleApprovalAction = (approved: boolean, comment?: string) => {
    if (selectedGoal) {
      const updatedGoals = goals.map(g => {
        if (g.id === selectedGoal.id) {
          return {
            ...g,
            status: approved ? 'In Progress' : 'Rejected',
            approvalStatus: approved ? 'Approved' : 'Rejected'
          };
        }
        return g;
      });
      setGoals(updatedGoals);
      setViewMode('list');
    }
  };

  if (viewMode === 'create') {
    return <CreateGoalModal onClose={() => setViewMode('list')} onCreate={handleCreateGoal} />;
  }

  if (viewMode === 'detail' && selectedGoal) {
    return (
      <GoalDetailModal
        goal={selectedGoal}
        onClose={() => setViewMode('list')}
        onCheckIn={() => setViewMode('checkin')}
      />
    );
  }

  if (viewMode === 'checkin' && selectedGoal) {
    return (
      <CheckInModal
        goal={selectedGoal}
        onClose={() => setViewMode('list')}
        onSubmit={handleSubmitCheckIn}
      />
    );
  }

  if (viewMode === 'approval' && selectedGoal) {
    return (
      <ApprovalModal
        goal={selectedGoal}
        onClose={() => setViewMode('list')}
        onApprove={handleApprovalAction}
      />
    );
  }

  return (
    <div className="p-6 md:p-8 bg-[#f8f9fc] min-h-screen">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-gray-900 mb-2">Goals & OKRs</h1>
        <p className="text-sm text-gray-600">Create, track, and manage goals using OKR, SMART, or KRA frameworks</p>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 mb-6">
        <div className="border-b border-gray-100">
          <div className="flex gap-1 p-1">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  activeTab === tab.id
                    ? 'bg-purple-50 text-purple-700'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                {tab.label}
                <span className={`px-2 py-0.5 rounded-full text-xs ${
                  activeTab === tab.id ? 'bg-purple-100 text-purple-700' : 'bg-gray-100 text-gray-600'
                }`}>
                  {tab.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="p-4">
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
            <div className="flex-1 w-full md:w-auto flex gap-3">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search goals..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                <option value="all">All Status</option>
                <option value="Pending">Pending</option>
                <option value="Approved">Approved</option>
                <option value="In Progress">In Progress</option>
                <option value="Completed">Completed</option>
              </select>
            </div>
            <button
              onClick={() => setViewMode('create')}
              className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
            >
              <Plus className="w-4 h-4" />
              <span className="text-sm font-medium">New Goal</span>
            </button>
          </div>
        </div>
      </div>

      {filteredGoals.length === 0 ? (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-12 text-center">
          <Target className="w-12 h-12 text-gray-300 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No goals found</h3>
          <p className="text-sm text-gray-600 mb-6">Get started by creating your first goal</p>
          <button
            onClick={() => setViewMode('create')}
            className="inline-flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
          >
            <Plus className="w-4 h-4" />
            Create Goal
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGoals.map((goal) => (
            <div key={goal.id} className="bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-2 py-0.5 bg-purple-50 text-purple-700 text-xs font-medium rounded">
                        {goal.framework}
                      </span>
                      <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium border ${getStatusColor(goal.approvalStatus || goal.status)}`}>
                        {goal.approvalStatus || goal.status}
                      </span>
                    </div>
                    <h3 className="text-base font-semibold text-gray-900 mb-1 line-clamp-2">
                      {goal.title}
                    </h3>
                    <p className="text-sm text-gray-600">{goal.employee}</p>
                  </div>
                </div>

                <div className="space-y-3 mb-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Type</span>
                    <span className="font-medium text-gray-900">{goal.goalType}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Priority</span>
                    <span className={`font-medium ${getPriorityColor(goal.priority)}`}>
                      {goal.priority}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Weight</span>
                    <span className="font-medium text-gray-900">{goal.weight}%</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Target Date</span>
                    <span className="font-medium text-gray-900">
                      {new Date(goal.targetDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </span>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex items-center justify-between text-sm mb-2">
                    <span className="text-gray-600">Progress</span>
                    <span className="font-semibold text-purple-600">{goal.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-purple-600 h-2 rounded-full transition-all"
                      style={{ width: `${goal.progress}%` }}
                    ></div>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
                  <Target className="w-4 h-4" />
                  <span>{goal.keyResults.length} Key Results</span>
                  <span className="text-gray-300">•</span>
                  <MessageSquare className="w-4 h-4" />
                  <span>{goal.checkIns.length} Check-ins</span>
                </div>
              </div>

              <div className="flex items-center gap-2 px-6 py-3 bg-gray-50 border-t border-gray-100 rounded-b-xl">
                <button
                  onClick={() => handleViewGoal(goal)}
                  className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 text-sm font-medium transition-colors"
                >
                  <Eye className="w-4 h-4" />
                  View
                </button>
                {goal.status === 'In Progress' && (
                  <button
                    onClick={() => handleCheckIn(goal)}
                    className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 text-sm font-medium transition-colors"
                  >
                    <Activity className="w-4 h-4" />
                    Check-in
                  </button>
                )}
                {goal.approvalStatus === 'Pending Approval' && (
                  <button
                    onClick={() => handleApproval(goal)}
                    className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 text-sm font-medium transition-colors"
                  >
                    <CheckCircle className="w-4 h-4" />
                    Review
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
