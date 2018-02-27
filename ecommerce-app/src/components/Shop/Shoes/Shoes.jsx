import React, { Component } from 'react';


class Shoes extends Component {
  render() {
    
    let shoesJSX = this.props.products.map((product, i) => {
      if (product.type === 'shoe') {
        return <div key={i}>
          <ul>
            <li>{product.name}</li>
            <li>Price: ${product.price}</li>
            <button onClick={() => { this.props.addToCart(product) }}>Add to cart</button>
          </ul>
        </div>
      } else {
        return null
      }
    })
    return (
      <div>

        <h1>My shoes</h1>
        <div>
          {shoesJSX}
        </div>

      </div>
    );
  }
}

export default Shoes;
