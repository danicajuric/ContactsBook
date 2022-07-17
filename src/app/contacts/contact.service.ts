import { UserContact } from './contact.model';

export class ContactService {
    private contacts: UserContact[] = [ //made private so it cant be directly addressed from the outside
        new UserContact('Danicaaaaaaaaaaaaa', 'Juric', '+387000000', 'Some Address 88', "https://images.pexels.com/photos/12025241/pexels-photo-12025241.jpeg"),
        new UserContact('Anđela', 'Juric', '+38ddddddddd7111111', 'Some Address 88', "https://images.pexels.com/photos/12498564/pexels-photo-12498564.jpeg")
      ];

    getContacts(){ //get function which allows access from the outside
        return this.contacts.slice(); //slice returns an exact copy of the array in the service
    }
}