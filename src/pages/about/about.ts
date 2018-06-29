import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Page, Modal, NavController} from 'ionic-angular';
import {ElementRef, OnInit} from '@angular/core';
import {User, OtherUser} from '../../common/auth.service';
import {WebRTCService} from '../../common/webrtc.service';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage implements OnInit {
    myVideo: HTMLMediaElement;
    otherVideo: HTMLMediaElement;
    
    me: User = {};
    otherUser: OtherUser = new OtherUser();
    
    constructor(private webRTCService: WebRTCService,
        private nav: NavController, private elRef: ElementRef) {
            
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
        let modal = Modal.create(UsersPage);
        modal.onDismiss((value: any) => {
            console.log('Selected user', value);
            this.otherUser = value;
        });
        this.nav.present(modal);
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
