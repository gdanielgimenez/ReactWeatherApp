import React, { Component } from 'react';
import {Container} from '@material-ui/core';
import { Search, NavBar,Cards } from './components';
import { fetchData, fetchLocation, fetchWeeklyData } from './api';
import { handleTime} from './components';
import  styles from './App.module.css';
import {PushToTalkButton, PushToTalkButtonContainer,ErrorPanel} from '@speechly/react-ui'

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
    //-----checking succes----
    if(location){
      console.log('success');
      this.setState({weather: location});
      const weekly = await fetchWeeklyData(this.state.weather.lat,this.state.weather.lon);
      this.setState({foreCast:weekly});      
      const timeCalc = handleTime(this.state.weather.sunrise,this.state.weather.timeZone,this.state.weather.sunset,this.state.weather.lt,this.state.weather.main, this.state.weather)
      this.setState({weather: timeCalc})
    } else{
      alert('error city not found, please type the name correctly');
    }
    //-----------------------  
   /* this.setState({weather: location});
      const weekly = await fetchWeeklyData(this.state.weather.lat,this.state.weather.lon);
      this.setState({foreCast:weekly});      
      const timeCalc = handleTime(this.state.weather.sunrise,this.state.weather.timeZone,this.state.weather.sunset,this.state.weather.lt,this.state.weather.main, this.state.weather)
      this.setState({weather: timeCalc})*/
    }
  render() {
    const { weather, foreCast } = this.state;
    return (
      <div className="container">
        <NavBar weather={weather} />
        <div className={styles.mic}>
        <PushToTalkButtonContainer className={styles.mic}>
              <PushToTalkButton />
              <ErrorPanel /> 
            </PushToTalkButtonContainer>
            </div>
        <Container align="center" >
            <Search  weather={weather} storm={this.storm}/>
            <Cards weather={weather} foreCast={foreCast}/>
        </Container> 
      </div>
    );
  }
}
export default App;
