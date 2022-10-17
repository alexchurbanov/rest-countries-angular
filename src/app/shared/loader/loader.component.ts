import { Component, Input } from '@angular/core';
import { LoadingService } from "../loading.service";
import { Observable } from "rxjs";

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.sass']
})
export class LoaderComponent {
  @Input() isDark: boolean = false;
  isLoading: Observable<boolean>;

  constructor(private loadingService: LoadingService) {
    this.isLoading = loadingService.loading$;
  }

}
