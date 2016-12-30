import { ModuleWithProviders } from '@angular/core'; 
import { RouterModule, Routes } from '@angular/router';

import { EntryComponent } from './entry.component';
import { EntrylistComponent } from './entrylist.component';
import { EntrydetailComponent } from './entrydetail.component';
import { EntryupdateComponent } from './entryupdate.component';
import { EntrynewMenuComponent } from './entrynew-menu.component';
import { EntrylistMenuComponent } from './entrylist-menu.component';
import { EntrydetailMenuComponent } from './entrydetail-menu.component';
import { EntryupdateMenuComponent } from './entryupdate-menu.component';

export const ENTRIES_ROUTES: Routes = [
    {path: 'entries', component: EntryComponent, children: [
        {path: '', component: EntrylistComponent, data: {menu: EntrylistMenuComponent}},
        {path: 'new', component: EntryupdateComponent, data: {menu: EntrynewMenuComponent}},
        {path: 'view/:slug', component: EntrydetailComponent, data: {menu: EntrydetailMenuComponent}},    
        {path: 'update/:slug', component: EntryupdateComponent, data: {menu: EntryupdateMenuComponent}}
    ]}
];