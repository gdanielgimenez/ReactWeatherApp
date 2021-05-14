import React from 'react';
import styles from './NavBar.module.css';
import Typography from '@material-ui/core/Typography';



const NavBar = ({weather}) => {
  return (
      <div className={styles.header}>
        <Typography className={styles.title}> time in {weather.name} {weather.localTime} {weather.localDate} </Typography>
      </div>
  );
}

export default NavBar;