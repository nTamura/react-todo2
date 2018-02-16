import React, { Component } from 'react';
import { ListItem } from 'material-ui/List';
import Button from 'material-ui/Button';
import Icon from 'material-ui/Icon';


class TodoItem extends Component {
  render() {
    
    const { todo, i } = this.props

    return (
      <ListItem key={i}>
        <p style={{ flex: 1 }}>{todo.task}</p>
        <Button size="small" onClick={() => { this.props.delTask(todo)}} >
          <Icon color="action">delete</Icon>
        </Button>
      </ListItem>     
    )
  }
}

export default TodoItem;