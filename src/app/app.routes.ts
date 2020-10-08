import { RouterModule, Routes } from '@angular/router';
import { CurrencyLiveComponent } from './component/currency-live/currency-live.component';
import { CurrencyHistoricalComponent } from './component/currency-historical/currency-historical.component';

const APP_ROUTING: Routes = [
  { path: 'live', component: CurrencyLiveComponent },
  { path: 'historical', component: CurrencyHistoricalComponent },
  { path: '**' , pathMatch: 'full', redirectTo: 'live'}
];

export const APP_ROUTER = RouterModule.forRoot(APP_ROUTING);
