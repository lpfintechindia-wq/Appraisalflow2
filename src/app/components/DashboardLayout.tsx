import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';
import { Bell, ChevronDown, User, Users, FileText, TrendingUp, Receipt, Target, Calendar, BarChart3, Megaphone, Settings, ChevronRight, DollarSign, Play, CheckSquare, Eye, LogOut, UserCheck, FileCheck, ClipboardCheck, Award } from 'lucide-react';
import { useState } from 'react';
import svgPaths from '../../imports/DashboardOverview-1-1/svg-v67h10gk7o';

export function DashboardLayout() {
  const location = useLocation();
  const navigate = useNavigate();
  const [expandedSections, setExpandedSections] = useState<string[]>(['employees', 'salary', 'payroll', 'appraisal']);

  const toggleSection = (section: string) => {
    setExpandedSections(prev =>
      prev.includes(section)
        ? prev.filter(s => s !== section)
        : [...prev, section]
    );
  };

  const isActive = (path: string) => location.pathname === path;
  const isSalaryActive = location.pathname.startsWith('/salary');
  const isEmployeesActive = location.pathname.startsWith('/employees') || location.pathname.startsWith('/resignation');

  return (
    <div className="flex h-screen bg-[#f8f9fc]">
      {/* Sidebar */}
      <div className="w-[212px] bg-[#fdfdfd] border-r border-[rgba(0,0,0,0.1)] flex flex-col">
        {/* Logo */}
        <div className="py-[16px] px-4 flex flex-col gap-1 items-center justify-center flex-shrink-0">
          <div className="h-[47px] w-[134px] relative overflow-clip">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 134 47">
              <g>
                <path clipRule="evenodd" d="M0 47H134V0H0V47Z" fill="#9D1D27" fillRule="evenodd" />
                <path clipRule="evenodd" d={svgPaths.p11855300} fill="#FEFEFE" fillRule="evenodd" />
                <path clipRule="evenodd" d={svgPaths.p198ee000} fill="#FEFEFE" fillRule="evenodd" />
                <mask height="47" id="mask0_1_4521" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="134" x="0" y="0">
                  <path d="M0 47H134V0H0V47Z" fill="white" />
                </mask>
                <g mask="url(#mask0_1_4521)">
                  <path clipRule="evenodd" d={svgPaths.p9760800} fill="#FEFEFE" fillRule="evenodd" />
                </g>
              </g>
            </svg>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 py-3 flex flex-col gap-[17px] overflow-y-auto overflow-x-hidden"
          style={{
            scrollbarWidth: 'thin',
            scrollbarColor: '#d1d5db #f3f4f6'
          }}>
          {/* Dashboard */}
          <Link
            to="/salary/structure"
            className={`relative ${
              isSalaryActive ? 'bg-[#e4c5ff]' : ''
            }`}
          >
            {isSalaryActive && (
              <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[rgba(75,27,145,0.55)]" />
            )}
            <div className="px-[15px] py-2 flex items-center gap-2">
              <div className="w-5 h-5 flex items-center justify-center">
                <svg className="w-5 h-5" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                  <path d={svgPaths.p3e4e8900} fill="black" stroke="black" />
                </svg>
              </div>
              <span className="text-sm font-normal">Dashboard</span>
            </div>
          </Link>

          {/* Employees */}
          <div className={`relative ${isEmployeesActive ? 'bg-[#e4c5ff]' : ''}`}>
            {isEmployeesActive && (
              <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[rgba(75,27,145,0.55)]" />
            )}
            <button
              onClick={() => toggleSection('employees')}
              className="w-full px-[15px] py-2 flex items-center gap-1"
            >
              <div className="flex-1 flex items-center gap-2">
                <Users className="w-5 h-5" />
                <span className="text-sm font-normal">Employees</span>
              </div>
              <ChevronRight className={`w-4 h-4 transition-transform ${expandedSections.includes('employees') ? 'rotate-90' : ''}`} />
            </button>
            {expandedSections.includes('employees') && (
              <div className="flex flex-col">
                <Link
                  to="/employees/all"
                  className={`px-[15px] py-2 pl-[43px] ${
                    isActive('/employees/all') ? 'bg-gray-100' : 'hover:bg-gray-50'
                  }`}
                >
                  <span className="text-sm font-normal">All Employees</span>
                </Link>
                <Link
                  to="/employees/assets"
                  className={`px-[15px] py-2 pl-[43px] ${
                    isActive('/employees/assets') ? 'bg-gray-100' : 'hover:bg-gray-50'
                  }`}
                >
                  <span className="text-sm font-normal">Asset Management</span>
                </Link>
                <Link
                  to="/resignation"
                  className={`px-[15px] py-2 pl-[43px] ${
                    location.pathname.startsWith('/resignation') ? 'bg-gray-100' : 'hover:bg-gray-50'
                  }`}
                >
                  <span className="text-sm font-normal">Resignation Request</span>
                </Link>
              </div>
            )}
          </div>

          {/* Salary Section */}
          <div>
            
            {expandedSections.includes('salary') && (
              <div className="flex flex-col">
                <Link
                  to="/salary/structure"
                  className={`px-[15px] py-2 pl-[43px] ${
                    isActive('/salary/structure') ? 'bg-gray-100' : 'hover:bg-gray-50'
                  }`}
                >
                  <span className="text-sm font-normal">Salary Structure</span>
                </Link>
                <Link
                  to="/salary/employee"
                  className={`px-[15px] py-2 pl-[43px] ${
                    isActive('/salary/employee') ? 'bg-gray-100' : 'hover:bg-gray-50'
                  }`}
                >
                  <span className="text-sm font-normal">Employee Salary</span>
                </Link>
                <Link
                  to="/salary/revision"
                  className={`px-[15px] py-2 pl-[43px] ${
                    isActive('/salary/revision') ? 'bg-gray-100' : 'hover:bg-gray-50'
                  }`}
                >
                  <span className="text-sm font-normal">Salary Revision</span>
                </Link>
                <Link
                  to="/salary/arrears"
                  className={`px-[15px] py-2 pl-[43px] ${
                    isActive('/salary/arrears') ? 'bg-gray-100' : 'hover:bg-gray-50'
                  }`}
                >
                  <span className="text-sm font-normal">Arrears</span>
                </Link>
              </div>
            )}
          </div>

          {/* Payroll Processing Section */}
          <div>
            <button
              onClick={() => toggleSection('payroll')}
              className="w-full px-[15px] py-2 flex items-center gap-1"
            >
              <div className="flex-1 flex items-center gap-2">
                <DollarSign className="w-5 h-5" />
                <span className="text-sm font-normal">Payroll Processing</span>
              </div>
              <ChevronRight className={`w-4 h-4 transition-transform ${expandedSections.includes('payroll') ? 'rotate-90' : ''}`} />
            </button>
            {expandedSections.includes('payroll') && (
              <div className="flex flex-col">
                <Link
                  to="/payroll/periods"
                  className={`px-[15px] py-2 pl-[43px] ${
                    isActive('/payroll/periods') ? 'bg-gray-100' : 'hover:bg-gray-50'
                  }`}
                >
                  <span className="text-sm font-normal">Payroll Periods</span>
                </Link>
                <Link
                  to="/payroll/run"
                  className={`px-[15px] py-2 pl-[43px] ${
                    isActive('/payroll/run') ? 'bg-gray-100' : 'hover:bg-gray-50'
                  }`}
                >
                  <span className="text-sm font-normal">Run Payroll</span>
                </Link>
                <Link
                  to="/payroll/review"
                  className={`px-[15px] py-2 pl-[43px] ${
                    isActive('/payroll/review') ? 'bg-gray-100' : 'hover:bg-gray-50'
                  }`}
                >
                  <span className="text-sm font-normal">Review & Approve</span>
                </Link>
                <Link
                  to="/payroll/payslips"
                  className={`px-[15px] py-2 pl-[43px] ${
                    isActive('/payroll/payslips') ? 'bg-gray-100' : 'hover:bg-gray-50'
                  }`}
                >
                  <span className="text-sm font-normal">Payslip Viewer</span>
                </Link>
              </div>
            )}
          </div>

          {/* Appraisal Section */}
          <div>
            <button
              onClick={() => toggleSection('appraisal')}
              className="w-full px-[15px] py-2 flex items-center gap-1"
            >
              <div className="flex-1 flex items-center gap-2">
                <Award className="w-5 h-5" />
                <span className="text-sm font-normal">Appraisal</span>
              </div>
              <ChevronRight className={`w-4 h-4 transition-transform ${expandedSections.includes('appraisal') ? 'rotate-90' : ''}`} />
            </button>
            {expandedSections.includes('appraisal') && (
              <div className="flex flex-col">
                <Link
                  to="/appraisal/dashboard"
                  className={`px-[15px] py-2 pl-[43px] ${
                    isActive('/appraisal/dashboard') ? 'bg-gray-100' : 'hover:bg-gray-50'
                  }`}
                >
                  <span className="text-sm font-normal">Dashboard</span>
                </Link>
                <Link
                  to="/appraisal/cycles"
                  className={`px-[15px] py-2 pl-[43px] ${
                    isActive('/appraisal/cycles') ? 'bg-gray-100' : 'hover:bg-gray-50'
                  }`}
                >
                  <span className="text-sm font-normal">Cycles</span>
                </Link>
                <Link
                  to="/appraisal/runs"
                  className={`px-[15px] py-2 pl-[43px] ${
                    isActive('/appraisal/runs') ? 'bg-gray-100' : 'hover:bg-gray-50'
                  }`}
                >
                  <span className="text-sm font-normal">Appraisal Runs</span>
                </Link>
                <Link
                  to="/appraisal/goals"
                  className={`px-[15px] py-2 pl-[43px] ${
                    isActive('/appraisal/goals') ? 'bg-gray-100' : 'hover:bg-gray-50'
                  }`}
                >
                  <span className="text-sm font-normal">Goals & OKRs</span>
                </Link>
                <Link
                  to="/appraisal/feedback"
                  className={`px-[15px] py-2 pl-[43px] ${
                    isActive('/appraisal/feedback') ? 'bg-gray-100' : 'hover:bg-gray-50'
                  }`}
                >
                  <span className="text-sm font-normal">Feedback</span>
                </Link>
                <Link
                  to="/appraisal/calibration"
                  className={`px-[15px] py-2 pl-[43px] ${
                    isActive('/appraisal/calibration') ? 'bg-gray-100' : 'hover:bg-gray-50'
                  }`}
                >
                  <span className="text-sm font-normal">Calibration</span>
                </Link>
                <Link
                  to="/appraisal/pips"
                  className={`px-[15px] py-2 pl-[43px] ${
                    isActive('/appraisal/pips') ? 'bg-gray-100' : 'hover:bg-gray-50'
                  }`}
                >
                  <span className="text-sm font-normal">PIPs</span>
                </Link>
                <Link
                  to="/appraisal/recognition"
                  className={`px-[15px] py-2 pl-[43px] ${
                    isActive('/appraisal/recognition') ? 'bg-gray-100' : 'hover:bg-gray-50'
                  }`}
                >
                  <span className="text-sm font-normal">Recognition</span>
                </Link>
                <Link
                  to="/appraisal/analytics"
                  className={`px-[15px] py-2 pl-[43px] ${
                    isActive('/appraisal/analytics') ? 'bg-gray-100' : 'hover:bg-gray-50'
                  }`}
                >
                  <span className="text-sm font-normal">Analytics</span>
                </Link>
                <Link
                  to="/appraisal/configuration"
                  className={`px-[15px] py-2 pl-[43px] ${
                    isActive('/appraisal/configuration') ? 'bg-gray-100' : 'hover:bg-gray-50'
                  }`}
                >
                  <span className="text-sm font-normal">Configuration</span>
                </Link>
                <Link
                  to="/appraisal/settings"
                  className={`px-[15px] py-2 pl-[43px] ${
                    isActive('/appraisal/settings') ? 'bg-gray-100' : 'hover:bg-gray-50'
                  }`}
                >
                  <span className="text-sm font-normal">Settings</span>
                </Link>
              </div>
            )}
          </div>

          {/* Leaves */}
          <div>
            <button
              onClick={() => toggleSection('leaves')}
              className="w-full px-[15px] py-2 flex items-center gap-1"
            >
              <div className="flex-1 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 20 20">
                  <path d={svgPaths.p980e500} stroke="black" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-sm font-normal">Leaves</span>
              </div>
              <ChevronRight className={`w-4 h-4 transition-transform ${expandedSections.includes('leaves') ? 'rotate-90' : ''}`} />
            </button>
          </div>

          {/* Targets */}
          <Link to="#" className="px-[15px] py-2 flex items-center gap-2">
            <Target className="w-5 h-5" />
            <span className="text-sm font-normal">Targets</span>
          </Link>

          {/* Meetings */}
          <Link to="#" className="px-[15px] py-2 flex items-center gap-2">
            <Calendar className="w-5 h-5" />
            <span className="text-sm font-normal">Meetings</span>
          </Link>

          {/* Reports */}
          <Link to="#" className="px-[15px] py-2 flex items-center gap-2">
            <BarChart3 className="w-5 h-5" />
            <span className="text-sm font-normal">Reports</span>
          </Link>

          {/* Announcements */}
          <Link to="#" className="px-[15px] py-2 flex items-center gap-2">
            <Megaphone className="w-5 h-5" />
            <span className="text-sm font-normal">Announcements</span>
          </Link>

          {/* Settings */}
          <Link to="#" className="px-[15px] py-2 flex items-center gap-2">
            <Settings className="w-5 h-5" />
            <span className="text-sm font-normal">Settings</span>
          </Link>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6">
          <div className="flex items-center gap-4">
            <h1 className="text-xl font-semibold text-gray-900">Salary Management</h1>
          </div>

          <div className="flex items-center gap-4">
            {/* Module Selector */}
            <div className="relative">
              
              
            </div>

            {/* Company Selector */}
            

            {/* Notifications */}
            <button className="relative p-2 rounded-lg hover:bg-gray-50 transition-colors">
              <Bell className="w-5 h-5 text-gray-600" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>

            {/* User Profile */}
            <button className="flex items-center gap-2 p-1 rounded-lg hover:bg-gray-50 transition-colors">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#2563eb] to-[#1d4ed8] flex items-center justify-center">
                <User className="w-5 h-5 text-white" />
              </div>
              <div className="text-left">
                <p className="text-sm font-medium text-gray-900">Admin</p>
              </div>
              <ChevronDown className="w-4 h-4 text-gray-500" />
            </button>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
