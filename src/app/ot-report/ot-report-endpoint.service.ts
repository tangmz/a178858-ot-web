import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment";
import { EmployeeDatatableResponse } from "../employee_details/@response/employee-datatable-response";
import { OtResponse } from "./@response/ot-response";

@Injectable({
    providedIn: 'root'
})
export class OtReportEndpointService {
    
    constructor(private _http: HttpClient) {
    }

    public getUsers(): Observable<EmployeeDatatableResponse[]> {
        return this._http.get<EmployeeDatatableResponse[]>(
            `${this.getBaseUrl()}/user`
        )
    }

    public getOtList(userId: number): Observable<OtResponse[]> {
        return this._http.get<OtResponse[]>(
            `${this.getBaseUrl()}/ot/${userId}`
        )
    }
    
    protected getBaseUrl(): string {
        return `${environment.api.url}`;
    }
}