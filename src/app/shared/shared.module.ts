import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DarkModeButtonComponent } from './dark-mode-button/dark-mode-button.component';


@NgModule({
  declarations: [
    DarkModeButtonComponent
  ],
  exports: [
    DarkModeButtonComponent
  ],
  imports: [
    CommonModule
  ],
  providers: []
})
export class SharedModule {
}
