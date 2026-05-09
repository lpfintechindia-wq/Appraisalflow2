import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, Check, Clock, X, AlertCircle, Edit3, User, Calendar, FileText, DollarSign, RotateCcw } from 'lucide-react';
import { EditLWDModal } from './modals/EditLWDModal';
import { PutOnHoldModal } from './modals/PutOnHoldModal';
import { RejectModal } from './modals/RejectModal';
import { ApproveModal } from './modals/ApproveModal';

export function ResignationDetail() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [userRole] = useState<'employee' | 'manager' | 'hr'>('hr'); // Simulated role

  // Modal states
  const [isEditLWDOpen, setIsEditLWDOpen] = useState(false);
  const [isPutOnHoldOpen, setIsPutOnHoldOpen] = useState(false);
  const [isRejectOpen, setIsRejectOpen] = useState(false);
  const [isApproveOpen, setIsApproveOpen] = useState(false);

  // Mock data
  const resignationData = {
    id: id || '1',
    employee: {
      name: 'Rajesh Kumar',
      id: 'EMP001',
      email: 'rajesh.kumar@company.com',
      department: 'Engineering',
      designation: 'Senior Software Engineer',
      reportingManager: 'Amit Sharma',
      dateOfJoining: '2022-01-15',
    },
    resignation: {
      submittedDate: '2026-04-01',
      requestedLWD: '2026-05-01',
      managerApprovedLWD: '2026-05-01',
      reason: 'Better Opportunity',
      comments: 'Pursuing higher education and relocating to another city for advanced studies.',
    },
    manager: {
      name: 'Amit Sharma',
      action: 'Approved',
      actionDate: '2026-04-02',
      comments: 'Employee has been a valuable team member. Wishing them success in their future endeavors.',
    },
    hrReview: {
      noticePeriod: {
        required: 30,
        served: 30,
        status: 'Complete'
      },
      leaveBalance: {
        casualLeave: 5,
        earnedLeave: 12,
        totalDays: 17,
        encashmentAmount: 45000,
      },
      recovery: {
        loanAmount: 15000,
        advanceAmount: 0,
        total: 15000,
      },
      assets: [
        { name: 'Laptop - Dell Latitude 7420', returned: true },
        { name: 'Mobile Phone - iPhone 13', returned: true },
        { name: 'Access Card', returned: true },
        { name: 'Headphones', returned: false },
      ],
    },
    currentStage: 2, // 0: Submitted, 1: Manager Approved, 2: HR Review, 3: Final
    status: 'HR Review' as const,
  };

  const timeline = [
    { label: 'Employee Submitted', date: resignationData.resignation.submittedDate, completed: true },
    { label: 'Manager Approval', date: resignationData.manager.actionDate, completed: true },
    { label: 'HR Review', date: '', completed: false, current: true },
    { label: 'Final Status', date: '', completed: false },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Submitted':
        return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'Manager Approved':
        return 'bg-green-100 text-green-700 border-green-200';
      case 'HR Review':
        return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      case 'Approved':
        return 'bg-green-100 text-green-700 border-green-200';
      case 'Rejected':
        return 'bg-red-100 text-red-700 border-red-200';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  // Modal handlers
  const handleEditLWD = (newLWD: string, reason: string) => {
    console.log('Edit LWD:', { newLWD, reason });
    // Here you would typically update the resignation data via API
  };

  const handlePutOnHold = (reason: string, followUpDate: string) => {
    console.log('Put On Hold:', { reason, followUpDate });
    // Here you would typically update the resignation status via API
  };

  const handleReject = (reason: string, comments: string) => {
    console.log('Reject:', { reason, comments });
    // Here you would typically update the resignation status via API
  };

  const handleApprove = (comments: string) => {
    console.log('Approve:', { comments });
    // Here you would typically update the resignation status via API
  };

  return (
    <div className="min-h-screen bg-[#f8f8f8]">
      {/* Header */}
      <div className="bg-white border-b border-[#eceff3] shadow-sm">
        <div className="px-8 py-4">
          <button
            onClick={() => navigate('/resignation')}
            className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 mb-4 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Resignation List
          </button>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-semibold text-[#131313]">
                {resignationData.employee.name} ({resignationData.employee.id})
              </h1>
              <p className="text-sm text-gray-600 mt-1">{resignationData.employee.designation} - {resignationData.employee.department}</p>
            </div>
            <span className={`px-4 py-2 rounded-lg text-[16px] font-medium border ${getStatusColor(resignationData.status)}`}>
              {resignationData.status}
            </span>
          </div>
        </div>
      </div>

      <div className="px-8 py-6">
        {/* Status Timeline */}
        <div className="bg-white rounded-xl border border-[#eceff3] p-6 mb-6 shadow-sm">
          <h2 className="text-lg font-semibold text-[#131313] mb-6">Status Timeline</h2>
          <div className="flex items-start justify-between relative">
            {/* Progress Line */}
            <div className="absolute top-5 left-0 right-0 h-[2px] bg-gray-200" style={{ width: 'calc(100% - 40px)', marginLeft: '20px' }}>
              <div
                className="h-full bg-blue-600 transition-all duration-500"
                style={{ width: `${(resignationData.currentStage / (timeline.length - 1)) * 100}%` }}
              />
            </div>

            {timeline.map((step, index) => (
              <div key={index} className="flex flex-col items-center flex-1 relative z-10">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-3 ${
                  step.completed ? 'bg-green-500' :
                  step.current ? 'bg-blue-600' :
                  'bg-gray-200'
                }`}>
                  {step.completed ? (
                    <Check className="w-5 h-5 text-white" />
                  ) : step.current ? (
                    <Clock className="w-5 h-5 text-white" />
                  ) : (
                    <div className="w-3 h-3 rounded-full bg-gray-400" />
                  )}
                </div>
                <p className={`text-[14px] font-medium text-center ${
                  step.current ? 'text-blue-600' : 'text-gray-700'
                }`}>{step.label}</p>
                {step.date && (
                  <p className="text-[12px] text-gray-500 mt-1">
                    {new Date(step.date).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' })}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="col-span-2 space-y-6">
            {/* Resignation Details */}
            <div className="bg-white rounded-xl border border-[#eceff3] p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <FileText className="w-5 h-5 text-blue-600" />
                <h2 className="text-lg font-semibold text-[#131313]">Resignation Details</h2>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Resignation Date</p>
                  <p className="text-[16px] font-medium text-[#141518]">
                    {new Date(resignationData.resignation.submittedDate).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' })}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Last Working Day (Employee)</p>
                  <p className="text-[16px] font-medium text-[#141518]">
                    {new Date(resignationData.resignation.requestedLWD).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' })}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Manager Approved LWD</p>
                  <p className="text-[16px] font-medium text-green-600">
                    {new Date(resignationData.resignation.managerApprovedLWD).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' })}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Reason</p>
                  <p className="text-[16px] font-medium text-[#141518]">{resignationData.resignation.reason}</p>
                </div>
                <div className="col-span-2">
                  <p className="text-sm text-gray-600 mb-1">Additional Comments</p>
                  <p className="text-[16px] text-gray-700">{resignationData.resignation.comments}</p>
                </div>
              </div>
            </div>

            {/* Manager Action */}
            <div className="bg-white rounded-xl border border-[#eceff3] p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <User className="w-5 h-5 text-blue-600" />
                <h2 className="text-lg font-semibold text-[#131313]">Manager Action</h2>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Manager Name</p>
                  <p className="text-[16px] font-medium text-[#141518]">{resignationData.manager.name}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Action Taken</p>
                  <span className="inline-flex px-3 py-1 rounded-full text-[14px] font-medium bg-green-100 text-green-700 border border-green-200">
                    {resignationData.manager.action}
                  </span>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Action Date</p>
                  <p className="text-[16px] font-medium text-[#141518]">
                    {new Date(resignationData.manager.actionDate).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' })}
                  </p>
                </div>
                <div className="col-span-2">
                  <p className="text-sm text-gray-600 mb-1">Manager Comments</p>
                  <p className="text-[16px] text-gray-700">{resignationData.manager.comments}</p>
                </div>
              </div>
            </div>

            {/* HR Review */}
            <div className="bg-white rounded-xl border border-[#eceff3] p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <Calendar className="w-5 h-5 text-blue-600" />
                <h2 className="text-lg font-semibold text-[#131313]">HR Review</h2>
              </div>

              {/* Notice Period Status */}
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm font-medium text-green-900">Notice Period Status</p>
                  <span className="px-3 py-1 rounded-full text-[14px] font-medium bg-green-100 text-green-700 border border-green-200">
                    {resignationData.hrReview.noticePeriod.status}
                  </span>
                </div>
                <div className="flex items-center gap-4 text-[14px] text-green-700">
                  <span>Required: {resignationData.hrReview.noticePeriod.required} days</span>
                  <span>•</span>
                  <span>Served: {resignationData.hrReview.noticePeriod.served} days</span>
                </div>
              </div>

              {/* Leave Adjustment */}
              <div className="mb-6">
                <p className="text-sm font-medium text-gray-900 mb-3">Leave Adjustment</p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <p className="text-[14px] text-gray-600">Casual Leave</p>
                    <p className="text-[18px] font-semibold text-gray-900">{resignationData.hrReview.leaveBalance.casualLeave} days</p>
                  </div>
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <p className="text-[14px] text-gray-600">Earned Leave</p>
                    <p className="text-[18px] font-semibold text-gray-900">{resignationData.hrReview.leaveBalance.earnedLeave} days</p>
                  </div>
                  <div className="p-3 bg-blue-50 rounded-lg col-span-2">
                    <p className="text-[14px] text-blue-700">Total Encashment</p>
                    <p className="text-[18px] font-semibold text-blue-900">
                      ₹{resignationData.hrReview.leaveBalance.encashmentAmount.toLocaleString()} ({resignationData.hrReview.leaveBalance.totalDays} days)
                    </p>
                  </div>
                </div>
              </div>

              {/* Recovery */}
              <div className="mb-6">
                <p className="text-sm font-medium text-gray-900 mb-3">Recovery</p>
                <div className="space-y-2">
                  <div className="flex justify-between text-[14px]">
                    <span className="text-gray-600">Loan Amount</span>
                    <span className="font-medium text-red-600">₹{resignationData.hrReview.recovery.loanAmount.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-[14px]">
                    <span className="text-gray-600">Advance Amount</span>
                    <span className="font-medium text-red-600">₹{resignationData.hrReview.recovery.advanceAmount.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-[16px] font-semibold pt-2 border-t border-gray-200">
                    <span className="text-gray-900">Total Recovery</span>
                    <span className="text-red-600">₹{resignationData.hrReview.recovery.total.toLocaleString()}</span>
                  </div>
                </div>
              </div>

              {/* Asset Checklist */}
              <div>
                <p className="text-sm font-medium text-gray-900 mb-3">Asset Checklist</p>
                <div className="space-y-2">
                  {resignationData.hrReview.assets.map((asset, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <span className="text-[14px] text-gray-700">{asset.name}</span>
                      <div className="flex items-center gap-3">
                        {asset.returned ? (
                          <span className="flex items-center gap-1 text-green-600 text-[14px] font-medium">
                            <Check className="w-4 h-4" />
                            Returned
                          </span>
                        ) : (
                          <>
                            <span className="flex items-center gap-1 text-yellow-600 text-[14px] font-medium">
                              <AlertCircle className="w-4 h-4" />
                              Pending
                            </span>
                            <button
                              onClick={() => navigate(`/employees/assets/return/${index + 1}`)}
                              className="flex items-center gap-1 px-3 py-1.5 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors text-xs font-semibold"
                            >
                              <RotateCcw className="w-3.5 h-3.5" />
                              Return Asset
                            </button>
                          </>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Employee Info */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl border border-[#eceff3] p-6 shadow-sm sticky top-6">
              <div className="flex items-center gap-3 mb-4">
                <User className="w-5 h-5 text-blue-600" />
                <h2 className="text-lg font-semibold text-[#131313]">Employee Info</h2>
              </div>
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Name</p>
                  <p className="text-[16px] font-medium text-[#141518]">{resignationData.employee.name}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Employee ID</p>
                  <p className="text-[16px] font-medium text-[#141518]">{resignationData.employee.id}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Email</p>
                  <p className="text-[16px] text-[#141518]">{resignationData.employee.email}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Department</p>
                  <p className="text-[16px] font-medium text-[#141518]">{resignationData.employee.department}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Designation</p>
                  <p className="text-[16px] font-medium text-[#141518]">{resignationData.employee.designation}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Reporting Manager</p>
                  <p className="text-[16px] font-medium text-[#141518]">{resignationData.employee.reportingManager}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Date of Joining</p>
                  <p className="text-[16px] font-medium text-[#141518]">
                    {new Date(resignationData.employee.dateOfJoining).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' })}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons - Role Based */}
      {userRole === 'hr' && (
        <div className="sticky bottom-0 z-20 bg-white border-t border-[#eceff3] shadow-lg">
          <div className="px-8 py-4 flex items-center justify-between">
            <button
              onClick={() => navigate('/resignation')}
              className="px-5 py-2.5 border border-[#eceff3] text-gray-700 rounded-xl hover:bg-gray-50 transition-colors text-sm font-medium"
            >
              Back to List
            </button>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsEditLWDOpen(true)}
                className="flex items-center gap-2 px-5 py-2.5 border border-[#eceff3] text-gray-700 rounded-xl hover:bg-gray-50 transition-colors text-sm font-medium"
              >
                <Edit3 className="w-4 h-4" />
                Edit Last Working Day
              </button>
              <button
                onClick={() => setIsPutOnHoldOpen(true)}
                className="flex items-center gap-2 px-5 py-2.5 border border-amber-300 bg-amber-50 text-amber-700 rounded-xl hover:bg-amber-100 transition-colors text-sm font-medium"
              >
                <Clock className="w-4 h-4" />
                Put On Hold
              </button>
              <button
                onClick={() => setIsRejectOpen(true)}
                className="flex items-center gap-2 px-5 py-2.5 bg-red-600 text-white rounded-xl hover:bg-red-700 transition-colors text-sm font-medium"
              >
                <X className="w-4 h-4" />
                Reject
              </button>
              <button
                onClick={() => setIsApproveOpen(true)}
                className="flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors text-sm font-medium shadow-sm"
              >
                <Check className="w-4 h-4" />
                Approve
              </button>
            </div>
          </div>
        </div>
      )}

      {userRole !== 'hr' && (
        <div className="sticky bottom-0 z-20 bg-white border-t border-[#eceff3] shadow-lg">
          <div className="px-8 py-4 flex items-center justify-between">
            <button
              onClick={() => navigate('/resignation')}
              className="px-5 py-2.5 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors text-sm font-medium"
            >
              Back to List
            </button>
            <div className="bg-blue-50 border border-blue-200 rounded-lg px-4 py-2">
              <p className="text-sm text-blue-700">Read-only view - You don't have permission to make changes</p>
            </div>
          </div>
        </div>
      )}

      {/* Modals */}
      <EditLWDModal
        isOpen={isEditLWDOpen}
        onClose={() => setIsEditLWDOpen(false)}
        currentLWD={resignationData.resignation.managerApprovedLWD}
        employeeName={resignationData.employee.name}
        onSave={handleEditLWD}
      />
      <PutOnHoldModal
        isOpen={isPutOnHoldOpen}
        onClose={() => setIsPutOnHoldOpen(false)}
        employeeName={resignationData.employee.name}
        onConfirm={handlePutOnHold}
      />
      <RejectModal
        isOpen={isRejectOpen}
        onClose={() => setIsRejectOpen(false)}
        employeeName={resignationData.employee.name}
        onConfirm={handleReject}
      />
      <ApproveModal
        isOpen={isApproveOpen}
        onClose={() => setIsApproveOpen(false)}
        employeeName={resignationData.employee.name}
        lastWorkingDay={resignationData.resignation.managerApprovedLWD}
        onConfirm={handleApprove}
      />
    </div>
  );
}
