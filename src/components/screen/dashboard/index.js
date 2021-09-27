import React, { useState } from "react";
import clsx from "clsx";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import {
  Drawer,
  List,
  ListItem,
  Divider,
  ListItemText,
} from "@material-ui/core";
import { useStyles } from "./style";
import { Route, Link, useParams } from "react-router-dom";
import CloseIcon from "@material-ui/icons/Close";
import AllCountry from "../allCountry/index";
import Register from "../register/index";

const Dashboard = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const title = () => {
    window.location.reload();
  };

  const handleDrawerOpen = () => {
    setOpen(true);
    setClicked(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
    setClicked(false);
  };

  const [clicked, setClicked] = useState();

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appbar}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            {clicked ? (
              <CloseIcon onClick={handleDrawerClose} />
            ) : (
              <MenuIcon onClick={handleDrawerOpen} />
            )}
          </IconButton>
          <Typography className={classes.title} onClick={title}>
            {" "}
            Covid-19 App
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Divider />
        <List>
          <Link to="/allCountry" className={classes.link}>
            <ListItem button onClick={handleDrawerClose}>
              <ListItemText primary="All Countries" />
            </ListItem>
          </Link>
          <Link to="/co" className={classes.link}>
            <ListItem button onClick={handleDrawerClose}>
              <ListItemText primary="Countries" />
            </ListItem>
          </Link>
          <Link to="/register" className={classes.link}>
            <ListItem button onClick={handleDrawerClose}>
              <ListItemText primary="Register Case" />
            </ListItem>
          </Link>
        </List>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />

        <Typography>
          <br />
        </Typography>
        <Route path="/allCountry">
          <AllCountry />
        </Route>
        <Route path="/country">
          <AllCountry />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
      </main>
    </div>
  );
};

export default Dashboard;
