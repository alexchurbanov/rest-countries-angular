import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from "./landing-page.component";
import { SharedModule } from "../../shared/shared.module";
import { CountryListComponent } from "../../core/country-list/country-list.component";


@NgModule({
  declarations: [
    LandingPageComponent
  ],
  imports: [
    CommonModule,
    CountryListComponent,
    SharedModule
  ],
  exports: [
    LandingPageComponent
  ]
})
export class LandingPageModule {
}
