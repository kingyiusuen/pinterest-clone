import * as unsplashService from '../services/unsplash'
import * as userService from '../services/users'

export const GET_SAVED_PINS = 'GET_SAVED_PINS'
export const GET_RANDOM_PINS = 'GET_RANDOM_PINS'
export const SEARCH_PINS = 'SEARCH_PINS'
export const SAVE_PIN = 'SAVE_PIN'
export const DELETE_SAVED_PIN = 'DELETE_SAVED_PIN'

export const getSavedPins = userId => async dispatch => {
  const response = await userService.getProfile(userId)
  dispatch({
    type: GET_SAVED_PINS,
    photoUrls: response.data.savedPins,
  })
}

export const searchPins = query => async dispatch => {
  const response = await unsplashService.search({ query, per_page: 30 })
  const photoUrls = response.data.results.map(photo => photo.urls.raw)
  dispatch({
    type: SEARCH_PINS,
    photoUrls: photoUrls,
  })
}

export const getRandomPins = () => async dispatch => {
  const response = await unsplashService.random({ count: 30 })
  const photoUrls = response.data.map(photo => photo.urls.raw)
  dispatch({
    type: GET_RANDOM_PINS,
    photoUrls: photoUrls,
  })
}

export const savePin = (userId, photoUrl) => async dispatch => {
  await userService.savePin(userId, { photoUrl })
  dispatch({
    type: SAVE_PIN,
    photoUrl: photoUrl,
  })
}

export const deleteSavedPin = (userId, photoUrl) => async dispatch => {
  await userService.deleteSavedPin(userId, { photoUrl })
  dispatch({
    type: DELETE_SAVED_PIN,
    photoUrl: photoUrl,
  })
}