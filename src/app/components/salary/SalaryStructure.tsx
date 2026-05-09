import { useState } from 'react';
import { Search, Filter, Plus, Edit2, Trash2, X } from 'lucide-react';

interface Component {
  id: string;
  name: string;
  type: 'earning' | 'deduction';
  calculationType: 'fixed' | 'percentage';
  value: number;
}

interface SalaryStructure {
  id: string;
  name: string;
  type: 'CTC' | 'Gross';
  components: Component[];
  status: 'Active' | 'Draft' | 'Inactive';
  lastUpdated: string;
}

const mockStructures: SalaryStructure[] = [
  {
    id: '1',
    name: 'Standard CTC Structure',
    type: 'CTC',
    components: [
      { id: 'c1', name: 'Basic Salary', type: 'earning', calculationType: 'percentage', value: 40 },
      { id: 'c2', name: 'HRA', type: 'earning', calculationType: 'percentage', value: 20 },
      { id: 'c3', name: 'Special Allowance', type: 'earning', calculationType: 'percentage', value: 30 },
      { id: 'c4', name: 'PF', type: 'deduction', calculationType: 'percentage', value: 12 },
    ],
    status: 'Active',
    lastUpdated: '2026-04-10',
  },
  {
    id: '2',
    name: 'Senior Executive Package',
    type: 'CTC',
    components: [
      { id: 'c5', name: 'Basic Salary', type: 'earning', calculationType: 'percentage', value: 50 },
      { id: 'c6', name: 'HRA', type: 'earning', calculationType: 'percentage', value: 25 },
      { id: 'c7', name: 'Variable Pay', type: 'earning', calculationType: 'percentage', value: 15 },
    ],
    status: 'Active',
    lastUpdated: '2026-04-08',
  },
  {
    id: '3',
    name: 'Contract Worker Structure',
    type: 'Gross',
    components: [
      { id: 'c8', name: 'Base Pay', type: 'earning', calculationType: 'percentage', value: 90 },
    ],
    status: 'Draft',
    lastUpdated: '2026-04-05',
  },
];

