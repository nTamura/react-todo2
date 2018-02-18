import React, { Component } from 'react';
import { ListItem } from 'material-ui/List';

class TodoItem extends Component {
  
  handleClick = (todo,id) => {
    this.props.toggleTask(todo,id)
  }

  render() {
    const { todo, id } = this.props

    return (
      <ListItem button 
        onClick={(e)=>{this.handleClick(todo,id)}} 
      >
        <input type="checkbox" 
          style={styles.checkbox}
          checked={todo.complete} 
          onClick={()=>{this.handleClick(todo,id)}}
          onChange={(e)=>{this.props.toggleTask(todo,id)}}
        />

        <span style={ todo.complete ? 
          styles.isComplete : null}
        >
          {todo.task}
        </span>

      </ListItem>     
    )
  }
}

const styles = {
  isComplete: {
    color: 'grey',
    textDecoration: 'line-through'
  },
  checkbox: {
    marginRight: 20
  }
}

export default TodoItem;