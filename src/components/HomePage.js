import React, { Component } from 'react';

class HomePage extends Component {
  render() {
      return (
        <div>
          <h1> Welcome to the invitation platform </h1>
          <h3><a href="/signup"> Register </a> </h3>
          <h3><a href="#"> Log In </a> </h3>
        </div>
        )
  }
}

export default HomePage;