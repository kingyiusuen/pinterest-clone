import { combineReducers } from "redux"

import pinReducer from "./pinReducer"
import sessionReducer from "./sessionReducer"

const rootReducer = combineReducers({
  session: sessionReducer,
  pin: pinReducer,
})

export default rootReducer