import { Component, Input } from '@angular/core';
import { CountryType } from "../countries.service";

@Component({
  selector: 'app-country-card[country]',
  templateUrl: './country-card.component.html',
  styleUrls: ['./country-card.component.sass']
})
export class CountryCardComponent {
  @Input() country!: CountryType;
  @Input() isDark?: boolean;

  constructor() {
  }
}
