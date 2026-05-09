import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Plus, Eye, Edit2, Trash2, X, Filter, TrendingUp, Check, AlertCircle, BarChart3 } from 'lucide-react';

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

const mockSessions: CalibrationSession[] = [
  {
    id: '1',
    name: 'Engineering Calibration - Q1 2026',
    appraisalCycle: 'Q1 2026 Performance Review',
    department: 'Engineering',
    participants: ['Rajesh Kumar', 'Neha Gupta', 'Vikram Singh'],
    status: 'In Progress',
    createdDate: '2026-05-01',
    employees: [
      { id: '1', name: 'Priya Sharma', employeeId: 'EMP001', department: 'Engineering', designation: 'Senior Developer', selfRating: 4, managerRating: 4.5, suggestedRating: 4.5, finalRating: 4.5, ratingBand: 'Exceeds Expectations', modified: false },
      { id: '2', name: 'Arjun Mehta', employeeId: 'EMP004', department: 'Engineering', designation: 'DevOps Engineer', selfRating: 3.5, managerRating: 4, suggestedRating: 4, finalRating: 4, ratingBand: 'Meets Expectations', modified: false },
      { id: '3', name: 'Rahul Verma', employeeId: 'EMP010', department: 'Engineering', designation: 'Junior Developer', selfRating: 3, managerRating: 3.5, suggestedRating: 3.5, finalRating: 3.5, ratingBand: 'Meets Expectations', modified: false },
    ],
  },
  {
    id: '2',
    name: 'Sales Team Annual Review 2026',
    appraisalCycle: 'Annual Review 2026',
    department: 'Sales',
    participants: ['Kavita Desai', 'Neha Gupta'],
    status: 'Finalized',
    createdDate: '2026-04-15',
    employees: [
      { id: '4', name: 'Amit Patel', employeeId: 'EMP002', department: 'Sales', designation: 'Sales Manager', selfRating: 4.5, managerRating: 4, suggestedRating: 4, finalRating: 4.5, ratingBand: 'Exceeds Expectations', modified: true },
    ],
  },
  {
    id: '3',
    name: 'Marketing Mid-Year Review',
    appraisalCycle: 'H1 2026',
    department: 'Marketing',
    participants: ['Vikram Singh'],
    status: 'Draft',
    createdDate: '2026-05-05',
    employees: [],
  },
];

