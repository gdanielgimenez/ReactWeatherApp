import React, {useState} from 'react';
import ReactCardFlip from 'react-card-flip';
import { Card, Typography, Grid, CardMedia,Container } from '@material-ui/core';
import styles from './Cards.module.css';
import {Line} from 'react-chartjs-2';


const Cards = ({weather, foreCast}) =>{
  const  [isFlipped, setIsFlipped] = useState(false);
  const handleClick = () =>{
      setIsFlipped(!isFlipped);
        }
        let day = weather.localDay+1;
        
        //console.log(foreCast.hourlyData)
        let daysOfWeek = ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const foreCastCards = (
            foreCast ? ( 
                foreCast.dataWeek.slice(0,6).map((weeky,i)  =>{
                    return (
                            <Grid item className={styles.item} xs={12}  md={2} key={i} >
                                <Card className={styles.cardStyle} variant="elevation">
                                <Typography className={styles.title}>  {daysOfWeek[(day+i)>6 ? ((day+i)-7):(day+i)]} </Typography>
                                    <Typography   className={styles.grades}> {String(weeky.max).slice(0,2)} °C </Typography>
                                    <Typography  className={styles.grades}> {String(weeky.min).slice(0,2)}  °C</Typography>
                                    <CardMedia
                                        className={styles.media}
                                        image={`http://openweathermap.org/img/w/${weeky.icon}.png`}
                                        title=""
                                    />  
                                    <Typography  className={styles.grades}> {weeky.desc}</Typography>
                                </Card>
                            </Grid>
                            ) 
                            })
                            ): null
                        )
        let degrees = (foreCast ? ( foreCast.hourlyData.slice(0,12).map((degree) => degree.temp)) :(null));                   
        const Chart = 
         <Line 
          data={{
              labels:["in 1 hour", "in 2 hours", "in 3 hours", "in 4 hours", "in 5 hours", "in 6 hours", "in 7 hours", "in 8 hours" ,"in 9 hours", "in 10 hours", "in 11 hours", "in 12 hours"],
              datasets:[{
                label:"temperature in degrees celsius",
                data : degrees,
                
            }]
          }}
          options={{ maintainAspectRatio: false,
          backgroundColor:"royalblue" }}
          height={80}
          width={300}
         />

    return (
        <Container>
            <div className={styles.App} >
                    < Grid title="weekly forecast" className={styles.gridCont} container spacing ={2} >              
                        {foreCastCards}
                    </Grid>
            </div>
            <div className={styles.App}>
                <Grid className={styles.gridChart}>
                    {Chart}
                </Grid>
            </div>
        
        </Container>
    )
}
export default Cards;