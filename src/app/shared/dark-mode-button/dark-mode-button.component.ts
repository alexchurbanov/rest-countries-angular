import { Component, OnInit } from '@angular/core';
import { DarkModeService, DarkModeSourceType } from "../dark-mode.service";
import { tap } from "rxjs";

@Component({
  selector: 'app-dark-mode-button',
  templateUrl: './dark-mode-button.component.html',
  styleUrls: ['./dark-mode-button.component.sass']
})
export class DarkModeButtonComponent implements OnInit {
  modeText!: string;
  icon!: string;
  darkMode$!: DarkModeSourceType;

  constructor(private darkModeService: DarkModeService) {
  }

  ngOnInit(): void {
    this.darkMode$ = this.darkModeService.darkMode$
    .pipe(
      tap(value => {
        this.icon = value ? 'light_mode' : 'dark_mode';
        this.modeText = value ? 'Light mode' : 'Dark mode';
      })
    );
  }

  changeMode() {
    this.darkModeService.toggle();
  }


}
