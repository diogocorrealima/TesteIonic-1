import { HttpClientModule } from '@angular/common/http';
import { RequestService } from './request.service';
import { TestBed } from '@angular/core/testing';

import { MoviedbService } from './moviedb.service';
import { AngularFireModule } from 'angularfire2';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { IonicModule } from '@ionic/angular';

describe('MoviedbService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule, , AngularFireModule, RouterTestingModule, IonicModule  ],
    providers: [RequestService]
  }));

  it('should be created', () => {
    const service: MoviedbService = TestBed.get(MoviedbService);
    expect(service).toBeTruthy();
  });
});
