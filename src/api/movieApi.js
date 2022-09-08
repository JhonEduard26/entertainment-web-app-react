import axios from "axios"

export const movieApi = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  headers: {
    'Content-Type': 'application/json'
  },
  params: {
    'api_key': '30e44eee0d6c8912ae4cd9074baba1e3'
  }
})