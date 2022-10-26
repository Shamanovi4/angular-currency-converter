import {Component} from '@angular/core'
import {ExchangeRatesApiService} from '../../services/exchange-rates-api.service'

@Component({
  selector: 'app-currency-rates',
  templateUrl: './currency-rates.component.html',
  styleUrls: ['./currency-rates.component.scss']
})

export class CurrencyRatesComponent {
  usdRate: number
  eurRate: number

  constructor(
    private exchangeRatesApiService: ExchangeRatesApiService
  ) {}

  ngOnInit(): void {
    this.exchangeRatesApiService.getExchangeRates().subscribe(exchangeRatesResponse => {
      this.usdRate = exchangeRatesResponse.rates['USD']
      this.eurRate = exchangeRatesResponse.rates['EUR']
    })
  }
}
