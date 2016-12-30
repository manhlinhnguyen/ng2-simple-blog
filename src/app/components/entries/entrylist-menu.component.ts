import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nb-entrylist-toolbar',
  template: `
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
export class EntrylistMenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
