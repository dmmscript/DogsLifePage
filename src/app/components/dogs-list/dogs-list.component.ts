import { Component, OnInit } from '@angular/core';
import { ServicesDogService } from 'src/app/services-dog.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dogs-list',
  templateUrl: './dogs-list.component.html',
  styleUrls: ['./dogs-list.component.scss'],
})
export class DogsListComponent implements OnInit {
  dogs: any[] = [];
  filteredDogs: any[] = [];
  breeds: string[] = [];
  searchQuery: string = '';
  selectedBreed: string = '';

  constructor(private dogService: ServicesDogService, private router: Router) {}

  ngOnInit(): void {
    this.loadDogs();
    this.loadBreeds();
  }

  loadDogs(): void {
    this.dogService.getDogs().subscribe((images) => {
      this.dogs = images;
      this.filteredDogs = images;
      this.searchDogs();
    });
  }

  loadBreeds(): void {
    this.dogService.getBreeds().subscribe((breeds) => {
      this.breeds = breeds.map((breed) => breed.name);

      console.log('Loaded breeds:', this.breeds);
    });
  }

  searchDogs(): void {
    if (this.searchQuery.trim() || this.selectedBreed) {
      this.filteredDogs = this.dogs.filter(
        (dog) =>
          (dog.breeds[0]?.name
            .toLowerCase()
            .includes(this.searchQuery.toLowerCase()) ||
            dog.temperament
              ?.toLowerCase()
              .includes(this.searchQuery.toLowerCase())) &&
          (this.selectedBreed
            ? dog.breeds[0]?.name === this.selectedBreed
            : true)
      );
    } else {
      this.filteredDogs = this.dogs;
    }
  }

  goToBreeds(): void {
    this.router.navigate(['/breeds']);
  }
}
