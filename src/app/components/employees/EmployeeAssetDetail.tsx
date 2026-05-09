import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, Package, Calendar, AlertCircle, RotateCcw, Eye } from 'lucide-react';

interface AssetDetail {
  id: string;
  assetId: string;
  assetName: string;
  serialNumber: string;
  assignedDate: string;
  status: 'Active' | 'Returned' | 'Damaged' | 'Lost';
  imageUrl: string;
  remarks?: string;
}

interface TimelineEvent {
  id: string;
  action: string;
  date: string;
  time: string;
  description: string;
  type: 'assigned' | 'returned' | 'damaged' | 'repaired';
}

export function EmployeeAssetDetail() {
  const navigate = useNavigate();
  const { employeeId } = useParams();

  // Mock data
  const employeeData = {
    name: 'Rajesh Kumar',
    employeeId: 'EMP001',
    email: 'rajesh.kumar@company.com',
    department: 'Engineering',
    designation: 'Senior Software Engineer',
  };

  const assignedAssets: AssetDetail[] = [
    {
      id: '1',
      assetId: 'AST-LP-001',
      assetName: 'Dell Latitude 7420',
      serialNumber: 'DL7420X2023001',
      assignedDate: '2024-01-15',
      status: 'Active',
      imageUrl: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=400&h=300&fit=crop',
      remarks: 'Brand new laptop with Windows 11 Pro'
    },
    {
      id: '2',
      assetId: 'AST-PH-012',
      assetName: 'iPhone 14 Pro',
      serialNumber: 'IP14PRO2023089',
      assignedDate: '2024-02-01',
      status: 'Active',
      imageUrl: 'https://images.unsplash.com/photo-1678685888221-cda773a3dcdb?w=400&h=300&fit=crop',
      remarks: 'Company SIM included'
    },
    {
      id: '3',
      assetId: 'AST-MN-034',
      assetName: 'Dell UltraSharp 27"',
      serialNumber: 'DUSP27X2023156',
      assignedDate: '2024-01-20',
      status: 'Active',
      imageUrl: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400&h=300&fit=crop'
    }
  ];

  const timeline: TimelineEvent[] = [
    {
      id: '1',
      action: 'Asset Assigned',
      date: '15 Jan 2024',
      time: '10:30 AM',
      description: 'Dell Latitude 7420 (AST-LP-001) assigned to employee',
      type: 'assigned'
    },
    {
      id: '2',
      action: 'Asset Assigned',
      date: '20 Jan 2024',
      time: '2:15 PM',
      description: 'Dell UltraSharp 27" (AST-MN-034) assigned to employee',
      type: 'assigned'
    },
    {
      id: '3',
      action: 'Asset Assigned',
      date: '01 Feb 2024',
      time: '11:00 AM',
      description: 'iPhone 14 Pro (AST-PH-012) assigned to employee',
      type: 'assigned'
    }
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

  const getTimelineIcon = (type: string) => {
    switch (type) {
      case 'assigned':
        return 'bg-blue-100 text-blue-600';
      case 'returned':
        return 'bg-green-100 text-green-600';
      case 'damaged':
        return 'bg-orange-100 text-orange-600';
      case 'repaired':
        return 'bg-purple-100 text-purple-600';
      default:
        return 'bg-gray-100 text-gray-600';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="px-8 py-6">
          <button
            onClick={() => navigate('/employees/assets')}
            className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 mb-4 transition-colors font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Asset Management
          </button>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                {employeeData.name}
              </h1>
              <div className="flex items-center gap-4 mt-2">
                <p className="text-sm text-gray-600">{employeeData.employeeId}</p>
                <span className="text-gray-300">•</span>
                <p className="text-sm text-gray-600">{employeeData.designation}</p>
                <span className="text-gray-300">•</span>
                <p className="text-sm text-gray-600">{employeeData.department}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-8 py-8">
        <div className="grid grid-cols-3 gap-8">
          {/* Left Column - Assets */}
          <div className="col-span-2 space-y-6">
            {/* Summary Cards */}
            <div className="grid grid-cols-3 gap-5">
              <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center">
                    <Package className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-600">Total Assets</p>
                    <p className="text-2xl font-bold text-gray-900">{assignedAssets.length}</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center">
                    <Package className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-600">Active</p>
                    <p className="text-2xl font-bold text-emerald-600">
                      {assignedAssets.filter(a => a.status === 'Active').length}
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center">
                    <Package className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-600">Returned</p>
                    <p className="text-2xl font-bold text-blue-600">
                      {assignedAssets.filter(a => a.status === 'Returned').length}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Assets List */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm">
              <div className="px-6 py-5 border-b border-gray-200">
                <h2 className="text-xl font-bold text-gray-900">Assigned Assets</h2>
              </div>
              <div className="p-6 space-y-4">
                {assignedAssets.map((asset) => (
                  <div
                    key={asset.id}
                    className="flex gap-4 p-5 bg-gray-50 rounded-xl border border-gray-200 hover:shadow-md transition-all"
                  >
                    {/* Asset Image */}
                    <div className="flex-shrink-0">
                      <img
                        src={asset.imageUrl}
                        alt={asset.assetName}
                        className="w-28 h-28 object-cover rounded-xl border-2 border-white shadow-sm"
                      />
                    </div>

                    {/* Asset Details */}
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="text-lg font-bold text-gray-900 mb-1">{asset.assetName}</h3>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className={`px-3 py-1.5 rounded-lg text-xs font-semibold border ${getStatusColor(asset.status)}`}>
                            {asset.status}
                          </span>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4 mb-3">
                        <div>
                          <p className="text-xs font-medium text-gray-500 mb-1">Asset ID</p>
                          <p className="text-sm font-semibold text-gray-900">{asset.assetId}</p>
                        </div>
                        <div>
                          <p className="text-xs font-medium text-gray-500 mb-1">Serial Number</p>
                          <p className="text-sm font-mono text-gray-900">{asset.serialNumber}</p>
                        </div>
                        <div>
                          <p className="text-xs font-medium text-gray-500 mb-1">Assigned Date</p>
                          <p className="text-sm text-gray-900">
                            {new Date(asset.assignedDate).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' })}
                          </p>
                        </div>
                      </div>

                      {asset.remarks && (
                        <div className="mb-3">
                          <p className="text-xs font-medium text-gray-500 mb-1">Remarks</p>
                          <p className="text-sm text-gray-700">{asset.remarks}</p>
                        </div>
                      )}

                      {asset.status === 'Active' && (
                        <button
                          onClick={() => navigate(`/employees/assets/return/${asset.id}`)}
                          className="flex items-center gap-2 px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors text-sm font-semibold"
                        >
                          <RotateCcw className="w-4 h-4" />
                          Return Asset
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Timeline & Employee Info */}
          <div className="space-y-6">
            {/* Employee Info Card */}
            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm sticky top-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Employee Information</h3>
              <div className="space-y-3">
                <div>
                  <p className="text-xs font-medium text-gray-500 mb-1">Name</p>
                  <p className="text-sm font-semibold text-gray-900">{employeeData.name}</p>
                </div>
                <div>
                  <p className="text-xs font-medium text-gray-500 mb-1">Employee ID</p>
                  <p className="text-sm font-semibold text-gray-900">{employeeData.employeeId}</p>
                </div>
                <div>
                  <p className="text-xs font-medium text-gray-500 mb-1">Email</p>
                  <p className="text-sm text-gray-700">{employeeData.email}</p>
                </div>
                <div>
                  <p className="text-xs font-medium text-gray-500 mb-1">Department</p>
                  <p className="text-sm font-semibold text-gray-900">{employeeData.department}</p>
                </div>
                <div>
                  <p className="text-xs font-medium text-gray-500 mb-1">Designation</p>
                  <p className="text-sm font-semibold text-gray-900">{employeeData.designation}</p>
                </div>
              </div>
            </div>

            {/* Timeline */}
            
          </div>
        </div>
      </div>
    </div>
  );
}
