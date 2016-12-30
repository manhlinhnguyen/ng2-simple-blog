import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nb-page-not-found',
  template: `
      <md-card>
        <div class="card-header">
          <h1>Resource not available!</h1>
        </div>
        <md-card-content>
          Sorry! The resoure you requested is not available!
        </md-card-content>
      </md-card>
  `,
  styles: []
})
export class PageNotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
