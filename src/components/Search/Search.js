import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import { Button, Card, CardContent, CardHeader, Container, Typography, Grid, CardMedia, FormControl } from '@material-ui/core';
import Brightness2Icon from '@material-ui/icons/Brightness2';
import BrightnessHighIcon from '@material-ui/icons/BrightnessHigh';
import ReactAnimatedWeather from 'react-animated-weather';
import CountUp from 'react-countup';
import styles from './Search.module.css';
import PublicIcon from '@material-ui/icons/Public';


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
            size: 125,
            animate: true
        }
        const displayWeather = 
    /*        
            <Card variant="elevation" className={styles.root} >         
                        <Typography className={styles.cardTitle} variant="h6">{weather.name} <Typography variant="body1">{weather.country}</Typography><Typography variant="h6"> {weather.description}</Typography></Typography>
                        <CardMedia className={styles.icons}  >    
                            <Typography variant="h5"> <CountUp end={Number(weather.temp)} decimals={1} duration={6} /> °C</Typography>
                            <ReactAnimatedWeather
                                icon={weather.icon}
                                color={weather.color}
                                size={defaults.size}
                                animate={defaults.animate}
                            />
                        </CardMedia> 
                        <CardContent className={styles.data}> 
                            <Typography variant="subtitle1"> Max : <CountUp end={Number(weather.max)} decimals={1} duration={6}/> °C</Typography>
                            <Typography variant="subtitle1"> Min : <CountUp end={Number(weather.min)} decimals={1} duration={6}/> °C</Typography>
                            <Typography variant="subtitle1"> Humidity : <CountUp  end={Number(weather.humidity)} duration={6}/>  %</Typography>
                            <Typography variant="subtitle1" > Sunrise : {weather.sunriseLocal} <BrightnessHighIcon/> </Typography>
                            <Typography variant="subtitle1">  Sunset : {weather.sunsetLocal}   <Brightness2Icon fontSize="small"/></Typography>
                        </CardContent>   
            </Card>*/
            <Grid xs={9}  className={styles.root} >
                      
                     <Grid item  xs={12} md={3}>
                        <Typography className={styles.cardTitle} variant="h6">{weather.name} <Typography variant="body1">{weather.country}</Typography><Typography variant="h6"> {weather.description}</Typography></Typography>
                    </Grid> 
                    <Grid item xs={12} md={3} className={styles.icons}> 
                        <Typography variant="h5"> <CountUp end={Number(weather.temp)} decimals={1} duration={6} /> °C</Typography>
                        <ReactAnimatedWeather
                                icon={weather.icon}
                                color={weather.color}
                                size={defaults.size}
                                animate={defaults.animate}
                        />
                    </Grid>
                    <Grid item xs={12} md={3} className={styles.data}>
                            <Typography variant="subtitle1"> Max : <CountUp end={Number(weather.max)} decimals={1} duration={6}/> °C</Typography>
                            <Typography variant="subtitle1"> Min : <CountUp end={Number(weather.min)} decimals={1} duration={6}/> °C</Typography>
                            <Typography variant="subtitle1"> Humidity : <CountUp  end={Number(weather.humidity)} duration={6}/>  %</Typography>
                            <Typography variant="subtitle1" > Sunrise : {weather.sunriseLocal} <BrightnessHighIcon/> </Typography>
                            <Typography variant="subtitle1">  Sunset : {weather.sunsetLocal}   <Brightness2Icon fontSize="small"/></Typography>
                                            
                    </Grid>   
            </Grid>      
        return(
            <div>
                <Container  xs={12} >
                <Typography variant="h5" className={styles.title}>Get the current weather on any city</Typography>
                   <form  className={styles.form} onSubmit={handleSubmit} >
                    
                    <TextField  required onChange={handleChange} className={styles.outlinedRoot}  
                            id="textSearch"
                            label="Enter location"
                            type="input"
                            value={location}
                            margin="normal"
                        />
                        <Button type="submit" variant="contained" className={styles.button}  >
                        <Typography className={styles.text}> submit</Typography> 
                        </Button>
                        </form>
                    </Container>

                <div>
                    {displayWeather}
                </div>
            </div>
        )
}
export default Search;