import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import SignUpForm from './SignUpForm'

class SignUpPage extends Component {
  render() {
    return(
      <div className="row">
        <div className= "col-md-4 col-md-offset-4">
            <SignUpForm />
        </div>
      </div>
      );
  }
}

export default SignUpPage;