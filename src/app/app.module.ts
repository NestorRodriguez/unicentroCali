import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ReactiveFormsModule } from '@angular/forms';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial/ngx';


import { Camera } from '@ionic-native/camera/ngx';
import { Modal1PageModule } from './pages/modal1/modal1.module';
import { Modal2PageModule } from './pages/modal2/modal2.module';
import { Modal3PageModule } from './pages/modal3/modal3.module';
import { Modal4PageModule } from './pages/modal4/modal4.module';

@NgModule({
  declarations: [AppComponent,],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, ReactiveFormsModule, 
    Modal1PageModule, Modal2PageModule, Modal3PageModule, Modal4PageModule ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    BluetoothSerial,
    Camera
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
