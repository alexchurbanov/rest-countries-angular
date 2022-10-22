import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map, of, tap } from "rxjs";

export interface CountryType {
  name: string;
  capital: Array<string>;
  region: string;
  population: number;
  flagURL: string;
}

export interface DetailedCountryType extends CountryType {
  officialName: string;
  coatOfArmsURL: string;
  googleMapsURL: string;
  currencies: Array<{ name: string, symbol: string }>;
  languages: Array<string>;
  timezones: Array<string>;
  isIndependent: boolean;
  isUNMember: boolean;
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
    return this.http.get<Array<any>>(`${this.BASE_URL}/all`).pipe(
      map<Array<any>, CountryType[]>((data) => {
        const mapped: CountryType[] = data.map(item => ({
          name: item.name.common,
          capital: Array.isArray(item.capital) ? item.capital : [],
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

  getByName(name: string) {
    return this.http.get<Array<any>>(`${this.BASE_URL}/name/${name}`).pipe(
      map<Array<any>, DetailedCountryType[]>(data => {
        const mapped: DetailedCountryType[] = data.map(item =>
          ({
            name: item.name.common,
            capital: Array.isArray(item.capital) ? item.capital : [],
            region: `${item.region} ${item.subregion ? '(' + item.subregion + ')' : ''}`,
            population: item.population,
            flagURL: item.flags.svg,
            coatOfArmsURL: item.coatOfArms.svg,
            googleMapsURL: item.maps.googleMaps,
            officialName: item.name.official,
            currencies: item.currencies ? Object.values(item.currencies) : [],
            languages: item.languages ? Object.values(item.languages) : [],
            timezones: item.timezones || [],
            isIndependent: item.independent,
            isUNMember: item.unMember
          })
        );
        return mapped;
      })
    );
  }
}
