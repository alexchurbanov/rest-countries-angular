import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryCardComponent } from './country-card/country-card.component';
import { CountryListComponent } from './country-list/country-list.component';
import { InfiniteScrollModule } from "ngx-infinite-scroll";

@NgModule({
  declarations: [
    CountryCardComponent,
    CountryListComponent
  ],
  imports: [
    CommonModule,
    InfiniteScrollModule
  ],
  exports: [
    CountryCardComponent,
    CountryListComponent
  ]
})
export class CoreModule {
}
