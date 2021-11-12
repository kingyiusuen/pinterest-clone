import { GET_SAVED_PINS, GET_RANDOM_PINS, SEARCH_PINS, SAVE_PIN, DELETE_SAVED_PIN } from '../actions/pin'

const INITIAL_STATE = {
  display: [],
  saved: []
}

const pinReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_SAVED_PINS:
      return {
        display: state.display,
        saved: action.photoUrls
      }
    case GET_RANDOM_PINS:
      return {
        display: action.photoUrls,
        saved: state.saved
      }
    case SEARCH_PINS:
      return {
        display: action.photoUrls,
        saved: state.saved
      }
    case SAVE_PIN:
      return {
        display: state.display,
        saved: [...state.saved, action.photoUrl]
      }
    case DELETE_SAVED_PIN:
      return {
        display: state.display,
        saved: state.saved.filter(url => url !== action.photoUrl)
      }
    default:
      return state
  }
}

export default pinReducer