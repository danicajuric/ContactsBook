import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { UserContact } from '../contact.model';
import { ContactService } from '../contact.service';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.scss']
})
export class ContactDetailComponent implements OnInit {
  contactView!: UserContact;
  id: number | undefined;
 
  constructor(private contactService: ContactService, private route: ActivatedRoute, private store: Store<AppState>) { }

  ngOnInit(): void {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          let contactsCopy: UserContact[] = [];
          this.store.select('contacts').subscribe(contacts => contactsCopy = contacts);
          this.contactView = 
            contactsCopy.find((contact) => contact.id === this.id)
            || new UserContact(0, 'Contact', 'not found', 'x', 'x', ''); //if there arent contacts, contact not found
        }
      );
  }
}
