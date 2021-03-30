import React, { Component } from 'react';
import axios from 'axios';
import Search from './Search';
import {Container, Typography} from '@material-ui/core';
import greenForest from './images/greenForest.jpg';
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
    const {classes, theme}= this.props
    return (
      <Parent>
        <NavBar />
      <Container align="center" >
          <Search  weather={this.state.weather} storm={this.storm}/>
      </Container>
      </Parent>
    );
  }
}

export default withStyles(styles, {withTheme:true}) (App);
