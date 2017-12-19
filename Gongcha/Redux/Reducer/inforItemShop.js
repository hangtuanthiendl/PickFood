import { ITEM_SHOP_UPDATE,CLEAR_ITEM_SHOP } from '../Action/nameAction'
const initialState = []

export default function infoItemShopReducer(state = initialState, action) {
  switch (action.type) {
    case ITEM_SHOP_UPDATE:
    //initialState.push(action.inforitemshop);
      return [action.inforitemshop,...state]
    case CLEAR_ITEM_SHOP:
    state = []
      return state
    default:
      return state
  }
}