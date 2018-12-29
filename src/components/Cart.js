import React, { Component } from 'react'
import ProductList from './ProductList'
import { connect } from 'react-redux'
import { inventoryChange, clearCrad, del } from '../actions'
import ShoppingCart from './ShoppingCart'
import './cart.scss'
class Cart extends Component {
  render() {
    const { products, inventoryChange, cart, clearCrad, del } = this.props
    return (
      <div className='shopping-cart'>
        <ProductList products={products} inventoryChange={inventoryChange} />
        <ShoppingCart
          cart={cart}
          products={products}
          clearCrad={clearCrad}
          inventoryChange={inventoryChange}
          del={del}
        />
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    products: state.products,
    cart: state.cart
  }
}
export default connect(
  mapStateToProps,
  { inventoryChange, clearCrad, del }
)(Cart)
