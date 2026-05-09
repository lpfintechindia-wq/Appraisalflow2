import { useState } from 'react';
import { Plus, Edit2, Trash2, Copy, Save, Eye, Search, Filter, X, FileText, BarChart3, Award, CheckCircle, Settings as SettingsIcon } from 'lucide-react';
import { TemplateBuilder } from './TemplateBuilder';

type Tab = 'templates' | 'scales' | 'competencies';

interface Template {
  id: string;
  name: string;
  type: 'Annual' | 'Quarterly' | 'Probation' | 'Custom';
  sections: number;
  questions: number;
  status: 'Active' | 'Draft' | 'Inactive';
  createdBy: string;
  lastUpdated: string;
  description: string;
  sectionDetails?: { name: string; questions: string[] }[];
}

interface RatingScale {
  id: string;
  name: string;
  category: 'Performance' | 'Behavioral' | 'Technical';
  levels: number;
  status: 'Active' | 'Inactive';
  createdBy: string;
  lastUpdated: string;
  description: string;
  isDefault: boolean;
  levelDetails?: { level: number; label: string; description: string }[];
}

interface Competency {
  id: string;
  name: string;
  category: 'Core' | 'Technical' | 'Leadership' | 'Behavioral';
  status: 'Active' | 'Inactive';
  createdBy: string;
  lastUpdated: string;
  description: string;
  skills?: string[];
}

const mockTemplates: Template[] = [
  {
    id: '1',
    name: 'Annual Performance Review',
    type: 'Annual',
    sections: 5,
    questions: 12,
    status: 'Active',
    createdBy: 'Priya Sharma',
    lastUpdated: '2026-04-15',
    description: 'Comprehensive annual performance review covering all key areas',
    sectionDetails: [
      { name: 'Goals Achievement', questions: ['Rate goal completion', 'Key accomplishments'] },
      { name: 'Core Competencies', questions: ['Leadership skills', 'Communication', 'Teamwork'] },
    ],
  },
  {
    id: '2',
    name: 'Quarterly Check-in',
    type: 'Quarterly',
    sections: 3,
    questions: 8,
    status: 'Active',
    createdBy: 'Arjun Mehta',
    lastUpdated: '2026-05-01',
    description: 'Quarterly progress review and goal alignment',
    sectionDetails: [
      { name: 'Progress Review', questions: ['Quarterly achievements', 'Challenges faced'] },
    ],
  },
  {
    id: '3',
    name: 'Probation Review',
    type: 'Probation',
    sections: 4,
    questions: 10,
    status: 'Draft',
    createdBy: 'Deepika Nair',
    lastUpdated: '2026-05-05',
    description: 'Performance evaluation for employees on probation period',
  },
];

const mockRatingScales: RatingScale[] = [
  {
    id: '1',
    name: '5-Point Performance Scale',
    category: 'Performance',
    levels: 5,
    status: 'Active',
    createdBy: 'Amit Patel',
    lastUpdated: '2026-03-20',
    description: 'Standard 1-5 rating scale for performance assessment',
    isDefault: true,
    levelDetails: [
      { level: 1, label: 'Needs Improvement', description: 'Performance is below expectations' },
      { level: 2, label: 'Partially Meets', description: 'Some expectations are met' },
      { level: 3, label: 'Meets Expectations', description: 'All expectations are met' },
      { level: 4, label: 'Exceeds Expectations', description: 'Performance exceeds expectations' },
      { level: 5, label: 'Outstanding', description: 'Exceptional performance' },
    ],
  },
  {
    id: '2',
    name: '3-Point Simple Scale',
    category: 'Behavioral',
    levels: 3,
    status: 'Active',
    createdBy: 'Kavita Desai',
    lastUpdated: '2026-04-10',
    description: 'Simplified rating for behavioral assessments',
    isDefault: false,
    levelDetails: [
      { level: 1, label: 'Needs Development', description: 'Requires improvement' },
      { level: 2, label: 'Competent', description: 'Meets standards' },
      { level: 3, label: 'Exemplary', description: 'Role model behavior' },
    ],
  },
];

const mockCompetencies: Competency[] = [
  {
    id: '1',
    name: 'Leadership',
    category: 'Leadership',
    status: 'Active',
    createdBy: 'Rohan Khanna',
    lastUpdated: '2026-03-15',
    description: 'Ability to lead, inspire, and guide teams toward common goals',
    skills: ['Team Management', 'Strategic Thinking', 'Decision Making', 'Mentoring'],
  },
  {
    id: '2',
    name: 'Communication',
    category: 'Core',
    status: 'Active',
    createdBy: 'Sanya Joshi',
    lastUpdated: '2026-04-01',
    description: 'Effective verbal and written communication across all levels',
    skills: ['Presentation Skills', 'Active Listening', 'Written Communication', 'Clarity'],
  },
  {
    id: '3',
    name: 'Technical Expertise',
    category: 'Technical',
    status: 'Active',
    createdBy: 'Aditya Rao',
    lastUpdated: '2026-04-20',
    description: 'Job-specific technical knowledge and skills',
    skills: ['Domain Knowledge', 'Tool Proficiency', 'Problem Solving', 'Innovation'],
  },
  {
    id: '4',
    name: 'Problem Solving',
    category: 'Core',
    status: 'Active',
    createdBy: 'Neha Kapoor',
    lastUpdated: '2026-05-02',
    description: 'Analytical thinking and creative problem-solving abilities',
    skills: ['Critical Thinking', 'Root Cause Analysis', 'Solution Design', 'Data Analysis'],
  },
];

