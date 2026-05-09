import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Search, Filter as FilterIcon, X } from 'lucide-react';

interface Employee {
  id: string;
  name: string;
  employeeId: string;
  department: string;
  designation: string;
  dateOfJoining: string;
  reportingManager: string;
  status: 'Active' | 'Probation' | 'Notice Period';
}

const mockEmployees: Employee[] = [
  { id: '1', name: 'Priya Sharma', employeeId: 'EMP001', department: 'Engineering', designation: 'Senior Developer', dateOfJoining: '2020-03-15', reportingManager: 'Rajesh Kumar', status: 'Active' },
  { id: '2', name: 'Amit Patel', employeeId: 'EMP002', department: 'Sales', designation: 'Sales Manager', dateOfJoining: '2019-06-20', reportingManager: 'Kavita Desai', status: 'Active' },
  { id: '3', name: 'Sneha Reddy', employeeId: 'EMP003', department: 'Marketing', designation: 'Marketing Lead', dateOfJoining: '2021-01-10', reportingManager: 'Vikram Singh', status: 'Active' },
  { id: '4', name: 'Arjun Mehta', employeeId: 'EMP004', department: 'Engineering', designation: 'DevOps Engineer', dateOfJoining: '2022-08-05', reportingManager: 'Rajesh Kumar', status: 'Active' },
  { id: '5', name: 'Kavita Desai', employeeId: 'EMP005', department: 'Sales', designation: 'Sales Director', dateOfJoining: '2018-02-14', reportingManager: 'Neha Gupta', status: 'Active' },
  { id: '6', name: 'Rajesh Kumar', employeeId: 'EMP006', department: 'Engineering', designation: 'Engineering Manager', dateOfJoining: '2017-11-22', reportingManager: 'Neha Gupta', status: 'Active' },
  { id: '7', name: 'Neha Gupta', employeeId: 'EMP007', department: 'Operations', designation: 'COO', dateOfJoining: '2016-05-08', reportingManager: 'Anil Sharma', status: 'Active' },
  { id: '8', name: 'Vikram Singh', employeeId: 'EMP008', department: 'Marketing', designation: 'Marketing Director', dateOfJoining: '2019-09-12', reportingManager: 'Neha Gupta', status: 'Active' },
  { id: '9', name: 'Pooja Iyer', employeeId: 'EMP009', department: 'HR', designation: 'HR Manager', dateOfJoining: '2023-01-20', reportingManager: 'Neha Gupta', status: 'Probation' },
  { id: '10', name: 'Rahul Verma', employeeId: 'EMP010', department: 'Engineering', designation: 'Junior Developer', dateOfJoining: '2024-03-01', reportingManager: 'Rajesh Kumar', status: 'Probation' },
];

