import { ADD_TO_CARD, CLEAR_CARD, DEL } from '../constants'
const cart = (
  state = {
    productId: [],
    quantityById: {}
  },
  action
) => {
  const { type } = action
  switch (type) {
    case ADD_TO_CARD:
      const { id } = action
      const newState = { ...state }
      if (newState.productId.indexOf(id) === -1) {
        newState.productId.push(id)
        newState.quantityById[id] = 1
      } else {
        newState.quantityById[id]++
      }
      return newState
    case CLEAR_CARD:
      return {
        productId: [],
        quantityById: {}
      }
    case DEL:
      const newCart = { ...state }
      if (newCart.quantityById[action.id] > 1) {
        newCart.quantityById[action.id]--
      } else {
        newCart.productId.splice(newCart.productId.indexOf(action.id), 1)
        delete newCart.quantityById[action.id]
      }
      return newCart
    default:
      return state
  }
}
export default cart
