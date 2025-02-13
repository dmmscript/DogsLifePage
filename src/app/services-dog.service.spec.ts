import { TestBed } from '@angular/core/testing';
import { ServicesDogService } from './services-dog.service';

describe('ServicesDogService', () => {
  let service: ServicesDogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicesDogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
