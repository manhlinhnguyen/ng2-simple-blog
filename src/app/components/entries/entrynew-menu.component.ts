import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nb-entrylist-toolbar',
  template: `
    <button md-menu-item>
        <md-icon>arrow_forward</md-icon>
        <span>Signout</span>
    </button>
  `
})
export class EntrynewMenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
