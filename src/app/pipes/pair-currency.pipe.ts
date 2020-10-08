import { CurrencyPipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pairCurrency'
})
export class PairCurrencyPipe implements PipeTransform {

  constructor(public currencyPipe: CurrencyPipe) {
  }

  transform(value: string, pair: string): string {
    const currencyCode = pair.slice(3, 6);
    const showSymbol = true;
    return this.currencyPipe.transform(value, currencyCode, showSymbol);
  }

}
