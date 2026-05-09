import React, { useState } from 'react';
import { X, CheckCircle, AlertCircle } from 'lucide-react';

interface ApproveModalProps {
  isOpen: boolean;
  onClose: () => void;
  employeeName: string;
  lastWorkingDay: string;
  onConfirm: (comments: string) => void;
}

export function ApproveModal({ isOpen, onClose, employeeName, lastWorkingDay, onConfirm }: ApproveModalProps) {
  const [comments, setComments] = useState('');
  const [sendNotification, setSendNotification] = useState(true);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onConfirm(comments);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md mx-4">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-green-50 flex items-center justify-center">
              <CheckCircle className="w-5 h-5 text-green-600" />
            </div>
            <h2 className="text-xl font-semibold text-[#131313]">Approve Resignation</h2>
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

            {/* Confirmation Message */}
            <div className="bg-green-50 border border-green-200 rounded-lg p-3 flex items-start gap-2">
              <AlertCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm text-green-900 font-medium mb-1">
                  You are approving this resignation request
                </p>
                <p className="text-sm text-green-800">
                  Last Working Day: {new Date(lastWorkingDay).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' })}
                </p>
              </div>
            </div>

            {/* Comments */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Comments (Optional)
              </label>
              <textarea
                value={comments}
                onChange={(e) => setComments(e.target.value)}
                rows={4}
                placeholder="Add any additional comments or wishes for the employee..."
                className="w-full px-4 py-2.5 border border-[#c5cbd3] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
              />
            </div>

            {/* Send Notification */}
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={sendNotification}
                onChange={(e) => setSendNotification(e.target.checked)}
                className="mt-1 w-4 h-4 text-green-600 rounded border-gray-300 focus:ring-green-500"
              />
              <div>
                <p className="text-sm font-medium text-gray-900">Send email notification to employee</p>
                <p className="text-xs text-gray-500">Employee will receive an email with the approval confirmation</p>
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
              className="px-5 py-2.5 bg-green-600 text-white rounded-xl hover:bg-green-700 transition-colors text-sm font-medium shadow-sm"
            >
              Approve Resignation
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
