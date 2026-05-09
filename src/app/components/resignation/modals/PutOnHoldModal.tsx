import React, { useState } from 'react';
import { X, Clock, AlertCircle } from 'lucide-react';

interface PutOnHoldModalProps {
  isOpen: boolean;
  onClose: () => void;
  employeeName: string;
  onConfirm: (reason: string, followUpDate: string) => void;
}

export function PutOnHoldModal({ isOpen, onClose, employeeName, onConfirm }: PutOnHoldModalProps) {
  const [reason, setReason] = useState('');
  const [followUpDate, setFollowUpDate] = useState('');
  const [selectedReason, setSelectedReason] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onConfirm(reason || selectedReason, followUpDate);
    onClose();
  };

  const predefinedReasons = [
    'Pending documentation',
    'Asset return pending',
    'Financial clearance pending',
    'Exit interview not completed',
    'Knowledge transfer incomplete',
    'Other'
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md mx-4">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-amber-50 flex items-center justify-center">
              <Clock className="w-5 h-5 text-amber-600" />
            </div>
            <h2 className="text-xl font-semibold text-[#131313]">Put Resignation On Hold</h2>
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

            {/* Reason Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Reason for Hold <span className="text-red-500">*</span>
              </label>
              <select
                value={selectedReason}
                onChange={(e) => setSelectedReason(e.target.value)}
                required={!reason}
                className="w-full px-4 py-2.5 border border-[#c5cbd3] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              >
                <option value="">Select a reason</option>
                {predefinedReasons.map((r) => (
                  <option key={r} value={r}>{r}</option>
                ))}
              </select>
            </div>

            {/* Additional Comments */}
            {selectedReason === 'Other' && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Additional Details <span className="text-red-500">*</span>
                </label>
                <textarea
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                  required
                  rows={4}
                  placeholder="Please provide details about why the resignation is being put on hold..."
                  className="w-full px-4 py-2.5 border border-[#c5cbd3] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent resize-none"
                />
              </div>
            )}

            {/* Follow-up Date */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Follow-up Date <span className="text-red-500">*</span>
              </label>
              <input
                type="date"
                value={followUpDate}
                onChange={(e) => setFollowUpDate(e.target.value)}
                required
                min={new Date().toISOString().split('T')[0]}
                className="w-full px-4 py-2.5 border border-[#c5cbd3] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              />
              <p className="text-xs text-gray-500 mt-1">Date to review the resignation status again</p>
            </div>

            {/* Alert */}
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 flex items-start gap-2">
              <AlertCircle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-amber-900">
                The resignation will be marked as "On Hold" and will require review on the follow-up date. The employee will be notified about this status.
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
              className="px-5 py-2.5 bg-amber-600 text-white rounded-xl hover:bg-amber-700 transition-colors text-sm font-medium shadow-sm"
            >
              Put On Hold
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
