import { Component, OnInit } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

import { UserContact } from '../contact.model';
import { ContactService } from '../contact.service';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';

@UntilDestroy()
@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {
  contacts: Observable<UserContact[]>;

  constructor(private contactService: ContactService, private store: Store<AppState>) {
    this.contacts = this.store.select('contacts')
    this.store.subscribe((store: any) => {});
    console.log(JSON.parse(localStorage.getItem('contacts') || 'false'))
    console.log(store)
  }

  ngOnInit(): void {
    //this.contacts = this.contactService.getContacts(); //takes contacts from Service
    /*
    this.contactService.contacts$
    .pipe(untilDestroyed(this)) //unsubscribes automatically when component is destroyed
    .subscribe((contacts: UserContact[]) => { //listens for emmits/changes from Service observable thru subscribe
      this.contacts=contacts;
    })
    */
  }

  public getInitialStateContacts(): Observable<UserContact[]> {
    return this.store.select('contacts')
  }

}
