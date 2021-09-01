import { createStore } from 'redux'
import rootReducer from './reducer/rootReducers'

const globalStore = createStore(rootReducer)

export default globalStore
