import { useState } from 'react';
import { Search, Filter, Eye, Edit2, Trash2, X, Check, XCircle, TrendingUp, Target, Calendar, AlertCircle, CheckCircle, Clock, User } from 'lucide-react';

interface KeyResult {
  id: string;
  name: string;
  target: number;
  current: number;
  unit: string;
}

interface CheckIn {
  id: string;
  date: string;
  update: string;
  progress: number;
  blockers?: string;
  comments?: string;
}

interface Goal {
  id: string;
  employeeName: string;
  employeeId: string;
  goalTitle: string;
  framework: 'OKR' | 'SMART' | 'KRA';
  progress: number;
  status: 'Pending' | 'Approved' | 'In Progress' | 'Completed' | 'Rejected';
  manager: string;
  lastUpdated: string;
  department: string;
  cycle: string;
  description?: string;
  weight?: number;
  keyResults?: KeyResult[];
  checkIns?: CheckIn[];
}

const mockGoals: Goal[] = [
  {
    id: '1',
    employeeName: 'Priya Sharma',
    employeeId: 'EMP-001',
    goalTitle: 'Increase Customer Satisfaction Score',
    framework: 'OKR',
    progress: 65,
    status: 'In Progress',
    manager: 'Amit Patel',
    lastUpdated: '2026-05-02',
    department: 'Customer Success',
    cycle: 'Q2 2026',
    description: 'Improve overall customer satisfaction score from 7.5 to 9.0 by end of Q2 2026',
    weight: 40,
    keyResults: [
      { id: 'kr1', name: 'Reduce average response time', target: 2, current: 3.5, unit: 'hours' },
      { id: 'kr2', name: 'Increase NPS score', target: 50, current: 38, unit: 'points' },
      { id: 'kr3', name: 'Resolve 95% of tickets within SLA', target: 95, current: 82, unit: '%' }
    ],
    checkIns: [
      {
        id: 'c1',
        date: '2026-05-01',
        update: 'Made significant progress on response time by implementing automated routing',
        progress: 65,
        blockers: 'Need additional training resources for team',
        comments: 'On track for Q2 completion'
      },
      {
        id: 'c2',
        date: '2026-04-15',
        update: 'Started NPS improvement initiative',
        progress: 45,
        comments: 'Initial results are promising'
      }
    ]
  },
  {
    id: '2',
    employeeName: 'Arjun Mehta',
    employeeId: 'EMP-002',
    goalTitle: 'Launch New Product Feature',
    framework: 'SMART',
    progress: 85,
    status: 'Approved',
    manager: 'Kavita Desai',
    lastUpdated: '2026-05-04',
    department: 'Engineering',
    cycle: 'Q2 2026',
    description: 'Successfully launch the AI-powered analytics dashboard by June 30, 2026',
    weight: 50,
    keyResults: [
      { id: 'kr4', name: 'Complete backend development', target: 100, current: 95, unit: '%' },
      { id: 'kr5', name: 'User acceptance testing', target: 100, current: 70, unit: '%' },
      { id: 'kr6', name: 'Documentation completion', target: 100, current: 80, unit: '%' }
    ],
    checkIns: [
      {
        id: 'c3',
        date: '2026-05-03',
        update: 'Backend development nearing completion, UAT in progress',
        progress: 85,
        comments: 'Ahead of schedule'
      }
    ]
  },
  {
    id: '3',
    employeeName: 'Deepika Nair',
    employeeId: 'EMP-003',
    goalTitle: 'Develop Leadership Training Program',
    framework: 'KRA',
    progress: 0,
    status: 'Pending',
    manager: 'Aditya Rao',
    lastUpdated: '2026-05-05',
    department: 'HR',
    cycle: 'Q2 2026',
    description: 'Create and implement a comprehensive leadership development program for mid-level managers',
    weight: 35,
    keyResults: [
      { id: 'kr7', name: 'Design curriculum', target: 100, current: 0, unit: '%' },
      { id: 'kr8', name: 'Train 30 managers', target: 30, current: 0, unit: 'people' },
      { id: 'kr9', name: 'Achieve 4.5+ satisfaction rating', target: 4.5, current: 0, unit: 'rating' }
    ],
    checkIns: []
  },
  {
    id: '4',
    employeeName: 'Rohan Khanna',
    employeeId: 'EMP-004',
    goalTitle: 'Improve Code Quality Metrics',
    framework: 'OKR',
    progress: 40,
    status: 'Pending',
    manager: 'Kavita Desai',
    lastUpdated: '2026-05-04',
    department: 'Engineering',
    cycle: 'Q2 2026',
    description: 'Reduce code defects and improve test coverage across all repositories',
    weight: 30,
    keyResults: [
      { id: 'kr10', name: 'Increase test coverage', target: 85, current: 72, unit: '%' },
      { id: 'kr11', name: 'Reduce bug density', target: 0.5, current: 1.2, unit: 'bugs/KLOC' },
      { id: 'kr12', name: 'Code review completion rate', target: 100, current: 88, unit: '%' }
    ],
    checkIns: [
      {
        id: 'c4',
        date: '2026-04-28',
        update: 'Implemented automated testing framework',
        progress: 40,
        blockers: 'Legacy code requires significant refactoring',
        comments: 'May need timeline extension'
      }
    ]
  },
  {
    id: '5',
    employeeName: 'Sanya Joshi',
    employeeId: 'EMP-005',
    goalTitle: 'Expand Market Presence in APAC',
    framework: 'SMART',
    progress: 100,
    status: 'Completed',
    manager: 'Amit Patel',
    lastUpdated: '2026-04-30',
    department: 'Sales',
    cycle: 'Q1 2026',
    description: 'Establish partnerships in 5 new APAC markets',
    weight: 45,
    keyResults: [
      { id: 'kr13', name: 'Sign 5 regional partners', target: 5, current: 5, unit: 'partners' },
      { id: 'kr14', name: 'Generate $500K in pipeline', target: 500000, current: 625000, unit: 'USD' },
      { id: 'kr15', name: 'Close 3 enterprise deals', target: 3, current: 4, unit: 'deals' }
    ],
    checkIns: [
      {
        id: 'c5',
        date: '2026-04-30',
        update: 'Successfully completed all objectives ahead of schedule',
        progress: 100,
        comments: 'Exceeded targets on pipeline and deal closures'
      }
    ]
  }
];

