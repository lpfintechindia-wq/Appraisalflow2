import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, Edit2, Download, Send, Star, ChevronDown, ChevronUp, Check, CheckCircle2 } from 'lucide-react';

interface Question {
  id: string;
  name: string;
  ratingType: '1-5' | '1-10' | 'Yes/No' | 'Text';
  rating?: number | string;
  comments?: string;
  isMandatory: boolean;
}

interface Section {
  id: string;
  name: string;
  weight: number;
  score: number;
  questions: Question[];
  sectionComment?: string;
}

interface AppraisalData {
  employeeId: string;
  employeeName: string;
  department: string;
  designation: string;
  reportingManager: string;
  reviewCycle: string;
  templateName: string;
  status: 'Draft' | 'In Review' | 'Completed' | 'Published';
  sections: Section[];
  selfAppraisal: {
    achievements: string;
    challenges: string;
    aspirations: string;
  };
  managerFeedback: {
    strengths: string;
    improvements: string;
    recommendedActions: string[];
  };
  finalRecommendation: {
    rating: string;
    promotion: boolean;
    salaryRevision: boolean;
    bonusEligibility: boolean;
    retentionRisk: 'Low' | 'Medium' | 'High';
  };
  signOff: {
    employee?: { name: string; date: string };
    manager?: { name: string; date: string };
    hr?: { name: string; date: string };
    departmentHead?: { name: string; date: string };
  };
}

const mockAppraisalData: AppraisalData = {
  employeeId: 'EMP001',
  employeeName: 'Priya Sharma',
  department: 'Engineering',
  designation: 'Senior Developer',
  reportingManager: 'Rajesh Kumar',
  reviewCycle: 'Annual Review 2026',
  templateName: 'Engineering Appraisal Template',
  status: 'Completed',
  sections: [
    {
      id: '1',
      name: 'Goal / KPI Achievement',
      weight: 40,
      score: 4.5,
      questions: [
        { id: 'q1', name: 'Project delivery timelines met', ratingType: '1-5', rating: 5, comments: 'All projects delivered on time with high quality', isMandatory: true },
        { id: 'q2', name: 'Code quality and best practices', ratingType: '1-5', rating: 4, comments: 'Strong adherence to coding standards', isMandatory: true },
        { id: 'q3', name: 'Sprint commitments achieved', ratingType: 'Yes/No', rating: 'Yes', comments: 'Consistently met sprint goals', isMandatory: true }
      ],
      sectionComment: 'Excellent performance in achieving all technical goals'
    },
    {
      id: '2',
      name: 'Technical Skills & Competencies',
      weight: 30,
      score: 4.2,
      questions: [
        { id: 'q4', name: 'Technical expertise in core technologies', ratingType: '1-5', rating: 4, comments: 'Strong skills in React and Node.js', isMandatory: true },
        { id: 'q5', name: 'Problem-solving ability', ratingType: '1-5', rating: 5, comments: 'Exceptional at solving complex problems', isMandatory: true },
        { id: 'q6', name: 'Code review and mentoring', ratingType: '1-5', rating: 4, comments: 'Actively helps junior developers', isMandatory: false }
      ],
      sectionComment: 'Demonstrates strong technical capabilities'
    },
    {
      id: '3',
      name: 'Behavioral Competencies',
      weight: 20,
      score: 4.0,
      questions: [
        { id: 'q7', name: 'Team collaboration', ratingType: '1-5', rating: 4, comments: 'Works well with team members', isMandatory: true },
        { id: 'q8', name: 'Communication skills', ratingType: '1-5', rating: 4, comments: 'Clear and effective communicator', isMandatory: true },
        { id: 'q9', name: 'Initiative and ownership', ratingType: '1-5', rating: 4, comments: 'Takes ownership of assigned tasks', isMandatory: true }
      ]
    },
    {
      id: '4',
      name: 'Innovation & Learning',
      weight: 10,
      score: 4.5,
      questions: [
        { id: 'q10', name: 'Learning new technologies', ratingType: '1-5', rating: 5, comments: 'Proactively learns new frameworks', isMandatory: false },
        { id: 'q11', name: 'Process improvements suggested', ratingType: 'Text', rating: 'Implemented automated testing framework that improved deployment efficiency by 40%', isMandatory: false }
      ],
      sectionComment: 'Shows strong commitment to continuous learning'
    }
  ],
  selfAppraisal: {
    achievements: 'Successfully led the migration of legacy system to microservices architecture. Reduced deployment time by 50% through CI/CD improvements. Mentored 3 junior developers who are now contributing independently.',
    challenges: 'Balancing technical debt resolution with new feature development. Initially struggled with cross-team coordination but improved through regular communication.',
    aspirations: 'Aiming to take on technical leadership role. Interested in learning cloud architecture and DevOps practices. Would like to contribute to open-source projects.'
  },
  managerFeedback: {
    strengths: 'Exceptional technical skills and problem-solving ability. Strong ownership and accountability. Excellent mentor to junior team members. Proactive in identifying and resolving issues.',
    improvements: 'Could improve documentation practices. Should focus on better time estimation for complex tasks. Can be more vocal in team discussions and strategic planning sessions.',
    recommendedActions: ['Training', 'Role Enhancement']
  },
  finalRecommendation: {
    rating: 'Exceeds Expectations',
    promotion: true,
    salaryRevision: true,
    bonusEligibility: true,
    retentionRisk: 'Low'
  },
  signOff: {
    employee: { name: 'Priya Sharma', date: '2026-05-01' },
    manager: { name: 'Rajesh Kumar', date: '2026-05-02' },
    hr: { name: 'Kavita Desai', date: '2026-05-03' }
  }
};

