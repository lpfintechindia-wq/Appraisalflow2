import { useState } from 'react';
import { Search, Filter, Plus, Eye, Edit2, Trash2, X, Award, TrendingUp, Star, Gift, Trophy, Heart, Zap, Target, Users, Calendar } from 'lucide-react';

interface Recognition {
  id: string;
  employeeName: string;
  employeeId: string;
  department: string;
  title: string;
  type: 'Kudos' | 'Award' | 'Bonus' | 'Appreciation' | 'Achievement';
  message: string;
  badge: 'star' | 'trophy' | 'heart' | 'gift' | 'zap' | 'target';
  rewardAmount?: number;
  visibility: 'Public' | 'Private' | 'Team Only';
  status: 'Active' | 'Archived';
  createdBy: string;
  createdDate: string;
  givenBy?: string;
}

const mockRecognitions: Recognition[] = [
  {
    id: '1',
    employeeName: 'Priya Sharma',
    employeeId: 'EMP-001',
    department: 'Sales',
    title: 'Outstanding Sales Performance',
    type: 'Award',
    message: 'Congratulations on exceeding Q2 sales targets by 150%! Your dedication and exceptional customer relationship management skills have significantly contributed to our team\'s success. Keep up the amazing work!',
    badge: 'trophy',
    rewardAmount: 1000,
    visibility: 'Public',
    status: 'Active',
    createdBy: 'Amit Patel',
    createdDate: '2026-05-03',
    givenBy: 'Sales Director'
  },
  {
    id: '2',
    employeeName: 'Arjun Mehta',
    employeeId: 'EMP-002',
    department: 'Engineering',
    title: 'Innovation Champion',
    type: 'Achievement',
    message: 'Thank you for developing the automated testing framework that reduced our QA time by 40%. Your innovative thinking and technical expertise continue to drive excellence in our engineering practices.',
    badge: 'zap',
    visibility: 'Public',
    status: 'Active',
    createdBy: 'Kavita Desai',
    createdDate: '2026-05-01',
    givenBy: 'Engineering Manager'
  },
  {
    id: '3',
    employeeName: 'Deepika Nair',
    employeeId: 'EMP-003',
    department: 'HR',
    title: 'Team Player of the Month',
    type: 'Kudos',
    message: 'Your collaborative spirit and willingness to help colleagues has made a positive impact across the organization. Thank you for always going the extra mile to support our team culture!',
    badge: 'heart',
    visibility: 'Team Only',
    status: 'Active',
    createdBy: 'HR Team',
    createdDate: '2026-04-28',
    givenBy: 'HR Director'
  },
  {
    id: '4',
    employeeName: 'Rohan Khanna',
    employeeId: 'EMP-004',
    department: 'Engineering',
    title: 'Customer Satisfaction Excellence',
    type: 'Appreciation',
    message: 'Achieved an outstanding 4.9/5 customer satisfaction rating this quarter. Your attention to detail and commitment to quality is truly appreciated.',
    badge: 'star',
    visibility: 'Public',
    status: 'Active',
    createdBy: 'Neha Gupta',
    createdDate: '2026-04-25',
    givenBy: 'Customer Success Lead'
  },
  {
    id: '5',
    employeeName: 'Sanya Joshi',
    employeeId: 'EMP-005',
    department: 'Sales',
    title: 'Top Performer Bonus',
    type: 'Bonus',
    message: 'Exceptional performance this quarter! Your hard work has earned you a special recognition bonus. Thank you for your outstanding contribution.',
    badge: 'gift',
    rewardAmount: 2500,
    visibility: 'Private',
    status: 'Active',
    createdBy: 'Amit Patel',
    createdDate: '2026-04-20',
    givenBy: 'Sales Director'
  },
  {
    id: '6',
    employeeName: 'Aditya Rao',
    employeeId: 'EMP-008',
    department: 'Customer Support',
    title: 'Goal Achievement Award',
    type: 'Achievement',
    message: 'Successfully completed all quarterly objectives ahead of schedule. Your consistent performance and dedication set a great example for the team.',
    badge: 'target',
    visibility: 'Public',
    status: 'Active',
    createdBy: 'HR Team',
    createdDate: '2026-04-15',
    givenBy: 'Support Manager'
  }
];

