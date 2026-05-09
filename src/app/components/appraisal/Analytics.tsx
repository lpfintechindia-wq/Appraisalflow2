import { Download, Filter } from 'lucide-react';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export function Analytics() {
  const data = [
    { month: 'Jan', rating: 3.4 },
    { month: 'Feb', rating: 3.5 },
    { month: 'Mar', rating: 3.6 },
    { month: 'Apr', rating: 3.7 },
    { month: 'May', rating: 3.8 },
  ];

  return (
    <div className="p-6 md:p-8 bg-[#f8f9fc] min-h-screen">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-gray-900 mb-2">Analytics & Reports</h1>
        <p className="text-sm text-gray-600">Performance insights and trend analysis</p>
      </div>

      <div className="flex gap-3 mb-6">
        <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50">
          <Filter className="w-4 h-4" />
          <span className="text-sm font-medium">Filter</span>
        </button>
        <button className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
          <Download className="w-4 h-4" />
          <span className="text-sm font-medium">Export</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Performance Trends</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="month" tick={{ fontSize: 12 }} />
              <YAxis domain={[0, 5]} tick={{ fontSize: 12 }} />
              <Tooltip />
              <Line type="monotone" dataKey="rating" stroke="#8b5cf6" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Department Comparison</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={[
              { dept: 'Eng', rating: 3.8 },
              { dept: 'Sales', rating: 3.6 },
              { dept: 'Marketing', rating: 3.5 },
              { dept: 'Ops', rating: 3.7 },
            ]}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="dept" tick={{ fontSize: 12 }} />
              <YAxis domain={[0, 5]} tick={{ fontSize: 12 }} />
              <Tooltip />
              <Bar dataKey="rating" fill="#6366f1" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
