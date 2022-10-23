import { Component, HostListener, Input } from '@angular/core';
import { DarkModeService } from "../dark-mode.service";
import { Observable } from "rxjs";

@Component({
  selector: 'app-scroll-top-button',
  templateUrl: './scroll-top-button.component.html',
  styleUrls: ['./scroll-top-button.component.sass']
})
export class ScrollTopButtonComponent {
  @Input() showWhenY: number = 0;

  @HostListener('window: scroll') onScroll() {
    this.show = window.scrollY >= this.showWhenY;
  }

  show: boolean = false;
  darkMode$: Observable<boolean>;

  constructor(private darkModeService: DarkModeService) {
    this.darkMode$ = darkModeService.darkMode$;
  }

  scrollTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
}
