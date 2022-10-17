import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DarkModeButtonComponent } from './dark-mode-button/dark-mode-button.component';
import { LoaderComponent } from './loader/loader.component';


@NgModule({
  declarations: [
    DarkModeButtonComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    DarkModeButtonComponent,
    LoaderComponent
  ]
})
export class SharedModule {
}
