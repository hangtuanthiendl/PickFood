import {compose, createStore} from 'redux'
import {persistStore, persistReducer} from 'redux-persist'
import storage from 'redux-persist/es/storage'
import rootReducer from '../Reducer/reducer'
const config = {
  key: 'root',
  storage,
}
const reducer = persistReducer(config, rootReducer)
export default function configureStore(onComplete: ?() => void){
  let store = createStore(reducer)
  let persistor = persistStore(store)
  return { persistor, store}
}
