import axios from 'axios'

const baseUrl = 'https://api.unsplash.com'

const unsplashServer = axios.create({
  baseUrl: baseUrl,
  headers: {
    Authorization: `Client-ID ${process.env.REACT_APP_ACCESS_KEY}`
  }
})

const search = async (params) => {
  const response = await unsplashServer.get(`${baseUrl}/search/photos/`, { params })
  return response.data
}

const random = async (params) => {
  const response = await unsplashServer.get(`${baseUrl}/photos/random/`, { params })
  return response.data
}

export { search, random }