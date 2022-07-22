import { Action } from '@ngrx/store';
import { UserContact } from '../contact.model';

export const SET_CONTACTS = '[Contacts] Set Contacts';
export const ADD_CONTACT = '[Contacts] Add Contact';

export class SetContacts implements Action {
    readonly type = SET_CONTACTS;

    constructor(public payload: UserContact[]){

    }
}

export class AddContact implements Action {
    readonly type = ADD_CONTACT;

    constructor(public payload: UserContact){

    }
}

export type ContactsActions = SetContacts | AddContact;