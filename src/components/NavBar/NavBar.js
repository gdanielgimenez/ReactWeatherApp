import React from 'react';
import styles from './NavBar.module.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

//for the local time
// <Typography variant="subtitle2" > time in {weather.name} :  {weather.localTime} </Typography>
//need to pass the weather object first
const NavBar = () => {
  return (
    <div className={styles.root}>  
        <Toolbar>
          <Typography variant="h4" align="center" className={styles.title}>
            Weather App
          </Typography>
        </Toolbar> 
    </div>
  );
}

export default NavBar;