import { Component } from '@angular/core'

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database'
import { AngularFireAuth } from 'angularfire2/auth'
import { Observable } from 'rxjs/Observable'
import * as firebase from 'firebase/app'

import { NavController, NavParams, AlertController, MenuController, LoadingController, Platform, ToastController, Tabs } from 'ionic-angular'
import { TabsPage } from '../tabs/tabs'
import { Events } from 'ionic-angular'

import { AuthService } from '../../common/auth.service'

import 'rxjs/Rx'

/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  private currentUser
  private gUser: any = {}
  private authState
  private user: any = { uid: 'something' }
  private email: string = ''
  private password: string = ''
  private password2: string = ''

  public cellNo: string
  public userData
  private pass: string
  private users
  private authSub: any;

  constructor(public navCtrl: NavController, private events: Events, private authService: AuthService) { //
      
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage')
  }

  gg () {
    this.authService.googleLogin()
  }

  auto () {
      this.proceedToRoot()
  }

  signin () {
    this.authService.emailLogin(this.email, this.password)
  }

  subscribeToAuthState () {
    this.events.subscribe('globals:update', (user, type) => {
      this.user = user
      this.gUser = user
      this.proceedToRoot()
    })
  }

  proceedToRoot () {
    this.navCtrl.setRoot(TabsPage, {
        user: this.user,
        guser: this.gUser
    })
  }
}
