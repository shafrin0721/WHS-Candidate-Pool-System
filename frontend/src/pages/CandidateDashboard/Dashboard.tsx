import { Link } from 'react-router-dom';
import "../../Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <div>
          <h2 className="dashboard-title">CandidateHub Dashboard</h2>
          <p className="dashboard-subtitle">Welcome to your hiring workspace</p>
        </div>

        <div className="dashboard-stats">
          <div className="dashboard-stat">
            <div className="dashboard-stat-value">1,248</div>
            <div className="dashboard-stat-label">Candidates</div>
          </div>
          <div className="dashboard-stat">
            <div className="dashboard-stat-value">12</div>
            <div className="dashboard-stat-label">Open tickets</div>
          </div>
          <div className="dashboard-stat">
            <div className="dashboard-stat-value">94%</div>
            <div className="dashboard-stat-label">Duplication confidence</div>
          </div>
        </div>

        <div className="dashboard-profile">
          <Link to="/settings" className="profile-pic">A</Link>
        </div>
      </div>

      <div className="dashboard-grid">
        <section className="dashboard-card">
          <h3>Quick Actions</h3>
          <div className="dashboard-actions">
            <Link className="dashboard-action" to="/browse">
              Browse Jobs
            </Link>
            <Link className="dashboard-action" to="/candidates">
              Review Candidates
            </Link>
            <Link className="dashboard-action" to="/duplicates">
              Check Duplicates
            </Link>
            <Link className="dashboard-action" to="/settings">
              Settings
            </Link>
          </div>
        </section>

        <section className="dashboard-card">
          <h3>System Overview</h3>
          <div className="dashboard-overview">
            <div className="overview-row">
              <span className="overview-key">Latest Activity</span>
              <span className="overview-val">Ticket #86291-D reviewed</span>
            </div>
            <div className="overview-row">
              <span className="overview-key">Status</span>
              <span className="overview-val">All systems normal</span>
            </div>
            <div className="overview-row">
              <span className="overview-key">Next Step</span>
              <span className="overview-val">Resolve duplicates & merge profiles</span>
            </div>
          </div>
        </section>

        <section className="dashboard-card dashboard-card-wide">
          <h3>Recent Updates</h3>
          <div className="dashboard-updates">
            <div className="update-item">
              <div className="update-badge success">✓</div>
              <div>
                <div className="update-title">Duplicate flagged (94% confidence)</div>
                <div className="update-time">Oct 24 • 10:45 AM</div>
              </div>
            </div>

            <div className="update-item">
              <div className="update-badge neutral">i</div>
              <div>
                <div className="update-title">Profile details verified</div>
                <div className="update-time">Oct 24 • 11:12 AM</div>
              </div>
            </div>

            <div className="update-item">
              <div className="update-badge neutral">↻</div>
              <div>
                <div className="update-title">Merge suggestion generated</div>
                <div className="update-time">Oct 24 • 11:30 AM</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;

