import { Link, useLocation } from "react-router-dom";
import {
  FiBarChart2,
  FiBriefcase,
  FiDatabase,
  FiFileText,
  FiGrid,
  FiLayers,
  FiSettings,
  FiTool,
  FiUsers,
} from "react-icons/fi";

const navItems = [
  { label: "Dashboard", path: "/not-found", icon: FiGrid },
  { label: "Candidates", path: "/not-found", icon: FiUsers },
  { label: "Fields", path: "/not-found", icon: FiBriefcase },
  { label: "Skills", path: "/not-found", icon: FiTool },
  { label: "Reports", path: "/reports", icon: FiFileText },
  { label: "Salary Insights", path: "/salary-insights", icon: FiBarChart2 },
  { label: "Settings", path: "/not-found", icon: FiSettings },
  { label: "Users", path: "/not-found", icon: FiUsers },
  { label: "Export Data", path: "/not-found", icon: FiDatabase },
];

const Sidebar = () => {
  const { pathname } = useLocation();

  return (
  <aside className="admin-sidebar">
    <div className="admin-sidebar-inner">
      <div className="admin-brand">
        <div className="admin-brand-mark">
          <FiLayers />
        </div>
        <div>
          <p className="admin-brand-title">Workforce Hiring Solutions</p>
          <p className="admin-brand-subtitle">Admin Portal</p>
        </div>
      </div>

      <nav className="admin-nav">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.path && item.path !== "/not-found";

          return (
            <Link
              key={item.label}
              to={item.path}
              className={`admin-nav-link ${isActive ? "active" : ""}`}
            >
              <Icon />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  </aside>
  );
};

export default Sidebar;
