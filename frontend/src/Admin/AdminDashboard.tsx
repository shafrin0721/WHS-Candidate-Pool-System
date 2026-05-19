import logoUrl from '../assets/workforce-logo.svg'

type MetricCard = {
  title: string
  value: string
  subtitle: string
  accentClass: string
  icon: 'candidates' | 'looking' | 'opportunities'
}

type FilterCard = {
  label: string
  value: string
}

type CandidateRow = {
  name: string
  field: string
  experience: string
  status: string
  availability: string
  salaryRange: string
  joinedDate: string
}

const filters: FilterCard[] = [
  { label: 'Filter by Field', value: 'All Fields' },
  { label: 'Filter by Status', value: 'All Status' },
  { label: 'Filter by Availability', value: 'All Availability' },
]

const metrics: MetricCard[] = [
  {
    title: 'Total Candidates',
    value: '2,458',
    subtitle: '100% of total',
    accentClass: 'metric-card--blue',
    icon: 'candidates',
  },
  {
    title: 'Actively Looking',
    value: '1,245',
    subtitle: '50.7% of total',
    accentClass: 'metric-card--green',
    icon: 'looking',
  },
  {
    title: 'Open to Opportunities',
    value: '1,213',
    subtitle: '49.3% of total',
    accentClass: 'metric-card--amber',
    icon: 'opportunities',
  },
]

const fieldData = [
  { label: 'Web Development', value: 642 },
  { label: 'UI/UX Design', value: 412 },
  { label: 'Digital Marketing', value: 298 },
  { label: 'Data Science', value: 256 },
  { label: 'Mobile Development', value: 213 },
  { label: 'DevOps', value: 145 },
  { label: 'Others', value: 192 },
]

type SkillName = 'javascript' | 'react' | 'html-css' | 'node-js' | 'python' | 'sql'

function SkillIcon({ name }: { name: SkillName }) {
  switch (name) {
    case 'javascript':
      return (
        <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 3.5h2.3l1.3 6L11 3.5h2.4" />
          <path d="M8.4 9.4l-1.9 2.4m5.1-2.4l1.9 2.4" />
        </svg>
      )
    case 'react':
      return (
        <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8">
          <ellipse cx="10" cy="10" rx="4.2" ry="7.2" />
          <ellipse cx="10" cy="10" rx="7.2" ry="4.2" transform="rotate(60 10 10)" />
          <ellipse cx="10" cy="10" rx="7.2" ry="4.2" transform="rotate(-60 10 10)" />
          <circle cx="10" cy="10" r="1.1" fill="currentColor" />
        </svg>
      )
    case 'html-css':
      return (
        <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 3.5h12v13H4z" />
          <path d="M8 6h4m-4 5h4" />
          <path d="M7.5 15.5l1-2.7 1 2.7m3-2.7l1 2.7 1-2.7" />
        </svg>
      )
    case 'node-js':
      return (
        <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 4.5l5-2.5 5 2.5v11l-5 2.5-5-2.5z" />
          <path d="M10 7.5v5" />
          <path d="M7.5 10.5h5" />
        </svg>
      )
    case 'python':
      return (
        <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 4.5h4.5v3.5H5v3.5h4.5" />
          <path d="M15 15.5h-4.5v-3.5H15v-3.5H10.5" />
          <circle cx="7" cy="5.5" r="0.9" fill="currentColor" />
          <circle cx="13" cy="14.5" r="0.9" fill="currentColor" />
        </svg>
      )
    case 'sql':
      return (
        <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 4.5h10v11H5z" />
          <path d="M8 7.5h4m-4 4h4" />
          <path d="M10 7.5v6" />
        </svg>
      )
    default:
      return null
  }
}

function mapSkillLabelToName(label: string): SkillName {
  switch (label) {
    case 'JavaScript':
      return 'javascript'
    case 'React':
      return 'react'
    case 'HTML/CSS':
      return 'html-css'
    case 'Node.js':
      return 'node-js'
    case 'Python':
      return 'python'
    case 'SQL':
      return 'sql'
    default:
      return 'javascript'
  }
}

const availabilityData = [
  { label: 'Immediate', value: 798, percent: '32.5%' },
  { label: '2 Weeks', value: 456, percent: '18.6%' },
  { label: '1 Month', value: 612, percent: '24.9%' },
  { label: '2 Months', value: 378, percent: '15.4%' },
  { label: '3 Months', value: 214, percent: '8.6%' },
]

