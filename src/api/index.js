import axios from 'axios';

let DefaultLocation = 'London';

const url = `https://api.openweathermap.org/data/2.5/weather?q=${DefaultLocation}&units=metric&APPID=83887d83799dc9b74bffffc1b572c8a0`;

export const fetchData = async () => {
    try{
        const { data : { name, main: {temp, temp_max ,temp_min,humidity},weather:[{description,main}],sys:{country,sunrise,sunset},timezone} } = await  axios.get(url);                
                const simplifiedData ={
                name:name,
                temp:temp,
                max:temp_max,
                min:temp_min,
                humidity:humidity,
                description:description,
                main:main,
                country:country,
                sunrise:new Date(sunrise*1000),
                sunset:new Date(sunset*1000),
                lt:new Date(),
                timeZone:(timezone/60)/60,
            }
        console.log(await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${DefaultLocation}&units=metric&APPID=83887d83799dc9b74bffffc1b572c8a0`))
        return simplifiedData;
    } catch(error){
        console.log(error);
    }
}

export const fetchLocation = async (city) => {
    const urlo = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=83887d83799dc9b74bffffc1b572c8a0`;
    try {

        const { data : { name, main: {temp, temp_max ,temp_min,humidity},weather:[{description,main}],sys:{country,sunrise,sunset},timezone} } = await axios.get(urlo) 
        const simplifiedData ={
            name:name,
            temp:temp,
            max:temp_max,
            min:temp_min,
            humidity:humidity,
            description:description,
            main:main,
            country:country,
            sunrise:new Date(sunrise*1000),
            sunset:new Date(sunset*1000),
            lt:new Date(),
            timeZone:(timezone/60)/60,
        }
    
    return simplifiedData;
    } catch(error){
        console.log(error)
    }
} 

