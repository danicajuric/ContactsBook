import { Component, OnInit } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

import { UserContact } from '../contact.model';
import { ContactService } from '../contact.service';

@UntilDestroy()
@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {
  contacts: UserContact[]=[];

  constructor(private contactService: ContactService) {

  }

  ngOnInit(): void {
    //this.contacts = this.contactService.getContacts(); //takes contacts from Service
    this.contactService.contacts$
    .pipe(untilDestroyed(this)) //unsubscribes automatically when component is destroyed
    .subscribe((contacts: UserContact[]) => { //listens for emmits/changes from Service observable thru subscribe
      this.contacts=contacts;
    })
  }

}
