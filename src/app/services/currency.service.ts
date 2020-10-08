import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CurrencyLive } from '../interfaces/currency-live.interface';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  constructor(private httpClient: HttpClient) { }

  getCurrencyLive = () => {
    return this.httpClient.get('http://api.currencylayer.com/live?access_key=f6d727ef5ac45b90d11aa6ef2fe7abc2');
  }

  getCurrencyHistorical = () => {
    return this.httpClient.get(`http://api.currencylayer.com/historical?access_key=f6d727ef5ac45b90d11aa6ef2fe7abc2&date=2010-10-05&currencies=USD,AUD,CAD,PLN,MXN&format=1`);
  }

}