export function Calibration() {
  const navigate = useNavigate();
  const [sessions, setSessions] = useState<CalibrationSession[]>(mockSessions);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [showFilters, setShowFilters] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedSession, setSelectedSession] = useState<CalibrationSession | null>(null);

  const getStatusColor = (status: string) => {
    const colors = {
      'Draft': 'bg-gray-100 text-gray-700',
      'In Progress': 'bg-blue-100 text-blue-700',
      'Finalized': 'bg-green-100 text-green-700',
    };
    return colors[status as keyof typeof colors] || colors.Draft;
  };

  const handleCreateSession = (sessionData: Partial<CalibrationSession>) => {
    const newSession: CalibrationSession = {
      id: String(Date.now()),
      name: sessionData.name || '',
      appraisalCycle: sessionData.appraisalCycle || '',
      department: sessionData.department || '',
      participants: sessionData.participants || [],
      status: 'Draft',
      createdDate: new Date().toISOString().split('T')[0],
      employees: [],
    };
    setSessions([newSession, ...sessions]);
    setShowCreateModal(false);
  };

  const handleDeleteSession = () => {
    if (selectedSession) {
      setSessions(sessions.filter(s => s.id !== selectedSession.id));
      setShowDeleteModal(false);
      setSelectedSession(null);
    }
  };

  const filteredSessions = sessions.filter(session => {
    const matchesSearch = session.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         session.department.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === 'all' || session.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="p-6 md:p-8 bg-[#f8f9fc] min-h-screen">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-gray-900 mb-2">Calibration Sessions</h1>
        <p className="text-sm text-gray-600">Create and manage rating calibration sessions for performance reviews</p>
      </div>

      {/* Actions Bar */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 mb-6">
        <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
          <div className="flex-1 w-full md:w-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search sessions..."
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
            </button>
            <button
              onClick={() => setShowCreateModal(true)}
              className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
            >
              <Plus className="w-4 h-4" />
              <span className="text-sm font-medium">Create Session</span>
            </button>
          </div>
        </div>

        {/* Filters */}
        {showFilters && (
          <div className="mt-4 pt-4 border-t border-gray-100 grid grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="w-full px-4 py-2 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                <option value="all">All Statuses</option>
                <option value="Draft">Draft</option>
                <option value="In Progress">In Progress</option>
                <option value="Finalized">Finalized</option>
              </select>
            </div>
          </div>
        )}
      </div>

      {/* Sessions Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-100">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Session Name</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Appraisal Cycle</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Department</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Participants</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Created Date</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filteredSessions.map((session) => (
                <tr key={session.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="text-sm font-medium text-gray-900">{session.name}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-700">{session.appraisalCycle}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-700">{session.department}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-700">{session.participants.length} participants</div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${getStatusColor(session.status)}`}>
                      {session.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-700">{new Date(session.createdDate).toLocaleDateString()}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => navigate(`/appraisal/calibration/view/${session.id}`, { state: { session } })}
                        className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors text-gray-600"
                        title="View Session"
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => {
                          setSelectedSession(session);
                          setShowEditModal(true);
                        }}
                        className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors text-gray-600"
                        title="Edit Session"
                      >
                        <Edit2 className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => {
                          setSelectedSession(session);
                          setShowDeleteModal(true);
                        }}
                        disabled={session.status === 'Finalized'}
                        className="p-1.5 hover:bg-red-100 rounded-lg transition-colors text-red-600 disabled:opacity-50 disabled:cursor-not-allowed"
                        title={session.status === 'Finalized' ? 'Cannot delete finalized session' : 'Delete Session'}
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredSessions.length === 0 && (
          <div className="px-6 py-12 text-center">
            <p className="text-sm text-gray-500">No calibration sessions found</p>
          </div>
        )}

        {/* Pagination */}
        <div className="px-6 py-4 border-t border-gray-100 flex items-center justify-between">
          <div className="text-sm text-gray-600">
            Showing <span className="font-medium">{filteredSessions.length}</span> of <span className="font-medium">{sessions.length}</span> sessions
          </div>
        </div>
      </div>

      {/* Create Session Modal */}
      {showCreateModal && (
        <CreateSessionModal
          onClose={() => setShowCreateModal(false)}
          onSubmit={handleCreateSession}
        />
      )}

      {/* Edit Session Modal */}
      {showEditModal && selectedSession && (
        <EditSessionModal
          session={selectedSession}
          onClose={() => {
            setShowEditModal(false);
            setSelectedSession(null);
          }}
          onSubmit={(updatedData) => {
            setSessions(sessions.map(s => s.id === selectedSession.id ? { ...s, ...updatedData } : s));
            setShowEditModal(false);
            setSelectedSession(null);
          }}
        />
      )}

      {/* Delete Confirmation Modal */}
      {showDeleteModal && selectedSession && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full">
            {/* Header */}
            <div className="bg-gradient-to-r from-red-600 to-red-700 px-8 py-6 flex items-center justify-between">
              <h2 className="text-xl font-semibold text-white">Delete Session</h2>
              <button
                onClick={() => setShowDeleteModal(false)}
                className="p-1.5 hover:bg-white/20 rounded-lg transition-colors"
              >
                <X className="w-5 h-5 text-white" />
              </button>
            </div>

            {/* Content */}
            <div className="p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                  <AlertCircle className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Are you sure?</h3>
                  <p className="text-sm text-gray-600">
                    This will permanently delete the calibration session "{selectedSession.name}". This action cannot be undone.
                  </p>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="px-8 py-4 bg-gray-50 flex gap-3 justify-end border-t border-gray-200 rounded-b-2xl">
              <button
                onClick={() => setShowDeleteModal(false)}
                className="px-6 py-2.5 bg-white border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleDeleteSession}
                className="px-6 py-2.5 bg-red-600 text-white rounded-lg text-sm font-medium hover:bg-red-700 transition-colors"
              >
                Delete Session
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// Create Session Modal
function CreateSessionModal({
  onClose,
  onSubmit,
}: {
  onClose: () => void;
  onSubmit: (data: Partial<CalibrationSession>) => void;
}) {
  const [formData, setFormData] = useState({
    name: '',
    appraisalCycle: '',
    department: '',
    participants: [] as string[],
  });

  const [participantInput, setParticipantInput] = useState('');

  const handleAddParticipant = () => {
    if (participantInput.trim()) {
      setFormData({
        ...formData,
        participants: [...formData.participants, participantInput.trim()],
      });
      setParticipantInput('');
    }
  };

  const handleRemoveParticipant = (index: number) => {
    setFormData({
      ...formData,
      participants: formData.participants.filter((_, i) => i !== index),
    });
  };

  const handleSubmit = () => {
    if (!formData.name || !formData.appraisalCycle || !formData.department) return;
    onSubmit(formData);
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-600 to-purple-700 px-8 py-6 flex items-center justify-between">
          <h2 className="text-xl font-semibold text-white">Create Calibration Session</h2>
          <button onClick={onClose} className="p-1.5 hover:bg-white/20 rounded-lg transition-colors">
            <X className="w-5 h-5 text-white" />
          </button>
        </div>

        {/* Content */}
        <div className="p-8 overflow-y-auto max-h-[calc(90vh-180px)]">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Session Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="e.g., Engineering Q1 Calibration"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Appraisal Cycle <span className="text-red-500">*</span>
              </label>
              <select
                value={formData.appraisalCycle}
                onChange={(e) => setFormData({ ...formData, appraisalCycle: e.target.value })}
                className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                <option value="">Select cycle</option>
                <option value="Q1 2026 Performance Review">Q1 2026 Performance Review</option>
                <option value="Annual Review 2026">Annual Review 2026</option>
                <option value="H1 2026">H1 2026</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Department / Group <span className="text-red-500">*</span>
              </label>
              <select
                value={formData.department}
                onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                <option value="">Select department</option>
                <option value="Engineering">Engineering</option>
                <option value="Sales">Sales</option>
                <option value="Marketing">Marketing</option>
                <option value="HR">HR</option>
                <option value="Product">Product</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">Participants (Multi-select)</label>
              <div className="flex gap-2 mb-3">
                <input
                  type="text"
                  value={participantInput}
                  onChange={(e) => setParticipantInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleAddParticipant()}
                  className="flex-1 px-4 py-2.5 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Enter participant name"
                />
                <button
                  onClick={handleAddParticipant}
                  className="px-4 py-2.5 bg-purple-600 text-white rounded-lg text-sm font-medium hover:bg-purple-700 transition-colors"
                >
                  Add
                </button>
              </div>
              {formData.participants.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {formData.participants.map((participant, index) => (
                    <div key={index} className="flex items-center gap-2 px-3 py-1.5 bg-purple-50 text-purple-700 rounded-lg">
                      <span className="text-sm font-medium">{participant}</span>
                      <button
                        onClick={() => handleRemoveParticipant(index)}
                        className="hover:bg-purple-200 rounded-full p-0.5 transition-colors"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-8 py-4 bg-gray-50 flex gap-3 justify-end border-t border-gray-200">
          <button
            onClick={onClose}
            className="px-6 py-2.5 bg-white border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            disabled={!formData.name || !formData.appraisalCycle || !formData.department}
            className="px-6 py-2.5 bg-purple-600 text-white rounded-lg text-sm font-medium hover:bg-purple-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Create Session
          </button>
        </div>
      </div>
    </div>
  );
}

// Edit Session Modal
function EditSessionModal({
  session,
  onClose,
  onSubmit,
}: {
  session: CalibrationSession;
  onClose: () => void;
  onSubmit: (data: Partial<CalibrationSession>) => void;
}) {
  const [formData, setFormData] = useState({
    name: session.name,
    department: session.department,
    participants: [...session.participants],
  });

  const [participantInput, setParticipantInput] = useState('');

  const handleAddParticipant = () => {
    if (participantInput.trim()) {
      setFormData({
        ...formData,
        participants: [...formData.participants, participantInput.trim()],
      });
      setParticipantInput('');
    }
  };

  const handleRemoveParticipant = (index: number) => {
    setFormData({
      ...formData,
      participants: formData.participants.filter((_, i) => i !== index),
    });
  };

  const handleSubmit = () => {
    if (!formData.name || !formData.department) return;
    onSubmit(formData);
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-6 flex items-center justify-between">
          <h2 className="text-xl font-semibold text-white">Edit Calibration Session</h2>
          <button onClick={onClose} className="p-1.5 hover:bg-white/20 rounded-lg transition-colors">
            <X className="w-5 h-5 text-white" />
          </button>
        </div>

        {/* Content */}
        <div className="p-8 overflow-y-auto max-h-[calc(90vh-180px)]">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Session Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="e.g., Engineering Q1 Calibration"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Department <span className="text-red-500">*</span>
              </label>
              <select
                value={formData.department}
                onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select department</option>
                <option value="Engineering">Engineering</option>
                <option value="Sales">Sales</option>
                <option value="Marketing">Marketing</option>
                <option value="HR">HR</option>
                <option value="Product">Product</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">Participants</label>
              <div className="flex gap-2 mb-3">
                <input
                  type="text"
                  value={participantInput}
                  onChange={(e) => setParticipantInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleAddParticipant()}
                  className="flex-1 px-4 py-2.5 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter participant name"
                />
                <button
                  onClick={handleAddParticipant}
                  className="px-4 py-2.5 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
                >
                  Add
                </button>
              </div>
              {formData.participants.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {formData.participants.map((participant, index) => (
                    <div key={index} className="flex items-center gap-2 px-3 py-1.5 bg-blue-50 text-blue-700 rounded-lg">
                      <span className="text-sm font-medium">{participant}</span>
                      <button
                        onClick={() => handleRemoveParticipant(index)}
                        className="hover:bg-blue-200 rounded-full p-0.5 transition-colors"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-8 py-4 bg-gray-50 flex gap-3 justify-end border-t border-gray-200">
          <button
            onClick={onClose}
            className="px-6 py-2.5 bg-white border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            disabled={!formData.name || !formData.department}
            className="px-6 py-2.5 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}
