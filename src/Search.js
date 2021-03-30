import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import { Button, Card, CardContent, CardHeader, Container, Typography, Grid } from '@material-ui/core';
import {withStyles, fade} from '@material-ui/core/styles';

const styles = theme =>({
    title:{
    color:"cornsilk",
    fontWeight:"bold",
    paddingTop:"75px",
    paddingBottom:"15px"
    },
    root: {
      maxWidth: 345,
      background:"snow",
      borderRadius:"25px"
    },
    outlinedRoot :{
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: "azure",
        }
    },
      media: {
        heigh:10,
        paddingTop: '56.25%', // 16:9
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
    render(){
        //destructuring props
        const {weather, storm,classes,theme} = this.props
        const displayWeather = 
        <Grid item xs={6}>
            <Card variant="outlined" className={classes.root}>
                <CardHeader title={weather.description} subheader={weather.name}/>
                <CardContent>
                    <Typography variant="subtitle1"> Temp : {weather.temp} °C</Typography>
                    <Typography variant="subtitle1"> Max : {weather.max} °C</Typography>
                    <Typography variant="subtitle1"> Min : {weather.min} °C</Typography>
                    <Typography variant="subtitle1"> Humidity : {weather.humidity} %</Typography>
                </CardContent>
            </Card>
        </Grid>    
        return(
            <div>
                <Container spacing={6}>
                <Typography variant="h5" className={classes.title}>Get the current weather on any Location</Typography>
                    <TextField required onChange={this.handleChange} inputProps={{className:classes.outlinedRoot}} 
                        id="textSearch"
                        label="Enter your Location (city) "
                        type="search"
                        value={this.state.location}
                        margin="normal"
                        variant="outlined"
                        
                    /><br/>
                    <Button onClick={this.handleSubmit}  variant="contained" color="primary">
                        submit
                    </Button>
                </Container><br/>
                <Grid  align="center" >
                {displayWeather}
                </Grid>
            </div>
        )
    }
}
export default withStyles(styles,{withTheme:true}) (Search);