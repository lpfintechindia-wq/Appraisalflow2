import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Filter, Eye, Edit2, X, Star, TrendingUp, User } from 'lucide-react';

interface EmployeeReview {
  id: string;
  employeeId: string;
  employeeName: string;
  department: string;
  role: string;
  manager: string;
  selfRating: number;
  managerRating: number;
  finalRating: number;
  status: 'Pending' | 'In Progress' | 'Completed';
  lastUpdated: string;
}

const mockReviews: EmployeeReview[] = [
  { id: '1', employeeId: 'EMP001', employeeName: 'Priya Sharma', department: 'Engineering', role: 'Senior Developer', manager: 'Rajesh Kumar', selfRating: 4, managerRating: 4.5, finalRating: 4.2, status: 'Completed', lastUpdated: '2026-05-01' },
  { id: '2', employeeId: 'EMP002', employeeName: 'Amit Patel', department: 'Sales', role: 'Sales Manager', manager: 'Kavita Desai', selfRating: 4.5, managerRating: 4, finalRating: 4.2, status: 'Completed', lastUpdated: '2026-04-30' },
  { id: '3', employeeId: 'EMP003', employeeName: 'Sneha Reddy', department: 'Marketing', role: 'Marketing Lead', manager: 'Vikram Singh', selfRating: 3.5, managerRating: 0, finalRating: 0, status: 'In Progress', lastUpdated: '2026-05-02' },
  { id: '4', employeeId: 'EMP004', employeeName: 'Arjun Mehta', department: 'Engineering', role: 'DevOps Engineer', manager: 'Rajesh Kumar', selfRating: 0, managerRating: 0, finalRating: 0, status: 'Pending', lastUpdated: '2026-05-03' },
];

