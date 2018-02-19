import React from 'react';
import Modal from 'material-ui/Modal';
import Button from 'material-ui/Button';
import Icon from 'material-ui/Icon';
import TodoInput from './TodoInput';

class TodoModal extends React.Component {
  state = { open: false };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <div>
        <Button variant="fab" 
          onClick={this.handleOpen} 
          style={styles.addButton} 
          color='primary'>
          <Icon>edit</Icon>
        </Button>

        <Modal open={this.state.open}
          onClose={this.handleClose}>
          <div style={styles.modal}>
            <TodoInput addTask={this.props.addTask} 
              handleClose={this.handleClose}
              style={styles.modalInput} />
          </div>
        </Modal>
      </div>
    );
  }
}

const styles = {
  modal: {
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    position: 'absolute',
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 30
  },
  modalInput: {
    
  },

  addButton: {
    position: 'fixed',
    bottom: 30,
    right: 30,
  }
}

export default TodoModal;