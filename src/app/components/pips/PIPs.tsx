import { useState } from 'react';
import { Search, Filter, Plus, Eye, Edit2, MessageSquare, CheckCircle, AlertTriangle, XCircle, Ban, X, Calendar, User, TrendingUp, Clock } from 'lucide-react';

interface Milestone {
  id: string;
  task: string;
  targetDate: string;
  successCriteria: string;
  status: 'Pending' | 'In Progress' | 'Completed';
}

interface Comment {
  id: string;
  author: string;
  date: string;
  text: string;
}

interface PIP {
  id: string;
  employeeName: string;
  employeeId: string;
  department: string;
  manager: string;
  pipTitle: string;
  reason: string;
  startDate: string;
  endDate: string;
  reviewFrequency: string;
  progress: number;
  status: 'Draft' | 'Active' | 'Extended' | 'Completed' | 'Failed' | 'Cancelled';
  milestones: Milestone[];
  comments: Comment[];
  createdDate: string;
  extensionReason?: string;
  failureReason?: string;
  cancelReason?: string;
}

const mockPIPs: PIP[] = [
  {
    id: '1',
    employeeName: 'Rohit Gupta',
    employeeId: 'EMP-012',
    department: 'Engineering',
    manager: 'Kavita Desai',
    pipTitle: 'Improve Code Quality & Delivery Timelines',
    reason: 'Consistent delays in project delivery and multiple code quality issues affecting team productivity',
    startDate: '2026-04-01',
    endDate: '2026-07-01',
    reviewFrequency: 'Bi-weekly',
    progress: 65,
    status: 'Active',
    milestones: [
      {
        id: 'm1',
        task: 'Complete React best practices training',
        targetDate: '2026-04-30',
        successCriteria: 'Obtain certification and apply learnings in next project',
        status: 'Completed'
      },
      {
        id: 'm2',
        task: 'Reduce code review iterations to max 2 per PR',
        targetDate: '2026-05-31',
        successCriteria: 'Achieve 80% first-pass approval rate on PRs',
        status: 'In Progress'
      },
      {
        id: 'm3',
        task: 'Deliver feature on time without delays',
        targetDate: '2026-06-30',
        successCriteria: 'Meet all sprint commitments for 2 consecutive sprints',
        status: 'Pending'
      }
    ],
    comments: [
      {
        id: 'c1',
        author: 'Kavita Desai',
        date: '2026-05-01',
        text: 'Rohit has shown significant improvement in the first month. Completed the training ahead of schedule and is applying best practices in code reviews.'
      },
      {
        id: 'c2',
        author: 'HR Team',
        date: '2026-04-15',
        text: 'Mid-month check-in scheduled. Will review progress on training completion.'
      }
    ],
    createdDate: '2026-03-28'
  },
  {
    id: '2',
    employeeName: 'Neha Kapoor',
    employeeId: 'EMP-024',
    department: 'Sales',
    manager: 'Amit Patel',
    pipTitle: 'Sales Performance Improvement',
    reason: 'Below quota achievement for 3 consecutive quarters',
    startDate: '2026-03-15',
    endDate: '2026-06-15',
    reviewFrequency: 'Weekly',
    progress: 40,
    status: 'Active',
    milestones: [
      {
        id: 'm4',
        task: 'Complete advanced sales training program',
        targetDate: '2026-04-15',
        successCriteria: 'Pass certification with 85% or higher',
        status: 'Completed'
      },
      {
        id: 'm5',
        task: 'Generate 20 qualified leads per month',
        targetDate: '2026-05-31',
        successCriteria: 'Consistent lead generation with 50% conversion to opportunities',
        status: 'In Progress'
      },
      {
        id: 'm6',
        task: 'Close minimum $150K in deals',
        targetDate: '2026-06-15',
        successCriteria: 'Meet or exceed monthly quota targets',
        status: 'Pending'
      }
    ],
    comments: [
      {
        id: 'c3',
        author: 'Amit Patel',
        date: '2026-04-20',
        text: 'Neha completed training successfully. Now focusing on lead generation activities with daily check-ins.'
      }
    ],
    createdDate: '2026-03-10'
  },
  {
    id: '3',
    employeeName: 'Aditya Rao',
    employeeId: 'EMP-008',
    department: 'Customer Support',
    manager: 'Neha Gupta',
    pipTitle: 'Customer Service Excellence',
    reason: 'Low CSAT scores and high escalation rate',
    startDate: '2026-01-15',
    endDate: '2026-04-15',
    reviewFrequency: 'Weekly',
    progress: 100,
    status: 'Completed',
    milestones: [
      {
        id: 'm7',
        task: 'Improve CSAT score to 4.5+',
        targetDate: '2026-03-15',
        successCriteria: 'Maintain average CSAT of 4.5 or higher for 4 weeks',
        status: 'Completed'
      },
      {
        id: 'm8',
        task: 'Reduce escalation rate to below 5%',
        targetDate: '2026-04-15',
        successCriteria: 'Handle 95% of tickets without manager escalation',
        status: 'Completed'
      }
    ],
    comments: [
      {
        id: 'c4',
        author: 'Neha Gupta',
        date: '2026-04-15',
        text: 'Aditya has successfully completed the PIP. Exceeded all targets and consistently maintains high performance. Well done!'
      },
      {
        id: 'c5',
        author: 'HR Team',
        date: '2026-03-20',
        text: 'Progress review shows excellent improvement. CSAT scores trending upward consistently.'
      }
    ],
    createdDate: '2026-01-10'
  },
  {
    id: '4',
    employeeName: 'Isha Malhotra',
    employeeId: 'EMP-031',
    department: 'Marketing',
    manager: 'Pooja Reddy',
    pipTitle: 'Campaign Performance & Team Collaboration',
    reason: 'Underperforming campaigns and collaboration issues with cross-functional teams',
    startDate: '2026-02-01',
    endDate: '2026-05-01',
    reviewFrequency: 'Bi-weekly',
    progress: 30,
    status: 'Extended',
    milestones: [
      {
        id: 'm9',
        task: 'Complete digital marketing certification',
        targetDate: '2026-03-15',
        successCriteria: 'Obtain Google Analytics & Ads certification',
        status: 'Completed'
      },
      {
        id: 'm10',
        task: 'Improve campaign ROI to 3:1 minimum',
        targetDate: '2026-06-01',
        successCriteria: 'Achieve target ROI on 3 consecutive campaigns',
        status: 'In Progress'
      }
    ],
    comments: [
      {
        id: 'c6',
        author: 'Jennifer Wu',
        date: '2026-05-05',
        text: 'Extended PIP by 1 month due to external factors affecting campaign performance. Amanda is showing improvement but needs more time to demonstrate consistent results.'
      }
    ],
    createdDate: '2026-01-28',
    extensionReason: 'Market conditions affected campaign performance; employee showing improvement but needs additional time'
  }
];

