import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserContact } from '../contact.model';

@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.component.html',
  styleUrls: ['./new-contact.component.scss']
})
export class NewContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onAddItem(form: NgForm){
    const value=form.value;
    const newContact=new UserContact(value.fname, value.lname, value.phone, value.address, value.pfp)
  }
}
