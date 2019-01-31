import React, { Component } from 'react';
import './App.css';
import TaskList from './Tasklist';

const myListOfTasks = ['do the dishes', 'mow the lawn', 'write a fun little react basics app']

/*
So the structure of this app is a pretty simple tree
and only props pass down through the rendered components
        App
          \          <-- passes down myListOfTasks as a prop to TaskList component
            TaskList
            \   \    \     <-- each Task component receives three props (isComplete, text, handleOnClick)
            Task Task Task     <-- the state of each Task (like what props will be passed) is held in its                              parent, Tasklist
*/

class App extends Component {
  render() {
    return (
      <div className="App">
        <TaskList tasksList={myListOfTasks} />
      </div>
    );
  }
}

export default App;
