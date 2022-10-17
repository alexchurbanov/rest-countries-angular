import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DarkModeButtonComponent } from './dark-mode-button/dark-mode-button.component';


@NgModule({
  declarations: [
    DarkModeButtonComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DarkModeButtonComponent
  ]
})
export class SharedModule {
}
