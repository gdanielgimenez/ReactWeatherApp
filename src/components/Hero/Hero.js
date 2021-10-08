import React from 'react';

const Hero = ()=>{
    let a=0;
    const change= ()=>{

        setTimeout(function(){return a+1 }, 10000);
    }
    const titles =   
            change();
            if(change===2)
    return(
    <div>
      { titles }
    </div>
)
}
export default Hero;