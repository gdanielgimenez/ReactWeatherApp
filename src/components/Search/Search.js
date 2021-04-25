import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import { Button, Card, CardContent, CardHeader, Container, Typography, Grid, CardMedia } from '@material-ui/core';
import Brightness2Icon from '@material-ui/icons/Brightness2';
import BrightnessHighIcon from '@material-ui/icons/BrightnessHigh';
import ReactAnimatedWeather from 'react-animated-weather';
import CountUp from 'react-countup';
import styles from './Search.module.css';

const Search = ({weather, storm}) =>{
//set the state with hooks
    const [location,setLocation] = useState('')
//-------------------------------------------------
//functions---------------------------------------------------------------------------
        const handleSubmit = (e) =>{
            e.preventDefault();
            storm(location)
            setLocation('')
        }
        const handleChange = (e)=>{
            setLocation(document.getElementById("textSearch").value)
        }
//--------------------------------------------------------------------------------
        let defaults = {
            size: 100,
            animate: true
        }
        const displayWeather = 
        <Grid item xs={12}>
            <Card variant="outlined" className={styles.root}>
                <CardHeader title={weather.name +" "+ weather.country}  subheader={weather.description}/>
                <CardMedia className={styles.media}> 
                <ReactAnimatedWeather
                      icon={weather.icon}
                      color={weather.color}
                      size={defaults.size}
                      animate={defaults.animate}
                />
                 </CardMedia>
                <CardContent>
                    <Typography variant="h5"> Temp : <CountUp end={Number(weather.temp)} decimals={1} duration={6} /> °C</Typography>
                    <Typography variant="subtitle1"> Max : <CountUp end={Number(weather.max)} decimals={1} duration={6}/> °C</Typography>
                    <Typography variant="subtitle1"> Min : <CountUp end={Number(weather.min)} decimals={1} duration={6}/> °C</Typography>
                    <Typography variant="subtitle1"> Humidity : <CountUp  end={Number(weather.humidity)} duration={6}/>  %</Typography>
                    <Typography variant="subtitle1" > Sunrise : {weather.sunriseLocal} <BrightnessHighIcon/> </Typography>
                    <Typography variant="subtitle1">  Sunset : {weather.sunsetLocal}   <Brightness2Icon fontSize="small"/></Typography>
                    <Typography variant="subtitle2" > time in {weather.name} :  {weather.localTime} </Typography>
                </CardContent>
            </Card>
        </Grid>    
        return(
            <div>
                <Container  xs={12}>
                <Typography variant="h5" className={styles.title}>Get the current weather on any city</Typography>
                   <form onSubmit={handleSubmit} >
                    <TextField  required onChange={handleChange} className={styles.outlinedRoot}  
                            id="textSearch"
                            label="Enter location"
                            type="input"
                            value={location}
                            margin="normal"
                            variant="outlined"       
                        /><br/>
                        <Button type="submit" variant="contained" className={styles.button}  >
                        <Typography className={styles.text}> submit</Typography> 
                        </Button>
                   </form>
                </Container><br/>
                <Grid  align="center"  >
                    {displayWeather}
                </Grid>
            </div>
        )
}
export default Search;