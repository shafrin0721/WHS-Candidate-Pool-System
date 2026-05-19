import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import type { ReactElement } from "react";
import MainLayout from "./Layout/MainLayout";
import AdminReports from "./pages/Admin/Reports";
import AdminSalaryInsights from "./pages/Admin/SalaryInsights";
import Reports from "./pages/Reports/Reports";
import SalaryInsights from "./pages/SalaryInsights/SalaryInsights";
import NotFound from "./pages/NotFound";

const withLayout = (page: ReactElement) => <MainLayout>{page}</MainLayout>;

const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navigate to="/reports" replace />} />
      <Route path="/admin/reports" element={withLayout(<AdminReports />)} />
      <Route path="/admin/salary-insights" element={withLayout(<AdminSalaryInsights />)} />
      <Route path="/reports" element={withLayout(<Reports />)} />
      <Route path="/salary-insights" element={withLayout(<SalaryInsights />)} />
      <Route path="/not-found" element={withLayout(<NotFound />)} />
      <Route path="*" element={withLayout(<NotFound />)} />
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;
