import { ModuleWithProviders }  from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EntrylistComponent } from './entries/entrylist.component';
import { EntrylistMenuComponent } from './entries/entrylist-menu.component';
import { EntrynewMenuComponent } from './entries/entrynew-menu.component';
import { TagsComponent } from './tags/'
import { PageNotFoundComponent }   from "./page-not-found.component";

export const APP_ROUTES: Routes = [
  {path: '', redirectTo: '/entries', pathMatch: 'full'},
  {path: 'tag/:slug', component: EntrylistComponent, data: {menu: EntrylistMenuComponent}},
  {path: '**', component: PageNotFoundComponent, pathMatch: 'full', data: {menu: EntrynewMenuComponent}} //fallback route using the ** wildcard
];
