import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import HomeIcon from '@material-ui/icons/Home';
import { makeStyles } from '@material-ui/core/styles';
 
const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  }
}))

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar>
            <IconButton color="inherit" aria-label="Open drawer">
              <HomeIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" noWrap>
              Assignment
            </Typography>
          </Toolbar>
    </AppBar>
  )
}

 
export default Header;