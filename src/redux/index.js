import { combineReducers } from "redux";

import postReducer from './reducer/reducer'

const rootReducer= combineReducers({
    Posts:postReducer
})

export default rootReducer;