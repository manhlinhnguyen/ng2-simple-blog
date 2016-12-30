import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nb-entrydetail-menu',
  template: `
    <button md-menu-item>
        <md-icon>account_circle</md-icon>
        <span>Signin</span>
    </button>
  `
})
export class UnauthMenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
