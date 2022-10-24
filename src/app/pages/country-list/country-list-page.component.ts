import { Component } from '@angular/core';


@Component({
  template: `
    <app-scroll-top-button [showWhenY]="600"></app-scroll-top-button>
    <app-country-list></app-country-list>
  `
})
export class CountryListPageComponent {
}
