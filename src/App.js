import React, { Component } from 'react';
import {Container} from '@material-ui/core';
import { Search, NavBar } from './components';
import { fetchData, fetchLocation } from './api';
import { handleTime} from './components';
import './App.module.css';


class App extends Component{
  state = {
    weather:{
     name:'',temp:'', max:'', min:'', humidity:'', description:'',main:'',country:'',sunrise:'',sunset:'',lt:new Date(),timeZone:'',defaults:''
    }
  }
  async componentDidMount() {
      const res = await fetchData();
      this.setState({weather: res});
      const timeCalc = handleTime(this.state.weather.sunrise,this.state.weather.timeZone,this.state.weather.sunset,this.state.weather.lt,this.state.weather.main,this.state.weather)
      this.setState({weather: timeCalc});
    }
//function Storm
storm  =  async (name) => {
    const location = await fetchLocation(name);  
      this.setState({weather: location});
      const timeCalc = handleTime(this.state.weather.sunrise,this.state.weather.timeZone,this.state.weather.sunset,this.state.weather.lt,this.state.weather.main, this.state.weather)
      this.setState({weather: timeCalc})
    }
  render() {
    const { weather } = this.state;
    return (
      <div >
        <NavBar />
        <Container align="center" >
            <Search  weather={weather} storm={this.storm}/>
        </Container>
      </div>
    );
  }
}
export default App;
