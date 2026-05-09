import '../PolicyPage.css';

const Terms = () => {
  return (
    <div className="policy-page">
      <div className="policy-card">
        <h1 className="policy-title">Terms of Service</h1>
        <p className="policy-updated">Last updated: May 9, 2026</p>

        <section className="policy-section">
          <h2>1. Acceptance</h2>
          <p>
            By using CandidateHub, you agree to these Terms of Service. If you do not agree, do
            not submit information or use the service.
          </p>
        </section>

        <section className="policy-section">
          <h2>2. Candidate Information</h2>
          <p>
            You may be asked to provide personal data (such as contact details and a CV). You
            confirm that the information is accurate to the best of your knowledge.
          </p>
        </section>

        <section className="policy-section">
          <h2>3. Uploads</h2>
          <p>
            CV documents must be your own work or you must have the right to share them with
            recruiters.
          </p>
        </section>

        <section className="policy-section">
          <h2>4. Contact</h2>
          <p>
            If you check the consent option, recruiters may contact you regarding relevant roles.
          </p>
        </section>

        <section className="policy-section">
          <h2>5. Limitation of Liability</h2>
          <p>
            The service is provided as-is. We do not guarantee uninterrupted availability or that
            uploads will always process successfully.
          </p>
        </section>

        <section className="policy-section">
          <h2>6. Contact Us</h2>
          <p>
            Questions about these Terms can be sent to: <a href="#">support@example.com</a>.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Terms;

