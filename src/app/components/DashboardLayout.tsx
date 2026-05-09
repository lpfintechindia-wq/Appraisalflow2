import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';
import { Bell, ChevronDown, User, ChevronRight, Award } from 'lucide-react';
import { useState } from 'react';
import svgPaths from '../../imports/DashboardOverview-1-1/svg-v67h10gk7o';

export function DashboardLayout() {
  const location = useLocation();
  const navigate = useNavigate();
  const [expandedSections, setExpandedSections] = useState<string[]>(['appraisal']);

  const toggleSection = (section: string) => {
    setExpandedSections(prev =>
      prev.includes(section)
        ? prev.filter(s => s !== section)
        : [...prev, section]
    );
  };

  const isActive = (path: string) => location.pathname === path;

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
