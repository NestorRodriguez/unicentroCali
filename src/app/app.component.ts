import { Component } from '@angular/core';

import { Platform, NavController } from '@ionic/angular';
import {Subscription} from 'rxjs';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(
    private platform : Platform,
    private navCtrl : NavController,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
//    private app : IonApp,
  ) {
    this.initializeApp();
    
  }

  initializeApp() {
    this.platform.ready().then((readySource) => {
      console.log('La plataforma es ' , readySource)
      this.statusBar.styleDefault();
      this.splashScreen.hide(); 
      document.addEventListener("backbutton", () => { 
         //.setDirection('') ;
        console.log(this.navCtrl.pop);
        //let nav = this.app.getActiveNavs()[0];
        //let activeView = nav.getActive();
        //if(activeView.name === "LoginPage") {
          //if (nav.canGoBack()){ nav.pop(); }
        //}
      });
    });   
  }

  ionViewDidLeave() {
    // if (this.customBackActionSubscription) {
    //     this.customBackActionSubscription.unsubscribe();
    //}
}
}
