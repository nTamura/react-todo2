import React from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Icon from 'material-ui/Icon';
import Tooltip from 'material-ui/Tooltip';

const Nav = (props) => {
  return (
      <AppBar position="static">
        <Toolbar>

          <Tooltip title="Filter Tasks">
            <Button size="small">
              <Icon color="action">find_replace</Icon>
            </Button>
          </Tooltip>

          <Typography variant="title" color="inherit"  
            style={styles.flex}
          >
            React-Todo App
          </Typography>

          <Tooltip title="Clear Done">
            <Button size="small" onClick={props.clearTasks}>
              <Icon color="action">clear_all</Icon>
            </Button>
          </Tooltip>

        </Toolbar>
      </AppBar>
  );
}

const styles = {
  flex: {
    flex: 1,
  }
};

export default Nav;