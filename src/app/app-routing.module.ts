import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from "./shared/error-page/error-page.component";
import { CountryListPageComponent } from "./pages/country-list-page/country-list-page.component";

const routes: Routes = [
  {
    path: '',
    component: CountryListPageComponent,
    loadChildren: () => import('./pages/country-list-page/country-list-page.module').then(m => m.CountryListPageModule),
    pathMatch: "full"
  },
  {
    path: 'countries',
    loadChildren: () => import('./pages/country-page/country-page.module').then(m => m.CountryPageModule),
  },
  {path: 'error/:code', component: ErrorPageComponent},
  {path: '**', redirectTo: 'error/404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
