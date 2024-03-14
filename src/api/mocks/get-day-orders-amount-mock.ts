import { http, HttpResponse } from 'msw'

import { GetDayOrdersAmountResponse } from '../get-day-orders-amount'

export const getDayOrdersAmountMock = http.get<
  never, // params dinamico
  never, // body request
  GetDayOrdersAmountResponse // body response
>('/metrics/day-orders-amount', () => {
  return HttpResponse.json({
    amount: 20,
    diffFromYesterday: -5,
  })
})