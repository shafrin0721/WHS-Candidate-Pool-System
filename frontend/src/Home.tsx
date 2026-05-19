import logoUrl from './assets/workforce-logo.svg'

function Home() {
  return (
    <main className="home-page">
      <div className="home-grid">
        <aside className="home-hero">
          <header className="home-brand">
            <div className="home-brand__logo-ring">
              <img src={logoUrl} alt="Workforce Hiring Solutions logo" className="home-brand__logo" />
            </div>
            <div className="home-brand__copy">
              <p>WORKFORCE</p>
              <span>HIRING SOLUTIONS</span>
            </div>
          </header>

          <div className="home-hero__content">
            <h1>
              Your candidate profile is now <span>visible</span> to top employers.
            </h1>
            <div className="home-hero__accent" aria-hidden="true" />
            <p>
              We are matching your skills with active opportunities and keeping your profile secure while you wait for the next update.
            </p>
          </div>

          <div className="home-hero__visual">
            <div className="home-hero__card">
              <div className="home-hero__card-avatar" />
              <div className="home-hero__card-row long" />
              <div className="home-hero__card-row" />
              <div className="home-hero__card-row short" />
            </div>
            <div className="home-hero__lock-badge" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <rect x="7" y="10" width="10" height="8" rx="2" />
                <path d="M9 10V7a3 3 0 0 1 6 0v3" />
              </svg>
            </div>
          </div>

          <div className="home-hero__safe-card">
            <span className="home-hero__safe-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M12 17.5c-2.485 0-4.5-2.015-4.5-4.5s2.015-4.5 4.5-4.5 4.5 2.015 4.5 4.5-2.015 4.5-4.5 4.5z" />
                <path d="M10 11.5h4" />
                <path d="M12 13.5v.5" />
              </svg>
            </span>
            <p>Your profile is safe, encrypted and only shared with verified hiring partners.</p>
          </div>
        </aside>

        <section className="home-content">
          <div className="home-content__top">
            <div className="home-help-pill">
              <span className="home-help-pill__icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M18 8a6 6 0 0 0-12 0" />
                  <path d="M6 20v-2a4 4 0 0 1 8 0v2" />
                </svg>
              </span>
              <div>
                <strong>Need help?</strong>
                <span>Contact our candidate support team.</span>
              </div>
            </div>
          </div>

          <section className="home-welcome-panel">
            <div className="home-welcome-panel__icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </div>
            <div className="home-welcome-panel__text">
              <h2>
                Your profile is <span>live</span> and ready for matches.
              </h2>
              <p>
                You are now part of the verified candidate pool. Employers can discover your skills and invite you to next-stage interviews.
              </p>
            </div>
            <div className="home-welcome-panel__note">
              <span className="home-welcome-panel__note-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M4 5h16v14H4z" />
                  <path d="M4 7l8 5 8-5" />
                </svg>
              </span>
              <div>
                <p>
                  Confirmation sent to <strong>applicant@workforce.com</strong>. Check your inbox to verify your profile details.
                </p>
              </div>
            </div>
          </section>

          <section className="home-status-panel">
            <div className="home-status-panel__title">Quick overview</div>
            <div className="home-status-row">
              <article className="home-status-card">
                <span className="home-status-card__icon" aria-hidden="true">✓</span>
                <h3>Verified profile</h3>
                <p>All required information has been confirmed and your candidate status is active.</p>
              </article>
              <article className="home-status-card">
                <span className="home-status-card__icon" aria-hidden="true">⚡</span>
                <h3>18 job matches</h3>
                <p>Your skills match new roles in finance, logistics, and operations this week.</p>
              </article>
              <article className="home-status-card">
                <span className="home-status-card__icon" aria-hidden="true">★</span>
                <h3>24 employer views</h3>
                <p>Recruiters have viewed your profile and expressed interest in your experience.</p>
              </article>
            </div>
          </section>

          <section className="home-info-row">
            <article className="home-info-card">
              <span className="home-info-card__icon" aria-hidden="true">📎</span>
              <div>
                <strong>Next step:</strong>
                <p>Update your availability and add any new certifications to improve your match rate.</p>
              </div>
            </article>
            <article className="home-info-card home-info-card--highlight">
              <span className="home-info-card__icon" aria-hidden="true">💼</span>
              <div>
                <strong>Candidate strength</strong>
                <p>Your profile score is high. A few updates can make your application stand out even more.</p>
              </div>
            </article>
          </section>

          <section className="home-stats-row">
            <div className="home-id-card">
              <p>Candidate ID</p>
              <strong>WHS-0923-451</strong>
              <button type="button">Copy code</button>
            </div>
            <div className="home-strength-card">
              <div className="home-strength-card__top">
                <div>
                  <h3>Profile strength</h3>
                  <p>Review your score and suggested improvements.</p>
                </div>
                <span className="home-strength-ring">92%</span>
              </div>
              <p>Strong candidate standing based on profile completion, experience, and employer engagement.</p>
              <a href="#" className="home-strength-card__link">View recommendations</a>
            </div>
          </section>

          <div className="home-action-row">
            <button type="button" className="button button--primary">Update your profile</button>
            <button type="button" className="button button--outline">Explore opportunities</button>
          </div>

          <section className="home-step-panel">
            <div className="home-step-panel__title">What happens next</div>
            <div className="home-step-list">
              <article className="home-step-item">
                <span className="home-step-item__number">1</span>
                <strong>Receive matches</strong>
                <p>See new job opportunities as soon as they become available.</p>
              </article>
              <article className="home-step-item">
                <span className="home-step-item__number">2</span>
                <strong>Schedule interviews</strong>
                <p>Employers reach out with interview times and next steps.</p>
              </article>
              <article className="home-step-item">
                <span className="home-step-item__number">3</span>
                <strong>Review offers</strong>
                <p>Compare roles, pay, and employer fit before deciding.</p>
              </article>
              <article className="home-step-item">
                <span className="home-step-item__number">4</span>
                <strong>Confirm placement</strong>
                <p>Accept the best role and begin onboarding with confidence.</p>
              </article>
            </div>
          </section>
        </section>
      </div>
    </main>
  )
}

export default Home
