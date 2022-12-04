import { Component } from '@angular/core'
import { IStringNumberPair } from '../../interfaces/exchange-rates'
import { ExchangeRatesApiService } from '../../services/exchange-rates-api.service'

@Component({
  selector: 'app-currency-converter',
  templateUrl: './currency-converter.component.html',
  styleUrls: ['./currency-converter.component.scss'],
})
export class CurrencyConverterComponent {
  fromAmount: number
  toAmount: number
  fromCurrency: string = 'USD'
  toCurrency: string = 'UAH'
  currencyRates: IStringNumberPair
  isFromMenuOpened: boolean = false
  isToMenuOpened: boolean = false

  constructor(private exchangeRatesApiService: ExchangeRatesApiService) {}

  ngOnInit() {
    this.exchangeRatesApiService
      .getExchangeRates()
      .subscribe((exchangeRatesResponse) => {
        this.currencyRates = exchangeRatesResponse.rates
      })
  }

  convertFromCurrencyHandler(currency: string) {
    this.fromCurrency = currency
    this.toAmount = +(
      (this.currencyRates[this.toCurrency] * this.fromAmount) /
      this.currencyRates[currency]
    ).toFixed(2)
  }

  convertToCurrencyHandler(currency: string) {
    this.toCurrency = currency
    this.fromAmount = +(
      (this.currencyRates[this.fromCurrency] * this.toAmount) /
      this.currencyRates[currency]
    ).toFixed(2)
  }

  swapHandler() {
    const tempAmount = this.fromAmount
    const tempCurrency = this.fromCurrency
    this.fromAmount = this.toAmount
    this.fromCurrency = this.toCurrency
    this.toAmount = tempAmount
    this.toCurrency = tempCurrency
  }
}
