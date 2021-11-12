import { combineReducers } from "redux"
import sessionReducer from "./sessionReducer"
import pinReducer from "./pinReducer"

const rootReducer = combineReducers({
  session: sessionReducer,
  pin: pinReducer,
})

export default rootReducer