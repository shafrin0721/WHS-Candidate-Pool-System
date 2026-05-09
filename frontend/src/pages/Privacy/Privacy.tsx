import '../PolicyPage.css';

const Privacy = () => {
  return (
    <div className="policy-page">
      <div className="policy-card">
        <h1 className="policy-title">Privacy Policy</h1>
        <p className="policy-updated">Last updated: May 9, 2026</p>

        <section className="policy-section">
          <h2>1. What we collect</h2>
          <p>
            We may collect information you provide during registration, including contact details
            and your CV file.
          </p>
        </section>

        <section className="policy-section">
          <h2>2. How we use it</h2>
          <p>
            We use your information to manage your candidate profile, match you with roles, and
            communicate with you if you have provided consent.
          </p>
        </section>

        <section className="policy-section">
          <h2>3. File uploads</h2>
          <p>
            CV files may be stored and accessed for recruitment purposes. You can remove your CV
            by updating your profile.
          </p>
        </section>

        <section className="policy-section">
          <h2>4. Data retention</h2>
          <p>
            We retain information for as long as needed to provide the service and comply with legal
            requirements.
          </p>
        </section>

        <section className="policy-section">
          <h2>5. Your rights</h2>
          <p>
            You can request access or deletion of your information where applicable by law.
          </p>
        </section>

        <section className="policy-section">
          <h2>6. Contact</h2>
          <p>
            Questions about privacy can be sent to: <a href="#">support@example.com</a>.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Privacy;

