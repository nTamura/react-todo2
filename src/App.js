import React, { Component } from 'react';
import TodoList from './components/TodoList'
import Nav from './components/Nav'
import TodoModal from './components/TodoModal'
import SnackBar from 'material-ui/Snackbar';
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
    let todos = this.state.todos.filter((todo) => {
      return !todo.complete
    })
  }

  clearTasks = () => {
    // should trigger snacks to show 'Completed todos cleared'
    // snacks({ vertical: 'bottom', horizontal: 'center' })
    let todos = this.state.todos.filter((todo) => {
      return !todo.complete
    })
    this.setState({
      todos: todos
    });
  }

  render() {
    return (
      <div className="App">
        <Nav clearTasks={this.clearTasks}/>
        <TodoList todos={this.state.todos} 
          toggleTask={this.toggleTask} 
          delTask={this.delTask} 
        />
        <TodoModal addTask={this.addTask} />
        <SnackBar />
      </div>
    );
  }
}

export default App;
