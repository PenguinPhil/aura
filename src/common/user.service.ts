import { Injectable } from '@angular/core';
import { LoadingController, Platform, ToastController } from 'ionic-angular'
import 'rxjs/add/operator/map';

import { GooglePlus } from '@ionic-native/google-plus'
import { NativeStorage } from '@ionic-native/native-storage'
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database'
import { AngularFireAuth } from 'angularfire2/auth'
import { Observable } from 'rxjs/Observable'
import * as firebase from 'firebase/app'
import { Events } from 'ionic-angular'

@Injectable()
export class UserService {

  public user: any
  public firebaseUser: any

  public authState: any
  private authSub: any
  private type: string

  constructor(private googlePlus: GooglePlus,
    private toastCtrl: ToastController, public loadingCtrl: LoadingController, 
    private platform: Platform, private nativeStorage: NativeStorage,
    public af: AngularFireDatabase, private events: Events) {
      console.log('Hello AuthProvider Provider');
  }

  getUsers () {
    return this.af.list(`/users`).valueChanges()
  }

  getUser (uid) {
    return firebase.database().ref(`/users/${uid}`).once('value')
  }

  // ALERT CONTROLLERS
  toast (msg) {    
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 4000,
      position: 'top',
    })

    toast.present()
  }

  private loader = this.loadingCtrl.create({
      content: "Attempting to log you in..."
  })

}