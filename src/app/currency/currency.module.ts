import {CurrencyRatesComponent} from './components/currency-rates/currency-rates.component'
import {CurrencyConverterComponent} from './components/currency-converter/currency-converter.component'
import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {FormsModule} from '@angular/forms'
import {ClickedOutsideDirective} from './directives/clicked-outside.directive'
import {CurrencySelectComponent} from './components/currency-select/currency-select.components'

@NgModule({
  declarations: [
    CurrencyRatesComponent,
    CurrencyConverterComponent,
    CurrencySelectComponent,
    ClickedOutsideDirective
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    CurrencyRatesComponent,
    CurrencyConverterComponent
  ]
})

export class CurrencyModule { }
