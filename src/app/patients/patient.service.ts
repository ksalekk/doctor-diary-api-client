import { Injectable } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';
import { Patient } from '../generics/utils';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  private patientsUrl = 'assets/patients-mock.json';

  constructor(private http: HttpClient) { }

  getPatients(): Observable<Patient[]> {
    return this.http.get<Patient[]>(this.patientsUrl)
  }

  getPatientDetails(id: number): Observable<Patient | undefined> {
    return this.http.get<Patient[]>(this.patientsUrl).pipe(
      map((patients) => patients.find(patient => patient.id === id)),
      catchError(err => of(undefined))
    )
  }

  createPatient(patient: Patient): Observable<Patient> {
    console.log(`Added new patient: ${JSON.stringify(patient, null, 2)}`)
    return of(patient);
    // return this.http.put<Patient>(this.patientsUrl, patient)
  }

  updatePatient(patient: Patient): Observable<Patient> {
    console.log(`Updated patient: ${JSON.stringify(patient, null, 2)}`)
    return of(patient);
    // return this.http.post<Patient>(this.patientsUrl, patient)
  }
}