export function Settings() {
  const [activeTab, setActiveTab] = useState<Tab>('templates');

  const tabs = [
    { id: 'templates' as Tab, label: 'Templates', icon: FileText },
    { id: 'scales' as Tab, label: 'Rating Scales', icon: BarChart3 },
    { id: 'competencies' as Tab, label: 'Competencies', icon: Award },
  ];

  return (
    <div className="p-6 md:p-8 bg-[#f8f9fc] min-h-screen">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-gray-900 mb-2">Appraisal Settings</h1>
        <p className="text-sm text-gray-600">Configure templates, rating scales, and competencies</p>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 mb-6">
        <div className="border-b border-gray-100">
          <nav className="flex gap-8 px-6">
            {tabs.map((tab) => {
              const TabIcon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-4 text-sm font-medium border-b-2 transition-colors flex items-center gap-2 ${
                    activeTab === tab.id
                      ? 'border-purple-600 text-purple-600'
                      : 'border-transparent text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <TabIcon className="w-4 h-4" />
                  {tab.label}
                </button>
              );
            })}
          </nav>
        </div>

        <div className="p-6">
          {activeTab === 'templates' && <TemplatesTab />}
          {activeTab === 'scales' && <RatingScalesTab />}
          {activeTab === 'competencies' && <CompetenciesTab />}
        </div>
      </div>
    </div>
  );
}

