import axios from 'axios'

const accessKey = process.env.REACT_APP_ACCESS_KEY
const baseUrl = `https://api.unsplash.com/search/photos/?client_id=${accessKey}`

const search = async (params) => {
  const response = await axios.get(baseUrl, { params })
  return response.data
}

export default search