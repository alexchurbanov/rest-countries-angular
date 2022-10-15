import { Component } from '@angular/core';
import { DarkModeService, DarkModeSourceType } from "./shared/dark-mode.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  darkMode$: DarkModeSourceType;

  constructor(private darkModeService: DarkModeService) {
    this.darkMode$ = this.darkModeService.darkMode$;
  }
}
