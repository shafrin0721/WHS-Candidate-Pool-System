import { FiBell, FiChevronDown, FiMenu } from "react-icons/fi";

const Topbar = () => (
  <header className="admin-topbar">
    <button type="button" className="admin-icon-button" aria-label="Open menu">
      <FiMenu />
    </button>

    <div className="admin-topbar-actions">
      <button type="button" className="admin-icon-button admin-notification-button" aria-label="Notifications">
        <FiBell />
        <span className="admin-notification-dot" />
      </button>

      <button type="button" className="admin-profile-button">
        <span className="admin-avatar">A</span>
        <span className="admin-profile-name">Admin</span>
        <FiChevronDown className="admin-chevron" />
      </button>
    </div>
  </header>
);

export default Topbar;
