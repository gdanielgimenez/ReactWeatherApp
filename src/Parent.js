import React from 'react'
import skyHigh from './images/skyHigh.jpg';

const Parent = (props) =>{
    return (
        <div  style={{
            backgroundImage: `url(${skyHigh})`,
            backgroundRepeat:'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition:'center top',
            backgroundAttachment:'fixed',
            width:"100%",
            height:"800px",
            margin:"0"

        }}>
            {props.children}
        </div>
        
    )
}
export default Parent;