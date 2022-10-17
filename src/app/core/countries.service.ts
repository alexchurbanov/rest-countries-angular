import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { catchError, map, of, tap } from "rxjs";

export interface CountryType {
  name: string;
  capital: string;
  region: string;
  population: number;
  flagURL: string;
}

@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  private readonly BASE_URL = 'https://restcountries.com/v3.1';
  private readonly COUNTRIES_KEY = 'COUNTRIES';

  constructor(private http: HttpClient) {
  }

  private _setCountriesData(data: CountryType[]) {
    sessionStorage.setItem(this.COUNTRIES_KEY, JSON.stringify(data));
  }

  private get _countriesData(): CountryType[] {
    const data = sessionStorage.getItem(this.COUNTRIES_KEY);
    return data ? JSON.parse(data) : [];
  }

  getAll() {
    const data = this._countriesData;
    if (data.length) return of<CountryType[]>(data);
    return this.http.get<Array<any>>(`${this.BASE_URL}/all`)
    .pipe(
      catchError(() => of<CountryType[]>([])),
      map<Array<any>, CountryType[]>((data) => {
        const mapped: CountryType[] = data.map(item => ({
          name: item.name.common,
          capital: item.capital ? item.capital[0] : 'Has no capital',
          region: `${item.region} ${item.subregion ? '(' + item.subregion + ')' : ''}`,
          population: item.population,
          flagURL: item.flags.png,
        }));
        return mapped.sort((a, b) => {
          if (a.name > b.name) return 1;
          if (b.name > a.name) return -1;
          return 0;
        });
      }),
      tap(data => this._setCountriesData(data)),
    );
  }
}
