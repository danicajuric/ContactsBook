import { UserContact } from "./contacts/contact.model"; 

export interface AppState {
  readonly contacts: UserContact[];
}