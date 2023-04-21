import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryPageComponent } from "./country-page.component";
import { CountryPageRoutingModule } from "./country-page-routing.module";
import { CountryDetailsPageComponent } from "./country-details-page.component";
import { CountryDetailsComponent } from "../../core/country-details/country-details.component";

@NgModule({
  declarations: [
    CountryPageComponent,
    CountryDetailsPageComponent
  ],
  imports: [
    CommonModule,
    CountryPageRoutingModule,
    CountryDetailsComponent
  ],
  exports: [
    CountryPageComponent,
    CountryDetailsPageComponent
  ]
})
export class CountryPageModule {
}

