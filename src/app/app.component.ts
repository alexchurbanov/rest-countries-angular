import { Component, OnDestroy, OnInit } from '@angular/core';
import { DarkModeService } from "./shared/dark-mode.service";
import { Subscription } from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit, OnDestroy {
  darkMode!: Subscription;
  isDark: boolean = false;

  constructor(private darkModeService: DarkModeService) {
  }

  ngOnInit(): void {
    this.darkMode = this.darkModeService.darkMode$.subscribe((value) => {
      this.isDark = value;
    });
  }

  ngOnDestroy(): void {
    this.darkMode.unsubscribe();
  }
}
