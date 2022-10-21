import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountryListComponent } from "./core/country-list/country-list.component";
import { CountryPageComponent } from "./core/country-page/country-page.component";
import { CountryDetailsGuard } from "./core/country-details.guard";
import { ErrorPageComponent } from "./shared/error-page/error-page.component";

const routes: Routes = [
  {path: '', component: CountryListComponent, pathMatch: "full"},
  {path: 'error/:code', component: ErrorPageComponent},
  {
    path: 'countries/:countryName',
    component: CountryPageComponent,
    resolve: {country: CountryDetailsGuard}
  },
  {path: '**', redirectTo: 'error/404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