const mockEmployees = [
  { id: 'EMP-012', name: 'John Smith', department: 'Engineering', manager: 'Emily Roberts' },
  { id: 'EMP-024', name: 'Sarah Williams', department: 'Sales', manager: 'Michael Chen' },
  { id: 'EMP-008', name: 'Robert Johnson', department: 'Customer Support', manager: 'Lisa Anderson' },
  { id: 'EMP-031', name: 'Amanda Clark', department: 'Marketing', manager: 'Jennifer Wu' },
  { id: 'EMP-045', name: 'David Lee', department: 'Engineering', manager: 'Emily Roberts' },
  { id: 'EMP-052', name: 'Michelle Brown', department: 'Sales', manager: 'Michael Chen' }
];

export function PIPs() {
  const [pips, setPips] = useState<PIP[]>(mockPIPs);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [departmentFilter, setDepartmentFilter] = useState<string>('all');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedPIP, setSelectedPIP] = useState<PIP | null>(null);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showDetailView, setShowDetailView] = useState(false);
  const [showEditDrawer, setShowEditDrawer] = useState(false);
  const [showCommentModal, setShowCommentModal] = useState(false);
  const [showCompleteModal, setShowCompleteModal] = useState(false);
  const [showExtendModal, setShowExtendModal] = useState(false);
  const [showFailModal, setShowFailModal] = useState(false);
  const [showCancelModal, setShowCancelModal] = useState(false);

  // Form states
  const [createFormData, setCreateFormData] = useState({
    employeeId: '',
    pipTitle: '',
    reason: '',
    startDate: '',
    endDate: '',
    reviewFrequency: ''
  });
  const [milestones, setMilestones] = useState<Milestone[]>([]);
  const [newComment, setNewComment] = useState('');
  const [extendData, setExtendData] = useState({ newEndDate: '', reason: '' });
  const [failData, setFailData] = useState({ reason: '', remarks: '' });
  const [cancelReason, setCancelReason] = useState('');
  const [completeNote, setCompleteNote] = useState('');

  const getStatusColor = (status: string) => {
    const colors = {
      'Draft': 'bg-gray-100 text-gray-700',
      'Active': 'bg-blue-100 text-blue-700',
      'Extended': 'bg-orange-100 text-orange-700',
      'Completed': 'bg-green-100 text-green-700',
      'Failed': 'bg-red-100 text-red-700',
      'Cancelled': 'bg-gray-100 text-gray-700'
    };
    return colors[status as keyof typeof colors] || colors.Draft;
  };

  const getMilestoneStatusColor = (status: string) => {
    const colors = {
      'Pending': 'bg-gray-100 text-gray-700',
      'In Progress': 'bg-blue-100 text-blue-700',
      'Completed': 'bg-green-100 text-green-700'
    };
    return colors[status as keyof typeof colors] || colors.Pending;
  };

  const handleCreatePIP = () => {
    const employee = mockEmployees.find(e => e.id === createFormData.employeeId);
    if (!employee) return;

    const newPIP: PIP = {
      id: String(pips.length + 1),
      employeeName: employee.name,
      employeeId: employee.id,
      department: employee.department,
      manager: employee.manager,
      pipTitle: createFormData.pipTitle,
      reason: createFormData.reason,
      startDate: createFormData.startDate,
      endDate: createFormData.endDate,
      reviewFrequency: createFormData.reviewFrequency,
      progress: 0,
      status: 'Draft',
      milestones: milestones,
      comments: [],
      createdDate: new Date().toISOString().split('T')[0]
    };

    setPips([newPIP, ...pips]);
    setShowCreateModal(false);
    resetCreateForm();
  };

  const resetCreateForm = () => {
    setCreateFormData({
      employeeId: '',
      pipTitle: '',
      reason: '',
      startDate: '',
      endDate: '',
      reviewFrequency: ''
    });
    setMilestones([]);
  };

  const handleAddComment = () => {
    if (!selectedPIP || !newComment.trim()) return;

    const updatedPIPs = pips.map(pip => {
      if (pip.id === selectedPIP.id) {
        return {
          ...pip,
          comments: [
            {
              id: `c${pip.comments.length + 1}`,
              author: 'HR Team',
              date: new Date().toISOString().split('T')[0],
              text: newComment
            },
            ...pip.comments
          ]
        };
      }
      return pip;
    });

    setPips(updatedPIPs);
    setSelectedPIP(updatedPIPs.find(p => p.id === selectedPIP.id) || null);
    setNewComment('');
    setShowCommentModal(false);
  };

  const handleCompletePIP = () => {
    if (!selectedPIP) return;

    const updatedPIPs = pips.map(pip => {
      if (pip.id === selectedPIP.id) {
        const updated = {
          ...pip,
          status: 'Completed' as const,
          progress: 100
        };
        if (completeNote.trim()) {
          updated.comments = [
            {
              id: `c${pip.comments.length + 1}`,
              author: 'HR Team',
              date: new Date().toISOString().split('T')[0],
              text: `PIP Completed: ${completeNote}`
            },
            ...pip.comments
          ];
        }
        return updated;
      }
      return pip;
    });

    setPips(updatedPIPs);
    setShowCompleteModal(false);
    setShowDetailView(false);
    setCompleteNote('');
  };

  const handleExtendPIP = () => {
    if (!selectedPIP || !extendData.newEndDate) return;

    const updatedPIPs = pips.map(pip => {
      if (pip.id === selectedPIP.id) {
        return {
          ...pip,
          status: 'Extended' as const,
          endDate: extendData.newEndDate,
          extensionReason: extendData.reason,
          comments: [
            {
              id: `c${pip.comments.length + 1}`,
              author: 'HR Team',
              date: new Date().toISOString().split('T')[0],
              text: `PIP Extended to ${new Date(extendData.newEndDate).toLocaleDateString()}. Reason: ${extendData.reason}`
            },
            ...pip.comments
          ]
        };
      }
      return pip;
    });

    setPips(updatedPIPs);
    setSelectedPIP(updatedPIPs.find(p => p.id === selectedPIP.id) || null);
    setShowExtendModal(false);
    setExtendData({ newEndDate: '', reason: '' });
  };

  const handleFailPIP = () => {
    if (!selectedPIP) return;

    const updatedPIPs = pips.map(pip => {
      if (pip.id === selectedPIP.id) {
        return {
          ...pip,
          status: 'Failed' as const,
          failureReason: failData.reason,
          comments: [
            {
              id: `c${pip.comments.length + 1}`,
              author: 'HR Team',
              date: new Date().toISOString().split('T')[0],
              text: `PIP Marked as Failed. Reason: ${failData.reason}. Remarks: ${failData.remarks}`
            },
            ...pip.comments
          ]
        };
      }
      return pip;
    });

    setPips(updatedPIPs);
    setShowFailModal(false);
    setShowDetailView(false);
    setFailData({ reason: '', remarks: '' });
  };

  const handleCancelPIP = () => {
    if (!selectedPIP) return;

    const updatedPIPs = pips.map(pip => {
      if (pip.id === selectedPIP.id) {
        return {
          ...pip,
          status: 'Cancelled' as const,
          cancelReason: cancelReason,
          comments: [
            {
              id: `c${pip.comments.length + 1}`,
              author: 'HR Team',
              date: new Date().toISOString().split('T')[0],
              text: `PIP Cancelled. ${cancelReason ? `Reason: ${cancelReason}` : ''}`
            },
            ...pip.comments
          ]
        };
      }
      return pip;
    });

    setPips(updatedPIPs);
    setShowCancelModal(false);
    setShowDetailView(false);
    setCancelReason('');
  };

  const departments = ['all', ...Array.from(new Set(pips.map(p => p.department)))];

  const filteredPIPs = pips.filter(pip => {
    const matchesSearch = pip.employeeName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         pip.pipTitle.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === 'all' || pip.status === statusFilter;
    const matchesDepartment = departmentFilter === 'all' || pip.department === departmentFilter;
    return matchesSearch && matchesStatus && matchesDepartment;
  });

  const canEdit = (status: string) => status === 'Draft' || status === 'Active';
  const canTakeAction = (status: string) => status === 'Active' || status === 'Extended';
  const isReadOnly = (status: string) => status === 'Completed' || status === 'Failed' || status === 'Cancelled';

  // If detail view is active, show detail screen
  if (showDetailView && selectedPIP) {
    return (
      <div className="p-6 md:p-8 bg-[#f8f9fc] min-h-screen">
        {/* Header */}
        <div className="mb-6 flex items-start justify-between">
          <div>
            <button
              onClick={() => { setShowDetailView(false); setSelectedPIP(null); }}
              className="text-sm text-gray-600 hover:text-gray-900 mb-2 flex items-center gap-1"
            >
              ← Back to PIPs
            </button>
            <h1 className="text-2xl font-semibold text-gray-900 mb-2">{selectedPIP.pipTitle}</h1>
            <p className="text-sm text-gray-600">{selectedPIP.employeeName} • {selectedPIP.department}</p>
          </div>
          <div className="flex gap-2">
            {canEdit(selectedPIP.status) && (
              <button
                onClick={() => setShowEditDrawer(true)}
                className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <Edit2 className="w-4 h-4" />
                Edit
              </button>
            )}
            {!isReadOnly(selectedPIP.status) && (
              <button
                onClick={() => setShowCommentModal(true)}
                className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                Add Comment
              </button>
            )}
            {canTakeAction(selectedPIP.status) && (
              <>
                <button
                  onClick={() => setShowCompleteModal(true)}
                  className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                >
                  <CheckCircle className="w-4 h-4" />
                  Complete
                </button>
                <button
                  onClick={() => setShowExtendModal(true)}
                  className="flex items-center gap-2 px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors"
                >
                  <AlertTriangle className="w-4 h-4" />
                  Extend
                </button>
                <button
                  onClick={() => setShowFailModal(true)}
                  className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                >
                  <XCircle className="w-4 h-4" />
                  Fail
                </button>
                <button
                  onClick={() => setShowCancelModal(true)}
                  className="flex items-center gap-2 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
                >
                  <Ban className="w-4 h-4" />
                  Cancel
                </button>
              </>
            )}
          </div>
        </div>

        <div className="grid grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="col-span-2 space-y-6">
            {/* Employee Info */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wide">Employee Information</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-gray-600 mb-1">Name</p>
                  <p className="text-sm font-medium text-gray-900">{selectedPIP.employeeName}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-600 mb-1">Employee ID</p>
                  <p className="text-sm font-medium text-gray-900">{selectedPIP.employeeId}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-600 mb-1">Department</p>
                  <p className="text-sm font-medium text-gray-900">{selectedPIP.department}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-600 mb-1">Manager</p>
                  <p className="text-sm font-medium text-gray-900">{selectedPIP.manager}</p>
                </div>
              </div>
            </div>

            {/* PIP Overview */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wide">PIP Overview</h3>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs text-gray-600 mb-1">Status</p>
                    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${getStatusColor(selectedPIP.status)}`}>
                      {selectedPIP.status}
                    </span>
                  </div>
                  <div>
                    <p className="text-xs text-gray-600 mb-1">Review Frequency</p>
                    <p className="text-sm font-medium text-gray-900">{selectedPIP.reviewFrequency}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-600 mb-1">Start Date</p>
                    <p className="text-sm font-medium text-gray-900">{new Date(selectedPIP.startDate).toLocaleDateString()}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-600 mb-1">End Date</p>
                    <p className="text-sm font-medium text-gray-900">{new Date(selectedPIP.endDate).toLocaleDateString()}</p>
                  </div>
                </div>
                <div>
                  <p className="text-xs text-gray-600 mb-2">Reason for PIP</p>
                  <p className="text-sm text-gray-700">{selectedPIP.reason}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-600 mb-2">Overall Progress</p>
                  <div className="flex items-center gap-3">
                    <div className="flex-1 bg-gray-200 rounded-full h-3">
                      <div
                        className="bg-purple-600 h-3 rounded-full transition-all"
                        style={{ width: `${selectedPIP.progress}%` }}
                      ></div>
                    </div>
                    <span className="text-lg font-semibold text-purple-600">{selectedPIP.progress}%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Milestones */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wide">Milestones</h3>
              <div className="space-y-3">
                {selectedPIP.milestones.map((milestone) => (
                  <div key={milestone.id} className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-900 mb-1">{milestone.task}</p>
                        <p className="text-xs text-gray-600 mb-2">{milestone.successCriteria}</p>
                        <div className="flex items-center gap-2 text-xs text-gray-500">
                          <Calendar className="w-3 h-3" />
                          Target: {new Date(milestone.targetDate).toLocaleDateString()}
                        </div>
                      </div>
                      <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${getMilestoneStatusColor(milestone.status)}`}>
                        {milestone.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Activity Timeline */}
          <div className="col-span-1">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 sticky top-6">
              <h3 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wide flex items-center gap-2">
                <Clock className="w-4 h-4" />
                Activity Timeline
              </h3>
              <div className="space-y-4">
                {selectedPIP.comments.length === 0 ? (
                  <p className="text-sm text-gray-500 text-center py-8">No activity yet</p>
                ) : (
                  selectedPIP.comments.map((comment) => (
                    <div key={comment.id} className="border-l-2 border-purple-200 pl-4 pb-4">
                      <div className="flex items-center gap-2 mb-1">
                        <p className="text-xs font-medium text-gray-900">{comment.author}</p>
                        <span className="text-xs text-gray-500">•</span>
                        <p className="text-xs text-gray-500">{new Date(comment.date).toLocaleDateString()}</p>
                      </div>
                      <p className="text-sm text-gray-700">{comment.text}</p>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Modals */}
        {/* Add Comment Modal */}
        {showCommentModal && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl shadow-xl max-w-lg w-full">
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                    <MessageSquare className="w-5 h-5 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">Add Comment</h3>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Comment</label>
                  <textarea
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
                    rows={4}
                    placeholder="Add your comment or update..."
                  />
                </div>
                <div className="flex gap-3 justify-end mt-6">
                  <button
                    onClick={() => { setShowCommentModal(false); setNewComment(''); }}
                    className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleAddComment}
                    className="px-4 py-2 bg-purple-600 text-white rounded-lg text-sm font-medium hover:bg-purple-700 transition-colors"
                  >
                    Add Comment
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Complete Modal */}
        {showCompleteModal && (
          <div className="fixed inset-0 bg-gray-900/80 backdrop-blur-md flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] max-w-md w-full relative">
              {/* Close Button */}
              <button
                onClick={() => { setShowCompleteModal(false); setCompleteNote(''); }}
                className="absolute top-6 right-6 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 transition-colors z-10"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Header */}
              <div className="px-8 pt-8 pb-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-green-100 flex items-center justify-center">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Complete PIP</h3>
                <p className="text-sm text-gray-500">Mark this performance improvement plan as successfully completed</p>
              </div>

              {/* Content */}
              <div className="px-8 pb-6 space-y-4">
                <div className="bg-green-50 border border-green-200 rounded-2xl p-4 text-center">
                  <p className="text-sm text-green-800">
                    <span className="font-semibold">{selectedPIP.employeeName}</span> has successfully met all improvement requirements
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">Final Note <span className="text-gray-400">(Optional)</span></label>
                  <textarea
                    value={completeNote}
                    onChange={(e) => setCompleteNote(e.target.value)}
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 resize-none transition-all"
                    rows={4}
                    placeholder="Add final comments or recognition notes..."
                  />
                </div>
              </div>

              {/* Footer */}
              <div className="px-8 py-6 bg-gray-50 rounded-b-3xl flex gap-3">
                <button
                  onClick={() => { setShowCompleteModal(false); setCompleteNote(''); }}
                  className="flex-1 px-4 py-3 bg-white border border-gray-300 rounded-xl text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleCompletePIP}
                  className="flex-1 px-4 py-3 bg-green-600 text-white rounded-xl text-sm font-semibold hover:bg-green-700 transition-colors"
                >
                  Confirm Complete
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Extend Modal */}
        {showExtendModal && (
          <div className="fixed inset-0 bg-gray-900/80 backdrop-blur-md flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] max-w-md w-full relative">
              {/* Close Button */}
              <button
                onClick={() => { setShowExtendModal(false); setExtendData({ newEndDate: '', reason: '' }); }}
                className="absolute top-6 right-6 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 transition-colors z-10"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Header */}
              <div className="px-8 pt-8 pb-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-orange-100 flex items-center justify-center">
                  <Clock className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Extend PIP Timeline</h3>
                <p className="text-sm text-gray-500">Extend the performance improvement plan deadline</p>
              </div>

              {/* Content */}
              <div className="px-8 pb-6 space-y-5">
                <div className="bg-orange-50 border border-orange-200 rounded-2xl p-4">
                  <p className="text-sm text-orange-800">
                    Current end date: <span className="font-semibold">{new Date(selectedPIP.endDate).toLocaleDateString()}</span>
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">New End Date <span className="text-red-500">*</span></label>
                  <input
                    type="date"
                    value={extendData.newEndDate}
                    onChange={(e) => setExtendData({ ...extendData, newEndDate: e.target.value })}
                    min={selectedPIP.endDate}
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">Reason for Extension <span className="text-red-500">*</span></label>
                  <textarea
                    value={extendData.reason}
                    onChange={(e) => setExtendData({ ...extendData, reason: e.target.value })}
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 resize-none transition-all"
                    rows={4}
                    placeholder="Provide detailed justification for the extension..."
                  />
                </div>
              </div>

              {/* Footer */}
              <div className="px-8 py-6 bg-gray-50 rounded-b-3xl flex gap-3">
                <button
                  onClick={() => { setShowExtendModal(false); setExtendData({ newEndDate: '', reason: '' }); }}
                  className="flex-1 px-4 py-3 bg-white border border-gray-300 rounded-xl text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleExtendPIP}
                  disabled={!extendData.newEndDate || !extendData.reason}
                  className="flex-1 px-4 py-3 bg-orange-600 text-white rounded-xl text-sm font-semibold hover:bg-orange-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Extend PIP
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Fail Modal */}
        {showFailModal && (
          <div className="fixed inset-0 bg-gray-900/80 backdrop-blur-md flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] max-w-md w-full relative">
              {/* Close Button */}
              <button
                onClick={() => { setShowFailModal(false); setFailData({ reason: '', remarks: '' }); }}
                className="absolute top-6 right-6 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 transition-colors z-10"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Header */}
              <div className="px-8 pt-8 pb-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-red-100 flex items-center justify-center">
                  <XCircle className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Mark PIP as Failed</h3>
                <p className="text-sm text-gray-500">Document reasons for not meeting requirements</p>
              </div>

              {/* Content */}
              <div className="px-8 pb-6 space-y-5">
                <div className="bg-red-50 border border-red-200 rounded-2xl p-4">
                  <p className="text-sm text-red-800">
                    <span className="font-semibold">{selectedPIP.employeeName}</span> did not meet the improvement requirements
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">Failure Reason <span className="text-red-500">*</span></label>
                  <textarea
                    value={failData.reason}
                    onChange={(e) => setFailData({ ...failData, reason: e.target.value })}
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 resize-none transition-all"
                    rows={4}
                    placeholder="Specify detailed reasons for not meeting requirements..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">Final Remarks <span className="text-gray-400">(Optional)</span></label>
                  <textarea
                    value={failData.remarks}
                    onChange={(e) => setFailData({ ...failData, remarks: e.target.value })}
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 resize-none transition-all"
                    rows={3}
                    placeholder="Any additional comments or next steps..."
                  />
                </div>
              </div>

              {/* Footer */}
              <div className="px-8 py-6 bg-gray-50 rounded-b-3xl flex gap-3">
                <button
                  onClick={() => { setShowFailModal(false); setFailData({ reason: '', remarks: '' }); }}
                  className="flex-1 px-4 py-3 bg-white border border-gray-300 rounded-xl text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleFailPIP}
                  disabled={!failData.reason}
                  className="flex-1 px-4 py-3 bg-red-600 text-white rounded-xl text-sm font-semibold hover:bg-red-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Mark as Failed
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Cancel Modal */}
        {showCancelModal && (
          <div className="fixed inset-0 bg-gray-900/80 backdrop-blur-md flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] max-w-md w-full relative">
              {/* Close Button */}
              <button
                onClick={() => { setShowCancelModal(false); setCancelReason(''); }}
                className="absolute top-6 right-6 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 transition-colors z-10"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Header */}
              <div className="px-8 pt-8 pb-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gray-100 flex items-center justify-center">
                  <Ban className="w-8 h-8 text-gray-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Cancel PIP</h3>
                <p className="text-sm text-gray-500">Terminate this performance improvement plan</p>
              </div>

              {/* Content */}
              <div className="px-8 pb-6 space-y-5">
                <div className="bg-gray-50 border border-gray-200 rounded-2xl p-4">
                  <p className="text-sm text-gray-700">
                    This will cancel the PIP for <span className="font-semibold">{selectedPIP.employeeName}</span>
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">Cancellation Reason <span className="text-gray-400">(Optional)</span></label>
                  <textarea
                    value={cancelReason}
                    onChange={(e) => setCancelReason(e.target.value)}
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500 resize-none transition-all"
                    rows={4}
                    placeholder="Explain why the PIP is being cancelled (e.g., role change, resignation)..."
                  />
                </div>
              </div>

              {/* Footer */}
              <div className="px-8 py-6 bg-gray-50 rounded-b-3xl flex gap-3">
                <button
                  onClick={() => { setShowCancelModal(false); setCancelReason(''); }}
                  className="flex-1 px-4 py-3 bg-white border border-gray-300 rounded-xl text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  Back
                </button>
                <button
                  onClick={handleCancelPIP}
                  className="flex-1 px-4 py-3 bg-gray-600 text-white rounded-xl text-sm font-semibold hover:bg-gray-700 transition-colors"
                >
                  Confirm Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  // Main List View
  return (
    <div className="p-6 md:p-8 bg-[#f8f9fc] min-h-screen">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-gray-900 mb-2">Performance Improvement Plans</h1>
        <p className="text-sm text-gray-600">Create and manage employee performance improvement plans</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Total PIPs</p>
              <p className="text-2xl font-semibold text-gray-900">{pips.length}</p>
            </div>
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-purple-600" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Active</p>
              <p className="text-2xl font-semibold text-blue-600">{pips.filter(p => p.status === 'Active').length}</p>
            </div>
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <User className="w-6 h-6 text-blue-600" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Completed</p>
              <p className="text-2xl font-semibold text-green-600">{pips.filter(p => p.status === 'Completed').length}</p>
            </div>
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <CheckCircle className="w-6 h-6 text-green-600" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Failed</p>
              <p className="text-2xl font-semibold text-red-600">{pips.filter(p => p.status === 'Failed').length}</p>
            </div>
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
              <XCircle className="w-6 h-6 text-red-600" />
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
                placeholder="Search by employee or PIP title..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <Filter className="w-4 h-4" />
              <span className="text-sm font-medium">Filters</span>
              {(statusFilter !== 'all' || departmentFilter !== 'all') && (
                <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
              )}
            </button>
            <button
              onClick={() => setShowCreateModal(true)}
              className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
            >
              <Plus className="w-4 h-4" />
              <span className="text-sm font-medium">Create PIP</span>
            </button>
          </div>
        </div>

        {/* Filter Panel */}
        {showFilters && (
          <div className="mt-4 pt-4 border-t border-gray-100 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                <option value="all">All Statuses</option>
                <option value="Draft">Draft</option>
                <option value="Active">Active</option>
                <option value="Extended">Extended</option>
                <option value="Completed">Completed</option>
                <option value="Failed">Failed</option>
                <option value="Cancelled">Cancelled</option>
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
          </div>
        )}
      </div>

      {/* PIPs Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-100">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Employee Name</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">PIP Title</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Department</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Start Date</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">End Date</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Progress</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filteredPIPs.length === 0 ? (
                <tr>
                  <td colSpan={8} className="px-6 py-12 text-center">
                    <div className="flex flex-col items-center justify-center">
                      <TrendingUp className="w-12 h-12 text-gray-300 mb-3" />
                      <p className="text-sm text-gray-500">No PIPs found</p>
                      <p className="text-xs text-gray-400 mt-1">Try adjusting your filters</p>
                    </div>
                  </td>
                </tr>
              ) : (
                filteredPIPs.map((pip) => (
                  <tr key={pip.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="text-sm font-medium text-gray-900">{pip.employeeName}</div>
                      <div className="text-xs text-gray-500">{pip.employeeId}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-900 max-w-xs">{pip.pipTitle}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-700">{pip.department}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-700">{new Date(pip.startDate).toLocaleDateString()}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-700">{new Date(pip.endDate).toLocaleDateString()}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <div className="flex-1 bg-gray-200 rounded-full h-2 min-w-[80px]">
                          <div
                            className="bg-purple-600 h-2 rounded-full transition-all"
                            style={{ width: `${pip.progress}%` }}
                          ></div>
                        </div>
                        <span className="text-xs text-gray-600 font-medium whitespace-nowrap">{pip.progress}%</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${getStatusColor(pip.status)}`}>
                        {pip.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => { setSelectedPIP(pip); setShowDetailView(true); }}
                          className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors text-gray-600"
                          title="View"
                        >
                          <Eye className="w-4 h-4" />
                        </button>
                        {canEdit(pip.status) && (
                          <button
                            onClick={() => { setSelectedPIP(pip); setShowEditDrawer(true); }}
                            className="p-1.5 hover:bg-blue-50 rounded-lg transition-colors text-blue-600"
                            title="Edit"
                          >
                            <Edit2 className="w-4 h-4" />
                          </button>
                        )}
                        {!isReadOnly(pip.status) && (
                          <button
                            onClick={() => { setSelectedPIP(pip); setShowCommentModal(true); }}
                            className="p-1.5 hover:bg-purple-50 rounded-lg transition-colors text-purple-600"
                            title="Add Comment"
                          >
                            <MessageSquare className="w-4 h-4" />
                          </button>
                        )}
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
            Showing <span className="font-medium">{filteredPIPs.length}</span> of <span className="font-medium">{pips.length}</span> PIPs
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

      {/* Create PIP Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-purple-600 to-purple-700 px-8 py-6 flex items-center justify-between">
              <h2 className="text-xl font-semibold text-white">Create Performance Improvement Plan</h2>
              <button
                onClick={() => {
                  setShowCreateModal(false);
                  resetCreateForm();
                }}
                className="p-1.5 hover:bg-white/20 rounded-lg transition-colors"
              >
                <X className="w-5 h-5 text-white" />
              </button>
            </div>

            {/* Form Content */}
            <div className="p-8 overflow-y-auto max-h-[calc(90vh-180px)]">
              <div className="space-y-6">
                {/* Employee & Title Row */}
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Employee <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={createFormData.employeeId}
                      onChange={(e) => setCreateFormData({ ...createFormData, employeeId: e.target.value })}
                      className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    >
                      <option value="">Select employee</option>
                      {mockEmployees.map(emp => (
                        <option key={emp.id} value={emp.id}>
                          {emp.name} ({emp.id}) - {emp.department}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      PIP Title <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={createFormData.pipTitle}
                      onChange={(e) => setCreateFormData({ ...createFormData, pipTitle: e.target.value })}
                      className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="e.g., Improve Code Quality & Delivery"
                    />
                  </div>
                </div>

                {/* Reason */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Reason for PIP <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    value={createFormData.reason}
                    onChange={(e) => setCreateFormData({ ...createFormData, reason: e.target.value })}
                    className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
                    rows={3}
                    placeholder="Describe the performance issues and reasons for creating this PIP..."
                  />
                </div>

                {/* Dates & Review Frequency */}
                <div className="grid grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Start Date <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="date"
                      value={createFormData.startDate}
                      onChange={(e) => setCreateFormData({ ...createFormData, startDate: e.target.value })}
                      className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      End Date <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="date"
                      value={createFormData.endDate}
                      onChange={(e) => setCreateFormData({ ...createFormData, endDate: e.target.value })}
                      min={createFormData.startDate}
                      className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Review Frequency <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={createFormData.reviewFrequency}
                      onChange={(e) => setCreateFormData({ ...createFormData, reviewFrequency: e.target.value })}
                      className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    >
                      <option value="">Select frequency</option>
                      <option value="Weekly">Weekly</option>
                      <option value="Bi-weekly">Bi-weekly</option>
                      <option value="Monthly">Monthly</option>
                    </select>
                  </div>
                </div>

                {/* Milestones Section */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <label className="block text-sm font-semibold text-gray-900 uppercase tracking-wide">
                      Milestones
                    </label>
                    <button
                      type="button"
                      onClick={() => setMilestones([...milestones, {
                        id: `m${milestones.length + 1}`,
                        task: '',
                        targetDate: '',
                        successCriteria: '',
                        status: 'Pending'
                      }])}
                      className="flex items-center gap-2 px-3 py-1.5 bg-purple-50 text-purple-700 rounded-lg hover:bg-purple-100 transition-colors text-sm"
                    >
                      <Plus className="w-4 h-4" />
                      Add Milestone
                    </button>
                  </div>

                  {milestones.length === 0 ? (
                    <div className="bg-gray-50 rounded-lg p-6 text-center border-2 border-dashed border-gray-200">
                      <p className="text-sm text-gray-500">No milestones added yet. Click "Add Milestone" to get started.</p>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {milestones.map((milestone, index) => (
                        <div key={milestone.id} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                          <div className="flex items-start justify-between mb-3">
                            <p className="text-sm font-medium text-gray-900">Milestone {index + 1}</p>
                            <button
                              type="button"
                              onClick={() => setMilestones(milestones.filter((_, i) => i !== index))}
                              className="text-red-600 hover:text-red-700"
                            >
                              <XCircle className="w-4 h-4" />
                            </button>
                          </div>
                          <div className="space-y-3">
                            <div>
                              <label className="block text-xs font-medium text-gray-700 mb-1">Task / Objective</label>
                              <input
                                type="text"
                                value={milestone.task}
                                onChange={(e) => {
                                  const updated = [...milestones];
                                  updated[index].task = e.target.value;
                                  setMilestones(updated);
                                }}
                                className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
                                placeholder="e.g., Complete training program"
                              />
                            </div>
                            <div className="grid grid-cols-2 gap-3">
                              <div>
                                <label className="block text-xs font-medium text-gray-700 mb-1">Target Date</label>
                                <input
                                  type="date"
                                  value={milestone.targetDate}
                                  onChange={(e) => {
                                    const updated = [...milestones];
                                    updated[index].targetDate = e.target.value;
                                    setMilestones(updated);
                                  }}
                                  className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
                                />
                              </div>
                              <div>
                                <label className="block text-xs font-medium text-gray-700 mb-1">Success Criteria</label>
                                <input
                                  type="text"
                                  value={milestone.successCriteria}
                                  onChange={(e) => {
                                    const updated = [...milestones];
                                    updated[index].successCriteria = e.target.value;
                                    setMilestones(updated);
                                  }}
                                  className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
                                  placeholder="e.g., Pass with 85% score"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="bg-gray-50 px-8 py-4 flex gap-3 justify-end border-t border-gray-200">
              <button
                onClick={() => {
                  setShowCreateModal(false);
                  resetCreateForm();
                }}
                className="px-6 py-2.5 bg-white border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleCreatePIP}
                disabled={!createFormData.employeeId || !createFormData.pipTitle || !createFormData.reason || !createFormData.startDate || !createFormData.endDate || !createFormData.reviewFrequency}
                className="px-6 py-2.5 bg-purple-600 text-white rounded-lg text-sm font-medium hover:bg-purple-700 shadow-lg shadow-purple-500/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Create PIP
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
