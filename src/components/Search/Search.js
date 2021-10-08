import React, {useState,useEffect} from 'react';
import TextField from '@material-ui/core/TextField';
import { Button, Container, Typography, Grid } from '@material-ui/core';
import Brightness2Icon from '@material-ui/icons/Brightness2';
import BrightnessHighIcon from '@material-ui/icons/BrightnessHigh';
import ReactAnimatedWeather from 'react-animated-weather';
import CountUp from 'react-countup';
import styles from './Search.module.css';
import { useSpeechContext} from '@speechly/react-client'; 


const Search = ({weather, storm}) =>{
//set the state with hooks
    const [location,setLocation] = useState('')
//-------------------------------------------------
const {segment} = useSpeechContext();
//functions---------------------------------------------------------------------------
        const handleSubmit = (e) =>{
            e.preventDefault();
            storm(location)
            setLocation('')
        }
        //-----------------------
        const handleChange = (e)=>{
            setLocation(document.getElementById("textSearch").value)
        }
        //--------------------------------------------------------------------------------
        let defaults = {
            size: 125,
            animate: true
        }
        useEffect(()=>{
            if(segment){
                if(segment.intent.intent === 'weather_in' && segment.entities.[0] !== undefined && segment.isFinal){
                    storm(segment.entities.[0].value);    
                } else{
                    console.log('try again');
                }
            }
        },[segment])
        const displayWeather = 
            <Grid className={styles.root} >
                      
                     <Grid item  xs={12} md={3}>
                        <Typography className={styles.cardTitle}>{weather.name} <Typography >{weather.country}</Typography><Typography> {weather.description}</Typography></Typography>
                    </Grid> 
                    <Grid item xs={12} md={3} className={styles.icons}> 
                        <Typography > <CountUp end={Number(weather.temp)} decimals={1} duration={6} /> °C</Typography>
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
            
            let words = 
            <Typography>
            {segment && (
                <>
                  {segment.words.map((w)=> w.value).join(" ")};

                </>
                )} 
            </Typography>
        return(
            <div >
                <Container >
                <Typography variant="h5" className={styles.title}>Get the current weather on any city</Typography>
                   <div className={styles.title}>
                            {words}    
                   </div>
                   <form id="form" className={styles.form} onSubmit={handleSubmit} >
                    
                    <TextField  required onChange={handleChange} className={styles.outlinedRoot}  
                            id="textSearch"
                            label="Enter location"
                            type="input"
                            value={location}
                            margin="normal"
                        />
                        <Button type="submit" id="button" variant="contained" className={styles.button}  >
                        <Typography className={styles.text}> submit</Typography> 
                        </Button>
                        </form>
                    </Container>

                <div > 
                    {displayWeather}
                </div>
            </div>
        )
}
export default Search;