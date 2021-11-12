import jwtDecode from 'jwt-decode'

import * as userService from '../services/users.js'

export const SET_CURRENT_USER = 'SET_CURRENT_USER'

export const setAuthToken = token => {
  if (token) {
    userService.instance.defaults.headers.common['Authorization'] = token
  } else {
    delete userService.instance.defaults.headers.common['Authorization']
  }
}

export const setCurrentUser = user => ({
  type: SET_CURRENT_USER,
  user
})

export const signup = userData => async dispatch => {
  await userService.signup(userData)
}

export const login = userData => async dispatch => {
  const response = await userService.login(userData)
  const token = response.data.token
  localStorage.setItem('jwtToken', token)
  setAuthToken(token)
  dispatch(setCurrentUser(jwtDecode(token)))
}

export const logout = () => dispatch => {
  localStorage.removeItem('jwtToken')
  setAuthToken(false)
  dispatch(setCurrentUser({}))
}