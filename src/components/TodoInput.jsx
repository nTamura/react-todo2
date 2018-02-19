import React, { Component } from 'react';
import TextField from 'material-ui/TextField';

class TodoInput extends Component {

  // handleSubmit = (e) => {
  //   // on form submit, page refreshes, need to chain modal close 
  //   e.preventDefault;
  //   this.props.addTask;
  //   this.props.handleClose
  // }

  render() {
    const { addTask } = this.props

    return (
      <form onSubmit={addTask}>
        <TextField fullWidth autoFocus
          placeholder="Add a todo item"
          margin="normal"
          name="task"
          style={styles.input} />
      </form>
    );
  }
}

const styles = {
  input: {
  
  }
}

export default TodoInput;