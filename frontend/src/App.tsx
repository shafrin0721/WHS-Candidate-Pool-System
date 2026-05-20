import { useState } from 'react';
import BasicInformation from './Candidate/BasicInformation';
// import ProfessionalInfo from './Candidate/ProfessionalInfo';  // Commented out
import type { BasicInfoData, ProfessionalInfoData } from './Candidate/types';

type Step = 'basic' | 'professional';

function App() {
  const [currentStep, setCurrentStep] = useState<Step>('basic');
  const [basicData, setBasicData] = useState<BasicInfoData | null>(null);
  const [professionalData, setProfessionalData] = useState<ProfessionalInfoData | null>(null);

  const handleBasicNext = (data: BasicInfoData) => {
    setBasicData(data);
    setCurrentStep('professional');
    console.log('Basic Data:', data);
    alert('Basic Information Saved! Professional Info page coming soon...');
  };

  const handleProfessionalNext = (data: ProfessionalInfoData) => {
    setProfessionalData(data);
    console.log('All Data:', { basicData, professionalData: data });
    alert('Profile completed! Check console for data.');
  };

  const handleBack = () => {
    setCurrentStep('basic');
  };

  return (
    <div>
      {currentStep === 'basic' && (
        <BasicInformation onNext={handleBasicNext} initialData={basicData || undefined} />
      )}
      {/* Temporarily commented - will uncomment after creating ProfessionalInfo.tsx
      {currentStep === 'professional' && (
        <ProfessionalInfo
          onNext={handleProfessionalNext}
          onBack={handleBack}
          initialData={professionalData || undefined}
          basicData={basicData || undefined}
        />
      )}
      */}
    </div>
  );
}

export default App;