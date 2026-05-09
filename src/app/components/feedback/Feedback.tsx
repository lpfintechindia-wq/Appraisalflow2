import { useState } from 'react';
import { Search, Filter, Eye, Send, XCircle, MessageSquare, Users, Clock, CheckCircle, AlertCircle, X, User, Calendar, Star, Shield, UserPlus } from 'lucide-react';

interface FeedbackRequest {
  id: string;
  employeeName: string;
  employeeId: string;
  employeeDepartment: string;
  reviewerName: string;
  reviewerId: string;
  reviewerType: 'Peer' | 'Skip Manager' | 'Direct Report' | 'Cross-functional';
  cycleName: string;
  dueDate: string;
  status: 'Pending' | 'Submitted' | 'Declined' | 'Expired';
  anonymous: boolean;
  requestedDate: string;
  submittedDate?: string;
  rating?: number;
  strengths?: string;
  improvementAreas?: string;
  comments?: string;
}

const mockEmployees = [
  { id: 'EMP-001', name: 'Priya Sharma', department: 'Sales' },
  { id: 'EMP-002', name: 'Arjun Mehta', department: 'Engineering' },
  { id: 'EMP-003', name: 'Deepika Nair', department: 'HR' },
  { id: 'EMP-004', name: 'Rohan Khanna', department: 'Engineering' },
  { id: 'EMP-005', name: 'Sanya Joshi', department: 'Sales' },
  { id: 'EMP-006', name: 'Varun Singh', department: 'Product' },
  { id: 'EMP-007', name: 'Ananya Iyer', department: 'Marketing' },
  { id: 'EMP-015', name: 'Amit Patel', department: 'Sales' },
  { id: 'EMP-018', name: 'Ishita Kapoor', department: 'Product' },
  { id: 'EMP-020', name: 'Kavita Desai', department: 'Engineering' },
  { id: 'EMP-025', name: 'Aditya Rao', department: 'Engineering' },
  { id: 'EMP-030', name: 'Pooja Reddy', department: 'Sales' },
  { id: 'EMP-035', name: 'Neha Gupta', department: 'Product' },
  { id: 'EMP-040', name: 'Karthik Kumar', department: 'Marketing' }
];

