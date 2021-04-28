import React, {useState} from 'react';
import ReactCardFlip from 'react-card-flip';
import { Button, Card, CardContent, CardHeader, Container, Typography, Grid, CardMedia } from '@material-ui/core';
import styles from './Cards.module.css';

const Cards = ({weather, foreCast}) =>{
  const  [isFlipped, setIsFlipped] = useState(false);
  const handleClick = () =>{
      setIsFlipped(!isFlipped);
        }
        console.log(foreCast);
        let day = new Date().getDay()+1;
        let daysOfWeek = ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const foreCastCards = (
            foreCast ? ( 
                foreCast.dataWeek.slice(0,6).map((weeky,i)  =>{
                    return (
                            <Grid item className={styles.item} xs={12} md={2} key={i} >
                                <Card className={styles.cardStyle} variant="elevation">
                                <Typography className={styles.title}>  {daysOfWeek[(day+i)>6 ? ((day+i)-7):(day+i)]} </Typography>
                                    <Typography variant="h5"  className={styles.grades}> {String(weeky.max).slice(0,2)} °C </Typography>
                                    <Typography variant="body1" className={styles.grades}> {String(weeky.min).slice(0,2)}  °C</Typography>
                                    <CardMedia
                                        className={styles.media}
                                        image={`http://openweathermap.org/img/w/${weeky.icon}.png`}
                                        title="Contemplative Reptile"
                                    />  
                                    <Typography variant="caption" className={styles.grades}> {weeky.desc}</Typography>
                                </Card>
                            </Grid>
                            ) 
                            })
                            ): null
                        )
    return (
        <ReactCardFlip  isFlipped={isFlipped} flipSpeedFrontToBack={2}  flipDirection="horizontal">
            <div className={styles.App} >
                    < Grid className={styles.gridCont} container  xs={1} md={12} spacing ={3} onClick={handleClick} >              
                        {foreCastCards}
                    </Grid>
            </div>
            <div>
                <button onClick={handleClick} flipseedbacktofront={2}> click to flip to the front</button>
            </div>
        
        </ReactCardFlip>
    )
}
export default Cards;