import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class ContentService {
  apiUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { 
  }

  testApi(): Observable<any> {
    const headers = new HttpHeaders();
    return this.http.get(this.apiUrl, { headers })
  }

  getRawEntityList(): Observable<any> {
    this.apiUrl += 'entity/raw/list';
    const headers = new HttpHeaders();
    return this.http.get(this.apiUrl, { headers })
  }
}
