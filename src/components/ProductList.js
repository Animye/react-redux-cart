import React, { Component } from 'react'
class ProductList extends Component {
  render() {
    const { products } = this.props
    const list = products.length ? (
      <ul>
        {products.map(e => (
          <li key={e.id}>
            <span>{e.productName}</span> - <span>${e.price}</span> x
            <span>{e.inventory}</span>
            <div>
              <button
                disabled={e.inventory ? false : true}
                onClick={() => {
                  this.inventoryChange(e.id, e.inventory)
                }}
              >
                add to card
              </button>
            </div>
          </li>
        ))}
      </ul>
    ) : (
      <div>请稍等</div>
    )
    return <div>{list}</div>
  }
  inventoryChange = (id, num) => {
    const { inventoryChange } = this.props
    inventoryChange(id, { inventory: num - 1 })
  }
}

export default ProductList
