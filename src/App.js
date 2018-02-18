import React, { Component } from 'react';
// import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';
import TodoList from './components/TodoList'
import Nav from './components/Nav'
import TodoModal from './components/TodoModal'
import TodoInput from './components/TodoInput'

import Snackbar from 'material-ui/Snackbar';


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
    let todo = {
      task: e.target.task.value,
      complete: false
    }
    this.setState({
      todos: this.state.todos.concat(todo)
    })
    e.target.task.value = ""
  }

  delTask = (todo) => {
    // need to get key i from item 
    // let todos = this.state.todos.slice();
    //     todos.splice(id, 1);
    // let todos = this.state.todos.filter((todo) => {
    //   return todo
    // })
    // // this.state.todos.splice(id, 1);
    // this.setState({
    //   todos: this.state.todos
    // });
    console.log('removed:', todo);
    
    // // e.preventDefault()
    // console.log(e);
    // this.setState({
    //   todos: this.state.todos.filter(del => del !== e)
    //   // todos: this.state.todos.concat(task)
    // })

    // snacks({ vertical: 'bottom', horizontal: 'center' })

  }

  toggleTask = (e, i) => {
    let todos = this.state.todos
    todos[i].complete = !todos[i].complete;
    this.setState({
      todos: todos

    })
  }
  
clearTasksx = () => {

}


  render() {
    return (
      <div className="App">
            <Nav/>
            {/* <TodoInput addTask={this.addTask} /> */}
            <TodoList todos={this.state.todos} toggleTask={this.toggleTask} delTask={this.delTask} />
            <TodoModal addTask={this.addTask} />
          
      </div>
    );
  }
}

export default App;
