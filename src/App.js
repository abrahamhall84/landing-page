import React from 'react';
import './App.css';
import { Form } from './components/Form/Form'

function App() {
  let date = new Date()

  return (
    <div className="App">
      <h1>Your Company Landing Page</h1>
      <Form />
      <footer>
        &copy; {date.getFullYear()} Your Company 
      </footer>
    </div>
  );
}

export default App;
