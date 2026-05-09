import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { DashboardLayout } from './components/DashboardLayout';
import { SalaryStructure } from './components/salary/SalaryStructure';
import { EmployeeSalary } from './components/salary/EmployeeSalary';
import { AssignSalary } from './components/salary/AssignSalary';
import { ViewEmployeeSalary } from './components/salary/ViewEmployeeSalary';
import { EditEmployeeSalary } from './components/salary/EditEmployeeSalary';
import { SalaryRevision } from './components/salary/SalaryRevision';
import { Arrears } from './components/salary/Arrears';
import { PayrollPeriods } from './components/payroll/PayrollPeriods';
import { CreateNewPeriod } from './components/payroll/CreateNewPeriod';
import { RunPayroll } from './components/payroll/RunPayroll';
import { ReviewApprove } from './components/payroll/ReviewApprove';
import { PayslipViewer } from './components/payroll/PayslipViewer';
import { ResignationList } from './components/resignation/ResignationList';
import { ResignationDetail } from './components/resignation/ResignationDetail';
import { AllReport } from './components/reports/AllReport';
import { EmployeeReport } from './components/reports/EmployeeReport';
import { AttendanceReport } from './components/reports/AttendanceReport';
import { LeavesReport } from './components/reports/LeavesReport';
import { DownloadedReports } from './components/reports/DownloadedReports';
import { AllEmployees } from './components/employees/AllEmployees';
import { AssetManagement } from './components/employees/AssetManagement';
import { EmployeeAssetDetail } from './components/employees/EmployeeAssetDetail';
import { AssignAsset } from './components/employees/AssignAsset';
import { ReturnAsset } from './components/employees/ReturnAsset';
import { AppraisalDashboard } from './components/appraisal/AppraisalDashboard';
import { Cycles } from './components/appraisal/Cycles';
import { AppraisalRuns } from './components/appraisal/AppraisalRuns';
import { Goals } from './components/appraisal/Goals';
import { HRGoals } from './components/appraisal/HRGoals';
import { Feedback as FeedbackManagement } from './components/feedback/Feedback';
import { Calibration } from './components/appraisal/Calibration';
import { PIPs } from './components/pips/PIPs';
import { Recognition } from './components/recognition/Recognition';
import { Analytics } from './components/appraisal/Analytics';
import { Settings as AppraisalSettings } from './components/appraisal/Settings';
import { Configuration } from './components/appraisal/Configuration';
import { EmployeeAppraisalView } from './components/appraisal/EmployeeAppraisalView';
import { NewAppraisalCycle } from './components/appraisal/NewAppraisalCycle';
import { TemplateBuilderPage } from './components/appraisal/TemplateBuilderPage';
import { CalibrationSessionView } from './components/appraisal/CalibrationSessionView';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardLayout />}>
          <Route index element={<Navigate to="/salary/structure" replace />} />
          <Route path="employees/all" element={<AllEmployees />} />
          <Route path="employees/assets" element={<AssetManagement />} />
          <Route path="employees/assets/:employeeId" element={<EmployeeAssetDetail />} />
          <Route path="employees/assets/assign" element={<AssignAsset />} />
          <Route path="employees/assets/return/:assetId" element={<ReturnAsset />} />
          <Route path="salary/structure" element={<SalaryStructure />} />
          <Route path="salary/employee" element={<EmployeeSalary />} />
          <Route path="salary/employee/assign" element={<AssignSalary />} />
          <Route path="salary/employee/view/:id" element={<ViewEmployeeSalary />} />
          <Route path="salary/employee/edit/:id" element={<EditEmployeeSalary />} />
          <Route path="salary/revision" element={<SalaryRevision />} />
          <Route path="salary/arrears" element={<Arrears />} />
          <Route path="payroll/periods" element={<PayrollPeriods />} />
          <Route path="payroll/periods/new" element={<CreateNewPeriod />} />
          <Route path="payroll/run" element={<RunPayroll />} />
          <Route path="payroll/review" element={<ReviewApprove />} />
          <Route path="payroll/payslips" element={<PayslipViewer />} />
          <Route path="resignation" element={<ResignationList />} />
          <Route path="resignation/:id" element={<ResignationDetail />} />
          <Route path="reports/all" element={<AllReport />} />
          <Route path="reports/employee" element={<EmployeeReport />} />
          <Route path="reports/attendance" element={<AttendanceReport />} />
          <Route path="reports/leaves" element={<LeavesReport />} />
          <Route path="reports/downloaded" element={<DownloadedReports />} />
          <Route path="appraisal/dashboard" element={<AppraisalDashboard />} />
          <Route path="appraisal/cycles" element={<Cycles />} />
          <Route path="appraisal/cycles/new" element={<NewAppraisalCycle />} />
          <Route path="appraisal/runs" element={<AppraisalRuns />} />
          <Route path="appraisal/runs/view/:id" element={<EmployeeAppraisalView />} />
          <Route path="appraisal/goals" element={<Goals />} />
          <Route path="appraisal/hr-goals" element={<HRGoals />} />
          <Route path="appraisal/feedback" element={<FeedbackManagement />} />
          <Route path="appraisal/calibration" element={<Calibration />} />
          <Route path="appraisal/calibration/view/:id" element={<CalibrationSessionView />} />
          <Route path="appraisal/pips" element={<PIPs />} />
          <Route path="appraisal/recognition" element={<Recognition />} />
          <Route path="appraisal/analytics" element={<Analytics />} />
          <Route path="appraisal/configuration" element={<Configuration />} />
          <Route path="appraisal/configuration/template/new" element={<TemplateBuilderPage />} />
          <Route path="appraisal/configuration/template/edit" element={<TemplateBuilderPage />} />
          <Route path="appraisal/settings" element={<AppraisalSettings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}