import React, { Component } from 'react';
import {Container} from '@material-ui/core';
import { Search, NavBar,Cards } from './components';
import { fetchData, fetchLocation, fetchWeeklyData } from './api';
import { handleTime} from './components';
import './App.module.css';


class App extends Component{
  state = {
    weather:{
     name:'',temp:'', max:'', min:'', humidity:'', description:'',main:'',country:'',sunrise:'',sunset:'',lt:new Date(),timeZone:'',defaults:''
    },
   // foreCast:[{dataWeek:[''], hourly:['']}]
  }
  async componentDidMount() {
      const res = await fetchData();
      this.setState({weather: res});
      const weekly = await fetchWeeklyData(this.state.weather.lat,this.state.weather.lon);
      this.setState({foreCast:weekly});
     // console.log(this.state.foreCast);
      const timeCalc = handleTime(this.state.weather.sunrise,this.state.weather.timeZone,this.state.weather.sunset,this.state.weather.lt,this.state.weather.main,this.state.weather)
      this.setState({weather: timeCalc});
    }
//function Storm
storm  =  async (name) => {
    const location = await fetchLocation(name);  
      this.setState({weather: location});
      const weekly = await fetchWeeklyData(this.state.weather.lat,this.state.weather.lon);
      this.setState({foreCast:weekly});      
      const timeCalc = handleTime(this.state.weather.sunrise,this.state.weather.timeZone,this.state.weather.sunset,this.state.weather.lt,this.state.weather.main, this.state.weather)
      this.setState({weather: timeCalc})
    }
  render() {
    const { weather, foreCast } = this.state;
    return (
      <div >
        <NavBar />
        <Container align="center" >
            <Search  weather={weather} storm={this.storm}/>
            <Cards weather={weather} foreCast={foreCast}/>
        </Container>
      </div>
    );
  }
}
export default App;
