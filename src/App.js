import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';


import HomePage from './components/HomePage';
import SignUpPage from './components/SignUpPage/SignUpPage'
import LogInPage from './components/LogInPage/LogInPage'

class App extends Component {
  render() {
    return (
      <div className="App">
          <BrowserRouter>
            <div>
              <Route exact path="/" component={HomePage} />
              <Route path="/signup" component={SignUpPage} />
              <Route path="/login" component={LogInPage} />
            </div>
          </BrowserRouter>
      </div>
    );
  }
}

export default App;



