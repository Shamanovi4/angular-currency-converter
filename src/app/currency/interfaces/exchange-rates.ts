export interface IExchangeRatesResponse {
  base: string,
  rates: IStringNumberPair
}

export interface IStringNumberPair {
  [key: string]: number
}

export interface ICurrencyRate {
  currency: string, 
  rate: number
}
