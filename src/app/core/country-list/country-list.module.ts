import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { InfiniteScrollModule } from "ngx-infinite-scroll";
import { CountryListComponent } from "./country-list.component";
import { CountryCardModule } from "../country-card/country-card.module";


@NgModule({
  declarations: [
    CountryListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    InfiniteScrollModule,
    CountryCardModule
  ],
  exports: [
    CountryListComponent
  ]
})
export class CountryListModule {
}
