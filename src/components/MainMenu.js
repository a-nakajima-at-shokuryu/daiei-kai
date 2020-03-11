import React, { useState } from 'react';
import {
  CssBaseline,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Drawer,
  Divider,
  makeStyles,
  createMuiTheme,
  MuiThemeProvider,
} from '@material-ui/core';
import { 
  Menu as MenuIcon, 
  ChevronLeft as ChevronLeftIcon,  
  Home as HomeIcon, 
} from '@material-ui/icons';
import { blue } from '@material-ui/core/colors';
import clsx from 'clsx';
import { Link } from 'react-router-dom';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex', 
  }, 
  appbar: {
    transitoin: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp, 
      duration: theme.transitions.duration.leavingScreen, 
    }), 
  }, 
  appbarShift: {
    width: `calc(100% - ${drawerWidth}px)`, 
    marginLeft: drawerWidth, 
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut, 
      duration: theme.transitions.duration.enteringScreen, 
    }), 
  }, 
  grow: {
    flexGrow: 1, 
  }, 
  drawer: {
    flaxShrink: 0, 
  }, 
  drawerPaper: {
    width: drawerWidth, 
  }, 
  drawerHeader: {
    display: 'flex', 
    alignItems: 'center', 
    padding: theme.spacing(0, 1), 
    ...theme.mixins.toolbar, 
    justifyContent: 'flex-end', 
  }, 
  content: {
    flexGrow: 1, 
    padding: theme.spacing(3), 
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp, 
      duration: theme.transitions.duration.leavingScreen,  
    }), 
    marginLeft: 0, 
    marginTop: theme.mixins.toolbar.minHeight, 
  }, 
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut, 
      duration: theme.transitions.duration.enteringScreen, 
    }), 
    marginLeft: drawerWidth, 
  }, 
}));

const MainMenu = ({
  title = '株式会社ショクリュー', 
  children = 'content here...', 
  renderSideMenu = 'render sidemenu here...'
}) => {
  const [open, setOpen] = useState(true);
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" 
        className={clsx(
          classes.appbar, {
            [classes.appbarShift]: open, 
          }, 
        )}
      >
        <Toolbar>
          <IconButton color="inherit" edge="start" onClick={() => setOpen(!open)}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">
            {title}
          </Typography>
          <div className={classes.grow} />
          <IconButton component={Link} to="/" color="inherit">
            <HomeIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer variant="persistent" anchor="left" open={open}
        className={clsx(
          classes.drawer, 
        )}
        classes={{
          paper: classes.drawerPaper, 
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={() => setOpen(false)}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        {renderSideMenu}
      </Drawer>
      <main
        className={clsx(
          classes.content, {
            [classes.contentShift]: open
          }, 
        )}
      >
        {children}
      </main>
    </div>
  )
}

const theme = createMuiTheme({
  palette: { primary: { main: blue[700], }, }, 
})
const provider = Component => props => (
  <MuiThemeProvider theme={theme}>
    <Component {...props} />
  </MuiThemeProvider>
);
export default provider(MainMenu);
