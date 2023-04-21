import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountryPageComponent } from "./country-page.component";
import { CountryDetailsGuard } from "../../core/country-details/country-details.guard";
import { CountryDetailsPageComponent } from "./country-details-page.component";

const routes: Routes = [
  {
    path: ':countryName',
    component: CountryPageComponent,
    resolve: {country: CountryDetailsGuard},
    children: [
      {
        path: '',
        component: CountryDetailsPageComponent,
        pathMatch: "full"
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CountryPageRoutingModule {
}
