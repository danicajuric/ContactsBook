import { Component, Input, OnInit } from '@angular/core';
import { UserContact } from '../../contact.model';

@Component({
  selector: 'app-contact-item',
  templateUrl: './contact-item.component.html',
  styleUrls: ['./contact-item.component.scss']
})
export class ContactItemComponent implements OnInit {
  @Input() contactX: UserContact = new UserContact('', '', '', '', '')

  constructor() { }

  ngOnInit(): void {
  }
}
