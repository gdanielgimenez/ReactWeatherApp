export { default as Search } from './Search/Search';
export { default as NavBar } from './NavBar/NavBar';
export { default as Cards } from './Cards/Cards';

export const handleTime = (time,dif,sunset,localTime,main,weatherState) => {
  let difer= Number(dif)
  sunset.setHours(sunset.getHours()+ difer)
  let sunyBoi = sunset.toGMTString().slice(16,22)
  time.setHours(time.getHours() + difer)
  let sunSun = time.toGMTString().slice(16,22)
  let weather = weatherState
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
    return weather;
}