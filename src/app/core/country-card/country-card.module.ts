import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryCardComponent } from "./country-card.component";
import { RouterLinkWithHref } from "@angular/router";


@NgModule({
  declarations: [
    CountryCardComponent
  ],
  imports: [
    CommonModule,
    RouterLinkWithHref
  ],
  exports: [
    CountryCardComponent
  ]
})
export class CountryCardModule {
}
