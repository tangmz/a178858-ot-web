import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment";
import { EmployeeDatatableResponse } from "./@response/employee-datatable-response";
import { EmployeeRequest } from "./@request/employee-request";

@Injectable({
    providedIn: 'root'
})
export class EmployeeEndpointService {
    
    constructor(private _http: HttpClient) {
        
    }

    // public getUsers(request?: OrderDatatableRequest): Observable<PageableResponse<OrderDatatableResponse>> {
    //     return this._http.post<PageableResponse<OrderDatatableResponse>>(
    //         `${this.getBaseUrl()}/sales/paginated`, request
    //     )
    // }

    public getUsers(): Observable<EmployeeDatatableResponse[]> {
        return this._http.get<EmployeeDatatableResponse[]>(
            `${this.getBaseUrl()}/user`
        )
    }

    public createUser(request: EmployeeRequest): Observable<EmployeeDatatableResponse> {
        return this._http.post<EmployeeDatatableResponse>(
            `${this.getBaseUrl()}/user/create`, request
        )
    }

    public saveUser(request: EmployeeRequest): Observable<EmployeeDatatableResponse> {
        return this._http.put<EmployeeDatatableResponse>(
            `${this.getBaseUrl()}/user`, request
        )
    }

    protected getBaseUrl(): string {
        return `${environment.api.url}`;
    }
}