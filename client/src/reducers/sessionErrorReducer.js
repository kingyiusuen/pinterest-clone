import {
  CLEAR_SESSION_ERROR,
  RECEIVE_SESSION_ERROR,
  SET_CURRENT_USER,
} from "../actions/session";

const sessionErrorReducer = (state = "", action) => {
  switch (action.type) {
    case RECEIVE_SESSION_ERROR:
      return action.error;
    case CLEAR_SESSION_ERROR:
      return "";
    case SET_CURRENT_USER:
      return "";
    default:
      return state;
  }
};

export default sessionErrorReducer;
