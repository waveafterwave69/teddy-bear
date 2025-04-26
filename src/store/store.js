import { createStore } from 'redux'
import rootReducer from './reducers'
import { setLocalStorage } from '../utils/localStorage'

const store = createStore(rootReducer)

store.subscribe(() => {
    setLocalStorage('store', store.getState().favReducer)
})

export default store
