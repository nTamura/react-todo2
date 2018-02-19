import React, { Component } from 'react';
import List from 'material-ui/List';
import { CSSTransitionGroup } from 'react-transition-group'
import TodoItem from './TodoItem'
import doneDino from '../img/doneDino.gif'
class TodoList extends Component {

  render() {
    const { todos } = this.props
    const allDone = todos.length <= 0    
    const todoMap = todos.map((todo, i) => {
      return (
        <CSSTransitionGroup  key={i}
          transitionName="example"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}>
          <TodoItem todo={todo} key={i} id={i}
            delTask={this.props.delTask} 
            toggleTask={this.props.toggleTask}/>
        </CSSTransitionGroup>
      )
    });
    
    return (
      <div>
        {!allDone ? (
          <List> {todoMap} </List>
        ) : (
          <div>
            <img src={doneDino} style={styles.dino} alt="All done!"/>
            <p>Hooray! There's nothing here</p>
          </div>
        )}
      </div>
    );
  }
}

const styles={
  dino: {
    paddingTop: 20,
    height: 120,
    width: 'auto'
  }
}
export default TodoList;