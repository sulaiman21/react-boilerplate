import { type AxiosResponse, type Method } from 'axios'

import type * as endpoints from './endpoints'

export interface Payload {
  method: Method
  path: {
    url: keyof typeof endpoints
    params?: object
  }
  data?: any
  query?: string
}

interface IError {
  message: string | null
  status: number
}

export interface ApiResponse {
  response: AxiosResponse<any, any> | null
  error: IError | null
}
