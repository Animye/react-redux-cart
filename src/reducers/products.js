import { GET_PRODUCTS, ADD_TO_CARD, DEL } from '../constants'
const products = (state = [], action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return action.products
    case ADD_TO_CARD:
      const newState = [...state]
      newState.find(e => e.id === action.id).inventory--
      return newState
    case DEL:
      return state.map(e => {
        if (e.id === action.id) {
          e.inventory++
        }
        return e
      })
    default:
      return state
  }
}
export default products
