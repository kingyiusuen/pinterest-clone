import { combineReducers } from "redux";

import pinReducer from "./pinReducer";
import sessionReducer from "./sessionReducer";
import sessionErrorReducer from "./sessionErrorReducer";

const rootReducer = combineReducers({
  session: sessionReducer,
  sessionError: sessionErrorReducer,
  pin: pinReducer,
});

export default rootReducer;
