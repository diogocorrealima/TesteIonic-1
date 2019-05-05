import { TestBed } from '@angular/core/testing';
import { AccountService } from './account.service';
import { FingerprintAIO } from '@ionic-native/fingerprint-aio/ngx';
import { RouterTestingModule } from '@angular/router/testing';

describe('AccountService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers:[FingerprintAIO],
    imports:[RouterTestingModule]
  }));

  it('should be created', () => {
    const service: AccountService = TestBed.get(AccountService);
    expect(service).toBeTruthy();
  });
});
