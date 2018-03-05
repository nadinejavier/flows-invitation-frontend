import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import LogInForm from './LogInForm';

class LogInPage extends Component {
  render() {
    return(
      <div className="row">
        <div className= "col-md-4 col-md-offset-4">
            <LogInForm />
        </div>
      </div>
      );
  }
}

export default LogInPage;