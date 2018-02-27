import React, { Component } from 'react';


class Cart extends Component {
  render() {
    let itemsJSX = this.props.cartItems.map((item, i) => {
      return <li key={i}>{item.name}</li>
    })
    return (
      
      <div>
        <div class="sidebar-header">
          <h3>Cart Summary</h3>
          <p>You have {this.props.qty} items in your cart </p>
        </div>
        <div>{itemsJSX}</div>
      </div>
    );
  }
}

export default Cart;