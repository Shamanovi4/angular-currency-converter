import { Observable } from 'rxjs'
import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { IExchangeRatesResponse } from '../interfaces/exchange-rates'

@Injectable({
  providedIn: 'root',
})
export class ExchangeRatesApiService {
  constructor(private http: HttpClient) {}

  getExchangeRates(): Observable<IExchangeRatesResponse> {
    return this.http.get<IExchangeRatesResponse>(
      'https://api.exchangerate.host/latest?base=UAH'
    )
  }
}
