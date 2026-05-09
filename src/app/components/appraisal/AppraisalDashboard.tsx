import { TrendingUp, Users, Target, Award, Clock, CheckCircle2, AlertCircle, BarChart3 } from 'lucide-react';
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const ratingDistributionData = [
  { rating: '5 - Exceptional', count: 12, percentage: 8 },
  { rating: '4 - Exceeds', count: 45, percentage: 30 },
  { rating: '3 - Meets', count: 68, percentage: 45 },
  { rating: '2 - Needs Improvement', count: 20, percentage: 13 },
  { rating: '1 - Unsatisfactory', count: 5, percentage: 4 },
];

const performanceTrendData = [
  { quarter: 'Q1 2025', avgRating: 3.2 },
  { quarter: 'Q2 2025', avgRating: 3.4 },
  { quarter: 'Q3 2025', avgRating: 3.5 },
  { quarter: 'Q4 2025', avgRating: 3.6 },
  { quarter: 'Q1 2026', avgRating: 3.7 },
];

const departmentData = [
  { name: 'Engineering', value: 45, color: '#6366f1' },
  { name: 'Sales', value: 30, color: '#8b5cf6' },
  { name: 'Marketing', value: 15, color: '#ec4899' },
  { name: 'Operations', value: 25, color: '#10b981' },
  { name: 'HR', value: 10, color: '#f59e0b' },
];

const completionRateData = [
  { month: 'Jan', selfReview: 85, managerReview: 72, peerReview: 60 },
  { month: 'Feb', selfReview: 88, managerReview: 78, peerReview: 65 },
  { month: 'Mar', selfReview: 92, managerReview: 85, peerReview: 72 },
  { month: 'Apr', selfReview: 95, managerReview: 88, peerReview: 78 },
  { month: 'May', selfReview: 96, managerReview: 92, peerReview: 85 },
];

export function AppraisalDashboard() {
  const stats = [
    {
      label: 'Active Cycles',
      value: '3',
      change: '+1 from last quarter',
      icon: Clock,
      color: 'bg-blue-50 text-blue-600',
      trend: 'up'
    },
    {
      label: 'Total Employees',
      value: '150',
      change: 'Across all departments',
      icon: Users,
      color: 'bg-purple-50 text-purple-600',
      trend: 'neutral'
    },
    {
      label: 'Completed Reviews',
      value: '138',
      change: '92% completion rate',
      icon: CheckCircle2,
      color: 'bg-green-50 text-green-600',
      trend: 'up'
    },
    {
      label: 'Pending Reviews',
      value: '12',
      change: '8% remaining',
      icon: AlertCircle,
      color: 'bg-orange-50 text-orange-600',
      trend: 'down'
    },
    {
      label: 'Avg Rating',
      value: '3.7',
      change: '+0.2 from last cycle',
      icon: Award,
      color: 'bg-pink-50 text-pink-600',
      trend: 'up'
    },
    {
      label: 'Goals Achieved',
      value: '78%',
      change: '117 of 150 goals',
      icon: Target,
      color: 'bg-teal-50 text-teal-600',
      trend: 'up'
    },
  ];

  return (
    <div className="p-6 md:p-8 bg-[#f8f9fc] min-h-screen">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-gray-900 mb-2">Appraisal Dashboard</h1>
        <p className="text-sm text-gray-600">Overview of appraisal cycles, performance metrics, and insights</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div className={`w-12 h-12 rounded-lg ${stat.color} flex items-center justify-center`}>
                <stat.icon className="w-6 h-6" />
              </div>
              {stat.trend === 'up' && <TrendingUp className="w-5 h-5 text-green-500" />}
            </div>
            <div className="text-3xl font-semibold text-gray-900 mb-1">{stat.value}</div>
            <div className="text-sm font-medium text-gray-600 mb-1">{stat.label}</div>
            <div className="text-xs text-gray-500">{stat.change}</div>
          </div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Rating Distribution */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Rating Distribution</h3>
              <p className="text-sm text-gray-500 mt-1">Current cycle performance ratings</p>
            </div>
            <BarChart3 className="w-5 h-5 text-gray-400" />
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={ratingDistributionData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="rating" tick={{ fontSize: 12 }} angle={-15} textAnchor="end" height={80} />
              <YAxis tick={{ fontSize: 12 }} />
              <Tooltip />
              <Bar dataKey="count" fill="#6366f1" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Performance Trend */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Performance Trend</h3>
              <p className="text-sm text-gray-500 mt-1">Average rating over time</p>
            </div>
            <TrendingUp className="w-5 h-5 text-green-500" />
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={performanceTrendData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="quarter" tick={{ fontSize: 12 }} />
              <YAxis domain={[0, 5]} tick={{ fontSize: 12 }} />
              <Tooltip />
              <Line type="monotone" dataKey="avgRating" stroke="#8b5cf6" strokeWidth={3} dot={{ fill: '#8b5cf6', r: 5 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Department Distribution & Completion Rate */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Department Distribution */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Department Distribution</h3>
              <p className="text-sm text-gray-500 mt-1">Employees by department</p>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <ResponsiveContainer width="50%" height={250}>
              <PieChart>
                <Pie
                  data={departmentData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={90}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {departmentData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="flex flex-col gap-2">
              {departmentData.map((dept, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: dept.color }}></div>
                  <span className="text-sm text-gray-700">{dept.name}</span>
                  <span className="text-sm font-medium text-gray-900 ml-auto">{dept.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Completion Rate */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Completion Rate by Type</h3>
              <p className="text-sm text-gray-500 mt-1">Review completion progress</p>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={completionRateData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="month" tick={{ fontSize: 12 }} />
              <YAxis domain={[0, 100]} tick={{ fontSize: 12 }} />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="selfReview" stroke="#6366f1" strokeWidth={2} name="Self Review" />
              <Line type="monotone" dataKey="managerReview" stroke="#8b5cf6" strokeWidth={2} name="Manager Review" />
              <Line type="monotone" dataKey="peerReview" stroke="#ec4899" strokeWidth={2} name="Peer Review" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
