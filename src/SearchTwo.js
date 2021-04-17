import React, {useState} from 'react';
import useStyles from './style';
import TextField from '@material-ui/core/TextField';
import { Button, Card, CardContent, CardHeader, Container, Typography, Grid, CardMedia } from '@material-ui/core';
import Brightness2Icon from '@material-ui/icons/Brightness2';
import BrightnessHighIcon from '@material-ui/icons/BrightnessHigh';
import ReactAnimatedWeather from 'react-animated-weather';
import CountUp from 'react-countup';

const SearchTwo = ({weather, storm}) =>{
//set the state with hooks
    const [location,setLocation] = useState('')
//-------------------------------------------------
    const classes = useStyles();
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
            <Card variant="outlined" className={classes.root}>
                <CardHeader title={weather.name +" "+ weather.country}  subheader={weather.description}/>
                <CardMedia className={classes.media}> 
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
                <Typography variant="h5" className={classes.title}>Get the current weather on any city</Typography>
                    <TextField required onChange={handleChange} inputProps={{className:classes.outlinedRoot}} 
                        id="textSearch"
                        label="Enter location"
                        type="search"
                        value={location}
                        margin="normal"
                        variant="outlined"       
                    /><br/>
                    <Button onClick={handleSubmit} variant="contained" className={classes.button}  >
                       <Typography className={classes.text}> submit</Typography> 
                    </Button>
                </Container><br/>
                <Grid  align="center"  >
                    {displayWeather}
                </Grid>
            </div>
        )
}
export default SearchTwo;