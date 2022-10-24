import { Component, Input } from '@angular/core';
import { CountryType } from "../countries.service";
import { CommonModule } from "@angular/common";
import { RouterLinkWithHref } from "@angular/router";

@Component({
  standalone: true,
  selector: 'app-country-card[country]',
  templateUrl: './country-card.component.html',
  styleUrls: ['./country-card.component.sass'],
  imports: [
    CommonModule,
    RouterLinkWithHref
  ]
})
export class CountryCardComponent {
  @Input() country!: CountryType;
  @Input() isDark?: boolean;

  constructor() {
  }
}