const mockFeedbackRequests: FeedbackRequest[] = [
  {
    id: '1',
    employeeName: 'Priya Sharma',
    employeeId: 'EMP-001',
    employeeDepartment: 'Sales',
    reviewerName: 'Amit Patel',
    reviewerId: 'EMP-015',
    reviewerType: 'Peer',
    cycleName: 'Q2 2026 Review',
    dueDate: '2026-05-15',
    status: 'Submitted',
    anonymous: false,
    requestedDate: '2026-04-01',
    submittedDate: '2026-05-03',
    rating: 4.5,
    strengths: 'Excellent communication skills, great team player, consistently meets deadlines',
    improvementAreas: 'Could improve technical documentation, needs to be more proactive in knowledge sharing',
    comments: 'Priya has been a valuable team member. Her ability to collaborate and communicate effectively has helped the team achieve our goals. Looking forward to seeing her grow in technical areas.'
  },
  {
    id: '2',
    employeeName: 'Arjun Mehta',
    employeeId: 'EMP-002',
    employeeDepartment: 'Engineering',
    reviewerName: 'Kavita Desai',
    reviewerId: 'EMP-020',
    reviewerType: 'Skip Manager',
    cycleName: 'Q2 2026 Review',
    dueDate: '2026-05-15',
    status: 'Pending',
    anonymous: false,
    requestedDate: '2026-04-05'
  },
  {
    id: '3',
    employeeName: 'Deepika Nair',
    employeeId: 'EMP-003',
    employeeDepartment: 'HR',
    reviewerName: 'Anonymous Reviewer',
    reviewerId: 'EMP-018',
    reviewerType: 'Cross-functional',
    cycleName: 'Q2 2026 Review',
    dueDate: '2026-05-15',
    status: 'Submitted',
    anonymous: true,
    requestedDate: '2026-04-02',
    submittedDate: '2026-05-10',
    rating: 5.0,
    strengths: 'Outstanding leadership, empathetic approach, excellent problem-solving skills',
    improvementAreas: 'Could delegate more effectively, sometimes takes on too much',
    comments: 'Deepika is an exceptional leader who genuinely cares about team development. Her HR initiatives have made a significant positive impact across the organization.'
  },
  {
    id: '4',
    employeeName: 'Rohan Khanna',
    employeeId: 'EMP-004',
    employeeDepartment: 'Engineering',
    reviewerName: 'Aditya Rao',
    reviewerId: 'EMP-025',
    reviewerType: 'Direct Report',
    cycleName: 'Q2 2026 Review',
    dueDate: '2026-05-15',
    status: 'Declined',
    anonymous: false,
    requestedDate: '2026-04-03'
  },
  {
    id: '5',
    employeeName: 'Sanya Joshi',
    employeeId: 'EMP-005',
    employeeDepartment: 'Sales',
    reviewerName: 'Pooja Reddy',
    reviewerId: 'EMP-030',
    reviewerType: 'Peer',
    cycleName: 'Q2 2026 Review',
    dueDate: '2026-04-30',
    status: 'Expired',
    anonymous: false,
    requestedDate: '2026-03-15'
  },
  {
    id: '6',
    employeeName: 'Varun Singh',
    employeeId: 'EMP-006',
    employeeDepartment: 'Product',
    reviewerName: 'Neha Gupta',
    reviewerId: 'EMP-035',
    reviewerType: 'Peer',
    cycleName: 'Q2 2026 Review',
    dueDate: '2026-05-20',
    status: 'Pending',
    anonymous: true,
    requestedDate: '2026-04-10'
  },
  {
    id: '7',
    employeeName: 'Ananya Iyer',
    employeeId: 'EMP-007',
    employeeDepartment: 'Marketing',
    reviewerName: 'Anonymous Reviewer',
    reviewerId: 'EMP-040',
    reviewerType: 'Cross-functional',
    cycleName: 'Q2 2026 Review',
    dueDate: '2026-05-18',
    status: 'Submitted',
    anonymous: true,
    requestedDate: '2026-04-08',
    submittedDate: '2026-05-12',
    rating: 4.0,
    strengths: 'Creative thinker, data-driven approach, excellent presentation skills',
    improvementAreas: 'Could be more responsive to emails, needs to improve cross-team collaboration',
    comments: 'Emma brings fresh perspectives to marketing campaigns. Her analytical approach has helped improve ROI on several initiatives.'
  }
];

