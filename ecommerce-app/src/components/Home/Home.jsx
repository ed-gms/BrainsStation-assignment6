import React, { Component } from 'react';


class Home extends Component {
  render() {
    return (
      <div>

        <h1>Home page</h1>

        <form onChange={this.props.addUser} onSubmit={(e)=>{this.props.finalUsername(e)}}>
          Please enter your name <br/>
          <input type="text" name="username"/>
          <input type="submit" value="Send Request"/>
        </form>

      </div>
    );
  }
}

export default Home;
