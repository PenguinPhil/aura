import {Inject, Injectable} from 'angular2/core';

export interface User {
    displayName?: string;
    email?: string;
    id?: string;
    profileImageUrl?: string;
}

export class OtherUser {
    constructor(public name: string = '', public id: string = '') {}

    notEmpty(): boolean {
        return this.name.length > 0 && this.id.length > 0;
    }
}