export function NewAppraisalCycle() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    cycleCode: '',
    name: '',
    type: '',
    template: '',
    period: '',
    startDate: '',
    endDate: '',
    joiningCutoffDate: ''
  });

  const [showEligibleEmployees, setShowEligibleEmployees] = useState(false);
  const [eligibleEmployees, setEligibleEmployees] = useState<Employee[]>([]);
  const [selectedEmployees, setSelectedEmployees] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [departmentFilter, setDepartmentFilter] = useState('');

  const handleCheckFilter = () => {
    if (!formData.joiningCutoffDate) {
      alert('Please select a joining cut-off date');
      return;
    }

    const cutoffDate = new Date(formData.joiningCutoffDate);
    const filtered = mockEmployees.filter(emp => {
      const joinDate = new Date(emp.dateOfJoining);
      return joinDate <= cutoffDate;
    });

    setEligibleEmployees(filtered);
    setSelectedEmployees(filtered.map(e => e.id));
    setShowEligibleEmployees(true);
  };

  const handleSelectAll = (checked: boolean) => {
    setSelectedEmployees(checked ? filteredEmployees.map(e => e.id) : []);
  };

  const handleSelectEmployee = (id: string, checked: boolean) => {
    setSelectedEmployees(checked
      ? [...selectedEmployees, id]
      : selectedEmployees.filter(eid => eid !== id)
    );
  };

  const handleRemoveSelected = () => {
    setEligibleEmployees(eligibleEmployees.filter(e => !selectedEmployees.includes(e.id)));
    setSelectedEmployees([]);
  };

  const handleSaveDraft = () => {
    alert('Cycle saved as draft');
    navigate('/appraisal/cycles');
  };

  const handleCreateCycle = () => {
    alert(`Cycle created with ${selectedEmployees.length} employees`);
    navigate('/appraisal/cycles');
  };

  const getStatusColor = (status: string) => {
    const colors = {
      'Active': 'bg-green-100 text-green-700',
      'Probation': 'bg-yellow-100 text-yellow-700',
      'Notice Period': 'bg-red-100 text-red-700'
    };
    return colors[status as keyof typeof colors] || colors.Active;
  };

  const filteredEmployees = eligibleEmployees.filter(emp => {
    const matchesSearch = emp.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         emp.employeeId.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDepartment = !departmentFilter || emp.department === departmentFilter;
    return matchesSearch && matchesDepartment;
  });

  const departments = Array.from(new Set(eligibleEmployees.map(e => e.department)));

  return (
    <div className="min-h-screen bg-[#f8f9fc]">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate('/appraisal/cycles')}
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="text-sm font-medium">Back</span>
            </button>
            <div className="h-6 w-px bg-gray-300"></div>
            <h1 className="text-2xl font-semibold text-gray-900">New Appraisal Cycle</h1>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={handleSaveDraft}
              className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors"
            >
              Save Draft
            </button>
            <button
              onClick={handleCreateCycle}
              disabled={selectedEmployees.length === 0}
              className="px-4 py-2 bg-purple-600 text-white rounded-lg text-sm font-medium hover:bg-purple-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Create Cycle
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-8 max-w-7xl mx-auto">
        <div className="space-y-6">
          {/* Basic Details Section */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h3 className="text-sm font-semibold text-gray-900 mb-6 uppercase tracking-wide">Basic Details</h3>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Cycle Code <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.cycleCode}
                  onChange={(e) => setFormData({ ...formData, cycleCode: e.target.value })}
                  className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all"
                  placeholder="e.g., FY2627-ANN"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Cycle Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all"
                  placeholder="e.g., FY 2026–27 Annual Review"
                />
              </div>
            </div>
          </div>

          {/* Configuration Section */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h3 className="text-sm font-semibold text-gray-900 mb-6 uppercase tracking-wide">Configuration</h3>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Type <span className="text-red-500">*</span>
                </label>
                <select
                  value={formData.type}
                  onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                  className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all"
                >
                  <option value="">Select type</option>
                  <option value="Annual">Annual</option>
                  <option value="Semi-Annual">Semi-Annual</option>
                  <option value="Quarterly">Quarterly</option>
                  <option value="Monthly">Monthly</option>
                  <option value="Probation">Probation</option>
                  <option value="Ad-hoc">Ad-hoc</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Template <span className="text-red-500">*</span>
                </label>
                <select
                  value={formData.template}
                  onChange={(e) => setFormData({ ...formData, template: e.target.value })}
                  className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all"
                >
                  <option value="">Select template</option>
                  <option value="Standard v3">Standard v3</option>
                  <option value="Standard v2">Standard v2</option>
                  <option value="Leadership Assessment">Leadership Assessment</option>
                  <option value="Technical Review">Technical Review</option>
                  <option value="360 Degree">360 Degree</option>
                </select>
              </div>
            </div>
          </div>

          {/* Timeline Section */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h3 className="text-sm font-semibold text-gray-900 mb-6 uppercase tracking-wide">Timeline</h3>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Period <span className="text-red-500">*</span>
                </label>
                <select
                  value={formData.period}
                  onChange={(e) => setFormData({ ...formData, period: e.target.value })}
                  className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all"
                >
                  <option value="">Select period</option>
                  <option value="Q1 2026">Q1 2026</option>
                  <option value="Q2 2026">Q2 2026</option>
                  <option value="Q3 2026">Q3 2026</option>
                  <option value="Q4 2026">Q4 2026</option>
                  <option value="Q1 2027">Q1 2027</option>
                  <option value="Q2 2027">Q2 2027</option>
                  <option value="Q3 2027">Q3 2027</option>
                  <option value="Q4 2027">Q4 2027</option>
                </select>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Start Date <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    value={formData.startDate}
                    onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                    className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    End Date <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    value={formData.endDate}
                    onChange={(e) => setFormData({ ...formData, endDate: e.target.value })}
                    className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Employee Eligibility Section */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h3 className="text-sm font-semibold text-gray-900 mb-6 uppercase tracking-wide">Employee Eligibility</h3>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Joining Cut-off Date <span className="text-red-500">*</span>
                </label>
                <input
                  type="date"
                  value={formData.joiningCutoffDate}
                  onChange={(e) => setFormData({ ...formData, joiningCutoffDate: e.target.value })}
                  className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all"
                />
                <p className="text-xs text-gray-500 mt-2">
                  Employees who joined on or before this date will be included in this cycle.
                </p>
              </div>
              <div className="flex items-end">
                <button
                  onClick={handleCheckFilter}
                  className="px-6 py-2.5 bg-purple-600 text-white rounded-lg text-sm font-medium hover:bg-purple-700 transition-colors"
                >
                  Check Filter
                </button>
              </div>
            </div>
          </div>

          {/* Eligible Employees Section */}
          {showEligibleEmployees && (
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">Eligible Employees</h3>
                    <p className="text-xs text-gray-500 mt-1">
                      {eligibleEmployees.length} employees found • {selectedEmployees.length} selected
                    </p>
                  </div>
                  {selectedEmployees.length > 0 && (
                    <button
                      onClick={handleRemoveSelected}
                      className="flex items-center gap-2 px-4 py-2 bg-red-50 text-red-700 rounded-lg text-sm font-medium hover:bg-red-100 transition-colors"
                    >
                      <X className="w-4 h-4" />
                      Remove Selected
                    </button>
                  )}
                </div>

                {/* Search and Filter */}
                <div className="flex gap-4">
                  <div className="flex-1 relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Search employees..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                  </div>
                  <select
                    value={departmentFilter}
                    onChange={(e) => setDepartmentFilter(e.target.value)}
                    className="px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  >
                    <option value="">All Departments</option>
                    {departments.map(dept => (
                      <option key={dept} value={dept}>{dept}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Table */}
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50 border-b border-gray-100">
                    <tr>
                      <th className="w-12 px-6 py-3">
                        <input
                          type="checkbox"
                          checked={filteredEmployees.length > 0 && selectedEmployees.length === filteredEmployees.length}
                          onChange={(e) => handleSelectAll(e.target.checked)}
                          className="w-4 h-4 rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                        />
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Employee Name</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Employee ID</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Department</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Designation</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Date of Joining</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Reporting Manager</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {filteredEmployees.map((employee) => (
                      <tr key={employee.id} className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4">
                          <input
                            type="checkbox"
                            checked={selectedEmployees.includes(employee.id)}
                            onChange={(e) => handleSelectEmployee(employee.id, e.target.checked)}
                            className="w-4 h-4 rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                          />
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                              <span className="text-white font-medium text-sm">
                                {employee.name.split(' ').map(n => n[0]).join('')}
                              </span>
                            </div>
                            <span className="text-sm font-medium text-gray-900">{employee.name}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span className="text-sm text-gray-700">{employee.employeeId}</span>
                        </td>
                        <td className="px-6 py-4">
                          <span className="text-sm text-gray-700">{employee.department}</span>
                        </td>
                        <td className="px-6 py-4">
                          <span className="text-sm text-gray-700">{employee.designation}</span>
                        </td>
                        <td className="px-6 py-4">
                          <span className="text-sm text-gray-700">{new Date(employee.dateOfJoining).toLocaleDateString()}</span>
                        </td>
                        <td className="px-6 py-4">
                          <span className="text-sm text-gray-700">{employee.reportingManager}</span>
                        </td>
                        <td className="px-6 py-4">
                          <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${getStatusColor(employee.status)}`}>
                            {employee.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {filteredEmployees.length === 0 && (
                <div className="px-6 py-12 text-center">
                  <p className="text-sm text-gray-500">No employees found matching your criteria</p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Sticky Bottom Actions */}
      <div className="sticky bottom-0 bg-white border-t border-gray-200 px-8 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="text-sm text-gray-600">
            {showEligibleEmployees && (
              <span>{selectedEmployees.length} employee{selectedEmployees.length !== 1 ? 's' : ''} selected</span>
            )}
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate('/appraisal/cycles')}
              className="px-6 py-2.5 bg-white border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleSaveDraft}
              className="px-6 py-2.5 bg-white border border-gray-200 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors"
            >
              Save Draft
            </button>
            <button
              onClick={handleCreateCycle}
              disabled={selectedEmployees.length === 0}
              className="px-6 py-2.5 bg-purple-600 text-white rounded-lg text-sm font-medium hover:bg-purple-700 shadow-lg shadow-purple-500/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Create Cycle
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
