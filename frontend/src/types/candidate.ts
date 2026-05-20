export interface CandidateFormData {
  skills: string[];
  status?: string;
  availability?: string;
  willingToContact?: string;
  salaryRange?: string;
}

export interface FormComponentProps {
  formData: CandidateFormData;
  updateFormData: (data: Partial<CandidateFormData>) => void;
  onNext: () => void;
  onBack: () => void;
}
