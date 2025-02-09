import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServicesDogService {
  private apiUrl = environment.apiUrl;
  private apiKey = environment.apiKey;
  constructor(private http: HttpClient) {}

  getDogs(): Observable<Dog[]> {
    const headers = new HttpHeaders().set('x-api-key', this.apiKey);
    const params = new HttpParams().set('has_breeds', '1');
    return this.http.get<any[]>(this.apiUrl, { headers, params }).pipe(
      map((dogs: any[]) =>
        dogs.filter((dog: Dog) => dog.breed !== 'Unknown Breed' && dog.url !== null)
      )
    );
  }
}

interface Dog {
  breed: string;
  url: string | null;
}
