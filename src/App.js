import React, { Component } from 'react';
import axios from 'axios';
import Search from './Search';
import {Container, Typography} from '@material-ui/core'
class App extends Component{
  state ={
    weather:{
      name:'',temp:'', max:'', min:'', humidity:'', description:''
    }
  }
  componentDidMount() {
    let DefaultLocation = "London";
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${DefaultLocation}&units=metric&APPID=83887d83799dc9b74bffffc1b572c8a0`)
    .then( res =>{
      console.log(res);
      this.setState({weather:{ name:res.data.name,temp:res.data.main.temp, max:res.data.main.temp_max, min:res.data.main.temp_min, humidity:res.data.main.humidity, description:res.data.weather.[0].description } 
      })
      console.log(this.state.weather);
    })
  }

//function Storm
storm = (name) => {
  axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${name}&units=metric&APPID=83887d83799dc9b74bffffc1b572c8a0`)
    .then( res =>{
      console.log(res);
      this.setState({weather:{ name:res.data.name,temp:res.data.main.temp, max:res.data.main.temp_max, min:res.data.main.temp_min, humidity:res.data.main.humidity, description:res.data.weather.[0].description } 
      })
      console.log(this.state.weather);
    })
}
  render() {
    return (
      <Container align="center">
        <Typography variant="h1" color="textSecondary"> weather app</Typography>
          <Search  weather={this.state.weather} storm={this.storm}/>
      </Container>
    );
  }
}

export default App;
