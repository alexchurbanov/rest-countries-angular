import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { DetailedCountryType } from "../countries.service";
import { CountryDetailsResponseType } from "../country-details.guard";

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styleUrls: ['./country-page.component.sass']
})
export class CountryPageComponent implements OnInit {
  country: DetailedCountryType | null = null;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({country}) => {
      const {data, error}: CountryDetailsResponseType = country;
      if (error) {
        this.router.navigate(['/error', error]).then();
        return;
      }
      this.country = data;
    });
  }

}