const statusData = [
  { label: 'Actively Looking', value: 1245, percent: '50.7%' },
  { label: 'Open to Opportunities', value: 1213, percent: '49.3%' },
]

const salaryData = [
  { label: '0 - 40K', value: 96 },
  { label: '40K - 60K', value: 248 },
  { label: '60K - 80K', value: 412 },
  { label: '80K - 100K', value: 568 },
  { label: '100K - 150K', value: 674 },
  { label: '150K - 200K', value: 312 },
  { label: '200K+', value: 148 },
]

const skillsData = [
  { label: 'JavaScript', value: 1356, percent: '55.2%' },
  { label: 'React', value: 1124, percent: '45.8%' },
  { label: 'HTML/CSS', value: 1024, percent: '41.7%' },
  { label: 'Node.js', value: 876, percent: '35.7%' },
  { label: 'Python', value: 812, percent: '33.1%' },
  { label: 'SQL', value: 698, percent: '28.4%' },
]

const candidates: CandidateRow[] = [
  {
    name: 'John Doe',
    field: 'Web Development',
    experience: '5+ Years',
    status: 'Actively Looking',
    availability: 'Immediate',
    salaryRange: '80,000 - 120,000',
    joinedDate: 'Jun 20, 2024',
  },
  {
    name: 'Sarah Johnson',
    field: 'UI/UX Design',
    experience: '3+ Years',
    status: 'Open to Opportunities',
    availability: '2 Weeks',
    salaryRange: '60,000 - 90,000',
    joinedDate: 'Jun 19, 2024',
  },
  {
    name: 'Michael Smith',
    field: 'Data Science',
    experience: '4+ Years',
    status: 'Actively Looking',
    availability: '1 Month',
    salaryRange: '100,000 - 150,000',
    joinedDate: 'Jun 18, 2024',
  },
]

const maxBarValue = 800

function SidebarIcon({ name }: { name: 'grid' | 'user' | 'briefcase' | 'star' | 'chart' | 'salary' | 'settings' | 'users' | 'download' }) {
  switch (name) {
    case 'grid':
      return (
        <svg viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="1.5" y="1.5" width="5" height="5" rx="1" />
          <rect x="11.5" y="1.5" width="5" height="5" rx="1" />
          <rect x="1.5" y="11.5" width="5" height="5" rx="1" />
          <rect x="11.5" y="11.5" width="5" height="5" rx="1" />
        </svg>
      )
    case 'user':
      return (
        <svg viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="9" cy="5" r="3" />
          <path d="M4 15c0-2.5 2.5-4.5 5-4.5s5 2 5 4.5" />
        </svg>
      )
    case 'briefcase':
      return (
        <svg viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="6" width="14" height="8" rx="2" />
          <path d="M5 6V4.5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2V6" />
        </svg>
      )
    case 'star':
      return (
        <svg viewBox="0 0 18 18" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 2.4l1.8 4.6 5.1.7-3.7 3.6.9 5.1L9 13.7 4 16.4l.9-5.1L1.2 7.7l5.1-.7L9 2.4z" />
        </svg>
      )
    case 'chart':
      return (
        <svg viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="8" width="3" height="7" rx="1" />
          <rect x="8" y="5" width="3" height="10" rx="1" />
          <rect x="13" y="2" width="3" height="13" rx="1" />
        </svg>
      )
    case 'salary':
      return (
        <svg viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="9" cy="9" r="7" />
          <path d="M9 4v10" />
          <path d="M5 6.5h6" />
          <path d="M5 11.5h6" />
        </svg>
      )
    case 'settings':
      return (
        <svg viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="9" cy="9" r="3" />
          <path d="M9 1.5v3" />
          <path d="M9 13.5v3" />
          <path d="M1.5 9h3" />
          <path d="M13.5 9h3" />
          <path d="M3.5 3.5l2.2 2.2" />
          <path d="M12.3 12.3l2.2 2.2" />
          <path d="M3.5 14.5l2.2-2.2" />
          <path d="M12.3 5.7l2.2-2.2" />
        </svg>
      )
    case 'users':
      return (
        <svg viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="6" cy="6" r="3" />
          <circle cx="12" cy="8" r="2.5" />
          <path d="M1.5 15c1.8-2.7 4.7-3.5 7.5-3.5s5.7.8 7.5 3.5" />
        </svg>
      )
    case 'download':
      return (
        <svg viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 10l4 4 4-4" />
          <path d="M9 2v9" />
          <path d="M4 15h10" />
        </svg>
      )
    default:
      return null
  }
}

