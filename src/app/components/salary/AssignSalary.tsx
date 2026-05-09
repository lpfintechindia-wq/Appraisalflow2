import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Save } from 'lucide-react';

export function AssignSalary() {
  const navigate = useNavigate();
  const [selectedEmployee, setSelectedEmployee] = useState('');
  const [selectedStructure, setSelectedStructure] = useState('');
  const [ctc, setCtc] = useState(1200000);
  const [effectiveDate, setEffectiveDate] = useState('2026-05-01');

  const structures = ['Standard CTC Structure', 'Senior Executive Package', 'Contract Worker Structure'];

  const breakdown = {
    basicSalary: ctc * 0.4,
    hra: ctc * 0.2,
    specialAllowance: ctc * 0.3,
    pf: ctc * 0.12,
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
        <h2 className="text-2xl font-semibold text-gray-900 mb-2">Assign Salary</h2>
        <p className="text-sm text-gray-600">Assign salary structure and CTC to an employee</p>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {/* Form Section */}
        <div className="col-span-2 bg-white rounded-xl border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Employee Details</h3>

          <div className="space-y-6">
            {/* Employee Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Select Employee *</label>
              <select
                value={selectedEmployee}
                onChange={(e) => setSelectedEmployee(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Choose employee...</option>
                <option value="emp1">John Doe (EMP001) - Engineering</option>
                <option value="emp2">Jane Smith (EMP002) - Marketing</option>
                <option value="emp3">Mike Johnson (EMP003) - Sales</option>
                <option value="emp4">Sarah Williams (EMP004) - HR</option>
                <option value="emp5">Robert Brown (EMP005) - Finance</option>
              </select>
            </div>

            {/* Salary Structure */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Salary Structure *</label>
              <select
                value={selectedStructure}
                onChange={(e) => setSelectedStructure(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Choose structure...</option>
                {structures.map((structure) => (
                  <option key={structure} value={structure}>
                    {structure}
                  </option>
                ))}
              </select>
            </div>

            {/* Annual CTC */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Annual CTC (₹) *</label>
              <input
                type="number"
                value={ctc}
                onChange={(e) => setCtc(Number(e.target.value))}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter CTC amount"
              />
              <p className="text-xs text-gray-500 mt-1">Enter the total annual cost to company</p>
            </div>

            {/* Effective Date */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Effective Date *</label>
              <input
                type="date"
                value={effectiveDate}
                onChange={(e) => setEffectiveDate(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Remarks */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Remarks (Optional)</label>
              <textarea
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Add any additional notes..."
              ></textarea>
            </div>
          </div>
        </div>

        {/* Preview Panel */}
        <div className="col-span-1">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 sticky top-6">
            <h4 className="text-sm font-medium text-gray-900 mb-6">Salary Breakdown</h4>

            <div className="space-y-4">
              {/* Annual CTC */}
              <div className="bg-white rounded-lg p-4">
                <div className="text-xs text-gray-600 mb-1">Annual CTC</div>
                <div className="text-2xl font-semibold text-gray-900">₹{ctc.toLocaleString()}</div>
              </div>

              {/* Components Breakdown */}
              <div className="bg-white rounded-lg p-4 space-y-3">
                <div className="text-xs font-medium text-gray-700 mb-2">Earnings</div>
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
                <div className="text-xs mb-1">Monthly Net Salary</div>
                <div className="text-2xl font-semibold">₹{Math.round(monthlySalary).toLocaleString()}</div>
                <div className="text-xs mt-2 opacity-90">
                  Annual Net: ₹{(Math.round(monthlySalary) * 12).toLocaleString()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mt-6 flex items-center justify-end gap-4 bg-white rounded-xl border border-gray-200 p-4">
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
          Assign Salary
        </button>
      </div>
    </div>
  );
}
