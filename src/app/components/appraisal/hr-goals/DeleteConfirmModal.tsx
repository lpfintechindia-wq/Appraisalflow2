import { X, Trash2, AlertTriangle } from 'lucide-react';

interface Goal {
  id: string;
  employee: string;
  title: string;
  status: string;
}

interface DeleteConfirmModalProps {
  goal: Goal;
  onClose: () => void;
  onConfirm: () => void;
}

export function DeleteConfirmModal({ goal, onClose, onConfirm }: DeleteConfirmModalProps) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-xl max-w-md w-full">
        <div className="p-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
              <AlertTriangle className="w-6 h-6 text-red-600" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Delete Goal</h3>
              <p className="text-sm text-gray-600 mb-4">
                Are you sure you want to delete this goal? This action cannot be undone.
              </p>
              <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                <p className="text-xs text-gray-600 mb-1">Goal Title</p>
                <p className="text-sm font-semibold text-gray-900 mb-2">{goal.title}</p>
                <p className="text-xs text-gray-600 mb-1">Employee</p>
                <p className="text-sm font-medium text-gray-900">{goal.employee}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 px-6 py-4 flex gap-3 rounded-b-xl">
          <button
            onClick={onClose}
            className="flex-1 px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg text-sm font-semibold hover:bg-red-700 transition-colors"
          >
            <Trash2 className="w-4 h-4" />
            Delete Goal
          </button>
        </div>
      </div>
    </div>
  );
}
