

type IconProps = {
  className?: string
}

function CheckIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path d="M20 6 9 17l-5-5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function MailIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <rect x="4" y="6.5" width="16" height="11" rx="2" fill="none" stroke="currentColor" strokeWidth="1.7" />
      <path d="m5.3 8 6.7 5 6.7-5" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function UserIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <circle cx="12" cy="8.2" r="3.1" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path d="M5.5 19.2c1.5-3.8 4.1-5.8 6.5-5.8s5 2 6.5 5.8" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}

function FileIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        d="M7 3.8h6.8L18.5 8v12.2a1.8 1.8 0 0 1-1.8 1.8H7A1.8 1.8 0 0 1 5.2 20.2V5.6A1.8 1.8 0 0 1 7 3.8Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path d="M13.8 3.8V8h4.7" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
      <path d="M8.2 12h7.5M8.2 15.3h5.8" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  )
}

function DatabaseIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <ellipse cx="12" cy="6.2" rx="6.8" ry="3" fill="none" stroke="currentColor" strokeWidth="1.7" />
      <path d="M5.2 6.2V12c0 1.7 3 3 6.8 3s6.8-1.3 6.8-3V6.2" fill="none" stroke="currentColor" strokeWidth="1.7" />
      <path d="M5.2 12v5.8c0 1.7 3 3 6.8 3s6.8-1.3 6.8-3V12" fill="none" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  )
}

function ShieldIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path d="M12 3 19 6v5c0 4.9-3.4 8.7-7 10-3.6-1.3-7-5.1-7-10V6l7-3Z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M9.3 12.2 11 14l3.8-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function LockIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <rect x="5" y="10" width="14" height="10" rx="2.2" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path d="M8 10V7.8a4 4 0 0 1 8 0V10" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="12" cy="15" r="1.2" fill="currentColor" />
      <path d="M12 16.1v1.8" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}

function HelpIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.7" />
      <path d="M9.8 9.1a2.4 2.4 0 1 1 3.9 1.9c-.7.5-1.2 1-1.2 2" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="12" cy="17.1" r="1" fill="currentColor" />
    </svg>
  )
}

function AddIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path d="M5 12h14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M12 5v14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

function CopyIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <rect x="9" y="9" width="9" height="9" rx="1.6" fill="none" stroke="currentColor" strokeWidth="1.7" />
      <rect x="6" y="6" width="9" height="9" rx="1.6" fill="none" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  )
}

function ProfileRing() {
  return (
    <div className="home-profile-ring" aria-hidden="true">
      <svg viewBox="0 0 120 120" className="home-profile-ring__svg">
        <circle cx="60" cy="60" r="45" className="home-profile-ring__track" />
        <circle cx="60" cy="60" r="45" className="home-profile-ring__progress" />
      </svg>
      <div className="home-profile-ring__inner">
        <div>85%</div>
      </div>
    </div>
  )
}

function StepIcon({ type }: { type: 'user' | 'search' | 'bell' | 'mail' }) {
  if (type === 'search') {
    return (
      <svg viewBox="0 0 24 24" className="home-step__icon" aria-hidden="true">
        <circle cx="10.2" cy="10.2" r="5.8" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <path d="m14.5 14.5 4.1 4.1" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    )
  }

  if (type === 'bell') {
    return (
      <svg viewBox="0 0 24 24" className="home-step__icon" aria-hidden="true">
        <path
          d="M12 4.2a4.7 4.7 0 0 0-4.7 4.7v2c0 .9-.3 1.7-.8 2.4l-1 1.4h13l-1-1.4a4.1 4.1 0 0 1-.8-2.4v-2A4.7 4.7 0 0 0 12 4.2Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
      </svg>
    )
  }

  if (type === 'mail') {
    return <MailIcon className="home-step__icon" />
  }

  return <UserIcon className="home-step__icon" />
}

