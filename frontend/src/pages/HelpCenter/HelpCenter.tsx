import { Link } from "react-router-dom";
import "./HelpCenter.css";

const HelpCenter = () => {
  return (
    <div className="help-page">
      <div className="help-hero">
        <div className="help-hero-copy">
          <span className="hero-badge">Help Center</span>
          <h1>Answers, ticket status, and support for your candidate portal.</h1>
          <p>
            Search support articles, track an open ticket, or submit a new request if you need help.
          </p>
          <div className="help-action-row">
            <Link to="/ticket-tracking" className="primary-btn">
              Track Ticket
            </Link>
            <Link to="/candidates" className="secondary-btn">
              Back to Candidates
            </Link>
          </div>
        </div>
        <div className="help-hero-card">
          <div className="help-search-card">
            <input type="text" placeholder="Search by topic, ticket ID, or question" />
            <button>Search</button>
          </div>
          <div className="help-suggested">
            <span>Popular searches:</span>
            <div className="suggested-tags">
              <button>Application status</button>
              <button>Duplicate profile merge</button>
              <button>Verification help</button>
              <button>Account settings</button>
            </div>
          </div>
        </div>
      </div>

      <section className="help-categories">
        <div className="section-head">
          <h2>Browse by Category</h2>
          <p>Find quick answers and guidance for the most common support topics.</p>
        </div>
        <div className="category-grid">
          <Link to="/help" className="category-card">
            <div className="category-icon">🚀</div>
            <h3>Getting Started</h3>
            <p>Learn the basics and get set up quickly.</p>
          </Link>
          <Link to="/help" className="category-card">
            <div className="category-icon">🧩</div>
            <h3>Duplicate Profiles</h3>
            <p>Understand how the duplicate review process works.</p>
          </Link>
          <Link to="/help" className="category-card featured">
            <div className="category-icon">⚙️</div>
            <h3>Account & Settings</h3>
            <p>Manage your profile, notifications, and preferences.</p>
          </Link>
          <Link to="/help" className="category-card">
            <div className="category-icon">🎫</div>
            <h3>Support Tickets</h3>
            <p>Track tickets and learn how to request help fast.</p>
          </Link>
        </div>
      </section>

      <section className="help-resources">
        <div className="resource-card">
          <h3>Contact Support</h3>
          <p>Reach out if you need live help with candidates or ticket tracking.</p>
          <div className="resource-actions">
            <button>Submit a ticket</button>
            <button>Live chat</button>
          </div>
        </div>

        <div className="resource-card light">
          <h3>Helpful guides</h3>
          <ul>
            <li>How to resolve duplicate profiles</li>
            <li>Checking ticket status</li>
            <li>Verifying candidate data</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default HelpCenter;
