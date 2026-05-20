import { useState } from 'react';
import type { FC, KeyboardEvent, FormEvent } from 'react';
import type { FormComponentProps } from '../types/candidate';

const SkillsExperienceForm: FC<FormComponentProps> = ({
  formData,
  updateFormData,
  onNext,
  onBack,
}) => {
  const [skillInput, setSkillInput] = useState<string>('');
  
  const defaultSkills: string[] = ['React', 'Next.js', 'Node.js', 'MongoDB', 'TypeScript'];
  const [selectedSkills, setSelectedSkills] = useState<string[]>(
    formData.skills.length > 0 ? formData.skills : defaultSkills
  );

  const handleAddSkill = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && skillInput.trim()) {
      e.preventDefault();
      if (!selectedSkills.includes(skillInput.trim())) {
        const updatedSkills = [...selectedSkills, skillInput.trim()];
        setSelectedSkills(updatedSkills);
        updateFormData({ skills: updatedSkills });
      }
      setSkillInput('');
    }
  };

  const handleRemoveSkill = (skillToRemove: string) => {
    const updatedSkills = selectedSkills.filter((skill) => skill !== skillToRemove);
    setSelectedSkills(updatedSkills);
    updateFormData({ skills: updatedSkills });
  };

  const handleNext = (e: FormEvent) => {
    e.preventDefault();
    onNext();
  };

  return (
    <div className="form-container">
      {/* Title Header */}
      <div>
        <h2 className="form-header-title">Skills & Experience</h2>
        <p className="form-header-subtitle">Add your key skills and experience details</p>
      </div>

      <form onSubmit={handleNext} className="space-y-6">
        {/* Input Wrapper Field */}
        <div>
          <label className="form-label">
            Key Skills <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="Search and select skills"
            value={skillInput}
            onChange={(e) => setSkillInput(e.target.value)}
            onKeyDown={handleAddSkill}
            className="form-input"
          />
        </div>

        {/* Selected Skill Elements */}
        <div>
          <label className="badge-container-label">
            Selected Skills
          </label>
          <div className="badge-list">
            {selectedSkills.map((skill) => (
              <span key={skill} className="skill-badge">
                {skill}
                <button
                  type="button"
                  onClick={() => handleRemoveSkill(skill)}
                  className="badge-close-btn"
                >
                  &times;
                </button>
              </span>
            ))}
          </div>
        </div>

        {/* Informational Blue Box Alert Banner */}
        <div className="info-banner">
          <div className="info-icon">i</div>
          <p className="info-text">
            Tip: Add skills that best describe your expertise. You can add or remove skills at any time.
          </p>
        </div>

        {/* Dynamic Action Interaction Row */}
        <div className="form-footer-actions">
          <button type="button" onClick={onBack} className="btn-back">
            Back
          </button>
          <button type="submit" className="btn-continue">
            Continue
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </button>
        </div>
      </form>
    </div>
  );
};

export default SkillsExperienceForm;