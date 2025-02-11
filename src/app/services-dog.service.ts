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
  private breedsUrl = environment.breedsUrl;
  
  constructor(private http: HttpClient) {}

  getDogs(): Observable<Dog[]> {
    const headers = new HttpHeaders().set('x-api-key', this.apiKey);
    const params = new HttpParams().set('has_breeds', '1');
    return this.http.get<any[]>(this.apiUrl, { headers, params }).pipe(
      map((dogs: any[]) =>
        dogs.filter((dog: Dog) =>
          dog.breeds && dog.breeds.length > 0 &&
          dog.breeds[0]?.name !== 'Unknown Breed' && 
          dog.url !== null && 
          dog.breeds[0]?.temperament !== null
        )
      )
    );
  }

  getBreeds(): Observable<Breed[]> {
    const headers = new HttpHeaders().set('x-api-key', this.apiKey);
    return this.http.get<any[]>(this.breedsUrl, { headers });
  }

  getDogsByBreed(breedId: string): Observable<any[]> {
    const headers = new HttpHeaders().set('x-api-key', this.apiKey);
    const params = new HttpParams().set('breed', breedId).set('limit', '15');
    return this.http.get<any[]>(this.apiUrl, { headers, params }).pipe(
      map((dogs: any[]) =>
        dogs.filter((dog: Dog) =>
          dog.breeds && dog.breeds.length > 0 &&
          dog.breeds[0]?.name === breedId &&
          dog.url !== null
        )
      )
    );
  }
}

interface Dog {
  url: string | null;
  breeds: { name: string; temperament: string }[];
  width: number;
  height: number;
  favourite: any;
}

interface Breed {
  id: number;
  name: string;
  weight: string;
  height: string;
  life_span: string;
  bred_for: string;
  breed_group: string;
}