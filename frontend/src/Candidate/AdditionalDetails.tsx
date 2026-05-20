import type { FC, FormEvent } from 'react';
import type { FormComponentProps } from '../types/candidate';

const AdditionalDetailsForm: FC<FormComponentProps> = ({
  formData,
  updateFormData,
  onNext,
  onBack,
}) => {
  const handleNext = (e: FormEvent) => {
    e.preventDefault();
    onNext();
  };

  return (
    <div className="form-container">
      {/* Title Header */}
      <div>
        <h2 className="form-header-title">Additional Details</h2>
        <p className="form-header-subtitle">A few more details to complete your profile</p>
      </div>

      <form onSubmit={handleNext} className="space-y-6">
        <div className="form-grid">
          
          {/* Left Column Controls */}
          <div className="space-y-6">
            {/* Status Dropdown */}
            <div>
              <label className="form-label">
                Status <span className="text-red-500">*</span>
              </label>
              <div className="select-wrapper">
                <select
                  required
                  value={formData.status || ''}
                  onChange={(e) => updateFormData({ status: e.target.value })}
                  className="form-select"
                >
                  <option value="" disabled hidden>Select status</option>
                  <option value="Active">Looking for opportunities</option>
                  <option value="Passive">Open to offers</option>
                  <option value="Unavailable">Not available</option>
                </select>
              </div>
            </div>

            {/* Availability Dropdown */}
            <div>
              <label className="form-label">
                Availability <span className="text-red-500">*</span>
              </label>
              <div className="select-wrapper">
                <select
                  required
                  value={formData.availability || ''}
                  onChange={(e) => updateFormData({ availability: e.target.value })}
                  className="form-select"
                >
                  <option value="" disabled hidden>Select availability</option>
                  <option value="Immediate">Immediate (1-2 weeks)</option>
                  <option value="1Month">1 Month Notice</option>
                  <option value="2Months">2 Month Notice</option>
                </select>
              </div>
            </div>

            {/* Willing to be Contacted Dropdown */}
            <div>
              <label className="form-label">
                Willing to be Contacted <span className="text-red-500">*</span>
              </label>
              <div className="select-wrapper">
                <select
                  required
                  value={formData.willingToContact || ''}
                  onChange={(e) => updateFormData({ willingToContact: e.target.value })}
                  className="form-select"
                >
                  <option value="" disabled hidden>Select an option</option>
                  <option value="Yes">Yes, directly by email/phone</option>
                  <option value="No">No, keep anonymous</option>
                </select>
              </div>
            </div>
          </div>

          {/* Right Column Controls */}
          <div className="flex flex-col justify-start pt-0">
            {/* Salary Range Input */}
            <div>
              <label className="form-label">
                Salary Range (Next 2 Years) <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                placeholder="80000-120000"
                value={formData.salaryRange || ''}
                onChange={(e) => updateFormData({ salaryRange: e.target.value })}
                className="form-input"
              />
              <span className="block text-xs text-gray-400 mt-1.5 px-1">
                Example: 80000-120000
              </span>
            </div>

            {/* Notice Yellow Alert Banner */}
            <div className="warning-banner md:mt-6">
              <div className="warning-icon">!</div>
              <p className="warning-text">
                Please enter expected salary range for the next 2 years.
              </p>
            </div>
          </div>

        </div>

        {/* Form Action Footer Bar */}
        <div className="form-footer-actions">
          <button type="button" onClick={onBack} className="btn-back">
            ← Back
          </button>
          <button type="submit" className="btn-continue">
            Continue →
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdditionalDetailsForm;