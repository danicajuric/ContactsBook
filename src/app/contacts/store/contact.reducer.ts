import { Action } from "@ngrx/store";
import { UserContact } from "../contact.model";
import * as ContactsActions from './contact.actions';

/*
export interface State{
    contacts: UserContact[];
}
*/
const initialState: UserContact[] = JSON.parse(localStorage.getItem('contacts') || '[]')

export function contactReducer(state: UserContact[] = [...initialState], action: Action){
    const contactAction = action as ContactsActions.ContactsActions;
    switch (contactAction.type){
        case ContactsActions.SET_CONTACTS:
            return [...contactAction.payload];
        case ContactsActions.ADD_CONTACT:
            console.log(state, contactAction.payload)
            localStorage.setItem('contacts', JSON.stringify([...state, contactAction.payload]));
            return [...state, contactAction.payload];
        default:
            return state;
    }
}