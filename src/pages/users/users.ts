import { ViewController, NavController } from 'ionic-angular';

import { User, OtherUser, AuthService } from '../../common/auth.service';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database'

export class UsersPage {

    me: User;
    users: AngularFireList<any>;

    constructor(private userService, private authService: AuthService,
        private viewCtrl: ViewController) {
        this.me = authService.user;
        this.users = userService.asList();
    }

    chooseUser(user: any) {
        console.log('Choose user', user);
        this.viewCtrl.dismiss(new OtherUser(user.$value, user.$key));
    }
}
