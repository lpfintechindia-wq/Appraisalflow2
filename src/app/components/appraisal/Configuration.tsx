import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Plus, Edit2, Trash2, Copy, Eye, Search, Filter, X, GripVertical, ChevronDown, ChevronUp, Save, CheckCircle, AlertCircle, FileText, Settings } from 'lucide-react';

interface Question {
  id: string;
  name: string;
  ratingType: '1-5' | '1-10' | 'Yes/No' | 'Text';
  isMandatory: boolean;
  requiresComment: boolean;
}

interface ReviewSection {
  id: string;
  name: string;
  weight: number;
  description: string;
  questions: Question[];
}

interface AppraisalTemplate {
  id: string;
  name: string;
  description: string;
  department: string;
  role: string;
  status: 'Draft' | 'Published' | 'Archived';
  sections: ReviewSection[];
  ratingScale: {
    type: '1-5' | '1-10';
    labels: { value: number; label: string; description: string }[];
  };
  lastUpdated: string;
  createdBy: string;
}

const mockTemplates: AppraisalTemplate[] = [
  {
    id: '1',
    name: 'Annual Performance Review - Engineering',
    description: 'Comprehensive annual review for engineering roles',
    department: 'Engineering',
    role: 'Software Engineer',
    status: 'Published',
    sections: [],
    ratingScale: {
      type: '1-5',
      labels: [
        { value: 5, label: 'Outstanding', description: 'Exceptional performance' },
        { value: 4, label: 'Exceeds Expectations', description: 'Consistently exceeds expectations' },
        { value: 3, label: 'Meets Expectations', description: 'Fully meets expectations' },
        { value: 2, label: 'Needs Improvement', description: 'Performance below expectations' },
        { value: 1, label: 'Unsatisfactory', description: 'Significant improvement required' },
      ],
    },
    lastUpdated: '2026-05-01',
    createdBy: 'Priya Sharma',
  },
  {
    id: '2',
    name: 'Quarterly Review - Sales',
    description: 'Quarterly performance evaluation for sales team',
    department: 'Sales',
    role: 'Sales Executive',
    status: 'Draft',
    sections: [],
    ratingScale: {
      type: '1-5',
      labels: [
        { value: 5, label: 'Outstanding', description: 'Exceptional performance' },
        { value: 4, label: 'Exceeds Expectations', description: 'Consistently exceeds expectations' },
        { value: 3, label: 'Meets Expectations', description: 'Fully meets expectations' },
        { value: 2, label: 'Needs Improvement', description: 'Performance below expectations' },
        { value: 1, label: 'Unsatisfactory', description: 'Significant improvement required' },
      ],
    },
    lastUpdated: '2026-04-28',
    createdBy: 'Arjun Mehta',
  },
];

