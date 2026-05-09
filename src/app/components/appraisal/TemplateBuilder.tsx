import { useState } from 'react';
import { Plus, Edit2, Trash2, X, GripVertical, ChevronDown, ChevronUp, AlertCircle, Settings } from 'lucide-react';

interface Parameter {
  id: string;
  name: string;
  ratingType: '1-5' | '1-10' | 'Yes/No';
  hasComment: boolean;
}

interface Section {
  id: string;
  name: string;
  weight: number;
  description: string;
  parameters: Parameter[];
}

const mockSections: Section[] = [
  {
    id: '1',
    name: 'Goal / KPI Achievement',
    weight: 40,
    description: 'Evaluation of goal completion and KPI performance',
    parameters: [
      { id: 'p1', name: 'Annual Goals Achieved', ratingType: '1-5', hasComment: true },
      { id: 'p2', name: 'KPI Target Met', ratingType: '1-5', hasComment: true },
      { id: 'p3', name: 'Quality of Deliverables', ratingType: '1-5', hasComment: false },
    ],
  },
  {
    id: '2',
    name: 'Core Competencies',
    weight: 30,
    description: 'Assessment of essential skills and behaviors',
    parameters: [
      { id: 'p4', name: 'Communication Skills', ratingType: '1-5', hasComment: true },
      { id: 'p5', name: 'Teamwork', ratingType: '1-5', hasComment: true },
      { id: 'p6', name: 'Problem Solving', ratingType: '1-5', hasComment: true },
    ],
  },
  {
    id: '3',
    name: 'Leadership & Initiative',
    weight: 20,
    description: 'Demonstrates leadership qualities and proactive behavior',
    parameters: [
      { id: 'p7', name: 'Takes Initiative', ratingType: '1-5', hasComment: true },
      { id: 'p8', name: 'Mentors Others', ratingType: 'Yes/No', hasComment: false },
    ],
  },
  {
    id: '4',
    name: 'Attendance & Punctuality',
    weight: 10,
    description: 'Regular attendance and timeliness',
    parameters: [
      { id: 'p9', name: 'Attendance Record', ratingType: '1-5', hasComment: false },
    ],
  },
];

