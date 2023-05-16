import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { OtReportEndpointService } from './ot-report-endpoint.service';
import { takeUntil, takeWhile } from 'rxjs/operators';
import { EmployeeDatatableResponse } from '../employee_details/@response/employee-datatable-response';
import { OtResponse } from './@response/ot-response';

@Component({
  selector: 'app-ot-report',
  templateUrl: './ot-report.component.html',
  styleUrls: ['./ot-report.component.scss']
})
export class OtReportComponent implements OnInit, OnDestroy {
  Math = Math;

  _unsubscribeAll: Subject<any> = new Subject<any>();
  employees: EmployeeDatatableResponse[] = [];
  rows: OtResponse[] = [];
  page: number = 1;
  itemsPerPage: number = 5;
  selectedEmployeeId: number;

  constructor(private _endpoint: OtReportEndpointService) { }

  ngOnInit(): void {
    this.fetch();
    this.getOtList(1);
  }
  
  ngOnDestroy(): void {
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }

  fetch() {
    this._endpoint.getUsers().pipe(takeUntil(this._unsubscribeAll)).subscribe({
      next: (response) => {
        this.employees = response;
      }
    })
  }

  getOtList(userId: number) {
    this.rows = [];
    this._endpoint.getOtList(userId).pipe(takeUntil(this._unsubscribeAll)).subscribe({
      next: (response) => {
        this.rows = response;
      }
    })
  }

  onSelectorChange() {
    this.getOtList(this.selectedEmployeeId);
  }

}
