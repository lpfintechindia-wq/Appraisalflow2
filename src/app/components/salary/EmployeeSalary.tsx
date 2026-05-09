import { useState } from 'react';
import { Search, Filter, Plus, Eye, Edit2, Trash2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface EmployeeSalary {
  id: string;
  employeeName: string;
  employeeId: string;
  department: string;
  location: string;
  salaryStructure: string;
  monthlySalary: number;
  ctc: number;
  status: 'Active' | 'Pending' | 'Inactive';
}

const mockEmployees: EmployeeSalary[] = [
  {
    id: '1',
    employeeName: 'Rahul Verma',
    employeeId: 'EMP001',
    department: 'Engineering',
    location: 'Bangalore',
    salaryStructure: 'Standard CTC Structure',
    monthlySalary: 85000,
    ctc: 1200000,
    status: 'Active',
  },
  {
    id: '2',
    employeeName: 'Ananya Iyer',
    employeeId: 'EMP002',
    department: 'Marketing',
    location: 'Mumbai',
    salaryStructure: 'Senior Executive Package',
    monthlySalary: 120000,
    ctc: 1800000,
    status: 'Active',
  },
  {
    id: '3',
    employeeName: 'Karan Malhotra',
    employeeId: 'EMP003',
    department: 'Sales',
    location: 'Delhi',
    salaryStructure: 'Standard CTC Structure',
    monthlySalary: 75000,
    ctc: 1000000,
    status: 'Active',
  },
  {
    id: '4',
    employeeName: 'Deepika Nair',
    employeeId: 'EMP004',
    department: 'HR',
    location: 'Bangalore',
    salaryStructure: 'Senior Executive Package',
    monthlySalary: 95000,
    ctc: 1400000,
    status: 'Pending',
  },
];

export function EmployeeSalary() {
  const navigate = useNavigate();
  const [employees, setEmployees] = useState<EmployeeSalary[]>(mockEmployees);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterDepartment, setFilterDepartment] = useState<string>('all');
  const [filterLocation, setFilterLocation] = useState<string>('all');

  const filteredEmployees = employees.filter((emp) => {
    const matchesSearch =
      emp.employeeName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      emp.employeeId.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDept = filterDepartment === 'all' || emp.department === filterDepartment;
    const matchesLocation = filterLocation === 'all' || emp.location === filterLocation;
    return matchesSearch && matchesDept && matchesLocation;
  });

  const departments = Array.from(new Set(employees.map((e) => e.department)));
  const locations = Array.from(new Set(employees.map((e) => e.location)));

  return (
    <div className="p-6">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-900 mb-2">Employee Salary</h2>
        <p className="text-sm text-gray-600">Manage employee salary assignments and view salary details</p>
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
                placeholder="Search employees..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Department Filter */}
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-gray-500" />
              <select
                value={filterDepartment}
                onChange={(e) => setFilterDepartment(e.target.value)}
                className="px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">All Departments</option>
                {departments.map((dept) => (
                  <option key={dept} value={dept}>
                    {dept}
                  </option>
                ))}
              </select>
            </div>

            {/* Location Filter */}
            <select
              value={filterLocation}
              onChange={(e) => setFilterLocation(e.target.value)}
              className="px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">All Locations</option>
              {locations.map((loc) => (
                <option key={loc} value={loc}>
                  {loc}
                </option>
              ))}
            </select>
          </div>

          {/* Assign Salary Button */}
          <button
            onClick={() => navigate('/salary/employee/assign')}
            className="flex items-center gap-2 px-4 py-2 bg-[#2563eb] text-white rounded-lg hover:bg-[#1d4ed8] transition-colors"
          >
            <Plus className="w-4 h-4" />
            <span className="text-sm font-medium">Assign Salary</span>
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        <div className="bg-white rounded-xl border border-gray-200 p-4">
          <div className="text-sm text-gray-600 mb-1">Total Employees</div>
          <div className="text-2xl font-semibold text-gray-900">{employees.length}</div>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-4">
          <div className="text-sm text-gray-600 mb-1">Active Salaries</div>
          <div className="text-2xl font-semibold text-green-600">
            {employees.filter((e) => e.status === 'Active').length}
          </div>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-4">
          <div className="text-sm text-gray-600 mb-1">Avg Monthly Salary</div>
          <div className="text-2xl font-semibold text-blue-600">
            ₹{Math.round(employees.reduce((sum, e) => sum + e.monthlySalary, 0) / employees.length).toLocaleString()}
          </div>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-4">
          <div className="text-sm text-gray-600 mb-1">Total Monthly Payout</div>
          <div className="text-2xl font-semibold text-indigo-600">
            ₹{employees.reduce((sum, e) => sum + e.monthlySalary, 0).toLocaleString()}
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Employee
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Department
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Salary Structure
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Monthly Salary
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Annual CTC
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {filteredEmployees.map((employee) => (
              <tr key={employee.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4">
                  <div>
                    <div className="text-sm font-medium text-gray-900">{employee.employeeName}</div>
                    <div className="text-xs text-gray-500">{employee.employeeId}</div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div>
                    <div className="text-sm text-gray-900">{employee.department}</div>
                    <div className="text-xs text-gray-500">{employee.location}</div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm text-gray-600">{employee.salaryStructure}</div>
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm font-medium text-gray-900">₹{employee.monthlySalary.toLocaleString()}</div>
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm font-medium text-gray-900">₹{employee.ctc.toLocaleString()}</div>
                </td>
                <td className="px-6 py-4">
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium ${
                      employee.status === 'Active'
                        ? 'bg-green-50 text-green-700'
                        : employee.status === 'Pending'
                        ? 'bg-yellow-50 text-yellow-700'
                        : 'bg-gray-50 text-gray-700'
                    }`}
                  >
                    {employee.status}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center justify-end gap-2">
                    <button
                      onClick={() => navigate(`/salary/employee/view/${employee.id}`)}
                      className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                      title="View Details"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => navigate(`/salary/employee/edit/${employee.id}`)}
                      className="p-2 text-gray-600 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors"
                      title="Edit Salary"
                    >
                      <Edit2 className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => {
                        if (confirm(`Are you sure you want to delete salary for ${employee.employeeName}?`)) {
                          setEmployees(employees.filter(e => e.id !== employee.id));
                        }
                      }}
                      className="p-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                      title="Delete Salary"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
