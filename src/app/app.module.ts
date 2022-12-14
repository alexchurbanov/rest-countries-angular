import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from "./shared/shared.module";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { LoadingInterceptorService } from "./shared/loading-interceptor.service";
import { LandingPageModule } from "./pages/landing/landing-page.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    LandingPageModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptorService, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
