import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Filter, Plus, Eye, Edit2, Trash2, X, Calendar, Users, Play, FastForward, Lock, Send, ChevronRight, Check } from 'lucide-react';

interface Cycle {
  id: string;
  name: string;
  period: string;
  startDate: string;
  endDate: string;
  stage: 'draft' | 'self-review' | 'manager-review' | 'calibration' | 'completed';
  status: 'Draft' | 'Active' | 'Closed';
  employees: number;
  completed: number;
}

const mockCycles: Cycle[] = [
  {
    id: '1',
    name: 'Q1 2026 Performance Review',
    period: 'Q1 2026',
    startDate: '2026-01-01',
    endDate: '2026-03-31',
    stage: 'manager-review',
    status: 'Active',
    employees: 150,
    completed: 138
  },
  {
    id: '2',
    name: 'Annual Review 2025',
    period: 'FY 2025',
    startDate: '2025-01-01',
    endDate: '2025-12-31',
    stage: 'completed',
    status: 'Closed',
    employees: 145,
    completed: 145
  },
  {
    id: '3',
    name: 'Mid-Year Review 2026',
    period: 'H1 2026',
    startDate: '2026-06-01',
    endDate: '2026-06-30',
    stage: 'draft',
    status: 'Draft',
    employees: 0,
    completed: 0
  },
];

const stages = [
  { id: 'draft', label: 'Draft', icon: Edit2 },
  { id: 'self-review', label: 'Self Review', icon: Users },
  { id: 'manager-review', label: 'Manager Review', icon: ChevronRight },
  { id: 'calibration', label: 'Calibration', icon: Check },
  { id: 'completed', label: 'Completed', icon: Lock },
];

