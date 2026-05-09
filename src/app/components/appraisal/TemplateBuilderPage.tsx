import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ArrowLeft, Plus, GripVertical, Edit2, Trash2, ChevronDown, ChevronUp, X, Save, Send } from 'lucide-react';

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

export function TemplateBuilderPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const initialTemplate = location.state?.template as AppraisalTemplate;

  const [currentTemplate, setCurrentTemplate] = useState<AppraisalTemplate>(
    initialTemplate || {
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
    }
  );

  const [expandedSections, setExpandedSections] = useState<string[]>([]);
  const [draggedSection, setDraggedSection] = useState<string | null>(null);
  const [showAddSectionModal, setShowAddSectionModal] = useState(false);
  const [showEditSectionModal, setShowEditSectionModal] = useState(false);
  const [selectedSection, setSelectedSection] = useState<ReviewSection | null>(null);
  const [showPreviewModal, setShowPreviewModal] = useState(false);

  const totalWeight = currentTemplate.sections.reduce((sum, s) => sum + s.weight, 0);

  const handleAddSection = (section: ReviewSection) => {
    setCurrentTemplate({
      ...currentTemplate,
      sections: [...currentTemplate.sections, section],
    });
    setShowAddSectionModal(false);
  };

  const handleEditSection = (updatedSection: ReviewSection) => {
    setCurrentTemplate({
      ...currentTemplate,
      sections: currentTemplate.sections.map((s) =>
        s.id === updatedSection.id ? updatedSection : s
      ),
    });
    setShowEditSectionModal(false);
    setSelectedSection(null);
  };

  const handleDeleteSection = (sectionId: string) => {
    setCurrentTemplate({
      ...currentTemplate,
      sections: currentTemplate.sections.filter((s) => s.id !== sectionId),
    });
  };

  const handleDragStart = (id: string) => {
    setDraggedSection(id);
  };

  const handleDragOver = (e: React.DragEvent, targetId: string) => {
    e.preventDefault();
    if (!draggedSection || draggedSection === targetId) return;

    const draggedIdx = currentTemplate.sections.findIndex((s) => s.id === draggedSection);
    const targetIdx = currentTemplate.sections.findIndex((s) => s.id === targetId);

    const newSections = [...currentTemplate.sections];
    const [removed] = newSections.splice(draggedIdx, 1);
    newSections.splice(targetIdx, 0, removed);

    setCurrentTemplate({ ...currentTemplate, sections: newSections });
  };

  const handleSaveTemplate = (status: 'Draft' | 'Published') => {
    const updatedTemplate = {
      ...currentTemplate,
      status,
      lastUpdated: new Date().toISOString().split('T')[0],
    };
    // Navigate back with the saved template
    navigate('/appraisal/configuration', { state: { savedTemplate: updatedTemplate } });
  };

  const toggleSection = (id: string) => {
    setExpandedSections((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    );
  };

  const getWeightColor = () => {
    if (totalWeight === 100) return 'text-green-600 bg-green-50';
    if (totalWeight > 100) return 'text-red-600 bg-red-50';
    return 'text-yellow-600 bg-yellow-50';
  };

  return (
    <div className="min-h-screen bg-[#f8f9fc]">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="px-8 py-4">
          <div className="flex items-center justify-between mb-4">
            <button
              onClick={() => navigate('/appraisal/configuration')}
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="text-sm font-medium">Back to Configuration</span>
            </button>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setShowPreviewModal(true)}
                className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors"
              >
                Preview
              </button>
              <button
                onClick={() => handleSaveTemplate('Draft')}
                className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors"
              >
                <Save className="w-4 h-4" />
                Save as Draft
              </button>
              <button
                onClick={() => handleSaveTemplate('Published')}
                disabled={totalWeight !== 100}
                className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg text-sm font-medium hover:bg-purple-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="w-4 h-4" />
                Publish Template
              </button>
            </div>
          </div>
          <h1 className="text-2xl font-semibold text-gray-900">Template Builder</h1>
          <p className="text-sm text-gray-600 mt-1">Configure sections, questions, and ratings for appraisal template</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-8 max-w-7xl mx-auto">
        <div className="space-y-6">
          {/* Section 1: Basic Template Info */}
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center text-sm font-bold">1</span>
              Template Basic Info
            </h3>
            <div className="grid grid-cols-2 gap-6">
              <div className="col-span-2">
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Template Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={currentTemplate.name}
                  onChange={(e) => setCurrentTemplate({ ...currentTemplate, name: e.target.value })}
                  className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                  placeholder="e.g., Annual Performance Review - Engineering"
                />
              </div>
              <div className="col-span-2">
                <label className="block text-sm font-medium text-gray-900 mb-2">Description</label>
                <textarea
                  value={currentTemplate.description}
                  onChange={(e) => setCurrentTemplate({ ...currentTemplate, description: e.target.value })}
                  className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 resize-none"
                  rows={3}
                  placeholder="Brief description of this template..."
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">Applicable Department</label>
                <select
                  value={currentTemplate.department}
                  onChange={(e) => setCurrentTemplate({ ...currentTemplate, department: e.target.value })}
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
                <label className="block text-sm font-medium text-gray-900 mb-2">Applicable Role</label>
                <input
                  type="text"
                  value={currentTemplate.role}
                  onChange={(e) => setCurrentTemplate({ ...currentTemplate, role: e.target.value })}
                  className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="e.g., Software Engineer"
                />
              </div>
            </div>
          </div>

          {/* Section 2: Review Sections */}
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center text-sm font-bold">2</span>
                Review Sections
              </h3>
              <div className="flex items-center gap-4">
                <div className={`px-4 py-2 rounded-lg text-sm font-medium ${getWeightColor()}`}>
                  Total Weight: {totalWeight}% / 100%
                </div>
                <button
                  onClick={() => setShowAddSectionModal(true)}
                  className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg text-sm font-medium hover:bg-purple-700 transition-colors"
                >
                  <Plus className="w-4 h-4" />
                  Add Section
                </button>
              </div>
            </div>

            {currentTemplate.sections.length === 0 ? (
              <div className="border-2 border-dashed border-gray-200 rounded-lg p-12 text-center">
                <p className="text-gray-500 text-sm mb-4">No sections added yet</p>
                <button
                  onClick={() => setShowAddSectionModal(true)}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg text-sm font-medium hover:bg-purple-700 transition-colors"
                >
                  <Plus className="w-4 h-4" />
                  Add Your First Section
                </button>
              </div>
            ) : (
              <div className="space-y-3">
                {currentTemplate.sections.map((section) => (
                  <div
                    key={section.id}
                    draggable
                    onDragStart={() => handleDragStart(section.id)}
                    onDragOver={(e) => handleDragOver(e, section.id)}
                    className="border border-gray-200 rounded-lg bg-white hover:shadow-md transition-shadow"
                  >
                    <div className="px-4 py-3 flex items-center justify-between">
                      <div className="flex items-center gap-3 flex-1">
                        <GripVertical className="w-5 h-5 text-gray-400 cursor-move" />
                        <div className="flex-1">
                          <div className="flex items-center gap-3">
                            <h4 className="text-sm font-semibold text-gray-900">{section.name}</h4>
                            <span className="px-2.5 py-0.5 bg-purple-100 text-purple-700 rounded-full text-xs font-medium">
                              {section.weight}% weight
                            </span>
                            <span className="text-xs text-gray-500">
                              {section.questions.length} question{section.questions.length !== 1 ? 's' : ''}
                            </span>
                          </div>
                          {section.description && (
                            <p className="text-xs text-gray-500 mt-1">{section.description}</p>
                          )}
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => toggleSection(section.id)}
                          className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors text-gray-600"
                        >
                          {expandedSections.includes(section.id) ? (
                            <ChevronUp className="w-4 h-4" />
                          ) : (
                            <ChevronDown className="w-4 h-4" />
                          )}
                        </button>
                        <button
                          onClick={() => {
                            setSelectedSection(section);
                            setShowEditSectionModal(true);
                          }}
                          className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors text-gray-600"
                        >
                          <Edit2 className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleDeleteSection(section.id)}
                          className="p-1.5 hover:bg-red-100 rounded-lg transition-colors text-red-600"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    {expandedSections.includes(section.id) && (
                      <div className="px-4 pb-4 pt-2 border-t border-gray-100">
                        <div className="bg-gray-50 rounded-lg p-4">
                          <h5 className="text-xs font-semibold text-gray-700 uppercase tracking-wide mb-3">Questions/Parameters</h5>
                          {section.questions.length === 0 ? (
                            <p className="text-sm text-gray-500 text-center py-2">No questions added</p>
                          ) : (
                            <div className="space-y-2">
                              {section.questions.map((question, idx) => (
                                <div key={question.id} className="flex items-start gap-3 bg-white p-3 rounded-lg">
                                  <span className="text-xs font-medium text-gray-500 mt-0.5">{idx + 1}.</span>
                                  <div className="flex-1">
                                    <div className="flex items-center gap-2">
                                      <p className="text-sm text-gray-900">{question.name}</p>
                                      {question.isMandatory && (
                                        <span className="px-2 py-0.5 bg-red-100 text-red-700 rounded text-xs font-medium">Required</span>
                                      )}
                                    </div>
                                    <div className="flex items-center gap-4 mt-1">
                                      <span className="text-xs text-gray-500">Type: {question.ratingType}</span>
                                      {question.requiresComment && (
                                        <span className="text-xs text-gray-500">• Comment required</span>
                                      )}
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Sticky Bottom Actions */}
      <div className="sticky bottom-0 bg-white border-t border-gray-200 px-8 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="text-sm text-gray-600">
            {currentTemplate.sections.length} section{currentTemplate.sections.length !== 1 ? 's' : ''} • Total weight: <span className={`font-medium ${totalWeight === 100 ? 'text-green-600' : totalWeight > 100 ? 'text-red-600' : 'text-yellow-600'}`}>{totalWeight}%</span>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate('/appraisal/configuration')}
              className="px-6 py-2.5 bg-white border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={() => handleSaveTemplate('Draft')}
              className="px-6 py-2.5 bg-white border border-gray-200 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors"
            >
              Save as Draft
            </button>
            <button
              onClick={() => handleSaveTemplate('Published')}
              disabled={totalWeight !== 100}
              className="px-6 py-2.5 bg-purple-600 text-white rounded-lg text-sm font-medium hover:bg-purple-700 shadow-lg shadow-purple-500/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Publish Template
            </button>
          </div>
        </div>
      </div>

      {/* Section Form Modal - Reuse from Configuration */}
      {(showAddSectionModal || showEditSectionModal) && (
        <SectionFormModal
          title={showAddSectionModal ? 'Add New Section' : 'Edit Section'}
          section={selectedSection || undefined}
          onSubmit={showAddSectionModal ? handleAddSection : handleEditSection}
          onClose={() => {
            setShowAddSectionModal(false);
            setShowEditSectionModal(false);
            setSelectedSection(null);
          }}
          totalWeight={totalWeight}
          existingWeight={selectedSection ? selectedSection.weight : 0}
        />
      )}

      {/* Preview Modal */}
      {showPreviewModal && (
        <TemplatePreview
          template={currentTemplate}
          onClose={() => setShowPreviewModal(false)}
        />
      )}
    </div>
  );
}

// Section Form Modal Component (nested modal for adding/editing sections)
function SectionFormModal({
  title,
  section,
  onSubmit,
  onClose,
  totalWeight,
  existingWeight = 0,
}: {
  title: string;
  section?: ReviewSection;
  onSubmit: (section: ReviewSection) => void;
  onClose: () => void;
  totalWeight: number;
  existingWeight?: number;
}) {
  const [formData, setFormData] = useState<ReviewSection>(
    section || {
      id: String(Date.now()),
      name: '',
      weight: 0,
      description: '',
      questions: [],
    }
  );
  const [showQuestionModal, setShowQuestionModal] = useState(false);
  const [selectedQuestion, setSelectedQuestion] = useState<Question | null>(null);

  const projectedWeight = totalWeight - existingWeight + formData.weight;
  const isWeightValid = projectedWeight <= 100;

  const handleAddQuestion = (question: Question) => {
    setFormData({
      ...formData,
      questions: [...formData.questions, question],
    });
    setShowQuestionModal(false);
  };

  const handleEditQuestion = (updatedQuestion: Question) => {
    setFormData({
      ...formData,
      questions: formData.questions.map((q) => (q.id === updatedQuestion.id ? updatedQuestion : q)),
    });
    setShowQuestionModal(false);
    setSelectedQuestion(null);
  };

  const handleDeleteQuestion = (questionId: string) => {
    setFormData({
      ...formData,
      questions: formData.questions.filter((q) => q.id !== questionId),
    });
  };

  const handleSubmit = () => {
    if (!formData.name || !isWeightValid) return;
    onSubmit(formData);
  };

  return (
    <>
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-[60] p-4">
        <div className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-6 flex items-center justify-between">
            <h2 className="text-xl font-semibold text-white">{title}</h2>
            <button onClick={onClose} className="p-1.5 hover:bg-white/20 rounded-lg transition-colors">
              <X className="w-5 h-5 text-white" />
            </button>
          </div>

          {/* Content */}
          <div className="p-8 overflow-y-auto max-h-[calc(90vh-180px)]">
            <div className="space-y-6">
              {/* Section Details */}
              <div className="grid grid-cols-2 gap-6">
                <div className="col-span-2">
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    Section Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="e.g., Goal Achievement"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    Weight (%) <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    min="0"
                    max="100"
                    value={formData.weight}
                    onChange={(e) => setFormData({ ...formData, weight: Number(e.target.value) })}
                    className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <p className={`text-xs mt-1 ${isWeightValid ? 'text-gray-500' : 'text-red-600'}`}>
                    Projected total: {projectedWeight}%
                  </p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">Questions Count</label>
                  <input
                    type="text"
                    value={`${formData.questions.length} question${formData.questions.length !== 1 ? 's' : ''}`}
                    disabled
                    className="w-full px-4 py-2.5 bg-gray-100 border border-gray-300 rounded-lg text-gray-600"
                  />
                </div>
                <div className="col-span-2">
                  <label className="block text-sm font-medium text-gray-900 mb-2">Description</label>
                  <textarea
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                    rows={2}
                    placeholder="Optional description..."
                  />
                </div>
              </div>

              {/* Questions/Parameters */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">Questions / Parameters</h4>
                  <button
                    onClick={() => setShowQuestionModal(true)}
                    className="flex items-center gap-2 px-3 py-1.5 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                    Add Question
                  </button>
                </div>
                {formData.questions.length === 0 ? (
                  <div className="border-2 border-dashed border-gray-200 rounded-lg p-6 text-center">
                    <p className="text-sm text-gray-500">No questions added yet</p>
                  </div>
                ) : (
                  <div className="space-y-2">
                    {formData.questions.map((question, idx) => (
                      <div key={question.id} className="flex items-start gap-3 bg-gray-50 p-3 rounded-lg">
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
                        <div className="flex gap-1">
                          <button
                            onClick={() => {
                              setSelectedQuestion(question);
                              setShowQuestionModal(true);
                            }}
                            className="p-1 hover:bg-gray-200 rounded transition-colors text-gray-600"
                          >
                            <Edit2 className="w-3.5 h-3.5" />
                          </button>
                          <button
                            onClick={() => handleDeleteQuestion(question.id)}
                            className="p-1 hover:bg-red-100 rounded transition-colors text-red-600"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
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
              Cancel
            </button>
            <button
              onClick={handleSubmit}
              disabled={!formData.name || !isWeightValid}
              className="px-6 py-2.5 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {section ? 'Update Section' : 'Add Section'}
            </button>
          </div>
        </div>
      </div>

      {/* Question Modal (nested) */}
      {showQuestionModal && (
        <QuestionFormModal
          question={selectedQuestion || undefined}
          onSubmit={selectedQuestion ? handleEditQuestion : handleAddQuestion}
          onClose={() => {
            setShowQuestionModal(false);
            setSelectedQuestion(null);
          }}
        />
      )}
    </>
  );
}

// Question Form Modal Component
function QuestionFormModal({
  question,
  onSubmit,
  onClose,
}: {
  question?: Question;
  onSubmit: (question: Question) => void;
  onClose: () => void;
}) {
  const [formData, setFormData] = useState<Question>(
    question || {
      id: String(Date.now()),
      name: '',
      ratingType: '1-5',
      isMandatory: false,
      requiresComment: false,
    }
  );

  const handleSubmit = () => {
    if (!formData.name) return;
    onSubmit(formData);
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-[70] p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full">
        {/* Header */}
        <div className="bg-gradient-to-r from-green-600 to-green-700 px-8 py-6 flex items-center justify-between">
          <h2 className="text-xl font-semibold text-white">{question ? 'Edit Question' : 'Add Question'}</h2>
          <button onClick={onClose} className="p-1.5 hover:bg-white/20 rounded-lg transition-colors">
            <X className="w-5 h-5 text-white" />
          </button>
        </div>

        {/* Content */}
        <div className="p-8 space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">
              Question / Parameter Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="e.g., Quality of deliverables"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">Rating Type</label>
            <select
              value={formData.ratingType}
              onChange={(e) => setFormData({ ...formData, ratingType: e.target.value as Question['ratingType'] })}
              className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <option value="1-5">1-5 Scale</option>
              <option value="1-10">1-10 Scale</option>
              <option value="Yes/No">Yes/No</option>
              <option value="Text">Text Response</option>
            </select>
          </div>
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={formData.isMandatory}
              onChange={(e) => setFormData({ ...formData, isMandatory: e.target.checked })}
              className="w-4 h-4 rounded border-gray-300 text-green-600 focus:ring-green-500"
            />
            <label className="text-sm text-gray-700">Mandatory question</label>
          </div>
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={formData.requiresComment}
              onChange={(e) => setFormData({ ...formData, requiresComment: e.target.checked })}
              className="w-4 h-4 rounded border-gray-300 text-green-600 focus:ring-green-500"
            />
            <label className="text-sm text-gray-700">Requires comment</label>
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
            disabled={!formData.name}
            className="px-6 py-2.5 bg-green-600 text-white rounded-lg text-sm font-medium hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {question ? 'Update' : 'Add'} Question
          </button>
        </div>
      </div>
    </div>
  );
}

// Template Preview Modal
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
                <span className="text-sm text-gray-600">Department: <span className="font-medium text-gray-900">{template.department}</span></span>
                <span className="text-sm text-gray-600">Role: <span className="font-medium text-gray-900">{template.role}</span></span>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Sections</h4>
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
