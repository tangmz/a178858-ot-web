import { Injectable } from "@angular/core";
import { CaclDatatableResponse } from "./@response/calc-datatable-response";

@Injectable({
    providedIn: 'root'
})
export class CalcService {
    
  private employeeSocso: number;
  private employerSocso: number;
  private employeeEpf: number;
  private employerEpf: number;
  private employerEpfPercentage: string;

  calcAction(salary: number): CaclDatatableResponse[] {
    this.employerEpfPercentage = salary <= 5000 ? '(13%)' : '(12%)';
    this.calcEpf(salary);
    this.calcSocso(salary);
    return [new CaclDatatableResponse('EPF', `${this.employerEpf} ${this.employerEpfPercentage}`, `${this.employeeEpf} (11%)`, this.employerEpf + this.employeeEpf),
            new CaclDatatableResponse('SOCSO', `${this.employerSocso}`, `${this.employeeSocso}`, this.employerSocso + this.employeeSocso),
            new CaclDatatableResponse('Total', `${this.employerEpf + this.employerSocso}`, 
                `${this.employeeEpf + this.employeeSocso}`, 
                this.employerEpf + this.employeeEpf)];
  }

  private calcEpf(salary: number) {
    if (salary <= 5000) {
      this.employeeEpf = salary * 0.11;
      this.employerEpf = salary * 0.13;
    } else {
      this.employeeEpf = salary * 0.11;
      this.employerEpf = salary * 0.12;
    }
  }

  private calcSocso(salary: number) {
    if (salary > 1400 && salary <= 1500){
        this.employeeSocso = 7.25;
        this.employerSocso = 25.35;
    } else if (salary > 1500 && salary <= 1600) {
      this.employeeSocso = 7.75;
      this.employerSocso = 27.15;
    } else if (salary > 1600 && salary <= 1700) {
      this.employeeSocso = 8.25;
      this.employerSocso = 28.85;
    } else if (salary > 1700 && salary <= 1800) {
      this.employeeSocso = 8.75;
      this.employerSocso = 30.65;
    } else if (salary > 1800 && salary <= 1900) {
      this.employeeSocso = 9.25;
      this.employerSocso = 32.35;
    } else if (salary > 1900 && salary <= 2000) {
      this.employeeSocso = 9.75;
      this.employerSocso = 34.15;
    } else if (salary > 2000 && salary <= 2100) {
      this.employeeSocso = 10.25;
      this.employerSocso = 35.85;
    } else if (salary > 2100 && salary <= 2200) {
      this.employeeSocso = 10.75;
      this.employerSocso = 37.65;
    } else if (salary > 2200 && salary <= 2300) {
      this.employeeSocso = 11.25;
      this.employerSocso = 39.35;
    } else if (salary > 2300 && salary <= 2400) {
      this.employeeSocso = 11.75;
      this.employerSocso = 41.15;
    } else if (salary > 2400 && salary <= 2500) {
      this.employeeSocso = 12.25;
      this.employerSocso = 42.85;
    } else if (salary > 2500 && salary <= 2600) {
      this.employeeSocso = 12.75;
      this.employerSocso = 44.65;
    } else if (salary > 2600 && salary <= 2700) {
      this.employeeSocso = 13.25;
      this.employerSocso = 46.35;
    } else if (salary > 2700 && salary <= 2800) {
      this.employeeSocso = 13.75;
      this.employerSocso = 48.15;
    } else if (salary > 2800 && salary <= 2900) {
      this.employeeSocso = 14.25;
      this.employerSocso = 49.85;
    } else if (salary > 2900 && salary <= 3000) {
      this.employeeSocso = 14.75;
      this.employerSocso = 51.65;
    } else if (salary > 3000 && salary <= 3100) {
      this.employeeSocso = 15.25;
      this.employerSocso = 53.35;
    } else if (salary > 3100 && salary <= 3200) {
      this.employeeSocso = 15.75;
      this.employerSocso = 55.15;
    } else if (salary > 3200 && salary <= 3300) {
      this.employeeSocso = 16.25;
      this.employerSocso = 56.85;
    } else if (salary > 3300 && salary <= 3400) {
      this.employeeSocso = 16.75;
      this.employerSocso = 58.65;
    } else if (salary > 3400 && salary <= 3500) {
      this.employeeSocso = 17.25;
      this.employerSocso = 60.35; 
    } else if (salary > 3500 && salary <= 3600) {
      this.employeeSocso = 17.75;
      this.employerSocso = 62.15; 
    } else if (salary > 3600 && salary <= 3700) {
      this.employeeSocso = 18.25;
      this.employerSocso = 63.85; 
    } else if (salary > 3700 && salary <= 3800) {
      this.employeeSocso = 18.75;
      this.employerSocso = 65.65; 
    } else if (salary > 3800 && salary <= 3900) {
      this.employeeSocso = 19.25;
      this.employerSocso = 67.35; 
    } else if (salary > 3900 && salary <= 4000) {
      this.employeeSocso = 19.75;
      this.employerSocso = 69.15; 
    } else if (salary > 4000 && salary <= 4100) {
      this.employeeSocso = 20.25;
      this.employerSocso = 70.85; 
    } else if (salary > 4100 && salary <= 4200) {
      this.employeeSocso = 20.75;
      this.employerSocso = 72.65; 
    } else if (salary > 4200 && salary <= 4300) {
      this.employeeSocso = 21.25;
      this.employerSocso = 74.35; 
    } else if (salary > 4300 && salary <= 4400) {
      this.employeeSocso = 21.75;
      this.employerSocso = 76.15; 
    } else if (salary > 4400 && salary <= 4500) {
      this.employeeSocso = 22.25;
      this.employerSocso = 77.85; 
    } else if (salary > 4500 && salary <= 4600) {
      this.employeeSocso = 22.75;
      this.employerSocso = 79.65; 
    } else if (salary > 4600 && salary <= 4700) {
      this.employeeSocso = 23.25;
      this.employerSocso = 81.35; 
    } else if (salary > 4700 && salary <= 4800) {
      this.employeeSocso = 23.75;
      this.employerSocso = 83.15; 
    } else if (salary > 4800 && salary <= 4900) {
      this.employeeSocso = 24.25;
      this.employerSocso = 84.85; 
    } else if (salary > 4900 && salary <= 5000) {
      this.employeeSocso = 24.75;
      this.employerSocso = 86.65; 
    }else {
      this.employeeSocso = 24.75;
      this.employerSocso = 86.65;
    }   
  }
}