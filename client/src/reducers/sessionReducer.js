import { SET_CURRENT_USER } from "../actions/session";

const INITIAL_STATE = {
  isAuthenticated: false,
  user: {},
};

const rootReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        // Turn an empty object into false or an object with keys to be true
        isAuthenticated: !!Object.keys(action.user).length,
        user: action.user,
      };
    default:
      return state;
  }
};

export default rootReducer;