export function SalaryStructure() {
  const [structures, setStructures] = useState<SalaryStructure[]>(mockStructures);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState<string>('all');
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [editingStructure, setEditingStructure] = useState<SalaryStructure | null>(null);

  const filteredStructures = structures.filter((structure) => {
    const matchesSearch = structure.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === 'all' || structure.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="p-6">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-900 mb-2">Salary Structure</h2>
        <p className="text-sm text-gray-600">Define and manage salary structures for your organization</p>
      </div>

      {/* Filters & Actions */}
      <div className="bg-white rounded-xl border border-gray-200 p-4 mb-6">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 flex-1">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search structures..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Status Filter */}
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-gray-500" />
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">All Status</option>
                <option value="Active">Active</option>
                <option value="Draft">Draft</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>
          </div>

          {/* Create Button */}
          <button
            onClick={() => setShowCreateModal(true)}
            className="flex items-center gap-2 px-4 py-2 bg-[#2563eb] text-white rounded-lg hover:bg-[#1d4ed8] transition-colors"
          >
            <Plus className="w-4 h-4" />
            <span className="text-sm font-medium">Create Structure</span>
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Structure Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Components</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Updated</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {filteredStructures.map((structure) => (
              <tr key={structure.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4">
                  <div className="text-sm font-medium text-gray-900">{structure.name}</div>
                </td>
                <td className="px-6 py-4">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-blue-50 text-blue-700">
                    {structure.type}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm text-gray-600">{structure.components.length} components</div>
                </td>
                <td className="px-6 py-4">
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium ${
                      structure.status === 'Active'
                        ? 'bg-green-50 text-green-700'
                        : structure.status === 'Draft'
                        ? 'bg-yellow-50 text-yellow-700'
                        : 'bg-gray-50 text-gray-700'
                    }`}
                  >
                    {structure.status}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm text-gray-600">{structure.lastUpdated}</div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center justify-end gap-2">
                    <button
                      onClick={() => setEditingStructure(structure)}
                      className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                    >
                      <Edit2 className="w-4 h-4" />
                    </button>
                    <button className="p-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Create/Edit Modal */}
      {(showCreateModal || editingStructure) && (
        <CreateStructureModal
          structure={editingStructure}
          onClose={() => {
            setShowCreateModal(false);
            setEditingStructure(null);
          }}
          onSave={(structure) => {
            if (editingStructure) {
              setStructures(structures.map((s) => (s.id === structure.id ? structure : s)));
            } else {
              setStructures([...structures, { ...structure, id: Date.now().toString() }]);
            }
            setShowCreateModal(false);
            setEditingStructure(null);
          }}
        />
      )}
    </div>
  );
}

interface CreateStructureModalProps {
  structure: SalaryStructure | null;
  onClose: () => void;
  onSave: (structure: SalaryStructure) => void;
}

function CreateStructureModal({ structure, onClose, onSave }: CreateStructureModalProps) {
  const [formData, setFormData] = useState<Partial<SalaryStructure>>(
    structure || {
      name: '',
      type: 'CTC',
      components: [],
      status: 'Draft',
      lastUpdated: new Date().toISOString().split('T')[0],
    }
  );

  const [sampleCTC, setSampleCTC] = useState(100000);

  const addComponent = (type: 'earning' | 'deduction') => {
    setFormData({
      ...formData,
      components: [
        ...(formData.components || []),
        {
          id: Date.now().toString(),
          name: '',
          type,
          calculationType: 'percentage',
          value: 0,
        },
      ],
    });
  };

  const updateComponent = (id: string, updates: Partial<Component>) => {
    setFormData({
      ...formData,
      components: formData.components?.map((c) => (c.id === id ? { ...c, ...updates } : c)),
    });
  };

  const removeComponent = (id: string) => {
    setFormData({
      ...formData,
      components: formData.components?.filter((c) => c.id !== id),
    });
  };

  const calculateBreakdown = () => {
    const earnings = formData.components?.filter((c) => c.type === 'earning') || [];
    const deductions = formData.components?.filter((c) => c.type === 'deduction') || [];

    const earningsTotal = earnings.reduce((sum, c) => {
      if (c.calculationType === 'percentage') {
        return sum + (sampleCTC * c.value) / 100;
      }
      return sum + c.value;
    }, 0);

    const deductionsTotal = deductions.reduce((sum, c) => {
      if (c.calculationType === 'percentage') {
        return sum + (sampleCTC * c.value) / 100;
      }
      return sum + c.value;
    }, 0);

    return { earnings, deductions, earningsTotal, deductionsTotal, netPay: earningsTotal - deductionsTotal };
  };

  const breakdown = calculateBreakdown();

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl max-w-6xl w-full max-h-[90vh] overflow-hidden flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">
            {structure ? 'Edit Structure' : 'Create Salary Structure'}
          </h3>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-auto p-6">
          <div className="grid grid-cols-3 gap-6">
            {/* Form Section */}
            <div className="col-span-2 space-y-6">
              {/* Basic Info */}
              <div className="bg-gray-50 rounded-xl p-4">
                <h4 className="text-sm font-medium text-gray-900 mb-4">Basic Information</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Structure Name</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="e.g., Standard CTC Structure"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Type</label>
                    <select
                      value={formData.type}
                      onChange={(e) => setFormData({ ...formData, type: e.target.value as 'CTC' | 'Gross' })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="CTC">CTC</option>
                      <option value="Gross">Gross</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Earnings Components */}
              <div className="bg-gray-50 rounded-xl p-4">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-sm font-medium text-gray-900">Earnings Components</h4>
                  <button
                    onClick={() => addComponent('earning')}
                    className="flex items-center gap-1 px-3 py-1.5 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm"
                  >
                    <Plus className="w-4 h-4" />
                    Add
                  </button>
                </div>
                <div className="space-y-3">
                  {formData.components?.filter((c) => c.type === 'earning').map((component) => (
                    <div key={component.id} className="flex items-center gap-3 bg-white p-3 rounded-lg">
                      <select
                        value={component.name}
                        onChange={(e) => updateComponent(component.id, { name: e.target.value })}
                        className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm"
                      >
                        <option value="">Select component...</option>
                        <option value="Basic Salary">Basic Salary</option>
                        <option value="HRA">HRA</option>
                        <option value="Special Allowance">Special Allowance</option>
                        <option value="Conveyance Allowance">Conveyance Allowance</option>
                        <option value="Medical Allowance">Medical Allowance</option>
                        <option value="Dearness Allowance">Dearness Allowance</option>
                        <option value="Performance Bonus">Performance Bonus</option>
                        <option value="Variable Pay">Variable Pay</option>
                        <option value="Other Allowance">Other Allowance</option>
                      </select>
                      <select
                        value={component.calculationType}
                        onChange={(e) =>
                          updateComponent(component.id, { calculationType: e.target.value as 'fixed' | 'percentage' })
                        }
                        className="px-3 py-2 border border-gray-300 rounded-lg text-sm"
                      >
                        <option value="percentage">Percentage</option>
                        <option value="fixed">Fixed</option>
                      </select>
                      <input
                        type="number"
                        value={component.value}
                        onChange={(e) => updateComponent(component.id, { value: Number(e.target.value) })}
                        className="w-24 px-3 py-2 border border-gray-300 rounded-lg text-sm"
                        placeholder="Value"
                      />
                      <button
                        onClick={() => removeComponent(component.id)}
                        className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                  {formData.components?.filter((c) => c.type === 'earning').length === 0 && (
                    <p className="text-sm text-gray-500 text-center py-4">No earning components added yet</p>
                  )}
                </div>
              </div>

              {/* Deductions Components */}
              <div className="bg-gray-50 rounded-xl p-4">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-sm font-medium text-gray-900">Deduction Components</h4>
                  <button
                    onClick={() => addComponent('deduction')}
                    className="flex items-center gap-1 px-3 py-1.5 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-sm"
                  >
                    <Plus className="w-4 h-4" />
                    Add
                  </button>
                </div>
                <div className="space-y-3">
                  {formData.components?.filter((c) => c.type === 'deduction').map((component) => (
                    <div key={component.id} className="flex items-center gap-3 bg-white p-3 rounded-lg">
                      <select
                        value={component.name}
                        onChange={(e) => updateComponent(component.id, { name: e.target.value })}
                        className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm"
                      >
                        <option value="">Select component...</option>
                        <option value="Provident Fund (PF)">Provident Fund (PF)</option>
                        <option value="Employee State Insurance (ESI)">Employee State Insurance (ESI)</option>
                        <option value="Professional Tax">Professional Tax</option>
                        <option value="Income Tax (TDS)">Income Tax (TDS)</option>
                        <option value="Labour Welfare Fund">Labour Welfare Fund</option>
                        <option value="Loan Deduction">Loan Deduction</option>
                        <option value="Advance Deduction">Advance Deduction</option>
                        <option value="Other Deduction">Other Deduction</option>
                      </select>
                      <select
                        value={component.calculationType}
                        onChange={(e) =>
                          updateComponent(component.id, { calculationType: e.target.value as 'fixed' | 'percentage' })
                        }
                        className="px-3 py-2 border border-gray-300 rounded-lg text-sm"
                      >
                        <option value="percentage">Percentage</option>
                        <option value="fixed">Fixed</option>
                      </select>
                      <input
                        type="number"
                        value={component.value}
                        onChange={(e) => updateComponent(component.id, { value: Number(e.target.value) })}
                        className="w-24 px-3 py-2 border border-gray-300 rounded-lg text-sm"
                        placeholder="Value"
                      />
                      <button
                        onClick={() => removeComponent(component.id)}
                        className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                  {formData.components?.filter((c) => c.type === 'deduction').length === 0 && (
                    <p className="text-sm text-gray-500 text-center py-4">No deduction components added yet</p>
                  )}
                </div>
              </div>
            </div>

            {/* Preview Panel */}
            <div className="col-span-1">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-4 sticky top-0">
                <h4 className="text-sm font-medium text-gray-900 mb-4">Salary Preview</h4>

                {/* Sample CTC Input */}
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Sample CTC</label>
                  <input
                    type="number"
                    value={sampleCTC}
                    onChange={(e) => setSampleCTC(Number(e.target.value))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
                  />
                </div>

                {/* Earnings Breakdown */}
                <div className="bg-white rounded-lg p-3 mb-3">
                  <h5 className="text-xs font-medium text-gray-700 mb-2">Earnings</h5>
                  <div className="space-y-2">
                    {breakdown.earnings.map((component) => (
                      <div key={component.id} className="flex justify-between text-sm">
                        <span className="text-gray-600">{component.name || 'Unnamed'}</span>
                        <span className="font-medium text-green-600">
                          ₹
                          {component.calculationType === 'percentage'
                            ? ((sampleCTC * component.value) / 100).toLocaleString()
                            : component.value.toLocaleString()}
                        </span>
                      </div>
                    ))}
                    <div className="pt-2 border-t border-gray-200 flex justify-between text-sm font-medium">
                      <span>Total Earnings</span>
                      <span className="text-green-600">₹{breakdown.earningsTotal.toLocaleString()}</span>
                    </div>
                  </div>
                </div>

                {/* Deductions Breakdown */}
                <div className="bg-white rounded-lg p-3 mb-3">
                  <h5 className="text-xs font-medium text-gray-700 mb-2">Deductions</h5>
                  <div className="space-y-2">
                    {breakdown.deductions.map((component) => (
                      <div key={component.id} className="flex justify-between text-sm">
                        <span className="text-gray-600">{component.name || 'Unnamed'}</span>
                        <span className="font-medium text-red-600">
                          ₹
                          {component.calculationType === 'percentage'
                            ? ((sampleCTC * component.value) / 100).toLocaleString()
                            : component.value.toLocaleString()}
                        </span>
                      </div>
                    ))}
                    <div className="pt-2 border-t border-gray-200 flex justify-between text-sm font-medium">
                      <span>Total Deductions</span>
                      <span className="text-red-600">₹{breakdown.deductionsTotal.toLocaleString()}</span>
                    </div>
                  </div>
                </div>

                {/* Net Pay */}
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg p-4 text-white">
                  <div className="text-xs mb-1">Net Monthly Salary</div>
                  <div className="text-2xl font-semibold">₹{breakdown.netPay.toLocaleString()}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end gap-3 p-6 border-t border-gray-200">
          <button
            onClick={onClose}
            className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors text-sm font-medium"
          >
            Cancel
          </button>
          <button
            onClick={() => onSave(formData as SalaryStructure)}
            className="px-4 py-2 bg-[#2563eb] text-white rounded-lg hover:bg-[#1d4ed8] transition-colors text-sm font-medium"
          >
            Save Structure
          </button>
        </div>
      </div>
    </div>
  );
}
