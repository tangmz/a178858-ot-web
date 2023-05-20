import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment";
import { StatListResponse } from "./@response/stat-list-response";
import { StatResponse } from "./@response/stat-response";

@Injectable({
    providedIn: 'root'
})
export class DashboardEndpointService {
    
    constructor(private _http: HttpClient) {}

    public getLateInStat() :Observable<StatResponse> {
        return this._http.get<StatResponse>(
            `${this.getBaseUrl()}/stats/late_in`
        )
    }

    public getEarlyInStat() :Observable<StatResponse> {
        return this._http.get<StatResponse>(
            `${this.getBaseUrl()}/stats/early_in`
        )
    }

    public getOtStat() :Observable<StatResponse> {
        return this._http.get<StatResponse>(
            `${this.getBaseUrl()}/stats/ot_request`
        )
    }

    public getDailySalaryStat() :Observable<StatResponse> {
        return this._http.get<StatResponse>(
            `${this.getBaseUrl()}/stats/daily_salary`
        )
    }

    public getLateInUsers() :Observable<StatListResponse[]> {
        return this._http.get<StatListResponse[]>(
            `${this.getBaseUrl()}/stats/late_in/list`
        )
    }

    public getEarlyInUsers() :Observable<StatListResponse[]> {
        return this._http.get<StatListResponse[]>(
            `${this.getBaseUrl()}/stats/early_in/list`
        )
    }

    protected getBaseUrl(): string {
        return `${environment.api.url}`;
    }
}