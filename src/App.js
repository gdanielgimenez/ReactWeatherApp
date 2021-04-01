import React, { Component } from 'react';
import axios from 'axios';
import Search from './Search';
import {Container, Typography} from '@material-ui/core';
import nightForest from './images/nightForest.jpg';
import {withStyles} from '@material-ui/core/styles';
import Parent from './Parent';
import NavBar from './NavBar';
const styles = theme =>({
    conte:{
      backgroundImage:`url(${nightForest})`,
      //height: 1356,
    }
})
class App extends Component{
  state ={
    weather:{
      name:'',temp:'', max:'', min:'', humidity:'', description:'',main:'',country:'',sunrise:'',sunset:'',lt:new Date(),timeZone:''
    }
  }
  componentDidMount() {
    let DefaultLocation = "London";
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${DefaultLocation}&units=metric&APPID=83887d83799dc9b74bffffc1b572c8a0`)
    .then( res =>{
      console.log(res);
      this.setState({weather:{ name:res.data.name,temp:res.data.main.temp, max:res.data.main.temp_max, min:res.data.main.temp_min, humidity:res.data.main.humidity, description:res.data.weather.[0].description,main:res.data.weather.[0].main,country:res.data.sys.country,sunrise:new Date(res.data.sys.sunrise*1000),sunset:new Date(res.data.sys.sunset*1000),lt:new Date(),timeZone:(res.data.timezone/60)/60}    
    })
    this.handleTime(this.state.weather.sunrise,this.state.weather.timeZone,this.state.weather.sunset,this.state.weather.lt)
      console.log(this.state.weather);
    })
  }
//function Storm
storm = (name) => {
  axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${name}&units=metric&APPID=83887d83799dc9b74bffffc1b572c8a0`)
    .then( res =>{
      console.log(res);
      this.setState({weather:{ name:res.data.name,temp:res.data.main.temp, max:res.data.main.temp_max, min:res.data.main.temp_min, humidity:res.data.main.humidity, description:res.data.weather.[0].description,main:res.data.weather.[0].main,country:res.data.sys.country, sunrise:new Date(res.data.sys.sunrise*1000),sunset: new Date(res.data.sys.sunset*1000),lt:new Date(),timeZone:(res.data.timezone/60)/60 } 
      })
      this.handleTime(this.state.weather.sunrise,this.state.weather.timeZone,this.state.weather.sunset,this.state.weather.lt)
      console.log(this.state.weather);
    })
}
//change sunrise sunset time to time zone of the location
handleTime= (time,dif,sunset,localTime) =>{
  let locale = time
  let difer= Number(dif)
  //properhours
  sunset.setHours(sunset.getHours()+ difer)
  let sunyBoi = sunset.toGMTString().slice(16,25)
  time.setHours(time.getHours() + difer)
  let sunSun = time.toGMTString().slice(16,25)
  let weather = this.state.weather
  //----------------------------------
  console.log(localTime)
  localTime.setHours(localTime.getHours() + difer)
  let finalTime = localTime.toGMTString().slice(16,22)
  console.log(finalTime.slice(0,3))
   let Tod = () =>{ if(finalTime.slice(0,3) > 6 && finalTime.slice(0,3) <18){
      return "day"
    } else {
      return "night"
   }
  };

  let tod = Tod();
  weather.sunriseLocal = sunSun
  weather.sunsetLocal = sunyBoi
  weather.localTime = finalTime
  weather.Tod = tod
  this.setState({weather}) 
  
  }
  render() {
    const {classes, theme}= this.props
    return (
      <Parent>
       
      <Container align="center" >
          <Search  weather={this.state.weather} storm={this.storm}/>
      </Container>
      </Parent>
    );
  }
}

export default withStyles(styles, {withTheme:true}) (App);
