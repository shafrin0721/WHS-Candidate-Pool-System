import { useMemo, useState } from 'react'
import './Candidate_basic.css'

function Candidate() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    countryCode: '+91',
    mobileNumber: '',
    dateOfBirth: '',
    linkedInProfile: ''
  })

  const age = useMemo(() => {
    if (!formData.dateOfBirth) {
      return '--'
    }

    const dob = new Date(formData.dateOfBirth)
    if (Number.isNaN(dob.getTime())) {
      return '--'
    }

    const diff = Date.now() - dob.getTime()
    const calculatedAge = new Date(diff).getUTCFullYear() - 1970

    return calculatedAge >= 0 ? `${calculatedAge}` : '--'
  }, [formData.dateOfBirth])

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('Form submitted:', {
      ...formData,
      age
    })
  }

  return (
    <main className="candidate-basic-page">
      <section className="progress-section">
        <div className="progress-line" />
        <div className="progress-steps">
          <div className="progress-step active">
            <span className="step-number">1</span>
            <span className="step-label">Basic Info</span>
          </div>
          <div className="progress-step">
            <span className="step-number">2</span>
            <span className="step-label">Professional</span>
          </div>
          <div className="progress-step">
            <span className="step-number">3</span>
            <span className="step-label">Skills</span>
          </div>
          <div className="progress-step">
            <span className="step-number">4</span>
            <span className="step-label">Details</span>
          </div>
          <div className="progress-step">
            <span className="step-number">5</span>
            <span className="step-label">Upload</span>
          </div>
        </div>
      </section>

      <div className="candidate-grid">
        <section className="candidate-form-panel">
          <header className="form-panel-header">
            <h1>Basic Information</h1>
            <p>
              Let's start with your basic details to build your professional
              profile.
            </p>
          </header>

          <form onSubmit={handleSubmit} className="candidate-form">
            <div className="form-row">
              <div className="field-group">
                <label htmlFor="fullName">Full Name</label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div className="field-group">
                <label htmlFor="email">Email Address</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email address"
                  required
                />
              </div>
            </div>

            <div className="form-row split-row">
              <div className="field-group">
                <label htmlFor="countryCode">Country Code</label>
                <select
                  id="countryCode"
                  name="countryCode"
                  value={formData.countryCode}
                  onChange={handleChange}
                >
                  <option value="+91">+91</option>
                  <option value="+1">+1</option>
                  <option value="+44">+44</option>
                  <option value="+61">+61</option>
                </select>
              </div>

              <div className="field-group">
                <label htmlFor="mobileNumber">Mobile Number</label>
                <input
                  id="mobileNumber"
                  name="mobileNumber"
                  type="tel"
                  value={formData.mobileNumber}
                  onChange={handleChange}
                  placeholder="Enter mobile number"
                  required
                />
              </div>
            </div>

            <div className="form-row split-row">
              <div className="field-group">
                <label htmlFor="dateOfBirth">Date of Birth</label>
                <input
                  id="dateOfBirth"
                  name="dateOfBirth"
                  type="date"
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="field-group">
                <label>Age</label>
                <div className="age-value">{age}</div>
              </div>
            </div>

            <div className="form-row">
              <div className="field-group full-width">
                <label htmlFor="linkedInProfile">LinkedIn Profile</label>
                <input
                  id="linkedInProfile"
                  name="linkedInProfile"
                  type="url"
                  value={formData.linkedInProfile}
                  onChange={handleChange}
                  placeholder="https://www.linkedin.com/in/yourprofile"
                />
              </div>
            </div>

            <div className="form-actions">
              <button type="submit" className="continue-button">
                Continue
              </button>
            </div>
          </form>
        </section>

        <aside className="candidate-panel">
          <div className="info-card age-card">
            <h3>Age</h3>
            <div className="age-display">
              <span>{age}</span>
              <span>Years</span>
            </div>
            <p>
              Your age will be calculated automatically based on your date of
              birth.
            </p>
          </div>

          <div className="info-card linkedin-card">
            <label htmlFor="linkedInProfile">LinkedIn Profile</label>
            <input
              id="linkedInProfile"
              name="linkedInProfile"
              type="url"
              value={formData.linkedInProfile}
              onChange={handleChange}
              placeholder="https://www.linkedin.com/in/yourprofile"
            />
          </div>

          <div className="promo-card">
            <img
              src="https://images.unsplash.com/photo-1522199710521-72d69614c702?auto=format&fit=crop&w=900&q=80"
              alt="Professional team collaboration"
            />
            <div className="promo-copy">
              Join thousands of professionals finding their next career milestone.
            </div>
          </div>
        </aside>
      </div>
    </main>
  )
}

export default Candidate
