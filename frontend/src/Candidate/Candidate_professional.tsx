import { useState } from 'react'
import './Candidate_professional.css'

function CandidateProfessional() {
  const [formData, setFormData] = useState({
    interestedField: '',
    yearsOfExperience: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleBack = () => {
    console.log('Going back to previous step')
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  return (
    <div className="candidate-professional-container">
      <div className="candidate-professional-form-card">
        <div className="candidate-professional-header">
          <h1 className="candidate-professional-form-title">Professional Information</h1>
          
          <div className="candidate-professional-step-indicator">
            <span className="candidate-professional-step-number">Step 2 of 5</span>
            <span className="candidate-professional-step-title">Professional Information</span>
          </div>
        </div>

        <div className="candidate-professional-content">
          <div className="candidate-professional-form-section">
            <form onSubmit={handleSubmit} className="candidate-professional-form">
              <div className="candidate-professional-form-group">
                <label htmlFor="interestedField">Interested Field</label>
                <select
                  id="interestedField"
                  name="interestedField"
                  value={formData.interestedField}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select your field</option>
                  <option value="software-engineering">Software Engineering</option>
                  <option value="data-science">Data Science</option>
                  <option value="product-management">Product Management</option>
                  <option value="design">Design</option>
                  <option value="marketing">Marketing</option>
                  <option value="sales">Sales</option>
                  <option value="finance">Finance</option>
                  <option value="hr">Human Resources</option>
                  <option value="operations">Operations</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="candidate-professional-form-group">
                <label htmlFor="yearsOfExperience">Years of Experience</label>
                <select
                  id="yearsOfExperience"
                  name="yearsOfExperience"
                  value={formData.yearsOfExperience}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select experience</option>
                  <option value="0-1">0-1 years</option>
                  <option value="1-3">1-3 years</option>
                  <option value="3-5">3-5 years</option>
                  <option value="5-10">5-10 years</option>
                  <option value="10+">10+ years</option>
                </select>
              </div>

              <div className="candidate-professional-info-box">
                <p>Your selected field will help us show relevant skills options in the next step.</p>
              </div>

              <div className="candidate-professional-form-actions">
                <button type="button" className="candidate-professional-back-button" onClick={handleBack}>
                  Back
                </button>
                <button type="submit" className="candidate-professional-continue-button">
                  Continue
                </button>
              </div>
            </form>
          </div>

          <div className="candidate-professional-illustration">
            <svg className="candidate-professional-illustration-svg" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="100" cy="100" r="80" fill="#667eea" fillOpacity="0.1"/>
              <rect x="60" y="50" width="80" height="100" rx="8" fill="white" stroke="#667eea" strokeWidth="2"/>
              <rect x="70" y="65" width="60" height="8" rx="4" fill="#667eea" fillOpacity="0.3"/>
              <rect x="70" y="80" width="40" height="8" rx="4" fill="#667eea" fillOpacity="0.3"/>
              <rect x="70" y="95" width="50" height="8" rx="4" fill="#667eea" fillOpacity="0.3"/>
              <circle cx="80" cy="120" r="6" fill="#667eea"/>
              <circle cx="100" cy="120" r="6" fill="#667eea" fillOpacity="0.5"/>
              <circle cx="120" cy="120" r="6" fill="#667eea" fillOpacity="0.3"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CandidateProfessional
