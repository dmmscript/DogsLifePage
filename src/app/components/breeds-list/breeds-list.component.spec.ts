import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BreedsListComponent } from './breeds-list.component';

describe('BreedsListComponent', () => {
  let component: BreedsListComponent;
  let fixture: ComponentFixture<BreedsListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BreedsListComponent],
    });
    fixture = TestBed.createComponent(BreedsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
