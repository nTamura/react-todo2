import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Modal from 'material-ui/Modal';
import Button from 'material-ui/Button';
import Icon from 'material-ui/Icon';
import TodoInput from './TodoInput';

function getModalStyle() {
  const top = 50
  const left = 50

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}
// const styles = StyleSheet.create({
//   bigblue: {
//     color: 'blue',
//     fontWeight: 'bold',
//     fontSize: 30,
//   },
//   red: {
//     color: 'red',
//   },
// });


// const styles = theme => ({
//   paper: {
//     position: 'absolute',
//     width: theme.spacing.unit * 50,
//     backgroundColor: theme.palette.background.paper,
//     boxShadow: theme.shadows[5],
//     padding: theme.spacing.unit * 4,
//   },
//   fab: {
//     position: 'fixed',
//     bottom: -10,
//     right: -10,
//   }
// });
class TodoModal extends React.Component {
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Button variant="fab" onClick={this.handleOpen} 
          style={styles.addButton} color='primary'>
          <Icon>edit</Icon>
        </Button>

        <Modal
          open={this.state.open}
          onClose={this.handleClose}
        >
          <div style={getModalStyle()} 
          
          style={styles.modal}>
          <TodoInput addTask={this.props.addTask} />
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
    width: '100%',
    backgroundColor: 'white',
    /* boxShadow: theme.shadows[5], */
    padding: 10 * 4
    
  },
  addButton: {
    position: 'fixed',
    bottom: 30,
    right: 30,
  }
}


// SimpleModal.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

// // We need an intermediary variable for handling the recursive nesting.
// const SimpleModalWrapped = withStyles(styles)(SimpleModal);

export default TodoModal;
// export default SimpleModalWrapped;