import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { EmployeeDetailsComponent } from '../../employee_details/employee_details.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { ChartsModule } from 'ng2-charts';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { NgSelectModule } from '@ng-select/ng-select';
import { MatTableModule } from '@angular/material/table';
import { NgxPaginationModule } from 'ngx-pagination';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { CalcComponent } from '../../calc/calc.component';
import { OtReportComponent } from '../../ot-report/ot-report.component';
import { SalaryReportComponent } from '../../salary-report/salary-report.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    ChartsModule,
    NgbModule,
    NgSelectModule,
    ToastrModule.forRoot(),
    MatTableModule,
    NgxPaginationModule,
  ],
  declarations: [
    DashboardComponent,
    EmployeeDetailsComponent,
    TableListComponent,
    UpgradeComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    OtReportComponent,
    SalaryReportComponent,
    CalcComponent,
  ]
})

export class AdminLayoutModule {}
