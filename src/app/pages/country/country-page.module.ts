import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryPageComponent } from "./country-page.component";
import { CountryPageRoutingModule } from "./country-page-routing.module";
import { CountryDetailsModule } from "../../core/country-details/country-details.module";
import { CountryDetailsPageComponent } from "./country-details/country-details-page.component";

@NgModule({
  declarations: [
    CountryPageComponent,
    CountryDetailsPageComponent
  ],
  imports: [
    CommonModule,
    CountryPageRoutingModule,
    CountryDetailsModule
  ],
  exports: [
    CountryPageComponent,
    CountryDetailsPageComponent
  ]
})
export class CountryPageModule {
}

