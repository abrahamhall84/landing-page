import React, { Component } from 'react';

const initialState = {
  firstName: '',
  email: '',
  nameErr: '',
  emailErr: ''
};

export class Form extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  validate = () => {
    //let nameErr = '';
    let emailErr = '';
    //let nameRegEx = /^[A-Za-z]*$/;
    let emailRegEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    //let nameResult = nameRegex.test(this.state.name);
    let emailResults = emailRegEx.test(this.state.email);
    //if (!nameResult) {
    //nameErr = 'please enter do not leave name blank';
    //}
    //make into switch case...
    if (!emailResults) {
      emailErr = 'please enter a valid email';
    }

    if (emailErr) {
      this.setState({ emailErr });
      return false;
    }
    return true;
  };
  handleSubmit = e => {
    e.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      console.log(this.state);
      this.setState(initialState);
    }
  };
  render() {
    return (
      <div id="form-component">
        <h2>Sign Up</h2>
        <p>get on our list</p>
        <h5>be connected</h5>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input
              type="text"
              name="firstName"
              value={this.state.firstName}
              placeholder="please enter your first name"
              onChange={this.handleChange}
            />
          </div>
          <div style={{ color: 'red', fontSize: 12 }}>{this.state.nameErr}</div>
          <div>
            <input
              type="text"
              name="email"
              value={this.state.email}
              placeholder="please enter your valid email"
              onChange={this.handleChange}
            />
          </div>
          <div style={{ color: 'red', fontSize: 12 }}>
            {this.state.emailErr}
          </div>
          <input type="submit" value="Subscribe" />
        </form>
      </div>
    );
  }
}
