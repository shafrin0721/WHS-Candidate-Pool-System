import type { ReactNode } from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => (
  <div className="admin-shell">
    <Sidebar />
    <main className="admin-main">
      <Topbar />
      <div className="admin-content">{children}</div>
    </main>
  </div>
);

export default MainLayout;
