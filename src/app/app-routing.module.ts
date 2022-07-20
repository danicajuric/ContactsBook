import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactDefaultComponent } from './contacts/contact-default/contact-default.component';
import { ContactDetailComponent } from './contacts/contact-detail/contact-detail.component';
import { ContactsComponent } from './contacts/contacts.component';
import { NewContactComponent } from './contacts/new-contact/new-contact.component';

const routes: Routes = [
  { path: '', redirectTo: '/contacts', pathMatch: 'full' },
  { path: 'contacts', component: ContactsComponent, children: [
    { path: '', component: ContactDefaultComponent },
    { path: 'new', component: NewContactComponent },
    { path: ':id', component: ContactDetailComponent }
  ] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
