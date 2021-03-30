import React from 'react'
import greenForest from './images/greenForest.jpg';
import nightForest from './images/nightForest.jpg';
import auroraForest from './images/auroraForest.jpg';

const Parent = (props) =>{
    return (
        <div  style={{
            backgroundImage: `url(${auroraForest})`,
            backgroundRepeat:'no-repeat',
            backgroundSize: 'cover',
            baclgroundPosition:'top center',
            //width:"100%",
            height:"100vh",

        }}>
            {props.children}
        </div>
        
    )
}
export default Parent;