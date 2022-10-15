import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryListComponent } from './country-list.component';
import { HttpClientTestingModule } from "@angular/common/http/testing";

describe('CountryListComponent', () => {
  let component: CountryListComponent;
  let fixture: ComponentFixture<CountryListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CountryListComponent],
      imports: [HttpClientTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
