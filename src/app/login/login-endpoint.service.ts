import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment";
import { EmployeeDatatableResponse } from "../employee_details/@response/employee-datatable-response";
import { LoginRequest } from "./@request/login-request";

@Injectable({
    providedIn: 'root'
})
export class LoginEndpointService {
    
    constructor(private _http: HttpClient) {
        
    }

    public login(request: LoginRequest): Observable<EmployeeDatatableResponse> {
        return this._http.post<EmployeeDatatableResponse>(
            `${this.getBaseUrl()}/user/login`, request
        )
    }

    protected getBaseUrl(): string {
        return `${environment.api.url}`;
    }
}