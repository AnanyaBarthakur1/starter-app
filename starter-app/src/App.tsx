import React from 'react';
import { ReactDOM } from 'react';
import { start } from 'repl';
import { render } from 'react-dom';
import CounterFunction from './components/CounterFunction';
import Puppy from './components/Puppy';
import HelloWorld from './components/HelloWorld';
import './App.css'
const App: React.FC = () => {
  return(
    <div className='App'>
      <HelloWorld />
      <CounterFunction /> 
       <Puppy /> 
    </div>
  );
  }


export default App;
