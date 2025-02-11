import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServicesDogService } from 'src/app/services-dog.service';

@Component({
  selector: 'app-dogs-by-breed',
  templateUrl: './dogs-by-breed.component.html',
  styleUrls: ['./dogs-by-breed.component.scss']
})
export class DogsByBreedComponent implements OnInit {
  breed: string = '';
  dogs: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private dogService: ServicesDogService
  ) {}

  ngOnInit(): void {
    this.breed = this.route.snapshot.paramMap.get('breed') || '';
    this.loadDogsByBreed();
  }

  loadDogsByBreed(): void {
    // Aqui, você pode usar um método do serviço que já filtre por raça,
    // ou filtrar a lista completa dos cachorros conforme a sua lógica.
    this.dogService.getDogs().subscribe(data => {
      this.dogs = data.filter(dog => dog.breeds[0]?.name === this.breed);
    });
  }
}
