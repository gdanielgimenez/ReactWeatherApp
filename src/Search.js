import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import { Button, Card, CardContent, CardHeader, Container, Typography, Grid, CardMedia } from '@material-ui/core';
import {withStyles, fade} from '@material-ui/core/styles';
import Brightness2Icon from '@material-ui/icons/Brightness2';
import BrightnessHighIcon from '@material-ui/icons/BrightnessHigh';
import ReactAnimatedWeather from 'react-animated-weather';
import CountUp from 'react-countup';




const styles = theme =>({
    title:{
    color:"snow",
    fontWeight:"bold",
    paddingTop:"50px",
    paddingBottom:"15px"
    },
    root: {
      maxWidth: 250,
      background:"snow",
      borderRadius:"25px",
    },
    outlinedRoot :{
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: "azure",
        }
    },
    button:{
        backgroundColor:"royalblue",
        '&:hover': {
            backgroundColor: "lightblue",
        }
    },
    text:{
        color:"snow"
    },
      media: {
        height:100,
      }
})

class Search extends Component{
    //define the state
    state ={
        location :''
    }
    //functions
    handleSubmit = (e) =>{
        e.preventDefault();
        console.log(this.state.location)
        //function through props
        this.props.storm(this.state.location)
        this.setState({location:''})
    }
    handleChange = (e)=>{
        this.setState({location:document.getElementById("textSearch").value})
    }
    //function for the weather icons
    render(){
        //destructuring props
        const {weather, storm,classes,theme} = this.props
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
                      icon={this.props.weather.icon}
                      color={this.props.weather.color}
                      size={defaults.size}
                      animate={defaults.animate}
                />
                 </CardMedia>
                <CardContent>
                    <Typography variant="h5"> Temp : <CountUp end={weather.temp} decimals={1} duration={6} /> °C</Typography>
                    <Typography variant="subtitle1"> Max : <CountUp end={weather.max} decimals={1} duration={6}/> °C</Typography>
                    <Typography variant="subtitle1"> Min : <CountUp end={weather.min} decimals={1} duration={6}/> °C</Typography>
                    <Typography variant="subtitle1"> Humidity : <CountUp  end={weather.humidity} duration={6}/>  %</Typography>
                    <Typography variant="subtitle1" > sunrise : {weather.sunriseLocal} <BrightnessHighIcon/> </Typography>
                    <Typography variant="subtitle1">  Sunset : {weather.sunsetLocal}   <Brightness2Icon fontSize="small"/></Typography>
                    <Typography variant="subtitle2" >  current time in {weather.name} :  {weather.localTime} </Typography>
                </CardContent>
            </Card>
        </Grid>    
        return(
            <div>
                <Container  xs={12}>
                <Typography variant="h5" className={classes.title}>Get the current weather on any city</Typography>
                    <TextField required onChange={this.handleChange} inputProps={{className:classes.outlinedRoot}} 
                        id="textSearch"
                        label="Enter location"
                        type="search"
                        value={this.state.location}
                        margin="normal"
                        variant="outlined"       
                    /><br/>
                    <Button onClick={this.handleSubmit} variant="contained" className={classes.button}  >
                       <Typography className={classes.text}> submit</Typography> 
                    </Button>
                </Container><br/>
                <Grid  align="center"  >
                {displayWeather}
                </Grid>
            </div>
        )
    }
}
export default withStyles(styles,{withTheme:true}) (Search);