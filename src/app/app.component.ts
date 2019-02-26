import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { environment } from 'src/environments/environment';
import { Firebase } from '@ionic-native/firebase/ngx';
import { FirebaseAuthentication } from '@ionic-native/firebase-authentication/ngx';
import { FirebaseConfig } from '@ionic-native/firebase-config/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private firebase: Firebase,
    private firebaseAuthentication: FirebaseAuthentication,
    private firebaseConfig: FirebaseConfig
  ) {
    this.initializeApp();
    
    this.firebaseAuthentication.createUserWithEmailAndPassword('test@gmail.com', '123')
    .then((res: any) => console.log(res))
    .catch((error: any) => console.error(error));

    this.firebase.getToken()
  .then(token => console.log(`The token is ${token}`)) // save the token server-side and use it to push notifications to this device
  .catch(error => console.error('Error getting token', error));

this.firebase.onNotificationOpen()
   .subscribe(data => console.log(`User opened a notification ${data}`));

this.firebase.onTokenRefresh()
  .subscribe((token: string) => console.log(`Got a new token ${token}`));
  }


  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
    

  }
  
}
