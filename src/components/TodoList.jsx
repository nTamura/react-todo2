import React, { Component } from 'react';
import List from 'material-ui/List';

import TodoItem from './TodoItem'

class TodoList extends Component {

  render() {
    const { todos } = this.props

    const todoMap = todos.map((todo, i) => {
      // console.log(i)
      return (
        <TodoItem todo={todo} key={i} id={i}
          delTask={this.props.delTask} 
          toggleTask={this.props.toggleTask}
        />
      )
    });

    return (
      <div>
        <List>
          {todoMap}
        </List>
      </div>
    );
  }
}


export default TodoList;