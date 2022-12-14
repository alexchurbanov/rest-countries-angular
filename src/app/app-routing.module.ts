import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from "./shared/error-page/error-page.component";
import { LandingPageComponent } from "./pages/landing/landing-page.component";

const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent,
    pathMatch: "full"
  },
  {
    path: 'countries',
    loadChildren: () => import('./pages/country/country-page.module').then(m => m.CountryPageModule),
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
