import {
  FETCH_SAVED_PINS,
  SET_FEED,
  SAVE_PIN,
  DELETE_SAVED_PIN,
} from "../actions/pin";

const INITIAL_STATE = {
  feed: [],
  saved: [],
};

const pinReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_SAVED_PINS:
      return {
        feed: state.feed,
        saved: action.photoUrls,
      };
    case SET_FEED:
      return {
        feed: action.photoUrls,
        saved: state.saved,
      };
    case SAVE_PIN:
      return {
        feed: state.feed,
        saved: [...state.saved, action.photoUrl],
      };
    case DELETE_SAVED_PIN:
      return {
        feed: state.feed,
        saved: state.saved.filter((url) => url !== action.photoUrl),
      };
    default:
      return state;
  }
};

export default pinReducer;
