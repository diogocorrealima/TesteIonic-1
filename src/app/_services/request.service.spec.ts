import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { RequestService } from './request.service';
import { RouterTestingModule } from '@angular/router/testing';


describe('RequestService', () => {

  beforeEach(() => TestBed.configureTestingModule({
    imports:[RouterTestingModule, HttpClientModule],
    providers: []
    }));

  it('should be created', () => {
    const service: RequestService = TestBed.get(RequestService);
    expect(service).toBeTruthy();
  });
});
