import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServicesDogService } from 'src/app/services-dog.service';

@Component({
  selector: 'app-dog-by-breed',
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
    this.dogService.getDogs().subscribe(data => {
      // Filtra os cães com base na raça selecionada
      this.dogs = data.filter(dog => dog.breeds[0]?.name === this.breed);
    });
  }
}
