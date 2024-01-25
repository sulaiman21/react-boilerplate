import axios, { AxiosError, type AxiosRequestConfig, type AxiosResponse } from 'axios'
import UrlPattern from 'url-pattern'

import * as endpoints from './endpoints'
import { type ApiResponse, type Payload } from './types'

function generateEndpoint(url: keyof typeof endpoints, params?: object) {
  const pattern = new UrlPattern(endpoints[url])

  return pattern.stringify(params)
}

async function http(payload: Payload): Promise<ApiResponse> {
  try {
    const api = axios.create({
      baseURL: `${process.env.REACT_APP_API_BASE_URL}`,
    })

    const { data, query, path, method } = payload

    const url = generateEndpoint(path.url, path.params)

    const requestObject: AxiosRequestConfig = {
      headers: {
        'Content-Type': 'application/json',
      },
      url,
    }

    if (method === 'GET' && query) {
      requestObject.params = query
    }

    if (method !== 'GET' && data) {
      requestObject.data = data
    }

    const response: AxiosResponse<any, any> = await api(requestObject)

    const responseSuccess = {
      response,
      error: null,
    }

    return responseSuccess
  } catch (error: any) {
    const { message = 'Internal server error' } = error || {}
    const responseError = {
      response: null,
      error: {
        message,
        status: 500,
      },
    }

    // If error is typeof axios error
    if (error instanceof AxiosError) {
      const { response } = error satisfies AxiosError
      const { data } = response || {}
      const { message: axiosResponseError } = data || {}
      responseError.error.message = axiosResponseError || message
      responseError.error.status = error.response?.status || 500

      return responseError
    }

    return responseError
  }
}

export default http
