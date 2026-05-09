import React, { useState } from 'react';
import { X, XCircle, AlertTriangle } from 'lucide-react';

interface RejectModalProps {
  isOpen: boolean;
  onClose: () => void;
  employeeName: string;
  onConfirm: (reason: string, comments: string) => void;
}

export function RejectModal({ isOpen, onClose, employeeName, onConfirm }: RejectModalProps) {
  const [reason, setReason] = useState('');
  const [comments, setComments] = useState('');
  const [sendNotification, setSendNotification] = useState(true);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onConfirm(reason, comments);
    onClose();
  };

  const rejectionReasons = [
    'Notice period not served',
    'Pending financial obligations',
    'Critical project ongoing',
    'Assets not returned',
    'Documentation incomplete',
    'Policy violation',
    'Other'
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md mx-4">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center">
              <XCircle className="w-5 h-5 text-red-600" />
            </div>
            <h2 className="text-xl font-semibold text-[#131313]">Reject Resignation</h2>
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

            {/* Warning */}
            <div className="bg-red-50 border border-red-200 rounded-lg p-3 flex items-start gap-2">
              <AlertTriangle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-red-900">
                This action will reject the resignation request. The employee will be notified and can resubmit if needed.
              </p>
            </div>

            {/* Rejection Reason */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Reason for Rejection <span className="text-red-500">*</span>
              </label>
              <select
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                required
                className="w-full px-4 py-2.5 border border-[#c5cbd3] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
              >
                <option value="">Select a reason</option>
                {rejectionReasons.map((r) => (
                  <option key={r} value={r}>{r}</option>
                ))}
              </select>
            </div>

            {/* Additional Comments */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Additional Comments <span className="text-red-500">*</span>
              </label>
              <textarea
                value={comments}
                onChange={(e) => setComments(e.target.value)}
                required
                rows={4}
                placeholder="Provide detailed explanation for the rejection. This will be shared with the employee..."
                className="w-full px-4 py-2.5 border border-[#c5cbd3] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent resize-none"
              />
              <p className="text-xs text-gray-500 mt-1">Be clear and professional in your explanation</p>
            </div>

            {/* Send Notification */}
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={sendNotification}
                onChange={(e) => setSendNotification(e.target.checked)}
                className="mt-1 w-4 h-4 text-red-600 rounded border-gray-300 focus:ring-red-500"
              />
              <div>
                <p className="text-sm font-medium text-gray-900">Send email notification to employee</p>
                <p className="text-xs text-gray-500">Employee will receive an email with the rejection details</p>
              </div>
            </label>
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
              className="px-5 py-2.5 bg-red-600 text-white rounded-xl hover:bg-red-700 transition-colors text-sm font-medium shadow-sm"
            >
              Reject Resignation
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
