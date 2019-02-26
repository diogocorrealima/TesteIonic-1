import { Component, OnInit } from '@angular/core';
import { AndroidFingerprintAuth } from '@ionic-native/android-fingerprint-auth/ngx';
import { routerNgProbeToken } from '@angular/router/src/router_module';
import { Router } from '@angular/router';
import * as firebase from 'firebase';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {

  constructor(private androidFingerprintAuth: AndroidFingerprintAuth, private router: Router) { }

  ngOnInit() {
    this.androidFingerprintAuth.isAvailable()
    .then((result)=> {
      if(result.isAvailable){
        // it is available
  
        this.androidFingerprintAuth.encrypt({ clientId: 'ibmtest', username: 'ibmtest', password: 'ibmtest' })
          .then(result => {
             if (result.withFingerprint) {
                 console.log('Successfully encrypted credentials.');
                 console.log('Encrypted credentials: ' + result.token);
                 this.router.navigate(['/tabs/tab1']);
             } else if (result.withBackup) {
               console.log('Successfully authenticated with backup password!');
             } else console.log('Didn\'t authenticate!');
          })
          .catch(error => {
             if (error === this.androidFingerprintAuth.ERRORS.FINGERPRINT_CANCELLED) {
               console.log('Fingerprint authentication cancelled');
             } else console.error(error)
          });
  
      } else {
        // fingerprint auth isn't available
      }
    })
    .catch(error => console.error(error));

  }
  
  
}
