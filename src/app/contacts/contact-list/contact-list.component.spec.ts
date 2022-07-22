import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { ContactListComponent } from './contact-list.component';

describe('ContactListComponent', () => {
  let component: ContactListComponent;
  let fixture: ComponentFixture<ContactListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return the contacts from local storage', () => {
    const contactsResponse = JSON.parse(localStorage.getItem('contacts') || '[]');
    let response;
    spyOn(component, 'getInitialStateContacts').and.returnValue(of(contactsResponse));

    component.getInitialStateContacts().subscribe(res => {
      response = res;
    });

    expect(response).toEqual(contactsResponse);
  });
});
