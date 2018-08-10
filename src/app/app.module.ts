import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthService } from '../common/auth.service'

import { NativeStorage } from '@ionic-native/native-storage'
import { GooglePlus } from '@ionic-native/google-plus'

import { AngularFireModule } from 'angularfire2'
import { AngularFireDatabaseModule } from 'angularfire2/database'
import { AngularFireAuthModule } from 'angularfire2/auth'

import { WebRTCConfig } from '../common/webrtc.config'
import { WebRTCService } from '../common/webrtc.service'

export const environment = {
  production: false, 
  firebase: {
    apiKey: "AIzaSyAbfJ1RLM9ludmMqO3_L-nbd96vAD8fJC4",
    authDomain: "aura-55634.firebaseapp.com",
    databaseURL: "https://aura-55634.firebaseio.com",
    projectId: "aura-55634",
    storageBucket: "aura-55634.appspot.com",
    messagingSenderId: "788665021839"
  }
}

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AuthService,
    NativeStorage,
    GooglePlus,
    WebRTCConfig,
    WebRTCService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