export function TemplateBuilder() {
  const [sections, setSections] = useState<Section[]>(mockSections);
  const [expandedSections, setExpandedSections] = useState<string[]>(['1']);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedSection, setSelectedSection] = useState<Section | null>(null);
  const [draggedSection, setDraggedSection] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    name: '',
    weight: 0,
    description: '',
    parameters: [] as Parameter[],
  });

  const totalWeight = sections.reduce((sum, section) => sum + section.weight, 0);

  const toggleSection = (id: string) => {
    setExpandedSections((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    );
  };

  const handleAddSection = () => {
    const newSection: Section = {
      id: String(Date.now()),
      name: formData.name,
      weight: formData.weight,
      description: formData.description,
      parameters: formData.parameters,
    };
    setSections([...sections, newSection]);
    setShowAddModal(false);
    resetForm();
  };

  const handleEditSection = () => {
    if (selectedSection) {
      setSections(
        sections.map((s) =>
          s.id === selectedSection.id
            ? {
                ...s,
                name: formData.name,
                weight: formData.weight,
                description: formData.description,
                parameters: formData.parameters,
              }
            : s
        )
      );
      setShowEditModal(false);
      resetForm();
    }
  };

  const handleDeleteSection = () => {
    if (selectedSection) {
      setSections(sections.filter((s) => s.id !== selectedSection.id));
      setShowDeleteModal(false);
      setSelectedSection(null);
    }
  };

  const resetForm = () => {
    setFormData({
      name: '',
      weight: 0,
      description: '',
      parameters: [],
    });
    setSelectedSection(null);
  };

  const addParameter = () => {
    const newParam: Parameter = {
      id: `param-${Date.now()}`,
      name: '',
      ratingType: '1-5',
      hasComment: false,
    };
    setFormData({ ...formData, parameters: [...formData.parameters, newParam] });
  };

  const removeParameter = (id: string) => {
    setFormData({
      ...formData,
      parameters: formData.parameters.filter((p) => p.id !== id),
    });
  };

  const updateParameter = (id: string, field: keyof Parameter, value: any) => {
    setFormData({
      ...formData,
      parameters: formData.parameters.map((p) =>
        p.id === id ? { ...p, [field]: value } : p
      ),
    });
  };

  const handleDragStart = (id: string) => {
    setDraggedSection(id);
  };

  const handleDragOver = (e: React.DragEvent, targetId: string) => {
    e.preventDefault();
    if (!draggedSection || draggedSection === targetId) return;

    const draggedIdx = sections.findIndex((s) => s.id === draggedSection);
    const targetIdx = sections.findIndex((s) => s.id === targetId);

    const newSections = [...sections];
    const [removed] = newSections.splice(draggedIdx, 1);
    newSections.splice(targetIdx, 0, removed);

    setSections(newSections);
  };

  const handleDragEnd = () => {
    setDraggedSection(null);
  };

  return (
    <div>
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-lg font-semibold text-gray-900">Section Builder</h2>
            <p className="text-sm text-gray-600 mt-1">Create and manage evaluation sections for this template</p>
          </div>
          <button
            onClick={() => setShowAddModal(true)}
            className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
          >
            <Plus className="w-4 h-4" />
            <span className="text-sm font-medium">Add Section</span>
          </button>
        </div>

        {/* Weight Summary */}
        <div className={`p-4 rounded-lg border-2 ${
          totalWeight === 100
            ? 'bg-green-50 border-green-200'
            : totalWeight > 100
            ? 'bg-red-50 border-red-200'
            : 'bg-yellow-50 border-yellow-200'
        }`}>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <AlertCircle
                className={`w-5 h-5 ${
                  totalWeight === 100
                    ? 'text-green-600'
                    : totalWeight > 100
                    ? 'text-red-600'
                    : 'text-yellow-600'
                }`}
              />
              <div>
                <p className={`text-sm font-medium ${
                  totalWeight === 100
                    ? 'text-green-900'
                    : totalWeight > 100
                    ? 'text-red-900'
                    : 'text-yellow-900'
                }`}>
                  {totalWeight === 100
                    ? 'Total Weight: Perfect!'
                    : totalWeight > 100
                    ? 'Total Weight Exceeds 100%'
                    : 'Total Weight is Below 100%'}
                </p>
                <p className={`text-xs mt-0.5 ${
                  totalWeight === 100
                    ? 'text-green-700'
                    : totalWeight > 100
                    ? 'text-red-700'
                    : 'text-yellow-700'
                }`}>
                  Current total: {totalWeight}% {totalWeight !== 100 && `(${totalWeight > 100 ? '-' : '+'}${Math.abs(100 - totalWeight)}%)`}
                </p>
              </div>
            </div>
            <div className="text-right">
              <p className={`text-2xl font-bold ${
                totalWeight === 100
                  ? 'text-green-600'
                  : totalWeight > 100
                  ? 'text-red-600'
                  : 'text-yellow-600'
              }`}>
                {totalWeight}%
              </p>
              <p className="text-xs text-gray-600">of 100%</p>
            </div>
          </div>
        </div>
      </div>

      {/* Sections List */}
      <div className="space-y-3">
        {sections.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-xl border-2 border-dashed border-gray-300">
            <Settings className="w-12 h-12 text-gray-400 mx-auto mb-3" />
            <p className="text-sm text-gray-600">No sections created yet</p>
            <button
              onClick={() => setShowAddModal(true)}
              className="mt-4 text-sm text-purple-600 hover:text-purple-700 font-medium"
            >
              Add your first section
            </button>
          </div>
        ) : (
          sections.map((section) => (
            <div
              key={section.id}
              draggable
              onDragStart={() => handleDragStart(section.id)}
              onDragOver={(e) => handleDragOver(e, section.id)}
              onDragEnd={handleDragEnd}
              className={`bg-white rounded-xl border-2 transition-all ${
                draggedSection === section.id
                  ? 'border-purple-400 shadow-lg opacity-50'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              {/* Section Header */}
              <div className="p-5">
                <div className="flex items-start gap-3">
                  {/* Drag Handle */}
                  <button
                    className="mt-1 p-1 hover:bg-gray-100 rounded cursor-grab active:cursor-grabbing"
                    title="Drag to reorder"
                  >
                    <GripVertical className="w-5 h-5 text-gray-400" />
                  </button>

                  {/* Section Info */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="text-base font-semibold text-gray-900">{section.name}</h3>
                        <p className="text-sm text-gray-600 mt-1">{section.description}</p>
                      </div>
                      <div className="flex items-center gap-2 ml-4">
                        <div className="text-right mr-3">
                          <p className="text-2xl font-bold text-purple-600">{section.weight}%</p>
                          <p className="text-xs text-gray-500">Weight</p>
                        </div>
                        <button
                          onClick={() => {
                            setSelectedSection(section);
                            setFormData({
                              name: section.name,
                              weight: section.weight,
                              description: section.description,
                              parameters: section.parameters,
                            });
                            setShowEditModal(true);
                          }}
                          className="p-2 hover:bg-gray-100 rounded-lg transition-colors text-gray-600"
                          title="Edit Section"
                        >
                          <Edit2 className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => {
                            setSelectedSection(section);
                            setShowDeleteModal(true);
                          }}
                          className="p-2 hover:bg-red-50 rounded-lg transition-colors text-red-600"
                          title="Delete Section"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => toggleSection(section.id)}
                          className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                        >
                          {expandedSections.includes(section.id) ? (
                            <ChevronUp className="w-4 h-4 text-gray-600" />
                          ) : (
                            <ChevronDown className="w-4 h-4 text-gray-600" />
                          )}
                        </button>
                      </div>
                    </div>

                    {/* Parameters Count */}
                    <div className="flex items-center gap-4 text-sm text-gray-600 mt-3">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-purple-50 text-purple-700 rounded-full font-medium">
                        {section.parameters.length} Parameter{section.parameters.length !== 1 ? 's' : ''}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Expanded Parameters */}
                {expandedSections.includes(section.id) && section.parameters.length > 0 && (
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <h4 className="text-sm font-medium text-gray-900 mb-3">Parameters</h4>
                    <div className="space-y-2">
                      {section.parameters.map((param) => (
                        <div
                          key={param.id}
                          className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                        >
                          <div className="flex-1">
                            <p className="text-sm font-medium text-gray-900">{param.name}</p>
                          </div>
                          <div className="flex items-center gap-3">
                            <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-700">
                              {param.ratingType}
                            </span>
                            {param.hasComment && (
                              <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700">
                                Comments
                              </span>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))
        )}
      </div>

      {/* Add Section Modal */}
      {showAddModal && (
        <SectionFormModal
          title="Add Section"
          formData={formData}
          setFormData={setFormData}
          onSubmit={handleAddSection}
          onClose={() => {
            setShowAddModal(false);
            resetForm();
          }}
          addParameter={addParameter}
          removeParameter={removeParameter}
          updateParameter={updateParameter}
          submitText="Create Section"
          totalWeight={totalWeight}
        />
      )}

      {/* Edit Section Modal */}
      {showEditModal && (
        <SectionFormModal
          title="Edit Section"
          formData={formData}
          setFormData={setFormData}
          onSubmit={handleEditSection}
          onClose={() => {
            setShowEditModal(false);
            resetForm();
          }}
          addParameter={addParameter}
          removeParameter={removeParameter}
          updateParameter={updateParameter}
          submitText="Save Changes"
          totalWeight={totalWeight}
          existingWeight={selectedSection?.weight || 0}
        />
      )}

      {/* Delete Confirmation Modal */}
      {showDeleteModal && selectedSection && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden">
            {/* Red Header */}
            <div className="bg-gradient-to-r from-red-600 to-red-700 px-8 py-6 flex items-center justify-between">
              <h3 className="text-xl font-semibold text-white">Delete Section</h3>
              <button
                onClick={() => setShowDeleteModal(false)}
                className="p-1.5 hover:bg-white/20 rounded-lg transition-colors"
              >
                <X className="w-5 h-5 text-white" />
              </button>
            </div>

            {/* Content */}
            <div className="p-8">
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                <p className="text-sm text-red-800 text-center">
                  Are you sure you want to delete <span className="font-semibold">"{selectedSection.name}"</span>?
                </p>
                <p className="text-xs text-red-600 text-center mt-2">
                  This will remove {selectedSection.parameters.length} parameter{selectedSection.parameters.length !== 1 ? 's' : ''}. This action cannot be undone.
                </p>
              </div>
            </div>

            {/* Footer */}
            <div className="px-8 py-6 bg-gray-50 border-t border-gray-200 flex justify-end gap-3">
              <button
                onClick={() => setShowDeleteModal(false)}
                className="px-6 py-2.5 bg-white border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleDeleteSection}
                className="px-6 py-2.5 bg-red-600 text-white rounded-lg text-sm font-medium hover:bg-red-700 transition-colors"
              >
                Delete Section
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function SectionFormModal({
  title,
  formData,
  setFormData,
  onSubmit,
  onClose,
  addParameter,
  removeParameter,
  updateParameter,
  submitText,
  totalWeight,
  existingWeight = 0,
}: any) {
  const projectedWeight = totalWeight - existingWeight + formData.weight;
  const isWeightValid = projectedWeight <= 100;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col">
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
            {/* Basic Info */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wide">Section Details</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="col-span-2">
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    Section Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all"
                    placeholder="e.g., Goal / KPI Achievement"
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
                    className={`w-full px-4 py-2.5 bg-white border rounded-lg focus:outline-none focus:ring-2 transition-all ${
                      !isWeightValid
                        ? 'border-red-300 focus:ring-red-500 focus:border-red-500'
                        : 'border-gray-300 focus:ring-purple-500 focus:border-purple-500'
                    }`}
                    placeholder="40"
                  />
                  {!isWeightValid && (
                    <p className="text-xs text-red-600 mt-1">
                      Total would be {projectedWeight}% (exceeds 100%)
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">Projected Total</label>
                  <div className={`px-4 py-2.5 rounded-lg font-semibold ${
                    projectedWeight === 100
                      ? 'bg-green-50 text-green-700'
                      : projectedWeight > 100
                      ? 'bg-red-50 text-red-700'
                      : 'bg-yellow-50 text-yellow-700'
                  }`}>
                    {projectedWeight}%
                  </div>
                </div>

                <div className="col-span-2">
                  <label className="block text-sm font-medium text-gray-900 mb-2">Description</label>
                  <textarea
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 resize-none transition-all"
                    rows={3}
                    placeholder="Brief description of this section..."
                  />
                </div>
              </div>
            </div>

            {/* Parameters */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">Parameters</h3>
                <button
                  onClick={addParameter}
                  className="flex items-center gap-2 px-3 py-1.5 bg-purple-50 text-purple-600 rounded-lg hover:bg-purple-100 transition-colors"
                >
                  <Plus className="w-4 h-4" />
                  <span className="text-sm font-medium">Add Parameter</span>
                </button>
              </div>

              {formData.parameters.length === 0 ? (
                <div className="text-center py-8 bg-gray-50 rounded-lg border-2 border-dashed border-gray-300">
                  <p className="text-sm text-gray-600">No parameters added yet</p>
                  <button
                    onClick={addParameter}
                    className="mt-2 text-sm text-purple-600 hover:text-purple-700 font-medium"
                  >
                    Add your first parameter
                  </button>
                </div>
              ) : (
                <div className="space-y-3">
                  {formData.parameters.map((param: Parameter, index: number) => (
                    <div key={param.id} className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                      <div className="flex items-start gap-3">
                        <div className="flex-1 grid grid-cols-2 gap-3">
                          <div className="col-span-2">
                            <label className="block text-xs font-medium text-gray-700 mb-1">
                              Parameter Name <span className="text-red-500">*</span>
                            </label>
                            <input
                              type="text"
                              value={param.name}
                              onChange={(e) => updateParameter(param.id, 'name', e.target.value)}
                              className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                              placeholder="e.g., Communication Skills"
                            />
                          </div>

                          <div>
                            <label className="block text-xs font-medium text-gray-700 mb-1">Rating Type</label>
                            <select
                              value={param.ratingType}
                              onChange={(e) => updateParameter(param.id, 'ratingType', e.target.value)}
                              className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                            >
                              <option value="1-5">1-5 Scale</option>
                              <option value="1-10">1-10 Scale</option>
                              <option value="Yes/No">Yes/No</option>
                            </select>
                          </div>

                          <div>
                            <label className="block text-xs font-medium text-gray-700 mb-1">Comment Field</label>
                            <label className="flex items-center gap-2 px-3 py-2 bg-white border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                              <input
                                type="checkbox"
                                checked={param.hasComment}
                                onChange={(e) => updateParameter(param.id, 'hasComment', e.target.checked)}
                                className="w-4 h-4 rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                              />
                              <span className="text-sm text-gray-700">Enable comments</span>
                            </label>
                          </div>
                        </div>

                        <button
                          onClick={() => removeParameter(param.id)}
                          className="mt-6 p-2 hover:bg-red-50 rounded-lg transition-colors text-red-600"
                          title="Remove Parameter"
                        >
                          <Trash2 className="w-4 h-4" />
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
        <div className="px-8 py-6 bg-gray-50 border-t border-gray-200 flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-6 py-2.5 bg-white border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={onSubmit}
            disabled={!isWeightValid || !formData.name || formData.weight <= 0}
            className="px-6 py-2.5 bg-purple-600 text-white rounded-lg text-sm font-medium hover:bg-purple-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {submitText}
          </button>
        </div>
      </div>
    </div>
  );
}
