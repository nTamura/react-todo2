import React, { Component } from 'react';
// import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';
import TodoList from './components/TodoList'
import Nav from './components/Nav'
import TodoInput from './components/TodoInput'
import './App.css';

const todos = [
  {
    task: 'make React todo list',
    completed: false
  }, {
    task: 'click on item to complete',
    completed: false
  },{
    task: 'style todo list',
    completed: true
  },{
    task: 'submit',
    completed: true
  },{
    task: 'eat dinner',
    completed: false
  }
];

class App extends Component {
  constructor(){
    super();
    this.state = {
      todos
    }
  }

  addTask = (e) => {
    let task = {
      task: e.target.task.value,
      completed: false
    }
    e.preventDefault()
    this.setState({
      todos: this.state.todos.concat(task)
    })
  }
  delTask = (e) => {
    // e.preventDefault()
    console.log(e);
    this.setState({
      todos: this.state.todos.filter(del => del !== e)
      // todos: this.state.todos.concat(task)
    })
  }

  render() {
    return (
      <div className="App">
        <Grid container spacing={24}>
        {/* fix container width */}
          <Grid item xs={12}>
            <Nav/>
            <TodoInput addTask={this.addTask} />
            <TodoList todos={this.state.todos} delTask={this.delTask} />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default App;
