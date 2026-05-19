import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SettingsPage from './Candidate/Setting/Settings'
import SkillsExperienceForm from './Candidate/SkillsExperience';
import type { CandidateFormData } from './types/candidate';
import AdditionalDetailsForm from './Candidate/AdditionalDetails';
import logo from './assets/logo.png';
import './App.css'

function App() {
  const [formData, setFormData] = useState<CandidateFormData>({
    skills: ['React', 'Next.js', 'Node.js', 'MongoDB', 'TypeScript'],
    status: '',
    salaryRange: '',
    availability: '',
    willingToContact: ''
  });

  const updateFormData = (newData: Partial<CandidateFormData>) => {
    setFormData((prev) => ({ ...prev, ...newData }));
  };

  const steps = [
    { id: 1, name: 'Basic Information' },
    { id: 2, name: 'Professional Information' },
    { id: 3, name: 'Skills & Experience' },
    { id: 4, name: 'Additional Details' },
    { id: 5, name: 'Upload CV' },
  ];

  return (
    <Router>
      <Routes>
        <Route path="/" element={<SettingsPage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route 
          path="/skills" 
          element={
            <div className="min-h-screen bg-[#F8FAFC] antialiased text-gray-700 pb-12">
              
              {/* 1. Full Length Top Header Bar with Logo */}
              <header className="w-full bg-white border-b border-gray-200/80 px-6 py-4 flex items-center gap-4 mb-8">
                <img 
                  src={logo} 
                  alt="Workforce Hiring Solutions Logo" 
                  className="h-16 w-auto object-contain" 
                />
                <h1 className="text-[#1E3A8A] font-bold text-xl tracking-wide">
                  Join Our Candidate Pool
                </h1>
              </header>

              {/* Main Content Layout Block */}
              <main className="max-w-5xl mx-auto px-4 space-y-6">
                
                {/* 2. Step Element Progress Length Bar */}
                <div className="w-full bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
                  <div className="flex flex-wrap items-center justify-between gap-4 px-2">
                    {steps.map((step) => {
                      const isCompletedOrActive = step.id <= 3; // Step 1, 2, and 3 show active checkmarks
                      return (
                        <div key={step.id} className="flex items-center gap-2.5">
                          <div className={`flex items-center justify-center w-5 h-5 rounded-full transition-colors ${
                            isCompletedOrActive 
                              ? 'bg-[#22C55E] text-white' 
                              : 'border border-gray-300 text-gray-400'
                          }`}>
                            {isCompletedOrActive ? (
                              <svg className="w-3 h-3 fill-current stroke-current" viewBox="0 0 24 24" strokeWidth="3">
                                <path d="M4.5 12.75l6 6 9-13.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                            ) : (
                              <span className="text-xs font-semibold">{step.id}</span>
                            )}
                          </div>
                          <span className={`text-xs font-medium tracking-tight ${
                            step.id === 3 ? 'text-gray-900 font-semibold' : 'text-gray-500'
                          }`}>
                            {step.name}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* 3. Your Boxed Global CSS Form Component Wrapper */}
                <div className="w-full bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
                  <SkillsExperienceForm 
                    formData={formData}
                    updateFormData={updateFormData}
                    onNext={() => alert('Moving to Additional Details!')}
                    onBack={() => alert('Going back!')}
                  />
                </div>
                
              </main>
            </div>
          } 
        />
        <Route 
  path="/additional-details" 
  element={
    <div className="min-h-screen bg-[#F8FAFC] antialiased text-gray-700 pb-12">
      <header className="w-full bg-white border-b border-gray-200/80 px-6 py-4 flex items-center gap-4 mb-8">
        <img src={logo} alt="Logo" className="h-16 w-auto object-contain" />
        <h1 className="text-[#1E3A8A] font-bold text-xl tracking-wide">Join Our Candidate Pool</h1>
      </header>

      <main className="max-w-5xl mx-auto px-4 space-y-6">
        {/* Stepper Bar (Step 4 is active here) */}
        <div className="w-full bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-4 px-2">
            {[
              { id: 1, name: 'Basic Information' },
              { id: 2, name: 'Professional Information' },
              { id: 3, name: 'Skills & Experience' },
              { id: 4, name: 'Additional Details' },
              { id: 5, name: 'Upload CV' },
            ].map((step) => {
              const isCompletedOrActive = step.id <= 4; // active up to step 4
              return (
                <div key={step.id} className="flex items-center gap-2.5">
                  <div className={`flex items-center justify-center w-5 h-5 rounded-full ${
                    isCompletedOrActive ? 'bg-[#22C55E] text-white' : 'border border-gray-300 text-gray-400'
                  }`}>
                    {isCompletedOrActive ? (
                      <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24" strokeWidth="3"><path d="M4.5 12.75l6 6 9-13.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    ) : <span className="text-xs font-semibold">{step.id}</span>}
                  </div>
                  <span className={`text-xs font-medium ${step.id === 4 ? 'text-gray-900 font-semibold' : 'text-gray-500'}`}>{step.name}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Main Box Wrapper */}
        <div className="w-full bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
          <AdditionalDetailsForm 
            formData={formData}
            updateFormData={updateFormData}
            onNext={() => alert('Moving to Upload CV page!')}
            onBack={() => alert('Going back to Skills page!')}
          />
        </div>
      </main>
    </div>
  } 
/>

      </Routes>
    </Router>
  )
}

export default App
