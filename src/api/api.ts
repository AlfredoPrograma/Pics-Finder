import axios, { AxiosRequestConfig } from 'axios'

const axiosInstance = axios.create()

const api = {
  get: <T>(url: string, requestConfig: AxiosRequestConfig = {}) => axiosInstance.get<T>(url, requestConfig),
  post: <T>(url: string, body: unknown, requestConfig: AxiosRequestConfig = {}) => axiosInstance.post<T>(url, body, requestConfig),
  put: <T>(url: string, body: unknown, requestConfig: AxiosRequestConfig = {}) => axiosInstance.put<T>(url, body, requestConfig),
  delete: <T>(url: string, requestConfig: AxiosRequestConfig = {}) => axiosInstance.delete<T>(url, requestConfig)
}

export default api
