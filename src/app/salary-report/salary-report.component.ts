import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { saveAs } from 'file-saver';
import { SalaryReportResponse } from './@response/salary-report-response';
import { SalaryReportEndpointService } from './salary-report-endpoint.service';

@Component({
  selector: 'app-salary-report',
  templateUrl: './salary-report.component.html',
  styleUrls: ['./salary-report.component.scss']
})
export class SalaryReportComponent implements OnInit, OnDestroy {
  Math = Math;

  _unsubscribeAll: Subject<any> = new Subject<any>();
  rows: SalaryReportResponse[] = [];
  page: number = 1;
  itemsPerPage: number = 5;
  currentMonth: string;

  constructor(private _endpoint: SalaryReportEndpointService,) { 
    this.currentMonth = new Date().toLocaleString('default', { month: 'long' });
  }

  ngOnInit(): void {
    this.fetch();
  }

  ngOnDestroy(): void {
      this._unsubscribeAll.next();
      this._unsubscribeAll.complete();
  }

  fetch() {
    this._endpoint.getSalaryReportDatatable().pipe(takeUntil(this._unsubscribeAll)).subscribe({
      next: (response) => {
        this.rows = response;
      }
    })
  }

  downloadCsv() {
    this._endpoint.getSalaryReportCSV().pipe(takeUntil(this._unsubscribeAll)).subscribe({
      next: (response) => {
        const filename = `${this.currentMonth}-salary.csv`;
        saveAs(response, filename);
      }
    })
  }

}
