import { Award, ThumbsUp, Heart, Star, MessageCircle } from 'lucide-react';

export function Recognition() {
  const recognitions = [
    { id: 1, from: 'Sarah Johnson', to: 'Michael Chen', message: 'Excellent work on the Q1 project delivery!', type: 'Excellence', date: '2026-05-02', likes: 12 },
    { id: 2, from: 'John Smith', to: 'Emma Wilson', message: 'Great team collaboration during the sprint.', type: 'Teamwork', date: '2026-05-01', likes: 8 },
  ];

  return (
    <div className="p-6 md:p-8 bg-[#f8f9fc] min-h-screen">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-gray-900 mb-2">Recognition</h1>
        <p className="text-sm text-gray-600">Celebrate employee achievements and contributions</p>
      </div>

      <div className="max-w-3xl mx-auto">
        <button className="w-full mb-6 px-4 py-3 bg-purple-600 text-white rounded-xl hover:bg-purple-700 flex items-center justify-center gap-2">
          <Award className="w-5 h-5" />
          <span className="font-medium">Give Recognition</span>
        </button>

        <div className="space-y-4">
          {recognitions.map((rec) => (
            <div key={rec.id} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                  <span className="text-white font-medium">{rec.from[0]}</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-semibold text-gray-900">{rec.from}</span>
                    <span className="text-gray-500">→</span>
                    <span className="font-semibold text-gray-900">{rec.to}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-purple-100 text-purple-700 text-xs font-medium">
                      {rec.type}
                    </span>
                    <span>•</span>
                    <span>{new Date(rec.date).toLocaleDateString()}</span>
                  </div>
                </div>
              </div>
              <p className="text-gray-700 mb-4">{rec.message}</p>
              <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                <button className="flex items-center gap-1.5 text-sm text-gray-600 hover:text-purple-600">
                  <ThumbsUp className="w-4 h-4" />
                  <span>{rec.likes}</span>
                </button>
                <button className="flex items-center gap-1.5 text-sm text-gray-600 hover:text-purple-600">
                  <MessageCircle className="w-4 h-4" />
                  <span>Comment</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
