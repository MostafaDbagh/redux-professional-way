import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import rootReducer from '.'
const middleWares = [thunk]
const initialState ={}

const store = createStore(rootReducer,initialState,composeWithDevTools(applyMiddleware(...middleWares)) )

export {
    store
}