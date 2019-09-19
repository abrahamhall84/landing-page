import React from 'react';
import './App.css';
import { Form } from './components/Form/Form';
//import { Gratitude } from '../Gratitude/Gratitude';

function App() {
  let date = new Date();

  return (
    <div className="App">
      <h1>Your Company Landing Page</h1>
      <Form />
      {/*<Gratitude name={props.firstName} />*/}
      <footer>&copy; {date.getFullYear()} Your Company</footer>
    </div>
  );
}

export default App;