export function HRGoals() {
  const [goals, setGoals] = useState<Goal[]>(mockGoals);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [departmentFilter, setDepartmentFilter] = useState<string>('all');
  const [cycleFilter, setCycleFilter] = useState<string>('all');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedGoal, setSelectedGoal] = useState<Goal | null>(null);
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [showApprovalModal, setShowApprovalModal] = useState(false);
  const [showRejectModal, setShowRejectModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [approvalComment, setApprovalComment] = useState('');
  const [rejectionComment, setRejectionComment] = useState('');

  const getStatusColor = (status: string) => {
    const colors = {
      'Pending': 'bg-yellow-100 text-yellow-700',
      'Approved': 'bg-blue-100 text-blue-700',
      'In Progress': 'bg-purple-100 text-purple-700',
      'Completed': 'bg-green-100 text-green-700',
      'Rejected': 'bg-red-100 text-red-700'
    };
    return colors[status as keyof typeof colors] || colors.Pending;
  };

  const getFrameworkColor = (framework: string) => {
    const colors = {
      'OKR': 'bg-indigo-100 text-indigo-700',
      'SMART': 'bg-teal-100 text-teal-700',
      'KRA': 'bg-orange-100 text-orange-700'
    };
    return colors[framework as keyof typeof colors] || colors.OKR;
  };

  const handleApprove = () => {
    if (selectedGoal) {
      setGoals(goals.map(g => g.id === selectedGoal.id ? { ...g, status: 'Approved' as const } : g));
      setShowApprovalModal(false);
      setApprovalComment('');
      setSelectedGoal(null);
    }
  };

  const handleReject = () => {
    if (selectedGoal) {
      setGoals(goals.map(g => g.id === selectedGoal.id ? { ...g, status: 'Rejected' as const } : g));
      setShowRejectModal(false);
      setRejectionComment('');
      setSelectedGoal(null);
    }
  };

  const handleDelete = () => {
    if (selectedGoal) {
      setGoals(goals.filter(g => g.id !== selectedGoal.id));
      setShowDeleteModal(false);
      setSelectedGoal(null);
    }
  };

  const departments = ['all', ...Array.from(new Set(goals.map(g => g.department)))];
  const cycles = ['all', ...Array.from(new Set(goals.map(g => g.cycle)))];

  const filteredGoals = goals.filter(goal => {
    const matchesSearch = goal.employeeName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         goal.goalTitle.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === 'all' || goal.status === statusFilter;
    const matchesDepartment = departmentFilter === 'all' || goal.department === departmentFilter;
    const matchesCycle = cycleFilter === 'all' || goal.cycle === cycleFilter;
    return matchesSearch && matchesStatus && matchesDepartment && matchesCycle;
  });

  return (
    <div className="p-6 md:p-8 bg-[#f8f9fc] min-h-screen">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-gray-900 mb-2">Goals & OKRs</h1>
        <p className="text-sm text-gray-600">Review, approve, and monitor employee goals and objectives</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Total Goals</p>
              <p className="text-2xl font-semibold text-gray-900">{goals.length}</p>
            </div>
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <Target className="w-6 h-6 text-purple-600" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Pending Approval</p>
              <p className="text-2xl font-semibold text-yellow-600">{goals.filter(g => g.status === 'Pending').length}</p>
            </div>
            <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
              <Clock className="w-6 h-6 text-yellow-600" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">In Progress</p>
              <p className="text-2xl font-semibold text-blue-600">{goals.filter(g => g.status === 'In Progress').length}</p>
            </div>
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-blue-600" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Completed</p>
              <p className="text-2xl font-semibold text-green-600">{goals.filter(g => g.status === 'Completed').length}</p>
            </div>
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <CheckCircle className="w-6 h-6 text-green-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Actions Bar */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 mb-6">
        <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
          <div className="flex-1 w-full md:w-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search by employee or goal title..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>
          </div>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <Filter className="w-4 h-4" />
            <span className="text-sm font-medium">Filters</span>
            {(statusFilter !== 'all' || departmentFilter !== 'all' || cycleFilter !== 'all') && (
              <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
            )}
          </button>
        </div>

        {/* Filter Panel */}
        {showFilters && (
          <div className="mt-4 pt-4 border-t border-gray-100 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                <option value="all">All Statuses</option>
                <option value="Pending">Pending</option>
                <option value="Approved">Approved</option>
                <option value="In Progress">In Progress</option>
                <option value="Completed">Completed</option>
                <option value="Rejected">Rejected</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Department</label>
              <select
                value={departmentFilter}
                onChange={(e) => setDepartmentFilter(e.target.value)}
                className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                {departments.map(dept => (
                  <option key={dept} value={dept}>
                    {dept === 'all' ? 'All Departments' : dept}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Cycle</label>
              <select
                value={cycleFilter}
                onChange={(e) => setCycleFilter(e.target.value)}
                className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                {cycles.map(cycle => (
                  <option key={cycle} value={cycle}>
                    {cycle === 'all' ? 'All Cycles' : cycle}
                  </option>
                ))}
              </select>
            </div>
          </div>
        )}
      </div>

      {/* Goals Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-100">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Employee</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Goal Title</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Framework</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Progress</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Manager</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Last Updated</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filteredGoals.length === 0 ? (
                <tr>
                  <td colSpan={8} className="px-6 py-12 text-center">
                    <div className="flex flex-col items-center justify-center">
                      <Target className="w-12 h-12 text-gray-300 mb-3" />
                      <p className="text-sm text-gray-500">No goals found</p>
                      <p className="text-xs text-gray-400 mt-1">Try adjusting your filters</p>
                    </div>
                  </td>
                </tr>
              ) : (
                filteredGoals.map((goal) => (
                  <tr key={goal.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                          <User className="w-4 h-4 text-purple-600" />
                        </div>
                        <div>
                          <div className="text-sm font-medium text-gray-900">{goal.employeeName}</div>
                          <div className="text-xs text-gray-500">{goal.department}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-900 max-w-xs">{goal.goalTitle}</div>
                      <div className="text-xs text-gray-500 mt-1">{goal.cycle}</div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${getFrameworkColor(goal.framework)}`}>
                        {goal.framework}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <div className="flex-1 bg-gray-200 rounded-full h-2 min-w-[80px]">
                          <div
                            className="bg-purple-600 h-2 rounded-full transition-all"
                            style={{ width: `${goal.progress}%` }}
                          ></div>
                        </div>
                        <span className="text-xs text-gray-600 font-medium whitespace-nowrap">{goal.progress}%</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${getStatusColor(goal.status)}`}>
                        {goal.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-700">{goal.manager}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-700">{new Date(goal.lastUpdated).toLocaleDateString()}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => { setSelectedGoal(goal); setShowDetailModal(true); }}
                          className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors text-gray-600"
                          title="View Details"
                        >
                          <Eye className="w-4 h-4" />
                        </button>
                        {goal.status === 'Pending' && (
                          <>
                            <button
                              onClick={() => { setSelectedGoal(goal); setShowApprovalModal(true); }}
                              className="p-1.5 hover:bg-green-50 rounded-lg transition-colors text-green-600"
                              title="Approve"
                            >
                              <Check className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => { setSelectedGoal(goal); setShowRejectModal(true); }}
                              className="p-1.5 hover:bg-red-50 rounded-lg transition-colors text-red-600"
                              title="Reject"
                            >
                              <XCircle className="w-4 h-4" />
                            </button>
                          </>
                        )}
                        <button
                          onClick={() => { setSelectedGoal(goal); setShowDeleteModal(true); }}
                          className="p-1.5 hover:bg-red-50 rounded-lg transition-colors text-red-600"
                          title="Delete"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="px-6 py-4 border-t border-gray-100 flex items-center justify-between">
          <div className="text-sm text-gray-600">
            Showing <span className="font-medium">{filteredGoals.length}</span> of <span className="font-medium">{goals.length}</span> goals
          </div>
          <div className="flex gap-2">
            <button className="px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-sm hover:bg-gray-50 transition-colors disabled:opacity-50" disabled>
              Previous
            </button>
            <button className="px-3 py-1.5 bg-purple-600 text-white rounded-lg text-sm hover:bg-purple-700 transition-colors">
              1
            </button>
            <button className="px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-sm hover:bg-gray-50 transition-colors">
              Next
            </button>
          </div>
        </div>
      </div>

      {/* Goal Detail Modal */}
      {showDetailModal && selectedGoal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-purple-600 to-purple-700 px-8 py-6 flex items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold text-white">{selectedGoal.goalTitle}</h2>
                <p className="text-purple-100 text-sm mt-1">{selectedGoal.employeeName} • {selectedGoal.department}</p>
              </div>
              <button
                onClick={() => setShowDetailModal(false)}
                className="p-1.5 hover:bg-white/20 rounded-lg transition-colors"
              >
                <X className="w-5 h-5 text-white" />
              </button>
            </div>

            {/* Content */}
            <div className="p-8 overflow-y-auto max-h-[calc(90vh-180px)]">
              <div className="space-y-6">
                {/* Goal Overview */}
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wide">Goal Overview</h3>
                  <div className="bg-gray-50 rounded-xl p-6">
                    <div className="grid grid-cols-2 gap-6 mb-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-600 mb-1">Framework</label>
                        <span className={`inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium ${getFrameworkColor(selectedGoal.framework)}`}>
                          {selectedGoal.framework}
                        </span>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-600 mb-1">Status</label>
                        <span className={`inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium ${getStatusColor(selectedGoal.status)}`}>
                          {selectedGoal.status}
                        </span>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-600 mb-1">Weight</label>
                        <p className="text-base text-gray-900">{selectedGoal.weight}%</p>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-600 mb-1">Cycle</label>
                        <p className="text-base text-gray-900">{selectedGoal.cycle}</p>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-600 mb-2">Description</label>
                      <p className="text-sm text-gray-700">{selectedGoal.description}</p>
                    </div>
                    <div className="mt-4">
                      <label className="block text-sm font-medium text-gray-600 mb-2">Overall Progress</label>
                      <div className="flex items-center gap-3">
                        <div className="flex-1 bg-gray-200 rounded-full h-3">
                          <div
                            className="bg-purple-600 h-3 rounded-full transition-all"
                            style={{ width: `${selectedGoal.progress}%` }}
                          ></div>
                        </div>
                        <span className="text-lg font-semibold text-purple-600">{selectedGoal.progress}%</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Key Results */}
                {selectedGoal.keyResults && selectedGoal.keyResults.length > 0 && (
                  <div>
                    <h3 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wide">Key Results</h3>
                    <div className="space-y-3">
                      {selectedGoal.keyResults.map((kr) => {
                        const krProgress = (kr.current / kr.target) * 100;
                        return (
                          <div key={kr.id} className="bg-gray-50 rounded-xl p-4">
                            <div className="flex items-start justify-between mb-3">
                              <div className="flex-1">
                                <p className="text-sm font-medium text-gray-900 mb-1">{kr.name}</p>
                                <p className="text-xs text-gray-600">
                                  Current: <span className="font-medium">{kr.current} {kr.unit}</span> • Target: <span className="font-medium">{kr.target} {kr.unit}</span>
                                </p>
                              </div>
                              <span className="text-sm font-semibold text-purple-600 ml-4">{Math.round(krProgress)}%</span>
                            </div>
                            <div className="bg-gray-200 rounded-full h-2">
                              <div
                                className="bg-purple-600 h-2 rounded-full transition-all"
                                style={{ width: `${Math.min(krProgress, 100)}%` }}
                              ></div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Check-in Timeline (Read-only) */}
                {selectedGoal.checkIns && selectedGoal.checkIns.length > 0 && (
                  <div>
                    <h3 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wide flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      Check-in Timeline
                    </h3>
                    <div className="space-y-4">
                      {selectedGoal.checkIns.map((checkIn) => (
                        <div key={checkIn.id} className="bg-gray-50 rounded-xl p-5 border-l-4 border-purple-500">
                          <div className="flex items-start justify-between mb-3">
                            <div className="flex items-center gap-2">
                              <Calendar className="w-4 h-4 text-gray-400" />
                              <span className="text-sm font-medium text-gray-900">{new Date(checkIn.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                            </div>
                            <span className="text-sm font-semibold text-purple-600">{checkIn.progress}% Progress</span>
                          </div>
                          <div className="space-y-2">
                            <div>
                              <p className="text-xs font-medium text-gray-600 mb-1">Update</p>
                              <p className="text-sm text-gray-700">{checkIn.update}</p>
                            </div>
                            {checkIn.blockers && (
                              <div>
                                <p className="text-xs font-medium text-gray-600 mb-1 flex items-center gap-1">
                                  <AlertCircle className="w-3 h-3 text-red-500" />
                                  Blockers
                                </p>
                                <p className="text-sm text-red-600">{checkIn.blockers}</p>
                              </div>
                            )}
                            {checkIn.comments && (
                              <div>
                                <p className="text-xs font-medium text-gray-600 mb-1">Comments</p>
                                <p className="text-sm text-gray-700">{checkIn.comments}</p>
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {selectedGoal.checkIns?.length === 0 && (
                  <div className="bg-gray-50 rounded-xl p-8 text-center">
                    <Calendar className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                    <p className="text-sm text-gray-500">No check-ins recorded yet</p>
                  </div>
                )}
              </div>
            </div>

            {/* Footer */}
            <div className="bg-gray-50 px-8 py-4 flex gap-3 justify-end border-t border-gray-200">
              {selectedGoal.status === 'Pending' && (
                <>
                  <button
                    onClick={() => {
                      setShowDetailModal(false);
                      setShowRejectModal(true);
                    }}
                    className="px-6 py-2.5 bg-white border border-red-300 text-red-700 rounded-lg text-sm font-medium hover:bg-red-50 transition-colors"
                  >
                    Reject
                  </button>
                  <button
                    onClick={() => {
                      setShowDetailModal(false);
                      setShowApprovalModal(true);
                    }}
                    className="px-6 py-2.5 bg-green-600 text-white rounded-lg text-sm font-medium hover:bg-green-700 shadow-lg shadow-green-500/30 transition-all"
                  >
                    Approve
                  </button>
                </>
              )}
              <button
                onClick={() => setShowDetailModal(false)}
                className="px-6 py-2.5 bg-white border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Approval Modal */}
      {showApprovalModal && selectedGoal && (
        <div className="fixed inset-0 bg-gray-900/80 backdrop-blur-md flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] max-w-md w-full relative">
            {/* Close Button */}
            <button
              onClick={() => { setShowApprovalModal(false); setApprovalComment(''); }}
              className="absolute top-6 right-6 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 transition-colors z-10"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Header */}
            <div className="px-8 pt-8 pb-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-green-100 flex items-center justify-center">
                <Check className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Approve Goal</h3>
              <p className="text-sm text-gray-500">Confirm goal approval</p>
            </div>

            {/* Content */}
            <div className="px-8 pb-6 space-y-5">
              <div className="bg-green-50 border border-green-200 rounded-2xl p-4">
                <p className="text-sm text-green-800 text-center mb-2">
                  Approve goal for <span className="font-semibold">{selectedGoal.employeeName}</span>
                </p>
                <p className="text-sm font-semibold text-gray-900 text-center">"{selectedGoal.goalTitle}"</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">Comment <span className="text-gray-400">(Optional)</span></label>
                <textarea
                  value={approvalComment}
                  onChange={(e) => setApprovalComment(e.target.value)}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 resize-none transition-all"
                  rows={4}
                  placeholder="Add a comment..."
                />
              </div>
            </div>

            {/* Footer */}
            <div className="px-8 py-6 bg-gray-50 rounded-b-3xl flex gap-3">
              <button
                onClick={() => { setShowApprovalModal(false); setApprovalComment(''); }}
                className="flex-1 px-4 py-3 bg-white border border-gray-300 rounded-xl text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleApprove}
                className="flex-1 px-4 py-3 bg-green-600 text-white rounded-xl text-sm font-semibold hover:bg-green-700 transition-colors"
              >
                Approve Goal
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Reject Modal */}
      {showRejectModal && selectedGoal && (
        <div className="fixed inset-0 bg-gray-900/80 backdrop-blur-md flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] max-w-md w-full relative">
            {/* Close Button */}
            <button
              onClick={() => { setShowRejectModal(false); setRejectionComment(''); }}
              className="absolute top-6 right-6 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 transition-colors z-10"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Header */}
            <div className="px-8 pt-8 pb-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-red-100 flex items-center justify-center">
                <XCircle className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Reject Goal</h3>
              <p className="text-sm text-gray-500">Provide reason for rejection</p>
            </div>

            {/* Content */}
            <div className="px-8 pb-6 space-y-5">
              <div className="bg-red-50 border border-red-200 rounded-2xl p-4">
                <p className="text-sm text-red-800 text-center mb-2">
                  Reject goal for <span className="font-semibold">{selectedGoal.employeeName}</span>
                </p>
                <p className="text-sm font-semibold text-gray-900 text-center">"{selectedGoal.goalTitle}"</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">Reason for Rejection <span className="text-gray-400">(Optional)</span></label>
                <textarea
                  value={rejectionComment}
                  onChange={(e) => setRejectionComment(e.target.value)}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 resize-none transition-all"
                  rows={4}
                  placeholder="Explain why this goal is being rejected..."
                />
              </div>
            </div>

            {/* Footer */}
            <div className="px-8 py-6 bg-gray-50 rounded-b-3xl flex gap-3">
              <button
                onClick={() => { setShowRejectModal(false); setRejectionComment(''); }}
                className="flex-1 px-4 py-3 bg-white border border-gray-300 rounded-xl text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleReject}
                className="flex-1 px-4 py-3 bg-red-600 text-white rounded-xl text-sm font-semibold hover:bg-red-700 transition-colors"
              >
                Reject Goal
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {showDeleteModal && selectedGoal && (
        <div className="fixed inset-0 bg-gray-900/80 backdrop-blur-md flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] max-w-md w-full relative">
            {/* Close Button */}
            <button
              onClick={() => setShowDeleteModal(false)}
              className="absolute top-6 right-6 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 transition-colors z-10"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Header */}
            <div className="px-8 pt-8 pb-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-red-100 flex items-center justify-center">
                <Trash2 className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Delete Goal</h3>
              <p className="text-sm text-gray-500">This action cannot be undone</p>
            </div>

            {/* Content */}
            <div className="px-8 pb-6 space-y-5">
              <div className="bg-red-50 border border-red-200 rounded-2xl p-4">
                <p className="text-sm text-red-800 text-center mb-2">
                  Delete goal for <span className="font-semibold">{selectedGoal.employeeName}</span>
                </p>
                <p className="text-sm font-semibold text-gray-900 text-center">"{selectedGoal.goalTitle}"</p>
              </div>
            </div>

            {/* Footer */}
            <div className="px-8 py-6 bg-gray-50 rounded-b-3xl flex gap-3">
              <button
                onClick={() => setShowDeleteModal(false)}
                className="flex-1 px-4 py-3 bg-white border border-gray-300 rounded-xl text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleDelete}
                className="flex-1 px-4 py-3 bg-red-600 text-white rounded-xl text-sm font-semibold hover:bg-red-700 transition-colors"
              >
                Delete Goal
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
