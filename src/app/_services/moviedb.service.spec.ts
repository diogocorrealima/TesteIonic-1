import { HttpClientModule } from '@angular/common/http';
import { RequestService } from './request.service';
import { TestBed } from '@angular/core/testing';

import { MoviedbService } from './moviedb.service';

describe('MoviedbService', () => {
  beforeEach(() => TestBed.configureTestingModule({ imports: [HttpClientModule], providers: [RequestService] }));

  it('should be created', () => {
    const service: MoviedbService = TestBed.get(MoviedbService);
    expect(service).toBeTruthy();
  });
});
