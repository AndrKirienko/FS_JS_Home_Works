import axios from 'axios'
import CONSTANTS from './../../constants'

const httpClient = axios.create({ baseURL: CONSTANTS.BASE_URL })

export const getPhones = () => httpClient.get('/phones')
