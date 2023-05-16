import { EmployeeDatatableResponse } from '../../employee_details/@response/employee-datatable-response';

export interface OtResponse {
    id: number;
    otDate: Date;
    duration: number;
    jobDesc: string;
    requestStatus: string;
    userType: string;
    dayType: string;
    user: EmployeeDatatableResponse;
}