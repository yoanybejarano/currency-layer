import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CurrencyService } from 'src/app/services/currency.service';
import { CurrencyLive } from '../../interfaces/currency-live.interface';

@Component({
  selector: 'app-currency-historical',
  templateUrl: './currency-historical.component.html',
  styles: [
  ]
})
export class CurrencyHistoricalComponent implements OnInit {

  historicalData: CurrencyLive;
  title = 'Historical data';

  constructor(private currencyService: CurrencyService) {
    this.currencyService.getCurrencyHistorical().subscribe((data: CurrencyLive) => {
      this.historicalData = data;
      console.log(this.historicalData);
    });
  }

  ngOnInit(): void {
  }

}
