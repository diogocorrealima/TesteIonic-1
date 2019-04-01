import { Injectable } from '@angular/core';
import * as firebase from "firebase";
import { Router } from '@angular/router';
import { FingerprintAIO } from '@ionic-native/fingerprint-aio/ngx';
import { Observable } from 'rx-lite-aggregates';
@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private faio: FingerprintAIO, private router: Router) { }

  createUser(user: User): Promise<firebase.auth.UserCredential> {
    return firebase.auth().createUserWithEmailAndPassword(user.email, user.password);
  }

  login(user: User): Promise<firebase.auth.UserCredential> {
    return firebase.auth().signInWithEmailAndPassword(user.email, user.password);

  }
  loginWithFingerprint(user: User) {
    if (user.email) {
      console.log("Please enter Username!");
      return;
    }
    else {
      //Check if Fingerprint or Face  is available

      this.faio.isAvailable()
        .then(result => {
          if (result === "finger" || result === "face") {
            //Fingerprint or Face Auth is available
            this.faio.show({
              clientId: 'NihinDemoBioAuthApp',
              clientSecret: 'nihinBioAuthDemo', //Only necessary for Android
              disableBackup: true, //Only for Android(optional)
              localizedFallbackTitle: 'Use Pin', //Only for iOS
              localizedReason: 'Please Authenticate' //Only for iOS
            })
              .then((result: any) => {
                if (result == "Success") {
                  this.router.navigate(['/tabs/tab1']);

                }
                else {
                  //Fingerprint/Face was not successfully verified
                  console.log(result);
                  this.router.navigate(['/']);

                }
              })
              .catch((error: any) => {
                //Fingerprint/Face was not successfully verified
                console.log(error);
              });
          }
          else {
            //Fingerprint or Face Auth is not available
            console.log("Fingerprint/Face Auth is not available   on this device!");
          }
        })
    }
    // this.androidFingerprintAuth.isAvailable()
    //   .then((result) => {
    //     if (result.isAvailable) {
    //       // it is available

    //       this.androidFingerprintAuth.encrypt({ clientId: 'testeionic', username: 'testeionic', password: 'testeionic' })
    //         .then(result => {
    //           if (result.withFingerprint) {
    //             console.log('Successfully encrypted credentials.');
    //             console.log('Encrypted credentials: ' + result.token);
    //             this.router.navigate(['/tabs/tab1']);
    //           } else if (result.withBackup) {
    //             console.log('Successfully authenticated with backup password!');
    //           } else console.log('Didn\'t authenticate!');
    //         })
    //         .catch(error => {
    //           if (error === this.androidFingerprintAuth.ERRORS.FINGERPRINT_CANCELLED) {
    //             console.log('Fingerprint authentication cancelled');
    //           } else console.error(error)
    //         });

    //     } else {
    //       // fingerprint auth isn't available
    //     }
    //   })
    //   .catch(error => console.error(error));
  }
}
