import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
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

  constructor(private _service: CalcService, 
    private formBuilder: FormBuilder,
    private titleService: Title,) {
    this.calculatorForm = this.formBuilder.group({
      salary: ['', Validators.required],
    });
    this.titleService.setTitle('EPF & SOCSO Calculator');
  }

  ngOnInit(): void {
  }

  calc() {
    const salary = this.calculatorForm.value.salary;
    this.rows = this._service.calcAction(salary);
    this.netPay = salary - Number(this.rows[this.rows.length - 1].employeeContrib);
  }

}
