import React, { useState } from 'react';
import { X, Calendar, AlertCircle } from 'lucide-react';

interface EditLWDModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLWD: string;
  employeeName: string;
  onSave: (newLWD: string, reason: string) => void;
}

export function EditLWDModal({ isOpen, onClose, currentLWD, employeeName, onSave }: EditLWDModalProps) {
  const [newLWD, setNewLWD] = useState(currentLWD);
  const [reason, setReason] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(newLWD, reason);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md mx-4">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
              <Calendar className="w-5 h-5 text-blue-600" />
            </div>
            <h2 className="text-xl font-semibold text-[#131313]">Edit Last Working Day</h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        {/* Content */}
        <form onSubmit={handleSubmit}>
          <div className="p-6 space-y-5">
            {/* Employee Info */}
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="text-sm text-gray-600">Employee</p>
              <p className="text-[16px] font-medium text-[#141518]">{employeeName}</p>
            </div>

            {/* Current LWD */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Current Last Working Day
              </label>
              <input
                type="text"
                value={new Date(currentLWD).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' })}
                disabled
                className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm bg-gray-50 text-gray-500"
              />
            </div>

            {/* New LWD */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                New Last Working Day <span className="text-red-500">*</span>
              </label>
              <input
                type="date"
                value={newLWD}
                onChange={(e) => setNewLWD(e.target.value)}
                required
                className="w-full px-4 py-2.5 border border-[#c5cbd3] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Reason */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Reason for Change <span className="text-red-500">*</span>
              </label>
              <textarea
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                required
                rows={4}
                placeholder="Please provide a reason for changing the last working day..."
                className="w-full px-4 py-2.5 border border-[#c5cbd3] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
              />
            </div>

            {/* Alert */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 flex items-start gap-2">
              <AlertCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-blue-900">
                Changing the last working day will update the resignation timeline and may affect final settlement calculations.
              </p>
            </div>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-end gap-3 p-6 border-t border-gray-200">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2.5 border border-[#eceff3] text-gray-700 rounded-xl hover:bg-gray-50 transition-colors text-sm font-medium"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2.5 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors text-sm font-medium shadow-sm"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
