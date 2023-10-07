import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContentService {
  apiUrl = 'http://localhost:8777/';

  constructor(private http: HttpClient) { }

  getRawEntityList(): Observable<any> {
    this.apiUrl += 'entity/raw/list';
    const headers = new HttpHeaders();
    return this.http.get(this.apiUrl, { headers })
  }
}