function AdminDashboard() {
  return (
    <main className="dashboard-shell">
      <aside className="sidebar">
        <div className="sidebar__brand">
          <div className="sidebar__logo" aria-hidden="true">
            <img src={logoUrl} alt="Workforce Hiring Solutions logo" className="sidebar__logo-image" />
          </div>

          <div className="sidebar__brand-text">
            <strong>WORKFORCE</strong>
            <span>HIRING SOLUTIONS</span>
          </div>
        </div>

        <nav className="sidebar__nav" aria-label="Admin navigation">
          <a className="sidebar__nav-item is-active" href="/" onClick={(event) => event.preventDefault()}>
            <span className="nav-icon" aria-hidden="true"><SidebarIcon name="grid" /></span>
            <span>Dashboard</span>
          </a>
          <a className="sidebar__nav-item" href="/" onClick={(event) => event.preventDefault()}>
            <span className="nav-icon" aria-hidden="true"><SidebarIcon name="user" /></span>
            <span>Candidates</span>
            <span className="sidebar__chevron" aria-hidden="true">›</span>
          </a>
          <a className="sidebar__nav-item" href="/" onClick={(event) => event.preventDefault()}>
            <span className="nav-icon" aria-hidden="true"><SidebarIcon name="briefcase" /></span>
            <span>Fields</span>
          </a>
          <a className="sidebar__nav-item" href="/" onClick={(event) => event.preventDefault()}>
            <span className="nav-icon" aria-hidden="true"><SidebarIcon name="star" /></span>
            <span>Skills</span>
          </a>
          <a className="sidebar__nav-item" href="/" onClick={(event) => event.preventDefault()}>
            <span className="nav-icon" aria-hidden="true"><SidebarIcon name="chart" /></span>
            <span>Reports</span>
          </a>
          <a className="sidebar__nav-item" href="/" onClick={(event) => event.preventDefault()}>
            <span className="nav-icon" aria-hidden="true"><SidebarIcon name="salary" /></span>
            <span>Salary Insights</span>
          </a>
          <a className="sidebar__nav-item" href="/" onClick={(event) => event.preventDefault()}>
            <span className="nav-icon" aria-hidden="true"><SidebarIcon name="settings" /></span>
            <span>Settings</span>
          </a>
          <a className="sidebar__nav-item" href="/" onClick={(event) => event.preventDefault()}>
            <span className="nav-icon" aria-hidden="true"><SidebarIcon name="users" /></span>
            <span>Users</span>
          </a>
          <a className="sidebar__nav-item" href="/" onClick={(event) => event.preventDefault()}>
            <span className="nav-icon" aria-hidden="true"><SidebarIcon name="download" /></span>
            <span>Export Data</span>
          </a>
        </nav>

        <section className="sidebar__security">
          <div className="security-illustration" aria-hidden="true">
            <span className="security-illustration__ring" />
            <span className="security-illustration__shield" />
            <span className="security-illustration__dot security-illustration__dot--one" />
            <span className="security-illustration__dot security-illustration__dot--two" />
            <span className="security-illustration__dot security-illustration__dot--three" />
          </div>

          <div className="sidebar__security-copy">
            <h3>Secure & Confidential</h3>
            <p>All candidate data is encrypted and stored securely.</p>
          </div>
        </section>
      </aside>

      <section className="dashboard-main">
        <header className="dashboard-topbar">
          <button className="icon-button" type="button" aria-label="Toggle sidebar">
            <span className="hamburger" aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
          </button>

          <div className="topbar-actions">
            <button className="notification-button" type="button" aria-label="Notifications">
              <span className="notification-button__icon" aria-hidden="true">
                <span />
              </span>
              <span className="notification-button__badge">3</span>
            </button>

            <button className="profile-chip" type="button" aria-label="Admin profile">
              <span className="profile-chip__avatar" aria-hidden="true">
                <span>AD</span>
              </span>
              <span className="profile-chip__copy">
                <strong>Admin</strong>
                <span>Super Admin</span>
              </span>
              <span className="profile-chip__caret" aria-hidden="true">
                ˅
              </span>
            </button>
          </div>
        </header>

        <div className="dashboard-content">
          <section className="page-header">
            <div>
              <h1>Dashboard</h1>
              <p>Overview of your candidate pool</p>
            </div>

            <button className="date-range" type="button">
              <span className="date-range__icon" aria-hidden="true" />
              <span>May 20, 2024 - Jun 20, 2024</span>
              <span className="date-range__calendar" aria-hidden="true" />
            </button>
          </section>

          <section className="filter-row" aria-label="Dashboard filters">
            {filters.map((filter) => (
              <button className="filter-card" type="button" key={filter.label}>
                <span className="filter-card__label">{filter.label}</span>
                <span className="filter-card__value">{filter.value}</span>
                <span className="filter-card__caret" aria-hidden="true">
                  ˅
                </span>
              </button>
            ))}

            <button className="secondary-button" type="button">
              <span className="secondary-button__icon secondary-button__icon--clear" aria-hidden="true" />
              Clear Filters
            </button>

            <button className="primary-button" type="button">
              <span className="secondary-button__icon secondary-button__icon--filter" aria-hidden="true" />
              Apply Filters
            </button>
          </section>

          <section className="metrics-grid" aria-label="Candidate overview metrics">
            {metrics.map((metric) => (
              <article className={`metric-card ${metric.accentClass}`} key={metric.title}>
                <div className="metric-card__icon" aria-hidden="true">
                  {metric.icon === 'candidates' ? (
                    <svg viewBox="0 0 24 24" role="presentation">
                      <circle cx="12" cy="8" r="3.5" />
                      <path d="M5 20c1.5-4 4.3-6 7-6s5.5 2 7 6" />
                      <circle cx="6.5" cy="9.5" r="1.8" />
                      <circle cx="17.5" cy="9.5" r="1.8" />
                    </svg>
                  ) : null}
                  {metric.icon === 'looking' ? (
                    <svg viewBox="0 0 24 24" role="presentation">
                      <circle cx="12" cy="8" r="3.5" />
                      <path d="M5 20c1.5-4 4.3-6 7-6s5.5 2 7 6" />
                      <path d="M17.5 17.5l2.5 2.5" />
                    </svg>
                  ) : null}
                  {metric.icon === 'opportunities' ? (
                    <svg viewBox="0 0 24 24" role="presentation">
                      <path d="M12 3 5 6v5c0 4.5 2.7 8.2 7 9 4.3-.8 7-4.5 7-9V6z" />
                      <path d="M9.5 12.5 11.4 14l3.7-4.6" />
                    </svg>
                  ) : null}
                </div>

                <div className="metric-card__content">
                  <h2>{metric.title}</h2>
                  <strong>{metric.value}</strong>
                  <span>{metric.subtitle}</span>
                </div>

                <div className="metric-card__ghost" aria-hidden="true">
                  <div />
                </div>
              </article>
            ))}
          </section>

          <section className="chart-grid">
            <article className="panel chart-panel chart-panel--wide">
              <div className="panel__header">
                <h3>Candidates by Field</h3>
                <button type="button" className="view-report">
                  View Report
                </button>
              </div>

              <div className="bar-chart" aria-label="Candidates by field bar chart">
                <div className="bar-chart__axis">
                  <span>800</span>
                  <span>600</span>
                  <span>400</span>
                  <span>200</span>
                  <span>0</span>
                </div>

                <div className="bar-chart__plot">
                  {fieldData.map((item) => (
                    <div className="bar-chart__column" key={item.label}>
                      <div className="bar-chart__bar-wrap">
                        <span className="bar-chart__value">{item.value}</span>
                        <div className="bar-chart__bar" style={{ height: `${(item.value / maxBarValue) * 100}%` }} />
                      </div>
                      <span className="bar-chart__label">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </article>

            <article className="panel chart-panel">
              <div className="panel__header">
                <h3>Candidates by Availability</h3>
                <button type="button" className="view-report">
                  View Report
                </button>
              </div>

              <div className="donut-panel">
                <div className="donut-chart donut-chart--availability" aria-hidden="true">
                  <div className="donut-chart__center">
                    <span>Total</span>
                    <strong>2,458</strong>
                  </div>
                </div>

                <ul className="legend-list">
                  {availabilityData.map((item, index) => (
                    <li className="legend-list__item" key={item.label}>
                      <span className={`legend-dot legend-dot--availability-${index + 1}`} />
                      <span className="legend-list__label">{item.label}</span>
                      <span className="legend-list__value">
                        {item.value} <span>({item.percent})</span>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>

            <article className="panel chart-panel">
              <div className="panel__header">
                <h3>Candidates by Status</h3>
                <button type="button" className="view-report">
                  View Report
                </button>
              </div>

              <div className="donut-panel">
                <div className="donut-chart donut-chart--status" aria-hidden="true">
                  <div className="donut-chart__center">
                    <span>Total</span>
                    <strong>2,458</strong>
                  </div>
                </div>

                <ul className="legend-list legend-list--status">
                  {statusData.map((item, index) => (
                    <li className="legend-list__item" key={item.label}>
                      <span className={`legend-dot legend-dot--status-${index + 1}`} />
                      <span className="legend-list__label">{item.label}</span>
                      <span className="legend-list__value">
                        {item.value.toLocaleString()} <span>({item.percent})</span>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </section>

          <section className="chart-grid chart-grid--bottom">
            <article className="panel chart-panel chart-panel--wide">
              <div className="panel__header">
                <h3>Salary Distribution <span>(Next 2 Years)</span></h3>
                <button type="button" className="view-report">
                  View Report
                </button>
              </div>

              <div className="bar-chart bar-chart--salary" aria-label="Salary distribution bar chart">
                <div className="bar-chart__axis">
                  <span>800</span>
                  <span>600</span>
                  <span>400</span>
                  <span>200</span>
                  <span>0</span>
                </div>

                <div className="bar-chart__plot">
                  {salaryData.map((item) => (
                    <div className="bar-chart__column" key={item.label}>
                      <div className="bar-chart__bar-wrap">
                        <span className="bar-chart__value">{item.value}</span>
                        <div className="bar-chart__bar bar-chart__bar--salary" style={{ height: `${(item.value / 700) * 100}%` }} />
                      </div>
                      <span className="bar-chart__label">{item.label}</span>
                    </div>
                  ))}
                </div>

                <div className="chart-caption">Salary Range (USD)</div>
              </div>
            </article>

            <article className="panel chart-panel">
              <div className="panel__header">
                <h3>Most Common Skills</h3>
                <button type="button" className="view-report">
                  View Report
                </button>
              </div>

              <div className="skills-chart">
                {skillsData.map((item) => (
                  <div className="skill-row" key={item.label}>
                    <div className="skill-row__label">
                      <span className="skill-icon" aria-hidden="true"><SkillIcon name={mapSkillLabelToName(item.label)} /></span>
                      <span>{item.label}</span>
                    </div>

                    <div className="skill-row__bar-track">
                      <div className="skill-row__bar" style={{ width: `${(item.value / 1600) * 100}%` }} />
                    </div>

                    <div className="skill-row__value">
                      {item.value.toLocaleString()} <span>({item.percent})</span>
                    </div>
                  </div>
                ))}

                <div className="skills-chart__axis">
                  <span>0</span>
                  <span>400</span>
                  <span>800</span>
                  <span>1,200</span>
                  <span>1,600</span>
                </div>
              </div>
            </article>
          </section>

          <section className="panel table-panel">
            <div className="panel__header panel__header--table">
              <h3>Recent Candidates</h3>
              <button type="button" className="view-report">
                View All Candidates
              </button>
            </div>

            <div className="table-wrap">
              <table className="candidate-table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Field</th>
                    <th>Experience</th>
                    <th>Status</th>
                    <th>Availability</th>
                    <th>Salary Range</th>
                    <th>Joined Date</th>
                    <th>Actions</th>
                  </tr>
                </thead>

                <tbody>
                  {candidates.map((candidate) => (
                    <tr key={candidate.name}>
                      <td>
                        <div className="candidate-cell candidate-cell--name">
                          <span className="candidate-avatar" aria-hidden="true">
                            {candidate.name
                              .split(' ')
                              .map((part) => part[0])
                              .join('')}
                          </span>
                          <span>{candidate.name}</span>
                        </div>
                      </td>
                      <td>{candidate.field}</td>
                      <td>{candidate.experience}</td>
                      <td>
                        <span
                          className={`status-pill ${
                            candidate.status === 'Actively Looking'
                              ? 'status-pill--green'
                              : 'status-pill--amber'
                          }`}
                        >
                          {candidate.status}
                        </span>
                      </td>
                      <td>
                        <span
                          className={`availability-pill ${
                            candidate.availability === 'Immediate'
                              ? 'availability-pill--green'
                              : candidate.availability === '2 Weeks'
                                ? 'availability-pill--blue'
                                : 'availability-pill--purple'
                          }`}
                        >
                          {candidate.availability}
                        </span>
                      </td>
                      <td>{candidate.salaryRange}</td>
                      <td>{candidate.joinedDate}</td>
                      <td>
                        <button className="row-action" type="button" aria-label={`View ${candidate.name}`}>
                          <span aria-hidden="true">◉</span>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </section>
    </main>
  )
}

export default AdminDashboard
