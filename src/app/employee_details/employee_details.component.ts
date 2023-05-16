import { Component, OnDestroy, OnInit } from '@angular/core';
import { EmployeeEndpointService } from './employee-endpoint.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmployeeDatatableResponse } from './@response/employee-datatable-response';
import { EmployeeRequest } from './@request/employee-request';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-employee_details',
  templateUrl: './employee_details.component.html',
  styleUrls: ['./employee_details.component.css']
})
export class EmployeeDetailsComponent implements OnInit, OnDestroy {
  Math = Math;

  _unsubscribeAll: Subject<any> = new Subject<any>();
  rows: EmployeeDatatableResponse[] = [];
  page: number = 1;
  itemsPerPage: number = 5;
  employeeForm: FormGroup;
  request: EmployeeRequest;
  id: number;

  constructor(private _endpoint: EmployeeEndpointService,
              private formBuilder: FormBuilder,
              private toastr: ToastrService) { 
    this.employeeForm = this.formBuilder.group({
      username: [''],
      password: [''],
      name: [''],
      phoneNumber: [''],
      baseSalary: [''],
      position: [''],
    })
   }

  ngOnInit(): void {
    this.fetch();
  }

  ngOnDestroy(): void {
      this._unsubscribeAll.next();
      this._unsubscribeAll.complete();
  }

  fetch() {
    this._endpoint.getUsers().pipe(takeUntil(this._unsubscribeAll)).subscribe({
      next: (response) => {
        this.rows = response;
      }
    });
  }

  onSelectRow(selected: EmployeeDatatableResponse) {
    this.id = selected.id;
    this.employeeForm.controls.name.setValue(selected.name);
    this.employeeForm.controls.username.setValue(selected.username);
    this.employeeForm.controls.password.setValue(selected.password);
    this.employeeForm.controls.phoneNumber.setValue(selected.phoneNumber);
    this.employeeForm.controls.baseSalary.setValue(selected.baseSalary);
    this.employeeForm.controls.position.setValue(selected.position);
  }

  onClear() {
    this.employeeForm.controls.name.setValue(null);
    this.employeeForm.controls.username.setValue(null);
    this.employeeForm.controls.password.setValue(null);
    this.employeeForm.controls.phoneNumber.setValue(null);
    this.employeeForm.controls.baseSalary.setValue(null);
    this.employeeForm.controls.position.setValue(null);
  }

  onCreate() {
    this.request = {
      username: this.employeeForm.value.username,
      password: this.employeeForm.value.password,
      userType: 'EMPLOYEE',
      name: this.employeeForm.value.name,
      phoneNumber: this.employeeForm.value.phoneNumber,
      baseSalary: this.employeeForm.value.baseSalary,
      position: this.employeeForm.value.position,
    }
    this._endpoint.createUser(this.request).pipe(takeUntil(this._unsubscribeAll)).subscribe({
      next: (response) => {
        if(response != null) {
          this.toastr.success('<span class="now-ui-icons ui-2_like"></span> <b>SUCCESS!</b> Employee details saved successfully.', '', {
            timeOut: 8000,
            closeButton: true,
            enableHtml: true,
            toastClass: "alert alert-success alert-with-icon",
          });
        }
      },
      error: () => {
        this.toastr.error('<span class="now-ui-icons objects_support-17"></span> <b>OH SNAP!</b> There was an error.', '', {
          timeOut: 8000,
          closeButton: true,
          enableHtml: true,
          toastClass: "alert alert-success alert-with-icon",
        });
      },
      complete: () => {
        setTimeout(() => {
          location.reload();
        }, 1000);
      }
    });
  }

  onSave() {
    this.request = {
      id: this.id,
      username: this.employeeForm.value.username,
      password: this.employeeForm.value.password,
      name: this.employeeForm.value.name,
      phoneNumber: this.employeeForm.value.phoneNumber,
      baseSalary: this.employeeForm.value.baseSalary,
      position: this.employeeForm.value.position,
    }
    this._endpoint.saveUser(this.request).pipe(takeUntil(this._unsubscribeAll)).subscribe({
      next: (response) => {
        if(response != null) {
          this.toastr.success('<span class="now-ui-icons ui-2_like"></span> <b>SUCCESS!</b> Employee details saved successfully.', '', {
            timeOut: 8000,
            closeButton: true,
            enableHtml: true,
            toastClass: "alert alert-success alert-with-icon",
          });
        }
      },
      error: () => {
        this.toastr.error('<span class="now-ui-icons objects_support-17"></span> <b>OH SNAP!</b> There was an error.', '', {
          timeOut: 8000,
          closeButton: true,
          enableHtml: true,
          toastClass: "alert alert-success alert-with-icon",
        });
      },
      complete: () => {
        setTimeout(() => {
          location.reload();
        }, 1000);
      }
    });
  }

}