export default function Home() {
  return (
    <main className="home-page" style={{ minHeight: '100vh', width: '100vw', padding: 0, overflowY: 'auto' }}>
      <section
        className="home-shell"
        style={{
          width: '100vw',
          minHeight: '100vh',
          borderRadius: 0,
        }}
      >
        <aside className="home-sidebar">
          <header className="home-brand">
            <div className="home-brand__logo">
              <img src="/logo.png" alt="Workforce Hiring Solutions" />
            </div>
            <div className="home-brand__text">
              <strong>WORKFORCE</strong>
              <div>HIRING SOLUTIONS</div>
            </div>
          </header>

          <div className="home-sidebar__copy">
            <h1>
              You’re Now Part of Our Global Talent Network!
            </h1>
            <div className="home-divider" aria-hidden="true" />
            <p>
              We’re excited to have you with us. Your profile helps our hiring partners discover the right talent for future opportunities.
            </p>
          </div>

          <div className="home-profile-illustration" aria-hidden="true">
            <div className="home-profile-card">
              <div className="home-profile-card__avatar">
                <UserIcon className="home-profile-card__avatar-icon" />
              </div>
              <div className="home-profile-card__lines">
                <div className="line-placeholder" />
                <div className="line-placeholder" />
                <div className="line-placeholder" />
              </div>
              <div className="home-profile-card__check">
                <CheckIcon className="home-profile-card__check-icon" />
              </div>
            </div>

            <div className="home-profile-illustration__gear home-profile-illustration__gear--one" />
            <div className="home-profile-illustration__gear home-profile-illustration__gear--two" />

            <div className="home-profile-security">
              <div className="home-profile-security__icon">
                <LockIcon className="home-profile-security__lock" />
              </div>
              <p>Your information is safe, secure and will never be shared publicly.</p>
            </div>

            <div className="home-profile-shield">
              <ShieldIcon className="home-profile-shield__icon" />
            </div>
          </div>
        </aside>

        <section className="home-content">
          <header className="home-help">
            <div className="home-help__icon">
              <HelpIcon className="home-help__svg" />
            </div>
            <div className="home-help__copy">
              <strong>Need Help?</strong>
              <div>support@workforcehs.com</div>
            </div>
          </header>

          <section className="home-hero-card">
            <div className="home-hero-card__ring" aria-hidden="true">
              <div className="home-hero-card__check">
                <CheckIcon className="home-hero-card__check-icon" />
              </div>
            </div>

            <h2>
              Welcome to Our Talent Network!
            </h2>
            <p>Your profile has been successfully added to our candidate pool.</p>

            <div className="home-email-banner">
              <div className="home-email-banner__icon">
                <MailIcon className="home-email-banner__svg" />
              </div>
              <p>
                A confirmation email has been sent to <strong>john.doe@gmail.com</strong> with your submission details.
              </p>
            </div>
          </section>

          <section className="home-status-card" aria-labelledby="profile-status-title">
            <h3 id="profile-status-title">Profile Status</h3>

            <div className="home-status-grid">
              <article className="home-status-item">
                <div className="home-status-item__icon">
                  <UserIcon className="home-status-item__svg" />
                  <div className="home-status-item__badge" />
                </div>
                <h4>Profile Submitted</h4>
                <p>Your details have been successfully submitted.</p>
              </article>

              <article className="home-status-item">
                <div className="home-status-item__icon">
                  <FileIcon className="home-status-item__svg" />
                  <div className="home-status-item__badge" />
                </div>
                <h4>CV Uploaded</h4>
                <p>Your CV has been uploaded successfully.</p>
              </article>

              <article className="home-status-item">
                <div className="home-status-item__icon">
                  <DatabaseIcon className="home-status-item__svg" />
                  <div className="home-status-item__badge" />
                </div>
                <h4>Candidate Record Created</h4>
                <p>Your profile is now added to our secure database.</p>
              </article>
            </div>
          </section>

          <section className="home-notices">
            <article className="home-notice">
              <div className="home-notice__icon home-notice__icon--blue" aria-hidden="true">
                <ShieldIcon className="home-notice__svg" />
              </div>
              <p>Our recruitment team may contact you when opportunities matching your skills and experience become available.</p>
            </article>

            <article className="home-notice home-notice--soft">
              <div className="home-notice__icon home-notice__icon--green" aria-hidden="true">
                <svg viewBox="0 0 24 24" className="home-notice__svg" aria-hidden="true">
                  <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.7" />
                  <path d="M12 7.5v4.8l3 1.7" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <p>
                Profiles are usually reviewed within <strong>3 – 5 business days.</strong>
              </p>
            </article>
          </section>

          <section className="home-summary-grid">
            <article className="home-summary-card">
              <h3>Your Candidate ID</h3>
              <p>Use this ID for future reference.</p>
              <div className="home-id-box">
                <div>WHS-2026-1048</div>
                <button type="button" aria-label="Copy candidate ID">
                  <CopyIcon className="home-id-box__icon" />
                </button>
              </div>
            </article>

            <article className="home-summary-card home-summary-card--strength">
              <h3>Profile Strength</h3>
              <p>A complete profile gets more visibility.</p>
              <div className="home-strength">
                <ProfileRing />
                <div className="home-strength__copy">
                  <p>
                    <strong>Great job!</strong> Your profile is strong. Add more skills and experience to increase your visibility further.
                  </p>
                  <a href="#update-profile">Update Profile →</a>
                </div>
              </div>
            </article>
          </section>

          <section className="home-actions">
            <button type="button" className="home-button home-button--primary">
              <div className="home-button__icon">
                <AddIcon className="home-button__svg" />
              </div>
              Go to Dashboard
            </button>

            <button type="button" className="home-button home-button--secondary">
              <div className="home-button__icon">
                <svg viewBox="0 0 24 24" className="home-button__svg" aria-hidden="true">
                  <path d="m5 19 4.3-.8L19 8.4 15.6 5 6 14.6 5 19Z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                  <path d="m13.7 6.9 3.4 3.4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
              </div>
              Edit Profile
            </button>
          </section>

          <section className="home-timeline" aria-labelledby="next-steps-title">
            <h3 id="next-steps-title">What happens next?</h3>

            <div className="home-timeline__grid">
              <article className="home-timeline__step">
                <div className="home-timeline__icon-wrap">
                  <StepIcon type="user" />
                  <div className="home-timeline__step-number">1</div>
                </div>
                <h4>Profile Created</h4>
                <p>Your profile is successfully added to our system.</p>
                <div className="home-timeline__arrow" aria-hidden="true">
                  →
                </div>
              </article>

              <article className="home-timeline__step">
                <div className="home-timeline__icon-wrap">
                  <StepIcon type="search" />
                  <div className="home-timeline__step-number">2</div>
                </div>
                <h4>Under Review</h4>
                <p>Our team will review your profile for opportunities.</p>
                <div className="home-timeline__arrow" aria-hidden="true">
                  →
                </div>
              </article>

              <article className="home-timeline__step">
                <div className="home-timeline__icon-wrap">
                  <StepIcon type="bell" />
                  <div className="home-timeline__step-number">3</div>
                </div>
                <h4>Opportunity Matching</h4>
                <p>We’ll match you with relevant opportunities.</p>
                <div className="home-timeline__arrow" aria-hidden="true">
                  →
                </div>
              </article>

              <article className="home-timeline__step">
                <div className="home-timeline__icon-wrap">
                  <StepIcon type="mail" />
                  <div className="home-timeline__step-number">4</div>
                </div>
                <h4>Recruiter Contact</h4>
                <p>Our team or hiring partners may reach out to you.</p>
              </article>
            </div>
          </section>
        </section>
      </section>
    </main>
  )
}