import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CurrencyPipe } from '@angular/common';

import { AppComponent } from './app.component';

// Services
import { CurrencyService } from './services/currency.service';

// Router
import { APP_ROUTER } from './app.routes';

// Pipes
import { PairCurrencyPipe } from './pipes/pair-currency.pipe';

// Components
import { CurrencyLiveComponent } from './component/currency-live/currency-live.component';
import { NavbarComponent } from './component/shared/navbar/navbar.component';
import { CurrencyHistoricalComponent } from './component/currency-historical/currency-historical.component';




@NgModule({
  declarations: [
    AppComponent,
    CurrencyLiveComponent,
    NavbarComponent,
    PairCurrencyPipe,
    CurrencyHistoricalComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    APP_ROUTER
  ],
  providers: [CurrencyService, CurrencyPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
