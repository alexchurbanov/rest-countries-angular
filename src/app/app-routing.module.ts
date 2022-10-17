import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountryListComponent } from "./core/country-list/country-list.component";
import { CountryPageComponent } from "./core/country-page/country-page.component";
import { CountryNameGuard } from "./core/country-name.guard";

const routes: Routes = [
  {path: '', component: CountryListComponent},
  {path: ':countryName', component: CountryPageComponent, canActivate: [CountryNameGuard]},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
