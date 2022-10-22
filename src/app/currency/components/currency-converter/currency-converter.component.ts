import {Component} from '@angular/core'
import {IExchangeRatesResponse} from '../../interfaces/exchange-rates'
import {ExchangeRatesApiService} from '../../services/exchange-rates-api.service'

@Component({
  selector: 'app-currency-converter',
  templateUrl: './currency-converter.component.html',
  styleUrls: ['./currency-converter.component.scss']
})

export class CurrencyConverterComponent {
  fromAmount: number
  toAmount: number
  fromCurrency: string = 'USD'
  toCurrency: string = 'UAH'
  currencyRates: {}
  exchangeRatesResponse: IExchangeRatesResponse
  isFromMenuOpened: boolean = false
  isToMenuOpened: boolean = false

  constructor(
    private exchangeRatesApiService: ExchangeRatesApiService,
  ) {}

  ngOnInit() {
    this.exchangeRatesApiService.getExchangeRates().subscribe(exchangeRatesResponse => {
      this.exchangeRatesResponse = exchangeRatesResponse
      this.currencyRates = this.exchangeRatesResponse.rates
    })
  }

  convertFromCurrencyHandler(currency: string) {
    this.fromCurrency = currency
    this.toAmount = +(this.exchangeRatesResponse.rates[this.toCurrency] 
        * this.fromAmount / this.exchangeRatesResponse.rates[currency]).toFixed(2)
  }

  convertToCurrencyHandler(currency: string) {
    this.toCurrency = currency
    this.fromAmount = +(this.exchangeRatesResponse.rates[this.fromCurrency] 
        * this.toAmount / this.exchangeRatesResponse.rates[currency]).toFixed(2)
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
