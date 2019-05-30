import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pages',
  template: `
    <app-layout-one-column>
      <router-outlet></router-outlet>
    </app-layout-one-column>
  `,
  styles: []
})
export class PagesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
