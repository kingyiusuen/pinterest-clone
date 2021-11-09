import axios from 'axios'

const baseUrl = '/api/users'

const signup = async (newObject) => {
  const response = await axios.post(`${baseUrl}/signup`, newObject)
  return response.data
}

const login = async (credentials) => {
  const response = await axios.post(`${baseUrl}/login`, credentials)
  return response.data
}

export { signup, login }