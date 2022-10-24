import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountryPageComponent } from "./country-page.component";
import { CountryDetailsGuard } from "../../core/country-details.guard";

const routes: Routes = [
  {
    path: ':countryName',
    component: CountryPageComponent,
    resolve: {country: CountryDetailsGuard}
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CountryPageRoutingModule {
}
