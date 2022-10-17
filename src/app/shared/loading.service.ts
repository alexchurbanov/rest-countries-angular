import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  private _loadingSource$: BehaviorSubject<boolean>;
  loading$: Observable<boolean>;

  constructor() {
    this._loadingSource$ = new BehaviorSubject<boolean>(false);
    this.loading$ = this._loadingSource$.asObservable();
  }

  setLoading(value: boolean) {
    this._loadingSource$.next(value);
  }
}
