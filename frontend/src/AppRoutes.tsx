import { BrowserRouter, Routes, Route } from "react-router-dom";
import VerificationSuccess from "./pages/VerificationSuccess/VerificationSuccess";
import EmailVerification from "./pages/EmailVerification/EmailVerification";
import CandidateApplicationView from "./pages/CandidateApplication/CandidateApplication";

import MainLayout from "./Layout/MainLayout";
import Dashboard from "./pages/CandidateDashboard/Dashboard";
import Candidates from "./pages/Candidates/Candidates";
import TicketTracking from "./pages/TicketTracking/TicketTracking";
import HelpCenter from "./pages/HelpCenter/HelpCenter";

import Terms from "./pages/Terms/Terms";
import Privacy from "./pages/Privacy/Privacy";
import NotFound from "./pages/NotFound/NotFound";

const Duplicates = () => (
  <div className="duplicates">
    <h2>Duplicates</h2>
    <p>Find duplicate candidate records</p>
  </div>
);

const Settings = () => (
  <div className="settings">
    <h2>Settings</h2>
    <p>Manage your account settings</p>
  </div>
);

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<VerificationSuccess />} />
        <Route path="/verified" element={<VerificationSuccess />} />
        <Route path="/email-verification" element={<EmailVerification />} />
        <Route path="/profile" element={<CandidateApplicationView />} />
        <Route
          path="/dashboard"
          element={
            <MainLayout>
              <Dashboard />
            </MainLayout>
          }
        />
        <Route
          path="/candidates"
          element={
            <MainLayout>
              <Candidates />
            </MainLayout>
          }
        />
        <Route
          path="/duplicates"
          element={
            <MainLayout>
              <Duplicates />
            </MainLayout>
          }
        />
        <Route
          path="/ticket-tracking"
          element={
            <MainLayout>
              <TicketTracking />
            </MainLayout>
          }
        />
        <Route
          path="/help"
          element={
            <MainLayout>
              <HelpCenter />
            </MainLayout>
          }
        />
        <Route
          path="/settings"
          element={
            <MainLayout>
              <Settings />
            </MainLayout>
          }
        />

        {/* Policies */}
        <Route
          path="/terms"
          element={<Terms />}
        />
        <Route
          path="/privacy"
          element={<Privacy />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;

