import { ITEM_SHOP_UPDATE,CLEAR_ITEM_SHOP, DELETE_ITEM } from '../Action/nameAction'
const initialState = []

export default function infoItemShopReducer(state = initialState, action) {
  switch (action.type) {
    case ITEM_SHOP_UPDATE:
    //initialState.push(action.inforitemshop);
      return [action.inforitemshop,...state]
    case CLEAR_ITEM_SHOP:
    state = []
      return state
    case DELETE_ITEM:
    return state.filter(item => item !== action.search)
    default:
      return state
  }
}