import React from "react";
import { Link, NavLink} from 'react-router-dom';
import {makeStyles, AppBar, Toolbar, Typography} from "@material-ui/core";

  
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      boxShadow: "none",
      backgroundColor: "red"
    },
    title: {
      flexGrow: 1
    }
  }));

function NavBar(){
    const classes = useStyles();
  
    return (
      <div className={classes.root}>
         <AppBar position="static" style={{ background: '#557788' }}>
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              Pay or Save: The App That Teaches You To Save!
            </Typography>
          
            <NavLink color="inherit" as={ Link } to="/"> Home </NavLink> <span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp;</span>
            <NavLink color="inherit" as={ Link } to="/allpayments"> All Payments </NavLink>
       
          </Toolbar>
        </AppBar>
      </div>
    );
  }


export default NavBar; 