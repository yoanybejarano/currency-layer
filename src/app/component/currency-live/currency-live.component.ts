import { Component, OnInit } from '@angular/core';
import { CurrencyLive } from 'src/app/interfaces/currency-live.interface';
import { CurrencyService } from '../../services/currency.service';


@Component({
  selector: 'app-currency-live',
  templateUrl: './currency-live.component.html',
  styles: [],
})
export class CurrencyLiveComponent implements OnInit {

  title = 'Today Quotes';
  liveData: CurrencyLive;

  constructor(private currencyService: CurrencyService) {
    this.currencyService.getCurrencyLive().subscribe((data: CurrencyLive) => {
      this.liveData = data;
      console.log(this.liveData);
    });
  }

  ngOnInit(): void {
  }

}