export function Feedback() {
  const [feedbackRequests, setFeedbackRequests] = useState<FeedbackRequest[]>(mockFeedbackRequests);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [reviewerTypeFilter, setReviewerTypeFilter] = useState<string>('all');
  const [cycleFilter, setCycleFilter] = useState<string>('all');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedFeedback, setSelectedFeedback] = useState<FeedbackRequest | null>(null);
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [showReminderModal, setShowReminderModal] = useState(false);
  const [showCancelModal, setShowCancelModal] = useState(false);
  const [showAssignModal, setShowAssignModal] = useState(false);
  const [cancelReason, setCancelReason] = useState('');
  const [reminderMessage, setReminderMessage] = useState('');
  const [assignFormData, setAssignFormData] = useState({
    employeeId: '',
    employeeName: '',
    reviewerId: '',
    reviewerName: '',
    reviewerType: '',
    dueDate: '',
    anonymous: 'yes',
    invitationMessage: ''
  });
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const getStatusColor = (status: string) => {
    const colors = {
      'Pending': 'bg-yellow-100 text-yellow-700',
      'Submitted': 'bg-green-100 text-green-700',
      'Declined': 'bg-red-100 text-red-700',
      'Expired': 'bg-gray-100 text-gray-700'
    };
    return colors[status as keyof typeof colors] || colors.Pending;
  };

  const getReviewerTypeColor = (type: string) => {
    const colors = {
      'Peer': 'bg-blue-100 text-blue-700',
      'Skip Manager': 'bg-purple-100 text-purple-700',
      'Direct Report': 'bg-teal-100 text-teal-700',
      'Cross-functional': 'bg-orange-100 text-orange-700'
    };
    return colors[type as keyof typeof colors] || colors.Peer;
  };

  const handleResendReminder = () => {
    if (selectedFeedback) {
      // Logic to resend reminder
      console.log('Resending reminder to:', selectedFeedback.reviewerName);
      setShowReminderModal(false);
      setReminderMessage('');
      setSelectedFeedback(null);
    }
  };

  const handleCancelRequest = () => {
    if (selectedFeedback) {
      setFeedbackRequests(feedbackRequests.filter(f => f.id !== selectedFeedback.id));
      setShowCancelModal(false);
      setCancelReason('');
      setSelectedFeedback(null);
    }
  };

  const validateAssignForm = () => {
    const errors: Record<string, string> = {};

    if (!assignFormData.employeeId) {
      errors.employeeId = 'Employee is required';
    }
    if (!assignFormData.reviewerId) {
      errors.reviewerId = 'Reviewer is required';
    }
    if (!assignFormData.reviewerType) {
      errors.reviewerType = 'Reviewer type is required';
    }
    if (!assignFormData.dueDate) {
      errors.dueDate = 'Due date is required';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleAssignReviewer = () => {
    if (!validateAssignForm()) {
      return;
    }

    const newRequest: FeedbackRequest = {
      id: String(feedbackRequests.length + 1),
      employeeName: assignFormData.employeeName,
      employeeId: assignFormData.employeeId,
      employeeDepartment: mockEmployees.find(e => e.id === assignFormData.employeeId)?.department || '',
      reviewerName: assignFormData.reviewerName,
      reviewerId: assignFormData.reviewerId,
      reviewerType: assignFormData.reviewerType as any,
      cycleName: 'Q2 2026 Review',
      dueDate: assignFormData.dueDate,
      status: 'Pending',
      anonymous: assignFormData.anonymous === 'yes',
      requestedDate: new Date().toISOString().split('T')[0]
    };

    setFeedbackRequests([newRequest, ...feedbackRequests]);
    setShowAssignModal(false);
    setShowSuccessMessage(true);
    setAssignFormData({
      employeeId: '',
      employeeName: '',
      reviewerId: '',
      reviewerName: '',
      reviewerType: '',
      dueDate: '',
      anonymous: 'yes',
      invitationMessage: ''
    });
    setFormErrors({});

    setTimeout(() => setShowSuccessMessage(false), 3000);
  };

  const cycles = ['all', ...Array.from(new Set(feedbackRequests.map(f => f.cycleName)))];

  const filteredFeedback = feedbackRequests.filter(feedback => {
    const matchesSearch = feedback.employeeName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         feedback.reviewerName.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === 'all' || feedback.status === statusFilter;
    const matchesReviewerType = reviewerTypeFilter === 'all' || feedback.reviewerType === reviewerTypeFilter;
    const matchesCycle = cycleFilter === 'all' || feedback.cycleName === cycleFilter;
    return matchesSearch && matchesStatus && matchesReviewerType && matchesCycle;
  });

  return (
    <div className="p-6 md:p-8 bg-[#f8f9fc] min-h-screen">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-gray-900 mb-2">Feedback Management</h1>
        <p className="text-sm text-gray-600">View and manage all feedback requests and submissions</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Total Requests</p>
              <p className="text-2xl font-semibold text-gray-900">{feedbackRequests.length}</p>
            </div>
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <MessageSquare className="w-6 h-6 text-purple-600" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Pending</p>
              <p className="text-2xl font-semibold text-yellow-600">{feedbackRequests.filter(f => f.status === 'Pending').length}</p>
            </div>
            <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
              <Clock className="w-6 h-6 text-yellow-600" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Submitted</p>
              <p className="text-2xl font-semibold text-green-600">{feedbackRequests.filter(f => f.status === 'Submitted').length}</p>
            </div>
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <CheckCircle className="w-6 h-6 text-green-600" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Declined/Expired</p>
              <p className="text-2xl font-semibold text-red-600">{feedbackRequests.filter(f => f.status === 'Declined' || f.status === 'Expired').length}</p>
            </div>
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
              <AlertCircle className="w-6 h-6 text-red-600" />
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
                placeholder="Search by employee or reviewer name..."
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
              {(statusFilter !== 'all' || reviewerTypeFilter !== 'all' || cycleFilter !== 'all') && (
                <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
              )}
            </button>
            <button
              onClick={() => setShowAssignModal(true)}
              className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
            >
              <UserPlus className="w-4 h-4" />
              <span className="text-sm font-medium">Assign Reviewer</span>
            </button>
          </div>
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
                <option value="Submitted">Submitted</option>
                <option value="Declined">Declined</option>
                <option value="Expired">Expired</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Reviewer Type</label>
              <select
                value={reviewerTypeFilter}
                onChange={(e) => setReviewerTypeFilter(e.target.value)}
                className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                <option value="all">All Types</option>
                <option value="Peer">Peer</option>
                <option value="Skip Manager">Skip Manager</option>
                <option value="Direct Report">Direct Report</option>
                <option value="Cross-functional">Cross-functional</option>
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

      {/* Feedback Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-100">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Employee</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Reviewer</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Reviewer Type</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Cycle Name</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Due Date</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Anonymous</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filteredFeedback.length === 0 ? (
                <tr>
                  <td colSpan={8} className="px-6 py-12 text-center">
                    <div className="flex flex-col items-center justify-center">
                      <MessageSquare className="w-12 h-12 text-gray-300 mb-3" />
                      <p className="text-sm text-gray-500">No feedback requests found</p>
                      <p className="text-xs text-gray-400 mt-1">Try adjusting your filters</p>
                    </div>
                  </td>
                </tr>
              ) : (
                filteredFeedback.map((feedback) => (
                  <tr key={feedback.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                          <User className="w-4 h-4 text-purple-600" />
                        </div>
                        <div>
                          <div className="text-sm font-medium text-gray-900">{feedback.employeeName}</div>
                          <div className="text-xs text-gray-500">{feedback.employeeDepartment}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        {feedback.anonymous && (
                          <Shield className="w-4 h-4 text-gray-400" />
                        )}
                        <div className="text-sm text-gray-900">
                          {feedback.anonymous ? 'Anonymous' : feedback.reviewerName}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${getReviewerTypeColor(feedback.reviewerType)}`}>
                        {feedback.reviewerType}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-700">{feedback.cycleName}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-gray-400" />
                        <div className="text-sm text-gray-700">{new Date(feedback.dueDate).toLocaleDateString()}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${getStatusColor(feedback.status)}`}>
                        {feedback.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-700">{feedback.anonymous ? 'Yes' : 'No'}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => { setSelectedFeedback(feedback); setShowDetailModal(true); }}
                          className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors text-gray-600"
                          title="View Details"
                        >
                          <Eye className="w-4 h-4" />
                        </button>
                        {feedback.status === 'Pending' && (
                          <>
                            <button
                              onClick={() => {
                                setSelectedFeedback(feedback);
                                setReminderMessage(`Hi ${feedback.reviewerName},\n\nThis is a friendly reminder to submit your feedback for ${feedback.employeeName} for ${feedback.cycleName}.\n\nDue Date: ${new Date(feedback.dueDate).toLocaleDateString()}\n\nThank you!`);
                                setShowReminderModal(true);
                              }}
                              className="p-1.5 hover:bg-blue-50 rounded-lg transition-colors text-blue-600"
                              title="Resend Reminder"
                            >
                              <Send className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => { setSelectedFeedback(feedback); setShowCancelModal(true); }}
                              className="p-1.5 hover:bg-red-50 rounded-lg transition-colors text-red-600"
                              title="Cancel Request"
                            >
                              <XCircle className="w-4 h-4" />
                            </button>
                          </>
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
            Showing <span className="font-medium">{filteredFeedback.length}</span> of <span className="font-medium">{feedbackRequests.length}</span> requests
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

      {/* Feedback Detail Modal */}
      {showDetailModal && selectedFeedback && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-purple-600 to-purple-700 px-8 py-6 flex items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold text-white">Feedback Details</h2>
                <p className="text-purple-100 text-sm mt-1">{selectedFeedback.cycleName}</p>
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
                {/* Participant Details */}
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-gray-50 rounded-xl p-5">
                    <h3 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wide flex items-center gap-2">
                      <User className="w-4 h-4" />
                      Employee
                    </h3>
                    <div className="space-y-2">
                      <div>
                        <p className="text-xs text-gray-600">Name</p>
                        <p className="text-sm font-medium text-gray-900">{selectedFeedback.employeeName}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-600">Employee ID</p>
                        <p className="text-sm font-medium text-gray-900">{selectedFeedback.employeeId}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-600">Department</p>
                        <p className="text-sm font-medium text-gray-900">{selectedFeedback.employeeDepartment}</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-5">
                    <h3 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wide flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      Reviewer
                    </h3>
                    <div className="space-y-2">
                      <div>
                        <p className="text-xs text-gray-600">Name</p>
                        <p className="text-sm font-medium text-gray-900 flex items-center gap-2">
                          {selectedFeedback.anonymous ? (
                            <>
                              <Shield className="w-4 h-4 text-gray-400" />
                              Anonymous
                            </>
                          ) : (
                            selectedFeedback.reviewerName
                          )}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-600">Type</p>
                        <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${getReviewerTypeColor(selectedFeedback.reviewerType)}`}>
                          {selectedFeedback.reviewerType}
                        </span>
                      </div>
                      <div>
                        <p className="text-xs text-gray-600">Anonymous</p>
                        <p className="text-sm font-medium text-gray-900">{selectedFeedback.anonymous ? 'Yes' : 'No'}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Status & Dates */}
                <div className="bg-gray-50 rounded-xl p-5">
                  <h3 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wide">Request Information</h3>
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <p className="text-xs text-gray-600 mb-1">Status</p>
                      <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${getStatusColor(selectedFeedback.status)}`}>
                        {selectedFeedback.status}
                      </span>
                    </div>
                    <div>
                      <p className="text-xs text-gray-600 mb-1">Requested Date</p>
                      <p className="text-sm font-medium text-gray-900">{new Date(selectedFeedback.requestedDate).toLocaleDateString()}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-600 mb-1">Due Date</p>
                      <p className="text-sm font-medium text-gray-900">{new Date(selectedFeedback.dueDate).toLocaleDateString()}</p>
                    </div>
                  </div>
                  {selectedFeedback.submittedDate && (
                    <div className="mt-4">
                      <p className="text-xs text-gray-600 mb-1">Submitted Date</p>
                      <p className="text-sm font-medium text-gray-900">{new Date(selectedFeedback.submittedDate).toLocaleDateString()}</p>
                    </div>
                  )}
                </div>

                {/* Feedback Content (Only for Submitted) */}
                {selectedFeedback.status === 'Submitted' && (
                  <>
                    {/* Rating */}
                    {selectedFeedback.rating && (
                      <div className="bg-gray-50 rounded-xl p-5">
                        <h3 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wide">Overall Rating</h3>
                        <div className="flex items-center gap-3">
                          <div className="flex items-center gap-1">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <Star
                                key={star}
                                className={`w-6 h-6 ${star <= selectedFeedback.rating! ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
                              />
                            ))}
                          </div>
                          <span className="text-2xl font-semibold text-gray-900">{selectedFeedback.rating.toFixed(1)}</span>
                          <span className="text-sm text-gray-600">out of 5</span>
                        </div>
                      </div>
                    )}

                    {/* Strengths */}
                    {selectedFeedback.strengths && (
                      <div className="bg-green-50 rounded-xl p-5 border border-green-100">
                        <h3 className="text-sm font-semibold text-green-900 mb-3 uppercase tracking-wide flex items-center gap-2">
                          <CheckCircle className="w-4 h-4" />
                          Strengths
                        </h3>
                        <p className="text-sm text-gray-700 leading-relaxed">{selectedFeedback.strengths}</p>
                      </div>
                    )}

                    {/* Improvement Areas */}
                    {selectedFeedback.improvementAreas && (
                      <div className="bg-blue-50 rounded-xl p-5 border border-blue-100">
                        <h3 className="text-sm font-semibold text-blue-900 mb-3 uppercase tracking-wide flex items-center gap-2">
                          <AlertCircle className="w-4 h-4" />
                          Areas for Improvement
                        </h3>
                        <p className="text-sm text-gray-700 leading-relaxed">{selectedFeedback.improvementAreas}</p>
                      </div>
                    )}

                    {/* Comments */}
                    {selectedFeedback.comments && (
                      <div className="bg-gray-50 rounded-xl p-5">
                        <h3 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wide flex items-center gap-2">
                          <MessageSquare className="w-4 h-4" />
                          Additional Comments
                        </h3>
                        <p className="text-sm text-gray-700 leading-relaxed">{selectedFeedback.comments}</p>
                      </div>
                    )}
                  </>
                )}

                {/* Pending State Message */}
                {selectedFeedback.status === 'Pending' && (
                  <div className="bg-yellow-50 rounded-xl p-6 text-center border border-yellow-100">
                    <Clock className="w-12 h-12 text-yellow-500 mx-auto mb-3" />
                    <p className="text-sm text-yellow-700 font-medium">Feedback pending from reviewer</p>
                    <p className="text-xs text-yellow-600 mt-1">The reviewer has not yet submitted their feedback</p>
                  </div>
                )}

                {/* Declined State Message */}
                {selectedFeedback.status === 'Declined' && (
                  <div className="bg-red-50 rounded-xl p-6 text-center border border-red-100">
                    <XCircle className="w-12 h-12 text-red-500 mx-auto mb-3" />
                    <p className="text-sm text-red-700 font-medium">Feedback request declined</p>
                    <p className="text-xs text-red-600 mt-1">The reviewer has declined to provide feedback</p>
                  </div>
                )}

                {/* Expired State Message */}
                {selectedFeedback.status === 'Expired' && (
                  <div className="bg-gray-50 rounded-xl p-6 text-center border border-gray-200">
                    <AlertCircle className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                    <p className="text-sm text-gray-700 font-medium">Feedback request expired</p>
                    <p className="text-xs text-gray-600 mt-1">The due date has passed without submission</p>
                  </div>
                )}
              </div>
            </div>

            {/* Footer */}
            <div className="bg-gray-50 px-8 py-4 flex gap-3 justify-end border-t border-gray-200">
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

      {/* Resend Reminder Modal */}
      {showReminderModal && selectedFeedback && (
        <div className="fixed inset-0 bg-gray-900/80 backdrop-blur-md flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] max-w-lg w-full relative">
            {/* Close Button */}
            <button
              onClick={() => { setShowReminderModal(false); setReminderMessage(''); }}
              className="absolute top-6 right-6 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 transition-colors z-10"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Header */}
            <div className="px-8 pt-8 pb-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-blue-100 flex items-center justify-center">
                <Send className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Resend Reminder</h3>
              <p className="text-sm text-gray-500">
                Send reminder to {selectedFeedback.anonymous ? 'the reviewer' : selectedFeedback.reviewerName}
              </p>
            </div>

            {/* Content */}
            <div className="px-8 pb-6 space-y-5">
              <div className="bg-blue-50 border border-blue-200 rounded-2xl p-4">
                <p className="text-sm text-blue-800 text-center">
                  Feedback request for <span className="font-semibold">{selectedFeedback.employeeName}</span>
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">Message Preview</label>
                <textarea
                  value={reminderMessage}
                  onChange={(e) => setReminderMessage(e.target.value)}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none transition-all"
                  rows={6}
                />
              </div>
            </div>

            {/* Footer */}
            <div className="px-8 py-6 bg-gray-50 rounded-b-3xl flex gap-3">
              <button
                onClick={() => { setShowReminderModal(false); setReminderMessage(''); }}
                className="flex-1 px-4 py-3 bg-white border border-gray-300 rounded-xl text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleResendReminder}
                className="flex-1 px-4 py-3 bg-blue-600 text-white rounded-xl text-sm font-semibold hover:bg-blue-700 transition-colors"
              >
                Send Reminder
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Cancel Request Modal */}
      {showCancelModal && selectedFeedback && (
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
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-red-100 flex items-center justify-center">
                <XCircle className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Cancel Feedback Request</h3>
              <p className="text-sm text-gray-500">This action will cancel the pending request</p>
            </div>

            {/* Content */}
            <div className="px-8 pb-6 space-y-5">
              <div className="bg-red-50 border border-red-200 rounded-2xl p-4">
                <p className="text-sm text-red-800 text-center">
                  Request from {selectedFeedback.anonymous ? 'the reviewer' : selectedFeedback.reviewerName} for <span className="font-semibold">{selectedFeedback.employeeName}</span>
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">Reason for Cancellation <span className="text-gray-400">(Optional)</span></label>
                <textarea
                  value={cancelReason}
                  onChange={(e) => setCancelReason(e.target.value)}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 resize-none transition-all"
                  rows={4}
                  placeholder="Explain why this request is being cancelled..."
                />
              </div>
            </div>

            {/* Footer */}
            <div className="px-8 py-6 bg-gray-50 rounded-b-3xl flex gap-3">
              <button
                onClick={() => { setShowCancelModal(false); setCancelReason(''); }}
                className="flex-1 px-4 py-3 bg-white border border-gray-300 rounded-xl text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Keep Request
              </button>
              <button
                onClick={handleCancelRequest}
                className="flex-1 px-4 py-3 bg-red-600 text-white rounded-xl text-sm font-semibold hover:bg-red-700 transition-colors"
              >
                Confirm Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Assign Reviewer Modal */}
      {showAssignModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-purple-600 to-purple-700 px-8 py-6 flex items-center justify-between">
              <h2 className="text-xl font-semibold text-white">Assign Reviewer</h2>
              <button
                onClick={() => {
                  setShowAssignModal(false);
                  setAssignFormData({
                    employeeId: '',
                    employeeName: '',
                    reviewerId: '',
                    reviewerName: '',
                    reviewerType: '',
                    dueDate: '',
                    anonymous: 'yes',
                    invitationMessage: ''
                  });
                  setFormErrors({});
                }}
                className="p-1.5 hover:bg-white/20 rounded-lg transition-colors"
              >
                <X className="w-5 h-5 text-white" />
              </button>
            </div>

            {/* Form Content */}
            <div className="p-8 overflow-y-auto max-h-[calc(90vh-180px)]">
              <div className="space-y-6">
                {/* Employee & Reviewer Row */}
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Employee <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={assignFormData.employeeId}
                      onChange={(e) => {
                        const employee = mockEmployees.find(emp => emp.id === e.target.value);
                        setAssignFormData({
                          ...assignFormData,
                          employeeId: e.target.value,
                          employeeName: employee?.name || ''
                        });
                        setFormErrors({ ...formErrors, employeeId: '' });
                      }}
                      className={`w-full px-4 py-2.5 bg-white border ${formErrors.employeeId ? 'border-red-300' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all`}
                    >
                      <option value="">Select employee</option>
                      {mockEmployees.map(emp => (
                        <option key={emp.id} value={emp.id}>
                          {emp.name} ({emp.id}) - {emp.department}
                        </option>
                      ))}
                    </select>
                    {formErrors.employeeId && (
                      <p className="text-xs text-red-600 mt-1">{formErrors.employeeId}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Reviewer <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={assignFormData.reviewerId}
                      onChange={(e) => {
                        const reviewer = mockEmployees.find(emp => emp.id === e.target.value);
                        setAssignFormData({
                          ...assignFormData,
                          reviewerId: e.target.value,
                          reviewerName: reviewer?.name || ''
                        });
                        setFormErrors({ ...formErrors, reviewerId: '' });
                      }}
                      className={`w-full px-4 py-2.5 bg-white border ${formErrors.reviewerId ? 'border-red-300' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all`}
                    >
                      <option value="">Search by name or employee id</option>
                      {mockEmployees.map(emp => (
                        <option key={emp.id} value={emp.id}>
                          {emp.name} ({emp.id}) - {emp.department}
                        </option>
                      ))}
                    </select>
                    {formErrors.reviewerId && (
                      <p className="text-xs text-red-600 mt-1">{formErrors.reviewerId}</p>
                    )}
                  </div>
                </div>

                {/* Reviewer Type & Due Date Row */}
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Reviewer Type <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={assignFormData.reviewerType}
                      onChange={(e) => {
                        setAssignFormData({ ...assignFormData, reviewerType: e.target.value });
                        setFormErrors({ ...formErrors, reviewerType: '' });
                      }}
                      className={`w-full px-4 py-2.5 bg-white border ${formErrors.reviewerType ? 'border-red-300' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all`}
                    >
                      <option value="">Select reviewer type</option>
                      <option value="Peer">Peer</option>
                      <option value="Direct Report">Direct Report</option>
                      <option value="Skip Manager">Skip Manager</option>
                      <option value="Cross-functional">Cross-functional</option>
                    </select>
                    {formErrors.reviewerType && (
                      <p className="text-xs text-red-600 mt-1">{formErrors.reviewerType}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      Due Date <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="date"
                      value={assignFormData.dueDate}
                      onChange={(e) => {
                        setAssignFormData({ ...assignFormData, dueDate: e.target.value });
                        setFormErrors({ ...formErrors, dueDate: '' });
                      }}
                      min={new Date().toISOString().split('T')[0]}
                      className={`w-full px-4 py-2.5 bg-white border ${formErrors.dueDate ? 'border-red-300' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all`}
                    />
                    {formErrors.dueDate && (
                      <p className="text-xs text-red-600 mt-1">{formErrors.dueDate}</p>
                    )}
                  </div>
                </div>

                {/* Anonymous Feedback */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                    <Shield className="w-4 h-4" />
                    Anonymous Feedback
                  </label>
                  <select
                    value={assignFormData.anonymous}
                    onChange={(e) => setAssignFormData({ ...assignFormData, anonymous: e.target.value })}
                    className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all"
                  >
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                  <p className="text-xs text-gray-500 mt-2">
                    Anonymous feedback will hide the reviewer's identity from the employee
                  </p>
                </div>

                {/* Invitation Message */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                    <MessageSquare className="w-4 h-4" />
                    Invitation Message <span className="text-gray-500 text-xs font-normal">(Optional)</span>
                  </label>
                  <textarea
                    value={assignFormData.invitationMessage}
                    onChange={(e) => setAssignFormData({ ...assignFormData, invitationMessage: e.target.value })}
                    className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all resize-none"
                    rows={4}
                    placeholder={`Hi ${assignFormData.reviewerName || '[Reviewer Name]'},\n\nYour perspective would be valuable for ${assignFormData.employeeName || '[Employee Name]'}'s feedback. Please share your insights by ${assignFormData.dueDate || '[Due Date]'}.\n\nThank you!`}
                  />
                  <p className="text-xs text-gray-500 mt-2">
                    Customize the invitation message sent to the reviewer
                  </p>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="bg-gray-50 px-8 py-4 flex gap-3 justify-end border-t border-gray-200">
              <button
                onClick={() => {
                  setShowAssignModal(false);
                  setAssignFormData({
                    employeeId: '',
                    employeeName: '',
                    reviewerId: '',
                    reviewerName: '',
                    reviewerType: '',
                    dueDate: '',
                    anonymous: 'yes',
                    invitationMessage: ''
                  });
                  setFormErrors({});
                }}
                className="px-6 py-2.5 bg-white border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleAssignReviewer}
                className="px-6 py-2.5 bg-purple-600 text-white rounded-lg text-sm font-medium hover:bg-purple-700 shadow-lg shadow-purple-500/30 transition-all"
              >
                Send Invitation
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Success Message */}
      {showSuccessMessage && (
        <div className="fixed top-4 right-4 z-50 animate-slide-in">
          <div className="bg-green-50 border border-green-200 rounded-lg shadow-lg p-4 flex items-center gap-3 min-w-[320px]">
            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
              <CheckCircle className="w-5 h-5 text-green-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-green-900">Reviewer Assigned Successfully</p>
              <p className="text-xs text-green-700 mt-1">Feedback request has been sent to the reviewer</p>
            </div>
            <button
              onClick={() => setShowSuccessMessage(false)}
              className="ml-auto text-green-600 hover:text-green-800"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
