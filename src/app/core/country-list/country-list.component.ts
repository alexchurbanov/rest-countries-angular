import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { CountriesService, CountryType } from "../countries.service";
import { Observable, Subject, takeUntil } from "rxjs";
import { DarkModeService, DarkModeSourceType } from "../../shared/dark-mode.service";

@Component({
  selector: 'app-country-card-list',
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
  offset: number = 8;

  constructor(private countriesService: CountriesService,
              private darkModeService: DarkModeService,
              private changeDetector: ChangeDetectorRef
  ) {
    this.unsub$ = new Subject<boolean>();
    this.countries$ = countriesService.getAll().pipe(takeUntil(this.unsub$));
    this.darkMode$ = darkModeService.darkMode$.pipe(takeUntil(this.unsub$));
  }

  setVisible() {
    const to = this.countriesVisible.length + this.offset;
    this.countriesVisible = this.countriesList.slice(0, to);
  }

  onScroll() {
    this.setVisible();
  }

  ngOnInit(): void {
    this.countries$
    .subscribe((value) => {
      this.countriesList = value;
      this.setVisible();
      this.offset = 4;
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
