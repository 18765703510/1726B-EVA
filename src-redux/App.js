import React, { Component } from 'react';
import './stylesheets/App.css';
import TodoContent from './components/commons/TodoContent';
import TodoInput from './components/commons/TodoInput';
import TodoInfo from './components/commons/TodoInfo';

class App extends Component {
  render() {
    return (
      <div className="App">
         <TodoInput/>
         <TodoContent/>
         <TodoInfo/>
      </div>
    );
  }
}

export default App;

