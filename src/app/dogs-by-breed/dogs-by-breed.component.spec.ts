import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DogsByBreedComponent } from './dogs-by-breed.component';

describe('DogsByBreedComponent', () => {
  let component: DogsByBreedComponent;
  let fixture: ComponentFixture<DogsByBreedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DogsByBreedComponent]
    });
    fixture = TestBed.createComponent(DogsByBreedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
