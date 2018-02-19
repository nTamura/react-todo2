import React, { Component } from 'react';
import TodoList from './components/TodoList'
import Nav from './components/Nav'
import TodoModal from './components/TodoModal'
// import Snackbar from 'material-ui/Snackbar';


import './App.css';

const todos = [
  {
    task: 'make React todo list',
    complete: false
  }, {
    task: 'click on item to complete',
    complete: false
  },{
    task: 'style todo list',
    complete: true
  },{
    task: 'submit',
    complete: true
  },{
    task: 'eat dinner',
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

  delTask = (todo) => {
    console.log('delete task');
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
