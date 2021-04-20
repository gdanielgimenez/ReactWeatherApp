import React, { Component } from 'react';
import axios from 'axios';
import Search from './Search';
import SearchTwo from './SearchTwo';
import {Container, Typography} from '@material-ui/core';
import NavBar from './NavBar';
import './App.css';
class App extends Component{
  state ={
    weather:{
      name:'',temp:'', max:'', min:'', humidity:'', description:'',main:'',country:'',sunrise:'',sunset:'',lt:new Date(),timeZone:'',defaults:''
    }
  }
  componentDidMount() {
      let DefaultLocation = "London";
      axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${DefaultLocation}&units=metric&APPID=83887d83799dc9b74bffffc1b572c8a0`)
      .then( res =>{
            this.setState({weather:{ name:res.data.name,temp:res.data.main.temp, max:res.data.main.temp_max, min:res.data.main.temp_min, humidity:res.data.main.humidity, description:res.data.weather.[0].description,main:res.data.weather.[0].main,country:res.data.sys.country,sunrise:new Date(res.data.sys.sunrise*1000),sunset:new Date(res.data.sys.sunset*1000),lt:new Date(),timeZone:(res.data.timezone/60)/60}            
          })
          console.log(this.state);
      this.handleTime(this.state.weather.sunrise,this.state.weather.timeZone,this.state.weather.sunset,this.state.weather.lt,this.state.weather.main)
    })
  }
//function Storm
storm = (name) => {
  axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${name}&units=metric&APPID=83887d83799dc9b74bffffc1b572c8a0`)
    .then( res =>{
      
      this.setState({weather:{ name:res.data.name,temp:res.data.main.temp, max:res.data.main.temp_max, min:res.data.main.temp_min, humidity:res.data.main.humidity, description:res.data.weather.[0].description,main:res.data.weather.[0].main,country:res.data.sys.country, sunrise:new Date(res.data.sys.sunrise*1000),sunset: new Date(res.data.sys.sunset*1000),lt:new Date(),timeZone:(res.data.timezone/60)/60 } 
      })
      this.handleTime(this.state.weather.sunrise,this.state.weather.timeZone,this.state.weather.sunset,this.state.weather.lt,this.state.weather.main)
    })
}
//change sunrise sunset time to time zone of the location
handleTime= (time,dif,sunset,localTime,main) =>{
  let locale = time
  let difer= Number(dif)
  sunset.setHours(sunset.getHours()+ difer)
  let sunyBoi = sunset.toGMTString().slice(16,25)
  time.setHours(time.getHours() + difer)
  let sunSun = time.toGMTString().slice(16,25)
  let weather = this.state.weather
  localTime.setHours(localTime.getHours() + difer)
  let finalTime = localTime.toGMTString().slice(16,22)
    let Tod = () =>{ if(finalTime.slice(0,3) > 6 && finalTime.slice(0,3) <18){
        return "day"
        } else {
        return "night"
        }
      }
  let tod = Tod();
  weather.sunriseLocal = sunSun
  weather.sunsetLocal = sunyBoi
  weather.localTime = finalTime
  weather.Tod = tod
    let weatherIcons = (wd,timeOfDay) =>{
        let defaults;
        switch (wd +" "+ timeOfDay) {
          case "Clear day":
            defaults = {
              icon: 'CLEAR_DAY',
              color: 'goldenrod'
            }  
          break;
          case "Clear night":
              defaults = {
                icon: 'CLEAR_NIGHT',
                color: 'lightblue'
              }
          break;
          case "Clouds day":
              defaults = {
              icon: 'PARTLY_CLOUDY_DAY',
              color: 'lightgray'
            }  
          break;
          case "Clouds night":
            defaults = {
              icon: 'PARTLY_CLOUDY_NIGHT',
              color: 'lightblue'
            }  
          break;
          case "Rain night":
            defaults = {
            icon: 'RAIN',
            color: 'lightblue'
          }  
          break;
          case "Rain day":
            defaults = {
            icon: 'RAIN',
            color: 'lightgrey'
          }  
          break;
          case "Sleet night":
            defaults = {
            icon: 'SLEET',
            color: 'lightblue'
          }  
          break;
          case "Sleet day":
            defaults = {
            icon: 'SLEET',
            color: 'lightgray'
          }  
          break;
          case "Snow day" :
            defaults = {
            icon: 'SNOW',
            color: 'lightgray'
          }  
          break;
          case "Snow night":
            defaults = {
            icon: 'SNOW',
            color: 'lightblue'
          }  
          break;
          case "Windy day" :
            defaults = {
            icon: 'WIND',
            color: 'lightgray'
          }  
          break;
          case "Windy night":
            defaults = {
            icon: 'WIND',
            color: 'lightblue'
          }  
          break;
          case "Fog day" :
            defaults = {
            icon: 'FOG',
            color: 'lightgray'
          }  
          break;
          case "Fog night":
            defaults = {
            icon: 'FOG',
            color: 'lightblue'
          }  
          break;
          case "Mist day" :
            defaults = {
            icon: 'FOG',
            color: 'lightgray'
          }  
          break;
          case "Mist night":
            defaults = {
            icon: 'FOG',
            color: 'lightblue'
          }  
          break;
          case "Drizzle day" :
            defaults = {
            icon: 'SLEET',
            color: 'lightgray'
          }  
          break;
          case "Drizzle night":
            defaults = {
            icon: 'SLEET',
            color: 'lightblue'
          }  
          break;
          case "Haze day" :
            defaults = {
            icon: 'FOG',
            color: 'lightgray'
          }  
          break;
          case "Haze night":
            defaults = {
            icon: 'FOG',
            color: 'lightblue'
          }  
          break;
          default :
            defaults = {
            icon: 'CLEAR_DAY',
            color: 'lightyellow'
          }  
          break;
        }
        return defaults
      }
    let defaults = weatherIcons(main,weather.Tod)
    weather.defaults = defaults;
    weather.icon = defaults.icon;
    weather.color=defaults.color;
    this.setState({weather}) 
  }
  render() {
    return (
      <div >
        <NavBar />
        <Container align="center" >
            <SearchTwo  weather={this.state.weather} storm={this.storm}/>
        </Container>
      </div>
    );
  }
}

export default App;
