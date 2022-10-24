import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryListPageComponent } from "./country-list-page.component";
import { SharedModule } from "../../shared/shared.module";
import { CountryListModule } from "../../core/country-list/country-list.module";


@NgModule({
  declarations: [
    CountryListPageComponent
  ],
  imports: [
    CommonModule,
    CountryListModule,
    SharedModule
  ],
  exports: [
    CountryListPageComponent
  ]
})
export class CountryListPageModule {
}
