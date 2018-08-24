import { ModalController, NavController} from 'ionic-angular';
import {ElementRef, OnInit} from '@angular/core';

import {UsersPage} from '../users/users';

import {UserService} from '../../common/user.service';
import { User, OtherUser, AuthService } from '../../common/auth.service';
import {WebRTCService} from '../../common/webrtc.service';

export class ChatPage implements OnInit {
    myVideo: HTMLMediaElement;
    otherVideo: HTMLMediaElement;
    
    me: User = {};
    otherUser: OtherUser = new OtherUser();
    
    constructor(private userService: UserService, private authService: AuthService, private webRTCService: WebRTCService,
        private nav: NavController, private elRef: ElementRef, private modalCtrl: ModalController) {
            
        this.me = authService.user;
    }
    
    ngOnInit(): any {
        // Find video elements
        this.myVideo = this.elRef.nativeElement.querySelector('#my-video');
        this.otherVideo = this.elRef.nativeElement.querySelector('#other-video');
        //
        this.webRTCService.init(this.myVideo, this.otherVideo, () => {
            console.log('I\'m calling');
        });
    }
    
    getOtherUserName(): string {
        if (this.otherUser.notEmpty()) {
            return this.otherUser.name;
        } else {
            return 'Choose the User to call...';
        }
    }
    
    chooseOtherUser() {
        console.log('Choose other user');
        let modal = this.modalCtrl.create(UsersPage);
        modal.onDidDismiss((value: any) => {
            console.log('Selected user', value);
            this.otherUser = value;
        });

        modal.present();
    }
    
    startCall() {
        console.log('Call to ', this.otherUser.id);
        this.webRTCService.call(this.otherUser.id);
    }
    
    stopCall() {
        console.log('Stop calling to other user', this.otherUser.name);
        this.webRTCService.endCall();
    }
}
