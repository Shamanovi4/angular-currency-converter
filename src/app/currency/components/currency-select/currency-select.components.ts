import { Component, EventEmitter, Input, Output } from '@angular/core'

@Component({
  selector: 'app-currency-select',
  templateUrl: './currency-select.component.html',
  styleUrls: ['./currency-select.component.scss'],
})
export class CurrencySelectComponent {
  @Output() convertCurrency: EventEmitter<string> = new EventEmitter()
  @Input() currency: string = ''
  @Input() currencyRates: {} = {}

  isMenuOpened: boolean

  toggleMenuHandler() {
    this.isMenuOpened = !this.isMenuOpened
  }

  clickedOutsideHandler() {
    if (this.isMenuOpened) this.isMenuOpened = false
  }

  selectOption(currency: string) {
    this.currency = currency
    this.convertCurrency.emit(currency)
  }
}
