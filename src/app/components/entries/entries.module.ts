import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule }   from '@angular/router';
import { HttpModule }     from '@angular/http';
import { MaterialModule } from '@angular/material';
import { TagInputModule } from 'ng2-tag-input';

import { EntryComponent } from './entry.component';
import { EntrylistComponent } from './entrylist.component';
import { EntrylistItemComponent } from './entrylist-item.component';
import { EntrydetailComponent } from './entrydetail.component';
import { EntryupdateComponent } from './entryupdate.component';

import { EntryupdateDialogComponent } from './entryupdate-dialog.component';

import { EntriesService }           from './entries.service';
import { ENTRIES_ROUTES}      from './entries.route';
import { PageNotFoundComponent } from '../page-not-found.component';

import { OthersService } from '../others.service';
import { TagsService } from '../tags/tags.service';

@NgModule({
  declarations: [
    EntryComponent,
    EntrylistComponent,
    EntrylistItemComponent,
    EntrydetailComponent,
    EntryupdateComponent,
    PageNotFoundComponent,
    EntryupdateDialogComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    MaterialModule.forRoot(),
    TagInputModule,
    RouterModule.forChild(ENTRIES_ROUTES)
  ],
  providers: [
    EntriesService, 
    OthersService, 
    TagsService
  ],
  entryComponents: [
    EntryupdateDialogComponent
  ]
})

export class EntriesModule {}