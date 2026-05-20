import { useState, type ReactNode } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import BasicInformation from './Candidate/BasicInformation';
import ProfessionalInfo from './Candidate/ProfessionalInfo';
import SkillsExperience from './Candidate/SkillsExperience';
import AdditionalDetails from './Candidate/AdditionalDetails';
import type { BasicInfoData, ProfessionalInfoData } from './Candidate/types';
import type { CandidateFormData } from './types/candidate';

const initialFormData: CandidateFormData = {
  skills: [],
  status: '',
  availability: '',
  willingToContact: '',
  salaryRange: '',
};

function FormStepLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4 fade-in">
      <div className="w-full max-w-5xl card">{children}</div>
    </div>
  );
}

function App() {
  const navigate = useNavigate();
  const [basicData, setBasicData] = useState<BasicInfoData | null>(null);
  const [professionalData, setProfessionalData] = useState<ProfessionalInfoData | null>(null);
  const [formData, setFormData] = useState<CandidateFormData>(initialFormData);

  const updateFormData = (data: Partial<CandidateFormData>) => {
    setFormData((prev) => ({ ...prev, ...data }));
  };

  const handleBasicNext = (data: BasicInfoData) => {
    setBasicData(data);
    navigate('/candidate/professional');
  };

  const handleProfessionalNext = (data: ProfessionalInfoData) => {
    setProfessionalData(data);
    navigate('/candidate/skills');
  };

  const handleFinalSubmit = () => {
    console.log('Complete profile:', { basicData, professionalData, formData });
  };

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/candidate/basic" replace />} />
      <Route path="/candidate" element={<Navigate to="/candidate/basic" replace />} />
      <Route
        path="/candidate/basic"
        element={
          <BasicInformation
            onNext={handleBasicNext}
            initialData={basicData ?? undefined}
          />
        }
      />
      <Route
        path="/candidate/professional"
        element={
          <ProfessionalInfo
            onNext={handleProfessionalNext}
            onBack={() => navigate('/candidate/basic')}
            initialData={professionalData ?? undefined}
            basicData={basicData ?? undefined}
          />
        }
      />
      <Route
        path="/candidate/skills"
        element={
          <FormStepLayout>
            <SkillsExperience
              formData={formData}
              updateFormData={updateFormData}
              onNext={() => navigate('/candidate/additional')}
              onBack={() => navigate('/candidate/professional')}
            />
          </FormStepLayout>
        }
      />
      <Route
        path="/candidate/additional"
        element={
          <FormStepLayout>
            <AdditionalDetails
              formData={formData}
              updateFormData={updateFormData}
              onNext={() => {
                handleFinalSubmit();
                alert('Profile saved! Check the browser console for full data.');
              }}
              onBack={() => navigate('/candidate/skills')}
            />
          </FormStepLayout>
        }
      />
      <Route path="*" element={<Navigate to="/candidate/basic" replace />} />
    </Routes>
  );
}

export default App;
