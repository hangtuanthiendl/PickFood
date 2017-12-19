import { USER_UPDATE,CLEAR_USER } from '../Action/nameAction'
const initialState = null

export default function infouserReducer(state = initialState, action) {
  switch (action.type) {
    case USER_UPDATE:
    state = action.infouser
      return state
    case CLEAR_USER:
    state = []
      return state
    default:
      return state
  }
}