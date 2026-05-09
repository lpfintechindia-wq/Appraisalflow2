import { useState } from 'react';
import { Search, Filter, Plus, Eye, Mail, X as XIcon } from 'lucide-react';

interface FeedbackInvite {
  id: string;
  employee: string;
  reviewer: string;
  type: '360 Feedback' | 'Peer Review' | 'Upward Feedback';
  status: 'Sent' | 'Completed' | 'Pending';
  sentDate: string;
  dueDate: string;
}

const mockInvites: FeedbackInvite[] = [
  { id: '1', employee: 'Sarah Johnson', reviewer: 'Michael Chen', type: '360 Feedback', status: 'Completed', sentDate: '2026-04-01', dueDate: '2026-04-15' },
  { id: '2', employee: 'Emma Wilson', reviewer: 'James Taylor', type: 'Peer Review', status: 'Sent', sentDate: '2026-04-10', dueDate: '2026-04-25' },
  { id: '3', employee: 'John Smith', reviewer: 'Sarah Johnson', type: 'Upward Feedback', status: 'Pending', sentDate: '2026-04-20', dueDate: '2026-05-05' },
];

export function Feedback() {
  const [invites, setInvites] = useState(mockInvites);
  const [searchQuery, setSearchQuery] = useState('');

  const getStatusColor = (status: string) => {
    const colors = {
      'Sent': 'bg-blue-100 text-blue-700',
      'Completed': 'bg-green-100 text-green-700',
      'Pending': 'bg-orange-100 text-orange-700'
    };
    return colors[status as keyof typeof colors];
  };

  return (
    <div className="p-6 md:p-8 bg-[#f8f9fc] min-h-screen">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-gray-900 mb-2">Feedback Management</h1>
        <p className="text-sm text-gray-600">Manage 360 feedback and peer review invitations</p>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 mb-6">
        <div className="flex gap-4 items-center justify-between">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search invitations..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
          </div>
          <div className="flex gap-3">
            <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50">
              <Filter className="w-4 h-4" />
              <span className="text-sm font-medium">Filter</span>
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
              <Plus className="w-4 h-4" />
              <span className="text-sm font-medium">Send Invite</span>
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-100">
            <tr>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-600 uppercase">Employee</th>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-600 uppercase">Reviewer</th>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-600 uppercase">Type</th>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-600 uppercase">Status</th>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-600 uppercase">Sent Date</th>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-600 uppercase">Due Date</th>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-600 uppercase">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {invites.map((invite) => (
              <tr key={invite.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 text-sm text-gray-900">{invite.employee}</td>
                <td className="px-6 py-4 text-sm text-gray-700">{invite.reviewer}</td>
                <td className="px-6 py-4 text-sm text-gray-700">{invite.type}</td>
                <td className="px-6 py-4">
                  <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${getStatusColor(invite.status)}`}>
                    {invite.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-gray-700">{new Date(invite.sentDate).toLocaleDateString()}</td>
                <td className="px-6 py-4 text-sm text-gray-700">{new Date(invite.dueDate).toLocaleDateString()}</td>
                <td className="px-6 py-4">
                  <div className="flex gap-2">
                    <button className="p-1.5 hover:bg-gray-100 rounded-lg"><Eye className="w-4 h-4 text-gray-600" /></button>
                    <button className="p-1.5 hover:bg-gray-100 rounded-lg"><Mail className="w-4 h-4 text-gray-600" /></button>
                    <button className="p-1.5 hover:bg-gray-100 rounded-lg"><XIcon className="w-4 h-4 text-red-600" /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
