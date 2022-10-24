import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryPageComponent } from "./country-page.component";
import { CountryPageRoutingModule } from "./country-page-routing.module";
import { CountryDetailsModule } from "../../core/country-details/country-details.module";

@NgModule({
  declarations: [
    CountryPageComponent,
  ],
  imports: [
    CommonModule,
    CountryPageRoutingModule,
    CountryDetailsModule
  ],
  exports: [
    CountryPageComponent
  ]
})
export class CountryPageModule {}

