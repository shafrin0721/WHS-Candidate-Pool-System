import { useState } from 'react'
import './Candidate_basic.css'

function Candidate() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobileNumber: '',
    dateOfBirth: '',
    age: '',
    linkedInProfile: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  return (
    <div className="candidate-container">
      <div className="form-card">
        <h1 className="form-title">Join Our Candidate Pool</h1>
        
        <div className="step-indicator">
          <span className="step-number">Step 1 of 3</span>
          <span className="step-title">Basic Information</span>
        </div>

        <form onSubmit={handleSubmit} className="candidate-form">
          <div className="form-group">
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Enter your full name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email address"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="mobileNumber">Mobile Number</label>
            <input
              type="tel"
              id="mobileNumber"
              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleChange}
              placeholder="Enter your mobile number"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="dateOfBirth">Date of Birth</label>
            <input
              type="date"
              id="dateOfBirth"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="age">Age</label>
            <input
              type="number"
              id="age"
              name="age"
              value={formData.age}
              onChange={handleChange}
              placeholder="Enter your age"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="linkedInProfile">LinkedIn Profile</label>
            <input
              type="url"
              id="linkedInProfile"
              name="linkedInProfile"
              value={formData.linkedInProfile}
              onChange={handleChange}
              placeholder="Enter your LinkedIn profile URL"
            />
          </div>

          <div className="form-actions">
            <button type="submit" className="continue-button">
              Continue
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Candidate
