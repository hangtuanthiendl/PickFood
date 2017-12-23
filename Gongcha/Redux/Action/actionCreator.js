import { USER_UPDATE, PRICE_UPDATE,CLEAR_USER, ITEM_SHOP_UPDATE, CLEAR_ITEM_SHOP,DELETE_ITEM } from './nameAction';
export function infUserUpdate(infouser) {
  return {
    type: USER_UPDATE,
    infouser
  };
}
export function infUserClear() {
  return {
    type: CLEAR_USER
  };
}
export function infItemShopUpdate(inforitemshop) {
  return {
    type: ITEM_SHOP_UPDATE,
    inforitemshop
  };
}
export function infItemShopClear() {
  return {
    type: CLEAR_ITEM_SHOP
  };
}
export function infItemShopDelete(search) {
  return {
    type: DELETE_ITEM,
    search
  };
}
