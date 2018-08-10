import { Platform} from 'ionic-angular';

import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import {Observable} from 'rxjs/Observable';

import {WebRTCService} from '../../common/webrtc.service';

export class MediaPage {

    users: AngularFireList<any[]>;

    constructor(private platform: Platform, private af: AngularFireDatabase, private rtc:WebRTCService){
        this.users = this.af.list('/users');
    }

    join(task : HTMLInputElement): void {

        console.log(`Adding user to users in chat room: ${task.value} `);
        // this.users.push(task.value);
    }

    leave(id){
        this.users.remove(id);
    }



}
