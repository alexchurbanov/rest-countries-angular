import { Component, OnInit } from '@angular/core';
import { DetailedCountryType } from "../countries.service";
import { DarkModeService, DarkModeSourceType } from "../../shared/dark-mode.service";
import { ActivatedRoute, Router } from "@angular/router";
import { CountryDetailsResponseType } from "./country-details.guard";
import { CommonModule } from "@angular/common";

@Component({
  standalone: true,
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.sass'],
  imports: [
    CommonModule
  ]
})
export class CountryDetailsComponent implements OnInit {
  country!: DetailedCountryType;
  darkMode$: DarkModeSourceType;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private darkModeService: DarkModeService) {
    this.darkMode$ = darkModeService.darkMode$;
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({country}) => {
      const {data, error}: CountryDetailsResponseType = country;
      if (error) {
        this.router.navigate(['/error', error]).then();
        return;
      }
      this.country = data!;
    });
  }
}
