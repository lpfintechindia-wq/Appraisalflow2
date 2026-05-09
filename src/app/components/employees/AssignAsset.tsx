import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Plus, Trash2, Upload, X } from 'lucide-react';

interface AssetForm {
  id: string;
  assetName: string;
  serialNumber: string;
  assignedDate: string;
  imageFile: File | null;
  imagePreview: string;
  remarks: string;
}

export function AssignAsset() {
  const navigate = useNavigate();
  const [selectedEmployee, setSelectedEmployee] = useState('');
  const [assets, setAssets] = useState<AssetForm[]>([
    {
      id: '1',
      assetName: '',
      serialNumber: '',
      assignedDate: new Date().toISOString().split('T')[0],
      imageFile: null,
      imagePreview: '',
      remarks: ''
    }
  ]);

  const handleAddAsset = () => {
    const newAsset: AssetForm = {
      id: Date.now().toString(),
      assetName: '',
      serialNumber: '',
      assignedDate: new Date().toISOString().split('T')[0],
      imageFile: null,
      imagePreview: '',
      remarks: ''
    };
    setAssets([...assets, newAsset]);
  };

  const handleRemoveAsset = (id: string) => {
    if (assets.length > 1) {
      setAssets(assets.filter(asset => asset.id !== id));
    }
  };

  const handleAssetChange = (id: string, field: keyof AssetForm, value: any) => {
    setAssets(assets.map(asset =>
      asset.id === id ? { ...asset, [field]: value } : asset
    ));
  };

  const handleImageUpload = (id: string, file: File) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      setAssets(assets.map(asset =>
        asset.id === id
          ? { ...asset, imageFile: file, imagePreview: reader.result as string }
          : asset
      ));
    };
    reader.readAsDataURL(file);
  };

  const handleRemoveImage = (id: string) => {
    setAssets(assets.map(asset =>
      asset.id === id
        ? { ...asset, imageFile: null, imagePreview: '' }
        : asset
    ));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Submitting assets:', { selectedEmployee, assets });
    // Here you would typically submit to an API
    navigate('/employees/assets');
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
          <h1 className="text-3xl font-bold text-gray-900">Assign Assets to Employee</h1>
          <p className="text-sm text-gray-600 mt-1">Assign one or multiple assets to an employee</p>
        </div>
      </div>

      <div className="px-8 py-8">
        <form onSubmit={handleSubmit}>
          {/* Employee Selection */}
          <div className="bg-white rounded-2xl p-6 mb-6 border border-gray-200 shadow-sm">
            <h2 className="text-xl font-bold text-gray-900 mb-5">Select Employee</h2>
            <div className="grid grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Employee <span className="text-red-500">*</span>
                </label>
                <select
                  value={selectedEmployee}
                  onChange={(e) => setSelectedEmployee(e.target.value)}
                  required
                  className="w-full h-12 px-4 bg-gray-50 border border-gray-300 rounded-xl text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                >
                  <option value="">Select an employee</option>
                  <option value="EMP001">Rajesh Kumar (EMP001) - Engineering</option>
                  <option value="EMP002">Priya Patel (EMP002) - Product</option>
                  <option value="EMP003">Amit Singh (EMP003) - Design</option>
                  <option value="EMP004">Sneha Gupta (EMP004) - HR</option>
                  <option value="EMP005">Vikram Shah (EMP005) - Sales</option>
                </select>
              </div>
            </div>
          </div>

          {/* Assets Forms */}
          {assets.map((asset, index) => (
            <div key={asset.id} className="bg-white rounded-2xl p-6 mb-6 border border-gray-200 shadow-sm">
              <div className="flex items-center justify-between mb-5">
                <h2 className="text-xl font-bold text-gray-900">Asset {index + 1}</h2>
                {assets.length > 1 && (
                  <button
                    type="button"
                    onClick={() => handleRemoveAsset(asset.id)}
                    className="flex items-center gap-2 px-4 py-2 text-red-600 hover:bg-red-50 rounded-xl transition-colors font-semibold"
                  >
                    <Trash2 className="w-4 h-4" />
                    Remove
                  </button>
                )}
              </div>

              <div className="grid grid-cols-3 gap-5 mb-5">
                {/* Asset Name */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Asset Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={asset.assetName}
                    onChange={(e) => handleAssetChange(asset.id, 'assetName', e.target.value)}
                    placeholder="e.g., Dell Latitude 7420"
                    required
                    className="w-full h-12 px-4 bg-gray-50 border border-gray-300 rounded-xl text-sm text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                </div>

                {/* Serial Number */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Serial Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={asset.serialNumber}
                    onChange={(e) => handleAssetChange(asset.id, 'serialNumber', e.target.value)}
                    placeholder="e.g., DL7420X2024001"
                    required
                    className="w-full h-12 px-4 bg-gray-50 border border-gray-300 rounded-xl text-sm text-gray-900 font-mono placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                </div>

                {/* Assigned Date */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Assigned Date <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    value={asset.assignedDate}
                    onChange={(e) => handleAssetChange(asset.id, 'assignedDate', e.target.value)}
                    required
                    max={new Date().toISOString().split('T')[0]}
                    className="w-full h-12 px-4 bg-gray-50 border border-gray-300 rounded-xl text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                </div>
              </div>

              {/* Image Upload */}
              <div className="mb-5">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Asset Image
                </label>
                {!asset.imagePreview ? (
                  <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-blue-400 transition-colors">
                    <input
                      type="file"
                      id={`image-upload-${asset.id}`}
                      accept="image/*"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) handleImageUpload(asset.id, file);
                      }}
                      className="hidden"
                    />
                    <label
                      htmlFor={`image-upload-${asset.id}`}
                      className="cursor-pointer flex flex-col items-center"
                    >
                      <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center mb-3">
                        <Upload className="w-8 h-8 text-blue-600" />
                      </div>
                      <p className="text-sm font-semibold text-gray-900 mb-1">Click to upload asset image</p>
                      <p className="text-xs text-gray-500">PNG, JPG up to 10MB</p>
                    </label>
                  </div>
                ) : (
                  <div className="relative inline-block">
                    <img
                      src={asset.imagePreview}
                      alt="Asset preview"
                      className="w-48 h-48 object-cover rounded-xl border-2 border-gray-200"
                    />
                    <button
                      type="button"
                      onClick={() => handleRemoveImage(asset.id)}
                      className="absolute -top-2 -right-2 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600 transition-colors shadow-lg"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                )}
              </div>

              {/* Remarks */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Remarks (Optional)
                </label>
                <textarea
                  value={asset.remarks}
                  onChange={(e) => handleAssetChange(asset.id, 'remarks', e.target.value)}
                  rows={3}
                  placeholder="Add any additional notes about this asset..."
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl text-sm text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                />
              </div>
            </div>
          ))}

          {/* Add More Asset Button */}
          <button
            type="button"
            onClick={handleAddAsset}
            className="w-full flex items-center justify-center gap-2 py-4 border-2 border-dashed border-gray-300 text-gray-700 rounded-xl hover:border-blue-400 hover:bg-blue-50 hover:text-blue-600 transition-all font-semibold mb-6"
          >
            <Plus className="w-5 h-5" />
            Add More Asset
          </button>

          {/* Action Buttons */}
          <div className="flex items-center justify-end gap-4">
            <button
              type="button"
              onClick={() => navigate('/employees/assets')}
              className="px-6 py-3 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors font-semibold"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all shadow-sm hover:shadow-md font-semibold"
            >
              Assign {assets.length} {assets.length === 1 ? 'Asset' : 'Assets'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
