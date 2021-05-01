import React from 'react';
import styles from './NavBar.module.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
//for the local time
// check for the day calculator to display the correct day when coming from london

const NavBar = ({weather}) => {
console.log(weather)
console.log(weather.localDate)

  return (
      <div className={styles.header}>
        <Typography className={styles.title}> time in {weather.name} {weather.localTime} {weather.localDate} </Typography>
      </div>
  );
}

export default NavBar;