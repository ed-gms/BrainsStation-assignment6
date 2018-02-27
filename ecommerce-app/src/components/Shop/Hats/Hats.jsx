import React, { Component } from 'react';


class Hats extends Component {
  render() {
  
    let hatsJSX = this.props.products.map((product, i) => {
      if (product.type === 'hat') {
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
    });
    return (
      <div>
        <h1>My hats</h1>
        <div>
          {hatsJSX}
        </div>
      </div>
    );
  }
}

export default Hats;
