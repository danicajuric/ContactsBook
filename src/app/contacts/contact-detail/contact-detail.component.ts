import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { UserContact } from '../contact.model';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.scss']
})
export class ContactDetailComponent implements OnInit {
  contactView!: UserContact;
  id: number | undefined;
 
  constructor(private contactService: ContactService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.contactView = 
            this.contactService.getContact(this.id) 
            || new UserContact(0, 'Contact', 'not found', 'x', 'x', ''); //if there arent contacts, contact not found
        }
      );
  }
}
