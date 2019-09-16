import React from 'react';
import './App.css';
import { tsConstructorType } from '@babel/types';

function App() {
  return (
    <div className="App">
      <h1>Landing Page E-Commerce Site</h1>
      <h2>Sign Up</h2>
      <p>get on our list</p>
      <h5>be connected</h5>
      <form>  
          <input type='text' name='firstname' placeholder='please enter your first name' value='' /> <br />
          <input type='text' name='email' value='' placeholder='please enter your valid email' /> <br />
          <input type='button' value='Submit' />
      </form>
      <div>
        <h2>Thank You, Name</h2>
        <p>for staying connected to us</p>
      </div>
    </div>
  );
}

export default App;
