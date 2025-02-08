import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServicesDogService {
  private apiUrl = environment.apiUrl;
  private apiKey = environment.apiKey;

  constructor(private http: HttpClient) { }
  
  getDogs(): Observable<any[]> {
    const headers = new HttpHeaders().set('x-api-key', this.apiKey);
    return this.http.get<any[]>(this.apiUrl, { headers });
  }
}