export function Configuration() {
  const navigate = useNavigate();
  const location = useLocation();
  const [templates, setTemplates] = useState<AppraisalTemplate[]>(mockTemplates);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState<AppraisalTemplate | null>(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showPreviewModal, setShowPreviewModal] = useState(false);

  // Handle template saved from builder page
  useEffect(() => {
    if (location.state?.savedTemplate) {
      const savedTemplate = location.state.savedTemplate as AppraisalTemplate;
      const existingIndex = templates.findIndex((t) => t.id === savedTemplate.id);
      if (existingIndex >= 0) {
        setTemplates(templates.map((t) => (t.id === savedTemplate.id ? savedTemplate : t)));
      } else {
        setTemplates([savedTemplate, ...templates]);
      }
      // Clear the state
      window.history.replaceState({}, document.title);
    }
  }, [location.state]);

  const handleCreateTemplate = () => {
    const newTemplate: AppraisalTemplate = {
      id: String(Date.now()),
      name: '',
      description: '',
      department: '',
      role: '',
      status: 'Draft',
      sections: [],
      ratingScale: {
        type: '1-5',
        labels: [
          { value: 5, label: 'Outstanding', description: 'Exceptional performance' },
          { value: 4, label: 'Exceeds Expectations', description: 'Consistently exceeds expectations' },
          { value: 3, label: 'Meets Expectations', description: 'Fully meets expectations' },
          { value: 2, label: 'Needs Improvement', description: 'Performance below expectations' },
          { value: 1, label: 'Unsatisfactory', description: 'Significant improvement required' },
        ],
      },
      lastUpdated: new Date().toISOString().split('T')[0],
      createdBy: 'Current User',
    };
    navigate('/appraisal/configuration/template/new', { state: { template: newTemplate } });
  };

  const handleEditTemplate = (template: AppraisalTemplate) => {
    navigate('/appraisal/configuration/template/edit', { state: { template: { ...template } } });
  };

  const handleCloneTemplate = (template: AppraisalTemplate) => {
    const clonedTemplate: AppraisalTemplate = {
      ...template,
      id: String(Date.now()),
      name: `Copy of ${template.name}`,
      status: 'Draft',
      lastUpdated: new Date().toISOString().split('T')[0],
      createdBy: 'Current User',
    };
    navigate('/appraisal/configuration/template/new', { state: { template: clonedTemplate } });
  };

  const handleDeleteTemplate = () => {
    if (selectedTemplate) {
      setTemplates(templates.filter((t) => t.id !== selectedTemplate.id));
      setShowDeleteModal(false);
      setSelectedTemplate(null);
    }
  };

  const getStatusColor = (status: string) => {
    const colors = {
      Published: 'bg-green-100 text-green-700',
      Draft: 'bg-yellow-100 text-yellow-700',
      Archived: 'bg-gray-100 text-gray-700',
    };
    return colors[status as keyof typeof colors] || colors.Draft;
  };

  const filteredTemplates = templates.filter((template) => {
    const matchesSearch = template.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         template.department.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === 'all' || template.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="p-6 md:p-8 bg-[#f8f9fc] min-h-screen">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-gray-900 mb-2">Appraisal Configuration</h1>
        <p className="text-sm text-gray-600">Create and manage appraisal templates with review sections and questions</p>
      </div>

      {/* Actions Bar */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 mb-6">
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
              onClick={handleCreateTemplate}
              className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
            >
              <Plus className="w-4 h-4" />
              <span className="text-sm font-medium">Create Template</span>
            </button>
          </div>
        </div>

        {/* Filter Panel */}
        {showFilters && (
          <div className="mt-4 pt-4 border-t border-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="w-full px-3 py-2 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  <option value="all">All Statuses</option>
                  <option value="Published">Published</option>
                  <option value="Draft">Draft</option>
                  <option value="Archived">Archived</option>
                </select>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Templates Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-100">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Template Name</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Department</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Role</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Last Updated</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filteredTemplates.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-6 py-12 text-center">
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
                      <div className="text-xs text-gray-500 mt-1">{template.description}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-700">{template.department || '-'}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-700">{template.role || '-'}</div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${getStatusColor(template.status)}`}>
                        {template.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-700">{new Date(template.lastUpdated).toLocaleDateString()}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => {
                            setSelectedTemplate(template);
                            setShowPreviewModal(true);
                          }}
                          className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors text-gray-600"
                          title="Preview"
                        >
                          <Eye className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleEditTemplate(template)}
                          className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors text-gray-600"
                          title="Edit"
                        >
                          <Edit2 className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleCloneTemplate(template)}
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

      {/* Preview Modal */}
      {showPreviewModal && selectedTemplate && (
        <TemplatePreview
          template={selectedTemplate}
          onClose={() => {
            setShowPreviewModal(false);
            setSelectedTemplate(null);
          }}
        />
      )}

      {/* Delete Confirmation Modal */}
      {showDeleteModal && selectedTemplate && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden">
            <div className="bg-gradient-to-r from-red-600 to-red-700 px-8 py-6 flex items-center justify-between">
              <h3 className="text-xl font-semibold text-white">Delete Template</h3>
              <button
                onClick={() => setShowDeleteModal(false)}
                className="p-1.5 hover:bg-white/20 rounded-lg transition-colors"
              >
                <X className="w-5 h-5 text-white" />
              </button>
            </div>
            <div className="p-8">
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                <p className="text-sm text-red-800 text-center">
                  Are you sure you want to delete <span className="font-semibold">"{selectedTemplate.name}"</span>?
                </p>
                <p className="text-xs text-red-600 text-center mt-2">This action cannot be undone.</p>
              </div>
            </div>
            <div className="px-8 py-6 bg-gray-50 border-t border-gray-200 flex justify-end gap-3">
              <button
                onClick={() => setShowDeleteModal(false)}
                className="px-6 py-2.5 bg-white border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleDeleteTemplate}
                className="px-6 py-2.5 bg-red-600 text-white rounded-lg text-sm font-medium hover:bg-red-700 transition-colors"
              >
                Delete Template
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// Simple Template Preview Component
function TemplatePreview({ template, onClose }: { template: AppraisalTemplate; onClose: () => void }) {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-6 flex items-center justify-between">
          <h2 className="text-xl font-semibold text-white">Template Preview</h2>
          <button onClick={onClose} className="p-1.5 hover:bg-white/20 rounded-lg transition-colors">
            <X className="w-5 h-5 text-white" />
          </button>
        </div>

        {/* Content */}
        <div className="p-8 overflow-y-auto max-h-[calc(90vh-180px)]">
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900">{template.name}</h3>
              <p className="text-sm text-gray-600 mt-1">{template.description}</p>
              <div className="flex gap-4 mt-3">
                <span className="text-sm text-gray-600">Department: <span className="font-medium text-gray-900">{template.department || 'Not specified'}</span></span>
                <span className="text-sm text-gray-600">Role: <span className="font-medium text-gray-900">{template.role || 'Not specified'}</span></span>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Sections ({template.sections.length})</h4>
              {template.sections.length === 0 ? (
                <p className="text-sm text-gray-500 text-center py-8">No sections configured yet</p>
              ) : (
                <div className="space-y-4">
                  {template.sections.map((section) => (
                    <div key={section.id} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-3">
                        <h5 className="text-base font-semibold text-gray-900">{section.name}</h5>
                        <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                          {section.weight}% weight
                        </span>
                      </div>
                      {section.description && (
                        <p className="text-sm text-gray-600 mb-3">{section.description}</p>
                      )}
                      <div className="space-y-2">
                        {section.questions.map((question, idx) => (
                          <div key={question.id} className="flex items-start gap-2 bg-gray-50 p-3 rounded">
                            <span className="text-xs font-medium text-gray-500 mt-0.5">{idx + 1}.</span>
                            <div className="flex-1">
                              <div className="flex items-center gap-2">
                                <p className="text-sm text-gray-900">{question.name}</p>
                                {question.isMandatory && (
                                  <span className="px-2 py-0.5 bg-red-100 text-red-700 rounded text-xs font-medium">Required</span>
                                )}
                              </div>
                              <p className="text-xs text-gray-500 mt-1">Type: {question.ratingType}</p>
                            </div>
                          </div>
                        ))}
                      </div>
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
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
