import { BrowserModule }  from '@angular/platform-browser';
import { NgModule }       from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule }   from '@angular/router';
import { HttpModule }     from '@angular/http';
import { MaterialModule } from '@angular/material';

import { EntriesModule }  from './components/entries/entries.module';
import { EntrydetailMenuComponent } from './components/entries/entrydetail-menu.component';
import { EntrylistMenuComponent } from './components/entries/entrylist-menu.component';
import { EntryupdateMenuComponent } from './components/entries/entryupdate-menu.component';
import { EntrynewMenuComponent } from './components/entries/entrynew-menu.component';
import { UnauthMenuComponent } from './components/unauth-menu.component';

import { AppComponent,
         SidenavComponent } from './components/';

import { TagsComponent } from './components/tags/';
import { SigninComponent } from './components/signin/';

import { APP_ROUTES }     from './components/';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    TagsComponent,
    SigninComponent,
    EntrydetailMenuComponent,
    EntrylistMenuComponent,
    EntryupdateMenuComponent,
    EntrynewMenuComponent,
    UnauthMenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    MaterialModule.forRoot(),
    RouterModule.forRoot(APP_ROUTES), 
    EntriesModule
  ],
  providers: [],
  entryComponents: [
    EntrydetailMenuComponent,
    EntrylistMenuComponent,
    EntryupdateMenuComponent,
    EntrynewMenuComponent,
    UnauthMenuComponent
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
