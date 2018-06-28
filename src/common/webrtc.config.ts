import {Injectable} from 'angular2/core';

@Injectable()
export class WebRTCConfig {

    peerServerPort: number = 9000;

    key:string = 'whbzng0p4kq8semi';

    stun: string = 'stun.l.google.com:19302';
    // turn: string = 'homeo@turn.bistri.com:80';
    // turnCredentials: string = 'homeo';

    stunServer:RTCIceServer = {
        urls: 'stun:' + this.stun
    };

    // turnServer: RTCIceServer = {
    //     urls: 'turn:' + this.turn,
    //     credential: this.turnCredentials
    // };

    getPeerJSOption(): PeerJs.PeerJSOption {
        return {
            host: 'https://aura-space.herokuapp.com/',
            key: 'peerjs',
            debug: 3,
            secure: true,
            port: 443,

            config: {
                iceServers: [
                    this.stunServer/*,
                    this.turnServer*/
                ]
            }
        };
    }

    /**********************/

    audio: boolean = true;
    video: boolean = true;

    getMediaStreamConstraints(): MediaStreamConstraints {
        return <MediaStreamConstraints> {
            audio: this.audio,
            video: this.video
        }
    }
}
