import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryDetailsComponent } from "./country-details.component";


@NgModule({
  declarations: [
    CountryDetailsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CountryDetailsComponent
  ]
})
export class CountryDetailsModule {
}
