import React, { useState } from 'react';
import { Search, Download, Plus, Eye, Edit, Trash2 } from 'lucide-react';

interface Employee {
  id: string;
  employeeId: string;
  name: string;
  email: string;
  department: string;
  designation: string;
  reportingManager: string;
  dateOfJoining: string;
  employmentType: string;
  status: 'Active' | 'Pending' | 'Inactive';
  location: string;
}

export function AllEmployees() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterDepartment, setFilterDepartment] = useState('');
  const [filterStatus, setFilterStatus] = useState('');

  const employees: Employee[] = [
    { id: '1', employeeId: 'EMP001', name: 'Rajesh Kumar', email: 'rajesh.kumar@company.com', department: 'Engineering', designation: 'Senior Software Engineer', reportingManager: 'Amit Sharma', dateOfJoining: '2022-01-15', employmentType: 'Full-time', status: 'Active', location: 'Mumbai' },
    { id: '2', employeeId: 'EMP002', name: 'Priya Patel', email: 'priya.patel@company.com', department: 'Product', designation: 'Product Manager', reportingManager: 'Sneha Reddy', dateOfJoining: '2021-08-22', employmentType: 'Full-time', status: 'Active', location: 'Bangalore' },
    { id: '3', employeeId: 'EMP003', name: 'Amit Singh', email: 'amit.singh@company.com', department: 'Design', designation: 'UI/UX Designer', reportingManager: 'Kavita Jain', dateOfJoining: '2023-03-10', employmentType: 'Contract', status: 'Active', location: 'Delhi' },
    { id: '4', employeeId: 'EMP004', name: 'Sneha Gupta', email: 'sneha.gupta@company.com', department: 'HR', designation: 'HR Manager', reportingManager: 'Vikram Mehta', dateOfJoining: '2020-05-18', employmentType: 'Full-time', status: 'Active', location: 'Mumbai' },
    { id: '5', employeeId: 'EMP005', name: 'Vikram Shah', email: 'vikram.shah@company.com', department: 'Sales', designation: 'Sales Executive', reportingManager: 'Rohit Verma', dateOfJoining: '2023-09-05', employmentType: 'Part-time', status: 'Pending', location: 'Pune' },
    { id: '6', employeeId: 'EMP006', name: 'Anjali Desai', email: 'anjali.desai@company.com', department: 'Engineering', designation: 'Frontend Developer', reportingManager: 'Amit Sharma', dateOfJoining: '2022-11-20', employmentType: 'Full-time', status: 'Active', location: 'Bangalore' },
    { id: '7', employeeId: 'EMP007', name: 'Rahul Nair', email: 'rahul.nair@company.com', department: 'Marketing', designation: 'Marketing Lead', reportingManager: 'Priya Singh', dateOfJoining: '2021-02-14', employmentType: 'Full-time', status: 'Inactive', location: 'Chennai' },
    { id: '8', employeeId: 'EMP008', name: 'Kavita Rao', email: 'kavita.rao@company.com', department: 'Finance', designation: 'Financial Analyst', reportingManager: 'Suresh Kumar', dateOfJoining: '2023-06-01', employmentType: 'Intern', status: 'Active', location: 'Hyderabad' },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active':
        return 'bg-green-100 text-green-700 border-green-200';
      case 'Pending':
        return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      case 'Inactive':
        return 'bg-gray-100 text-gray-700 border-gray-200';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  return (
    <div className="p-6 bg-[#f8f8f8] min-h-full">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-[#131313] mb-2">All Employees</h1>
        <p className="text-sm text-gray-600">View and manage all employee information</p>
      </div>

      {/* Actions Bar */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-[13px] h-[13px] text-[#6f7987]" />
            <input
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-[240px] h-[40px] pl-10 pr-4 bg-[#fdfdfd] border border-[#c5cbd3] rounded-lg text-[14px] text-[#6f7987] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <select
            value={filterDepartment}
            onChange={(e) => setFilterDepartment(e.target.value)}
            className="h-[40px] px-[20px] py-[8px] border border-[#c5cbd3] rounded-lg text-[14px] text-[#1c1e21] focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">All Departments</option>
            <option value="engineering">Engineering</option>
            <option value="product">Product</option>
            <option value="design">Design</option>
            <option value="hr">HR</option>
            <option value="sales">Sales</option>
            <option value="marketing">Marketing</option>
            <option value="finance">Finance</option>
          </select>
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="h-[40px] px-[20px] py-[8px] border border-[#c5cbd3] rounded-lg text-[14px] text-[#1c1e21] focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">All Status</option>
            <option value="active">Active</option>
            <option value="pending">Pending</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>
        <button className="flex items-center gap-2 h-[40px] px-[20px] py-[8px] bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-[14px] font-medium">
          <Plus className="w-4 h-4" />
          Add Employee
        </button>
      </div>

      {/* Table */}
      <div className="bg-white border border-[#e8ceff] rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-[#f6f6f6]">
                <th className="px-[20px] py-[14px] text-left text-[16px] font-normal text-[#6f7987] border-b border-[#e8ceff]">Employee ID</th>
                <th className="px-[20px] py-[14px] text-left text-[16px] font-normal text-[#6f7987] border-b border-[#e8ceff]">Employee Name</th>
                <th className="px-[20px] py-[14px] text-left text-[16px] font-normal text-[#6f7987] border-b border-[#e8ceff]">Email</th>
                <th className="px-[20px] py-[14px] text-left text-[16px] font-normal text-[#6f7987] border-b border-[#e8ceff]">Department</th>
                <th className="px-[20px] py-[14px] text-left text-[16px] font-normal text-[#6f7987] border-b border-[#e8ceff]">Designation</th>
                <th className="px-[20px] py-[14px] text-left text-[16px] font-normal text-[#6f7987] border-b border-[#e8ceff]">Date of Joining</th>
                <th className="px-[20px] py-[14px] text-left text-[16px] font-normal text-[#6f7987] border-b border-[#e8ceff]">Status</th>
                <th className="px-[20px] py-[14px] text-left text-[16px] font-normal text-[#6f7987] border-b border-[#e8ceff]">Action</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {employees.map((employee) => (
                <tr key={employee.id} className="h-[48px] hover:bg-[#f9f9f9] transition-colors">
                  <td className="px-[20px] py-[12px] text-[16px] font-normal text-[#141518] border-b border-[#e8ceff]">{employee.employeeId}</td>
                  <td className="px-[20px] py-[12px] text-[16px] font-normal text-[#141518] border-b border-[#e8ceff]">{employee.name}</td>
                  <td className="px-[20px] py-[12px] text-[16px] font-normal text-[#141518] border-b border-[#e8ceff]">{employee.email}</td>
                  <td className="px-[20px] py-[12px] text-[16px] font-normal text-[#141518] border-b border-[#e8ceff]">{employee.department}</td>
                  <td className="px-[20px] py-[12px] text-[16px] font-normal text-[#141518] border-b border-[#e8ceff]">{employee.designation}</td>
                  <td className="px-[20px] py-[12px] text-[16px] font-normal text-[#141518] border-b border-[#e8ceff]">
                    {new Date(employee.dateOfJoining).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' })}
                  </td>
                  <td className="px-[20px] py-[12px] border-b border-[#e8ceff]">
                    <span className={`px-3 py-1 rounded-full text-[14px] font-medium border ${getStatusColor(employee.status)}`}>
                      {employee.status}
                    </span>
                  </td>
                  <td className="px-[20px] py-[12px] border-b border-[#e8ceff]">
                    <div className="flex items-center gap-2">
                      <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors" title="View Details">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors" title="Edit">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors" title="Delete">
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

      {/* Pagination */}
      <div className="flex items-center justify-between mt-6">
        <button className="flex items-center gap-[11px] h-[40px] px-[20px] py-[8px] border border-[#c5cbd3] text-[#1c1e21] rounded-lg hover:bg-gray-50 transition-colors text-[14px] font-medium">
          <Download className="w-4 h-4" />
          Download CSV
        </button>
        <div className="flex items-center gap-[32px]">
          <button className="px-[9px] py-[5px] border border-[#e1e1e1] text-[#8d96a3] rounded-[7px] hover:bg-gray-50 transition-colors text-[14px] font-medium">
            Prev
          </button>
          <div className="flex items-center gap-[7px]">
            <button className="bg-blue-600 size-[32px] p-[10px] rounded-[4px] text-white text-[14px] font-medium flex items-center justify-center">1</button>
            <button className="size-[32px] p-[10px] rounded-[4px] text-[#8d96a3] text-[14px] font-medium flex items-center justify-center hover:bg-gray-50 transition-colors">2</button>
            <button className="size-[32px] p-[10px] rounded-[4px] text-[#8d96a3] text-[14px] font-medium flex items-center justify-center hover:bg-gray-50 transition-colors">3</button>
          </div>
          <button className="px-[9px] py-[5px] border border-[#e1e1e1] text-[#414141] rounded-[7px] hover:bg-gray-50 transition-colors text-[14px] font-medium">
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
