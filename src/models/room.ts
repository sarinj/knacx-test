export type Customer = {
  id: string
  no: string
  name: string
  day: string
}

export type Room = {
  id: string
  name: string
  isPaymentRoom?: boolean
  customers: Customer[]
}
