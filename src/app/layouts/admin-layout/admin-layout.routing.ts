import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { EmployeeDetailsComponent } from '../../employee_details/employee_details.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { CalcComponent } from '../../calc/calc.component';
import { OtReportComponent } from '../../ot-report/ot-report.component';
import { SalaryReportComponent } from '../../salary-report/salary-report.component';

import { AuthGuard } from '../../auth/auth.guard';

export const AdminLayoutRoutes: Routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard',      component: DashboardComponent, canActivate: [AuthGuard] },
    { path: 'employee_details',   component: EmployeeDetailsComponent, canActivate: [AuthGuard] },
    { path: 'table-list',     component: TableListComponent, canActivate: [AuthGuard] },
    { path: 'typography',     component: TypographyComponent, canActivate: [AuthGuard] },
    { path: 'icons',          component: IconsComponent, canActivate: [AuthGuard] },
    { path: 'maps',           component: MapsComponent, canActivate: [AuthGuard] },
    { path: 'notifications',  component: NotificationsComponent, canActivate: [AuthGuard] },
    { path: 'ot_report',      component: OtReportComponent, canActivate: [AuthGuard] },
    { path: 'salary_report',  component: SalaryReportComponent, canActivate: [AuthGuard] },
    { path: 'calc',           component: CalcComponent, canActivate: [AuthGuard] },
];
