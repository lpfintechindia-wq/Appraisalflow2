import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, Save } from 'lucide-react';

export function EditEmployeeSalary() {
  const navigate = useNavigate();
  const { id } = useParams();

  // Mock data - in real app, fetch based on id
  const [formData, setFormData] = useState({
    employeeName: 'Rahul Verma',
    employeeId: 'EMP001',
    department: 'Engineering',
    location: 'Bangalore',
    salaryStructure: 'Standard CTC Structure',
    ctc: 1200000,
    effectiveDate: '2026-01-01',
    remarks: '',
  });

  const structures = ['Standard CTC Structure', 'Senior Executive Package', 'Contract Worker Structure'];

  const breakdown = {
    basicSalary: formData.ctc * 0.4,
    hra: formData.ctc * 0.2,
    specialAllowance: formData.ctc * 0.3,
    pf: formData.ctc * 0.12,
  };

  const monthlySalary = (breakdown.basicSalary + breakdown.hra + breakdown.specialAllowance - breakdown.pf) / 12;

  const handleSave = () => {
    // Save logic here
    navigate('/salary/employee');
  };

  return (
    <div className="p-6">
      {/* Header */}
      <div className="mb-6">
        <button
          onClick={() => navigate('/salary/employee')}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-4"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="text-sm">Back to Employee Salary</span>
        </button>
        <h2 className="text-2xl font-semibold text-gray-900 mb-2">Edit Employee Salary</h2>
        <p className="text-sm text-gray-600">Update salary information for {formData.employeeName}</p>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {/* Form Section */}
        <div className="col-span-2 bg-white rounded-xl border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Salary Information</h3>

          <div className="space-y-6">
            {/* Employee Info (Read-only) */}
            <div className="grid grid-cols-2 gap-4 pb-6 border-b border-gray-200">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Employee Name</label>
                <input
                  type="text"
                  value={formData.employeeName}
                  disabled
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm bg-gray-50 text-gray-600"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Employee ID</label>
                <input
                  type="text"
                  value={formData.employeeId}
                  disabled
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm bg-gray-50 text-gray-600"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Department</label>
                <input
                  type="text"
                  value={formData.department}
                  disabled
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm bg-gray-50 text-gray-600"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                <input
                  type="text"
                  value={formData.location}
                  disabled
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm bg-gray-50 text-gray-600"
                />
              </div>
            </div>

            {/* Editable Fields */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Salary Structure *</label>
              <select
                value={formData.salaryStructure}
                onChange={(e) => setFormData({ ...formData, salaryStructure: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {structures.map((structure) => (
                  <option key={structure} value={structure}>
                    {structure}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Annual CTC (₹) *</label>
              <input
                type="number"
                value={formData.ctc}
                onChange={(e) => setFormData({ ...formData, ctc: Number(e.target.value) })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter CTC amount"
              />
              <p className="text-xs text-gray-500 mt-1">Current CTC: ₹12,00,000</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Effective Date *</label>
              <input
                type="date"
                value={formData.effectiveDate}
                onChange={(e) => setFormData({ ...formData, effectiveDate: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <p className="text-xs text-gray-500 mt-1">This change will be effective from the selected date</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Reason for Change</label>
              <textarea
                rows={4}
                value={formData.remarks}
                onChange={(e) => setFormData({ ...formData, remarks: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Specify reason for salary update (e.g., Annual increment, Performance bonus, Promotion)"
              ></textarea>
            </div>

            {/* Warning Message */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0">
                  <svg className="w-5 h-5 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-yellow-800">Important Note</h4>
                  <p className="text-sm text-yellow-700 mt-1">
                    Updating the salary will create a new revision record. Previous salary details will be maintained in the history.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Preview Panel */}
        <div className="col-span-1">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 sticky top-6">
            <h4 className="text-sm font-medium text-gray-900 mb-6">Updated Salary Preview</h4>

            <div className="space-y-4">
              {/* Annual CTC */}
              <div className="bg-white rounded-lg p-4">
                <div className="text-xs text-gray-600 mb-1">New Annual CTC</div>
                <div className="text-2xl font-semibold text-gray-900">₹{formData.ctc.toLocaleString()}</div>
                <div className="text-xs text-green-600 mt-1">+₹2,00,000 increase</div>
              </div>

              {/* Components Breakdown */}
              <div className="bg-white rounded-lg p-4 space-y-3">
                <div className="text-xs font-medium text-gray-700 mb-2">Earnings Breakdown</div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Basic Salary (40%)</span>
                  <span className="font-medium">₹{breakdown.basicSalary.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">HRA (20%)</span>
                  <span className="font-medium">₹{breakdown.hra.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Special Allowance (30%)</span>
                  <span className="font-medium">₹{breakdown.specialAllowance.toLocaleString()}</span>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 space-y-3">
                <div className="text-xs font-medium text-gray-700 mb-2">Deductions</div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">PF (12%)</span>
                  <span className="font-medium text-red-600">₹{breakdown.pf.toLocaleString()}</span>
                </div>
              </div>

              {/* Monthly Net Salary */}
              <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg p-4 text-white">
                <div className="text-xs mb-1">New Monthly Salary</div>
                <div className="text-2xl font-semibold">₹{Math.round(monthlySalary).toLocaleString()}</div>
                <div className="text-xs mt-2 opacity-90">
                  Previous: ₹85,000
                </div>
              </div>

              {/* Comparison */}
              <div className="bg-white rounded-lg p-4 border-2 border-green-200">
                <div className="text-xs font-medium text-gray-700 mb-3">Monthly Change</div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Increase</span>
                  <span className="text-lg font-semibold text-green-600">
                    +₹{Math.round((monthlySalary - 85000)).toLocaleString()}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mt-6 flex items-center justify-between bg-white rounded-xl border border-gray-200 p-4">
        <div className="text-sm text-gray-600">
          * Required fields
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate('/salary/employee')}
            className="px-6 py-2.5 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors text-sm font-medium"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="flex items-center gap-2 px-6 py-2.5 bg-[#2563eb] text-white rounded-lg hover:bg-[#1d4ed8] transition-colors text-sm font-medium"
          >
            <Save className="w-4 h-4" />
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}
