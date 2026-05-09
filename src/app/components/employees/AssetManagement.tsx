import React, { useState } from 'react';
import { Search, Download, Plus, Eye, Package, RotateCcw } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface Asset {
  id: string;
  assetId: string;
  assetName: string;
  serialNumber: string;
  assignedTo: string;
  employeeId: string;
  department: string;
  assignedDate: string;
  status: 'Active' | 'Returned' | 'Damaged' | 'Lost';
  location: string;
  imageUrl?: string;
}

export function AssetManagement() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [filterDepartment, setFilterDepartment] = useState('');
  const [filterDesignation, setFilterDesignation] = useState('');
  const [filterStatus, setFilterStatus] = useState('');

  const assets: Asset[] = [
    { id: '1', assetId: 'AST-LP-001', assetName: 'Dell Latitude 7420', serialNumber: 'DL7420X2023001', assignedTo: 'Rajesh Kumar', employeeId: 'EMP001', department: 'Engineering', assignedDate: '2024-01-15', status: 'Active', location: 'Mumbai' },
    { id: '2', assetId: 'AST-PH-002', assetName: 'iPhone 14 Pro', serialNumber: 'IP14PRO2023045', assignedTo: 'Priya Patel', employeeId: 'EMP002', department: 'Product', assignedDate: '2024-02-10', status: 'Active', location: 'Bangalore' },
    { id: '3', assetId: 'AST-LP-003', assetName: 'MacBook Pro 16"', serialNumber: 'MBP16M2023078', assignedTo: 'Amit Singh', employeeId: 'EMP003', department: 'Design', assignedDate: '2024-01-20', status: 'Active', location: 'Delhi' },
    { id: '4', assetId: 'AST-MN-004', assetName: 'LG UltraWide 34"', serialNumber: 'LGUW34202389', assignedTo: 'Sneha Gupta', employeeId: 'EMP004', department: 'HR', assignedDate: '2023-11-05', status: 'Active', location: 'Mumbai' },
    { id: '5', assetId: 'AST-PH-005', assetName: 'Samsung Galaxy S23', serialNumber: 'SGS23UL2023156', assignedTo: 'Vikram Shah', employeeId: 'EMP005', department: 'Sales', assignedDate: '2024-03-01', status: 'Damaged', location: 'Pune' },
    { id: '6', assetId: 'AST-HP-006', assetName: 'Sony WH-1000XM5', serialNumber: 'SWH1000XM5789', assignedTo: 'Anjali Desai', employeeId: 'EMP006', department: 'Engineering', assignedDate: '2023-12-15', status: 'Returned', location: 'Bangalore' },
    { id: '7', assetId: 'AST-LP-007', assetName: 'HP EliteBook 840', serialNumber: 'HPEB8402023234', assignedTo: 'Rahul Nair', employeeId: 'EMP007', department: 'Marketing', assignedDate: '2023-09-10', status: 'Lost', location: 'Chennai' },
    { id: '8', assetId: 'AST-TB-008', assetName: 'iPad Pro 12.9"', serialNumber: 'IPP129M22023567', assignedTo: 'Kavita Rao', employeeId: 'EMP008', department: 'Finance', assignedDate: '2024-02-20', status: 'Active', location: 'Hyderabad' },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active':
        return 'bg-emerald-50 text-emerald-700 border-emerald-200';
      case 'Returned':
        return 'bg-blue-50 text-blue-700 border-blue-200';
      case 'Damaged':
        return 'bg-orange-50 text-orange-700 border-orange-200';
      case 'Lost':
        return 'bg-red-50 text-red-700 border-red-200';
      default:
        return 'bg-gray-50 text-gray-700 border-gray-200';
    }
  };

  const totalAssets = assets.length;
  const activeAssets = assets.filter(a => a.status === 'Active').length;
  const returnedAssets = assets.filter(a => a.status === 'Returned').length;
  const damagedAssets = assets.filter(a => a.status === 'Damaged').length;
  const lostAssets = assets.filter(a => a.status === 'Lost').length;

  return (
    <div className="p-8 bg-gray-50 min-h-full">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-2">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Asset Management</h1>
            <p className="text-sm text-gray-600 mt-1">Track and manage all company assets assigned to employees</p>
          </div>
          <button
            onClick={() => navigate('/employees/assets/assign')}
            className="flex items-center gap-2 px-5 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all shadow-sm hover:shadow-md font-semibold"
          >
            <Plus className="w-5 h-5" />
            Assign Asset
          </button>
        </div>
      </div>

      {/* Summary Cards */}
      

      {/* Filters */}
      <div className="bg-white rounded-2xl p-6 mb-6 border border-gray-200 shadow-sm">
        <div className="grid grid-cols-4 gap-4">
          {/* Search */}
          <div className="col-span-2">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Search
            </label>
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search by asset name, ID, or employee..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full h-12 pl-12 pr-4 bg-gray-50 border border-gray-300 rounded-xl text-sm text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />
            </div>
          </div>

          {/* Department */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Department
            </label>
            <select
              value={filterDepartment}
              onChange={(e) => setFilterDepartment(e.target.value)}
              className="w-full h-12 px-4 bg-gray-50 border border-gray-300 rounded-xl text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
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
          </div>

          {/* Status */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Status
            </label>
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="w-full h-12 px-4 bg-gray-50 border border-gray-300 rounded-xl text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            >
              <option value="">All Status</option>
              <option value="active">Active</option>
              <option value="returned">Returned</option>
              <option value="damaged">Damaged</option>
              <option value="lost">Lost</option>
            </select>
          </div>
        </div>
      </div>

      {/* Assets Table */}
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Assigned To</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Asset Name</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Serial Number</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Department</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Assigned Date</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Status</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Action</th>
              </tr>
            </thead>
            <tbody>
              {assets.map((asset, index) => (
                <tr
                  key={asset.id}
                  className={`border-b border-gray-100 hover:bg-gray-50 transition-colors ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50/30'}`}
                >
                  <td className="px-6 py-4">
                    <div>
                      <p className="text-sm font-medium text-gray-900">{asset.assignedTo}</p>
                      <p className="text-xs text-gray-500">{asset.employeeId}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-sm font-semibold text-gray-900">{asset.assetName}</p>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm text-gray-600 font-mono">{asset.serialNumber}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm text-gray-700">{asset.department}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm text-gray-700">
                      {new Date(asset.assignedDate).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' })}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex px-3 py-1.5 rounded-lg text-xs font-semibold border ${getStatusColor(asset.status)}`}>
                      {asset.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      {asset.status === 'Active' && (
                        <button
                          onClick={() => navigate(`/employees/assets/return/${asset.id}`)}
                          className="flex items-center gap-1 px-3 py-1.5 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors text-xs font-semibold"
                          title="Return Asset"
                        >
                          <RotateCcw className="w-3.5 h-3.5" />
                          Return
                        </button>
                      )}
                      <button
                        onClick={() => navigate(`/employees/assets/${asset.employeeId}`)}
                        className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                        title="View Details"
                      >
                        <Eye className="w-5 h-5" />
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
        <button className="flex items-center gap-2 px-5 py-3 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors font-semibold">
          <Download className="w-4 h-4" />
          Export Report
        </button>
        <div className="flex items-center gap-2">
          <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium">
            Previous
          </button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium">1</button>
          <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium">2</button>
          <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium">3</button>
          <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium">
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
