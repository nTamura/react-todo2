import React, { Component } from 'react';
import { ListItem, ListItemText, ListItemSecondaryAction } from 'material-ui/List';
import Button from 'material-ui/Button';
import Icon from 'material-ui/Icon';
import Tooltip from 'material-ui/Tooltip';

class TodoItem extends Component {
  
  handleClick = (todo,id) => {
    this.props.toggleTask(todo,id)
  }

  render() {
    const { todo, id } = this.props

    return (
      <ListItem button style={styles.todoItem}
        onClick={(e)=>{this.handleClick(todo,id)}} 
      >
        <input type="checkbox" 
          style={styles.checkbox}
          checked={todo.complete} 
          onClick={()=>{this.handleClick(todo,id)}}
          onChange={(e)=>{this.props.toggleTask(todo,id)}}
        />

        <ListItemText primary={todo.task} 
        style={ todo.complete ? styles.isComplete : null} />

        <ListItemSecondaryAction>

          <Tooltip title="Delete item">
            <Button size="small" style={styles.delete} onClick={this.props.delTask}>
              <Icon color="action">delete</Icon>
            </Button>
          </Tooltip>

        </ListItemSecondaryAction>

      </ListItem>     
    )
  }
}

const styles = {
  todoItem: {
    // marginRight: 20,
    // marginLeftt: 20
    },
  delete: {
    marginRight: 20
  },
  isComplete: {
    color: 'grey',
    textDecoration: 'line-through'
  },
  checkbox: {
    // marginRight: 20,
    // marginLeftt: 20
  }
}

export default TodoItem;