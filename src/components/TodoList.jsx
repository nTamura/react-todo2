import React, { Component } from 'react';
import List from 'material-ui/List';
import { CSSTransitionGroup } from 'react-transition-group'
import TodoItem from './TodoItem'

class TodoList extends Component {

  render() {
    const { todos } = this.props
    const allDone = todos.length <= 0
    
    const todoMap = todos.map((todo, i) => {
      // console.log(i)
      return (
        <CSSTransitionGroup  key={i}
        transitionName="example"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}>

          <TodoItem todo={todo} key={i} id={i}
            delTask={this.props.delTask} 
            toggleTask={this.props.toggleTask}
            />
   
        </CSSTransitionGroup>
      )
    });
    
    return (
      <div>
        {!allDone ? (
          <List> {todoMap} </List>
        ) : (
          <p>Hooray! There's nothing here 🙌 </p>
        )}
      </div>
    );
  }
}

export default TodoList;