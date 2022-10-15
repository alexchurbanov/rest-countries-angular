import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from "rxjs";

export type DarkModeSourceType = Observable<boolean>;


@Injectable({
  providedIn: "root"
})
export class DarkModeService {
  private _darkModeSource$: BehaviorSubject<boolean>;
  darkMode$: DarkModeSourceType;
  private readonly DARK_MODE_KEY = 'DARK_MODE';

  constructor() {
    const storedMode = this._getStoredMode();
    const initial = storedMode !== null ? storedMode : window.matchMedia("(prefers-color-scheme:dark)").matches;
    this._darkModeSource$ = new BehaviorSubject<boolean>(initial);
    this.darkMode$ = this._darkModeSource$.asObservable();
    this._setStoredMode(JSON.stringify(initial));
  }

  get currentValue() {
    return this._darkModeSource$.getValue();
  }

  private _setStoredMode(mode: string) {
    sessionStorage.setItem(this.DARK_MODE_KEY, mode);
  }

  private _getStoredMode(): boolean | null {
    const value = sessionStorage.getItem(this.DARK_MODE_KEY);
    return value ? JSON.parse(value) : null;
  }

  toggle() {
    const nextValue = !this.currentValue;
    this._darkModeSource$.next(nextValue);
    this._setStoredMode(JSON.stringify(nextValue));
  }
}
