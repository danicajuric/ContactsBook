import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserContact } from '../contact.model';
import { ContactService } from '../contact.service';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.component.html',
  styleUrls: ['./new-contact.component.scss']
})
export class NewContactComponent implements OnInit {

  @ViewChild('f')
  cbForm!: NgForm;

  contacts!: UserContact[];

  constructor(private contactService: ContactService) { }

  ngOnInit(): void {
    this.contactService.contacts$
    .pipe(untilDestroyed(this)) //unsubscribes automatically when component is destroyed
    .subscribe((contacts: UserContact[]) => { //listens for emmits/changes from Service observable thru subscribe
      this.contacts=contacts;
    })
  }

  onAddItem(form: NgForm){ //adds new item to array and triggers subject which emmits
    const value=form.value;
    const newContactID = (this.contacts[this.contacts.length-1]) ? this.contacts[this.contacts.length-1].id+1 : 0;
    const newContact=new UserContact(newContactID, value.fname, value.lname, value.phone, value.address, value.pfp);
    this.contactService.addContact(newContact);
    form.reset();
  }
  onClear(){
    this.cbForm.reset();
  }
}
