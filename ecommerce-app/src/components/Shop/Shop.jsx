import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom'
import Hats from './Hats/Hats.jsx'
import Shoes from './Shoes/Shoes.jsx'
import Cart from './Cart/Cart.jsx'
import axios from 'axios'

const products = [
  {
    name: 'High Top Sneaker',
    price: 15,
    picture: 'img',
    type: 'shoe',
  },
  {
    name: 'Other Sneaker',
    price: 15,
    picture: 'img',
    type: 'shoe',
  },
  {
    name: 'Boots',
    price: 25,
    picture: 'img',
    type: 'shoe',
  },
  {
    name: 'Hat 1',
    price: 10,
    picture: 'img',
    type: 'hat',
  },
  {
    name: 'Hat 2',
    price: 15,
    picture: 'img',
    type: 'hat',
  },
  {
    name: 'Hat 3',
    price: 20,
    picture: 'img',
    type: 'hat',
  }
]
class Shop extends Component {
  constructor(props) {
    super(props)
    this.state = {
      products,
      cart: [],
      qty: 0,
    }
  }
  componentDidUpdate() {
    axios.get(`http://localhost:8080/cart/${this.props.userName}`)
      .then((response) => {
        this.setState({
          cart: response.data
        })
      })
  }
  componentDidUpdate() {
    axios.post('http://localhost:8080/cart', {
      cart: this.state.cart,
      username: this.props.userName
    })
      .then((response) => {
        if (response.data.success) {
          console.log('Items added to cart.')
        }
      })
  }
  // Add item
  addToCart = (product) => {
    this.setState({
      cart: this.state.cart.concat(product),
      qty: this.state.qty + 1
    }, () => { console.log(this.state.cart) })
    console.log(product)
  }

  render() {
    return (
      <div>
        <h1>Shop page</h1>
        <p>
          Welcome {this.props.userName}!
        </p>

        <Link to="/shop/shoes">
          <button type="button">SHOES</button>
        </Link>
        <Link to="/shop/hats">
          <button type="button">HATS</button>
        </Link>
        <Switch>
          <Route path="/shop/hats" render={() => {
            return <Hats addToCart={this.addToCart} products={this.state.products} />
          }} />
          <Route path="/shop/shoes" render={() => {
            return <Shoes addToCart={this.addToCart} products={this.state.products} />
          }} />
        </Switch>
        <div class="wrapper">
          <Cart cartItems={this.state.cart} qty={this.state.qty} />
        </div>

      </div>
    );
  }
}

export default Shop;
