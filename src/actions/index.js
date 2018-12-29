import axios from 'axios'
import * as actionTypes from '../constants'
//* as actionTypes 将 constants 内导出的所有东西全部放到 actionTypes 对象内
export const getProducts = () => {
  return dispatch => {
    axios.get('http://localhost:3008/products').then(res => {
      dispatch({
        type: actionTypes.GET_PRODUCTS,
        products: res.data
      })
    })
  }
}
export const inventoryChange = (id, num) => {
  return dispatch => {
    axios.patch(`http://localhost:3008/products/${id}`, num).then(res => {
      dispatch({
        type: actionTypes.ADD_TO_CARD,
        id
      })
    })
  }
}
export const clearCrad = () => {
  return {
    type: actionTypes.CLEAR_CARD
  }
}
export const del = (id, num) => {
  return dispatch => {
    axios.patch(`http://localhost:3008/products/${id}`, num).then(res => {
      dispatch({
        type: actionTypes.DEL,
        id
      })
    })
  }
}
