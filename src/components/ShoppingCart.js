import React, { Component } from 'react'
import { isCartEmpty, getTotal } from '../selectors'
class ShoppingCart extends Component {
  render() {
    const { cart, products, clearCrad, inventoryChange, del } = this.props

    const cartContent = isCartEmpty(cart, products) ? (
      <ul>
        {cart.productId.map(e => {
          const product = products.find(product => product.id === e)
          return (
            <li key={e}>
              <input type='checkbox' name='' id='' />
              {product.productName} <span>{product.price}</span> X{' '}
              <button
                onClick={() => {
                  del(e, { inventory: product.inventory + 1 })
                }}
              >
                -
              </button>
              <span>{cart.quantityById[e]}</span>
              <button
                onClick={() => {
                  inventoryChange(e, { inventory: product.inventory - 1 })
                }}
              >
                +
              </button>
              <br />
              <span>$money {cart.quantityById[e] * product.price}</span>
            </li>
          )
        })}
      </ul>
    ) : (
      <div>请购买</div>
    )
    // const total = isCartEmpty(cart, products)
    //   ? cart.productId.reduce(
    //       (num, e) =>
    //         (num =
    //           num +
    //           products.find(product => product.id === e).price *
    //             cart.quantityById[e]),

    //       0
    //     )
    //   : 0
    return (
      <div>
        <h2>shopping-card</h2>
        {cartContent}
        <span>$total {getTotal(cart, products)}</span>
        <br />
        <button
          onClick={() => {
            clearCrad()
          }}
          disabled={cart.productId.length ? false : true}
        >
          check out
        </button>
      </div>
    )
  }
}

export default ShoppingCart
