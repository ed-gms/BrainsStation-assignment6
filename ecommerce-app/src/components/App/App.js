import React, { Component } from 'react';
import './App.css';
import Home from '../Home/Home.jsx'
import Shop from '../Shop/Shop.jsx'
import Nav from '../Nav/Nav.jsx'
import {
  Switch,
  Route,
} from 'react-router-dom'

class App extends Component {
  constructor() {
    super()
    this.state = {
      user: ""
    }
  }
  // ADD USER
  addUser = (e) => {
    let userName = e.target.value
    this.setState({
      user: userName
    })
  }

  finalUsername = (e) => {
    e.preventDefault()
    localStorage.setItem('user', JSON.stringify(this.state.user))
    let userName = JSON.parse(localStorage.getItem('user'))

    this.setState({
      user: userName
    })

  }

  render() {
    return (
      <div className="App">
        <header>
          <nav className="navbar navbar-light bg-dark">
            <Nav />
          </nav>
        </header>
        <Switch>
          <Route exact path="/" render={() => {
            return <Home addUser={this.addUser} finalUsername={this.finalUsername} />
          }} />

          <Route path="/shop" render={() => {
            return <Shop userName={this.state.user} />
          }} />
        </Switch>

      </div>
    );
  }
}

export default App;