export function AppraisalRuns() {
  const navigate = useNavigate();
  const [reviews, setReviews] = useState<EmployeeReview[]>(mockReviews);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedReviews, setSelectedReviews] = useState<string[]>([]);
  const [showEditRatingModal, setShowEditRatingModal] = useState(false);
  const [selectedReview, setSelectedReview] = useState<EmployeeReview | null>(null);
  const [overrideRating, setOverrideRating] = useState(0);

  const getStatusColor = (status: string) => {
    const colors = {
      'Pending': 'bg-gray-100 text-gray-700',
      'In Progress': 'bg-blue-100 text-blue-700',
      'Completed': 'bg-green-100 text-green-700'
    };
    return colors[status as keyof typeof colors] || colors.Pending;
  };

  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-0.5">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`w-4 h-4 ${
              star <= rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
            }`}
          />
        ))}
      </div>
    );
  };

  const handleSelectAll = (checked: boolean) => {
    setSelectedReviews(checked ? reviews.map(r => r.id) : []);
  };

  const handleSelectReview = (id: string, checked: boolean) => {
    setSelectedReviews(checked ? [...selectedReviews, id] : selectedReviews.filter(rid => rid !== id));
  };

  const handleSaveRating = () => {
    if (selectedReview) {
      setReviews(reviews.map(r => r.id === selectedReview.id ? { ...r, finalRating: overrideRating } : r));
      setShowEditRatingModal(false);
    }
  };

  const filteredReviews = reviews.filter(review =>
    review.employeeName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    review.department.toLowerCase().includes(searchQuery.toLowerCase()) ||
    review.role.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-6 md:p-8 bg-[#f8f9fc] min-h-screen">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-gray-900 mb-2">Appraisal Runs</h1>
        <p className="text-sm text-gray-600">Employee-wise evaluation and rating management</p>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 mb-6">
        <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
          <div className="flex-1 w-full md:w-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search employees..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
            <Filter className="w-4 h-4" />
            <span className="text-sm font-medium">Filter</span>
          </button>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-100">
              <tr>
                <th className="w-12 px-6 py-4">
                  <input
                    type="checkbox"
                    checked={selectedReviews.length === reviews.length}
                    onChange={(e) => handleSelectAll(e.target.checked)}
                    className="w-4 h-4 rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                  />
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Employee</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Department</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Manager</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Self Rating</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Manager Rating</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Final Rating</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filteredReviews.map((review) => (
                <tr key={review.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4">
                    <input
                      type="checkbox"
                      checked={selectedReviews.includes(review.id)}
                      onChange={(e) => handleSelectReview(review.id, e.target.checked)}
                      className="w-4 h-4 rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                    />
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                        <span className="text-white font-medium text-sm">{review.employeeName.split(' ').map(n => n[0]).join('')}</span>
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gray-900">{review.employeeName}</div>
                        <div className="text-xs text-gray-500">{review.employeeId}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-700">{review.department}</div>
                    <div className="text-xs text-gray-500">{review.role}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-700">{review.manager}</div>
                  </td>
                  <td className="px-6 py-4">
                    {review.selfRating > 0 ? (
                      <div className="flex items-center gap-2">
                        {renderStars(review.selfRating)}
                        <span className="text-sm font-medium text-gray-700">{review.selfRating.toFixed(1)}</span>
                      </div>
                    ) : (
                      <span className="text-sm text-gray-400">Not submitted</span>
                    )}
                  </td>
                  <td className="px-6 py-4">
                    {review.managerRating > 0 ? (
                      <div className="flex items-center gap-2">
                        {renderStars(review.managerRating)}
                        <span className="text-sm font-medium text-gray-700">{review.managerRating.toFixed(1)}</span>
                      </div>
                    ) : (
                      <span className="text-sm text-gray-400">Pending</span>
                    )}
                  </td>
                  <td className="px-6 py-4">
                    {review.finalRating > 0 ? (
                      <div className="flex items-center gap-2">
                        {renderStars(review.finalRating)}
                        <span className="text-sm font-semibold text-gray-900">{review.finalRating.toFixed(1)}</span>
                      </div>
                    ) : (
                      <span className="text-sm text-gray-400">-</span>
                    )}
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${getStatusColor(review.status)}`}>
                      {review.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => navigate(`/appraisal/runs/view/${review.id}`)}
                        className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors text-gray-600"
                        title="View Full Review"
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => {
                          setSelectedReview(review);
                          setOverrideRating(review.finalRating || 0);
                          setShowEditRatingModal(true);
                        }}
                        className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors text-gray-600"
                        title="Edit Rating"
                      >
                        <Edit2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="px-6 py-4 border-t border-gray-100 flex items-center justify-between">
          <div className="text-sm text-gray-600">
            Showing <span className="font-medium">{filteredReviews.length}</span> of <span className="font-medium">{reviews.length}</span> reviews
          </div>
          <div className="flex gap-2">
            <button className="px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-sm hover:bg-gray-50 transition-colors disabled:opacity-50" disabled>
              Previous
            </button>
            <button className="px-3 py-1.5 bg-purple-600 text-white rounded-lg text-sm hover:bg-purple-700 transition-colors">
              1
            </button>
            <button className="px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-sm hover:bg-gray-50 transition-colors">
              Next
            </button>
          </div>
        </div>
      </div>

      {/* Edit Rating Modal */}
      {showEditRatingModal && selectedReview && (
        <div className="fixed inset-0 bg-gray-900/80 backdrop-blur-md flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] max-w-md w-full relative">
            {/* Close Button */}
            <button
              onClick={() => setShowEditRatingModal(false)}
              className="absolute top-6 right-6 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Header */}
            <div className="px-8 pt-8 pb-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-purple-100 flex items-center justify-center">
                <Edit2 className="w-8 h-8 text-purple-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Override Rating</h2>
              <p className="text-sm text-gray-500">Adjust the final performance rating</p>
            </div>

            {/* Content */}
            <div className="px-8 pb-6 space-y-6">
              {/* Employee Info */}
              <div className="bg-gray-50 rounded-2xl p-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-semibold text-sm">
                      {selectedReview.employeeName.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-gray-900 truncate">{selectedReview.employeeName}</p>
                    <p className="text-sm text-gray-500">{selectedReview.employeeId}</p>
                  </div>
                </div>
              </div>

              {/* Rating Input */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">Rating Value</label>
                <input
                  type="number"
                  min="0"
                  max="5"
                  step="0.1"
                  value={overrideRating}
                  onChange={(e) => setOverrideRating(Number(e.target.value))}
                  className="w-full px-4 py-3 text-center text-2xl font-bold bg-white border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all"
                />
              </div>

              {/* Star Display */}
              <div className="flex flex-col items-center gap-4 py-6 bg-purple-50 rounded-2xl">
                <div className="flex gap-2">
                  {renderStars(overrideRating)}
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold text-purple-600">{overrideRating.toFixed(1)}</p>
                  <p className="text-sm text-gray-600 mt-1">out of 5.0</p>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="px-8 py-6 bg-gray-50 rounded-b-3xl flex gap-3">
              <button
                onClick={() => setShowEditRatingModal(false)}
                className="flex-1 px-4 py-3 bg-white border border-gray-300 rounded-xl text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleSaveRating}
                className="flex-1 px-4 py-3 bg-purple-600 text-white rounded-xl text-sm font-semibold hover:bg-purple-700 transition-colors"
              >
                Save Rating
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