const mockEmployees = [
  { id: 'EMP-001', name: 'Sarah Johnson', department: 'Sales' },
  { id: 'EMP-002', name: 'David Martinez', department: 'Engineering' },
  { id: 'EMP-003', name: 'Jessica Lee', department: 'HR' },
  { id: 'EMP-004', name: 'Alex Thompson', department: 'Engineering' },
  { id: 'EMP-005', name: 'Maria Garcia', department: 'Sales' },
  { id: 'EMP-008', name: 'Robert Johnson', department: 'Customer Support' },
  { id: 'EMP-012', name: 'John Smith', department: 'Engineering' },
  { id: 'EMP-024', name: 'Sarah Williams', department: 'Sales' }
];

export function Recognition() {
  const [recognitions, setRecognitions] = useState<Recognition[]>(mockRecognitions);
  const [searchQuery, setSearchQuery] = useState('');
  const [typeFilter, setTypeFilter] = useState<string>('all');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedRecognition, setSelectedRecognition] = useState<Recognition | null>(null);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showViewModal, setShowViewModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const [formData, setFormData] = useState({
    employeeId: '',
    employeeName: '',
    title: '',
    type: 'Kudos' as Recognition['type'],
    message: '',
    badge: 'star' as Recognition['badge'],
    rewardAmount: '',
    visibility: 'Public' as Recognition['visibility'],
    givenBy: ''
  });

  const getTypeColor = (type: string) => {
    const colors = {
      'Kudos': 'bg-purple-100 text-purple-700',
      'Award': 'bg-blue-100 text-blue-700',
      'Bonus': 'bg-green-100 text-green-700',
      'Appreciation': 'bg-pink-100 text-pink-700',
      'Achievement': 'bg-orange-100 text-orange-700'
    };
    return colors[type as keyof typeof colors] || colors.Kudos;
  };

  const getBadgeIcon = (badge: string) => {
    const icons = {
      'star': Star,
      'trophy': Trophy,
      'heart': Heart,
      'gift': Gift,
      'zap': Zap,
      'target': Target
    };
    return icons[badge as keyof typeof icons] || Star;
  };

  const getBadgeColor = (badge: string) => {
    const colors = {
      'star': 'bg-yellow-100 text-yellow-600',
      'trophy': 'bg-amber-100 text-amber-600',
      'heart': 'bg-red-100 text-red-600',
      'gift': 'bg-green-100 text-green-600',
      'zap': 'bg-purple-100 text-purple-600',
      'target': 'bg-blue-100 text-blue-600'
    };
    return colors[badge as keyof typeof colors] || colors.star;
  };

  const handleCreateRecognition = () => {
    const employee = mockEmployees.find(e => e.id === formData.employeeId);
    if (!employee) return;

    const newRecognition: Recognition = {
      id: String(recognitions.length + 1),
      employeeName: employee.name,
      employeeId: employee.id,
      department: employee.department,
      title: formData.title,
      type: formData.type,
      message: formData.message,
      badge: formData.badge,
      rewardAmount: formData.rewardAmount ? Number(formData.rewardAmount) : undefined,
      visibility: formData.visibility,
      status: 'Active',
      createdBy: 'HR Team',
      createdDate: new Date().toISOString().split('T')[0],
      givenBy: formData.givenBy
    };

    setRecognitions([newRecognition, ...recognitions]);
    setShowCreateModal(false);
    resetForm();
  };

  const handleEditRecognition = () => {
    if (!selectedRecognition) return;

    const updatedRecognitions = recognitions.map(rec => {
      if (rec.id === selectedRecognition.id) {
        return {
          ...rec,
          title: formData.title,
          type: formData.type,
          message: formData.message,
          badge: formData.badge,
          rewardAmount: formData.rewardAmount ? Number(formData.rewardAmount) : undefined,
          visibility: formData.visibility,
          givenBy: formData.givenBy
        };
      }
      return rec;
    });

    setRecognitions(updatedRecognitions);
    setShowEditModal(false);
    setShowViewModal(false);
    resetForm();
  };

  const handleDeleteRecognition = () => {
    if (!selectedRecognition) return;

    setRecognitions(recognitions.filter(rec => rec.id !== selectedRecognition.id));
    setShowDeleteModal(false);
    setShowViewModal(false);
    setSelectedRecognition(null);
  };

  const resetForm = () => {
    setFormData({
      employeeId: '',
      employeeName: '',
      title: '',
      type: 'Kudos',
      message: '',
      badge: 'star',
      rewardAmount: '',
      visibility: 'Public',
      givenBy: ''
    });
  };

  const filteredRecognitions = recognitions.filter(rec => {
    const matchesSearch = rec.employeeName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         rec.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = typeFilter === 'all' || rec.type === typeFilter;
    return matchesSearch && matchesType;
  });

  return (
    <div className="p-6 md:p-8 bg-[#f8f9fc] min-h-screen">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-gray-900 mb-2">Recognition & Awards</h1>
        <p className="text-sm text-gray-600">Celebrate achievements and recognize outstanding performance</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Total Recognitions</p>
              <p className="text-2xl font-semibold text-gray-900">{recognitions.length}</p>
            </div>
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <Award className="w-6 h-6 text-purple-600" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">This Month</p>
              <p className="text-2xl font-semibold text-blue-600">{recognitions.filter(r => new Date(r.createdDate).getMonth() === new Date().getMonth()).length}</p>
            </div>
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-blue-600" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Bonuses Given</p>
              <p className="text-2xl font-semibold text-green-600">{recognitions.filter(r => r.type === 'Bonus').length}</p>
            </div>
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <Gift className="w-6 h-6 text-green-600" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Employees</p>
              <p className="text-2xl font-semibold text-orange-600">{new Set(recognitions.map(r => r.employeeId)).size}</p>
            </div>
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
              <Users className="w-6 h-6 text-orange-600" />
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
                placeholder="Search by employee or recognition title..."
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
              {typeFilter !== 'all' && (
                <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
              )}
            </button>
            <button
              onClick={() => setShowCreateModal(true)}
              className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
            >
              <Plus className="w-4 h-4" />
              <span className="text-sm font-medium">Create Recognition</span>
            </button>
          </div>
        </div>

        {/* Filter Panel */}
        {showFilters && (
          <div className="mt-4 pt-4 border-t border-gray-100">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Type</label>
              <select
                value={typeFilter}
                onChange={(e) => setTypeFilter(e.target.value)}
                className="w-full md:w-64 px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                <option value="all">All Types</option>
                <option value="Kudos">Kudos</option>
                <option value="Award">Award</option>
                <option value="Bonus">Bonus</option>
                <option value="Appreciation">Appreciation</option>
                <option value="Achievement">Achievement</option>
              </select>
            </div>
          </div>
        )}
      </div>

      {/* Recognitions Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-100">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Employee</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Recognition Title</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Type</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Date</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Visibility</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filteredRecognitions.length === 0 ? (
                <tr>
                  <td colSpan={7} className="px-6 py-12 text-center">
                    <div className="flex flex-col items-center justify-center">
                      <Award className="w-12 h-12 text-gray-300 mb-3" />
                      <p className="text-sm text-gray-500">No recognitions found</p>
                      <p className="text-xs text-gray-400 mt-1">Create your first recognition to get started</p>
                    </div>
                  </td>
                </tr>
              ) : (
                filteredRecognitions.map((recognition) => {
                  const BadgeIcon = getBadgeIcon(recognition.badge);
                  return (
                    <tr key={recognition.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center ${getBadgeColor(recognition.badge)}`}>
                            <BadgeIcon className="w-5 h-5" />
                          </div>
                          <div>
                            <div className="text-sm font-medium text-gray-900">{recognition.employeeName}</div>
                            <div className="text-xs text-gray-500">{recognition.department}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-gray-900 max-w-xs">{recognition.title}</div>
                        {recognition.rewardAmount && (
                          <div className="text-xs text-green-600 font-medium mt-1">${recognition.rewardAmount.toLocaleString()}</div>
                        )}
                      </td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${getTypeColor(recognition.type)}`}>
                          {recognition.type}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2 text-sm text-gray-700">
                          <Calendar className="w-4 h-4 text-gray-400" />
                          {new Date(recognition.createdDate).toLocaleDateString()}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-gray-700">{recognition.visibility}</div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700">
                          {recognition.status}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => { setSelectedRecognition(recognition); setShowViewModal(true); }}
                            className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors text-gray-600"
                            title="View"
                          >
                            <Eye className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => {
                              setSelectedRecognition(recognition);
                              setFormData({
                                employeeId: recognition.employeeId,
                                employeeName: recognition.employeeName,
                                title: recognition.title,
                                type: recognition.type,
                                message: recognition.message,
                                badge: recognition.badge,
                                rewardAmount: recognition.rewardAmount?.toString() || '',
                                visibility: recognition.visibility,
                                givenBy: recognition.givenBy || ''
                              });
                              setShowEditModal(true);
                            }}
                            className="p-1.5 hover:bg-blue-50 rounded-lg transition-colors text-blue-600"
                            title="Edit"
                          >
                            <Edit2 className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => { setSelectedRecognition(recognition); setShowDeleteModal(true); }}
                            className="p-1.5 hover:bg-red-50 rounded-lg transition-colors text-red-600"
                            title="Delete"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="px-6 py-4 border-t border-gray-100 flex items-center justify-between">
          <div className="text-sm text-gray-600">
            Showing <span className="font-medium">{filteredRecognitions.length}</span> of <span className="font-medium">{recognitions.length}</span> recognitions
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

      {/* Create Recognition Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-purple-600 to-purple-700 px-8 py-6 flex items-center justify-between">
              <h2 className="text-xl font-semibold text-white">Create Recognition</h2>
              <button
                onClick={() => { setShowCreateModal(false); resetForm(); }}
                className="p-1.5 hover:bg-white/20 rounded-lg transition-colors"
              >
                <X className="w-5 h-5 text-white" />
              </button>
            </div>

            {/* Form Content */}
            <div className="p-8 overflow-y-auto max-h-[calc(90vh-180px)]">
              <div className="space-y-6">
                {/* Employee & Title */}
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Employee <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={formData.employeeId}
                      onChange={(e) => {
                        const employee = mockEmployees.find(emp => emp.id === e.target.value);
                        setFormData({
                          ...formData,
                          employeeId: e.target.value,
                          employeeName: employee?.name || ''
                        });
                      }}
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
                      Recognition Title <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.title}
                      onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                      className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="e.g., Outstanding Performance"
                    />
                  </div>
                </div>

                {/* Type & Badge */}
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Recognition Type <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={formData.type}
                      onChange={(e) => setFormData({ ...formData, type: e.target.value as Recognition['type'] })}
                      className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    >
                      <option value="Kudos">Kudos</option>
                      <option value="Award">Award</option>
                      <option value="Bonus">Bonus</option>
                      <option value="Appreciation">Appreciation</option>
                      <option value="Achievement">Achievement</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Badge / Icon <span className="text-red-500">*</span>
                    </label>
                    <div className="grid grid-cols-6 gap-2">
                      {['star', 'trophy', 'heart', 'gift', 'zap', 'target'].map((badge) => {
                        const Icon = getBadgeIcon(badge);
                        return (
                          <button
                            key={badge}
                            type="button"
                            onClick={() => setFormData({ ...formData, badge: badge as Recognition['badge'] })}
                            className={`p-3 rounded-lg border-2 transition-all ${
                              formData.badge === badge
                                ? 'border-purple-500 bg-purple-50'
                                : 'border-gray-200 hover:border-gray-300'
                            }`}
                          >
                            <Icon className={`w-5 h-5 mx-auto ${formData.badge === badge ? 'text-purple-600' : 'text-gray-400'}`} />
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Recognition Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
                    rows={4}
                    placeholder="Share why this employee deserves recognition..."
                  />
                </div>

                {/* Reward Amount & Visibility */}
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Reward Amount (Optional)
                    </label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                      <input
                        type="number"
                        value={formData.rewardAmount}
                        onChange={(e) => setFormData({ ...formData, rewardAmount: e.target.value })}
                        className="w-full pl-8 pr-4 py-2.5 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                        placeholder="0"
                      />
                    </div>
                    <p className="text-xs text-gray-500 mt-1">Leave blank if no monetary reward</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Visibility <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={formData.visibility}
                      onChange={(e) => setFormData({ ...formData, visibility: e.target.value as Recognition['visibility'] })}
                      className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    >
                      <option value="Public">Public</option>
                      <option value="Team Only">Team Only</option>
                      <option value="Private">Private</option>
                    </select>
                  </div>
                </div>

                {/* Given By */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Given By (Optional)
                  </label>
                  <input
                    type="text"
                    value={formData.givenBy}
                    onChange={(e) => setFormData({ ...formData, givenBy: e.target.value })}
                    className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="e.g., Sales Director, Engineering Manager"
                  />
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="bg-gray-50 px-8 py-4 flex gap-3 justify-end border-t border-gray-200">
              <button
                onClick={() => { setShowCreateModal(false); resetForm(); }}
                className="px-6 py-2.5 bg-white border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleCreateRecognition}
                disabled={!formData.employeeId || !formData.title || !formData.message}
                className="px-6 py-2.5 bg-purple-600 text-white rounded-lg text-sm font-medium hover:bg-purple-700 shadow-lg shadow-purple-500/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Create
              </button>
            </div>
          </div>
        </div>
      )}

      {/* View Recognition Modal */}
      {showViewModal && selectedRecognition && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden">
            {/* Header */}
            <div className="relative bg-gradient-to-r from-purple-600 to-purple-700 px-8 py-12">
              <button
                onClick={() => setShowViewModal(false)}
                className="absolute top-4 right-4 p-1.5 hover:bg-white/20 rounded-lg transition-colors"
              >
                <X className="w-5 h-5 text-white" />
              </button>
              <div className="text-center">
                {(() => {
                  const BadgeIcon = getBadgeIcon(selectedRecognition.badge);
                  return (
                    <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <BadgeIcon className="w-10 h-10 text-purple-600" />
                    </div>
                  );
                })()}
                <h2 className="text-2xl font-bold text-white mb-2">{selectedRecognition.title}</h2>
                <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(selectedRecognition.type)} bg-opacity-20 backdrop-blur-sm`}>
                  {selectedRecognition.type}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-8 overflow-y-auto max-h-[calc(90vh-280px)]">
              {/* Employee Info */}
              <div className="bg-gray-50 rounded-xl p-5 mb-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-gray-600 mb-1">Recognized Employee</p>
                    <p className="text-lg font-semibold text-gray-900">{selectedRecognition.employeeName}</p>
                    <p className="text-sm text-gray-600">{selectedRecognition.department}</p>
                  </div>
                  {selectedRecognition.rewardAmount && (
                    <div className="text-right">
                      <p className="text-xs text-gray-600 mb-1">Reward</p>
                      <p className="text-2xl font-bold text-green-600">${selectedRecognition.rewardAmount.toLocaleString()}</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Message */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wide">Recognition Message</h3>
                <p className="text-gray-700 leading-relaxed">{selectedRecognition.message}</p>
              </div>

              {/* Details */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <p className="text-xs text-gray-600 mb-1">Date</p>
                  <p className="text-sm font-medium text-gray-900">{new Date(selectedRecognition.createdDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-600 mb-1">Visibility</p>
                  <p className="text-sm font-medium text-gray-900">{selectedRecognition.visibility}</p>
                </div>
                {selectedRecognition.givenBy && (
                  <>
                    <div>
                      <p className="text-xs text-gray-600 mb-1">Given By</p>
                      <p className="text-sm font-medium text-gray-900">{selectedRecognition.givenBy}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-600 mb-1">Created By</p>
                      <p className="text-sm font-medium text-gray-900">{selectedRecognition.createdBy}</p>
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Footer */}
            <div className="bg-gray-50 px-8 py-4 flex gap-3 justify-end border-t border-gray-200">
              <button
                onClick={() => {
                  setFormData({
                    employeeId: selectedRecognition.employeeId,
                    employeeName: selectedRecognition.employeeName,
                    title: selectedRecognition.title,
                    type: selectedRecognition.type,
                    message: selectedRecognition.message,
                    badge: selectedRecognition.badge,
                    rewardAmount: selectedRecognition.rewardAmount?.toString() || '',
                    visibility: selectedRecognition.visibility,
                    givenBy: selectedRecognition.givenBy || ''
                  });
                  setShowViewModal(false);
                  setShowEditModal(true);
                }}
                className="px-6 py-2.5 bg-white border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors flex items-center gap-2"
              >
                <Edit2 className="w-4 h-4" />
                Edit
              </button>
              <button
                onClick={() => {
                  setShowViewModal(false);
                  setShowDeleteModal(true);
                }}
                className="px-6 py-2.5 bg-red-600 text-white rounded-lg text-sm font-medium hover:bg-red-700 transition-colors flex items-center gap-2"
              >
                <Trash2 className="w-4 h-4" />
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Edit Recognition Modal */}
      {showEditModal && selectedRecognition && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-purple-600 to-purple-700 px-8 py-6 flex items-center justify-between">
              <h2 className="text-xl font-semibold text-white">Edit Recognition</h2>
              <button
                onClick={() => { setShowEditModal(false); resetForm(); }}
                className="p-1.5 hover:bg-white/20 rounded-lg transition-colors"
              >
                <X className="w-5 h-5 text-white" />
              </button>
            </div>

            {/* Form Content - Same as Create */}
            <div className="p-8 overflow-y-auto max-h-[calc(90vh-180px)]">
              <div className="space-y-6">
                {/* Employee (Read-only) & Title */}
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Employee
                    </label>
                    <div className="px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-700">
                      {selectedRecognition.employeeName} ({selectedRecognition.employeeId})
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Recognition Title <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.title}
                      onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                      className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                </div>

                {/* Type & Badge */}
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Recognition Type <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={formData.type}
                      onChange={(e) => setFormData({ ...formData, type: e.target.value as Recognition['type'] })}
                      className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    >
                      <option value="Kudos">Kudos</option>
                      <option value="Award">Award</option>
                      <option value="Bonus">Bonus</option>
                      <option value="Appreciation">Appreciation</option>
                      <option value="Achievement">Achievement</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Badge / Icon <span className="text-red-500">*</span>
                    </label>
                    <div className="grid grid-cols-6 gap-2">
                      {['star', 'trophy', 'heart', 'gift', 'zap', 'target'].map((badge) => {
                        const Icon = getBadgeIcon(badge);
                        return (
                          <button
                            key={badge}
                            type="button"
                            onClick={() => setFormData({ ...formData, badge: badge as Recognition['badge'] })}
                            className={`p-3 rounded-lg border-2 transition-all ${
                              formData.badge === badge
                                ? 'border-purple-500 bg-purple-50'
                                : 'border-gray-200 hover:border-gray-300'
                            }`}
                          >
                            <Icon className={`w-5 h-5 mx-auto ${formData.badge === badge ? 'text-purple-600' : 'text-gray-400'}`} />
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Recognition Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
                    rows={4}
                  />
                </div>

                {/* Reward Amount & Visibility */}
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Reward Amount (Optional)
                    </label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                      <input
                        type="number"
                        value={formData.rewardAmount}
                        onChange={(e) => setFormData({ ...formData, rewardAmount: e.target.value })}
                        className="w-full pl-8 pr-4 py-2.5 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Visibility <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={formData.visibility}
                      onChange={(e) => setFormData({ ...formData, visibility: e.target.value as Recognition['visibility'] })}
                      className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    >
                      <option value="Public">Public</option>
                      <option value="Team Only">Team Only</option>
                      <option value="Private">Private</option>
                    </select>
                  </div>
                </div>

                {/* Given By */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Given By (Optional)
                  </label>
                  <input
                    type="text"
                    value={formData.givenBy}
                    onChange={(e) => setFormData({ ...formData, givenBy: e.target.value })}
                    className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="bg-gray-50 px-8 py-4 flex gap-3 justify-end border-t border-gray-200">
              <button
                onClick={() => { setShowEditModal(false); resetForm(); }}
                className="px-6 py-2.5 bg-white border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleEditRecognition}
                disabled={!formData.title || !formData.message}
                className="px-6 py-2.5 bg-purple-600 text-white rounded-lg text-sm font-medium hover:bg-purple-700 shadow-lg shadow-purple-500/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {showDeleteModal && selectedRecognition && (
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
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Delete Recognition</h3>
              <p className="text-sm text-gray-500">This action cannot be undone</p>
            </div>

            {/* Content */}
            <div className="px-8 pb-6 space-y-4">
              <div className="bg-red-50 border border-red-200 rounded-2xl p-4">
                <p className="text-sm text-red-800 text-center">
                  You are about to permanently delete this recognition
                </p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-4 border border-gray-200">
                <p className="text-xs text-gray-500 mb-2">Recognition Title</p>
                <p className="font-semibold text-gray-900 mb-3">"{selectedRecognition.title}"</p>
                <p className="text-xs text-gray-500 mb-1">Employee</p>
                <p className="text-sm text-gray-700">{selectedRecognition.employeeName}</p>
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
                onClick={handleDeleteRecognition}
                className="flex-1 px-4 py-3 bg-red-600 text-white rounded-xl text-sm font-semibold hover:bg-red-700 transition-colors"
              >
                Delete Recognition
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
