import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import HomeIcon from '@material-ui/icons/Home';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper'
 
const useStyles = makeStyles((theme) => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    width: '100%'
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    // marginTop: theme.spacing.unit * 6,
    position: 'relative',
    display: 'flex',
    width: '100%',
    // padding: `${theme.spacing.unit * 6}px 0`,
    marginTop: 'calc(80vh + 250px)'
  }
}))
 
const Footer = (props) => {
  const classes = useStyles();
 
  return (
    <footer className={classes.footer}>
      <Paper className={classes.root} elevation={1}>
        <Typography variant="h5" component="h3">
          App Footer
        </Typography>
        <Typography component="p">
          @assignment
        </Typography>
      </Paper>
    </footer>
  );
}
 
 
export default Footer;