import { Component } from '@angular/core'
import { ViewController, NavController } from 'ionic-angular';

import { AuthService, User, OtherUser } from '../../common/auth.service';
import { UserService } from '../../common/user.service';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database'

@Component({
    selector: 'page-users',
    templateUrl: 'users.html'
})
export class UsersPage {
  me: any;
  users: AngularFireList<any>;

  constructor(private authService: AuthService, private userService: UserService,
    private viewCtrl: ViewController) {
    this.me = authService.user;
    this.users = userService.getUsers();
  }

  chooseUser(user: any) {
    this.viewCtrl.dismiss(new OtherUser(user.$value, user.$key));
  }
}
