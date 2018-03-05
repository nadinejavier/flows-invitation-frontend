import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import axios from 'axios';


class LogInForm extends Component {
  render() {
    return(
        <form>
            <h1> Log In </h1>
            <div className="form-group">
              <label className="control-label">Email: </label>
              <input
                type="text"
                name="email"
                className="form-control"
              />
            </div>

            <div className="form-group">
              <button className="btn btn-primary btn-large">
              Submit
              </button>
            </div>
        </form>
      );
  }
}


export default LogInForm;