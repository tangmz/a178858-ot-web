import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { Observable } from "rxjs";
import { first } from "rxjs/operators";
import { environment } from "../../environments/environment";
import { EmployeeDatatableResponse } from "../employee_details/@response/employee-datatable-response";
import { LoginRequest } from "./@request/login-request";

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {
    private isAuthenticated = false;
    private readonly storageKey = 'isAuthenticated';
    
    constructor(private _http: HttpClient,
        private toastr: ToastrService,
        private _router: Router,) {
        this.isAuthenticated = localStorage.getItem(this.storageKey) === 'true';
    }

    private loginApi(request: LoginRequest): Observable<EmployeeDatatableResponse> {
        return this._http.post<EmployeeDatatableResponse>(
            `${this.getBaseUrl()}/user/login`, request
        )
    }

    public login(request: LoginRequest) {
        this.loginApi(request).pipe(first()).subscribe({
            next: (response) => {
                if (response.userType == 'EMPLOYER') {
                    this.isAuthenticated = true;
                    localStorage.setItem(this.storageKey, 'true');
                    this._router.navigate(["/dashboard"]);
                    this.toastr.success('<span class="now-ui-icons business_badge"></span> <b>Welcome!</b>', '', {
                        timeOut: 2000,
                        closeButton: true,
                        enableHtml: true,
                        toastClass: "alert alert-error alert-with-icon",
                    });
                } else {
                    this.toastr.error('<span class="now-ui-icons ui-1_lock-circle-open"></span> <b>UH OH!</b> You are not an employer.', '', {
                        timeOut: 8000,
                        closeButton: true,
                        enableHtml: true,
                        toastClass: "alert alert-success alert-with-icon",
                    });
                }
            },
            error: () => {
              this.toastr.error('<span class="now-ui-icons objects_key-25"></span> <b>OH SNAP!</b> Bad username / password.', '', {
                timeOut: 8000,
                closeButton: true,
                enableHtml: true,
                toastClass: "alert alert-error alert-with-icon",
              });
            }
        });
    }

    public logout() {
        // Perform logout logic here
        // For simplicity, we'll just set the isAuthenticated flag to false
        this.isAuthenticated = false;
        localStorage.setItem(this.storageKey, 'false');
        this._router.navigate(['/login']);
    }

    public isAuthenticatedUser(): boolean {
        return this.isAuthenticated;
    }

    protected getBaseUrl(): string {
        return `${environment.api.url}`;
    }
}