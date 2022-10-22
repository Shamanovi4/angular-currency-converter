import {Component} from '@angular/core'
import {IExchangeRatesResponse} from '../../interfaces/exchange-rates'
import {ExchangeRatesApiService} from '../../services/exchange-rates-api.service'

@Component({
  selector: 'app-currency-rates',
  templateUrl: './currency-rates.component.html',
  styleUrls: ['./currency-rates.component.scss']
})

export class CurrencyRatesComponent {
  usdRate: number
  eurRate: number

  exchangeRatesResponse: IExchangeRatesResponse

  constructor(
    private exchangeRatesApiService: ExchangeRatesApiService
  ) {}

  ngOnInit(): void {
    this.exchangeRatesApiService.getExchangeRates().subscribe(exchangeRatesResponse => {
      this.exchangeRatesResponse = exchangeRatesResponse
      this.usdRate = this.exchangeRatesResponse.rates['USD']
      this.eurRate = this.exchangeRatesResponse.rates['EUR']
    })
  }
}
