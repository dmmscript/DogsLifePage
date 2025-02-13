import { Component, OnInit } from '@angular/core';
import { ApiDogService } from 'src/app/api-dog.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-breeds-list',
  templateUrl: './breeds-list.component.html',
  styleUrls: ['./breeds-list.component.scss'],
})
export class BreedsListComponent implements OnInit {
  breeds: any[] = [];
  filteredBreeds: any[] = [];
  searchQuery: string = '';

  constructor(private dogService: ApiDogService, private router: Router) {}

  ngOnInit(): void {
    this.loadBreeds();
  }

  loadBreeds(): void {
    this.dogService.getBreeds().subscribe((breeds) => {
      this.breeds = breeds;
      this.filteredBreeds = breeds;

      console.log('Loaded breeds:', this.breeds);
    });
  }

  updateFilteredBreeds(): void {
    if (this.searchQuery.trim()) {
      this.filteredBreeds = this.breeds.filter((breed) =>
        breed.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    } else {
      this.filteredBreeds = this.breeds;
    }
  }

  onBreedClick(breed: any): void {
    this.router.navigate(['breeds-list', breed.name]);
  }
}