export function EmployeeAppraisalView() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [appraisalData] = useState<AppraisalData>(mockAppraisalData);
  const [expandedSections, setExpandedSections] = useState<string[]>(['1', '2', '3', '4']);

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev =>
      prev.includes(sectionId) ? prev.filter(id => id !== sectionId) : [...prev, sectionId]
    );
  };

  const getStatusColor = (status: string) => {
    const colors = {
      'Draft': 'bg-gray-100 text-gray-700',
      'In Review': 'bg-blue-100 text-blue-700',
      'Completed': 'bg-green-100 text-green-700',
      'Published': 'bg-purple-100 text-purple-700'
    };
    return colors[status as keyof typeof colors] || colors.Draft;
  };

  const getRiskColor = (risk: string) => {
    const colors = {
      'Low': 'text-green-600 bg-green-50',
      'Medium': 'text-yellow-600 bg-yellow-50',
      'High': 'text-red-600 bg-red-50'
    };
    return colors[risk as keyof typeof colors] || colors.Low;
  };

  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-0.5">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`w-4 h-4 ${star <= rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
          />
        ))}
      </div>
    );
  };

  const renderRating = (question: Question) => {
    if (question.ratingType === '1-5' && typeof question.rating === 'number') {
      return (
        <div className="flex items-center gap-2">
          {renderStars(question.rating)}
          <span className="text-sm font-medium text-gray-700">{question.rating}</span>
        </div>
      );
    } else if (question.ratingType === '1-10' && typeof question.rating === 'number') {
      return (
        <div className="flex items-center gap-2">
          <div className="w-32 h-2 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-purple-600 rounded-full"
              style={{ width: `${(question.rating / 10) * 100}%` }}
            />
          </div>
          <span className="text-sm font-medium text-gray-700">{question.rating}/10</span>
        </div>
      );
    } else if (question.ratingType === 'Yes/No') {
      return (
        <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
          question.rating === 'Yes' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
        }`}>
          {question.rating}
        </span>
      );
    } else {
      return <span className="text-sm text-gray-700">{question.rating}</span>;
    }
  };

  const totalWeightedScore = appraisalData.sections.reduce(
    (sum, section) => sum + (section.score * section.weight) / 100,
    0
  );

  return (
    <div className="min-h-screen bg-[#f8f9fc]">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="px-8 py-4">
          <div className="flex items-center justify-between mb-4">
            <button
              onClick={() => navigate('/appraisal/runs')}
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="text-sm font-medium">Back to Appraisal Runs</span>
            </button>
            <div className="flex items-center gap-3">
              <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                <Edit2 className="w-4 h-4" />
                <span className="text-sm font-medium">Edit</span>
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                <Download className="w-4 h-4" />
                <span className="text-sm font-medium">Export PDF</span>
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                <Send className="w-4 h-4" />
                <span className="text-sm font-medium">Publish</span>
              </button>
            </div>
          </div>

          {/* Employee Info Header */}
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                <span className="text-white font-semibold text-xl">
                  {appraisalData.employeeName.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <div>
                <h1 className="text-2xl font-semibold text-gray-900">{appraisalData.employeeName}</h1>
                <div className="flex items-center gap-4 mt-1">
                  <span className="text-sm text-gray-600">{appraisalData.employeeId}</span>
                  <span className="text-gray-300">•</span>
                  <span className="text-sm text-gray-600">{appraisalData.department}</span>
                  <span className="text-gray-300">•</span>
                  <span className="text-sm text-gray-600">{appraisalData.designation}</span>
                </div>
              </div>
            </div>
            <span className={`inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium ${getStatusColor(appraisalData.status)}`}>
              {appraisalData.status}
            </span>
          </div>

          {/* Meta Info */}
          
        </div>
      </div>

      <div className="flex gap-6 p-8">
        {/* Main Content */}
        <div className="flex-1 space-y-6">
          {/* Dynamic Sections */}
          {appraisalData.sections.map((section) => (
            <div key={section.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <button
                onClick={() => toggleSection(section.id)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-purple-100">
                    <span className="text-sm font-semibold text-purple-600">{section.weight}%</span>
                  </div>
                  <div className="text-left">
                    <h3 className="text-base font-semibold text-gray-900">{section.name}</h3>
                    <p className="text-sm text-gray-500">Score: {section.score.toFixed(1)} / 5.0</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    {renderStars(section.score)}
                    <span className="text-lg font-bold text-gray-900">{section.score.toFixed(1)}</span>
                  </div>
                  {expandedSections.includes(section.id) ? (
                    <ChevronUp className="w-5 h-5 text-gray-400" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  )}
                </div>
              </button>

              {expandedSections.includes(section.id) && (
                <div className="border-t border-gray-100">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Parameter</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Rating</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Comments</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100">
                        {section.questions.map((question) => (
                          <tr key={question.id} className="hover:bg-gray-50">
                            <td className="px-6 py-4">
                              <div className="flex items-center gap-2">
                                <span className="text-sm text-gray-900">{question.name}</span>
                                {question.isMandatory && (
                                  <span className="text-red-500 text-xs">*</span>
                                )}
                              </div>
                            </td>
                            <td className="px-6 py-4">
                              {renderRating(question)}
                            </td>
                            <td className="px-6 py-4">
                              <span className="text-sm text-gray-600">{question.comments || '-'}</span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  {section.sectionComment && (
                    <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
                      <label className="block text-xs font-medium text-gray-500 mb-1">Section Comment</label>
                      <p className="text-sm text-gray-700">{section.sectionComment}</p>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}

          {/* Employee Self-Appraisal */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Employee Self-Appraisal</h3>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Key Achievements</label>
                <p className="text-sm text-gray-600 bg-gray-50 rounded-lg p-4">{appraisalData.selfAppraisal.achievements}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Challenges Faced</label>
                <p className="text-sm text-gray-600 bg-gray-50 rounded-lg p-4">{appraisalData.selfAppraisal.challenges}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Career Aspirations</label>
                <p className="text-sm text-gray-600 bg-gray-50 rounded-lg p-4">{appraisalData.selfAppraisal.aspirations}</p>
              </div>
            </div>
          </div>

          {/* Manager Feedback */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-yellow-100 flex items-center justify-center">
                <Star className="w-5 h-5 text-yellow-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Manager Feedback</h3>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Strengths</label>
                <p className="text-sm text-gray-600 bg-gray-50 rounded-lg p-4">{appraisalData.managerFeedback.strengths}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Areas of Improvement</label>
                <p className="text-sm text-gray-600 bg-gray-50 rounded-lg p-4">{appraisalData.managerFeedback.improvements}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Recommended Actions</label>
                <div className="flex flex-wrap gap-2">
                  {appraisalData.managerFeedback.recommendedActions.map((action, index) => (
                    <span key={index} className="px-3 py-1.5 bg-blue-50 text-blue-700 rounded-lg text-sm font-medium">
                      {action}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Final Recommendation */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                <CheckCircle2 className="w-5 h-5 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Final Recommendation</h3>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Final Rating</label>
                <p className="text-lg font-semibold text-purple-600">{appraisalData.finalRecommendation.rating}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Retention Risk</label>
                <span className={`inline-flex items-center px-3 py-1.5 rounded-lg text-sm font-medium ${getRiskColor(appraisalData.finalRecommendation.retentionRisk)}`}>
                  {appraisalData.finalRecommendation.retentionRisk}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className={`w-5 h-5 rounded flex items-center justify-center ${appraisalData.finalRecommendation.promotion ? 'bg-green-500' : 'bg-gray-200'}`}>
                  {appraisalData.finalRecommendation.promotion && <Check className="w-4 h-4 text-white" />}
                </div>
                <span className="text-sm text-gray-700">Promotion Recommended</span>
              </div>
              <div className="flex items-center gap-2">
                <div className={`w-5 h-5 rounded flex items-center justify-center ${appraisalData.finalRecommendation.salaryRevision ? 'bg-green-500' : 'bg-gray-200'}`}>
                  {appraisalData.finalRecommendation.salaryRevision && <Check className="w-4 h-4 text-white" />}
                </div>
                <span className="text-sm text-gray-700">Salary Revision</span>
              </div>
              <div className="flex items-center gap-2">
                <div className={`w-5 h-5 rounded flex items-center justify-center ${appraisalData.finalRecommendation.bonusEligibility ? 'bg-green-500' : 'bg-gray-200'}`}>
                  {appraisalData.finalRecommendation.bonusEligibility && <Check className="w-4 h-4 text-white" />}
                </div>
                <span className="text-sm text-gray-700">Bonus Eligibility</span>
              </div>
            </div>
          </div>

          {/* Sign-Off Section */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Sign-Off</h3>
            <div className="grid grid-cols-2 gap-6">
              {appraisalData.signOff.employee && (
                <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                    <label className="text-sm font-medium text-gray-700">Employee</label>
                  </div>
                  <p className="text-sm font-semibold text-gray-900">{appraisalData.signOff.employee.name}</p>
                  <p className="text-xs text-gray-500">{appraisalData.signOff.employee.date}</p>
                </div>
              )}
              {appraisalData.signOff.manager && (
                <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                    <label className="text-sm font-medium text-gray-700">Manager</label>
                  </div>
                  <p className="text-sm font-semibold text-gray-900">{appraisalData.signOff.manager.name}</p>
                  <p className="text-xs text-gray-500">{appraisalData.signOff.manager.date}</p>
                </div>
              )}
              {appraisalData.signOff.hr && (
                <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                    <label className="text-sm font-medium text-gray-700">HR</label>
                  </div>
                  <p className="text-sm font-semibold text-gray-900">{appraisalData.signOff.hr.name}</p>
                  <p className="text-xs text-gray-500">{appraisalData.signOff.hr.date}</p>
                </div>
              )}
              {appraisalData.signOff.departmentHead && (
                <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                    <label className="text-sm font-medium text-gray-700">Department Head</label>
                  </div>
                  <p className="text-sm font-semibold text-gray-900">{appraisalData.signOff.departmentHead.name}</p>
                  <p className="text-xs text-gray-500">{appraisalData.signOff.departmentHead.date}</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Summary Panel - Sticky */}
        <div className="w-80 space-y-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 sticky top-24">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Summary</h3>

            {/* Section Scores */}
            <div className="space-y-3 mb-6">
              {appraisalData.sections.map((section) => (
                <div key={section.id} className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm text-gray-600">{section.name}</span>
                      <span className="text-sm font-medium text-gray-900">{section.score.toFixed(1)}</span>
                    </div>
                    <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-purple-600 rounded-full"
                        style={{ width: `${(section.score / 5) * 100}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Total Score */}
            <div className="pt-4 border-t border-gray-200">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-600">Total Weighted Score</span>
                <span className="text-2xl font-bold text-purple-600">{totalWeightedScore.toFixed(2)}</span>
              </div>
              <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-purple-600 to-pink-600 rounded-full"
                  style={{ width: `${(totalWeightedScore / 5) * 100}%` }}
                />
              </div>
              <p className="text-xs text-gray-500 mt-2 text-center">out of 5.0</p>
            </div>

            {/* Final Rating Badge */}
            <div className="mt-6 p-4 bg-purple-50 rounded-lg border border-purple-200 text-center">
              <p className="text-xs font-medium text-purple-600 mb-1">FINAL RATING</p>
              <p className="text-lg font-bold text-purple-900">{appraisalData.finalRecommendation.rating}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
