import { Component, OnInit } from '@angular/core';
import { UserContact } from './contact.model';
import { ContactService } from './contact.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
  providers: [ ContactService ]
})
export class ContactsComponent implements OnInit {
  selectedContact: UserContact = new UserContact('', '', '', '', '');

  constructor(private contactService: ContactService) { }

  ngOnInit(): void {
    this.contactService.contactSelected
    .subscribe(
      (contactX: UserContact)=>{
        this.selectedContact = contactX;
      }
    );
  }

}
