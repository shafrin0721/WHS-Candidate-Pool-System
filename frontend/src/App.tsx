import { useState } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import BasicInformation from './Candidate/BasicInformation';
import ProfessionalInfo from './Candidate/ProfessionalInfo';
import type { BasicInfoData, ProfessionalInfoData } from './Candidate/types';

function App() {
  const navigate = useNavigate();
  const [basicData, setBasicData] = useState<BasicInfoData | null>(null);
  const [professionalData, setProfessionalData] = useState<ProfessionalInfoData | null>(null);

  const handleBasicNext = (data: BasicInfoData) => {
    setBasicData(data);
    navigate('/candidate/professional');
  };

  const handleProfessionalNext = (data: ProfessionalInfoData) => {
    setProfessionalData(data);
    console.log('All Data:', { basicData, professionalData: data });
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
      <Route path="*" element={<Navigate to="/candidate/basic" replace />} />
    </Routes>
  );
}

export default App;
