import {HttpParams} from "@angular/common/http";

export abstract class BaseEndpoint {

    /**
     * Form HttpParam from the Object Attributes. Normally used when invoking API.
     *
     * @param object an Object e.g: class or interface containing one or many attributes
     * @protected
     */
    // protected buildHttpParams(object?: Object): HttpParams {
    //     let params = new HttpParams();

    //     if (object) {
    //         for (const [key, value] of Object.entries(object)) {
    //             if (key && value && typeof value !== 'object') {
    //                 params = params.append(key, value);
    //             }
    //         }
    //     }

    //     return params;
    // }

    protected abstract getBaseUrl(): string;
}