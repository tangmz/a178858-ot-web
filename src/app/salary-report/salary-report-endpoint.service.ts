import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { Observable } from "rxjs";
import { SalaryReportResponse } from "./@response/salary-report-response";

@Injectable({
    providedIn: 'root'
})
export class SalaryReportEndpointService {
    
    constructor(private _http: HttpClient) {
        
    }

    // public getUsers(request?: OrderDatatableRequest): Observable<PageableResponse<OrderDatatableResponse>> {
    //     return this._http.post<PageableResponse<OrderDatatableResponse>>(
    //         `${this.getBaseUrl()}/sales/paginated`, request
    //     )
    // }

    public getSalaryReportDatatable(): Observable<SalaryReportResponse[]> {
        return this._http.get<SalaryReportResponse[]>(
            `${this.getBaseUrl()}/salary`
        )
    }

    public getSalaryReportCSV(): Observable<any> {
        return this._http.get(
            `${this.getBaseUrl()}/salary/csv`, { responseType: 'blob' }
        )
    }

    protected getBaseUrl(): string {
        return `${environment.api.url}`;
    }
}