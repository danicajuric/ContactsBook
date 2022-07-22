import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserContact } from '../contact.model';
import { ContactService } from '../contact.service';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { AddContact, SetContacts } from '../store/contact.actions';

@UntilDestroy()
@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.component.html',
  styleUrls: ['./new-contact.component.scss']
})
export class NewContactComponent implements OnInit {

  @ViewChild('f')
  cbForm!: NgForm;

  contacts: Observable<UserContact[]>;

  constructor(private contactService: ContactService, private store: Store<AppState>) { 
    this.contacts = this.store.select('contacts');
    this.store.subscribe((store: any) => {});
    console.log(JSON.parse(localStorage.getItem('contacts') || 'false'))
    console.log(this.store.select('contacts'))
  }

  ngOnInit(): void {
    /*
    this.contactService.contacts$
    .pipe(untilDestroyed(this)) //unsubscribes automatically when component is destroyed
    .subscribe((contacts: UserContact[]) => { //listens for emmits/changes from Service observable thru subscribe
      this.contacts=contacts;
    })
    */
  }

  onAddItem(form: NgForm){ //adds new item to array and triggers subject which emmits
    const value=form.value;
    let contactsCopy: UserContact[] = [];
    this.store.select('contacts').subscribe(contacts => contactsCopy = contacts);
    const newContactID = (contactsCopy[contactsCopy.length-1]) ? contactsCopy[contactsCopy.length-1].id+1 : 0;;
    const newContact=new UserContact(newContactID, value.fname, value.lname, value.phone, value.address, value.pfp);
    //this.contactService.addContact(newContact);
    this.store.dispatch(new AddContact(newContact) )
    form.reset();
  }
  onClear(){
    this.cbForm.reset();
  }
}
