import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Patient } from '../utils';
import { PatientService } from 'src/app/patients/patient.service';

@Component({
  selector: 'app-patient-form',
  templateUrl: './patient-form.component.html',
  styleUrls: ['./patient-form.component.css']
})
export class PatientFormComponent implements OnInit{
  patientForm: FormGroup;
  addressForm: FormGroup;
  medicalDataForm: FormGroup;

  currentDate: string;

  @Input() patient: Patient | undefined;
  @Output() submitPatient = new EventEmitter<Patient>();

  constructor(private formBuilder: FormBuilder, private patientService: PatientService) { }

  ngOnInit(): void {
      this.currentDate = new Date().toISOString().split('T')[0]
      this.addressForm = this.formBuilder.group({
          country: [this.patient?.address?.country ?? ''],
          city: [this.patient?.address?.city ?? ''],
          postCode: [this.patient?.address?.postCode ?? ''],
          street: [this.patient?.address?.street ?? ''],
      })

      this.medicalDataForm = this.formBuilder.group({
          activeHealthProblems: [this.patient?.medicalData?.activeHealthProblems ?? ''],
          takenMedications: [this.patient?.medicalData?.takenMedications ?? ''],
          activeAllergies: [this.patient?.medicalData?.activeAllergies ?? ''],
      })

      this.patientForm = this.formBuilder.group({
          firstname: [this.patient?.firstname ?? ''],
          lastname: [this.patient?.lastname ?? ''],
          dateOfBirth: [''], // value for dateOfBirth control settled in template
          pesel: [this.patient?.pesel ?? ''],
          sex: [this.patient?.sex ?? 'male'],
          phoneNumber: [this.patient?.phoneNumber ?? ''],

          address: this.addressForm,
          medicalData: this.medicalDataForm
      })
  }

  public onSubmit() {
      const newPatient: Patient = this.patientForm.value;
      this.submitPatient.emit(newPatient)
  }

}
