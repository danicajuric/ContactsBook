import { Component, OnInit } from '@angular/core';

import { Contact } from '../contact.model';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {
  contacts: Contact[] = [
    new Contact('Danicaaaaaaaaaaaaa', 'Juric', '+387000000', 'Some Address 88', "https://images.pexels.com/photos/12025241/pexels-photo-12025241.jpeg"),
    new Contact('Anđela', 'Juric', '+38ddddddddd7111111', 'Some Address 88', "https://images.pexels.com/photos/12498564/pexels-photo-12498564.jpeg")
  
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
