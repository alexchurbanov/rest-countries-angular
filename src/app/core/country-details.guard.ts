import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { catchError, Observable, of, switchMap } from 'rxjs';
import { CountriesService, DetailedCountryType } from "./countries.service";

export interface CountryDetailsResponseType {
  data: DetailedCountryType | null;
  error?: string;
}

@Injectable({
  providedIn: 'root'
})
export class CountryDetailsGuard implements Resolve<CountryDetailsResponseType> {
  constructor(private countriesService: CountriesService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<CountryDetailsResponseType> {
    const name = route.paramMap.get('countryName');
    if (!name) return of<CountryDetailsResponseType>({data: null, error: "404"});
    return this.countriesService.getByName(name).pipe(
      switchMap((data) => {
        if (data.length !== 1) return of<CountryDetailsResponseType>({data: null, error: "404"});
        return of<CountryDetailsResponseType>({data: data[0]});
      }),
      catchError((err: Response) => {
        return of<CountryDetailsResponseType>({data: null, error: `${err.status}`});
      }),
    );
  }

}
