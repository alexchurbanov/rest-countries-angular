import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DarkModeButtonComponent } from './dark-mode-button/dark-mode-button.component';
import { LoaderComponent } from './loader/loader.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { RouterLinkWithHref } from "@angular/router";
import { ScrollTopButtonComponent } from './scroll-top-button/scroll-top-button.component';


@NgModule({
  declarations: [
    DarkModeButtonComponent,
    LoaderComponent,
    ErrorPageComponent,
    ScrollTopButtonComponent
  ],
  imports: [
    CommonModule,
    RouterLinkWithHref
  ],
  exports: [
    DarkModeButtonComponent,
    LoaderComponent,
    ErrorPageComponent,
    ScrollTopButtonComponent
  ]
})
export class SharedModule {
}
