import React, { Component } from 'react';
import TodoList from './components/TodoList'
import Nav from './components/Nav'
import TodoModal from './components/TodoModal'
// import Snackbar from 'material-ui/Snackbar';


import './App.css';

const todos = [
  {
    task: 'make another React Todo List',
    complete: true
  }, {
    task: 'use Material-UI',
    complete: true
  },{
    task: 'eat some ramen',
    complete: false
  },{
    task: '???',
    complete: true
  },{
    task: 'profit!',
    complete: false
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
    e.preventDefault();
    if (e.target.task.value !== '') {
      let todo = {
        task: e.target.task.value,
        complete: false
      }
      this.setState({
        todos: this.state.todos.concat(todo)
      })
    }
    e.target.task.value = ""
  }

  delTask = (e,i) => {
    let task = this.state.todos[i]
    let todos = this.state.todos.filter((todo) => {
      return todo !== task
    })
    this.setState({
      todos: todos
    })
  }

  toggleTask = (e, i) => {
    let todos = this.state.todos
    todos[i].complete = !todos[i].complete;
    this.setState({
      todos: todos
    })
  }
  
  FilterTask = () => {

  }

  clearTasks = () => {
    let todos = this.state.todos.filter((todo) => {
      return todo.complete === false
    })
    this.setState({
      todos: todos
    });
    // render snacks to show 'Completed Todos removed'
    // snacks({ vertical: 'bottom', horizontal: 'center' })
  }

  render() {
    return (
      <div className="App">
            <Nav delTask={this.clearTasks}/>
            {/* <TodoInput addTask={this.addTask} /> */}
            <TodoList todos={this.state.todos} toggleTask={this.toggleTask} delTask={this.delTask} />
            <TodoModal addTask={this.addTask} />
          
      </div>
    );
  }
}

export default App;
