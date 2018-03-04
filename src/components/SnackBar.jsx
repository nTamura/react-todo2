import React, { Component } from 'react';

class SnackBar extends Component {
  state = {
    open: true,
  };
  handleClick = () => {
    this.setState({ open: true });
  };

  handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    this.setState({ open: false });
  };

  render() {
    return (
        <SnackBar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          open={this.state.open}
          autoHideDuration={3000}
          onClose={this.handleClose}
          // SnackbarContentProps={{
          //   'aria-describedby': 'message-id',
          // }}
          message={<span id="message-id">Note archived</span>}
          action={[
           
            <IconButton
              key="close"
              aria-label="Close"
              color="inherit"
              className={classes.close}
              onClick={this.handleClose}
            >
              <CloseIcon />
            </IconButton>,
          ]}
        />
    );
  }
}

export default SnackBar;