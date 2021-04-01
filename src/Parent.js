import React from 'react'
import greenForest from './images/greenForest.jpg';
import nightForest from './images/nightForest.jpg';
import auroraForest from './images/auroraForest.jpg';
import skyHigh from './images/skyHigh.jpg';

const Parent = (props) =>{
    return (
        <div  style={{
            backgroundImage: `url(${skyHigh})`,
            backgroundRepeat:'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition:' top center',
            backgroundAttachment:'fixed',
            //maxwidth:'767px',
            height:"800px",

        }}>
            {props.children}
        </div>
        
    )
}
export default Parent;