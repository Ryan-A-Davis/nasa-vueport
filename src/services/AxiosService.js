import axios from 'axios'

export const podsApi = axios.create({
  baseURL: 'https://api.nasa.gov/planetary'
})
