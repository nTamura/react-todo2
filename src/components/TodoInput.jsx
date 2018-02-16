import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';

class TodoInput extends Component {
  render() {
    return (
      
      <form onSubmit={this.props.addTask}>
        <TextField id="full-width" InputLabelProps={{
            shrink: true,
          }}
          placeholder="Add a todo item"
          // fullWidth
          margin="normal"
          name="task"
        />
        <Button variant="raised" type="submit">
          Submit
        </Button>

        {/* <Button variant="fab" color="primary">
        <Icon color="action">edit</Icon>
      </Button>
          use for modal add task 
      */}
      </form>
    );
  }
}

export default TodoInput;