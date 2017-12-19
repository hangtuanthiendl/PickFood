import { combineReducers } from 'redux'
import infouserReducer from './inforUser'
import infoItemShopReducer from './inforItemShop'
const rootReducer = combineReducers ({
    infouser : infouserReducer,
    inforitemshop: infoItemShopReducer
})
export default rootReducer
