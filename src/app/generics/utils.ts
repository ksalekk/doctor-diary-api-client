export interface Patient extends ListItem {
  id: number;
  firstname: string;
  lastname: string;
  pesel: string;
  // dateOfBirth: Date | string | NgbDate;
  dateOfBirth: Date | string;
  sex: string;
  phoneNumber: string;
  address: Address;
  medicalData: MedicalData;
}

export interface Address {
  country: string;
  city: string;
  postCode: string;
  street: string;
}

export interface MedicalData {
  activeHealthProblems: string;
  takenMedications: string;
  activeAllergies: string;
}

export interface VisitSummary {
  patientDescription?: string,
  examinationDescription?: string,
  treatmentPlan?: string
}

export interface Appointment {
  id?: number,
  patient_id?: number,
  datetime?: Date | string,
  visitSummary?: VisitSummary
}

export interface ListItem {
  id: number;
  [key: string]: any;
}

export interface ListStructure {
  cols: Array<{ property: string; name: string }>;
  actions: Array<{ handler: (id: number) => void; icon: any }>;
}


export const deleteMessage = (resourceType: string, resource: string) => {
  return `Are you sure you want to delete ${resource}? All information associated to this ${resource} will be permanently deleted. This operation cannot be undone.`
}



