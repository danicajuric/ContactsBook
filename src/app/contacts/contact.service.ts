import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UserContact } from './contact.model';
import { Store } from '@ngrx/Store';

@Injectable()

export class ContactService {
    //contactSelected = new Subject<UserContact>(); dont need this

    private contacts: UserContact[] = [];

    contactsSubscription: BehaviorSubject<UserContact[]> = new BehaviorSubject(this.contacts);

    constructor() {
        let _contacts = JSON.parse(localStorage.getItem('contacts') || 'false');

        if(_contacts){
            this.contacts=_contacts;
            this.contactsSubscription.next(this.contacts); //allows access from the outside
        }
    }

    get contacts$ () {
        return this.contactsSubscription.asObservable();
    }

    
    getContact(id: number) {
        return this.contacts.find((contact: UserContact) => contact.id===id);
    }
    addContact(contact: UserContact) { //mutation
        this.contacts.push(contact);
        localStorage.setItem('contacts', JSON.stringify(this.contacts));
        this.contactsSubscription.next(this.contacts); //triggers emit when new contact is pushed onto list
    }
}