import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CaclDatatableResponse } from './@response/calc-datatable-response';
import { CalcService } from './calc.service';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.scss']
})
export class CalcComponent implements OnInit {

  calculatorForm: FormGroup;
  rows: CaclDatatableResponse[] = [];
  netPay: number;

  constructor(private _service: CalcService, private formBuilder: FormBuilder) {
    this.calculatorForm = this.formBuilder.group({
      salary: [''],
    })
  }

  ngOnInit(): void {
  }

  calc() {
    const salary = this.calculatorForm.value.salary;
    this.rows = this._service.calcAction(salary);
    this.netPay = salary - Number(this.rows[this.rows.length - 1].employeeContrib);
  }

}
