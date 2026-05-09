import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export function ReturnAsset() {
  const navigate = useNavigate();
  const { assetId } = useParams();

  // Mock asset data
  const assetData = {
    id: assetId || '1',
    assetId: 'AST-LP-001',
    assetName: 'Dell Latitude 7420',
    serialNumber: 'DL7420X2023001',
    assignedTo: 'Rajesh Kumar',
    employeeId: 'EMP001',
    assignedDate: '2024-01-15',
    imageUrl: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=400&h=300&fit=crop'
  };

  const [remarks, setRemarks] = useState('');
  const [returnDate, setReturnDate] = useState(new Date().toISOString().split('T')[0]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Returning asset:', {
      assetId: assetData.assetId,
      remarks,
      returnDate
    });
    // Here you would typically submit to an API
    navigate(`/employees/assets/${assetData.employeeId}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="px-8 py-6">
          <button
            onClick={() => navigate(`/employees/assets/${assetData.employeeId}`)}
            className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 mb-4 transition-colors font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Employee Assets
          </button>
          <h1 className="text-3xl font-bold text-gray-900">Return Asset</h1>
          <p className="text-sm text-gray-600 mt-1">Record asset return and condition check</p>
        </div>
      </div>

      <div className="px-8 py-8">
        <div className="max-w-4xl mx-auto">
          <form onSubmit={handleSubmit}>
            {/* Asset Information */}
            <div className="bg-white rounded-2xl p-6 mb-6 border border-gray-200 shadow-sm">
              <h2 className="text-xl font-bold text-gray-900 mb-5">Asset Information</h2>
              <div className="flex gap-6">
                <img
                  src={assetData.imageUrl}
                  alt={assetData.assetName}
                  className="w-32 h-32 object-cover rounded-xl border-2 border-gray-200"
                />
                <div className="flex-1 grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs font-medium text-gray-500 mb-1">Asset Name</p>
                    <p className="text-sm font-bold text-gray-900">{assetData.assetName}</p>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-gray-500 mb-1">Asset ID</p>
                    <p className="text-sm font-semibold text-gray-900">{assetData.assetId}</p>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-gray-500 mb-1">Serial Number</p>
                    <p className="text-sm font-mono text-gray-900">{assetData.serialNumber}</p>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-gray-500 mb-1">Assigned To</p>
                    <p className="text-sm font-semibold text-gray-900">{assetData.assignedTo}</p>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-gray-500 mb-1">Assigned Date</p>
                    <p className="text-sm text-gray-900">
                      {new Date(assetData.assignedDate).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' })}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Return Details */}
            <div className="bg-white rounded-2xl p-6 mb-6 border border-gray-200 shadow-sm">
              <h2 className="text-xl font-bold text-gray-900 mb-5">Return Details</h2>
              <div>
                {/* Return Date */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Return Date <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    value={returnDate}
                    onChange={(e) => setReturnDate(e.target.value)}
                    required
                    max={new Date().toISOString().split('T')[0]}
                    className="w-full h-12 px-4 bg-gray-50 border border-gray-300 rounded-xl text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                </div>
              </div>
            </div>

            {/* Additional Remarks */}
            <div className="bg-white rounded-2xl p-6 mb-6 border border-gray-200 shadow-sm">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Additional Remarks</h2>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Remarks (Optional)
                </label>
                <textarea
                  value={remarks}
                  onChange={(e) => setRemarks(e.target.value)}
                  rows={4}
                  placeholder="Add any additional notes or comments about the asset return..."
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl text-sm text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center justify-end gap-4">
              <button
                type="button"
                onClick={() => navigate(`/employees/assets/${assetData.employeeId}`)}
                className="px-6 py-3 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors font-semibold"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all shadow-sm hover:shadow-md font-semibold"
              >
                Confirm Return
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
