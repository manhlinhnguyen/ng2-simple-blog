import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Rx';
import { Router } from '@angular/router';
import { EntriesService } from './entries.service';

@Component({
  selector: 'nb-entrydetail-menu',
  template: `
    <button md-menu-item routerLink="entries/update/{{entrySlug}}">
        <md-icon>edit_mode</md-icon>
        <span>Edit Entry</span>
    </button>
    <button md-menu-item (click)="onDeleteClick()">
        <md-icon>delete</md-icon>
        <span>Delete Entry</span>
    </button>
    <button md-menu-item routerLink="entries/new">
        <md-icon>add</md-icon>
        <span>New Entry</span>
    </button>
    <button md-menu-item>
        <md-icon>arrow_forward</md-icon>
        <span>Signout</span>
    </button>
  `
})
export class EntrydetailMenuComponent implements OnInit {
  entrySlug: string;
  constructor(private router: Router,
              private entriesService: EntriesService) { }

  ngOnInit() {
    this.entrySlug = this.router.routerState.snapshot.root.children[0].children[0].params['slug'];
  }

  onDeleteClick(){
    this.entriesService.deleteEntry(this.entriesService.findEntryBySlug(this.entrySlug));
    this.router.navigate(['/entries']);
  }
}
