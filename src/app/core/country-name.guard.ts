import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { catchError, Observable, of, switchMap } from 'rxjs';
import { CountriesService } from "./countries.service";

@Injectable({
  providedIn: 'root'
})
export class CountryNameGuard implements CanActivate {
  constructor(private countriesService: CountriesService, private router: Router) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.countriesService.getAll().pipe(
      switchMap((data): Observable<boolean> => {
        const isNameExist = data.findIndex(item => item.name.toLowerCase() === route.params['countryName'].toLowerCase()) >= 0;
        if (isNameExist) return of(true);
        this.router.navigate(['']).then();
        return of(false);
      }),
      catchError(() => {
        this.router.navigate(['']).then();
        return of(false);
      }),
    );
  }

}
