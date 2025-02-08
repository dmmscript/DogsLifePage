import { Component, OnInit } from '@angular/core';
import { ServicesDogService } from 'src/app/services-dog.service';

@Component({
  selector: 'app-dogs-list',
  templateUrl: './dogs-list.component.html',
  styleUrls: ['./dogs-list.component.scss']
})
export class DogsListComponent implements OnInit{
  dogs: any[] = [];
  
  constructor(private dogService: ServicesDogService) { }
  
  ngOnInit(): void {
    this.dogService.getDogs().subscribe(data => {
      this.dogs = data;
    });
  }
}