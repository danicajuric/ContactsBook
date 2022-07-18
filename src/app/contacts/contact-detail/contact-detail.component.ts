import { Component, Input, OnInit } from '@angular/core';
import { UserContact } from '../contact.model';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.scss']
})
export class ContactDetailComponent implements OnInit {
  @Input() contactView: UserContact = new UserContact('', '', '', '', '');
  constructor() { }

  ngOnInit(): void {
  }

}
