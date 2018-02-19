import React from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
// import Icon from 'material-ui/Icon';

// prob dont need footer. 

const Footer = (props) => {
  return (
      <AppBar position="fixed" style={styles.footer}>
        <Toolbar>
          <Typography variant="title" color="inherit"  
            style={styles.flex}>
           Footer
          </Typography>
        </Toolbar>
      </AppBar>
  );
}

const styles = {
  footer: {
    height: 50,
    right: 0,
    bottom: 0,
    left: 0
  },
  flex: {
    flex: 1,
  }
};

export default Footer;