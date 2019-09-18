import React, { Component } from 'react';

export class Form extends Component {
  state = {
    firstName: '',
    email: '',
    nameErr: '',
    emailErr: ''
  };
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  nameValidate = () => {};
  validate = () => {
    let emailErr = '';
    let nameErr = '';
    if (!this.state.name) {
      nameErr = 'please enter do not leave name blank';
      alert(nameErr);
    }
  };
  handleSubmit = e => {
    e.preventDefault();
    const isValid = this.validate();
    console.log(this.state);
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