export function Cycles() {
  const navigate = useNavigate();
  const [cycles, setCycles] = useState<Cycle[]>(mockCycles);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCycles, setSelectedCycles] = useState<string[]>([]);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showViewModal, setShowViewModal] = useState(false);
  const [selectedCycle, setSelectedCycle] = useState<Cycle | null>(null);
  const [formData, setFormData] = useState({
    cycleCode: '',
    name: '',
    type: '',
    template: '',
    period: '',
    startDate: '',
    endDate: '',
    applicability: '',
    employees: [] as string[]
  });

  const getStageColor = (stage: string) => {
    const colors = {
      'draft': 'bg-gray-100 text-gray-700',
      'self-review': 'bg-blue-100 text-blue-700',
      'manager-review': 'bg-purple-100 text-purple-700',
      'calibration': 'bg-orange-100 text-orange-700',
      'completed': 'bg-green-100 text-green-700'
    };
    return colors[stage as keyof typeof colors] || colors.draft;
  };

  const getStatusColor = (status: string) => {
    const colors = {
      'Draft': 'bg-gray-100 text-gray-700',
      'Active': 'bg-green-100 text-green-700',
      'Closed': 'bg-red-100 text-red-700'
    };
    return colors[status as keyof typeof colors] || colors.Draft;
  };

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedCycles(cycles.map(c => c.id));
    } else {
      setSelectedCycles([]);
    }
  };

  const handleSelectCycle = (id: string, checked: boolean) => {
    if (checked) {
      setSelectedCycles([...selectedCycles, id]);
    } else {
      setSelectedCycles(selectedCycles.filter(cid => cid !== id));
    }
  };

  const handleEdit = () => {
    if (selectedCycle) {
      setCycles(cycles.map(c => c.id === selectedCycle.id ? {
        ...c,
        name: formData.name,
        period: formData.period,
        startDate: formData.startDate,
        endDate: formData.endDate
      } : c));
      setShowEditModal(false);
      setFormData({ cycleCode: '', name: '', type: '', template: '', period: '', startDate: '', endDate: '', applicability: '', employees: [] });
    }
  };

  const handleDelete = () => {
    if (selectedCycle) {
      setCycles(cycles.filter(c => c.id !== selectedCycle.id));
      setShowDeleteModal(false);
      setSelectedCycle(null);
    }
  };

  const handleOpenCycle = (cycle: Cycle) => {
    setCycles(cycles.map(c => c.id === cycle.id ? { ...c, status: 'Active' } : c));
  };

  const handleAdvanceStage = (cycle: Cycle) => {
    const stageOrder = ['draft', 'self-review', 'manager-review', 'calibration', 'completed'];
    const currentIndex = stageOrder.indexOf(cycle.stage);
    if (currentIndex < stageOrder.length - 1) {
      const nextStage = stageOrder[currentIndex + 1] as Cycle['stage'];
      setCycles(cycles.map(c => c.id === cycle.id ? { ...c, stage: nextStage } : c));
    }
  };

  const handleCloseCycle = (cycle: Cycle) => {
    setCycles(cycles.map(c => c.id === cycle.id ? { ...c, status: 'Closed', stage: 'completed' } : c));
  };

  const handlePublish = (cycle: Cycle) => {
    alert(`Publishing results for ${cycle.name}`);
  };

  const filteredCycles = cycles.filter(cycle =>
    cycle.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    cycle.period.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-6 md:p-8 bg-[#f8f9fc] min-h-screen">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-gray-900 mb-2">Appraisal Cycles</h1>
        <p className="text-sm text-gray-600">Manage appraisal cycles and track progress</p>
      </div>

      {/* Actions Bar */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 mb-6">
        <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
          <div className="flex-1 w-full md:w-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search cycles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>
          </div>
          <div className="flex gap-3 w-full md:w-auto">
            <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              <Filter className="w-4 h-4" />
              <span className="text-sm font-medium">Filter</span>
            </button>
            <button
              onClick={() => navigate('/appraisal/cycles/new')}
              className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
            >
              <Plus className="w-4 h-4" />
              <span className="text-sm font-medium">Create Cycle</span>
            </button>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-100">
              <tr>
                <th className="w-12 px-6 py-4">
                  <input
                    type="checkbox"
                    checked={selectedCycles.length === cycles.length}
                    onChange={(e) => handleSelectAll(e.target.checked)}
                    className="w-4 h-4 rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                  />
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Cycle Name</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Period</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Dates</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Stage</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Progress</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filteredCycles.map((cycle) => (
                <tr key={cycle.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4">
                    <input
                      type="checkbox"
                      checked={selectedCycles.includes(cycle.id)}
                      onChange={(e) => handleSelectCycle(cycle.id, e.target.checked)}
                      className="w-4 h-4 rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                    />
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm font-medium text-gray-900">{cycle.name}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-700">{cycle.period}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-700">{new Date(cycle.startDate).toLocaleDateString()} - {new Date(cycle.endDate).toLocaleDateString()}</div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${getStageColor(cycle.stage)}`}>
                      {cycle.stage.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${getStatusColor(cycle.status)}`}>
                      {cycle.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <div className="flex-1 bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-purple-600 h-2 rounded-full transition-all"
                          style={{ width: `${cycle.employees > 0 ? (cycle.completed / cycle.employees) * 100 : 0}%` }}
                        ></div>
                      </div>
                      <span className="text-xs text-gray-600 whitespace-nowrap">{cycle.completed}/{cycle.employees}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => { setSelectedCycle(cycle); setShowViewModal(true); }}
                        className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors text-gray-600"
                        title="View"
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => {
                          setSelectedCycle(cycle);
                          setFormData({
                            cycleCode: '',
                            name: cycle.name,
                            type: '',
                            template: '',
                            period: cycle.period,
                            startDate: cycle.startDate,
                            endDate: cycle.endDate,
                            applicability: '',
                            employees: []
                          });
                          setShowEditModal(true);
                        }}
                        className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors text-gray-600"
                        title="Edit"
                      >
                        <Edit2 className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => { setSelectedCycle(cycle); setShowDeleteModal(true); }}
                        className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors text-red-600"
                        title="Delete"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                      {cycle.status === 'Draft' && (
                        <button
                          onClick={() => handleOpenCycle(cycle)}
                          className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors text-green-600"
                          title="Open Cycle"
                        >
                          <Play className="w-4 h-4" />
                        </button>
                      )}
                      {cycle.status === 'Active' && cycle.stage !== 'completed' && (
                        <button
                          onClick={() => handleAdvanceStage(cycle)}
                          className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors text-blue-600"
                          title="Advance Stage"
                        >
                          <FastForward className="w-4 h-4" />
                        </button>
                      )}
                      {cycle.status === 'Active' && (
                        <button
                          onClick={() => handleCloseCycle(cycle)}
                          className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors text-orange-600"
                          title="Close Cycle"
                        >
                          <Lock className="w-4 h-4" />
                        </button>
                      )}
                      {cycle.status === 'Closed' && (
                        <button
                          onClick={() => handlePublish(cycle)}
                          className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors text-purple-600"
                          title="Publish"
                        >
                          <Send className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="px-6 py-4 border-t border-gray-100 flex items-center justify-between">
          <div className="text-sm text-gray-600">
            Showing <span className="font-medium">{filteredCycles.length}</span> of <span className="font-medium">{cycles.length}</span> cycles
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

      {/* Edit Modal */}
      {showEditModal && (
        <div className="fixed inset-0 bg-gray-900/80 backdrop-blur-md flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] max-w-2xl w-full relative max-h-[90vh] overflow-hidden flex flex-col">
            {/* Close Button */}
            <button
              onClick={() => setShowEditModal(false)}
              className="absolute top-6 right-6 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 transition-colors z-10"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Header */}
            <div className="px-8 pt-8 pb-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-purple-100 flex items-center justify-center">
                <Edit2 className="w-8 h-8 text-purple-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Edit Cycle</h2>
              <p className="text-sm text-gray-500">Update cycle information</p>
            </div>

            {/* Content */}
            <div className="px-8 pb-6 overflow-y-auto flex-1">
              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">Cycle Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">Period</label>
                  <input
                    type="text"
                    value={formData.period}
                    onChange={(e) => setFormData({ ...formData, period: e.target.value })}
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">Start Date</label>
                    <input
                      type="date"
                      value={formData.startDate}
                      onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">End Date</label>
                    <input
                      type="date"
                      value={formData.endDate}
                      onChange={(e) => setFormData({ ...formData, endDate: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="px-8 py-6 bg-gray-50 rounded-b-3xl flex gap-3">
              <button
                onClick={() => setShowEditModal(false)}
                className="flex-1 px-4 py-3 bg-white border border-gray-300 rounded-xl text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleEdit}
                className="flex-1 px-4 py-3 bg-purple-600 text-white rounded-xl text-sm font-semibold hover:bg-purple-700 transition-colors"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}

      {/* View Modal */}
      {showViewModal && selectedCycle && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-100 px-6 py-4 flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-900">Cycle Details</h2>
              <button onClick={() => setShowViewModal(false)} className="p-1 hover:bg-gray-100 rounded-lg transition-colors">
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>
            <div className="p-6 space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-1">{selectedCycle.name}</h3>
                <p className="text-sm text-gray-600">{selectedCycle.period}</p>
              </div>

              {/* Stage Stepper */}
              <div className="bg-gray-50 rounded-xl p-6">
                <h4 className="text-sm font-medium text-gray-700 mb-4">Current Stage</h4>
                <div className="flex items-center justify-between">
                  {stages.map((stage, index) => {
                    const StageIcon = stage.icon;
                    const stageIndex = stages.findIndex(s => s.id === selectedCycle.stage);
                    const isActive = index === stageIndex;
                    const isCompleted = index < stageIndex;

                    return (
                      <div key={stage.id} className="flex items-center flex-1">
                        <div className="flex flex-col items-center">
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                            isActive ? 'bg-purple-600 text-white' :
                            isCompleted ? 'bg-green-500 text-white' :
                            'bg-gray-200 text-gray-400'
                          }`}>
                            <StageIcon className="w-5 h-5" />
                          </div>
                          <span className={`text-xs mt-2 font-medium ${
                            isActive ? 'text-purple-600' :
                            isCompleted ? 'text-green-600' :
                            'text-gray-400'
                          }`}>
                            {stage.label}
                          </span>
                        </div>
                        {index < stages.length - 1 && (
                          <div className={`h-1 flex-1 mx-2 ${
                            isCompleted ? 'bg-green-500' : 'bg-gray-200'
                          }`}></div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1">Start Date</label>
                  <p className="text-base text-gray-900">{new Date(selectedCycle.startDate).toLocaleDateString()}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1">End Date</label>
                  <p className="text-base text-gray-900">{new Date(selectedCycle.endDate).toLocaleDateString()}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1">Status</label>
                  <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${getStatusColor(selectedCycle.status)}`}>
                    {selectedCycle.status}
                  </span>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1">Total Employees</label>
                  <p className="text-base text-gray-900">{selectedCycle.employees}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1">Completed Reviews</label>
                  <p className="text-base text-gray-900">{selectedCycle.completed}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1">Completion Rate</label>
                  <p className="text-base text-gray-900">{selectedCycle.employees > 0 ? Math.round((selectedCycle.completed / selectedCycle.employees) * 100) : 0}%</p>
                </div>
              </div>
            </div>
            <div className="sticky bottom-0 bg-gray-50 px-6 py-4 flex gap-3 justify-end border-t border-gray-100">
              <button
                onClick={() => setShowViewModal(false)}
                className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {showDeleteModal && selectedCycle && (
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
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Delete Cycle</h3>
              <p className="text-sm text-gray-500">This action cannot be undone</p>
            </div>

            {/* Content */}
            <div className="px-8 pb-6">
              <div className="bg-red-50 border border-red-200 rounded-2xl p-4">
                <p className="text-sm text-red-800 text-center mb-2">
                  You are about to permanently delete
                </p>
                <p className="font-semibold text-gray-900 text-center">"{selectedCycle.name}"</p>
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
                Delete Cycle
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
