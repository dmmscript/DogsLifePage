import { Component, OnInit } from '@angular/core';
import { ServicesDogService } from 'src/app/services-dog.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-breeds-list',
  templateUrl: './breeds-list.component.html',
  styleUrls: ['./breeds-list.component.scss']
})
export class BreedsListComponent implements OnInit {
  breeds: any[] = [];
  filteredBreeds: any[] = [];
  searchQuery: string = '';

  constructor(private dogService: ServicesDogService, private router: Router) {}

  ngOnInit(): void {
    this.loadBreeds();
  }

  loadBreeds(): void {
    this.dogService.getBreeds().subscribe(breeds => {
      this.breeds = breeds;
      this.filteredBreeds = breeds; // Inicialmente, todas as raças são exibidas
    });
  }

  // Atualiza a lista filtrada sempre que o usuário digita algo
  updateFilteredBreeds(): void {
    if (this.searchQuery.trim()) {
      this.filteredBreeds = this.breeds.filter(breed =>
        breed.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    } else {
      this.filteredBreeds = this.breeds;
    }
  }

  onBreedClick(breed: any): void {
    // Navega para a rota passando o nome da raça.
    // Caso prefira usar o id, ajuste a rota e a filtragem no componente DogsByBreed.
    this.router.navigate(['/dogs-by-breed', breed.name]);
  }
}
