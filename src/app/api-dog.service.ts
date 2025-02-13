import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiDogService {
  private apiUrl = environment.apiUrl;
  private apiKey = environment.apiKey;
  private breedsUrl = environment.breedsUrl;

  constructor(private http: HttpClient) {}

  getDogs(): Observable<Dog[]> {
    const headers = new HttpHeaders().set('x-api-key', this.apiKey);
    const params = new HttpParams().set('has_breeds', '1');
    return this.http.get<any[]>(this.apiUrl, { headers, params }).pipe(
      map((dogs: any[]) => {
        const uniqueBreeds = new Map<string, Dog>();

        dogs.forEach((dog: Dog) => {
          const breedName = dog.breeds[0]?.name;
          const isValid =
            dog.breeds &&
            dog.breeds.length > 0 &&
            breedName !== 'Unknown Breed' &&
            dog.url !== null &&
            dog.breeds[0]?.temperament &&
            typeof dog.breeds[0]?.temperament === 'string' &&
            dog.breeds[0]?.temperament.length > 15;

          if (isValid && !uniqueBreeds.has(breedName)) {
            uniqueBreeds.set(breedName, dog);
          }
        });

        return Array.from(uniqueBreeds.values()).slice(0, 15);
      })
    );
  }

  getBreeds(): Observable<Breed[]> {
    const headers = new HttpHeaders().set('x-api-key', this.apiKey);
    return this.http.get<any[]>(this.breedsUrl, { headers });
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
