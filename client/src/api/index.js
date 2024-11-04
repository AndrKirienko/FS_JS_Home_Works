import axios from 'axios'
import CONSTANTS from './../../constants'

const httpClient = axios.create({ baseURL: CONSTANTS.BASE_URL })

export const getPhones = (page, results) =>
  httpClient.get(`/phones?page=${page}&results=${results}`)

export const removePhone = payload => httpClient.delete(`/phones/${payload}`)
