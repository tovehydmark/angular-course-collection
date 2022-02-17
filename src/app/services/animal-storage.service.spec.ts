import { TestBed } from '@angular/core/testing';

import { AnimalStorageService } from './animal-storage.service';

describe('AnimalStorageService', () => {
  let service: AnimalStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnimalStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
