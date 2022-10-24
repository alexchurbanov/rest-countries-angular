import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { CountriesService, CountryType } from "../countries.service";
import { catchError, Observable, of, Subject, takeUntil } from "rxjs";
import { DarkModeService, DarkModeSourceType } from "../../shared/dark-mode.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CountryListComponent implements OnInit, OnDestroy {
  countries$: Observable<CountryType[]>;
  darkMode$: DarkModeSourceType;
  unsub$: Subject<boolean>;
  isDark!: boolean;
  countriesList: CountryType[] = [];
  countriesVisible: CountryType[] = [];
  searchName: string = '';

  constructor(private countriesService: CountriesService,
              private darkModeService: DarkModeService,
              private changeDetector: ChangeDetectorRef,
              private router: Router
  ) {
    this.unsub$ = new Subject<boolean>();
    this.countries$ = countriesService.getAll().pipe(
      takeUntil(this.unsub$),
      catchError((err: Response) => {
        this.router.navigate(['/error', `${err.status}`]).then();
        return of([]);
      })
    );
    this.darkMode$ = darkModeService.darkMode$.pipe(takeUntil(this.unsub$));
  }

  setVisible(initialList: CountryType[], offset: number) {
    const to = this.countriesVisible.length + offset;
    this.countriesVisible = initialList.slice(0, to);
  }

  filterList(search: string) {
    this.searchName = search;
    if (!this.searchName) this.countriesVisible = [];
    const filtered = this.countriesList.filter(item => {
      const regExp = new RegExp(this.searchName, 'i');
      return regExp.test(item.name);
    });
    this.setVisible(filtered, 10);
  }

  onScroll() {
    if (this.searchName) this.filterList(this.searchName);
    else this.setVisible(this.countriesList, 5);
  }

  ngOnInit(): void {
    this.countries$
    .subscribe((value) => {
      this.countriesList = value;
      this.setVisible(this.countriesList, 10);
      this.changeDetector.markForCheck();
    });

    this.darkMode$
    .subscribe(value => {
      this.isDark = value;
      this.changeDetector.markForCheck();
    });
  }

  ngOnDestroy() {
    this.unsub$.next(true);
    this.unsub$.complete();
  }
}
