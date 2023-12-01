import { HttpClient } from "@angular/common/http";
import { lastValueFrom } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class HttpClientUtil {

    constructor(private http: HttpClient) {
    }

    get(url: string): Promise<any> {
        return lastValueFrom(this.http.get(url));
    }

    post(url: string, body: any): Promise<any> {
        return lastValueFrom(this.http.post(url, body));
    }

    patch(url: string, etag: string, body: any): Promise<any> {
        return lastValueFrom(this.http.patch(
            url,
            body,
            {
                headers:  {
                    'Content-Type': 'application/json',
                    'If-Match': etag
                },
            }
        ));
}
}