function TemplatesTab() {
  const [templates, setTemplates] = useState<Template[]>(mockTemplates);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(null);
  const [showViewModal, setShowViewModal] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showCloneModal, setShowCloneModal] = useState(false);
  const [showSectionBuilder, setShowSectionBuilder] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    type: 'Custom' as Template['type'],
    description: '',
    status: 'Draft' as Template['status'],
    sections: 0,
    questions: 0,
  });

  const handleCreate = () => {
    const newTemplate: Template = {
      id: String(templates.length + 1),
      name: formData.name,
      type: formData.type,
      sections: formData.sections,
      questions: formData.questions,
      status: formData.status,
      createdBy: 'Current User',
      lastUpdated: new Date().toISOString().split('T')[0],
      description: formData.description,
    };
    setTemplates([...templates, newTemplate]);
    setShowCreateModal(false);
    resetForm();
  };

  const handleEdit = () => {
    if (selectedTemplate) {
      setTemplates(
        templates.map((t) =>
          t.id === selectedTemplate.id
            ? {
                ...t,
                name: formData.name,
                type: formData.type,
                description: formData.description,
                status: formData.status,
                sections: formData.sections,
                questions: formData.questions,
                lastUpdated: new Date().toISOString().split('T')[0],
              }
            : t
        )
      );
      setShowEditModal(false);
      resetForm();
    }
  };

  const handleDelete = () => {
    if (selectedTemplate) {
      setTemplates(templates.filter((t) => t.id !== selectedTemplate.id));
      setShowDeleteModal(false);
      setSelectedTemplate(null);
    }
  };

  const handleClone = () => {
    const newTemplate: Template = {
      id: String(templates.length + 1),
      name: formData.name,
      type: formData.type,
      sections: formData.sections,
      questions: formData.questions,
      status: 'Draft',
      createdBy: 'Current User',
      lastUpdated: new Date().toISOString().split('T')[0],
      description: formData.description,
    };
    setTemplates([...templates, newTemplate]);
    setShowCloneModal(false);
    resetForm();
  };

  const resetForm = () => {
    setFormData({
      name: '',
      type: 'Custom',
      description: '',
      status: 'Draft',
      sections: 0,
      questions: 0,
    });
    setSelectedTemplate(null);
  };

  const getStatusColor = (status: string) => {
    const colors = {
      Active: 'bg-green-100 text-green-700',
      Draft: 'bg-gray-100 text-gray-700',
      Inactive: 'bg-red-100 text-red-700',
    };
    return colors[status as keyof typeof colors] || colors.Draft;
  };

  const filteredTemplates = templates.filter((template) => {
    const matchesSearch = template.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === 'all' || template.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div>
      {/* Actions Bar */}
      <div className="mb-6">
        <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
          <div className="flex-1 w-full md:w-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search templates..."
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
              {statusFilter !== 'all' && <span className="w-2 h-2 bg-purple-600 rounded-full"></span>}
            </button>
            <button
              onClick={() => setShowCreateModal(true)}
              className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
            >
              <Plus className="w-4 h-4" />
              <span className="text-sm font-medium">Create Template</span>
            </button>
          </div>
        </div>

        {/* Filter Panel */}
        {showFilters && (
          <div className="mt-4 p-4 bg-gray-50 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="w-full px-3 py-2 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  <option value="all">All Statuses</option>
                  <option value="Active">Active</option>
                  <option value="Draft">Draft</option>
                  <option value="Inactive">Inactive</option>
                </select>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-100">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Name</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Type</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Sections/Questions</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Created By</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Last Updated</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filteredTemplates.length === 0 ? (
                <tr>
                  <td colSpan={7} className="px-6 py-12 text-center">
                    <div className="flex flex-col items-center justify-center">
                      <FileText className="w-12 h-12 text-gray-300 mb-3" />
                      <p className="text-sm text-gray-500">No templates found</p>
                    </div>
                  </td>
                </tr>
              ) : (
                filteredTemplates.map((template) => (
                  <tr key={template.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="text-sm font-medium text-gray-900">{template.name}</div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-700">
                        {template.type}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-700">
                        {template.sections} sections • {template.questions} questions
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-700">{template.createdBy}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-700">{new Date(template.lastUpdated).toLocaleDateString()}</div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${getStatusColor(template.status)}`}>
                        {template.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => {
                            setSelectedTemplate(template);
                            setShowViewModal(true);
                          }}
                          className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors text-gray-600"
                          title="View"
                        >
                          <Eye className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => {
                            setSelectedTemplate(template);
                            setShowSectionBuilder(true);
                          }}
                          className="p-1.5 hover:bg-purple-50 rounded-lg transition-colors text-purple-600"
                          title="Configure Sections"
                        >
                          <SettingsIcon className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => {
                            setSelectedTemplate(template);
                            setFormData({
                              name: template.name,
                              type: template.type,
                              description: template.description,
                              status: template.status,
                              sections: template.sections,
                              questions: template.questions,
                            });
                            setShowEditModal(true);
                          }}
                          className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors text-gray-600"
                          title="Edit"
                        >
                          <Edit2 className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => {
                            setSelectedTemplate(template);
                            setFormData({
                              name: `Copy of ${template.name}`,
                              type: template.type,
                              description: template.description,
                              status: 'Draft',
                              sections: template.sections,
                              questions: template.questions,
                            });
                            setShowCloneModal(true);
                          }}
                          className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors text-blue-600"
                          title="Clone"
                        >
                          <Copy className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => {
                            setSelectedTemplate(template);
                            setShowDeleteModal(true);
                          }}
                          className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors text-red-600"
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
      </div>

      {/* View Modal */}
      {showViewModal && selectedTemplate && (
        <ViewTemplateModal template={selectedTemplate} onClose={() => setShowViewModal(false)} />
      )}

      {/* Create Modal */}
      {showCreateModal && (
        <TemplateFormModal
          title="Create Template"
          icon={<Plus className="w-8 h-8 text-purple-600" />}
          iconBg="bg-purple-100"
          formData={formData}
          setFormData={setFormData}
          onSubmit={handleCreate}
          onClose={() => {
            setShowCreateModal(false);
            resetForm();
          }}
          submitText="Create Template"
        />
      )}

      {/* Edit Modal */}
      {showEditModal && (
        <TemplateFormModal
          title="Edit Template"
          icon={<Edit2 className="w-8 h-8 text-blue-600" />}
          iconBg="bg-blue-100"
          formData={formData}
          setFormData={setFormData}
          onSubmit={handleEdit}
          onClose={() => {
            setShowEditModal(false);
            resetForm();
          }}
          submitText="Save Changes"
        />
      )}

      {/* Clone Modal */}
      {showCloneModal && (
        <TemplateFormModal
          title="Clone Template"
          icon={<Copy className="w-8 h-8 text-green-600" />}
          iconBg="bg-green-100"
          formData={formData}
          setFormData={setFormData}
          onSubmit={handleClone}
          onClose={() => {
            setShowCloneModal(false);
            resetForm();
          }}
          submitText="Create Clone"
        />
      )}

      {/* Delete Modal */}
      {showDeleteModal && selectedTemplate && (
        <DeleteConfirmModal
          title="Delete Template"
          message={`Are you sure you want to delete "${selectedTemplate.name}"?`}
          onConfirm={handleDelete}
          onClose={() => setShowDeleteModal(false)}
        />
      )}

      {/* Section Builder Modal */}
      {showSectionBuilder && selectedTemplate && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden flex flex-col">
            {/* Purple Header */}
            <div className="bg-gradient-to-r from-purple-600 to-purple-700 px-8 py-6 flex items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold text-white">{selectedTemplate.name}</h2>
                <p className="text-purple-100 text-sm mt-1">Section Builder</p>
              </div>
              <button
                onClick={() => {
                  setShowSectionBuilder(false);
                  setSelectedTemplate(null);
                }}
                className="p-1.5 hover:bg-white/20 rounded-lg transition-colors"
              >
                <X className="w-5 h-5 text-white" />
              </button>
            </div>

            {/* Section Builder Content */}
            <div className="p-8 overflow-y-auto flex-1">
              <TemplateBuilder />
            </div>

            {/* Footer */}
            <div className="px-8 py-6 bg-gray-50 border-t border-gray-200 flex justify-end gap-3">
              <button
                onClick={() => {
                  setShowSectionBuilder(false);
                  setSelectedTemplate(null);
                }}
                className="px-6 py-2.5 bg-purple-600 text-white rounded-lg text-sm font-medium hover:bg-purple-700 transition-colors"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// Similar structure for Rating Scales and Competencies tabs...
// (Continuing in next part due to length)

function RatingScalesTab() {
  const [scales, setScales] = useState<RatingScale[]>(mockRatingScales);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedScale, setSelectedScale] = useState<RatingScale | null>(null);
  const [showViewModal, setShowViewModal] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showCloneModal, setShowCloneModal] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    category: 'Performance' as RatingScale['category'],
    description: '',
    status: 'Active' as RatingScale['status'],
    levels: 5,
    isDefault: false,
  });

  const handleCreate = () => {
    const newScale: RatingScale = {
      id: String(scales.length + 1),
      name: formData.name,
      category: formData.category,
      levels: formData.levels,
      status: formData.status,
      createdBy: 'Current User',
      lastUpdated: new Date().toISOString().split('T')[0],
      description: formData.description,
      isDefault: formData.isDefault,
    };
    setScales([...scales, newScale]);
    setShowCreateModal(false);
    resetForm();
  };

  const handleEdit = () => {
    if (selectedScale) {
      setScales(
        scales.map((s) =>
          s.id === selectedScale.id
            ? {
                ...s,
                name: formData.name,
                category: formData.category,
                description: formData.description,
                status: formData.status,
                levels: formData.levels,
                isDefault: formData.isDefault,
                lastUpdated: new Date().toISOString().split('T')[0],
              }
            : s
        )
      );
      setShowEditModal(false);
      resetForm();
    }
  };

  const handleDelete = () => {
    if (selectedScale) {
      setScales(scales.filter((s) => s.id !== selectedScale.id));
      setShowDeleteModal(false);
      setSelectedScale(null);
    }
  };

  const handleClone = () => {
    const newScale: RatingScale = {
      id: String(scales.length + 1),
      name: formData.name,
      category: formData.category,
      levels: formData.levels,
      status: 'Active',
      createdBy: 'Current User',
      lastUpdated: new Date().toISOString().split('T')[0],
      description: formData.description,
      isDefault: false,
    };
    setScales([...scales, newScale]);
    setShowCloneModal(false);
    resetForm();
  };

  const resetForm = () => {
    setFormData({
      name: '',
      category: 'Performance',
      description: '',
      status: 'Active',
      levels: 5,
      isDefault: false,
    });
    setSelectedScale(null);
  };

  const getStatusColor = (status: string) => {
    const colors = {
      Active: 'bg-green-100 text-green-700',
      Inactive: 'bg-red-100 text-red-700',
    };
    return colors[status as keyof typeof colors] || colors.Active;
  };

  const filteredScales = scales.filter((scale) => {
    const matchesSearch = scale.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === 'all' || scale.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div>
      {/* Actions Bar */}
      <div className="mb-6">
        <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
          <div className="flex-1 w-full md:w-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search rating scales..."
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
              {statusFilter !== 'all' && <span className="w-2 h-2 bg-purple-600 rounded-full"></span>}
            </button>
            <button
              onClick={() => setShowCreateModal(true)}
              className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
            >
              <Plus className="w-4 h-4" />
              <span className="text-sm font-medium">Create Scale</span>
            </button>
          </div>
        </div>

        {/* Filter Panel */}
        {showFilters && (
          <div className="mt-4 p-4 bg-gray-50 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="w-full px-3 py-2 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  <option value="all">All Statuses</option>
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </select>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-100">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Name</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Category</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Levels</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Created By</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Last Updated</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filteredScales.length === 0 ? (
                <tr>
                  <td colSpan={7} className="px-6 py-12 text-center">
                    <div className="flex flex-col items-center justify-center">
                      <BarChart3 className="w-12 h-12 text-gray-300 mb-3" />
                      <p className="text-sm text-gray-500">No rating scales found</p>
                    </div>
                  </td>
                </tr>
              ) : (
                filteredScales.map((scale) => (
                  <tr key={scale.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <div className="text-sm font-medium text-gray-900">{scale.name}</div>
                        {scale.isDefault && (
                          <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-700">
                            Default
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-700">
                        {scale.category}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-700">{scale.levels} levels</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-700">{scale.createdBy}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-700">{new Date(scale.lastUpdated).toLocaleDateString()}</div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${getStatusColor(scale.status)}`}>
                        {scale.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => {
                            setSelectedScale(scale);
                            setShowViewModal(true);
                          }}
                          className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors text-gray-600"
                          title="View"
                        >
                          <Eye className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => {
                            setSelectedScale(scale);
                            setFormData({
                              name: scale.name,
                              category: scale.category,
                              description: scale.description,
                              status: scale.status,
                              levels: scale.levels,
                              isDefault: scale.isDefault,
                            });
                            setShowEditModal(true);
                          }}
                          className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors text-gray-600"
                          title="Edit"
                        >
                          <Edit2 className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => {
                            setSelectedScale(scale);
                            setFormData({
                              name: `Copy of ${scale.name}`,
                              category: scale.category,
                              description: scale.description,
                              status: 'Active',
                              levels: scale.levels,
                              isDefault: false,
                            });
                            setShowCloneModal(true);
                          }}
                          className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors text-blue-600"
                          title="Clone"
                        >
                          <Copy className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => {
                            setSelectedScale(scale);
                            setShowDeleteModal(true);
                          }}
                          className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors text-red-600"
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
      </div>

      {/* View Modal */}
      {showViewModal && selectedScale && (
        <ViewRatingScaleModal scale={selectedScale} onClose={() => setShowViewModal(false)} />
      )}

      {/* Create Modal */}
      {showCreateModal && (
        <RatingScaleFormModal
          title="Create Rating Scale"
          icon={<Plus className="w-8 h-8 text-purple-600" />}
          iconBg="bg-purple-100"
          formData={formData}
          setFormData={setFormData}
          onSubmit={handleCreate}
          onClose={() => {
            setShowCreateModal(false);
            resetForm();
          }}
          submitText="Create Scale"
        />
      )}

      {/* Edit Modal */}
      {showEditModal && (
        <RatingScaleFormModal
          title="Edit Rating Scale"
          icon={<Edit2 className="w-8 h-8 text-blue-600" />}
          iconBg="bg-blue-100"
          formData={formData}
          setFormData={setFormData}
          onSubmit={handleEdit}
          onClose={() => {
            setShowEditModal(false);
            resetForm();
          }}
          submitText="Save Changes"
        />
      )}

      {/* Clone Modal */}
      {showCloneModal && (
        <RatingScaleFormModal
          title="Clone Rating Scale"
          icon={<Copy className="w-8 h-8 text-green-600" />}
          iconBg="bg-green-100"
          formData={formData}
          setFormData={setFormData}
          onSubmit={handleClone}
          onClose={() => {
            setShowCloneModal(false);
            resetForm();
          }}
          submitText="Create Clone"
        />
      )}

      {/* Delete Modal */}
      {showDeleteModal && selectedScale && (
        <DeleteConfirmModal
          title="Delete Rating Scale"
          message={`Are you sure you want to delete "${selectedScale.name}"?`}
          onConfirm={handleDelete}
          onClose={() => setShowDeleteModal(false)}
        />
      )}
    </div>
  );
}

function CompetenciesTab() {
  const [competencies, setCompetencies] = useState<Competency[]>(mockCompetencies);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedCompetency, setSelectedCompetency] = useState<Competency | null>(null);
  const [showViewModal, setShowViewModal] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showCloneModal, setShowCloneModal] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    category: 'Core' as Competency['category'],
    description: '',
    status: 'Active' as Competency['status'],
  });

  const handleCreate = () => {
    const newCompetency: Competency = {
      id: String(competencies.length + 1),
      name: formData.name,
      category: formData.category,
      status: formData.status,
      createdBy: 'Current User',
      lastUpdated: new Date().toISOString().split('T')[0],
      description: formData.description,
    };
    setCompetencies([...competencies, newCompetency]);
    setShowCreateModal(false);
    resetForm();
  };

  const handleEdit = () => {
    if (selectedCompetency) {
      setCompetencies(
        competencies.map((c) =>
          c.id === selectedCompetency.id
            ? {
                ...c,
                name: formData.name,
                category: formData.category,
                description: formData.description,
                status: formData.status,
                lastUpdated: new Date().toISOString().split('T')[0],
              }
            : c
        )
      );
      setShowEditModal(false);
      resetForm();
    }
  };

  const handleDelete = () => {
    if (selectedCompetency) {
      setCompetencies(competencies.filter((c) => c.id !== selectedCompetency.id));
      setShowDeleteModal(false);
      setSelectedCompetency(null);
    }
  };

  const handleClone = () => {
    const newCompetency: Competency = {
      id: String(competencies.length + 1),
      name: formData.name,
      category: formData.category,
      status: 'Active',
      createdBy: 'Current User',
      lastUpdated: new Date().toISOString().split('T')[0],
      description: formData.description,
    };
    setCompetencies([...competencies, newCompetency]);
    setShowCloneModal(false);
    resetForm();
  };

  const resetForm = () => {
    setFormData({
      name: '',
      category: 'Core',
      description: '',
      status: 'Active',
    });
    setSelectedCompetency(null);
  };

  const getStatusColor = (status: string) => {
    const colors = {
      Active: 'bg-green-100 text-green-700',
      Inactive: 'bg-red-100 text-red-700',
    };
    return colors[status as keyof typeof colors] || colors.Active;
  };

  const filteredCompetencies = competencies.filter((competency) => {
    const matchesSearch = competency.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === 'all' || competency.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div>
      {/* Actions Bar */}
      <div className="mb-6">
        <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
          <div className="flex-1 w-full md:w-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search competencies..."
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
              {statusFilter !== 'all' && <span className="w-2 h-2 bg-purple-600 rounded-full"></span>}
            </button>
            <button
              onClick={() => setShowCreateModal(true)}
              className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
            >
              <Plus className="w-4 h-4" />
              <span className="text-sm font-medium">Add Competency</span>
            </button>
          </div>
        </div>

        {/* Filter Panel */}
        {showFilters && (
          <div className="mt-4 p-4 bg-gray-50 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="w-full px-3 py-2 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  <option value="all">All Statuses</option>
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </select>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-100">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Name</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Category</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Created By</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Last Updated</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filteredCompetencies.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-6 py-12 text-center">
                    <div className="flex flex-col items-center justify-center">
                      <Award className="w-12 h-12 text-gray-300 mb-3" />
                      <p className="text-sm text-gray-500">No competencies found</p>
                    </div>
                  </td>
                </tr>
              ) : (
                filteredCompetencies.map((competency) => (
                  <tr key={competency.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="text-sm font-medium text-gray-900">{competency.name}</div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-700">
                        {competency.category}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-700">{competency.createdBy}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-700">{new Date(competency.lastUpdated).toLocaleDateString()}</div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${getStatusColor(competency.status)}`}>
                        {competency.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => {
                            setSelectedCompetency(competency);
                            setShowViewModal(true);
                          }}
                          className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors text-gray-600"
                          title="View"
                        >
                          <Eye className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => {
                            setSelectedCompetency(competency);
                            setFormData({
                              name: competency.name,
                              category: competency.category,
                              description: competency.description,
                              status: competency.status,
                            });
                            setShowEditModal(true);
                          }}
                          className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors text-gray-600"
                          title="Edit"
                        >
                          <Edit2 className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => {
                            setSelectedCompetency(competency);
                            setFormData({
                              name: `Copy of ${competency.name}`,
                              category: competency.category,
                              description: competency.description,
                              status: 'Active',
                            });
                            setShowCloneModal(true);
                          }}
                          className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors text-blue-600"
                          title="Clone"
                        >
                          <Copy className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => {
                            setSelectedCompetency(competency);
                            setShowDeleteModal(true);
                          }}
                          className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors text-red-600"
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
      </div>

      {/* View Modal */}
      {showViewModal && selectedCompetency && (
        <ViewCompetencyModal competency={selectedCompetency} onClose={() => setShowViewModal(false)} />
      )}

      {/* Create Modal */}
      {showCreateModal && (
        <CompetencyFormModal
          title="Create Competency"
          icon={<Plus className="w-8 h-8 text-purple-600" />}
          iconBg="bg-purple-100"
          formData={formData}
          setFormData={setFormData}
          onSubmit={handleCreate}
          onClose={() => {
            setShowCreateModal(false);
            resetForm();
          }}
          submitText="Create Competency"
        />
      )}

      {/* Edit Modal */}
      {showEditModal && (
        <CompetencyFormModal
          title="Edit Competency"
          icon={<Edit2 className="w-8 h-8 text-blue-600" />}
          iconBg="bg-blue-100"
          formData={formData}
          setFormData={setFormData}
          onSubmit={handleEdit}
          onClose={() => {
            setShowEditModal(false);
            resetForm();
          }}
          submitText="Save Changes"
        />
      )}

      {/* Clone Modal */}
      {showCloneModal && (
        <CompetencyFormModal
          title="Clone Competency"
          icon={<Copy className="w-8 h-8 text-green-600" />}
          iconBg="bg-green-100"
          formData={formData}
          setFormData={setFormData}
          onSubmit={handleClone}
          onClose={() => {
            setShowCloneModal(false);
            resetForm();
          }}
          submitText="Create Clone"
        />
      )}

      {/* Delete Modal */}
      {showDeleteModal && selectedCompetency && (
        <DeleteConfirmModal
          title="Delete Competency"
          message={`Are you sure you want to delete "${selectedCompetency.name}"?`}
          onConfirm={handleDelete}
          onClose={() => setShowDeleteModal(false)}
        />
      )}
    </div>
  );
}

// Reusable Modal Components
function ViewTemplateModal({ template, onClose }: { template: Template; onClose: () => void }) {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-hidden flex flex-col">
        {/* Blue Header */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-6 flex items-center justify-between">
          <h2 className="text-xl font-semibold text-white">{template.name}</h2>
          <button
            onClick={onClose}
            className="p-1.5 hover:bg-white/20 rounded-lg transition-colors"
          >
            <X className="w-5 h-5 text-white" />
          </button>
        </div>

        {/* Content */}
        <div className="p-8 overflow-y-auto flex-1 space-y-6">
          <div className="bg-gray-50 rounded-lg p-5">
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">Type</label>
                <span className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-blue-100 text-blue-700">
                  {template.type}
                </span>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">Status</label>
                <span className={`inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium ${
                  template.status === 'Active' ? 'bg-green-100 text-green-700' :
                  template.status === 'Draft' ? 'bg-gray-100 text-gray-700' :
                  'bg-red-100 text-red-700'
                }`}>
                  {template.status}
                </span>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">Sections</label>
                <p className="text-base text-gray-900">{template.sections}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">Questions</label>
                <p className="text-base text-gray-900">{template.questions}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">Created By</label>
                <p className="text-base text-gray-900">{template.createdBy}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">Last Updated</label>
                <p className="text-base text-gray-900">{new Date(template.lastUpdated).toLocaleDateString()}</p>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">Description</label>
              <p className="text-sm text-gray-700">{template.description}</p>
            </div>
          </div>

          {template.sectionDetails && template.sectionDetails.length > 0 && (
            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wide">Sections</h3>
              <div className="space-y-3">
                {template.sectionDetails.map((section, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-4">
                    <h4 className="text-sm font-medium text-gray-900 mb-2">{section.name}</h4>
                    <ul className="space-y-1">
                      {section.questions.map((question, qIndex) => (
                        <li key={qIndex} className="text-sm text-gray-600 flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                          {question}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-8 py-6 bg-gray-50 border-t border-gray-200 flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-6 py-2.5 bg-white border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

function ViewRatingScaleModal({ scale, onClose }: { scale: RatingScale; onClose: () => void }) {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden flex flex-col">
        {/* Blue Header */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-6 flex items-center justify-between">
          <h2 className="text-xl font-semibold text-white">{scale.name}</h2>
          <button
            onClick={onClose}
            className="p-1.5 hover:bg-white/20 rounded-lg transition-colors"
          >
            <X className="w-5 h-5 text-white" />
          </button>
        </div>

        {/* Content */}
        <div className="p-8 overflow-y-auto flex-1 space-y-6">
          <div className="bg-gray-50 rounded-lg p-5">
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">Category</label>
                <span className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-blue-100 text-blue-700">
                  {scale.category}
                </span>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">Status</label>
                <span className={`inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium ${
                  scale.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                }`}>
                  {scale.status}
                </span>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">Levels</label>
                <p className="text-base text-gray-900">{scale.levels} levels</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">Default Scale</label>
                <p className="text-base text-gray-900">{scale.isDefault ? 'Yes' : 'No'}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">Created By</label>
                <p className="text-base text-gray-900">{scale.createdBy}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">Last Updated</label>
                <p className="text-base text-gray-900">{new Date(scale.lastUpdated).toLocaleDateString()}</p>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">Description</label>
              <p className="text-sm text-gray-700">{scale.description}</p>
            </div>
          </div>

          {scale.levelDetails && scale.levelDetails.length > 0 && (
            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wide">Rating Levels</h3>
              <div className="space-y-3">
                {scale.levelDetails.map((level) => (
                  <div key={level.level} className="bg-gray-50 rounded-lg p-4 flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center flex-shrink-0">
                      <span className="text-lg font-bold text-purple-600">{level.level}</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-sm font-semibold text-gray-900 mb-1">{level.label}</h4>
                      <p className="text-sm text-gray-600">{level.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-8 py-6 bg-gray-50 border-t border-gray-200 flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-6 py-2.5 bg-white border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

function ViewCompetencyModal({ competency, onClose }: { competency: Competency; onClose: () => void }) {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden flex flex-col">
        {/* Blue Header */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-6 flex items-center justify-between">
          <h2 className="text-xl font-semibold text-white">{competency.name}</h2>
          <button
            onClick={onClose}
            className="p-1.5 hover:bg-white/20 rounded-lg transition-colors"
          >
            <X className="w-5 h-5 text-white" />
          </button>
        </div>

        {/* Content */}
        <div className="p-8 overflow-y-auto flex-1 space-y-6">
          <div className="bg-gray-50 rounded-lg p-5">
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">Category</label>
                <span className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-blue-100 text-blue-700">
                  {competency.category}
                </span>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">Status</label>
                <span className={`inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium ${
                  competency.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                }`}>
                  {competency.status}
                </span>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">Created By</label>
                <p className="text-base text-gray-900">{competency.createdBy}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">Last Updated</label>
                <p className="text-base text-gray-900">{new Date(competency.lastUpdated).toLocaleDateString()}</p>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">Description</label>
              <p className="text-sm text-gray-700">{competency.description}</p>
            </div>
          </div>

          {competency.skills && competency.skills.length > 0 && (
            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wide">Related Skills</h3>
              <div className="flex flex-wrap gap-2">
                {competency.skills.map((skill, index) => (
                  <span key={index} className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-purple-100 text-purple-700">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-8 py-6 bg-gray-50 border-t border-gray-200 flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-6 py-2.5 bg-white border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

// Form Modals
function TemplateFormModal({
  title,
  icon,
  iconBg,
  formData,
  setFormData,
  onSubmit,
  onClose,
  submitText,
}: any) {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-hidden flex flex-col">
        {/* Purple Header */}
        <div className="bg-gradient-to-r from-purple-600 to-purple-700 px-8 py-6 flex items-center justify-between">
          <h2 className="text-xl font-semibold text-white">{title}</h2>
          <button
            onClick={onClose}
            className="p-1.5 hover:bg-white/20 rounded-lg transition-colors"
          >
            <X className="w-5 h-5 text-white" />
          </button>
        </div>

        {/* Content */}
        <div className="p-8 overflow-y-auto flex-1">
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Template Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all"
                  placeholder="e.g., Annual Performance Review"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Type <span className="text-red-500">*</span>
                </label>
                <select
                  value={formData.type}
                  onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                  className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all"
                >
                  <option value="Annual">Annual</option>
                  <option value="Quarterly">Quarterly</option>
                  <option value="Probation">Probation</option>
                  <option value="Custom">Custom</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Sections <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  value={formData.sections}
                  onChange={(e) => setFormData({ ...formData, sections: Number(e.target.value) })}
                  className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all"
                  placeholder="0"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Questions <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  value={formData.questions}
                  onChange={(e) => setFormData({ ...formData, questions: Number(e.target.value) })}
                  className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all"
                  placeholder="0"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Status <span className="text-red-500">*</span>
              </label>
              <select
                value={formData.status}
                onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all"
              >
                <option value="Draft">Draft</option>
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">Description</label>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 resize-none transition-all"
                rows={4}
                placeholder="Describe the purpose of this template..."
              />
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-8 py-6 bg-gray-50 border-t border-gray-200 flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-6 py-2.5 bg-white border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={onSubmit}
            className="px-6 py-2.5 bg-purple-600 text-white rounded-lg text-sm font-medium hover:bg-purple-700 transition-colors"
          >
            {submitText}
          </button>
        </div>
      </div>
    </div>
  );
}

function RatingScaleFormModal({
  title,
  icon,
  iconBg,
  formData,
  setFormData,
  onSubmit,
  onClose,
  submitText,
}: any) {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-hidden flex flex-col">
        {/* Purple Header */}
        <div className="bg-gradient-to-r from-purple-600 to-purple-700 px-8 py-6 flex items-center justify-between">
          <h2 className="text-xl font-semibold text-white">{title}</h2>
          <button
            onClick={onClose}
            className="p-1.5 hover:bg-white/20 rounded-lg transition-colors"
          >
            <X className="w-5 h-5 text-white" />
          </button>
        </div>

        {/* Content */}
        <div className="p-8 overflow-y-auto flex-1">
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Scale Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all"
                  placeholder="e.g., 5-Point Performance Scale"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Category <span className="text-red-500">*</span>
                </label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all"
                >
                  <option value="Performance">Performance</option>
                  <option value="Behavioral">Behavioral</option>
                  <option value="Technical">Technical</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Number of Levels <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  value={formData.levels}
                  onChange={(e) => setFormData({ ...formData, levels: Number(e.target.value) })}
                  className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all"
                  min="2"
                  max="10"
                  placeholder="5"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Status <span className="text-red-500">*</span>
                </label>
                <select
                  value={formData.status}
                  onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                  className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all"
                >
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">Description</label>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 resize-none transition-all"
                rows={4}
                placeholder="Describe the purpose of this rating scale..."
              />
            </div>

            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                checked={formData.isDefault}
                onChange={(e) => setFormData({ ...formData, isDefault: e.target.checked })}
                className="w-4 h-4 rounded border-gray-300 text-purple-600 focus:ring-purple-500"
              />
              <label className="text-sm font-medium text-gray-900">Set as default rating scale</label>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-8 py-6 bg-gray-50 border-t border-gray-200 flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-6 py-2.5 bg-white border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={onSubmit}
            className="px-6 py-2.5 bg-purple-600 text-white rounded-lg text-sm font-medium hover:bg-purple-700 transition-colors"
          >
            {submitText}
          </button>
        </div>
      </div>
    </div>
  );
}

function CompetencyFormModal({
  title,
  icon,
  iconBg,
  formData,
  setFormData,
  onSubmit,
  onClose,
  submitText,
}: any) {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-hidden flex flex-col">
        {/* Purple Header */}
        <div className="bg-gradient-to-r from-purple-600 to-purple-700 px-8 py-6 flex items-center justify-between">
          <h2 className="text-xl font-semibold text-white">{title}</h2>
          <button
            onClick={onClose}
            className="p-1.5 hover:bg-white/20 rounded-lg transition-colors"
          >
            <X className="w-5 h-5 text-white" />
          </button>
        </div>

        {/* Content */}
        <div className="p-8 overflow-y-auto flex-1">
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Competency Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all"
                  placeholder="e.g., Leadership"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Category <span className="text-red-500">*</span>
                </label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all"
                >
                  <option value="Core">Core</option>
                  <option value="Technical">Technical</option>
                  <option value="Leadership">Leadership</option>
                  <option value="Behavioral">Behavioral</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Status <span className="text-red-500">*</span>
              </label>
              <select
                value={formData.status}
                onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all"
              >
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">Description</label>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 resize-none transition-all"
                rows={4}
                placeholder="Describe this competency..."
              />
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-8 py-6 bg-gray-50 border-t border-gray-200 flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-6 py-2.5 bg-white border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={onSubmit}
            className="px-6 py-2.5 bg-purple-600 text-white rounded-lg text-sm font-medium hover:bg-purple-700 transition-colors"
          >
            {submitText}
          </button>
        </div>
      </div>
    </div>
  );
}

function DeleteConfirmModal({ title, message, onConfirm, onClose }: any) {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden">
        {/* Red Header */}
        <div className="bg-gradient-to-r from-red-600 to-red-700 px-8 py-6 flex items-center justify-between">
          <h3 className="text-xl font-semibold text-white">{title}</h3>
          <button
            onClick={onClose}
            className="p-1.5 hover:bg-white/20 rounded-lg transition-colors"
          >
            <X className="w-5 h-5 text-white" />
          </button>
        </div>

        {/* Content */}
        <div className="p-8">
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
            <p className="text-sm text-red-800 text-center">{message}</p>
            <p className="text-xs text-red-600 text-center mt-2">This action cannot be undone</p>
          </div>
        </div>

        {/* Footer */}
        <div className="px-8 py-6 bg-gray-50 border-t border-gray-200 flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-6 py-2.5 bg-white border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="px-6 py-2.5 bg-red-600 text-white rounded-lg text-sm font-medium hover:bg-red-700 transition-colors"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
