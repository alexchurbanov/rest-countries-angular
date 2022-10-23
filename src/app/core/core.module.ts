import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryCardComponent } from './country-card/country-card.component';
import { CountryListComponent } from './country-list/country-list.component';
import { InfiniteScrollModule } from "ngx-infinite-scroll";
import { FormsModule } from "@angular/forms";
import { RouterLinkWithHref } from "@angular/router";
import { CountryPageComponent } from './country-page/country-page.component';
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [
    CountryCardComponent,
    CountryListComponent,
    CountryPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    InfiniteScrollModule,
    RouterLinkWithHref,
    SharedModule,
  ],
  exports: [
    CountryCardComponent,
    CountryListComponent,
    CountryPageComponent
  ]
})
export class CoreModule {
}
