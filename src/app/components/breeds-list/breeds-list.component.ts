import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ServicesDogService } from 'src/app/services-dog.service';

@Component({
  selector: 'app-breeds-list',
  templateUrl: './breeds-list.component.html',
  styleUrls: ['./breeds-list.component.scss']
})
export class BreedsListComponent implements OnInit {
  breeds: string[] = [];

  @Output() breedSelected = new EventEmitter<string>();  // Evento que será emitido
searchQuery: any;
searchDogs: any;


  constructor(private dogService: ServicesDogService) {}

  ngOnInit(): void {
    this.loadBreeds();
  }

  loadBreeds(): void {
    this.dogService.getBreeds().subscribe(breeds => {
      this.breeds = breeds.map(breed => breed.name);
    });
  }
  onBreedClick(breed: string): void {
    this.breedSelected.emit(breed);
  }
}